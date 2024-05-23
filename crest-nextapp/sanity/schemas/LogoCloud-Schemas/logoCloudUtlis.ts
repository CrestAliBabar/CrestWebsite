import { defineField, defineType } from "sanity";
import colorList from "@/app/utils/colors";

export const logoCloudUtlis = defineType({
  name: "LogoCloud_Utlis",
  type: "object",
  title: "Logo Details",
  fields: [
    {
      name: "backGroundColor",
      title: "Back Ground Color",
      type: "simplerColor",
      options: {
        colorList: colorList,
      },
    },
    {
      name: "headingProp",
      title: "Heading Property",
      type: "object",
      fields: [
        {
          name: "heading",
          title: "Heading",
          type: "string",
        },
        {
          name: "headingColor",
          title: "Heading text color",
          type: "simplerColor",
          options: {
            colorList: colorList,
          },
        },
        {
          title: "Display Title on Logo Card",
          name: "isDisplayed",
          type: "boolean",
          initialValue: false,
          description:
            "Check this box if you want this title to be displayed on the Logo Section.",
        },
      ],
    },

    {
      name: "subHeadingProp",
      title: "Sub Heading Property",
      type: "object",
      fields: [
        {
          name: "subHeading",
          title: "Sub Heading",
          type: "string",
        },
        {
          name: "subHeadingColor",
          title: "Sub Heading text color",
          type: "simplerColor",
          options: {
            colorList: colorList,
          },
        },
      ],
    },

    {
      name: "logoCloudImages",
      title: "Logos",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "logoImage",
              title: "Logo",
              type: "image",
              options: {
                hotspot: true,
              },
            },
            {
              name: "logolink",
              type: "url",
              title: "Logo Link",
            },
          ],
        },
      ],
    },
  ],
});
