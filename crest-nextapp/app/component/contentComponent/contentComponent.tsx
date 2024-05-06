/* eslint-disable @next/next/no-img-element */
import React from "react";
import ContentImageDescription from "./contentImageDescription";

type ContentComponentProps = {
    Contents: any[];
  };


const ContentComponent : React.FC<ContentComponentProps> = ({ Contents }) => {
    return (
        <>
          {Contents.map((content: any, index: number) => {
            switch (content._type) {
              case "Content_Image_Description":
                return <ContentImageDescription contentImageDescription = {content}  key={index} />;
              default:
                return null;
            }
          })}
        </>
      );
};

export default ContentComponent;
