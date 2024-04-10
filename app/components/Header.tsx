import { sql } from '@vercel/postgres';

export default async function Header() {
  let data;
  try {
    data =
      await sql`SELECT users.first_name, users.last_name, building_unit.unit_num
      FROM users
      LEFT JOIN building_unit ON users.unit_id = building_unit.building_unit_id
      WHERE users.id = 4;`;
  } catch (error) {
    console.error('Error running query', error);
  }
  console.log('data', data)
  // const { rows: users } = data;

  return (
    <header className="container flex justify-between w-full ">
      <h1>330 7th Ave</h1>
      <div className="flex justify-around gap-2">
        {/* <h1>{`${users[0].first_name} ${users[0].last_name}, #${users[0].unit_num}`}</h1> */}
        <button>Logout</button>
      </div>
    </header>
  );
}
