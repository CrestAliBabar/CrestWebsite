import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType, defineArrayMember } from "sanity";

export const contentType = defineType({
  name: "content",
  type: "object",
  title: "Content",
  fields: [
    defineField({
      name: "contentSections",
      title: "Content Sections",
      type: "array",
      of: [
        defineArrayMember({
          name: "Content_Image_Description",
          type: "Content_Image_Description",
        }),
        
      ],
    }),
  ],
  icon: DocumentTextIcon,
  preview: {
    select: {
      title: "contentSections[0]._type",
      image: "contentSections[0].image",
    },
    prepare({ title, image }) {
      return {
        title: title || "Untitled",
        subtitle: "Content",
        media: image || DocumentTextIcon,
      };
    },
  },
});
