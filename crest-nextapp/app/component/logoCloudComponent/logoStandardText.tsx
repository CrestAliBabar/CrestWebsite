/* eslint-disable @next/next/no-img-element */
import React from "react";
import { urlFor } from "@/sanity/sanity-utils";
import Link from "next/link";
import { UrlObject } from "url";

type LogoStandardTextProps = {
  logoCloudContent: any;
};

const LogoStandardText: React.FC<LogoStandardTextProps> = ({
  logoCloudContent,
}) => {
  const HeadingText = logoCloudContent.LogoCloud_Utlis.headingProp.heading;
  const HeadingTextColor =
    logoCloudContent.LogoCloud_Utlis.headingProp.headingColor.value;

  const SubHeadingText =
    logoCloudContent.LogoCloud_Utlis.subHeadingProp.subHeading;
  const SubHeadingTextColor =
    logoCloudContent.LogoCloud_Utlis.subHeadingProp.subHeadingColor.value;

  const BackgroundColor =
    logoCloudContent.LogoCloud_Utlis.backGroundColor.value;

  const HeadingStyle = {
    backgroundColor: HeadingTextColor,
  };

  const SubHeadingStyle = {
    color: SubHeadingTextColor,
  };

  return (
    <section style={{ backgroundColor: BackgroundColor }}>
      {/*Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32 text-center">
        {/* Title */}
        {logoCloudContent.LogoCloud_Utlis.headingProp.isDisplayed && (
          <div data-aos="fade-down" data-aos-delay="400">
            <h1
              className="mb-6 text-3xl font-semibold md:text-5xl text-white md:mb-10 lg:mb-12 bg-cover bg-center bg-no-repeat inline-block"
              style={HeadingStyle}
            >
              {HeadingText}
            </h1>

            <p className="mb-10 font-semibold" style={SubHeadingStyle}>
              {SubHeadingText}
            </p>
          </div>
        )}

        {/* Component */}
        <div
          className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-12 md:grid-cols-5 md:gap-6 cursor-pointer"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {logoCloudContent.LogoCloud_Utlis.logoCloudImages.map(
            (
              logo: { logolink: string | UrlObject; logoImage: { asset: any } },
              index: React.Key | null | undefined
            ) => (
              <Link href={logo.logolink} key={index}>
                <img
                  className="mx-auto transition transform hover:scale-110"
                  src={urlFor(logo.logoImage.asset).url()}
                  alt=" "
                  height={100}
                  width={170}
                />
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default LogoStandardText;
