import { defineField, defineType } from "sanity";
import colorList from "@/app/utils/colors";

export const featureWithSmIconLink = defineType({
  name: "Feature_With_Sm_Icon_Link",
  type: "object",
  title: "Feature With Sm Icon Link",
  fields: [
    {
      name: "backgroundColor",
      title: "Background Color",
      type: "simplerColor",
      options: {
        colorList: colorList,
      },
    },
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(), // Required
    }),
    {
      name: "titleTextColor",
      title: "Title Text Color",
      type: "simplerColor",
      options: {
        colorList: colorList,
      },
    },
    defineField({
      name: "heading",
      type: "string",
      validation: (rule) => rule.required(), // Required
    }),
    {
      name: "headingTextColor",
      title: "Heading Text Color",
      type: "simplerColor",
      options: {
        colorList: colorList,
      },
    },
    defineField({
      name: "subHeading",
      type: "string",
      validation: (rule) => rule.required(), // Required
    }),
    {
      name: "subHeadingTextColor",
      title: "Sub Heading Text Color",
      type: "simplerColor",
      options: {
        colorList: colorList,
      },
    },
    defineField({
      name: "features",
      type: "array",
      of: [
        {
          type: "featureCardForSmIconLink",
        },
      ],
      validation: (rule) => rule.required(),
    }),
  ],
});

export const featureCardForSmIconLink = defineType({
  name: "featureCardForSmIconLink",
  type: "object",
  title: "Feature Card",
  fields: [
    defineField({
      name: "cardTitle",
      type: "string",
      validation: (rule) => rule.required(), // Required
    }),
    defineField({
      name: "cardDescription",
      type: "string",
      validation: (rule) => rule.required(), // Required
    }),
    {
      name: "cardTitleTextColor",
      title: "Card Title Text Color",
      type: "simplerColor",
      options: {
        colorList: colorList,
      },
    },
    {
      name: "cardDescriptionTextColor",
      title: "Card Description Text Color",
      type: "simplerColor",
      options: {
        colorList: colorList,
      },
    },
    defineField({
      title: "Icon",
      name: "icon",
      type: "iconPicker",
      options: {
        providers: ["fa"],
        outputFormat: "react",
      },
      validation: (rule) => rule.required(),
    }),
    {
      name: "iconColor",
      title: "Icon Color",
      type: "simplerColor",
      options: {
        colorList: colorList,
      },
    },
    {
      name: "iconBackgroundColor",
      title: "Icon Background Color",
      type: "simplerColor",
      options: {
        colorList: colorList,
      },
    },
    {
      name: "cardBackgroundColor",
      title: "Card Background Color",
      type: "simplerColor",
      options: {
        colorList: colorList,
      },
    },
    defineField({
      name: "linkTitle",
      type: "string",
      // validation: (rule) => rule.required(), // Required
    }),
    defineField({
      name: "linkHref",
      type: "string",
      // validation: (rule) => rule.required(), // Required
    }),
  ],
});
