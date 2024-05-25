import React from "react";
import HeroComponent from "./heroComponents/heroComponent";
import FeatureComponent from "./featureComponents/featureComponent";
import ContentComponent from "./contentComponent/contentComponent";
import TeamComponent from "./teamComponents/teamComponent";
import WorkFlowComponent from "./workFlowComponent/workFlowComponent";
import LogoCloudComponent from "./logoCloudComponent/logoCloudComponent";
import FAQsComponent from "./FAQsComponent/FAQsComponent";

type HomePageComponentProps = {
  pageBuilder: any[];
};

const HomePageComponent: React.FC<HomePageComponentProps> = ({ pageBuilder }) => {
  if (pageBuilder === null) {
    // Render default content when pageBuilder is empty
    return ;
  }
  
  return (
    <>
      {pageBuilder.map((content: any, index: number) => {
        // console.log(content)
        switch (content._type) {
          case "hero":
            return <HeroComponent heroContent={content.heroSections} key={index} />;
          case "feature":
            return <FeatureComponent featureContent={content.featureSections}  key={index}  />
          case "content":
            return <ContentComponent Contents ={content.contentSections}  key={index}  />
          case "team":
            return <TeamComponent teamContent ={content.teamSections}  key={index}  />
          case "work_flow":
              return <WorkFlowComponent workFlowContent={content.workFlowSections} key={index} />;
          case "logoCloud":
              return <LogoCloudComponent logoCloudContent={content.logoCLoudSections} key={index} />;
          case "FAQs":
                return <FAQsComponent faqsContent={content.FAQsSections} key={index} />;
          default:
            return null; // Default case if component type is not recognized
        }
      })}
      
    </>
  );
};

export default HomePageComponent;
