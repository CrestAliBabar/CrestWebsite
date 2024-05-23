/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import FeatureGridLayout from "./featureGridLayout";
import FeatureHeroFacts from "./featureHeroFacts";
import FeatureFactsHyperlink from "./featureFactsHyperlink";
import FeatureCenteredGrid from "./featureCenteredGrid";
import FeatureWithLargeScreenShot from "./featureWithLargeScreenShot";

type FeatureComponentProps = {
  featureContent: any[];
};

const FeatureComponent : React.FC<FeatureComponentProps> = ({ featureContent }) =>  {
  return (
    <>
      {featureContent.map((content: any, index: number) => {
        switch (content._type) {
          case "Feature_Hero_Facts":
            return <FeatureHeroFacts featureHeroFactsContent = {content}  key={index} />;
          case  "Feature_Grid_Layout":
            return <FeatureGridLayout featureGridLayoutContent = {content}  key={index} />
          case "Feature_Facts_Hyperlink":
            return <FeatureFactsHyperlink featureFactsHyperlinkContent = {content}  key={index}/>
          case "Feature_Centered_Grid":
            return <FeatureCenteredGrid featureCenteredGridContent = {content}  key={index}/>
          case "Feature_With_Large_Screen_Shot":
            return <FeatureWithLargeScreenShot featureWithLargeScreenShotContent = {content}  key={index}/>
          default:
            return null;
        }
      })}
    </>
  );
};

export default FeatureComponent;
