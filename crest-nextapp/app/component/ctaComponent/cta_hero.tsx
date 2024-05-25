/* eslint-disable @next/next/no-img-element */
import React from "react";

type CTAHeroProps = {
  ctaHeroContent?: any;
};
const CTAHeroComponent: React.FC<CTAHeroProps> = ({ ctaHeroContent }) => {
  const TitleTextColor = ctaHeroContent.TitleTextColor
    ? ctaHeroContent.TitleTextColor.value
    : "#f2f2f7";
  const DescriptionTextColor = ctaHeroContent.DescriptionTextColor
    ? ctaHeroContent.DescriptionTextColor.value
    : "#647084";
  const imageurl =
    "https://cdn.sanity.io/images/7xkjaifb/production/" +
    ctaHeroContent.image.asset._ref
      .split("-")
      .slice(1)
      .join("-")
      .replace(/-([^-]*)$/, ".$1");

  const BackgroundColor = ctaHeroContent.backGroundColor.value;

  const CTAButtonColor = ctaHeroContent.promotion.buttonBackgroundColor.value;

  const CTAButtonColorLink = ctaHeroContent.promotion.link;

  const CTAButtonText = ctaHeroContent.promotion.title;

  const IconTextColor = ctaHeroContent.iconTextColor.value;

  const IconColorStyle = {
    color: IconTextColor,
  };

  const buttonStyle = {
    backgroundColor: CTAButtonColor,
  };

  return (
    <section style={{ backgroundColor: BackgroundColor }}>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        {/* Component */}
        <div className="grid grid-cols-1 items-center justify-center gap-12 sm:gap-20 lg:grid-cols-2">
          {/* Image Div */}
          <div
            className="relative h-full max-h-[560px] w-[85%] overflow-visible max-[991px]:left-4 md:w-[95%] lg:w-full"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <img
              src={imageurl}
              //   src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63915d1cb654acd795a72b12_magicpattern-ixxjruC7Gg4-unsplash.jpg"
              alt=""
              className="mx-auto block h-full w-full max-w-[800px] rotate-[3.5deg] rounded-2xl object-cover"
            />
          </div>
          {/* Content Div */}
          <div
            className="max-w-[720px]"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <h2
              style={{ color: TitleTextColor }}
              className="mb-6 text-3xl font-semibold md:mb-10 md:text-5xl"
            >
              {ctaHeroContent.CTA_Title}
            </h2>
            <div className="mx-auto max-w-[630px] md:mb-10">
              <p style={{ color: DescriptionTextColor }}>
                {ctaHeroContent.Description}
              </p>
            </div>
            {/* Features */}
            <div className="grid max-w-[400px] grid-cols-2 gap-4">
              {ctaHeroContent.iconText.map(
                (
                  featureFact: {
                    Fact:
                      | string
                      | number
                      | boolean
                      | React.ReactElement<
                          any,
                          string | React.JSXElementConstructor<any>
                        >
                      | Iterable<React.ReactNode>
                      | React.ReactPortal
                      | Promise<React.AwaitedReactNode>
                      | Iterable<React.ReactNode>
                      | null
                      | undefined;
                  },
                  index: React.Key | null | undefined
                ) => (
                  <div key={index} className="mb-2 flex items-center">
                    <img
                      src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63915fec5d1aa12f6aedd68c_Vector%20(14).svg"
                      alt=""
                      className="mr-2 inline-block"
                    />
                    <p className="ml-3 justify-end" style={IconColorStyle}>
                      {featureFact.Fact}
                    </p>
                  </div>
                )
              )}
            </div>
            {/* Divider */}
            <div className="mb-10 mt-10 w-full max-w-md border-b border-b-[#d9d9d9]"></div>
            <a
              href={CTAButtonColorLink}
              className="inline-block rounded-xl px-8 py-4 font-semibold transition shadow-[9px_11px_6px_0px_#325c6c] hover:shadow-[0px_0px_0px_0px_#325c6c]"
              style={buttonStyle}
            >
              {CTAButtonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CTAHeroComponent;
