/* eslint-disable @next/next/no-img-element */
import React from "react";
import * as Icons from "react-icons/fa";


type FeatureGridLayoutProps = {
  featureGridLayoutContent: any;
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

const FeatureGridLayout : React.FC<FeatureGridLayoutProps> = ({featureGridLayoutContent}) => {

  const subHeadingTextColor = featureGridLayoutContent.Feature_Heading.subHeadingProp.subHeadingColor.value;
  const HeadingTextColor = featureGridLayoutContent.Feature_Heading.headingProp.headingColor.value;
  const BackgroundColor = featureGridLayoutContent.backGroundColor.value;
  const FeatureCardColor = featureGridLayoutContent.featureCardColor.value;
  
  const headingStyle = {
    backgroundColor: HeadingTextColor,
  };
  
  const subHeadingStyle = {
    color: subHeadingTextColor,
  };
  
  const featureCardColorrStyle = {
    backgroundColor: FeatureCardColor,
  };
  
  const HeadingText =featureGridLayoutContent.Feature_Heading.headingProp.heading;
  const SubHeadingText =featureGridLayoutContent.Feature_Heading.subHeadingProp.subHeading;



  return (
    <>
      {/* Features Grid Layout */}
      <section style={{ backgroundColor: BackgroundColor }}>
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          {/* Heading Div */}
          <div className="mx-auto w-full max-w-3xl text-center">
            <h2 className="text-3xl font-semibold md:text-5xl">
              <span
                className="bg-cover bg-center bg-no-repeat px-4 text-white"
                style={headingStyle}
              >
                {HeadingText}
              </span>
            </h2>
            <div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
              <p style={subHeadingStyle}>{SubHeadingText}</p>
            </div>
          </div>
          {/* Features Div */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 lg:gap-12">
            {/* Feature Item */}
            {featureGridLayoutContent.featureCards.map((featureItem: { icon: { name: any; }; Feature_Heading: { headingProp: { heading: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | Iterable<React.ReactNode> | null | undefined; }; subHeadingProp: { subHeading: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | Iterable<React.ReactNode> | null | undefined; }; }; }, index: React.Key | null | undefined) => (
              <div
                key={index}
                className="relative mb-8 flex flex-col rounded-2xl border border-solid border-black p-8 lg:mb-4" style={featureCardColorrStyle}
              >
                <div className="absolute -top-8 bottom-auto left-auto right-4 flex h-16 w-16 flex-col items-center justify-center rounded-full border border-solid border-[#9b9b9b] bg-white [box-shadow:rgb(0,_0,_0)_0px_5px] lg:right-8">
                 <div  className="relative z-10 inline-block">
                 <DynamicFontAwesomeIcon
                      name={featureItem.icon.name}
                      
                    />
                 </div>

                  <div className="absolute z-0 h-8 w-8 rounded-full border border-[#c0d1ff] bg-[#c0d1ff]"></div>
                </div>
                <p className="mb-4 text-xl font-semibold">
                  {featureItem.Feature_Heading.headingProp.heading}
                </p>
                <p>{featureItem.Feature_Heading.subHeadingProp.subHeading}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureGridLayout;
