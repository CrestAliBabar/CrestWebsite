import { defineField, defineType } from "sanity";
import colorList from "@/app/utils/colors";

export const stepHowItWorks = defineType({
  name: "Step_How_It_Works",
  type: "object",
  title: "Step How It Works",
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
        name: "subHeading",
        type: "string",
        title: "Sub Heading",
        validation: (rule) => rule.required(),
      }),
      {
        name: "subHeadingTextColor",
        title: "Sub Heading text color",
        type: "simplerColor",
        options: {
          colorList: colorList,
        },
      },
    defineField({
      name: "card",
      type: "array",
      title: "Card",
      validation: (rule) => rule.required(),
      of: [
        {
          type: "object",
          name: "cardDetails",
          title: "Card Details",
          fields: [
            defineField({
              title: "Icon",
              name: "icon",
              type: "iconPicker",
              options: {
                providers: ["fa","mdi"],
                outputFormat: "react",
              },
            }),
            {
              name: "title",
              type: "string",
              title: "Title of the Card",
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
