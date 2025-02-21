/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import CaseStudyListingStyle1 from "./caseStudyListingStyle1";
type CaseStudyListingComponentProps = {
  CaseStudyListingContent: any[];
};

const CaseStudyListingComponent : React.FC<CaseStudyListingComponentProps> = ({ CaseStudyListingContent }) =>  {
  return (
    <>
      {CaseStudyListingContent.map((content: any, index: number) => {
        switch (content._type) {
          case "caseStudy_Listing_Style1":
            return <CaseStudyListingStyle1 caseStudyListingStyle1Content = {content}  key={index} />;
          default:
            return null;
        }
      })}
    </>
  );
};

export default CaseStudyListingComponent;
