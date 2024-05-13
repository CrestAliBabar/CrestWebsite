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
          name: "CTA_With_Text",
          type: "CTA_With_Text",
        }),
        defineArrayMember({
          name: "CTAWithBackgroundPattern",
          type: "CTAWithBackgroundPattern",
        }),
        defineArrayMember({
          name: "CTAWithHero",
          type: "CTAWithHero",
        }),
        defineArrayMember({
          name: "team",
          type: "team",
        }),
        defineArrayMember({
          name: "cta",
          type: "cta",
        }),
        // etc...
      ],
    },
  ],
  icon: DocumentIcon,
});
