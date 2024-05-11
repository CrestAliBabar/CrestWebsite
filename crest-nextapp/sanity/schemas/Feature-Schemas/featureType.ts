import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType, defineArrayMember } from "sanity";

export const featureType = defineType({
  name: "feature",
  type: "object",
  title: "feature",
  fields: [
    defineField({
      name: "featureSections",
      title: "Feature Sections",
      type: "array",
      of: [
        defineArrayMember({
          name: "Feature_Grid_Layout",
          type: "Feature_Grid_Layout",
        }),
        defineArrayMember({
          name: "Feature_Hero_Facts",
          type: "Feature_Hero_Facts",
        }),
        defineArrayMember({
          name: "Feature_Facts_Hyperlink",
          type: "Feature_Facts_Hyperlink",
        }),
      ],
    }),
  ],
  icon: DocumentTextIcon,
  preview: {
    select: {
      title: "featureSections[0]._type",
      image: "featureSections[0].image",
    },
    prepare({ title, image }) {
      return {
        title: title || "Untitled",
        subtitle: "Feature",
        media: image || DocumentTextIcon,
      };
    },
  },
});