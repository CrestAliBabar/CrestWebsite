/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import Dropdown from '../clientComponent/utils/dropdown';
import { getLayoutSettings, getNavigationTitle } from '@/sanity/sanity-utils';
import { page } from '@/types/PageContentType';
import NavComponent from '../clientComponent/utils/NavComponent';

export default async function Header() {
  const layoutSetting = await getLayoutSettings();
  const navTitles = await getNavigationTitle();

  return (
    <header
      style={{ backgroundColor: layoutSetting[0].backgroundColor.value }}
      className='sticky top-0 z-50 w-full'
    >
      <div className='container mx-auto flex flex-wrap p-1.5 flex-col md:flex-row justify-between items-center'>
        <Link
          href='/'
          className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 md:justify-start '
        >
          <img
            src={layoutSetting[0].image.asset.url}
            alt='Crest Logo'
            className=' h-28 lg:ml-20 sm:mx-auto sm:ml-10'
          />
        </Link>
        <NavComponent>
          <nav className='flex flex-wrap items-center text-base justify-between mx-auto mr-10'>
            <ul className='flex flex-col md:flex-row grow justify-start md:justify-end items-start md:items-center md:ml-25 text-xl space-y-2 md:space-y-0 md:space-x-4'>
              {navTitles.map((title) => (
                <Dropdown
                  key={title._id}
                  title={title.title}
                  titleSlug={title.slug.current}
                >
                  {title.pages && (
                    <li>
                      {title.pages.map((page: page) => (
                        <Link
                          key={page._key}
                          href={{
                            pathname: `/${title.slug.current}/PageContent/${page._key}`,
                          }}
                          className='font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight'
                        >
                          {page.text}
                        </Link>
                      ))}
                    </li>
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
