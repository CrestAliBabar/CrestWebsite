import { defineField, defineType } from "sanity";

export const servicesPageSchema = defineType({
  name: "servicesPageSchema",
  type: "document",
  title: "Services Page Content",
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
