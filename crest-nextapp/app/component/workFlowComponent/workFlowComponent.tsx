import React from "react";
import StepBlockRectangle from "./stepBlockRectangle";
import StepBlockRound from "./stepBlockRound";
import StepHowItWorks from "./stepHowItWorks";

type WorkFlowComponentProps = {
  workFlowContent: any[];
};

const WorkFlowComponent: React.FC<WorkFlowComponentProps> = ({ workFlowContent }) => {
  return (
    <>
      {workFlowContent.map((content: any, index: number) => {
        switch (content._type) {
          case "Step_Block_Rectangle":
            return (
              <StepBlockRectangle
                stepBlockRectangleContent={content}
                key={index}
              />
            );
          case "Step_Block_Round":
            return (
              <StepBlockRound stepBlockRoundContent={content} key={index} />
            );
          case "Step_How_It_Works":
              return (
                <StepHowItWorks stepHowItWorksContent={content} key={index} />
              );
          default:
            return null;
        }
      })}
    </>
  );
};

export default WorkFlowComponent;
