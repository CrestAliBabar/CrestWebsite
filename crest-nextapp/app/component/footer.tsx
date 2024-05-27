import React from 'react';
import { getFooter, getLayoutSettings } from '@/sanity/sanity-utils';
import Image from 'next/image';
import { urlFor } from '@/sanity/sanity-utils';

export default async function Footer() {
  const layoutSetting = await getLayoutSettings();
  const footer = await getFooter();

  const footerLogoUrl = urlFor(footer[0].image.asset).url();
  const footerSlogan = footer[0].footerSlogan;
  const footerCopyRight = footer[0].footerCopyRight;
  const footerTextSections = footer[0].footerTextSections || [];

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
              src={footerLogoUrl}
              alt='Company logo'
              width={48}
              height={48}
            />
            {footerSlogan && (
              <p className='text-sm leading-6 text-gray-300'>{footerSlogan}</p>
            )}
          </div>
          <div className='mt-16 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0'>
            <div
              className='md:grid md:grid-cols-3 md:gap-8'
              style={{
                gridTemplateColumns: `repeat(${footerTextSections.length}, minmax(0, 1fr))`,
              }}
            >
              {footerTextSections.map((section: any) => (
                <div key={section._key}>
                  <h3 className='text-sm font-semibold leading-6 text-white'>
                    {section.sectionTitle}
                  </h3>
                  <ul role='list' className='mt-6 space-y-4'>
                    {section.pages.map(
                      ({ _key, text, hasUrl, url, ...rest }: any) => (
                        <li key={text}>
                          {hasUrl && (
                            <a
                              href={`${url}`}
                              className='text-sm leading-6 text-gray-300 hover:text-white'
                            >
                              {text}
                            </a>
                          )}
                          {!hasUrl && (
                            <a
                              href={`/${section.slug.current}/FooterContent/${_key}`}
                              className='text-sm leading-6 text-gray-300 hover:text-white'
                            >
                              {text}
                            </a>
                          )}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        {footerCopyRight && (
          <div className='mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24'>
            <p className='text-xs leading-5 text-gray-400'>{footerCopyRight}</p>
          </div>
        )}
      </div>
    </footer>
  );
}
