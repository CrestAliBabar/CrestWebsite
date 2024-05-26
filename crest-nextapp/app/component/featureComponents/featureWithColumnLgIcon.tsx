import React from "react";
import * as Icons from "react-icons/fa";

type FeatureWithColumnLgIconProps = {
  featureWithColumnLgIconContent: any;
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

const FeatureWithColumnLgIcon: React.FC<FeatureWithColumnLgIconProps> = ({
  featureWithColumnLgIconContent,
}) => {
  const backgroundColor = featureWithColumnLgIconContent.backgroundColor
    ? featureWithColumnLgIconContent.backgroundColor.value
    : "#ffffff"; // Default white background color

  const headingTextColor = featureWithColumnLgIconContent.headingTextColor
    ? featureWithColumnLgIconContent.headingTextColor.value
    : "#000000"; // Default black color

  const subHeadingTextColor = featureWithColumnLgIconContent.subHeadingTextColor
    ? featureWithColumnLgIconContent.subHeadingTextColor.value
    : "#4b5563"; // Default gray color

  return (
    <div className="py-24 sm:py-32" style={{ backgroundColor }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: headingTextColor }}>
            {featureWithColumnLgIconContent.heading}
          </h2>
          <p
            className="mt-6 text-lg leading-8"
            style={{ color: subHeadingTextColor }}>
            {featureWithColumnLgIconContent.subHeading}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {featureWithColumnLgIconContent.features.map(
              (feature: any, index: number) => {
                const iconBackgroundColor = feature.iconBackgroundColor
                  ? feature.iconBackgroundColor.value
                  : "#6366f1"; // Default indigo color

                const iconColor = feature.iconColor
                  ? feature.iconColor.value
                  : "#ffffff"; // Default white color

                const cardTitleTextColor = feature.cardTitleTextColor
                  ? feature.cardTitleTextColor.value
                  : "#000000"; // Default black color

                const cardDescriptionTextColor =
                  feature.cardDescriptionTextColor
                    ? feature.cardDescriptionTextColor.value
                    : "#4b5563"; // Default gray color

                return (
                  <div key={index} className="flex flex-col">
                    <dt
                      className="text-base font-semibold leading-7"
                      style={{ color: cardTitleTextColor }}>
                      <div
                        className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg"
                        style={{
                          backgroundColor: iconBackgroundColor,
                          color: iconColor,
                        }}>
                        <DynamicFontAwesomeIcon
                          name={feature.icon.name}
                          iconSize={24}
                        />
                      </div>
                      {feature.cardTitle}
                    </dt>
                    <dd
                      className="mt-1 flex flex-auto flex-col text-base leading-7"
                      style={{ color: cardDescriptionTextColor }}>
                      <p className="flex-auto">{feature.cardDescription}</p>
                      <p className="mt-6">
                        <a
                          href={feature.linkHref}
                          className="text-sm font-semibold leading-6 text-indigo-600">
                          {feature.linkTitle} 
                          {/* <span aria-hidden="true">→</span> */}
                        </a>
                      </p>
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

export default FeatureWithColumnLgIcon;
