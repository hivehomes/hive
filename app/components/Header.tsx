"use client";

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

  const users = data?.rows[0];

  return (



    <nav className='bg-white border-gray-200 dark:bg-gray-900 flex justify-between'>
      <div className='max-w-screen-xl flex flex-wrap p-4 justify-between'>
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <svg className='h-14' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" d="M256 21.332L75.168 136.406l-7.594 4.832l9.664 15.188l7.594-4.832L256 42.668l171.168 108.926l7.594 4.832l9.664-15.188l-7.594-4.832L256 21.332zm-144.908 5.74l-8.485 13.567l15.26 9.544l8.487-13.565l-15.262-9.548zM72.212 44.02L58.963 56.2l10.825 11.78L83.04 55.8L72.212 44.02zm305.13 10.818l-17.856 2.277l2.024 15.87l17.855-2.276l-2.023-15.872zM256 58.668l-148.127 94.264L99.34 183h312.994l-8.97-30.553L256 58.667zm0 43.846l57 19V169H199v-47.486l57-19zm0 18.972l-39 13V151h78v-16.514l-39-13zm-84.826 18.72l7.363 14.206l-15.98 8.283l-7.364-14.205l15.98-8.283zm266.724 45.745l-7.002 16.585l14.74 6.223l7.003-16.582l-14.742-6.225zM120.258 201l-17.07 69h312.994l-17.137-69H120.258zM151 231h210v18H151v-18zm-93.36 40.188l-17.58 3.863l3.434 15.628l17.58-3.864l-3.433-15.627zM122.187 288l-20.922 78H417.79l-20.997-78H122.186zm203.714 9.682l14.817 10.222l-9.088 13.17l-14.816-10.224l9.086-13.168zM151 327h210v18H151v-18zm302.44 18.64l-9.086 13.17l14.814 10.223l9.088-13.17l-14.817-10.222zM122.185 384l-20.922 78H417.79l-20.997-78H122.186zm103.683 3.213l8.49 13.56l-15.255 9.553l-8.492-13.558l15.256-9.555zM77.65 398.646l-6.744 14.51l16.323 7.588l6.743-14.508l-16.323-7.59zm303.14.815l7.312 14.23l-16.012 8.228l-7.31-14.232l16.01-8.225zM151 423h210v18H151v-18zm-23 57v16h48v-16h-48zm208 0v16h48v-16h-48z"/>
          </svg>
          {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Hive</span>
        </a>
      </div>
      <div className='flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
        <button type='button' className='flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600' id='user-menu-button' aria-expanded='false' data-dropdown-toggle='user-dropdown' data-dropdown-placement='bottom'>
          <span className='sr-only'>Open user menu</span>
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
