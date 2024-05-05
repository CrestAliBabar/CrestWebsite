
import { defineField, defineType } from "sanity";
import colorList from "@/app/utils/colors";

export const heroWithoutBanner = defineType({
  name: "Hero_without_Banner_image",
  type: "object",
  title: "Hero without Banner Image",
  fields: [
    defineField({
      name: "Hero_Heading",
      type: "Hero_Heading",
    }),

    {
      name: 'backgroundColor',
      title: 'Hero Background Color',
      type: 'simplerColor',
      options: {
        colorList: colorList
      }
    },

    defineField({
      name: "promotion",
      type: "promotion",
    }),
  ],
});
