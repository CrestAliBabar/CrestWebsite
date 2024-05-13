import React from "react";
import CTAComponent from "./cta";
import CTAHeroComponent from "./cta_hero";
import CTAPatternComponent from "./cta_pattern";

type ctaComponentProps = {
  ctaContents: any[];
};

const CTAComponents: React.FC<ctaComponentProps> = ({ ctaContents }) => {
  return (
    <>
      {ctaContents.map((content: any, index: number) => {
        switch (content._type) {
          case "CTA_With_Text":
            return <CTAComponent ctaContent={content} key={index} />;
          case "CTAWithBackgroundPattern":
            return (
              <CTAPatternComponent ctaPatternContent={content} key={index} />
            );
          case "CTAWithHero":
            return <CTAHeroComponent ctaHeroContent={content} key={index} />;
          default:
            return null;
        }
      })}
    </>
  );
};
export default CTAComponents;
