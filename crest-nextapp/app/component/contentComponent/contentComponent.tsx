/* eslint-disable @next/next/no-img-element */
import React from "react";
import ContentImageDescription from "./contentImageDescription";
import HeroWithoutButton from "../heroComponents/heroWithoutButton";
import TitleComponent from "./titleComponent";
import SubtitleComponent from "./subtitleComponent";
import HeadingComponent from "./headingComponent";
import ParagraphComponent from "./paragraghComponent";
import ImageComponent from "./imageComponent";
import BulletPointComponent from "./bulletPointComponent";
import VideoComponent from "./videoComponent";
import CTAComponent from "../ctaComponent/cta";
import CTAPatternComponent from "../ctaComponent/cta_pattern";

type ContentComponentProps = {
  Contents: any[];
};

const ContentComponent: React.FC<ContentComponentProps> = ({ Contents }) => {
  return (
    <>
      {Contents.map((content: any, index: number) => {
        switch (content._type) {
          case "Content_Image_Description":
            return (
              <ContentImageDescription
                contentImageDescription={content}
                key={index}
              />
            );
          case "Hero_without_Button":
            return (
              <HeroWithoutButton
                heroWithoutButtonContent={content}
                key={index}
              />
            );
          case "pageTitle":
            return <TitleComponent titleContent={content} key={index} />;
          case "pageSubtitle":
            return <SubtitleComponent subtitleContent={content} key={index} />;
          case "pageHeading":
            return <HeadingComponent headingContent={content} key={index} />;
          case "paragraph":
            return (
              <ParagraphComponent paragraphContent={content} key={index} />
            );
          case "image":
            return <ImageComponent imageContent={content} key={index} />;
          case "bulletPoint":
            return (
              <BulletPointComponent bulletPointContent={content} key={index} />
            );
          case "video":
            return <VideoComponent videoContent={content} key={index} />;
          case "CTA_With_Text":
            return <CTAComponent ctaContent={content} key={index} />;
          case "CTAWithBackgroundPattern":
            return (
              <CTAPatternComponent ctaPatternContent={content} key={index} />
            );

          default:
            return null;
        }
      })}
    </>
  );
};

export default ContentComponent;
