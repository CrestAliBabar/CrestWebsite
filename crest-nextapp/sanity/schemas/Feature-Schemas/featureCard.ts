import { defineField, defineType } from "sanity";


export const featureCard = defineType({
    name: "FeatureCard",
    type: "object",
    title: "Feature Card",
    fields: [
      {
        name: "Feature_Heading",
        type: "Feature_Heading",
      },
      {
        title: "Icon",
        name: "icon",
        type: "iconPicker",
        options: {
          providers: ["fa"],
          outputFormat: 'react',
        },
      },
    ],
  });
  