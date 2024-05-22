import React from "react";
import * as Icons from "react-icons/fa";

type FeatureCenteredGridProps = {
  featureCenteredGridContent: any;
};

type IconName = keyof typeof Icons;

type DynamicFontAwesomeIconProps = {
  name: IconName;
  iconSize?: number;
};

const DynamicFontAwesomeIcon: React.FC<DynamicFontAwesomeIconProps> = ({
  name,
  iconSize = 24,
}) => {
  const Icon = Icons[name];
  return <Icon size={iconSize} />;
};

const FeatureCenteredGrid: React.FC<FeatureCenteredGridProps> = ({
  featureCenteredGridContent,
}) => {
  const backgroundColor = featureCenteredGridContent.backgroundColor
    ? featureCenteredGridContent.backgroundColor.value
    : "#ffffff";
  const titleTextColor = featureCenteredGridContent.titleTextColor
    ? featureCenteredGridContent.titleTextColor.value
    : "#6366f1";
  const headingTextColor = featureCenteredGridContent.headingTextColor
    ? featureCenteredGridContent.headingTextColor.value
    : "#111827";
  const subHeadingTextColor = featureCenteredGridContent.subHeadingTextColor
    ? featureCenteredGridContent.subHeadingTextColor.value
    : "#4B5563";

  return (
    <div className="py-24 sm:py-32" style={{ backgroundColor }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center" data-aos="fade-up">
          <h2
            className="text-base font-semibold leading-7"
            style={{ color: titleTextColor }}>
            {featureCenteredGridContent.title}
          </h2>
          <p
            className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: headingTextColor }}>
            {featureCenteredGridContent.heading}
          </p>
          <p
            className="mt-6 text-lg leading-8"
            style={{ color: subHeadingTextColor }}>
            {featureCenteredGridContent.subHeading}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {featureCenteredGridContent.features.map(
              (feature: any, index: number) => {
                const iconBackgroundColor = feature.iconBackgroundColor
                  ? feature.iconBackgroundColor.value
                  : "#4f46e5";

                const cardTitleTextColor = feature.cardTitleTextColor
                  ? feature.cardTitleTextColor.value
                  : "#111827";
                const cardDescriptionTextColor =
                  feature.cardDescriptionTextColor
                    ? feature.cardDescriptionTextColor.value
                    : "#4B5563";
                const cardBackgroundColor = feature.cardBackgroundColor
                  ? feature.cardBackgroundColor.value
                  : backgroundColor;

                return (
                  <div
                    style={{ backgroundColor: cardBackgroundColor }}
                    key={index}
                    className="relative pl-16"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}>
                    <dt
                      style={{ color: cardTitleTextColor }}
                      className="text-base font-semibold leading-7">
                      <div
                        className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg "
                        style={{ backgroundColor: iconBackgroundColor }}>
                        <DynamicFontAwesomeIcon
                          name={feature.icon.name}
                          iconSize={24}
                        />
                      </div>
                      {feature.cardTitle}
                    </dt>
                    <dd
                      style={{ color: cardDescriptionTextColor }}
                      className="mt-2 text-base leading-7">
                      {feature.cardDescription}
                    </dd>
                  </div>
                );
              }
            )}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FeatureCenteredGrid;
