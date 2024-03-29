import React from "react";
import Link from "next/link";
import Dropdown from "../clientComponent/utils/dropdown";
import logo from "@/public/bavaye.png";

export const Header = () => {
  return (
    <header
      style={{ backgroundColor: "#69488E" }}
      className="text-black body-font w-full"
    >
      <div className="container mx-auto flex flex-wrap p-1.5 flex-col md:flex-row justify-center items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 md:justify-start "
        >
          <img
            src={logo.src}
            alt="Bayave Logo"
            className="h-16 sm:h-24 mx-40"
          />
        </Link>
        <nav className="flex flex-wrap items-center text-base justify-center mx-auto">
          <ul className="flex grow justify-start flex-wrap items-center ml-30 md:ml-25">
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
                  href="/Services/SCA-Services"
                  Due-Diligence
                  className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight"
                >
                  SCA Services
                </Link>
              </li>
              <li>
                <Link
                  href="/Services/Due-Diligence"
                  className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight"
                >
                  Due Diligence
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
