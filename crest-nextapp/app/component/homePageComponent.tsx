import React from "react";
import HeroComponent from "./heroComponents/heroComponent";
import FeatureComponent from "./featureComponents/featureComponent";

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
        switch (content._type) {
          case "hero":
            return <HeroComponent heroContent={content.heroSections} key={index} />;
          case "feature":
            return <FeatureComponent featureContent={content.featureSections}        key={index}  />
          default:
            return null; // Default case if component type is not recognized
        }
      })}
    </>
  );
};

export default HomePageComponent;
