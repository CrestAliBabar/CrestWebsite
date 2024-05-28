'use client';
import { useEffect } from 'react';
import Header from './component/header';
import Footer from './component/footer';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <Header />
      <section className='bg-white h-screen'>
        <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
          <div className='mx-auto my-28 max-w-screen-sm text-center lg:my-36'>
            <h1 className='mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-black'>
              Oops!
            </h1>
            <p className='mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl'>
              Something&apos;s missing.
            </p>
            <p className='mb-4 text-lg font-light text-gray-500'>
              A server-side error occurred. Please contact the site owner.
            </p>
            <a
              href='/'
              className='inline-flex max-h-100% text-white bg-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4'
            >
              Back to Homepage
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
