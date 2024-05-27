/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { urlFor } from "@/sanity/sanity-utils";

type FeaturePageDetailsProps = {
  featurePageDetailsContent: any;
};

const FeaturePageDetails: React.FC<FeaturePageDetailsProps> = ({
  featurePageDetailsContent,
}) => {


  const HeadingText =featurePageDetailsContent.Feature_Heading.headingProp.heading;
  const HeadingTextColor =featurePageDetailsContent.Feature_Heading.headingProp.headingColor.value;

  const SubHeadingText =featurePageDetailsContent.Feature_Heading.subHeadingProp.subHeading;
  const subHeadingTextColor =featurePageDetailsContent.Feature_Heading.subHeadingProp.subHeadingColor.value;

  const BackgroundColor = featurePageDetailsContent.backGroundColor.value;


  const MainPageDetailHeadingText = featurePageDetailsContent.Feature_Page_Details_Field.Feature_Heading.headingProp.heading;
  const MainPageDetailHeadingTextColor =featurePageDetailsContent.Feature_Page_Details_Field.Feature_Heading.headingProp.headingColor.value;

  const MainPageDetailSubHeadingText = featurePageDetailsContent.Feature_Page_Details_Field.Feature_Heading.subHeadingProp.subHeading;
  const MainPageDetailSubHeadingTextColor =featurePageDetailsContent.Feature_Page_Details_Field.Feature_Heading.subHeadingProp.subHeadingColor.value;

  const PageCategory = featurePageDetailsContent.Feature_Page_Details_Field.pageCategory;
  const PageCategoryTitleColor = featurePageDetailsContent.Feature_Page_Details_Field.pageCategoryTitleColor.value;

  const MainPageDetailUrl = featurePageDetailsContent.Feature_Page_Details_Field.pagelink;

   
  const headingStyle = {
    backgroundColor: HeadingTextColor,
  };

  const subHeadingStyle = {
    color: subHeadingTextColor,
  };

  const  pageCategoryStyle = {
    color: PageCategoryTitleColor,
  };

  const  MainPageDetailHeadingStyle = {
    color: MainPageDetailHeadingTextColor,
  };

  const  MainPageDetailSubHeadingStyle = {
    color: MainPageDetailSubHeadingTextColor,
  };



  return (
    <section style={{ backgroundColor: BackgroundColor }}>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        {/* Component */}
        <div className="flex flex-col items-center">
          {/* Heading Div */}
          <div className="mb-8 max-w-[800px] text-center md:mb-12 lg:mb-16" data-aos="fade-down" data-aos-delay="400">
            <h2 className="text-3xl font-semibold capitalize md:text-5xl">
              <span className="bg-cover bg-center px-4 text-white" style={headingStyle} >
              {HeadingText}
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-[528px]" style={subHeadingStyle} >
            {SubHeadingText}
            </p>
          </div>
          {/* Blog Div */}
          <div className="mb-8 grid w-full grid-cols-1 md:mb-12 md:grid-cols-3 md:gap-4 lg:mb-16" data-aos="fade-up" data-aos-delay="400">
            {/* Blog Item */}
            <Link
              href={MainPageDetailUrl}
              className="relative mb-12 flex h-[560px] max-w-full grid-cols-1 flex-col gap-4 overflow-hidden rounded-xl border border-solid border-black bg-white font-bold transform transition-transform duration-300 ease-in-out hover:scale-105  [grid-area:1/1/2/2] md:[grid-area:1/1/2/4]"
            >
              <div className="absolute bottom-0 left-0 right-0 top-auto z-20 flex w-full max-w-[800px] flex-col items-start justify-start rounded-xl bg-[#f1f9fa] p-6 md:bottom-2 md:left-2">
                <p className="mb-4 rounded-md bg-[#192b33] py-1.5 px-2 text-sm font-semibold " style={pageCategoryStyle}>
                  {PageCategory}
                </p>
                <p className="mb-4 text-xl font-bold md:text-2xl" style={MainPageDetailHeadingStyle}>
                 {MainPageDetailHeadingText}
                </p>
                <div className="flex items-start max-[991px]:flex-col lg:items-center">
                  <p className="text-sm " style={MainPageDetailSubHeadingStyle}>{MainPageDetailSubHeadingText}</p>
                </div>
              </div>
              <img
                src={urlFor(featurePageDetailsContent.Feature_Page_Details_Field.pageImage.asset).url()}
                alt=""
                className="inline-block h-full w-full object-cover"
              />
            </Link>
            {/* Blog Item */}
            
            {featurePageDetailsContent.pageDetailsList.map((detail : any, index : any) => (
              <a
                key={index}
                href={detail.pagelink}
                className="max-[767px]:flex max-w-full grid-cols-1 flex-col gap-4 rounded-md bg-[#f1f9fa] py-4 px-2 font-bold text-black lg:px-2 transform transition-transform duration-300 ease-in-out hover:scale-105"
                
                >
                <img
                  src={urlFor(detail.pageImage.asset).url()}
                  alt=""
                  className="inline-block h-60 w-full rounded-xl object-cover "
                />
                <div className="flex w-full flex-col items-start justify-start py-4">
                  <div className="mb-4 rounded-md bg-[#192b33] py-1.5 px-2">
                    <p className="text-sm font-semibold "style={{ color: detail.pageCategoryTitleColor.value }}>
                      {detail.pageCategory}
                    </p>
                  </div>
                  <p className="mb-4 text-xl font-bold md:text-2xl" style={{ color: detail.Feature_Heading.headingProp.headingColor.value }}>
                    {detail.Feature_Heading.headingProp.heading}
                  </p>
                  <p className="font-normal" style={{ color: detail.Feature_Heading.subHeadingProp.subHeadingColor.value }}>
                    {detail.Feature_Heading.subHeadingProp.subHeading}
                  </p>
                </div>
              </a>
            ))}



          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturePageDetails;
