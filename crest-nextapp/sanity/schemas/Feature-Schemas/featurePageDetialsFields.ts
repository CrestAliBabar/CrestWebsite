import { defineField, defineType } from "sanity";
import colorList from "@/app/utils/colors";

export const featurePageDetialsFields = defineType({
  name: "Feature_Page_Details_Field",
  type: "object",
  title: "Feature Page Details Field",
  fields: [
    {
      name: "Feature_Heading",
      type: "Feature_Heading",
    },
    {
      name: "pageCategory",
      type: "string",
      title: "Page Category Title",
    },
    {
      name: "pageCategoryTitleColor",
      title: "Page Category Title Color",
      type: "simplerColor",
      options: {
        colorList: colorList,
      },
    },
    {
      name: "pageImage",
      title: "Page Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    },
    {
      name: "pagelink",
      type: "url",
      title: "Page Link",
    },
  ],
});
