'use client';

import { useState } from 'react';
import { createNewPost } from '@/lib/data';

export default function NewPost() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Category');
  const [postTitle, setPostTitle] = useState('');
  const [postMessage, setPostMessage] = useState('');

  async function handleSubmit(event: React.MouseEvent<HTMLElement>) {
    console.log(selectedCategory, postTitle, postMessage);
    event.preventDefault();
    const title = postTitle;
    const message = postMessage;
    const category = selectedCategory;
    createNewPost(title, message, category, 5);
    setSelectedCategory('Category');
    setPostTitle('');
    setPostMessage('');
  }
  return (
    <>
      <button
        className="block text-white bg-saffron-700 hover:bg-saffron-800 focus:ring-4 focus:outline-none focus:ring-saffron-300 font-medium rounded-lg text-sm m-6 px-5 py-2.5 text-center dark:bg-saffron-600 dark:hover:bg-saffron-700 dark:focus:ring-saffron-800"
        type="button"
        onClick={() => setIsFormOpen(!isFormOpen)}
      >
        Create Post
      </button>

      <div
        id="new-post-form"
        className={`${
          isFormOpen ? '' : 'hidden overflow-y-auto overflow-x-hidden'
        } fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Create New Post
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="crud-modal"
                onClick={() => setIsFormOpen(!isFormOpen)}
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
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <form className="p-4 md:p-5">
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-saffron-600 focus:border-saffron-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-saffron-500 dark:focus:border-saffron-500"
                    placeholder="Your title here"
                    required
                    onChange={(e) => setPostTitle(e.target.value)}
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="price"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-saffron-600 focus:border-saffron-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-saffron-500 dark:focus:border-saffron-500"
                    placeholder="(optional)"
                    required
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-saffron-500 focus:border-saffron-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-saffron-500 dark:focus:border-saffron-500"
                  >
                    <option>Category</option>
                    <option onClick={() => setSelectedCategory('marketplace')}>
                      Marketplace
                    </option>
                    <option onClick={() => setSelectedCategory('help')}>
                      Help
                    </option>
                    <option onClick={() => setSelectedCategory('discussions')}>
                      Discussions
                    </option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Body
                  </label>
                  <textarea
                    id="description"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-saffron-500 focus:border-saffron-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-saffron-500 dark:focus:border-saffron-500"
                    placeholder="Write your message here..."
                    onChange={(e) => setPostTitle(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="text-white inline-flex items-center bg-saffron-700 hover:bg-saffron-800 focus:ring-4 focus:outline-none focus:ring-saffron-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-saffron-600 dark:hover:bg-saffron-700 dark:focus:ring-saffron-800"
                onClick={(e) => {
                  handleSubmit(e);
                  setIsFormOpen(!isFormOpen);
                }}
              >
                <svg
                  className="me-1 -ms-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"></path>
                </svg>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
