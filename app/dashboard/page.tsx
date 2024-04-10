import Link from 'next/link';
import { getUserData } from '@/lib/data';
import Banner from '@/app/components/Banner';
import BulletinBoard from '@/app/components/BulletinBoard';

export default async function UserDashboard() {
  // const { id } = await getUserData('jim.bean@example.com');

  return (
    <div className="grid grid-cols-4 grid-rows-6 gap-4">
      <div className="col-span-4 border-2 border-red-200">
        <Banner />
      </div>
      <div className="row-start-2 border-2  max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link href="/deliveries">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Deliveries{' '}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <Link
          href="/deliveries"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-saffron-700 rounded-lg hover:bg-saffron-800 focus:ring-4 focus:outline-none focus:ring-saffron-300 dark:bg-saffron-600 dark:hover:bg-saffron-700 dark:focus:ring-saffron-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
      <div className="col-start-1 row-start-3 border-2 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link href="/amenities">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Amenities{' '}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <Link
          href="/amenities"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-saffron-700 rounded-lg hover:bg-saffron-800 focus:ring-4 focus:outline-none focus:ring-saffron-300 dark:bg-saffron-600 dark:hover:bg-saffron-700 dark:focus:ring-saffron-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
      <div className="col-start-1 row-start-4 border-2 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link href="/resources">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Resources{' '}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <Link
          href="/resources"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-saffron-700 rounded-lg hover:bg-saffron-800 focus:ring-4 focus:outline-none focus:ring-saffron-300 dark:bg-saffron-600 dark:hover:bg-saffron-700 dark:focus:ring-saffron-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
      <div className="col-start-1 row-start-5 border-2 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link href="/dashboard">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Local Offers{' '}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <Link
          href="/dashboard"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-saffron-700 rounded-lg hover:bg-saffron-800 focus:ring-4 focus:outline-none focus:ring-saffron-300 dark:bg-saffron-600 dark:hover:bg-saffron-700 dark:focus:ring-saffron-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
      <div className="col-start-1 row-start-6 border-2 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link href="/resources">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Resources{' '}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <Link
          href="/resources"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-saffron-700 rounded-lg hover:bg-saffron-800 focus:ring-4 focus:outline-none focus:ring-saffron-300 dark:bg-saffron-600 dark:hover:bg-saffron-700 dark:focus:ring-saffron-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
      <div className="col-span-2 row-span-5 col-start-2 row-start-2 border-2 ">
        <Link href="/bulletin" className="text-gray-500 text-2xl">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white m-6">
            Bulletin Board
          </h5>
        </Link>
        <BulletinBoard />
      </div>
      <div className="row-span-5 col-start-4 row-start-2 border-2 ">
        Weekly News
      </div>
    </div>
  );
}
