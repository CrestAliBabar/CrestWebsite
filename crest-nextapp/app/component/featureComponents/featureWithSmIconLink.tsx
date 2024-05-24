import React from "react";
import * as Icons from "react-icons/fa";

type FeatureWithSmIconLinkProps = {
  featureWithSmIconLinkContent: any;
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

const FeatureWithSmIconLink: React.FC<FeatureWithSmIconLinkProps> = ({
  featureWithSmIconLinkContent,
}) => {
  const backgroundColor = featureWithSmIconLinkContent.backgroundColor
    ? featureWithSmIconLinkContent.backgroundColor.value
    : "#1a202c"; // bg-gray-900
  const titleTextColor = featureWithSmIconLinkContent.titleTextColor
    ? featureWithSmIconLinkContent.titleTextColor.value
    : "#6366f1"; // text-indigo-400
  const headingTextColor = featureWithSmIconLinkContent.headingTextColor
    ? featureWithSmIconLinkContent.headingTextColor.value
    : "#ffffff"; // text-white
  const subHeadingTextColor = featureWithSmIconLinkContent.subHeadingTextColor
    ? featureWithSmIconLinkContent.subHeadingTextColor.value
    : "#d1d5db"; // text-gray-300

  return (
    <div className="bg-gray-900 py-24 sm:py-32" style={{ backgroundColor }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center" data-aos="fade-up">
          <h2
            className="text-base font-semibold leading-7"
            style={{ color: titleTextColor }}>
            {featureWithSmIconLinkContent.title}
          </h2>
          <p
            className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: headingTextColor }}>
            {featureWithSmIconLinkContent.heading}
          </p>
          <p
            className="mt-6 text-lg leading-8"
            style={{ color: subHeadingTextColor }}>
            {featureWithSmIconLinkContent.subHeading}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {featureWithSmIconLinkContent.features.map(
              (feature: any, index: number) => {
                const iconBackgroundColor = feature.iconBackgroundColor
                  ? feature.iconBackgroundColor.value
                  : "#3ffff2";

                const iconColor = feature.iconColor
                  ? feature.iconColor.value
                  : "#6366f1"; // text-indigo-400

                const cardTitleTextColor = feature.cardTitleTextColor
                  ? feature.cardTitleTextColor.value
                  : "#ffffff"; // text-white
                const cardDescriptionTextColor =
                  feature.cardDescriptionTextColor
                    ? feature.cardDescriptionTextColor.value
                    : "#d1d5db"; // text-gray-300
                const cardBackgroundColor = feature.cardBackgroundColor
                  ? feature.cardBackgroundColor.value
                  : backgroundColor;

                return (
                  <div
                    key={index}
                    className="flex flex-col"
                    style={{ backgroundColor: cardBackgroundColor }}>
                    <dt
                      className="flex items-center gap-x-3 text-base font-semibold leading-7"
                      style={{ color: cardTitleTextColor }}>
                      <div
                        className="h-5 w-5 flex-none rounded-lg"
                        style={{
                          color: iconColor,
                        }}>
                        <DynamicFontAwesomeIcon
                          name={feature.icon.name}
                          iconSize={18}
                        />
                      </div>
                      {feature.cardTitle}
                    </dt>
                    <dd
                      className="mt-4 flex flex-auto flex-col text-base leading-7"
                      style={{ color: cardDescriptionTextColor }}>
                      <p className="flex-auto">{feature.cardDescription}</p>
                      <p className="mt-6">
                        <a
                          href={feature.linkHref}
                          className="text-sm font-semibold leading-6"
                          style={{ color: iconColor }}>
                          {feature.linkTitle} <span aria-hidden="true">→</span>
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

export default FeatureWithSmIconLink;
