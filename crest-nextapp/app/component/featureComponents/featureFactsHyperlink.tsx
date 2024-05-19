/* eslint-disable @next/next/no-img-element */

import React from 'react'
import * as Icons from "react-icons/fa";

type FeatureFactsHyperlinkProps = {
    featureFactsHyperlinkContent: any;
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
  

const FeatureFactsHyperlink : React.FC<FeatureFactsHyperlinkProps> = ({featureFactsHyperlinkContent,}) =>{

  const subHeadingTextColor =featureFactsHyperlinkContent.Feature_Heading.subHeadingProp.subHeadingColor.value;
  const HeadingTextColor =featureFactsHyperlinkContent.Feature_Heading.headingProp.headingColor.value;
  const BackgroundColor = featureFactsHyperlinkContent.backGroundColor.value;


  const FeatureFactTitleColor = featureFactsHyperlinkContent.featureFactColor.value;
  const backgroundImageUrl = featureFactsHyperlinkContent.image.asset._ref
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
    featureFactsHyperlinkContent.Feature_Heading.headingProp.heading;
  const SubHeadingText =
    featureFactsHyperlinkContent.Feature_Heading.subHeadingProp.subHeading;


    return (
        <section className="body-font" style={{ backgroundColor: BackgroundColor }}>
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
              {/* Heading Div */}
              <div className="mx-auto w-full max-w-3xl text-start ">
                <h2 className="text-3xl font-semibold md:text-5xl">
                  <span
                    className="bg-cover bg-center bg-no-repeat px-4"
                    style={headingStyle}
                  >
                    {HeadingText}
                  </span>
                </h2>
                <div className="mb-8 mt-4 font-semibold max-w-[528px] md:mb-12 lg:mb-16">
                  <p style={subHeadingStyle}>{SubHeadingText}</p>
                </div>
              </div>
              {/* Map over feature items */}
              {featureFactsHyperlinkContent.feactureHyperlink.map((featureItem: { icon: { name: any; }; Fact: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | Iterable<React.ReactNode> | null | undefined; FactSubtitle: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | Iterable<React.ReactNode> | null | undefined; promotion: { link: string | undefined; buttonBackgroundColor: { value: any; }; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | Iterable<React.ReactNode> | null | undefined; }; }, index: React.Key | null | undefined) => (
                <div key={index} className="flex flex-col mb-10 lg:items-start items-center">
                  <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                  <DynamicFontAwesomeIcon
                      name={featureItem.icon.name}
                      iconSize={20}
                    />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-bold mb-3">
                      {featureItem.Fact}
                    </h2>
                    <p className="leading-relaxed text-base ">
                      {featureItem.FactSubtitle}
                    </p>
                    <a href={featureItem.promotion.link} className="inline-flex items-center justify-center mt-5 py-3 text-base font-bold text-center border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90" style={{ backgroundColor: featureItem.promotion.buttonBackgroundColor.value}}>
                      {featureItem.promotion.title}
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
            {/* Image */}
            <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden" data-aos="slide-left" >
              <img
                alt="feature"
                className="object-cover object-center h-full w-full"
                src={NewbackgroundImageUrl}
              />
            </div>
          </div>
        </section>
      );
    };

export default FeatureFactsHyperlink