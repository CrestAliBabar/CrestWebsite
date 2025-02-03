/* eslint-disable @next/next/no-img-element */

import React from "react";
import GlowingDotButton from "@/app/clientComponent/glowingDotButton";
import ElectricParticleWrapper from "@/app/clientComponent/electricPaticleButton";
import ShimmerButtonWrapper from "@/app/clientComponent/shimmerButton";

type HeroWithImageContentProps = {
  heroWithImageContent: any;
};


const HeroWithImage: React.FC<HeroWithImageContentProps> = ({
  heroWithImageContent,
}) => {
  // ... (keeping all existing props and styles)
  const subHeadingTextColor =
    heroWithImageContent.Hero_Heading.subHeadingProp.subHeadingColor.value;
  const HeadingTextColor =
    heroWithImageContent.Hero_Heading.headingProp.headingColor.value;
  const BackgroundColor = heroWithImageContent.backgroundColor.value;
  const DescriptionTextColor = heroWithImageContent.descriptionColor.value;

  const CTAOneButtonColor =
    heroWithImageContent.promotion.buttonBackgroundColor.value;
  const CTATwoButtonColor =
    heroWithImageContent.promotionTwo.buttonBackgroundColor.value;

  const backgroundImageUrl = heroWithImageContent.image.asset._ref
    .split("-")
    .slice(1)
    .join("-")
    .replace(/-([^-]*)$/, ".$1");
  const NewbackgroundImageUrl =
    "https://cdn.sanity.io/images/7xkjaifb/production/" + backgroundImageUrl;

  const headingStyle = {
    color: HeadingTextColor,
  };

  const subHeadingStyle = {
    backgroundColor: subHeadingTextColor,
  };

  const descriptionStyle = {
    color: DescriptionTextColor,
  };

  const buttonOneStyleOffHover = {
    backgroundColor: CTAOneButtonColor,
    boxShadow: '0 0 20px rgba(212,160,23,0.5), inset 0 0 20px rgba(212,160,23,0.3)'
  };

  const buttonTwoStyleOffHover = {
    backgroundColor: CTATwoButtonColor,
  };

  const HeadingText = heroWithImageContent.Hero_Heading.headingProp.heading;
  const SubHeadingText =
    heroWithImageContent.Hero_Heading.subHeadingProp.subHeading;
  const DescriptionText = heroWithImageContent.description;

  const CTAButtonOneLink = heroWithImageContent.promotion.link;
  const CTAButtonTwoLink = heroWithImageContent.promotionTwo.link;
  const CTAButtonOneText = heroWithImageContent.promotion.title;
  const CTAButtonTwoText = heroWithImageContent.promotionTwo.title;

  const customCursorStyle = {
    cursor: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" style="transform: rotate(-30deg);" fill="%23325c6c"><path d="M12 2L2 22l3-3 7-3 7 3 3 3L12 2z"/></svg>') 16 16, pointer`
  };

  return (
    <section style={{ backgroundColor: BackgroundColor }}>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 sm:gap-20">
          <div
            className="max-w-[720px] lg:max-w-[842px]"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <h1
              className="mb-4 text-4xl font-semibold md:text-6xl"
              style={headingStyle}
            >
              {HeadingText}{" "}
              <span
                className="bg-cover bg-center px-4 text-white"
                style={subHeadingStyle}
              >
                {SubHeadingText}
              </span>
            </h1>
            <div className="mb-6 max-w-[528px] md:mb-10 lg:mb-12">
              <p className="text-xl" style={descriptionStyle}>
                {DescriptionText}
              </p>
            </div>
            {/* Button Wrap */}
            <div className="flex flex-wrap gap-4">
              <ShimmerButtonWrapper
                href={CTAButtonOneLink}
                style={buttonOneStyleOffHover}
              >
                {CTAButtonOneText}
              </ShimmerButtonWrapper>

              {/* Original button two styling */}
              <a
                href={CTAButtonTwoLink}
                className="flex max-w-full flex-row items-center rounded-xl transition shadow-[3px_0px_0px_4px_#325c6c] hover:shadow-[0px_0px_0px_0px_#325c6c] px-6 py-3 font-semibold"
                style={buttonTwoStyleOffHover}
              >
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905a575ec39b6784fc687c_Play.svg"
                  alt=""
                  className="mr-2 w-6"
                />
                <p className="text-black">{CTAButtonTwoText}</p>
              </a>
            </div>
          </div>

          <div
            className="relative h-auto w-full max-w-[900px] flex justify-center items-center overflow-hidden cursor-all-scroll"
            data-aos="zoom-in"
            data-aos-delay="400"
            style={customCursorStyle}
          >
            <img
              src={NewbackgroundImageUrl}
              alt="Hero Image"
              className="w-full h-auto max-w-[900px] rounded-2xl object-cover transform transition-all duration-500 hover:rotate-0 hover:scale-110 origin-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWithImage;