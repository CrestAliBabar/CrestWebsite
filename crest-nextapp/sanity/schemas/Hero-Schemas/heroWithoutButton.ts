import { defineField, defineType } from "sanity";

export const heroWithoutButton = defineType({
  name: "Hero_without_Button",
  type: "object",
  title: "Hero without Button",
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
  ],
});
