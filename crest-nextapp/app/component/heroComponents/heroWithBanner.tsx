import React from 'react'

type HeroWithBannerProps = {
  heroWithBannerContent: any;
};

const HeroWithBanner : React.FC<HeroWithBannerProps> = ({ heroWithBannerContent }) => {

  const subHeadingTextColor = heroWithBannerContent.Hero_Heading.subHeadingProp.subHeadingColor.value;
  const HeadingTextColor = heroWithBannerContent.Hero_Heading.headingProp.headingColor.value;
  const CTAButtonColor = heroWithBannerContent.promotion.buttonBackgroundColor.value;
  const backgroundImageUrl =  heroWithBannerContent.image.asset._ref.split("-").slice(1).join("-").replace(/-([^-]*)$/, ".$1");
  const NewbackgroundImageUrl =  "https://cdn.sanity.io/images/7xkjaifb/production/" + backgroundImageUrl


  
  const headingStyle = {
    color: HeadingTextColor,
  };

  const subHeadingStyle = {
    color: subHeadingTextColor,
  };

  const buttonStyleOffHover = {
    backgroundColor: CTAButtonColor,
  };

  return (
    <div
    className="relative overflow-hidden bg-cover bg-no-repeat"
    style={{
      backgroundPosition: "50%",
      backgroundImage: `url("${NewbackgroundImageUrl}")`,
      height: 500,
    }}
  >
    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.50)] bg-fixed">
      <div className="flex h-full items-center justify-center">
        <div className="px-6 text-center  md:px-12">
          <h1 style={headingStyle} className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
          {heroWithBannerContent.Hero_Heading.headingProp.heading}<br />
            <span style={subHeadingStyle}>   {heroWithBannerContent.Hero_Heading.subHeadingProp.subHeading}</span>
          </h1>
          <a
            style={buttonStyleOffHover}
            className="rounded border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal transition duration-150 ease-in-out hover:border-neutral-100 hover:text-red-600 hover:bg-neutral-100 hover:bg-opacity-10 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 hover:scale-110"
            href={heroWithBannerContent.promotion.link}
          >
            {heroWithBannerContent.promotion.title}
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HeroWithBanner