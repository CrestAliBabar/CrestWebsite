import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType, defineArrayMember } from "sanity";

export const FAQsType = defineType({
  name: "FAQs",
  type: "object",
  title: "FAQs",
  fields: [
    defineField({
      name: "FAQsSections",
      title: "FAQsSections",
      type: "array",
      of: [
        defineArrayMember({
          name: "FAQs_With_Supporting_Text",
          type: "FAQs_With_Supporting_Text",
        }),
        defineArrayMember({
          name: "FAQs_Two_Column",
          type: "FAQs_Two_Column",
        }),
        defineArrayMember({
          name: "FAQs_Three_Column_Centered",
          type: "FAQs_Three_Column_Centered",
        }),
      ],
    }),
  ],
  icon: DocumentTextIcon,
   preview: {
     select: {
       title: "FAQsSections[0]._type",
       image: "FAQsSections[0].image",
     },
     prepare({ title, image }) {
       return {
         title: title || "Untitled",
         subtitle: "FAQs",
         media: image || DocumentTextIcon,
       };
     },
   },
});
