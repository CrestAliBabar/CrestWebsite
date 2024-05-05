import React from "react";
import HeroWithoutBanner from "./heroWithoutBanner";
import HeroWithBanner from "./heroWithBanner";
import HeroWithImage from "./heroWithImage";

type HeroComponentProps = {
  heroContent: any[];
};

const HeroComponent: React.FC<HeroComponentProps> = ({ heroContent }) => {
  return (
    <>
      {heroContent.map((content: any, index: number) => {
        switch (content._type) {
          case "Hero_without_Banner_image":
            return <HeroWithoutBanner heroWithoutBannerContent = {content}  key={index} />;
          case "Hero_Banner_image":
            return <HeroWithBanner heroWithBannerContent = {content} key={index} />;
          case "Hero_with_image":
            return <HeroWithImage heroWithImageContent = {content} key={index} />;
          default:
            return null;
        }
      })}
    </>
  );
};

export default HeroComponent;
