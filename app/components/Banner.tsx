export default function Banner() {
  return (
    <div
      id="marketing-banner"
      className="fixed z-50 flex flex-col md:flex-row justify-between w-[calc(100%-2rem)] p-4 -translate-x-1/2 bg-saffron-100 border border-gray-100 rounded-lg shadow-sm lg:max-w-7xl left-1/2 top-6 dark:bg-gray-700 dark:border-gray-600"
    >
      <div className="flex flex-col items-start mb-3 me-4 md:items-center md:flex-row md:mb-0">
        <svg
          className="flex-shrink-0 inline w-4 h-4 me-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <div className="flex items-center text-sm font-normal text-gray-600 dark:text-gray-400 gap-2">
          <p className="font-semibold">Elevator 2 Maintenance:</p> Monday, March
          18th: Please be advised that Elevator 2 will undergo routine
          maintenance on Monday, March 18th, from 9:00 AM to 12:00 PM. During
          this period, please expect delays in elevator service.
        </div>
      </div>
      <div className="flex items-center flex-shrink-0">
        <button
          type="button"
          className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="w-3 h-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close banner</span>
        </button>
      </div>
    </div>
  );
}
