import Link from 'next/link';
import { getUserData } from '@/lib/data';
import Banner from '@/app/components/Banner';
import BulletinBoard from '@/app/components/BulletinBoard';

export default async function UserDashboard() {
  // const { id } = await getUserData('jim.bean@example.com');

  return (
    <>
      <Banner />
      <div className="grid grid-cols-4 grid-rows-5 gap-4 mx-24">
        <div className="col-start-1 row-start-1  container flex flex-col justify-center items-start max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <svg
            className="h-8 w-8 text-saffron-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {' '}
            <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />{' '}
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />{' '}
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />{' '}
            <line x1="12" y1="22.08" x2="12" y2="12" />
          </svg>
          <Link href="/deliveries">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Deliveries{' '}
            </h5>
          </Link>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            package delivered on 4/6/24 4:34 PM
          </p>
          <Link
            href="/deliveries"
            className="inline-flex items-center text-sm font-medium text-center text-saffron-700 dark:text-saffron-200"
          >
            Get more info
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
        <div className="col-start-1 row-start-2 container flex flex-col justify-center items-start max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <svg
            className="h-8 w-8 text-saffron-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {' '}
            <path stroke="none" d="M0 0h24v24H0z" />{' '}
            <circle cx="12" cy="12" r="9" />{' '}
            <path d="M9 3.6c5 6 7 10.5 7.5 16.2" />{' '}
            <path d="M6.4 19c3.5-3.5 6-6.5 14.5-6.4" />{' '}
            <path d="M3.1 10.75c5 0 9.814-.38 15.314-5" />
          </svg>
          <Link href="/amenities">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Amenities{' '}
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
          <Link
            href="/deliveries"
            className="inline-flex items-center text-sm font-medium text-center text-saffron-700 dark:text-saffron-200"
          >
            Get more info
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
        <div className="col-start-1 row-start-3 container flex flex-col justify-center items-start max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <svg
            className="h-8 w-8 text-saffron-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {' '}
            <path stroke="none" d="M0 0h24v24H0z" />{' '}
            <circle cx="12" cy="12" r="9" />{' '}
            <line x1="12" y1="8" x2="12.01" y2="8" />{' '}
            <polyline points="11 12 12 12 12 16 13 16" />
          </svg>
          <Link href="/resources">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Resources{' '}
            </h5>
          </Link>
          <Link
            href="/deliveries"
            className="inline-flex items-center text-sm font-medium text-center text-saffron-700 dark:text-saffron-200"
          >
            Get more info
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
        <div className="col-start-1 row-start-4 container flex flex-col justify-center items-start max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <svg
            className="h-8 w-8 text-saffron-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {' '}
            <path stroke="none" d="M0 0h24v24H0z" />{' '}
            <line x1="9" y1="15" x2="15" y2="9" />{' '}
            <circle cx="9.5" cy="9.5" r=".5" fill="currentColor" />{' '}
            <circle cx="14.5" cy="14.5" r=".5" fill="currentColor" />{' '}
            <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7a2.2 2.2 0 0 0 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1a2.2 2.2 0 0 0 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55 v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55 v-1" />
          </svg>
          <Link href="/dashboard">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Local Offers{' '}
            </h5>
          </Link>
          <Link
            href="/deliveries"
            className="inline-flex items-center text-sm font-medium text-center text-saffron-700 dark:text-saffron-200"
          >
            Get more info
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
        <div className="col-span-2 row-span-5 col-start-2 row-start-1 mx-2 my-4">
          <Link href="/bulletin" className="text-gray-500 text-2xl flex gap-2">
            <svg
              className="h-8 w-8 text-saffron-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {' '}
              <path stroke="none" d="M0 0h24v24H0z" />{' '}
              <rect x="4" y="4" width="16" height="4" rx="1" />{' '}
              <rect x="4" y="12" width="6" height="8" rx="1" />{' '}
              <line x1="14" y1="12" x2="20" y2="12" />{' '}
              <line x1="14" y1="16" x2="20" y2="16" />{' '}
              <line x1="14" y1="20" x2="20" y2="20" />
            </svg>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Bulletin Board
            </h5>
          </Link>
          <BulletinBoard />
        </div>
        <div className="row-span-5 col-start-4 row-start-1 mx-2 my-4 flex flex-col gap-2">
          <div className="flex gap-2">
            <svg
              className="h-8 w-8 text-saffron-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
              />
            </svg>

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Weekly News
            </h5>
          </div>

          <p>
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order. Here are the biggest enterprise
            technology acquisitions of 2021 so far, in reverse chronological
            order.
          </p>
        </div>
      </div>
    </>
  );
}
