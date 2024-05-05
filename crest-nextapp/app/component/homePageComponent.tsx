import React from "react";
import HeroComponent from "./heroComponents/heroComponent";

type HomePageComponentProps = {
  pageBuilder: any[];
};

const HomePageComponent: React.FC<HomePageComponentProps> = ({ pageBuilder }) => {
  if (pageBuilder === null) {
    // Render default content when pageBuilder is empty
    return <div>No content available</div>;
  }

  return (
    <>
      {pageBuilder.map((content: any, index: number) => {
        switch (content._type) {
          case "hero":
            return <HeroComponent heroContent={content.heroSections} key={index} />;
          // Add more cases for other component types as needed
          default:
            return null; // Default case if component type is not recognized
        }
      })}
    </>
  );
};

export default HomePageComponent;
