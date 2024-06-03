import { defineField, defineType } from "sanity";
import {BellIcon} from '@sanity/icons'
export const contact = defineType({
  name: "contact",
  type: "object",
  title: "Contact Form",
  icon: BellIcon,
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
