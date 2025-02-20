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
import TeamComponent from "../teamComponents/teamComponent";
import ContactComponent from "../contactComponent/contactComponent";
import CTAComponents from "../ctaComponent/CTAComponents";
import HeroComponent from "../heroComponents/heroComponent";
import FeatureComponent from "../featureComponents/featureComponent";
import LogoCloudComponent from "../logoCloudComponent/logoCloudComponent";
import FAQsComponent from "../FAQsComponent/FAQsComponent";
import WorkFlowComponent from "../workFlowComponent/workFlowComponent";
import BlogListingComponent from "../blogListingComponent/blogListingComponent";

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
          case "customImage":
            return <ImageComponent imageContent={content} key={index} />;
          case "bulletPoint":
            return (
              <BulletPointComponent bulletPointContent={content} key={index} />
            );
          case "video":
            return <VideoComponent videoContent={content} key={index} />;
          case "team":
            return (
              <TeamComponent teamContent={content.teamSections} key={index} />
            );
          case "cta":
            return (
              <CTAComponents ctaContents={content.ctaSections} key={index} />
            );
          case "contact":
            return <ContactComponent contactContent={content} key={index} />;
          case "work_flow":
            return (
              <WorkFlowComponent
                workFlowContent={content.workFlowSections}
                key={index}
              />
            );
          case "hero":
            return (
              <HeroComponent heroContent={content.heroSections} key={index} />
            );
          case "feature":
            return (
              <FeatureComponent
                featureContent={content.featureSections}
                key={index}
              />
            );
          case "logoCloud":
            return (
              <LogoCloudComponent
                logoCloudContent={content.logoCLoudSections}
                key={index}
              />
            );
          case "FAQs":
            return (
              <FAQsComponent faqsContent={content.FAQsSections} key={index} />
            );
          case "blogListing":
            return (
              <BlogListingComponent
                BlogListingContent={content.blogListingSections}
                key={index}
              />
            );
          default:
            return null;
        }
      })}
    </>
  );
};

export default ContentComponent;
