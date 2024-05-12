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
  return (
    <header>
      {/* Container */}
      <div className="px-3 py-16 md:px-40 md:py-24 lg:py-32">
        {/* Component */}
        <div className="mx-auto w-full max-w-7xl rounded-[48px] bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/6391a6daa19785eb51dd3666_CTA%20(2).svg')] bg-cover bg-center bg-no-repeat py-20 text-white [box-shadow:rgb(106,_218,_255)_9px_9px]">
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
              href="#"
              className="inline-block rounded-xl bg-black px-8 py-4 font-semibold text-white [box-shadow:rgb(255,_255,_255)_6px_6px]"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
export default CTAPatternComponent;
