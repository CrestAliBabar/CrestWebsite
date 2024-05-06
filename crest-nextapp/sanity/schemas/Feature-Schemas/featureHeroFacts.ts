import { defineField, defineType } from "sanity";
import colorList from "@/app/utils/colors";

export const featureHeroFacts = defineType({
  name: "Feature_Hero_Facts",
  type: "object",
  title: "Feature Hero Facts",
  fields: [
    defineField({
      name: "Feature_Heading",
      type: "Feature_Heading",
      validation: (rule) => rule.required(), // Required
    }),
    defineField({
      name: "featureFacts",
      title: "Feature Facts",
      type: "array",
      of: [{ type: "FeatureFact" }],
      validation: (rule) =>
        rule.min(3).custom((Facts) => {
          if (!Facts || Facts.length < 3) {
            return "Minimum 3 feature cards are required.";
          }
          return true;
        }),
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

    {
      name: "featureFactColor",
      title: "Feature Fact Title Color",
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

