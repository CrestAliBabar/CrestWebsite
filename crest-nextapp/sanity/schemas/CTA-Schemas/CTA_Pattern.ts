import { defineField, defineType } from "sanity";
import colorList from "@/app/utils/colors";

export const CTA_Pattern = defineType({
  name: "CTAWithBackgroundPattern",
  type: "object",
  title: "CTA With Background Pattern",
  fields: [
    defineField({
      name: "CTA_Title",
      type: "string",

      validation: (rule) => rule.required(), // Required
    }),
    {
      name: "TitleTextColor",
      title: "Title text color",
      type: "simplerColor",
      options: {
        colorList: colorList,
      },
    },
    defineField({
      name: "Description",
      type: "string",
      validation: (rule) => rule.required(), // Required
    }),
    {
      name: "DescriptionTextColor",
      title: "Description text color",
      type: "simplerColor",
      options: {
        colorList: colorList,
      },
    },
  ],
});
