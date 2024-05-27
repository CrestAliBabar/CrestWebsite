import { defineField, defineType } from "sanity";
import colorList from "@/app/utils/colors";

export const featurePageDetails = defineType({
  name: "Feature_Page_Details",
  type: "object",
  title: "Feature Page Details",
  fields: [
    {
      name: "backGroundColor",
      title: "Back Ground Color",
      type: "simplerColor",
      options: {
        colorList: colorList,
      },
      validation: (rule) => rule.required(), // Required
    },

    defineField({
      name: "Feature_Heading",
      type: "Feature_Heading",
      validation: (rule) => rule.required(), // Required
    }),

    {
      name: "Feature_Page_Details_Field",
      type: "Feature_Page_Details_Field",
      validation: (rule) => rule.required(), // Required
    },

    defineField({
      name: "pageDetailsList",
      title: "Page Detail List",
      type: "array",
      of: [
        {
          type: "Feature_Page_Details_Field",
        },
      ],
      validation: (rule) => rule.required(), // Required
    }),
  ],
});
