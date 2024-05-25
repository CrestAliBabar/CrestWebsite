import { defineField, defineType } from "sanity";
import colorList from "@/app/utils/colors";

export const FAQsSideBySide = defineType({
  name: "FAQs_Side_By_Side",
  type: "object",
  title: "FAQs Side By Side",
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
