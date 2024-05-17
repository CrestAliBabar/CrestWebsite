/* eslint-disable @next/next/no-img-element */
import React from "react";

type StepBlockRoundProps = {
  stepBlockRoundContent: any;
};

const StepBlockRound: React.FC<StepBlockRoundProps> = ({
  stepBlockRoundContent,
}) => {
  // console.log("stepBlockRoundContent:", stepBlockRoundContent);

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
    : "#fffff";
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
      {/* Container */}
      <div
        className="mx-auto w-full max-w-3xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
        {/* Heading */}
        <h2
          style={{ color: headingStyleColor }}
          className="mx-auto mb-12 max-w-3xl text-center text-3xl font-extrabold md:mb-20 md:text-5xl">
          {heading}
        </h2>

        {/* How it Works */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6">
          {roundBoxes.map((roundBox: any, index: number) => {
            const roundBoxTitle = roundBox.title;
            const roundBoxDescription = roundBox.description;
            const roundBoxIconUrl = roundBox.icon
              ? roundBox.icon
              : "https://assets.website-files.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a274_CodepenLogo.svg";
            return (
              <div
                key={index}
                style={{ backgroundColor: roundBoxBgColor }}
                className="flex flex-row items-center gap-6 rounded-[60px] border border-solid border-[#ada790] px-6 py-4 transition hover:bg-[#eceae2]">
                <div
                  style={{ backgroundColor: roundBoxIconBgColor }}
                  className="flex h-20 w-20 flex-none flex-col items-center justify-center rounded-full">
                  <img
                    src={roundBoxIconUrl}
                    alt="Get Started Icon"
                    className="inline-block"
                  />
                </div>
                <div className="flex flex-col items-start gap-2.5">
                  <h5
                    style={{ color: roundBoxTitleColor }}
                    className="text-base font-bold md:text-xl">
                    {roundBoxTitle}
                  </h5>
                  <p style={{ color: roundBoxDescriptionColor }}>
                    {roundBoxDescription}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StepBlockRound;
