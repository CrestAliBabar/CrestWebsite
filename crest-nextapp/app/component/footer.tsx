import React from 'react';
import {
  getLayoutSettings,
  getNavigationPageContent,
  getNavigationTitle,
} from '@/sanity/sanity-utils';
import Image from 'next/image';

export default async function Footer() {
  const layoutSetting = await getLayoutSettings();
  const navTitles = await getNavigationTitle();
  const footerCompanyContent = await getNavigationPageContent('company');
  const footerLegalContent = await getNavigationPageContent('legal');

  return (
    <footer
      className='bg-gray-900'
      aria-labelledby='footer-heading'
      style={{ backgroundColor: layoutSetting[0].backgroundColor.value }}
    >
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32'>
        <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
          <div className='space-y-12'>
            <Image
              className='h-12'
              src={layoutSetting[0].image.asset.url}
              alt='Company name'
              width={48}
              height={48}
            />
            {layoutSetting[0].footerSlogan != null ? (
              <p className='text-sm leading-6 text-gray-300'>
                {layoutSetting[0].footerSlogan}
              </p>
            ) : null}
          </div>
          <div className='mt-16 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0'>
            <div className='md:grid md:grid-cols-3 md:gap-8'>
              <div>
                <h3 className='text-sm font-semibold leading-6 text-white'>
                  Services
                </h3>
                <ul role='list' className='mt-6 space-y-4'>
                  {navTitles.map((title) => (
                    <li key={title._id}>
                      <a
                        href={`/${title.slug.current}`}
                        className='text-sm leading-6 text-gray-300 hover:text-white'
                      >
                        {title.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className='text-sm font-semibold leading-6 text-white'>
                  Company
                </h3>
                <ul role='list' className='mt-6 space-y-4'>
                  {footerCompanyContent[0].pages.map((page: any) => (
                    <li key={page._key}>
                      <a
                        href={`/${footerCompanyContent[0].slug.current}/PageContent/${page._key}`}
                        className='text-sm leading-6 text-gray-300 hover:text-white'
                      >
                        {page.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-10 md:mt-0'>
                <h3 className='text-sm font-semibold leading-6 text-white'>
                  Legal
                </h3>
                <ul role='list' className='mt-6 space-y-4'>
                  {footerLegalContent[0].pages.map((page: any) => (
                    <li key={page._key}>
                      <a
                        href={`/${footerLegalContent[0].slug.current}/PageContent/${page._key}`}
                        className='text-sm leading-6 text-gray-300 hover:text-white'
                      >
                        {page.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24'>
          <p className='text-xs leading-5 text-gray-400'>
            &copy; {new Date().getFullYear()} Crest, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
