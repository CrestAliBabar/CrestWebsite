import { defineField, defineType, defineArrayMember } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

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
  icon: DocumentTextIcon,
  preview: {
    select: {
      title: "ctaSections[0]._type",
      image: "ctaSections[0].image",
    },
    prepare({ title, image }) {
      return {
        title: title || "Untitled",
        subtitle: "CTA",
        media: image || DocumentTextIcon,
      };
    },
  },
});
