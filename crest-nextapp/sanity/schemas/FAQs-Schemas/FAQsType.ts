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
        // defineArrayMember({
        //   name: "Step_Block_Rectangle",
        //   type: "Step_Block_Rectangle",
        // }),
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
