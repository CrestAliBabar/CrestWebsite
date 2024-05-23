/* eslint-disable @next/next/no-img-element */
import React from "react";
import LogoGrid from "./logoGrid";
import LogoStandardText from "./logoStandardText";

type LogoCloudComponentProps = {
  logoCloudContent: any[];
};

const LogoCloudComponent: React.FC<LogoCloudComponentProps> = ({
  logoCloudContent,
}) => {
  return (
    <>
      {logoCloudContent.map((content: any, index: number) => {
        switch (content._type) {
          case "Logo_Grid":
            return <LogoGrid logoCloudContent={content} key={index} />;
          case "Logo_Standard_Text":
            return <LogoStandardText logoCloudContent={content} key={index} />;
          default:
            return null;
        }
      })}
    </>
  );
};

export default LogoCloudComponent;
