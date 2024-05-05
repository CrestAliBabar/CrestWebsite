import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType, defineArrayMember } from "sanity";

export const heroType = defineType({
  name: "hero",
  type: "object",
  title: "Hero",
  fields: [
    defineField({
      name: "heroSections",
      title: "Hero Sections",
      type: "array",
      of: [
        defineArrayMember({
          name: "Hero_without_Banner_image",
          type: "Hero_without_Banner_image",
        }),
        defineArrayMember({
          name: "Hero_Banner_image",
          type: "Hero_Banner_image",
        }),
        defineArrayMember({
          name: "Hero_with_image",
          type: "Hero_with_image",
        }),
      ],
    }),
  ],
  icon: DocumentTextIcon,
  preview: {
    select: {
      title: "heroSections[0]._type",
      image: "heroSections[0].image",
    },
    prepare({ title, image }) {
      return {
        title: title || "Untitled",
        subtitle: "Hero",
        media: image || DocumentTextIcon,
      };
    },
  },
});
