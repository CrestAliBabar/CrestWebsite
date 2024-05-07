import { defineField, defineType } from "sanity";
import colorList from "@/app/utils/colors";

export const featureFactsHyperlink = defineType({
  name: "Feature_Facts_Hyperlink",
  type: "object",
  title: "Feature Facts Hyperlink",
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
      name: "Feature_Heading",
      type: "Feature_Heading",
      validation: (rule) => rule.required(), // Required
    }),

    {
        name: "image",
        title: "Product Image",
        type: "image",
        options: {
          hotspot: true,
        },
        validation: (rule) => rule.required(), // Required
      },


    defineField({
      name: "feactureHyperlink",
      title: "Feature Facts Hyperlink",
      type: "array",
      of: [{ type: "FeatureHyperlink" }],
      validation: (rule) =>
        rule.min(2).custom((Facts) => {
          if (!Facts || Facts.length < 2) {
            return "Minimum 3 feature cards are required.";
          }
          return true;
        }),
    }),


    {
      name: "featureFactColor",
      title: "Feature Fact Title Color",
      type: "simplerColor",
      options: {
        colorList: colorList,
      },
    },


  ],
});

