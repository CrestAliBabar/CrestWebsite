/* eslint-disable @next/next/no-img-element */
import ShimmerButtonWrapper from "@/app/clientComponent/shimmerButton";
import React from "react";
import * as Icons from "react-icons/fa";

type CTAHeroProps = {
  ctaHeroContent?: any;
};

const CTAHeroComponent: React.FC<CTAHeroProps> = ({ ctaHeroContent }) => {
  type IconName = keyof typeof Icons;

  type DynamicFontAwesomeIconProps = {
    name: IconName;
    iconSize?: number; // Optional prop for icon size
    className?: string;
  };

  // Icon component that supports custom size and classes
  const DynamicFontAwesomeIcon: React.FC<DynamicFontAwesomeIconProps> = ({
    name,
    iconSize = 24,
    className,
  }) => {
    const Icon = Icons[name];
    return <Icon size={iconSize} className={className} />;
  };

  // Safely handle missing fields
  const TitleTextColor = ctaHeroContent?.TitleTextColor?.value || "#f2f2f7";
  const DescriptionTextColor =
    ctaHeroContent?.DescriptionTextColor?.value || "#647084";
  const BackgroundColor = ctaHeroContent?.backGroundColor?.value || "#647084";

  const imageRef = ctaHeroContent?.image?.asset?._ref || "";
  const imageurl =
    "https://cdn.sanity.io/images/7xkjaifb/production/" +
    imageRef.split("-").slice(1).join("-").replace(/-([^-]*)$/, ".$1");

  const CTAButtonColor =
    ctaHeroContent?.promotion?.buttonBackgroundColor?.value || "#647084";
  const CTAButtonColorLink = ctaHeroContent?.promotion?.link || "#";
  const CTAButtonText = ctaHeroContent?.promotion?.title || "Click Here";
  const IconTextColor = ctaHeroContent?.iconTextColor?.value || "#647084";

  const IconColorStyle = {
    color: IconTextColor,
  };

  const buttonStyle = {
    backgroundColor: CTAButtonColor,
  };

  const headingStyle = {
    backgroundColor: TitleTextColor,
  };

  // Custom cursor style
  const customCursorStyle = {
    cursor: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" style="transform: rotate(-30deg);" fill="%23d4a017"><path d="M12 2L2 22l3-3 7-3 7 3 3 3L12 2z"/></svg>') 16 16, pointer`,
  };

  return (
    <section style={{ backgroundColor: BackgroundColor }}>
      {/* Container */}
      <div
        className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32"
        data-aos="fade-up"
      >
        {/* Component */}
        <div className="grid grid-cols-1 items-center justify-center gap-12 sm:gap-20 lg:grid-cols-2">
          {/* Image Div */}
          <div
            className="relative h-full max-h-[560px] w-[85%] overflow-hidden max-[991px]:left-4 md:w-[95%] lg:w-full"
            data-aos="fade-right"
            data-aos-delay="400"
            style={customCursorStyle}
          >
            <img
              src={imageurl}
              alt="Hero Image"
              className="mx-auto block h-full w-full max-w-[800px] rounded-2xl object-cover 
                         transform transition-all duration-500 hover:scale-110 origin-bottom"
            />
          </div>

          {/* Content Div */}
          <div
            className="max-w-[720px]"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <h2 className="mb-6 text-3xl font-semibold md:mb-10 md:text-5xl text-white">
              <span
                className="mb-4 bg-cover bg-center bg-no-repeat text-white px-4"
                style={headingStyle}
              >
                {ctaHeroContent?.CTA_Title}
              </span>{" "}
            </h2>
            <div className="mx max-w-[630px] mb-10">
              <p style={{ color: DescriptionTextColor }}>
                {ctaHeroContent?.Description}
              </p>
            </div>
            {/* Features */}
            <div className="grid max-w-[400px] grid-cols-2 gap-4">
              {ctaHeroContent?.iconText?.map(
                (
                  featureFact: {
                    icon: { name: IconName };
                    Fact: React.ReactNode;
                  },
                  index: React.Key
                ) => (
                  <div key={index} className="mb-2 flex items-center">
                    {/* 
                      Increase iconSize to 32 (instead of 24) 
                      and add animate-bounce for a “waving/bouncing” effect 
                    */}
                    <DynamicFontAwesomeIcon
                      name={featureFact.icon.name}
                      iconSize={32}
                      className="animate-bounce"
                    />
                    <p className="ml-3 justify-end" style={IconColorStyle}>
                      {featureFact.Fact}
                    </p>
                  </div>
                )
              )}
            </div>
            {/* Divider */}
            <div className="mb-10 mt-10 w-full max-w-md border-b border-b-[#d9d9d9]"></div>
            <ShimmerButtonWrapper
              href={CTAButtonColorLink}
              className="inline-block rounded-xl px-8 py-4 font-semibold transition 
                         shadow-[9px_11px_6px_0px_#325c6c] hover:shadow-[0px_0px_0px_0px_#325c6c]"
              style={buttonStyle}
            >
              {CTAButtonText}
            </ShimmerButtonWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAHeroComponent;
