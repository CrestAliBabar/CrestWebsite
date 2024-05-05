import { defineField, defineType } from "sanity";
import colorList from "@/app/utils/colors";

export const heroWithImage = defineType({
  name: "Hero_with_image",
  type: "object",
  title: "Hero with Image",
  fields: [
    defineField({
      name: "Hero_Heading",
      type: "Hero_Heading",
    }),
    {
      name: "backgroundColor",
      title: "Hero Background Color",
      type: "simplerColor",
      options: {
        colorList: colorList,
      },
    },

    defineField({
      name: "promotion",
      type: "promotion",
    }),
    {
      name: "image",
      title: "Product Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "imageDirection",
      title: "Image Direction",
      type: "string",
      options: {
        list: [
          { title: "Image to right", value: "right" },
          { title: "Image to left", value: "left" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
    },
  ],
});
