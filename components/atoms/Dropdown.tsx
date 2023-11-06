import React, { useState } from "react";

const Dropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="dark:bg-gray-800 w-64 shadow flex justify-end items-center relative">
      <button
        onClick={() => setOpen(!open)}
        className="relative z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md dark:text-white focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:bg-gray-800 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
        </svg>
      </button>
      {open && (
        <div className="absolute w-60 px-5 py-3 dark:bg-gray-800 bg-white rounded-lg shadow border dark:border-transparent -mt-48">
          <ul className="space-y-3 dark:text-white">
            <li className="font-medium">
              <a
                href="#"
                className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700"
              >
                <div className="mr-3">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Path 1 */}
                  </svg>
                </div>
                Account
              </a>
            </li>
            <li className="font-medium">
              <a
                href="#"
                className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700"
              >
                <div className="mr-3">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Path 2 */}
                  </svg>
                </div>
                Setting
              </a>
            </li>
            <hr className="dark:border-gray-700" />
            <li className="font-medium">
              <a
                href="#"
                className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-red-600"
              >
                <div className="mr-3 text-red-600">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Path 3 */}
                  </svg>
                </div>
                Logout
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
