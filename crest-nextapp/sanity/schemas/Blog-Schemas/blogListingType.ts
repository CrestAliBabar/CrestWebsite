import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType, defineArrayMember } from "sanity";

export const blogListingType = defineType({
  name: "blogListing",
  type: "object",
  title: "blogListing",
  fields: [
    defineField({
      name: "blogListingSections",
      title: "blogListing Sections",
      type: "array",
      of: [
        defineArrayMember({
          name: "blog_Listing_Style1",
          type: "blog_Listing_Style1",
        }),
      ],
    }),
  ],
  icon: DocumentTextIcon,
  preview: {
    select: {
      title: "blogListingSections[0]._type",
      image: "blogListingSections[0].image",
    },
    prepare({ title, image }) {
      return {
        title: title || "Untitled",
        subtitle: "blogListing",
        media: image || DocumentTextIcon,
      };
    },
  },
});
