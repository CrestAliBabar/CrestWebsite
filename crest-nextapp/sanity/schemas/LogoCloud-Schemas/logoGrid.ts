import { defineField, defineType } from "sanity";
import colorList from "@/app/utils/colors";

export const logoGrid = defineType({
  name: "Logo_Grid",
  type: "object",
  title: "Logo Grid",
  fields: [

    defineField({
      name: "LogoCloud_Utlis",
      type: "LogoCloud_Utlis",
    }),
    {
      name: "gridCardColor",
      title: "Grid Ground Color",
      type: "simplerColor",
      options: {
        colorList: colorList,
      },
    },
  ],
});
