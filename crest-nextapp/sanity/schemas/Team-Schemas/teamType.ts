import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType, defineArrayMember } from "sanity";

export const teamType = defineType({
  name: "team",
  type: "object",
  title: "Team",
  fields: [
    defineField({
      name: "teamSections",
      title: "Team Sections",
      type: "array",
      of: [
        defineArrayMember({
          name: "Team_With_Introduction",
          type: "Team_With_Introduction",
        }),
        defineArrayMember({
          name: "Team_With_Card",
          type: "Team_With_Card",
        }),
      ],
    }),
  ],
  icon: DocumentTextIcon,
  // preview: {
  //   select: {
  //     title: "heroSections[0]._type",
  //     image: "heroSections[0].image",
  //   },
  //   prepare({ title, image }) {
  //     return {
  //       title: title || "Untitled",
  //       subtitle: "Hero",
  //       media: image || DocumentTextIcon,
  //     };
  //   },
  // },
});
