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
      name: "Icon_1",
      type: "string",
      validation: (rule) => rule.required(), // Required
    }),
    {
      name: "IconColor_1",
      title: "Icon text color",
      type: "simplerColor",
      options: {
        colorList: colorList,
      },
    },
    defineField({
      name: "Icon_2",
      type: "string",
      validation: (rule) => rule.required(), // Required
    }),
    {
      name: "IconColor_2",
      title: "Icon text color",
      type: "simplerColor",
      options: {
        colorList: colorList,
      },
    },
    defineField({
      name: "Icon_3",
      type: "string",
      validation: (rule) => rule.required(), // Required
    }),
    {
      name: "IconColor_3",
      title: "Icon text color",
      type: "simplerColor",
      options: {
        colorList: colorList,
      },
    },
    defineField({
      name: "Icon_4",
      type: "string",
      validation: (rule) => rule.required(), // Required
    }),
    {
      name: "IconColor_4",
      title: "Icon text color",
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
