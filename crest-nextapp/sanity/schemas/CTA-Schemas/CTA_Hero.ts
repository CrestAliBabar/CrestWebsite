import { defineField, defineType } from "sanity";
import colorList from "@/app/utils/colors";

export const CTA_Hero = defineType({
  name: "CTAWithHero",
  type: "object",
  title: "CTA With Hero Image",
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
    {
      name: "backGroundColor",
      title: "Back Ground Color",
      type: "simplerColor",
      options: {
        colorList: colorList,
      },
    },
    defineField({
      name: "iconText",
      title: "Icon Text",
      type: "array",
      of: [{ type: "FeatureFact" }],
      validation: (rule) =>
        rule.min(2).custom((Facts) => {
          if (!Facts || Facts.length < 2) {
            return "Minimum 2 feature cards are required.";
          }
          return true;
        }),
    }),
    {
      name: "iconTextColor",
      title: "Icon Text Color",
      type: "simplerColor",
      options: {
        colorList: colorList,
      },
    },
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "promotion",
      type: "promotion",
      validation: (rule) => rule.required(), // Required
    }),
  ],
});
