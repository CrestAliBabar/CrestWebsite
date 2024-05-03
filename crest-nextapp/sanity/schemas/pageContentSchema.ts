import { defineType, defineField } from "sanity";

export const pageContent = defineType({
  name: "pageContent",
  type: "object",
  title: "PageTitle",
  fields: [
    defineField({
      name: "text",
      type: "string",
      title: "Page Title",
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
