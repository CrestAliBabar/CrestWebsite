import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType, defineArrayMember } from "sanity";

export const logoCloudType = defineType({
  name: "logoCloud",
  type: "object",
  title: "Logo Cloud",
  fields: [
    defineField({
      name: "logoCLoudSections",
      title: "Logo Sections",
      type: "array",
      of: [
        defineArrayMember({
          name: "Logo_Grid",
          type: "Logo_Grid",
        }),
        defineArrayMember({
          name: "Logo_Standard_Text",
          type: "Logo_Standard_Text",
        }),
      ],
    }),
  ],
  icon: DocumentTextIcon,
  preview: {
    select: {
      title: "logoCLoudSections[0]._type",
      image: "logoCLoudSections[0].image",
    },
    prepare({ title, image }) {
      return {
        title: title || "Untitled",
        subtitle: "Logo",
        media: image || DocumentTextIcon,
      };
    },
  },
});
