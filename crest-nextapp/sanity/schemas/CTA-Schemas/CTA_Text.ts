import { defineField, defineType } from "sanity";
import colorList from "@/app/utils/colors";

export const CTA_Text = defineType({
  name: "CTA_With_Text",
  type: "object",
  title: "CTA With Text",
  fields: [
    {
      name: "backGroundColor",
      title: "Back Ground Color",
      type: "simplerColor",
      options: {
        colorList: colorList,
      },
    },
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
    defineField({
      name: "Comment",
      type: "string",
      validation: (rule) => rule.required(), // Required
    }),
    {
      name: "CommentTextColor",
      title: "Comment text color",
      type: "simplerColor",
      options: {
        colorList: colorList,
      },
    },
  ],
});
