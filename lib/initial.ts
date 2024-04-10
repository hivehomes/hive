import { sql } from "@vercel/postgres";

export default async function createTables() {
    const createUser = `CREATE TABLE User (
        id SERIAL PRIMARY KEY, -- Auto-incrementing ID
        email VARCHAR(255) UNIQUE NOT NULL,
        first_name VARCHAR(50) NOT NULL,
        last_name VARCHAR(50) NOT NULL,
        password VARCHAR(255) NOT NULL, -- Consider securely hashing the password
        phone_number VARCHAR(20), -- Optional, VARCHAR allows for various formats
        user_type_id INTEGER NOT NULL, 
        unit_id INTEGER,
    );`;



    const createUserTypeEnum = `CREATE TYPE user_role AS ENUM ('resident', 'staff', 'management', 'admin');`;

    const createUserTypeTable = `CREATE TABLE UserTypes (
        id SERIAL PRIMARY KEY,
        type user_role NOT NULL, 
        permissions INTEGER[] -- Array of integer foreign keys 
    );`;

    const createBuildingUnitTable = `CREATE TABLE building_unit (
        building_unit_id SERIAL PRIMARY KEY,
        unit_num VARCHAR(10) NOT NULL,  -- Example: Unit 2A, G10, etc.
        rooms INTEGER NOT NULL,
        size INTEGER NOT NULL,          -- Size in square feet
        primary_resident_id INTEGER,    -- Foreign key to the 'User' table 
    );`;


    const createBulletinEnum = `CREATE TYPE post_type AS ENUM ('marketplace', 'help', 'discussion');`;

    const createBulletinTable = `CREATE TABLE Bulletin (
        id SERIAL PRIMARY KEY,
        poster_id INTEGER NOT NULL, 
        post_type post_type NOT NULL,
        title VARCHAR(100) NOT NULL,
        body TEXT,

    );`;

    const createDeliveryTable = `CREATE TABLE Delivery (
        id SERIAL PRIMARY KEY,
        recipient_id INTEGER NOT NULL,
        logger_id INTERGER NOT NULL
        shipper VARCHAR(100),
        tracking_number VARCHAR(50),
        date DATE NOT NULL,
        status VARCHAR(50),
    );`;


    const amenityTable = `CREATE TABLE amenity (
        id SERIAL PRIMARY KEY,
        booker_id INTERGER NOT NULL
        name VARCHAR(50) NOT NULL, 
        open_time TIME NOT NULL,
        close_time TIME NOT NULL
    );`;

    const createBookingTable = `CREATE TABLE booking (
        id SERIAL PRIMARY KEY,
        amenity_id INTEGER NOT NULL,
        booker_id INTEGER NOT NULL,
        book_start_time TIMESTAMP NOT NULL,
        book_end_time TIMESTAMP NOT NULL,
        status VARCHAR(50), -- E.g., 'Pending', 'Confirmed', 'Cancelled' 
    );`;


    const createRepairTable = `CREATE TABLE repair (
        id SERIAL PRIMARY KEY,
        subject VARCHAR(100) NOT NULL, 
        description TEXT,              
        tenant_id INTEGER NOT NULL,    
        unit_id INTEGER NOT NULL,
        status VARCHAR(50),
    );`;




    // FOREIGN KEYS

    const createUserFKs = `FOREIGN KEY (user_type_id) REFERENCES user_types(id),
        FOREIGN KEY (unit_id) REFERENCES building_units(id)`;
    const buildingUnitFKs = `FOREIGN KEY (primary_resident_id) REFERENCES User(id)`;
    const createBulletinFKs = 'FOREIGN KEY (poster_id) REFERENCES User(id)';
    const createDeliveryFKs = 'FOREIGN KEY (recipient_id) REFERENCES building_unit(building_unit_id)';
    const createBookingFKs = `FOREIGN KEY (amenity_id) REFERENCES amenity(id),
        FOREIGN KEY (booker_id) REFERENCES User(id)`;
    const createRepairFKs = `FOREIGN KEY (tenant_id) REFERENCES User(id),
        FOREIGN KEY (unit_id) REFERENCES building_unit(building_unit_id)`;
}