import { defineField, defineType } from "sanity";


export const heroWithBanner = defineType({
  name: "Hero_Banner_image",
  type: "object",
  title: "Hero with Banner Image",
  fields: [
    defineField({
      name: "Hero_Heading",
      type: "Hero_Heading",
      validation: (rule) => rule.required(), // Required
    }),
    {
      name: "image",
      title: "Banner Image",
      type: "image",
      options: {
        hotspot: true,
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
