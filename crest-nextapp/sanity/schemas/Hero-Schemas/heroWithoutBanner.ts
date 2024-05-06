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
      validation: (rule) => rule.required(), // Required
    }),
    {
      name: 'backgroundColor',
      title: 'Hero Background Color',
      type: 'simplerColor',
      options: {
        colorList: colorList,
      },
      validation: (rule) => rule.required(), // Required
    },
    defineField({
      name: "promotion",
      type: "promotion",
      validation: (rule) => rule.required(), // Required
    }),
  ],
});
