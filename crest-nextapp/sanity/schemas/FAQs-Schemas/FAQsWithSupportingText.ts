import { defineField, defineType } from "sanity";
import colorList from "@/app/utils/colors";

export const FAQsWithSupportingText = defineType({
  name: "FAQs_With_Supporting_Text",
  type: "object",
  title: "FAQs With Supporting Text",
  fields: [
    {
      name: "backGroundColor",
      title: "Background Color",
      type: "simplerColor",
      options: {
        colorList: colorList,
      },
    },
    defineField({
      name: "sectionTitle",
      type: "string",
      title: "Section Title",
      validation: (rule) => rule.required(),
    }),
    {
      name: "sectionTitleTextColor",
      title: "Section Title Text Color",
      type: "simplerColor",
      options: {
        colorList: colorList,
      },
    },
    defineField({
      name: "supportingText",
      type: "text",
      title: "Supporting Text",
      validation: (rule) => rule.required(),
    }),
    {
      name: "LinkText",
      title: "Link Text within Support Text",
      type: "string",
    },
    {
      name: "supportingTextLink",
      title: "Supporting Text Link",
      type: "url",
    },
    {
      name: "supportingTextLinkColor",
      title: "Supporting Text Link Color",
      type: "simplerColor",
      options: {
        colorList: colorList,
      },
    },
    defineField({
      name: "faqItems",
      type: "array",
      title: "FAQ Items",
      validation: (rule) => rule.required(),
      of: [
        {
          type: "object",
          name: "faqItem",
          title: "FAQ Item",
          fields: [
            {
              name: "question",
              type: "string",
              title: "Question",
              validation: (rule) => rule.required(),
            },
            {
              name: "answer",
              type: "text",
              title: "Answer",
              validation: (rule) => rule.required(),
            },
            {
              name: "questionTextColor",
              title: "Question Text Color",
              type: "simplerColor",
              options: {
                colorList: colorList,
              },
            },
            {
              name: "answerTextColor",
              title: "Answer Text Color",
              type: "simplerColor",
              options: {
                colorList: colorList,
              },
            },
          ],
        },
      ],
    }),
  ],preview: {
    select: {
      title: "sectionTitle",
      subtitle: "supportingText",
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title: title,
        subtitle: subtitle ? subtitle.substring(0, 50) + "..." : "No supporting text",
      };
    },
  },
});
