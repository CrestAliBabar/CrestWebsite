import { heroBannerContent } from "@/types/PageContentType";
import React from "react";

type HeroWithoutButtonProps = {
  heroWithoutButtonContent: heroBannerContent;
};

const HeroWithoutButton: React.FC<HeroWithoutButtonProps> = ({
  heroWithoutButtonContent,
}) => {
  const subHeadingTextColor =
    heroWithoutButtonContent.Hero_Heading.subHeadingProp.subHeadingColor.value;
  const HeadingTextColor =
    heroWithoutButtonContent.Hero_Heading.headingProp.headingColor.value;
  const backgroundImageUrl = heroWithoutButtonContent.image.asset._ref
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
            <h1
              style={headingStyle}
              className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl"
            >
              {heroWithoutButtonContent.Hero_Heading.headingProp.heading}
              <br />
              <span style={subHeadingStyle}>
                {" "}
                {
                  heroWithoutButtonContent.Hero_Heading.subHeadingProp
                    .subHeading
                }
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroWithoutButton;
