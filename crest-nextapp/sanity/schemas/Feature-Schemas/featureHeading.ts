import { defineField, defineType } from "sanity";
import colorList from "@/app/utils/colors";

export const featureHeading = defineType({
  name: "Feature_Heading",
  type: "object",
  title: "Feature Heading",
  fields: [
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
  ],
});
