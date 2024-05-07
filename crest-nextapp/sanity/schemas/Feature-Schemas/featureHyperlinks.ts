import { defineField, defineType } from "sanity";


export const featureHyperlink = defineType({
    name: "FeatureHyperlink",
    type: "object",
    title: "Feature Fact Hyperlink",
    fields: [
      {
        name: "Fact",
        title : "Feature Title",
        type: "string",
      },
      {
        name: "FactSubtitle",
        title : "Feature SubTitle",
        type: "string",
      },
      defineField({
        name: "promotion",
        type: "promotion",
        validation: (rule) => rule.required(), // Required
      }),
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
  