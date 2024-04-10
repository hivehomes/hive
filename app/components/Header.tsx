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



    <nav className='bg-white border-gray-200 dark:bg-gray-900 flex justify-between items-center text-yellow-400'>
      <div className='flex flex-wrap p-4 justify-between items-center'>
        <a href="/" className="flex mr-5 items-center space-x-3 rtl:space-x-reverse">
          <svg className='h-14' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" d="M256 21.332L75.168 136.406l-7.594 4.832l9.664 15.188l7.594-4.832L256 42.668l171.168 108.926l7.594 4.832l9.664-15.188l-7.594-4.832L256 21.332zm-144.908 5.74l-8.485 13.567l15.26 9.544l8.487-13.565l-15.262-9.548zM72.212 44.02L58.963 56.2l10.825 11.78L83.04 55.8L72.212 44.02zm305.13 10.818l-17.856 2.277l2.024 15.87l17.855-2.276l-2.023-15.872zM256 58.668l-148.127 94.264L99.34 183h312.994l-8.97-30.553L256 58.667zm0 43.846l57 19V169H199v-47.486l57-19zm0 18.972l-39 13V151h78v-16.514l-39-13zm-84.826 18.72l7.363 14.206l-15.98 8.283l-7.364-14.205l15.98-8.283zm266.724 45.745l-7.002 16.585l14.74 6.223l7.003-16.582l-14.742-6.225zM120.258 201l-17.07 69h312.994l-17.137-69H120.258zM151 231h210v18H151v-18zm-93.36 40.188l-17.58 3.863l3.434 15.628l17.58-3.864l-3.433-15.627zM122.187 288l-20.922 78H417.79l-20.997-78H122.186zm203.714 9.682l14.817 10.222l-9.088 13.17l-14.816-10.224l9.086-13.168zM151 327h210v18H151v-18zm302.44 18.64l-9.086 13.17l14.814 10.223l9.088-13.17l-14.817-10.222zM122.185 384l-20.922 78H417.79l-20.997-78H122.186zm103.683 3.213l8.49 13.56l-15.255 9.553l-8.492-13.558l15.256-9.555zM77.65 398.646l-6.744 14.51l16.323 7.588l6.743-14.508l-16.323-7.59zm303.14.815l7.312 14.23l-16.012 8.228l-7.31-14.232l16.01-8.225zM151 423h210v18H151v-18zm-23 57v16h48v-16h-48zm208 0v16h48v-16h-48z"/>
          </svg>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-black">Hive</span>
        </a>
      </div>
      <div className='mr-5 flex items-center justify-between w-full md:flex md:w-auto md:order-1' id='navbar-user'>
        <div>
          <button type='button'>
            <svg className='w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500' xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24">
              <path fill="currentColor" d="M17.4 9C17 7.8 16.2 7 15 6.5V5h-1v1.4h-.4c-1.1 0-2 .4-2.8 1.2l-.4.4L9 7.5c-.3-.1-.6-.2-1-.2c-.6 0-1.2.2-1.7.6c-.6.4-.9.9-1.1 1.4c-.2.7-.2 1.3 0 2c.3.7.6 1.2 1.1 1.5c-.4 1.5-.1 2.8 1 3.9c.8.8 1.7 1.2 2.8 1.2c.5 0 .8 0 1.1-.1c.6.8 1.4 1.3 2.4 1.3c.3 0 .7 0 1-.1c.6-.2 1-.6 1.4-1.1c.4-.6.6-1.1.6-1.7c0-.4 0-.7-.1-1l-.5-1.6l.6-.4c.8-.8 1.2-1.9 1.1-3.1H19V9h-1.6m-9.7 2.3c-.6-.3-.8-.7-.6-1.3c.2-.6.6-.8 1.2-.6l3.2 1.2c-1.6.8-2.8 1-3.8.7m6.3 5.6c-.6.2-1 0-1.3-.6c-.3-1-.1-2.2.7-3.8l1.2 3.1c.2.7 0 1.1-.6 1.3m1.2-5.3l-.6-1.6v-.1l-.3-.3h-.1L12.6 9c.4-.3.8-.5 1.3-.5s1 .2 1.4.6c.4.4.6.8.6 1.3c-.2.3-.4.8-.7 1.2Z"/>
            </svg>
          </button>
          {/* <img className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="/docs/images/people/profile-picture-5.jpg" alt="Bordered avatar"> */}
        </div>
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
