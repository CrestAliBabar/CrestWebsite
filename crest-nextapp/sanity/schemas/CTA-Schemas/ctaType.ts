import { defineField, defineType, defineArrayMember } from "sanity";

export const ctaType = defineType({
  name: "cta",
  type: "object",
  title: "Cta",
  fields: [
    defineField({
      name: "ctaSections",
      title: "CTA Sections",
      type: "array",
      of: [
        defineArrayMember({
          name: "CTAWithHero",
          type: "CTAWithHero",
        }),
        defineArrayMember({
          name: "CTAWithBackgroundPattern",
          type: "CTAWithBackgroundPattern",
        }),
        defineArrayMember({
          name: "CTA_With_Text",
          type: "CTA_With_Text",
        }),
      ],
    }),
  ],
});
