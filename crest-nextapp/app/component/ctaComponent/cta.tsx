import React from "react";

type CTAProps = {
  ctaContent?: any;
};

const CTAComponent: React.FC<CTAProps> = ({ ctaContent }) => {
  const backGroundColor = ctaContent.backGroundColor
    ? ctaContent.backGroundColor.value
    : "#ffffff";
  const TitleTextColor = ctaContent.TitleTextColor
    ? ctaContent.TitleTextColor.value
    : "#f2f2f7";
  const DescriptionTextColor = ctaContent.DescriptionTextColor
    ? ctaContent.DescriptionTextColor.value
    : "#647084";
  const CommentTextColor = ctaContent.CommentTextColor
    ? ctaContent.CommentTextColor.value
    : "#647084";
  const getStartLink = ctaContent.getStartLink || "#";
  return (
    <section style={{ backgroundColor: backGroundColor }}>
      <div className="mx-auto w-full md:py-0 lg:py-0">
        {/* CTA Content */}
        <div className="flex w-full flex-col items-center px-6 py-16 text-center md:py-24 lg:py-32">
          {/* CTA Title */}
          <div className="mb-8 flex-col">
            <h2
              style={{ color: TitleTextColor }}
              className="mb-4 text-3xl font-bold md:text-5xl"
            >
              {ctaContent.CTA_Title}
            </h2>
            <p
              style={{ color: DescriptionTextColor }}
              className="mx-auto max-w-lg "
            >
              {ctaContent.Description}
            </p>
          </div>
          {/* CTA Button */}
          <a
            href={getStartLink}
            className="mb-4 flex flex-row items-center bg-[#276ef1] px-8 py-4 font-semibold text-white transition [box-shadow:rgb(171,_196,245)-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]"
          >
            <p className="mr-6 font-bold">Get Started</p>
            <svg
              fill="currentColor"
              className="h-4 w-4 flex-none"
              viewBox="0 0 20 21"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Arrow Right</title>
              <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
            </svg>
          </a>
          <p style={{ color: DescriptionTextColor }} className="text-gray-500">
            {ctaContent.Comment}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTAComponent;
