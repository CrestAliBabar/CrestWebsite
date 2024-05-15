/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

type HeroWithImageContentProps = {
  heroWithImageContent: any;
};

const HeroWithImage: React.FC<HeroWithImageContentProps> = ({
  heroWithImageContent,
}) => {
  const subHeadingTextColor =
    heroWithImageContent.Hero_Heading.subHeadingProp.subHeadingColor.value;
  const HeadingTextColor =
    heroWithImageContent.Hero_Heading.headingProp.headingColor.value;
  const BackgroundColor = heroWithImageContent.backgroundColor.value;
  const DescriptionTextColor = heroWithImageContent.descriptionColor.value

  const CTAOneButtonColor =
    heroWithImageContent.promotion.buttonBackgroundColor.value;
  const CTATwoButtonColor = heroWithImageContent.promotionTwo.buttonBackgroundColor.value;

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
    
    
  };

  const buttonTwoStyleOffHover = {
    backgroundColor: CTATwoButtonColor,
  };
  
  const imageDirection = heroWithImageContent.imageDirection;

  const HeadingText = heroWithImageContent.Hero_Heading.headingProp.heading
  const SubHeadingText =  heroWithImageContent.Hero_Heading.subHeadingProp.subHeading
  const DescriptionText = heroWithImageContent.description

  const CTAButtonOneLink = heroWithImageContent.promotion.link
  const CTAButtonTwoLink = heroWithImageContent.promotionTwo.link
  const CTAButtonOneText  = heroWithImageContent.promotion.title
  const CTAButtonTwoText = heroWithImageContent.promotionTwo.title


  return (
    <section  style={{ backgroundColor: BackgroundColor }}>
      {/* Container */}
      <div
        className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32"
       
      >
        {/* Component */}
        <div className="grid grid-cols-1 gap-12 sm:gap-20 lg:grid-cols-2">
          {/* Heading Div */}
          <div className="max-w-[720px] lg:max-w-[842px]">
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
            <div className="flex">
              <a
                href={CTAButtonOneLink}
                className="mr-5 inline-block rounded-xl px-8 py-4 text-center font-semibold md:mr-6 shadow-[3px_0px_0px_4px_#325c6c]"
                style={buttonOneStyleOffHover}
              >
                {CTAButtonOneText}
              </a>
              <a
                href={CTAButtonTwoLink}
                className="flex max-w-full flex-row items-center rounded-xl shadow-[3px_0px_0px_4px_#325c6c] px-6 py-3 font-semibold"
                style={buttonTwoStyleOffHover}
              >
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905a575ec39b6784fc687c_Play.svg"
                  alt=""
                  className="mr-2 inline-block w-6"
                />
                <p className="text-black">{CTAButtonTwoText}</p>
              </a>
            </div>
          </div>
          {/* Image Div */}
          <div className="relative left-4 h-full max-h-[560px] w-[85%] lg:left-0 lg:w-full">
            <img
              src={NewbackgroundImageUrl}
              alt=""
              className="relative h-full w-full max-w-[800px] -rotate-[3.5deg] rounded-2xl object-cover"
            />
            <div className="absolute bottom-0 left-4 right-0 top-4 -z-10 rounded-2xl bg-black"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWithImage;
