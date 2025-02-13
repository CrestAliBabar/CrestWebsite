import React from "react";
import CdcDashboardComponent from "../dashboards/cdcDashboardComponent/cdcDashboardComponent";
import SvmDashboardComponent from "../dashboards/svmDashboardComponent/svmDashboardComponent";

type FeatureDashboardProps = {
  featureDashboardContent: any;
};

const FeatureDashboard: React.FC<FeatureDashboardProps> = ({ featureDashboardContent }) => {
  const headingColor = featureDashboardContent.Feature_Heading.headingProp.headingColor.value;
  const subHeadingTextColor = featureDashboardContent.Feature_Heading.subHeadingProp.subHeadingColor.value;

  const headingText = featureDashboardContent.Feature_Heading.headingProp.heading;
  const SubHeadingText = featureDashboardContent.Feature_Heading.subHeadingProp.subHeading;

  const subTextColor = featureDashboardContent.headingSubTextProp?.headingSubTextColor?.value;
  const subText = featureDashboardContent.headingSubTextProp?.headingSubText;

  const dashboard = featureDashboardContent.dashboardList;

  // Custom cursor style
  const customCursorStyle = {
    cursor: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" style="transform: rotate(-30deg);" fill="%23eabc25"><path d="M12 2L2 22l3-3 7-3 7 3 3 3L12 2z"/></svg>') 16 16, pointer`
  };

  return (
    <div className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center" data-aos="fade-up">
          {/* Subtext Heading */}
          {subText && (
            <h2
              className="text-base font-semibold leading-7"
              style={{ color: subTextColor }}
            >
              {subText}
            </h2>
          )}

          {/* Heading */}
          <p
            className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: headingColor }}
          >
            {headingText}
          </p>

          {/* Subheading */}
          <p
            className="mt-6 text-lg leading-8"
            style={{ color: subHeadingTextColor }}
          >
            {SubHeadingText}
          </p>

          {/* Cool disclaimer text */}
          <p className="mt-4 text-sm italic text-gray-600">
            This is just a visual demo, not a real application.
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden pt-16">
        <div
          className="mx-auto max-w-7xl px-6 lg:px-8"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          {/* Dashboard Card */}
          <div className="relative rounded-3xl p-8 overflow-hidden bg-gradient-to-br from-[#d4a017] to-[#6a3c19] transition-all duration-500 hover:shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-l from-white via-transparent to-white opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white opacity-10" />

            {/* Content container - Render different dashboards based on the selected option */}
            <div className="relative z-10" style={customCursorStyle}>
              {dashboard === "svm" ? (
                <SvmDashboardComponent />
              ) : (
                <CdcDashboardComponent />
              )}
            </div>
          </div>

          {/* Bottom gradient fade */}
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-[#304e5a] pt-[7%]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureDashboard;
