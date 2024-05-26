import React from "react";

type CTAPatternProps = {
  ctaPatternContent?: any;
};
const CTAPatternComponent: React.FC<CTAPatternProps> = ({
  ctaPatternContent,
}) => {
  const TitleTextColor = ctaPatternContent.TitleTextColor
    ? ctaPatternContent.TitleTextColor.value
    : "#f2f2f7";
  const DescriptionTextColor = ctaPatternContent.DescriptionTextColor
    ? ctaPatternContent.DescriptionTextColor.value
    : "#647084";
  const BackgroundColor = ctaPatternContent.backGroundColor.value;
  const CTAButtonColor =
    ctaPatternContent.promotion.buttonBackgroundColor.value;

  const CTAButtonColorLink = ctaPatternContent.promotion.link;

  const CTAButtonText = ctaPatternContent.promotion.title;

  const buttonStyle = {
    backgroundColor: CTAButtonColor,
  };
  return (
    <section>
      {/* Container */}
      <div className="px-3 py-16 md:px-40 md:py-24 lg:py-32">
        {/* Component */}
        <div
          className="mx-auto w-full max-w-7xl rounded-[48px] bg-cover bg-center bg-no-repeat py-20 text-white "
          style={{ backgroundColor: BackgroundColor }}
        >
          <div className="mx-auto max-w-3xl text-center">
            {/* Heading Div */}
            <div className="mb-6 max-w-[720px] lg:mb-12">
              <h2
                style={{ color: TitleTextColor }}
                className="mb-4 text-3xl font-semibold md:text-5xl"
              >
                {ctaPatternContent.CTA_Title}
              </h2>
              <div className="mx-auto max-w-[630px]">
                <p style={{ color: DescriptionTextColor }}>
                  {ctaPatternContent.Description}
                </p>
              </div>
            </div>
            {/* CTA Button */}
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
export default CTAPatternComponent;
