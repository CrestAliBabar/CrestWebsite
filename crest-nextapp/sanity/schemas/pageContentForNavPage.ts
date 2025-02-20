import { defineType, defineField } from "sanity";

export const pageContentForNavPage = defineType({
  name: "pageContentForNavPage",
  type: "object",
  title: "PageTitle",
  fields: [
    defineField({
      name: "pageBuilder",
      type: "array",
      title: "Page Builder",
      of: [
        { type: "pageTitle" },
        { type: "pageSubtitle" },
        { type: "pageHeading" },
        { type: "paragraph" },
        { type: "bulletPoint" },
        { type: "customImage" },
        { type: "video" },
        { type: "team" },
        { type: "cta" },
        { type: "contact" },
        { type: "work_flow"},
        { type: "hero"},
        {type: "feature"},
        {type: "logoCloud"},
        {type: "FAQs"},
        {type: "blogListing"}


        
      ],
    }),
  ],
});

export const pageTitle = defineType({
  name: "pageTitle",
  type: "object",
  title: "PageTitle",
  fields: [
    defineField({
      name: "text",
      type: "string",
      title: "Text",
    }),
    // Additional subtitle fields if needed
  ],
});

export const pageSubtitle = defineType({
  name: "pageSubtitle",
  type: "object",
  title: "Page Subtitle",
  fields: [
    defineField({
      name: "text",
      type: "string",
      title: "Text",
    }),
  ],
});

export const pageHeading = defineType({
  name: "pageHeading",
  type: "object",
  title: "Page Heading",
  fields: [
    defineField({
      name: "text",
      type: "string",
      title: "Text",
    }),
  ],
});

export const paragraph = defineType({
  name: "paragraph",
  type: "object",
  title: "Paragraph",
  fields: [
    defineField({
      name: "text",
      type: "text",
      title: "Text",
    }),
  ],
});

export const imgUrl = defineType({
  name: "imgUrl",
  type: "object",
  title: "Image URL",
  fields: [
    defineField({
      name: "imgUrl",
      type: "image",
      title: "Image URL",
    }),
  ],
});

export const bulletPoint = defineType({
  name: "bulletPoint",
  type: "object",
  title: "Bullet Point",
  fields: [
    {
      title: "Bullet Point",
      name: "bulletPoint",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "list",
      },
    },
    // Any other fields related to bullet points
  ],
});
