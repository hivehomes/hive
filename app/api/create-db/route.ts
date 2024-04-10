import { sql, Client } from "@vercel/postgres";

const db = new Client({
    host: PROCESS.ENV.LOCAL.POSTGRES_HOST, //  Or your database host
    port: 5432,        //  Standard PostgreSQL port
    database: 'your_db_name',
    user: 'your_db_user',
    password: 'your_db_password',
});

async function runQuery(query: any) {
    try {
        const result = await sql(query);
        console.log('Query executed successfully:', query);
        return result;
    } catch (error) {
        console.error('Error executing query:', query, error);
        throw error;
    }
}

export default async function createTablesAndAddForeignKeys() {
    // Step 1: Create enums and tables without foreign key constraints
    const createUserTypeEnum = `CREATE TYPE user_role AS ENUM ('resident', 'staff', 'management', 'admin');`;
    await runQuery(createUserTypeEnum);

    const createBulletinEnum = `CREATE TYPE post_type AS ENUM ('marketplace', 'help', 'discussion');`;
    await runQuery(createBulletinEnum);

    const createUserTypeTable = `CREATE TABLE user_types (
        id SERIAL PRIMARY KEY,
        type user_role NOT NULL,
        permissions INTEGER[]
    );`;
    await runQuery(createUserTypeTable);

    const createUserTable = `CREATE TABLE "user" (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        first_name VARCHAR(50) NOT NULL,
        last_name VARCHAR(50) NOT NULL,
        password VARCHAR(255) NOT NULL,
        phone_number VARCHAR(20),
        user_type_id INTEGER NOT NULL, 
        unit_id INTEGER
    );`;
    await runQuery(createUserTable);

    const createBuildingUnitTable = `CREATE TABLE building_unit (
        building_unit_id SERIAL PRIMARY KEY,
        unit_num VARCHAR(10) NOT NULL,
        rooms INTEGER NOT NULL,
        size INTEGER NOT NULL,
        primary_resident_id INTEGER
    );`;
    await runQuery(createBuildingUnitTable);

    const createBulletinTable = `CREATE TABLE bulletin (
        id SERIAL PRIMARY KEY,
        poster_id INTEGER NOT NULL,
        post_type post_type NOT NULL,
        title VARCHAR(100) NOT NULL,
        body TEXT
    );`;
    await runQuery(createBulletinTable);

    const createDeliveryTable = `CREATE TABLE delivery (
        id SERIAL PRIMARY KEY,
        recipient_id INTEGER NOT NULL,
        logger_id INTEGER NOT NULL,
        shipper VARCHAR(100),
        tracking_number VARCHAR(50),
        date DATE NOT NULL,
        status VARCHAR(50)
    );`;
    await runQuery(createDeliveryTable);

    const amenityTable = `CREATE TABLE amenity (
        id SERIAL PRIMARY KEY,
        name VARCHAR(50) NOT NULL, 
        open_time TIME NOT NULL,
        close_time TIME NOT NULL
    );`;
    await runQuery(amenityTable);

    const createBookingTable = `CREATE TABLE booking (
        id SERIAL PRIMARY KEY,
        amenity_id INTEGER NOT NULL,
        booker_id INTEGER NOT NULL,
        book_start_time TIMESTAMP NOT NULL,
        book_end_time TIMESTAMP NOT NULL,
        status VARCHAR(50)
    );`;
    await runQuery(createBookingTable);

    const createRepairTable = `CREATE TABLE repair (
        id SERIAL PRIMARY KEY,
        subject VARCHAR(100) NOT NULL, 
        description TEXT,              
        tenant_id INTEGER NOT NULL,    
        unit_id INTEGER NOT NULL,
        status VARCHAR(50)
    );`;
    await runQuery(createRepairTable);

    // Step 2: Alter tables to add foreign key constraints
    const alterUserToAddFKs = `
        ALTER TABLE "user" ADD CONSTRAINT fk_user_usertype FOREIGN KEY (user_type_id) REFERENCES user_types(id);
        ALTER TABLE "user" ADD CONSTRAINT fk_user_unit FOREIGN KEY (unit_id) REFERENCES building_unit(building_unit_id);
    `;
    await runQuery(alterUserToAddFKs);

    const alterBuildingUnitToAddFK = `ALTER TABLE building_unit ADD CONSTRAINT fk_buildingunit_user FOREIGN KEY (primary_resident_id) REFERENCES "user"(id);`;
    await runQuery(alterBuildingUnitToAddFK);

    const alterBulletinToAddFK = `ALTER TABLE bulletin ADD CONSTRAINT fk_bulletin_user FOREIGN KEY (poster_id) REFERENCES "user"(id);`;
    await runQuery(alterBulletinToAddFK);

    // Add missing FK constraints for delivery, booking, and repair tables
    const alterDeliveryToAddFKs = `
        ALTER TABLE delivery ADD CONSTRAINT fk_delivery_recipient FOREIGN KEY (recipient_id) REFERENCES building_unit(building_unit_id);
        ALTER TABLE delivery ADD CONSTRAINT fk_delivery_logger FOREIGN KEY (logger_id) REFERENCES "user"(id);
    `;
    await runQuery(alterDeliveryToAddFKs);

    const alterBookingToAddFKs = `
        ALTER TABLE booking ADD CONSTRAINT fk_booking_amenity FOREIGN KEY (amenity_id) REFERENCES amenity(id);
        ALTER TABLE booking ADD CONSTRAINT fk_booking_booker FOREIGN KEY (booker_id) REFERENCES "user"(id);
    `;
    await runQuery(alterBookingToAddFKs);

    const alterRepairToAddFKs = `
        ALTER TABLE repair ADD CONSTRAINT fk_repair_tenant FOREIGN KEY (tenant_id) REFERENCES "user"(id);
        ALTER TABLE repair ADD CONSTRAINT fk_repair_unit FOREIGN KEY (unit_id) REFERENCES building_unit(building_unit_id);
    `;
    await runQuery(alterRepairToAddFKs);

    console.log('All tables and foreign keys created successfully.');

    return;
}