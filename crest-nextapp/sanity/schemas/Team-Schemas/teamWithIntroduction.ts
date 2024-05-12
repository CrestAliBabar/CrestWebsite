import { defineField, defineType } from "sanity";
import colorList from "@/app/utils/colors";
export const teamWithIntroduction = defineType({
  name: "Team_With_Introduction",
  type: "object",
  title: "Team With Introduction",
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
      name: "introductionTextColor",
      title: "introduction text color",
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
