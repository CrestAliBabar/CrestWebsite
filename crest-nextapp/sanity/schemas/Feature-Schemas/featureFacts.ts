import { defineField, defineType } from "sanity";


export const featureFact = defineType({
    name: "FeatureFact",
    type: "object",
    title: "Feature Card",
    fields: [
      {
        name: "Fact",
        title : "Feature Title",
        type: "string",
      },
      {
        title: "Icon",
        name: "icon",
        type: "iconPicker",
        options: {
          providers: [ "fa"],
          outputFormat: 'react',
        },
      },
    ],
  });
  