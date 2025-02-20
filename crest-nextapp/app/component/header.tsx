/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Dropdown from "../clientComponent/utils/dropdown";
import { getLayoutSettings, getNavigationTitle } from "@/sanity/sanity-utils";
import { page } from "@/types/PageContentType";
import NavComponent from "../clientComponent/utils/NavComponent";

export default async function Header() {
  const layoutSetting = await getLayoutSettings();
  let navTitles = await getNavigationTitle();

  // Sort navTitles based on titleorder (convert string to number)
  navTitles = navTitles.sort((a, b) => Number(a.titleorder) - Number(b.titleorder));

  return (
    <header
      style={{ backgroundColor: layoutSetting[0].backgroundColor.value }}
      className="sticky top-0 z-50 w-full py-4 shadow-md"
    >
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row justify-between items-center">
        {/* Navigation Component */}
        <NavComponent>
          <nav className="w-full flex flex-col md:flex-row justify-center items-center">
            <ul className="flex flex-col md:flex-row justify-center items-center text-xl space-y-2 md:space-y-0 md:space-x-6">
              {/* Hardcoded Home Link Styled Like Other Nav Titles */}
              <li>
                <Link
                  href="/"
                  className="font-medium text-white flex py-2 px-5 leading-tight"
                >
                  Home
                </Link>
              </li>

              {/* Sorted Dynamic Navigation Links */}
              {navTitles.map((title) => (
                <Dropdown key={title._id} title={title.title} titleSlug={title.slug.current}>
                  {title.pages && (
                    <ul className="bg-white shadow-md rounded-md p-2">
                      {title.pages.map((page: page) => (
                        <li key={page._key}>
                          <Link
                            href={{
                              pathname: `/${title.slug.current}/PageContent/${page._key}`,
                            }}
                            className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-4 leading-tight"
                          >
                            {page.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </Dropdown>
              ))}
            </ul>
          </nav>
        </NavComponent>
      </div>
    </header>
  );
}
