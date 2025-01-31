/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import * as Icons from "react-icons/fa";
import { getCroppedImageSrc, SanityImageQueryResult } from "@/sanity/schemas/cropping";

type FeatureWithLargeScreenShotProps = {
  featureWithLargeScreenShotContent: any;
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
  const Icon = Icons[name as IconName];
  if (!Icon) {
    console.error(`Icon "${name}" does not exist in react-icons/fa`);
    return null;
  }
  return <Icon size={iconSize} />;
};

const FeatureWithLargeScreenShot: React.FC<FeatureWithLargeScreenShotProps> = ({
  featureWithLargeScreenShotContent,
}) => {
  const backgroundColor = featureWithLargeScreenShotContent.backgroundColor
    ? featureWithLargeScreenShotContent.backgroundColor.value
    : "#ffffff";
  const titleTextColor = featureWithLargeScreenShotContent.titleTextColor
    ? featureWithLargeScreenShotContent.titleTextColor.value
    : "#6366f1";
  const headingTextColor = featureWithLargeScreenShotContent.headingTextColor
    ? featureWithLargeScreenShotContent.headingTextColor.value
    : "#111827";
  const subHeadingTextColor =
    featureWithLargeScreenShotContent.subHeadingTextColor
      ? featureWithLargeScreenShotContent.subHeadingTextColor.value
      : "#4B5563";

  const croppedImageSrc = getCroppedImageSrc(featureWithLargeScreenShotContent.image as SanityImageQueryResult);

  return (
    <div className="py-24 sm:py-32" style={{ backgroundColor }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center" data-aos="fade-up">
          <h2
            className="text-base font-semibold leading-7"
            style={{ color: titleTextColor }}>
            {featureWithLargeScreenShotContent.title}
          </h2>
          <p
            className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: headingTextColor }}>
            {featureWithLargeScreenShotContent.heading}
          </p>
          <p
            className="mt-6 text-lg leading-8"
            style={{ color: subHeadingTextColor }}>
            {featureWithLargeScreenShotContent.subHeading}
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <img
            // src={urlFor(featureWithLargeScreenShotContent.image.asset)
            //   .width(2432)
            //   .height(1442)
            //   .url()}

            src = {croppedImageSrc}
            alt="App screenshot"
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            width={2432}
            height={1442}
            data-aos="fade-up"
          />
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {featureWithLargeScreenShotContent.features.map(
            (feature: any, index: number) => {
              const iconBackgroundColor = feature.iconBackgroundColor
                ? feature.iconBackgroundColor.value
                : backgroundColor;

              const iconColor = feature.iconColor
                ? feature.iconColor.value
                : "#4f46e5";

              const cardTitleTextColor = feature.cardTitleTextColor
                ? feature.cardTitleTextColor.value
                : "#111827";
              const cardDescriptionTextColor = feature.cardDescriptionTextColor
                ? feature.cardDescriptionTextColor.value
                : "#4B5563";
              const cardBackgroundColor = feature.cardBackgroundColor
                ? feature.cardBackgroundColor.value
                : backgroundColor;

              return (
                <div
                  style={{ backgroundColor: cardBackgroundColor }}
                  key={index}
                  className="relative pl-9"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}>
                  <dt
                    style={{ color: cardTitleTextColor }}
                    className="inline font-semibold leading-7 text-gray-900">
                    <div
                      className="absolute left-0 top-0 flex h-5 w-5 items-center justify-center rounded-lg"
                      style={{
                        backgroundColor: iconBackgroundColor,
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
                    style={{ color: cardDescriptionTextColor }}
                    className="block">
                    {feature.cardDescription?feature.cardDescription:""}
                  </dd>
                </div>
              );
            }
          )}
        </dl>
      </div>
    </div>
  );
};

export default FeatureWithLargeScreenShot;