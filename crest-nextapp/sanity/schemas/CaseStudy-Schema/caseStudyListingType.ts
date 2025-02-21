import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType, defineArrayMember } from "sanity";

export const caseStudyListingType = defineType({
  name: "caseStudyListing",
  type: "object",
  title: "caseStudyListing",
  fields: [
    defineField({
      name: "caseStudyListingSections",
      title: "caseStudyListing Sections",
      type: "array",
      of: [
        defineArrayMember({
          name: "caseStudy_Listing_Style1",
          type: "caseStudy_Listing_Style1",
        }),
      ],
    }),
  ],
  icon: DocumentTextIcon,
  preview: {
    select: {
      title: "caseStudyListingSections[0]._type",
      image: "caseStudyListingSections[0].image",
    },
    prepare({ title, image }) {
      return {
        title: title || "Untitled",
        subtitle: "caseStudyListing",
        media: image || DocumentTextIcon,
      };
    },
  },
});
