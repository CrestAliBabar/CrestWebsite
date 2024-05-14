import React from "react";

type StepBlockRectangleProps = {
  stepBlockRectangleContent: any;
};

const StepBlockRectangle: React.FC<StepBlockRectangleProps> = ({
  stepBlockRectangleContent,
}) => {
  // console.log("stepBlockRectangleContent:", stepBlockRectangleContent);

  const backgroundColor = stepBlockRectangleContent.backGroundColor
    ? stepBlockRectangleContent.backGroundColor.value
    : "#ffffff";

  const heading = stepBlockRectangleContent.heading;

  const headingStyleColor = stepBlockRectangleContent.headingTextColor
    ? stepBlockRectangleContent.headingTextColor.value
    : "#000000";

  const description = stepBlockRectangleContent.description;

  const descriptionTextColor = stepBlockRectangleContent.descriptionTextColor
    ? stepBlockRectangleContent.descriptionTextColor.value
    : "#647084";

  const rectangleBoxes = stepBlockRectangleContent.rectangleBox;

  const blockDescriptionTextColor =
    stepBlockRectangleContent.blockDescriptionTextColor
      ? stepBlockRectangleContent.blockDescriptionTextColor.value
      : "#647084";

  const indexTextColor = stepBlockRectangleContent.indexTextColor
    ? stepBlockRectangleContent.indexTextColor.value
    : "#ffffff";

  const blockBackGroundColor = stepBlockRectangleContent.blockBackGroundColor
    ? stepBlockRectangleContent.blockBackGroundColor.hex
    : "#f2f2f7";

  const iconBackGroundColor = stepBlockRectangleContent.iconBackGroundColor
    ? stepBlockRectangleContent.iconBackGroundColor.hex
    : "#276ef1";

  return (
    <section style={{ backgroundColor: backgroundColor }}>
      {/* Section HIW */}
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        {/* Title */}
        <h2
          style={{ color: headingStyleColor }}
          className="text-center text-3xl font-bold md:text-5xl">
          {heading}
        </h2>
        <p
          style={{ color: descriptionTextColor }}
          className="mx-auto mb-12 mt-4 max-w-lg text-center">
          {description}
        </p>
        {/* Content */}
        <div className="mx-auto grid max-w-xl gap-6">
          {rectangleBoxes.map((rectangleBox: any, index: number) => {
            // console.log("rectangleBox:", rectangleBox);
            const number = index + 1;
            const rectangleBoxDescription = rectangleBox.description;
            return (
              <div
                key={index}
                style={{ backgroundColor: blockBackGroundColor }}
                className="flex items-center justify-center rounded-sm px-6 py-4">
                <div
                  style={{ backgroundColor: iconBackGroundColor }}
                  className="mr-6 flex h-14 w-14 flex-none items-center justify-center rounded-sm">
                  <p
                    style={{ color: indexTextColor }}
                    className="text-xl font-bold">
                    {number}
                  </p>
                </div>
                <p style={{ color: blockDescriptionTextColor }}>
                  {rectangleBoxDescription}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StepBlockRectangle;
