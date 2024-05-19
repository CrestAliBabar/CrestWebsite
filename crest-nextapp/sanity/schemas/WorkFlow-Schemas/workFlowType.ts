import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType, defineArrayMember } from "sanity";

export const workFlowType = defineType({
  name: "work_flow",
  type: "object",
  title: "Work Flow",
  fields: [
    defineField({
      name: "workFlowSections",
      title: "Work Flow Sections",
      type: "array",
      of: [
        defineArrayMember({
          name: "Step_Block_Round",
          type: "Step_Block_Round",
        }),
        defineArrayMember({
          name: "Step_Block_Rectangle",
          type: "Step_Block_Rectangle",
        }),
      ],
    }),
  ],
  icon: DocumentTextIcon,
   preview: {
     select: {
       title: "workFlowSections[0]._type",
       image: "workFlowSections[0].image",
     },
     prepare({ title, image }) {
       return {
         title: title || "Untitled",
         subtitle: "WorkFlow",
         media: image || DocumentTextIcon,
       };
     },
   },
});
