import { defineField, defineType } from "sanity";

export const navigationTitleSchema = defineType({
  name: "navigationTitleSchema",
  type: "document",
  title: "Navigation Titles and Pages",

  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Navigation Bar Title",
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      description: "This will be used to generate the URL for this page.",
      options: {
        source: "title",
        maxLength: 96,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 96),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Display on Navigation Bar",
      name: "isDisplayed",
      type: "boolean",
      initialValue: false,
      description:
        "Check this box if you want this title to be displayed on the navigation bar.",
    }),
    defineField({
      name: "pages",
      type: "array",
      title: "Pages",
      of: [{ type: "pageContent" }],
    }),
  ],
});
