import React from "react";
import { FaLinkedin } from "react-icons/fa"; // Ensure you have 'react-icons' installed

const GetUpdatesComponent = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-6">Get updates</h2>
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white rounded-md p-1 inline-flex items-center justify-center hover:bg-blue-700 transition ease-in duration-200"
      >
        <FaLinkedin className="text-2xl" />
        <span className="ml-2">LinkedIn</span>
      </a>
    </div>
  );
};

export default GetUpdatesComponent;

/* 
<button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
<svg class="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
<path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
</svg>
Buy now
</button>
*/
