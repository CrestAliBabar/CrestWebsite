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
  const CTAButtonColor =
    heroWithImageContent.promotion.buttonBackgroundColor.value;
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
    color: subHeadingTextColor,
  };

  const buttonStyleOffHover = {
    backgroundColor: CTAButtonColor,
    color: "black",
    boxShadow: "0 4px 9px -4px #3b71ca",
    transition: "background-color 150ms ease-in-out",
  };

  const imageDirection = heroWithImageContent.imageDirection;

  return (
    <div
      style={{ backgroundColor: BackgroundColor }}
      className="px-6 py-12 text-center"
    >
      <div className="w-full mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {imageDirection === "right" ? (
            <>
              <div className="mt-12 lg:mt-0">
                <h1
                  style={headingStyle}
                  className="mt-2 mb-16 font-bold tracking-tight md:text-6xl xl:text-7xl"
                >
                  {heroWithImageContent.Hero_Heading.headingProp.heading}{" "}
                  <br />
                  <span style={subHeadingStyle}>
                    {heroWithImageContent.Hero_Heading.subHeadingProp.subHeading}
                  </span>
                </h1>
                <a
                  style={buttonStyleOffHover}
                  className="mb-2 inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transform transition-transform duration-300 hover:scale-110"
                  href={heroWithImageContent.promotion.link}
                >
                  {heroWithImageContent.promotion.title}
                </a>
              </div>
              <div className="mb-12 lg:mb-0">
                <Image
                  src={NewbackgroundImageUrl}
                  className="rounded-lg shadow-lg"
                  alt=""
                  width={400}
                  height={400}
                  layout="responsive"
                />
              </div>
            </>
          ) : (
            <>
              <div className="mb-12 lg:mb-0">
                <Image
                  src={NewbackgroundImageUrl}
                  className="rounded-lg shadow-lg"
                  alt=""
                  width={400}
                  height={400}
                  layout="responsive"
                />
              </div>
              <div className="mt-12 lg:mt-0">
                <h1
                  style={headingStyle}
                  className="mt-2 mb-16 font-bold tracking-tight md:text-6xl xl:text-7xl"
                >
                  {heroWithImageContent.Hero_Heading.headingProp.heading}{" "}
                  <br />
                  <span style={subHeadingStyle}>
                    {heroWithImageContent.Hero_Heading.subHeadingProp.subHeading}
                  </span>
                </h1>
                <a
                  style={buttonStyleOffHover}
                  className="mb-2 inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transform transition-transform duration-300 hover:scale-110"
                  href={heroWithImageContent.promotion.link}
                >
                  {heroWithImageContent.promotion.title}
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroWithImage;
