import React from "react";

type TeamWithIntroductionProps = {
  teamWithIntroductionContent: any;
};

const TeamWithIntroduction: React.FC<TeamWithIntroductionProps> = ({
  teamWithIntroductionContent,
}) => {
  // console.log(teamWithIntroductionContent);
  const backGroundColor = teamWithIntroductionContent.backGroundColor
    ? teamWithIntroductionContent.backGroundColor.value
    : "#ffffff";

  const heandingColor = teamWithIntroductionContent.headingTextColor
    ? teamWithIntroductionContent.headingTextColor.value
    : "#000000";
  const teamDescriptionTextColor =
    teamWithIntroductionContent.TeamDescriptionTextColor
      ? teamWithIntroductionContent.TeamDescriptionTextColor.value
      : "#636262";

  const cardColor = teamWithIntroductionContent.cardColor
    ? teamWithIntroductionContent.cardColor.value
    : "#ffffff";

  const nameColor = teamWithIntroductionContent.nameColor
    ? teamWithIntroductionContent.nameColor.value
    : "#000000";
  const positionColor = teamWithIntroductionContent.positionColor
    ? teamWithIntroductionContent.positionColor.value
    : "#647084";
  const introductionTextColor =
    teamWithIntroductionContent.introductionTextColor
      ? teamWithIntroductionContent.introductionTextColor.value
      : "#647084";
  return (
    <section style={{ backgroundColor: backGroundColor }}>
      {/* Section Team */}
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        {/* Title */}
        <h2
          style={{ color: heandingColor }}
          className="text-center text-3xl font-bold md:text-5xl">
          {teamWithIntroductionContent.Team_Heading}
        </h2>
        <p
          style={{ color: teamDescriptionTextColor }}
          className="mx-auto mb-8 mt-4 max-w-lg text-center md:mb-16">
          {teamWithIntroductionContent.Team_Description}
        </p>
        {/* Team List */}
        <ul className="grid md:grid-cols-1 lg:grid-cols-2 gap-5 md:gap-8 justify-center">
          {teamWithIntroductionContent.Team_Members.map(
            (member: any, index: number) => {
              const imageURl =
                "https://cdn.sanity.io/images/7xkjaifb/production/" +
                member.image.asset._ref
                  .split("-")
                  .slice(1)
                  .join("-")
                  .replace(/-([^-]*)$/, ".$1");
              return (
                <li
                  key={index}
                  style={{ backgroundColor: cardColor }}
                  className="mx-auto flex flex-col md:flex-row items-center gap-4 border border-solid border-[#dfdfdf] p-8 text-center md:items-start md:text-left max-w-sm md:max-w-full">
                  <img
                    src={imageURl}
                    // src='https://assets.website-files.com/6357722e2a5f19121d37f84d/635b47d5a5453de17e4e9bd8_Rectangle%2035-4.png'
                    alt=""
                    className="inline-block h-64 w-full object-fit"
                  />
                  <div>
                    <p style={{ color: nameColor }} className="font-bold">
                      {member.name}
                    </p>
                    <p
                      style={{ color: positionColor }}
                      className="font-semibold mb-4">
                      {member.position}
                    </p>
                    <p
                      style={{ color: introductionTextColor }}
                      className="text-sm ">
                      {member.introduction}
                    </p>
                  </div>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </section>
  );
};

export default TeamWithIntroduction;
