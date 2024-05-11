import { defineField, defineType } from "sanity";
import colorList from "@/app/utils/colors";

export const teamCardStandard = defineType({
  name: "Team_With_Card",
  type: "object",
  title: "Team With Card",
  fields: [
    {
      name: "backGroundColor",
      title: "Back Ground Color",
      type: "simplerColor",
      options: {
        colorList: colorList,
      },
    },
    defineField({
      name: "Team_Heading",
      type: "string",
      
      validation: (rule) => rule.required(), // Required
    }),
    {
      name: "headingStyleColor",
      title: "Heading background style color",
      type: "simplerColor",
      options: {
        colorList: colorList,
      }},
      {
        name: "headingTextColor",
        title: "Heading text color",
        type: "simplerColor",
        options: {
          colorList: colorList,
        },
      },
    defineField({
      name: "Team_Description",
      type: "string",
      validation: (rule) => rule.required(), // Required
    }),
    {
      name: "TeamDescriptionTextColor",
      title: "Team Description text color",
      type: "simplerColor",
      options: {
        colorList: colorList,
      },
    },
    defineField({
      name: "Team_Members",
      type: "array",
      of: [{ type: "Team_Member" }],
      validation: (rule) => rule.required(),
    }),
    {
      name: "nameColor",
      title: "name text color",
      type: "simplerColor",
      options: {
        colorList: colorList,
      },
    },
    {
      name: "positionColor",
      title: "position text color",
      type: "simplerColor",
      options: {
        colorList: colorList,
      },
    },
    {
      name: "cardColor",
      title: "Card Color",
      type: "simplerColor",
      options: {
        colorList: colorList,
      },
    },
  ],
});




