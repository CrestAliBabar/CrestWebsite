/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Dropdown from "../clientComponent/utils/dropdown";
import { getLayoutSettings, getNavigationTitle } from "@/sanity/sanity-utils";

export default async function Header() {
  const layoutSetting = await getLayoutSettings();
  const navTitles = await getNavigationTitle();

  return (
    <header
      style={{ backgroundColor: layoutSetting[0].backgroundColor.value }}
      className="text-black body-font w-full"
    >
      <div className="container mx-auto flex flex-wrap p-1.5 flex-col md:flex-row justify-center items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 md:justify-start "
        >
          <img
            src={layoutSetting[0].image.asset.url}
            alt="Bayave Logo"
            className="h-16 sm:h-24 mx-40"
          />
        </Link>
        <nav className="flex flex-wrap items-center text-base justify-center mx-auto">
          <ul className="flex grow justify-start flex-wrap items-center ml-30 md:ml-25">
            {navTitles.map((title) => {
              return (
                <Dropdown key={title._id} title={title.title}>
                  <li>
                    {title.pages.map((page: any) => {
                      return (
                        <Link
                          key={page._key}
                          href={{
                            pathname: `/${title.slug.current}/PageContent/${page._key}`,
                          }}
                          className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight"
                        >
                          {page.text}
                        </Link>
                      );
                    })}
                  </li>
                </Dropdown>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
