// ./schemas/pageType.ts

import { DocumentIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const pageType = defineType({
  name: "page",
  type: "document",
  title: "Page",
  fields: [
    defineField({ name: "title", type: "string" }),
    {
      name: "pageBuilder",
      type: "array",
      title: "Page builder",
      of: [
        defineArrayMember({
          name: "hero",
          type: "hero",
        }),
        defineArrayMember({
          name: "feature",
          type: "feature",
        }),
        defineArrayMember({
          name: "content",
          type: "content",
        }),
        defineArrayMember({
          name: "form",
          type: "form",
        }),
        defineArrayMember({
          name: "video",
          type: "video",
        }),
        defineArrayMember({
          name: "team",
          type: "team",
        }),
        defineArrayMember({
          name: "cta",
          type: "cta",
        }),
        defineArrayMember({
          name: 'work_flow',
          type: 'work_flow',
        }),
        defineArrayMember({
          name: 'FAQs',
          type: 'FAQs',
        }),
        // etc...
      ],
    },
  ],
  icon: DocumentIcon,
});
