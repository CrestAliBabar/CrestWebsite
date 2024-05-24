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
        defineArrayMember({
          name: "Feature_Centered_Grid",
          type: "Feature_Centered_Grid",
        }),
        defineArrayMember({
          name: "Feature_With_Large_Screen_Shot",
          type: "Feature_With_Large_Screen_Shot",
        }),
        defineArrayMember({
          name: "Feature_With_Sm_Icon_Link",
          type: "Feature_With_Sm_Icon_Link",
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
