import { defineField, defineType } from "sanity";
import colorList from "@/app/utils/colors";

export const contentImageDescription = defineType({
  name: "Content_Image_Description",
  type: "object",
  title: "Content Image Description",
  fields: [
    {
      name: "backgroundColor",
      title: "Hero Background Color",
      type: "simplerColor",
      options: {
        colorList: colorList,
      },
      validation: (rule) => rule.required(), // Required
    },

    defineField({
      name: "Content_Heading",
      type: "Content_Heading",
      validation: (rule) => rule.required(), // Required
    }),

    {
      name: "images",
      title: "Content Image",
      type: "array",
      of: [
        {
          name: "image",
          title: "Image",
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
      validation: (rule) => rule.required(), // Required
    },

    {
      name: "content",
      type: "array",
      title: "Content",
      of: [
        {
          type: "block",
        },
      ],
    },

    defineField({
      name: "promotion",
      type: "promotion",
      validation: (rule) => rule.required(), // Required
    }),
  ],
});
