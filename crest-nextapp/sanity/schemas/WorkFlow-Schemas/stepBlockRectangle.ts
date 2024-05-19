import { defineField, defineType } from "sanity";
import colorList from "@/app/utils/colors";

export const stepBlockRectangle = defineType({
  name: "Step_Block_Rectangle",
  type: "object",
  title: "Step Block Rectangle",
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
      name: "description",
      type: "string",
      title: "Description",
      validation: (rule) => rule.required(),
    }),
    {
      name: "descriptionTextColor",
      title: "Description text color",
      type: "simplerColor",
      options: {
        colorList: colorList,
      },
    },
    defineField({
      name: "rectangleBox",
      type: "array",
      title: "Rectangle Boxes",
      validation: (rule) => rule.required(),
      of: [
        {
          type: "object",
          name: "RectangleBox",
          title: "Rectangle Box",
          fields: [
            {
              name: "description",
              type: "text",
              title: "Description of the Rectangle box",
              validation: (rule) => rule.required(),
            },
          ],
        },
      ],
    }),
    {
      name: "blockBackGroundColor",
      title: "Block Background Color",
      type: "color",
    },

    {
      name: "iconBackGroundColor",
      title: "Icon Background Color",
      type: "color",
    },
    {
      name: "indexTextColor",
      title: "Index Text color",
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
