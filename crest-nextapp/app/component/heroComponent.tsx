import React from "react";
import Image from "next/image";

const HeroComponent = () => {
  return (
    <div>
      {"/*Hero without Banner image*/"}

      <div className=" bg-gray-200 py-24 px-6 text-center">
        <h1 className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
          The best offer on the market <br />
          <span className="text-cyan-400">for your business</span>
        </h1>
        <a
          className="mb-2 inline-block rounded px-12 py-10 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal bg-cyan-600 text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-300"
          href="#!"
          role="button"
        >
          Get started
        </a>

      </div>

      {"/*Hero Banner image*/"}
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat"
        style={{
          backgroundPosition: "50%",
          backgroundImage:
            'url("https://mdbcdn.b-cdn.net/img/new/slides/146.webp")',
          height: 500,
        }}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
          <div className="flex h-full items-center justify-center">
            <div className="px-6 text-center text-white md:px-12">
              <h1 className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                The best offer on the market <br />
                <span>for your business</span>
              </h1>
              <button
                type="button"
                className="rounded border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>

      {"/*Hero with right image*/"}

      <div className="bg-neutral-50 px-6 py-12 text-center ">
        <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="mt-12 lg:mt-0">
              <h1 className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                The best offer <br />
                <span className="">for your business</span>
              </h1>
              <a
                className="mb-2 inline-block rounded bg-cyan-600 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-teal-600"
                href="#!"
              >
                Get started
              </a>
              <a
                className="inline-block rounded px-12 pt-4 pb-3.5 mx-4 text-sm font-medium uppercase leading-normal bg-gray-500 transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-50"
                href="#!"
              >
                Learn more
              </a>
            </div>
            <div className="mb-12 lg:mb-0">
              <Image
                src="https://tecdn.b-cdn.net/img/new/ecommerce/vertical/028.jpg"
                className="rounded-lg shadow-lg"
                alt=""
                width={400}
                height={400}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>

      {"/*Hero with left image*/"}
      <div className="bg-neutral-50 px-6 py-12 text-center ">
        <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="mb-12 lg:mb-0">
              <Image
                src="https://tecdn.b-cdn.net/img/new/ecommerce/vertical/028.jpg"
                className="rounded-lg shadow-lg"
                alt=""
                width={400}
                height={400}
                layout="responsive"
              />
            </div>
            <div className="mt-12 lg:mt-0">
              <h1 className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                The best offer <br />
                <span className="">for your business</span>
              </h1>
              <a
                className="mb-2 inline-block rounded bg-cyan-600 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-teal-600"
                href="#!"
              >
                Get started
              </a>
              <a
                className="inline-block rounded px-12 pt-4 pb-3.5 mx-4 text-sm font-medium uppercase leading-normal bg-gray-500 transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-50"
                href="#!"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default HeroComponent;
