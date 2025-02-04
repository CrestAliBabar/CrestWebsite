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
  className?: string;
};

const DynamicFontAwesomeIcon: React.FC<DynamicFontAwesomeIconProps> = ({
  name,
  iconSize = 24,
  className,
}) => {
  const Icon = Icons[name];
  return <Icon size={iconSize} className={className} />;
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

  // Convert sanity asset reference into a URL
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

  // Determine which side image should appear on
  const ImageDirection = featureHeroFactsContent.imageDirection || "left";
  // Optional: If the user doesn’t provide a value, default to "left"

  // Dynamically control AOS animations
  const imageAOS = ImageDirection === "left" ? "fade-right" : "fade-left";
  const textAOS = ImageDirection === "left" ? "fade-left" : "fade-right";

  // Custom cursor style
  const customCursorStyle = {
    cursor: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" style="transform: rotate(-30deg);" fill="%23d4a017"><path d="M12 2L2 22l3-3 7-3 7 3 3 3L12 2z"/></svg>') 16 16, pointer`,
  };

  return (
    <section style={{ backgroundColor: BackgroundColor }}>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        {/* Grid wrapper */}
        <div className="grid grid-cols-1 items-center gap-12 sm:gap-20 lg:grid-cols-2">
          {ImageDirection === "left" ? (
            <>
              {/* Image Div */}
              <div
                className="relative h-auto w-full max-w-[900px] flex justify-center items-center overflow-hidden cursor-all-scroll"
                data-aos={imageAOS}
                data-aos-delay="400"
                style={customCursorStyle}
              >
                <img
                  src={NewbackgroundImageUrl}
                  alt="Hero Image"
                  className="w-full h-auto max-w-[900px] rounded-2xl object-cover transform transition-all duration-500 hover:rotate-0 hover:scale-110 origin-bottom"
                />
              </div>

              {/* Heading Div */}
              <div
                className="max-w-[720px] max-[991px]:[grid-area:1/1/2/2] lg:max-w-[842px]"
                data-aos={textAOS}
                data-aos-delay="400"
              >
                <div>
                  <h2 className="text-3xl font-semibold md:text-5xl">
                    <span
                      className="mb-4 bg-cover bg-center bg-no-repeat text-white px-4"
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
                  {featureHeroFactsContent.featureFacts.map(
                    (
                      featureFact: {
                        icon: { name: IconName };
                        Fact: React.ReactNode;
                      },
                      index: React.Key
                    ) => (
                      <div key={index} className="mb-2 flex items-center">
                        {/* Bouncing icon */}
                        <DynamicFontAwesomeIcon
                          name={featureFact.icon.name}
                          iconSize={20}
                          className="animate-bounce"
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
            </>
          ) : (
            <>
              {/* Heading Div */}
              <div
                className="max-w-[720px] max-[991px]:[grid-area:1/1/2/2] lg:max-w-[842px]"
                data-aos={textAOS}
                data-aos-delay="400"
              >
                <div>
                  <h2 className="text-3xl font-semibold md:text-5xl">
                    <span
                      className="mb-4 bg-cover bg-center bg-no-repeat text-white px-4"
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
                  {featureHeroFactsContent.featureFacts.map(
                    (
                      featureFact: {
                        icon: { name: IconName };
                        Fact: React.ReactNode;
                      },
                      index: React.Key
                    ) => (
                      <div key={index} className="mb-2 flex items-center">
                        {/* Bouncing icon */}
                        <DynamicFontAwesomeIcon
                          name={featureFact.icon.name}
                          iconSize={20}
                          className="animate-bounce"
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

              {/* Image Div */}
              <div
                className="relative h-auto w-full max-w-[900px] flex justify-center items-center overflow-hidden cursor-all-scroll"
                data-aos={imageAOS}
                data-aos-delay="400"
                style={customCursorStyle}
              >
                <img
                  src={NewbackgroundImageUrl}
                  alt="Hero Image"
                  className="w-full h-auto max-w-[900px] rounded-2xl object-cover transform transition-all duration-500 hover:rotate-0 hover:scale-110 origin-bottom"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeatureHeroFacts;
