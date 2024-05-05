import { defineField, defineType } from "sanity";


export const heroWithBanner = defineType({
  name: "Hero_Banner_image",
  type: "object",
  title: "Hero with Banner Image",
  fields: [
    defineField({
      name: "Hero_Heading",
      type: "Hero_Heading",
    }),

    {
      name: "image",
      title: "Banner Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    defineField({
      name: "promotion",
      type: "promotion",
    }),
  ],
});
