import { defineField, defineType } from "sanity";

export const contact = defineType({
  name: "contact",
  type: "object",
  title: "Contact Form",
  fields: [
    defineField({
      name: "contactTitle",
      type: "string",
      title: "Contact Title",
    }),
    defineField({
      name: "contactDescription",
      type: "string",
      title: "Contact Description",
    }),
  ],
});
