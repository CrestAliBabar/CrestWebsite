import { log } from "console";
import React from "react";
import { getCroppedImageSrc, SanityImageQueryResult } from "@/sanity/schemas/cropping";

type TeamCardStandardProps = {
  teamCardStandardContent: any;
};

const teamCardStandard: React.FC<TeamCardStandardProps> = ({
  teamCardStandardContent,
}) => {
  const backGroundColor = teamCardStandardContent.backGroundColor
    ? teamCardStandardContent.backGroundColor.value
    : "#ffffff";
  const headingStyleColor = teamCardStandardContent.headingStyleColor
    ? teamCardStandardContent.headingStyleColor.value
    : "#0000FF";
  const heandingColor = teamCardStandardContent.headingTextColor
    ? teamCardStandardContent.headingTextColor.value
    : "#000000";
  const teamDescriptionTextColor =
    teamCardStandardContent.TeamDescriptionTextColor
      ? teamCardStandardContent.TeamDescriptionTextColor.value
      : "#636262";

  const cardColor = teamCardStandardContent.cardColor
    ? teamCardStandardContent.cardColor.value
    : "#ffffff";

  const nameColor = teamCardStandardContent.nameColor
    ? teamCardStandardContent.nameColor.value
    : "#000000";
  const positionColor = teamCardStandardContent.positionColor
    ? teamCardStandardContent.positionColor.value
    : "#636262";

  // console.log(positionColor);
  return (
    <section style={{ backgroundColor: backGroundColor }}>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        {/* Heading Div */}
        <div className="text-center">
          <h2
            style={{ color: heandingColor }}
            className="text-3xl font-semibold md:text-5xl">
            {teamCardStandardContent.Team_Heading + "'s"}{" "}
            <span
              style={{ backgroundColor: headingStyleColor }}
              className="bg-cover bg-center px-4 text-white">
              Members
            </span>
          </h2>
          <p
            style={{ color: teamDescriptionTextColor }}
            className="mx-auto mb-8 mt-4 max-w-[528px]  md:mb-12 lg:mb-16">
            {teamCardStandardContent.Team_Description}
          </p>
        </div>
        {/* Team Div */}
        <div className="mx-auto grid max-w-[1040px] grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 sm:justify-items-stretch md:grid-cols-3 md:gap-4 lg:gap-6">
          {/* Item */}
          {teamCardStandardContent.Team_Members.map(
            (member: any, index: number) => {
              // const imageURl =
              //   "https://cdn.sanity.io/images/7xkjaifb/production/" +
              //   member.image.asset._ref
              //     .split("-")
              //     .slice(1)
              //     .join("-")
              //     .replace(/-([^-]*)$/, ".$1");

              const imageURl = getCroppedImageSrc(member.image as SanityImageQueryResult);

              // console.log(member);
              return (
                <div
                  key={index}
                  style={{ backgroundColor: cardColor }}
                  className="flex flex-col items-center justify-center gap-4 rounded-xl border border-solid border-[#636262] p-4 [box-shadow:rgb(0,_0,_0)_6px_6px]">
                  <img
                    src={imageURl}
                    alt=""
                    className="mb-4 inline-block h-56 w-full rounded-xl object-cover lg:h-56"
                  />
                  <p style={{ color: nameColor }} className="mb-2 font-bold">
                    {member.name}
                  </p>
                  <p
                    style={{ color: positionColor }}
                    className="mb-2 text-sm ]">
                    {member.position}
                  </p>
                  <div className="mt-4 flex flex-wrap">
                    {member.socialMedia.map((social: any, index: number) => {
                      switch (social.icon) {
                        case "personalWeb":
                          return (
                            <a
                              key={index}
                              href={social.link}
                              className="mr-4 flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-sm bg-[#ecf2ff] px-2 font-bold text-[#1353fe]">
                              <img
                                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63980be307547130d2e965fd_SlackLogo.svg"
                                alt=""
                                className="inline-block h-full w-full"
                              />
                            </a>
                          );
                        case "twitter":
                          return (
                            <a
                              key={index}
                              href={social.link}
                              className="mr-4 flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-sm bg-[#ecf2ff] px-2 font-bold text-[#1353fe]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="20"
                                height="20"
                                viewBox="0,0,256,256">
                                <g
                                  fillOpacity="0.50196"
                                  fill="#000000"
                                  fillRule="nonzero"
                                  stroke="none"
                                  strokeWidth="1"
                                  strokeLinecap="butt"
                                  strokeLinejoin="miter"
                                  strokeMiterlimit="10"
                                  strokeDasharray=""
                                  strokeDashoffset="0"
                                  fontFamily="none"
                                  fontWeight="none"
                                  fontSize="none"
                                  textAnchor="none">
                                  <g transform="scale(8.53333,8.53333)">
                                    <path d="M28,6.937c-0.957,0.425 -1.985,0.711 -3.064,0.84c1.102,-0.66 1.947,-1.705 2.345,-2.951c-1.03,0.611 -2.172,1.055 -3.388,1.295c-0.973,-1.037 -2.359,-1.685 -3.893,-1.685c-2.946,0 -5.334,2.389 -5.334,5.334c0,0.418 0.048,0.826 0.138,1.215c-4.433,-0.222 -8.363,-2.346 -10.995,-5.574c-0.458,0.788 -0.721,1.704 -0.721,2.683c0,1.85 0.941,3.483 2.372,4.439c-0.874,-0.028 -1.697,-0.268 -2.416,-0.667c0,0.023 0,0.044 0,0.067c0,2.585 1.838,4.741 4.279,5.23c-0.447,0.122 -0.919,0.187 -1.406,0.187c-0.343,0 -0.678,-0.034 -1.003,-0.095c0.679,2.119 2.649,3.662 4.983,3.705c-1.825,1.431 -4.125,2.284 -6.625,2.284c-0.43,0 -0.855,-0.025 -1.273,-0.075c2.361,1.513 5.164,2.396 8.177,2.396c9.812,0 15.176,-8.128 15.176,-15.177c0,-0.231 -0.005,-0.461 -0.015,-0.69c1.043,-0.753 1.948,-1.692 2.663,-2.761z"></path>
                                  </g>
                                </g>
                              </svg>
                            </a>
                          );
                        case "linkedin":
                          return (
                            <a
                              key={index}
                              href={social.link}
                              className="mr-4 flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-sm bg-[#ecf2ff] px-2 font-bold text-[#1353fe]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="20"
                                height="20"
                                viewBox="0,0,256,256">
                                <g
                                  fillOpacity="0.50196"
                                  fill="#000000"
                                  fillRule="nonzero"
                                  stroke="none"
                                  strokeWidth="1"
                                  strokeLinecap="butt"
                                  strokeLinejoin="miter"
                                  strokeMiterlimit="10"
                                  strokeDasharray=""
                                  strokeDashoffset="0"
                                  fontFamily="none"
                                  fontWeight="none"
                                  fontSize="none"
                                  textAnchor="none">
                                  <g transform="scale(8.53333,8.53333)">
                                    <path d="M24,4h-18c-1.105,0 -2,0.895 -2,2v18c0,1.105 0.895,2 2,2h18c1.105,0 2,-0.895 2,-2v-18c0,-1.105 -0.895,-2 -2,-2zM10.954,22h-2.95v-9.492h2.95zM9.449,11.151c-0.951,0 -1.72,-0.771 -1.72,-1.72c0,-0.949 0.77,-1.719 1.72,-1.719c0.948,0 1.719,0.771 1.719,1.719c0,0.949 -0.771,1.72 -1.719,1.72zM22.004,22h-2.948v-4.616c0,-1.101 -0.02,-2.517 -1.533,-2.517c-1.535,0 -1.771,1.199 -1.771,2.437v4.696h-2.948v-9.492h2.83v1.297h0.04c0.394,-0.746 1.356,-1.533 2.791,-1.533c2.987,0 3.539,1.966 3.539,4.522z"></path>
                                  </g>
                                </g>
                              </svg>
                            </a>
                          );
                        case "instagram":
                          return (
                            <a
                              key={index}
                              href={social.link}
                              className="mr-4 flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-sm bg-[#ecf2ff] px-2 font-bold text-[#1353fe]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="20"
                                height="20"
                                viewBox="0,0,256,256">
                                <g
                                  fillOpacity="0.50196"
                                  fill="#000000"
                                  fillRule="nonzero"
                                  stroke="none"
                                  strokeWidth="1"
                                  strokeLinecap="butt"
                                  strokeLinejoin="miter"
                                  strokeMiterlimit="10"
                                  strokeDasharray=""
                                  strokeDashoffset="0"
                                  fontFamily="none"
                                  fontWeight="none"
                                  fontSize="none"
                                  textAnchor="none">
                                  <g transform="scale(5.12,5.12)">
                                    <path d="M16,3c-7.17,0 -13,5.83 -13,13v18c0,7.17 5.83,13 13,13h18c7.17,0 13,-5.83 13,-13v-18c0,-7.17 -5.83,-13 -13,-13zM37,11c1.1,0 2,0.9 2,2c0,1.1 -0.9,2 -2,2c-1.1,0 -2,-0.9 -2,-2c0,-1.1 0.9,-2 2,-2zM25,14c6.07,0 11,4.93 11,11c0,6.07 -4.93,11 -11,11c-6.07,0 -11,-4.93 -11,-11c0,-6.07 4.93,-11 11,-11zM25,16c-4.96,0 -9,4.04 -9,9c0,4.96 4.04,9 9,9c4.96,0 9,-4.04 9,-9c0,-4.96 -4.04,-9 -9,-9z"></path>
                                  </g>
                                </g>
                              </svg>
                            </a>
                          );
                        case "youtube":
                          return (
                            <a
                              key={index}
                              href={social.link}
                              className="mr-4 flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-sm bg-[#ecf2ff] px-2 font-bold text-[#1353fe]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="20"
                                height="20"
                                viewBox="0,0,256,256">
                                <g
                                  fillOpacity="0.50196"
                                  fill="#000000"
                                  fillRule="nonzero"
                                  stroke="none"
                                  strokeWidth="1"
                                  strokeLinecap="butt"
                                  strokeLinejoin="miter"
                                  strokeMiterlimit="10"
                                  strokeDasharray=""
                                  strokeDashoffset="0"
                                  fontFamily="none"
                                  fontWeight="none"
                                  fontSize="none"
                                  textAnchor="none">
                                  <g transform="scale(5.12,5.12)">
                                    <path d="M44.89844,14.5c-0.39844,-2.19922 -2.29687,-3.80078 -4.5,-4.30078c-3.29687,-0.69922 -9.39844,-1.19922 -16,-1.19922c-6.59766,0 -12.79687,0.5 -16.09766,1.19922c-2.19922,0.5 -4.10156,2 -4.5,4.30078c-0.40234,2.5 -0.80078,6 -0.80078,10.5c0,4.5 0.39844,8 0.89844,10.5c0.40234,2.19922 2.30078,3.80078 4.5,4.30078c3.5,0.69922 9.5,1.19922 16.10156,1.19922c6.60156,0 12.60156,-0.5 16.10156,-1.19922c2.19922,-0.5 4.09766,-2 4.5,-4.30078c0.39844,-2.5 0.89844,-6.10156 1,-10.5c-0.20312,-4.5 -0.70312,-8 -1.20312,-10.5zM19,32v-14l12.19922,7z"></path>
                                  </g>
                                </g>
                              </svg>
                            </a>
                          );
                        default:
                          return null;
                      }
                    })}
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default teamCardStandard;
