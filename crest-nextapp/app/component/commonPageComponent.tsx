import React from "react";
import Image from "next/image";


type PageInfoType = {
  heading: string;
  description: string;
};

type CommonComponentTypeProps = {
  componentData: any[];
  pageInfo: PageInfoType
};


const CommonPageComponent: React.FC<CommonComponentTypeProps> = ({
  componentData,
  pageInfo
}) => {
  return (
    <>
      <div className="container mx-auto mt-20 mb-10">
        <h1 className="text-3xl font-bold my-4">{pageInfo.heading}</h1>
        <p className="text-xl">
          This is a description for the training page.
        </p>
      </div>
      {componentData.map((data, index) => (
        <section key={index} className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-5 mb-10 md:flex-row flex-col items-center bg-gray-300">
            <div className="lg:max-w-lg md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                {data.title}
              </h1>
              <p className="mb-8 leading-relaxed">{data.description}</p>
            </div>
            <div className="lg:flex-grow md:w-1/2 w-5/6  bg-white p-2">
              <div className=" w-full md:h-48 lg:h-80 ">
                <img
                  src={data.imageUrl}
                  alt="description"
                  className=" w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default CommonPageComponent;
