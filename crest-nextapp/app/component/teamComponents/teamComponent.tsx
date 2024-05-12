import React from "react";
import TeamCardStandard from "./teamCardStandard";
import TeamWithIntroduction from "./teamWithIntroduction";

type TeamComponentProps = {
  teamContent: any[];
};

const TeamComponent: React.FC<TeamComponentProps> = ({ teamContent }) => {
  return (
    <>
      {teamContent.map((content: any, index: number) => {
        switch (content._type) {
          case "Team_With_Introduction":
            return (
              <TeamWithIntroduction
              teamWithIntroductionContent={content}
              key={index}
              />
            );
          case "Team_With_Card":
            return (
              <TeamCardStandard teamCardStandardContent={content} key={index} />
            );
          default:
            return null;
        }
      })}
    </>
  );
};

export default TeamComponent;
