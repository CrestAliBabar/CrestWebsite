/* eslint-disable @next/next/no-img-element */

import React from "react";
import * as Icons from "react-icons/fa";

type FeatureHeroFactsProps = {
  featureHeroFactsContent: any;
};
type IconName = keyof typeof Icons;

type DynamicFontAwesomeIconProps = {
  name: IconName;
  iconSize?: number; // Optional prop for icon size
};

const DynamicFontAwesomeIcon: React.FC<DynamicFontAwesomeIconProps> = ({
  name,
  iconSize = 24,
}) => {
  const Icon = Icons[name];
  return <Icon size={iconSize} />;
};

const FeatureHeroFacts: React.FC<FeatureHeroFactsProps> = ({
  featureHeroFactsContent,
}) => {
  const subHeadingTextColor =
    featureHeroFactsContent.Feature_Heading.subHeadingProp.subHeadingColor
      .value;
  const HeadingTextColor =
    featureHeroFactsContent.Feature_Heading.headingProp.headingColor.value;
  const BackgroundColor = featureHeroFactsContent.backGroundColor.value;
  const FeatureFactTitleColor = featureHeroFactsContent.featureFactColor.value;
  const backgroundImageUrl = featureHeroFactsContent.image.asset._ref
    .split("-")
    .slice(1)
    .join("-")
    .replace(/-([^-]*)$/, ".$1");
  const NewbackgroundImageUrl =
    "https://cdn.sanity.io/images/7xkjaifb/production/" + backgroundImageUrl;

  const headingStyle = {
    backgroundColor: HeadingTextColor,
  };

  const subHeadingStyle = {
    color: subHeadingTextColor,
  };

  const featureFactTitleColorStyle = {
    color: FeatureFactTitleColor,
  };

  const HeadingText =
    featureHeroFactsContent.Feature_Heading.headingProp.heading;
  const SubHeadingText =
    featureHeroFactsContent.Feature_Heading.subHeadingProp.subHeading;

  return (
    <section style={{ backgroundColor: BackgroundColor }}>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        {/* Component */}
        <div className="grid grid-cols-1 items-center gap-12 sm:gap-20 lg:grid-cols-2">
          {/* Image Div */}
          <div className="relative left-4 h-full max-h-[560px] w-[85%] md:left-0 md:w-[95%] lg:w-full bg-black">
            <img
              src={NewbackgroundImageUrl}
              className="mx-auto block h-full w-full max-w-[800px] rotate-[5.0deg] rounded-2xl object-cover"
              alt=""
            />
          </div>
          {/* Heading Div */}
          <div className="max-w-[720px] max-[991px]:[grid-area:1/1/2/2] lg:max-w-[842px]">
            {/* Heading Text */}
            <div>
              <h2 className=" text-3xl font-semibold md:text-5xl">
                <span
                  className=" mb-4 bg-cover bg-center bg-no-repeat text-white px-4"
                  style={headingStyle}
                >
                  {HeadingText}
                </span>{" "}
              </h2>
              <p
                className="mt-4 max-w-[480px] font-semibold"
                style={subHeadingStyle}
              >
                {SubHeadingText}
              </p>
            </div>
            {/* Divider */}
            <div className="mb-12 mt-12 h-0 w-40 border"></div>
            {/* Features */}
            <div className="flex flex-col items-start">
              {/* Item */}
              {featureHeroFactsContent.featureFacts.map(
                (
                  featureFact: {
                    icon: { name: any };
                    Fact:
                      | string
                      | number
                      | boolean
                      | React.ReactElement<
                          any,
                          string | React.JSXElementConstructor<any>
                        >
                      | Iterable<React.ReactNode>
                      | React.ReactPortal
                      | Promise<React.AwaitedReactNode>
                      | Iterable<React.ReactNode>
                      | null
                      | undefined;
                  },
                  index: React.Key | null | undefined
                ) => (
                  <div key={index} className="mb-2 flex items-center">
                    <DynamicFontAwesomeIcon
                      name={featureFact.icon.name}
                      iconSize={20}
                    />
                    <p
                      className="ml-3 justify-end"
                      style={featureFactTitleColorStyle}
                    >
                      {featureFact.Fact}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHeroFacts;
