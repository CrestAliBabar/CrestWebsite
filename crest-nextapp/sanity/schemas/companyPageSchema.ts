import { defineField, defineType } from "sanity";

export const companyPageSchema = defineType({
  name: "companyPageSchema",
  type: "document",
  title: "Company Page Content",
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
