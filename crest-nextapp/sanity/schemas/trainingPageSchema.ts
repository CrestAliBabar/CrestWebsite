import { defineField, defineType } from "sanity";

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

export const trainingPageSchema = defineType({
  name: "trainingPageSchema",
  type: "document",
  title: "Training Page Content",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "pageBuilder",
      type: "array",
      title: "Page Builder",
      of: [
        { type: "pageTitle" },
        { type: "pageSubtitle" },
        { type: "pageHeading" },
        { type: "paragraph" },
        { type: "image" },
        { type: "bulletPoint" },
        { type: "video" },
      ],
    }),
  ],
});
