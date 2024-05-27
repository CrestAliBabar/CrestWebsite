import { defineField, defineType } from "sanity";
import colorList from "@/app/utils/colors";

export const stepBlockRound = defineType({
  name: "Step_Block_Round",
  type: "object",
  title: "Step Block Round",
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
      name: "heading",
      type: "string",
      title: "Heading",
      validation: (rule) => rule.required(),
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
      name: "roundBox",
      type: "array",
      title: "Round Boxes",
      validation: (rule) => rule.required(),
      of: [
        {
          type: "object",
          name: "roundBox",
          title: "Round Box",
          fields: [
            defineField({
              title: "Icon",
              name: "icon",
              type: "iconPicker",
              options: {
                providers: ["fa"],
                outputFormat: "react",
              },
            }),
            {
              name: "title",
              type: "string",
              title: "Title of the round box",
              validation: (rule) => rule.required(),
            },
            {
              name: "description",
              type: "text",
              title: "Description of the round box",
              validation: (rule) => rule.required(),
            },
          ],
        },
      ],
    }),
    {
      name: "blockBackGroundColor",
      title: "Block Background Color",
      type: "simplerColor",
      options: {
        colorList: colorList,
      },
    },
    {
      name: "blockHoverColor",
      title: "Block Hover Color",
      type: "simplerColor",
      options: {
        colorList: colorList,
      },
    },
    {
      name: "iconBackGroundColor",
      title: "Icon Background Color",
      type: "simplerColor",
      options: {
        colorList: colorList,
      },
    },

    {
      name: "blockTitleColor",
      title: "Block Title Color",
      type: "simplerColor",
      options: {
        colorList: colorList,
      },
    },
    {
      name: "blockDescriptionTextColor",
      title: "Block Description Text color",
      type: "simplerColor",
      options: {
        colorList: colorList,
      },
    },
  ],
});
