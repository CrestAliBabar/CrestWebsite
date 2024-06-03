'use client';

import { useState } from 'react';
import { Transition } from '@headlessui/react';
import Link from 'next/link';

type DropdownProps = {
  children: React.ReactNode;
  title: string;
  titleSlug: string;
};

export default function Dropdown({
  children,
  title,
  titleSlug,
}: DropdownProps) {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  return (
    <li
      className='relative'
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
      onFocus={() => setDropdownOpen(true)}
      onBlur={() => setDropdownOpen(false)}
    >
      <Link
        className='font-medium text-white dark:text-white px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out'
        href={`/${titleSlug}`}
        aria-expanded={dropdownOpen}
      >
        {title}
        {children && (
          <svg
            className='w-3 h-3 fill-current text-white dark:text-slate-500 cursor-pointer ml-1 shrink-0'
            viewBox='0 0 12 12'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M10.28 4.305L5.989 8.598 1.695 4.305A1 1 0 00.28 5.72l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z' />
          </svg>
        )}
      </Link>
      {children && (
        <Transition
          show={dropdownOpen}
          as='ul'
          className='origin-top-right absolute top-full right-0 w-40 bg-white py-2 ml-4 rounded shadow-lg z-50'
          enter='transition ease-out duration-200 transform'
          enterFrom='opacity-0 -translate-y-2'
          enterTo='opacity-100 translate-y-0'
          leave='transition ease-out duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          {children}
        </Transition>
      )}
    </li>
  );
}
