import { defineField, defineType } from "sanity";
import colorList from "@/app/utils/colors";

export const featureWithLargeScreenShot = defineType({
  name: "Feature_With_Large_Screen_Shot",
  type: "object",
  title: "Feature With Large Screen Shot",
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
    {
      name: "image",
      title: "Product Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(), // Required
    },
    defineField({
      name: "features",
      type: "array",
      of: [
        {
          type: "featureCardForCenteredGrid",
        },
      ],
      validation: (rule) => rule.required(),
    }),
  ],
});

