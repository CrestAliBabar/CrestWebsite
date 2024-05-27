/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import * as Icons from "react-icons/fa";

type FeatureWithSmIconLinkProps = {
  featureWithSmIconLinkContent: any;
};

type IconName = keyof typeof Icons;

type DynamicFontAwesomeIconProps = {
  name: IconName;
  iconSize?: number;
};

const DynamicFontAwesomeIcon: React.FC<DynamicFontAwesomeIconProps> = ({
  name,
  iconSize = 24,
}) => {
  const Icon = Icons[name];
  return <Icon size={iconSize} />;
};


type StepBlockRoundProps = {
  stepBlockRoundContent: any;
};

const StepBlockRound: React.FC<StepBlockRoundProps> = ({
  stepBlockRoundContent,
}) => {
  const heading = stepBlockRoundContent.heading;

  const headingStyleColor = stepBlockRoundContent.headingTextColor
    ? stepBlockRoundContent.headingTextColor.value
    : "#000000";

  const roundBoxes = stepBlockRoundContent.roundBox;

  const backgroundColor = stepBlockRoundContent.backGroundColor
    ? stepBlockRoundContent.backGroundColor.value
    : "#ffffff";
  const roundBoxBgColor = stepBlockRoundContent.blockBackGroundColor
    ? stepBlockRoundContent.blockBackGroundColor.value
    : "#ffffff";
  const roundBoxHoverColor = stepBlockRoundContent.blockHoverColor
    ? stepBlockRoundContent.blockHoverColor.value
    : "#eceae2";
  const roundBoxIconBgColor = stepBlockRoundContent.iconBackGroundColor
    ? stepBlockRoundContent.iconBackGroundColor.value
    : "#c9fd02";
  const roundBoxTitleColor = stepBlockRoundContent.blockTitleColor
    ? stepBlockRoundContent.blockTitleColor.value
    : "#000000";
  const roundBoxDescriptionColor =
    stepBlockRoundContent.blockDescriptionTextColor
      ? stepBlockRoundContent.blockDescriptionTextColor.value
      : "#636262";

  return (
    <section style={{ backgroundColor: backgroundColor }}>
      <div className="mx-auto w-full max-w-3xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
        <h2
          style={{ color: headingStyleColor }}
          className="mx-auto mb-12 max-w-3xl text-center text-3xl font-extrabold md:mb-20 md:text-5xl" >
          {heading}
        </h2>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6"  data-aos="fade-down" data-aos-delay="400" >
          {roundBoxes.map((roundBox: any, index: number) => {
            console.log("roundBox:", roundBox);
            const roundBoxTitle = roundBox.title;
            const roundBoxDescription = roundBox.description;
            const roundBoxIconUrl = roundBox.icon
              ? roundBox.icon.name
              : "FaAdn";
            return (
              <RoundBox
                key={index}
                title={roundBoxTitle}
                description={roundBoxDescription}
                iconUrl={roundBoxIconUrl}
                bgColor={roundBoxBgColor}
                hoverColor={roundBoxHoverColor}
                iconBgColor={roundBoxIconBgColor}
                titleColor={roundBoxTitleColor}
                descriptionColor={roundBoxDescriptionColor}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

type RoundBoxProps = {
  title: string;
  description: string;
  iconUrl: any;
  bgColor: string;
  hoverColor: string;
  iconBgColor: string;
  titleColor: string;
  descriptionColor: string;
};

const RoundBox: React.FC<RoundBoxProps> = ({
  title,
  description,
  iconUrl,
  bgColor,
  hoverColor,
  iconBgColor,
  titleColor,
  descriptionColor,
}) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="flex flex-row items-center gap-6 rounded-[60px] border border-solid border-[#ada790] hover:cursor-pointer px-6 py-4 transition"
      style={{ backgroundColor: hover ? hoverColor : bgColor }}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}>
      <div
        style={{ backgroundColor: iconBgColor }}
        className="flex h-20 w-20 flex-none flex-col items-center justify-center rounded-full">
        {/* <img src={iconUrl} alt="Get Started Icon" className="inline-block" /> */}
        <DynamicFontAwesomeIcon
                          name={iconUrl}
                          iconSize={32}
                        />
                     
      </div>
      <div className="flex flex-col items-start gap-2.5">
        <h5
          style={{ color: titleColor }}
          className="text-base font-bold md:text-xl">
          {title}
        </h5>
        <p style={{ color: descriptionColor }}>{description}</p>
      </div>
    </div>
  );
};

export default StepBlockRound;