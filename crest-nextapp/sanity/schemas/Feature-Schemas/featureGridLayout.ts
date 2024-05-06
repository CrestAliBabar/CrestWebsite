import { defineField, defineType } from "sanity";
import colorList from "@/app/utils/colors";

export const featureGridLayout = defineType({
  name: "Feature_Grid_Layout",
  type: "object",
  title: "Feature Grid Layout",
  fields: [
    defineField({
      name: "Feature_Heading",
      type: "Feature_Heading",
      validation: (rule) => rule.required(), // Required
    }),
    defineField({
      name: "featureCards",
      title: "Feature Cards",
      type: "array",
      of: [{ type: "FeatureCard" }],
      validation: (rule) =>
        rule.min(3).custom((cards) => {
          if (!cards || cards.length < 3) {
            return "Minimum 3 feature cards are required.";
          }
          return true;
        }),
    }),

    {
      name: "featureCardColor",
      title: "Feature Card Color",
      type: "simplerColor",
      options: {
        colorList: colorList,
      },
    },

    {
      name: "backGroundColor",
      title: "Back Ground Color",
      type: "simplerColor",
      options: {
        colorList: colorList,
      },
    },
  ],
});
