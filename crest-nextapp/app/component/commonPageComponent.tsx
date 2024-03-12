import React from 'react';
import Image from 'next/image';

type CommonComponentTypeProps = {
  componentData: any[];
};

const CommonPageComponent: React.FC<CommonComponentTypeProps> = ({ componentData }) => {
  return (
    <>
      {componentData.map((data, index) => (
        <section key={index} className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                {data.title}
                <br className="hidden lg:inline-block" />
                {data.subtitle}
              </h1>
              <p className="mb-8 leading-relaxed">{data.description}</p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Button
                </button>
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  Button
                </button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <Image className="object-cover object-center rounded" height={600} width={720} alt="hero" src="https://dummyimage.com/720x600" />
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default CommonPageComponent;
