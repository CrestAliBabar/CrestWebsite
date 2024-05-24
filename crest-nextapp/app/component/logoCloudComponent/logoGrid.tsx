/* eslint-disable @next/next/no-img-element */
import React from "react";
import { urlFor } from "@/sanity/sanity-utils";
import Link from "next/link";
import { UrlObject } from "url";

type LogoGridProps = {
  logoCloudContent: any;
};

const LogoGrid: React.FC<LogoGridProps> = ({ logoCloudContent }) => {
  const HeadingText = logoCloudContent.LogoCloud_Utlis.headingProp.heading;
  const HeadingTextColor =
    logoCloudContent.LogoCloud_Utlis.headingProp.headingColor.value;

  const SubHeadingText =
    logoCloudContent.LogoCloud_Utlis.subHeadingProp.subHeading;
  const SubHeadingTextColor =
    logoCloudContent.LogoCloud_Utlis.subHeadingProp.subHeadingColor.value;

  const BackgroundColor =
    logoCloudContent.LogoCloud_Utlis.backGroundColor.value;
  const GridCardColor = logoCloudContent.gridCardColor.value;

  const HeadingStyle = {
    backgroundColor: HeadingTextColor,
  };

  const SubHeadingStyle = {
    color: SubHeadingTextColor,
  };

  const GridCardStyle = {
    backgroundColor: GridCardColor,
  };

  return (
    <section style={{ backgroundColor: BackgroundColor }}>
      {/*Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32 text-center">
        {/*Title */}
        {logoCloudContent.LogoCloud_Utlis.headingProp.isDisplayed && (
          <div data-aos="fade-down" data-aos-delay="400">
            <h1
              className="mb-6 text-3xl font-semibold md:text-5xl text-white md:mb-6 lg:mb-6 bg-cover bg-center bg-no-repeat inline-block"
              style={HeadingStyle}
            >
              {HeadingText}
            </h1>

            <p className="mb-10 font-semibold" style={SubHeadingStyle}>
              {SubHeadingText}
            </p>
          </div>
        )}
        {/*Content */}

        <div data-aos="fade-up" data-aos-delay="400">
          <div className="cursor-pointer transition shadow-[0px_0px_6px_8px_#192b33] hover:shadow-[0px_0px_0px_0px_#325c6c]">
            <div
              className="items-center justify-center rounded-md  p-16 px-8 py-12  grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-12 md:grid-cols-5 md:gap-6 "
              style={GridCardStyle}
            >
              {logoCloudContent.LogoCloud_Utlis.logoCloudImages.map(
                (
                  logo: {
                    logolink: string | UrlObject;
                    logoImage: { asset: any };
                  },
                  index: React.Key | null | undefined
                ) => (
                  <div className="flex items-center justify-center" key={index}>
                    <Link href={logo.logolink}>
                      <img
                        src={urlFor(logo.logoImage.asset).url()}
                        alt=" "
                        key={index}
                        className=" w-40 sm:max-w-[80%] transition transform hover:scale-110"
                      />
                    </Link>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoGrid;
