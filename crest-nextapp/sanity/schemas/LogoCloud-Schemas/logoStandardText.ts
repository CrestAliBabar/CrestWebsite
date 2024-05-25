import { defineField, defineType } from "sanity";
import colorList from "@/app/utils/colors";

export const logoStandardText = defineType({
  name: "Logo_Standard_Text",
  type: "object",
  title: "Logo Standard Text",
  fields: [
    defineField({
      name: "LogoCloud_Utlis",
      type: "LogoCloud_Utlis",
    }),
  ],
});
