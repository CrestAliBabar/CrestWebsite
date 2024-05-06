import React from 'react';

type HeroWithoutBannerProps = {
  heroWithoutBannerContent: any;
};

const HeroWithoutBanner: React.FC<HeroWithoutBannerProps> = ({ heroWithoutBannerContent }) => {
  const subHeadingTextColor = heroWithoutBannerContent.Hero_Heading.subHeadingProp.subHeadingColor.value;
  const HeadingTextColor = heroWithoutBannerContent.Hero_Heading.headingProp.headingColor.value;
  const BackgroundColor = heroWithoutBannerContent.backgroundColor.value;
  const CTAButtonColor = heroWithoutBannerContent.promotion.buttonBackgroundColor.value;

  const headingStyle = {
    color: HeadingTextColor,
  };

  const subHeadingStyle = {
    color: subHeadingTextColor,
  };

  const buttonStyleOffHover = {
    backgroundColor: CTAButtonColor,
    color: "black", 
    boxShadow: "0 4px 9px -4px #3b71ca", 
    transition: "background-color 150ms ease-in-out",
  };

  return (
    <div style={{ backgroundColor: BackgroundColor }} className="py-24 px-6 text-center">
      <h1 style={headingStyle} className="mt-2 mb-16 font-bold tracking-tight md:text-6xl xl:text-7xl">
        {heroWithoutBannerContent.Hero_Heading.headingProp.heading} <br />
        <span style={subHeadingStyle}>
          {heroWithoutBannerContent.Hero_Heading.subHeadingProp.subHeading}
        </span>
      </h1>
      <a
        style={buttonStyleOffHover}
        className="mb-2 inline-block rounded px-12 py-10 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal transform transition-transform duration-300 hover:scale-110"
        href={heroWithoutBannerContent.promotion.link}
      >
        {heroWithoutBannerContent.promotion.title}
      </a>
    </div>
  );
}

export default HeroWithoutBanner;
