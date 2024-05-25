import { defineField, defineType } from "sanity";
import colorList from "@/app/utils/colors";

export const featureWithColumnLgIcon = defineType({
  name: "Feature_With_Column_Lg_Icon",
  type: "object",
  title: "Feature With Column Lg Icon",
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

