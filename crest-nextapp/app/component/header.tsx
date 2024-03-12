import React from "react";
import Link from "next/link";
import Dropdown from "../clientComponent/utils/dropdown";

export const Header = () => {
  return (
    <header className=" bg-purple-800 text-black body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link  href= "/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl text-white">Crest</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <ul className="flex grow justify-start flex-wrap items-center">
          <Dropdown title="Training">
            <li>
              <Link
                href="/Training/LCD-Seminar"
                className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight"
              >
                LCD Seminar
              </Link>
            </li>
            <li>
              <Link
                href="/Training/OSB-Seminar"
                className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight"
              >
                OSB Seminar
              </Link>
            </li>
          </Dropdown>
          <Dropdown title="Services">
            <li>
              <Link
                href="/Services/Due-Diligence"
                className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight"
              >
                Due Diligence
              </Link>
            </li>
            <li>
              <Link
                href="/Services/SCA-Services"
                className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight"
              >
                
                SCA Services
              </Link>
            </li>
          </Dropdown>
          <Dropdown title="Consulting">
            <li>
              <Link
                href="/Consulting/Project"
                className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight"
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                href="/Consulting/Advisory"
                className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight"
              >
                Advisory
              </Link>
            </li>
          </Dropdown>
          <Dropdown title="Company">
            <li>
              <Link
                href="/Company/Customer"
                className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight"
              >
                Customer
              </Link>
            </li>
            <li>
              <Link
                href="/Company/Prof"
                className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight"
              >
                Prof. Riehle
              </Link>
            </li>
          </Dropdown>
          </ul>

        </nav>
      </div>
    </header>
  );
};

export default Header;
