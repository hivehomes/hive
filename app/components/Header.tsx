import { sql } from '@vercel/postgres';
// import { Avatar, Dropdown, Navbar } from 'flowbite-react';

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

  // const { rows: users } = data;
  const users = data?.rows[0];
  // console.log('data: ', data.rows[0]);

  return (
    // <Navbar fluid rounded>
    //   <Navbar.Brand href='#'>
    //     <img src=''></img>
    //   </Navbar.Brand>
    // </Navbar>



    <nav className='bg-white border-gray-200 dark:bg-gray-900'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
      </div>
      <div className='flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
        <button type='button' className='flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600' id='user-menu-button' aria-expanded='false' data-dropdown-toggle='user-dropdown' data-dropdown-placement='bottom'>
          <span className='sr-only'>Open user menu</span>
          <img className='w-8 h-8 rounded-full' src="/docs/images/people/profile-picture-3.jpg" alt="user photo"></img>
        </button>
        {/* DROPDOWN MENU */}
        <div className='z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600' id='user-dropdown'>
          <div className='px-4 py-3'>
            <span className='block text-sm text-gray-900 dark:text-white'>INSERT FIRST NAME HERE</span>
            <span className='block text-sm  text-gray-500 truncate dark:text-gray-400'>INSERT EMAIL HERE</span>
          </div>
          <ul className='py-2' aria-labelledby='user-menu-button'>
            <li>
              <a href='#' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>Dashboard</a>
            </li>
            <li>
              <a href='#' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>Contact</a>
            </li>
          </ul>
        </div>
        <button data-collapse-toggle='navbar-user' type='button' className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600' aria-controls='navbar-user' aria-expanded='false'>
          <span className='sr-only'>Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
      </div>
      <div className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1' id='navbar-user'>
        <ul className='flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
          <li>
            <a href='#' className='block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500' aria-current='page'>Home</a>
          </li>
          <li>
            <a href='#' className='block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500' aria-current='page'>Dashboard</a>
          </li>
          <li>
            <a href='#' className='block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500' aria-current='page'>Deliveries</a>
          </li>
        </ul>
      </div>
    </nav>



    // <header className="container flex justify-between w-full ">
    //   <h1>330 7th Ave</h1>
    //   <div className="flex justify-around gap-2">
    //     {/* <h1>{`${users[0].first_name} ${users[0].last_name}, #${users[0].unit_num}`}</h1> */}
    //     <h1>{`${users.first_name} ${users.last_name}, #${users.unit_num}`}</h1>
    //     <button>Logout</button>
    //   </div>
    // </header>
  );
}
