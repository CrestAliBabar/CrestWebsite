import { defineField, defineType } from "sanity";

export const teamMember = defineType({
  name: "Team_Member",
  type: "object",
  title: "Team Member",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "position",
      type: "string",
      title: "Position",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "introduction",
      type: "text",
      title: "Introduction",
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "socialMedia",
      type: "array",
      title: "Social Media",
      of: [
        {
          type: "object",
          name: "inlineSocialMedia",
          title: "Inline Social Media",
          fields: [
            defineField({
              name: "icon",
              type: "string",
              title: "Icon",
              validation: (rule) => rule.required(),
              options: {
                list: [
                  { title: "Personal Web", value: "personalWeb" },
                  { title: "Twitter", value: "twitter" },
                  { title: "LinkedIn", value: "linkedin" },
                  { title: "Instagram", value: "instagram" },
                  { title: "YouTube", value: "youtube" },
                  // Add more options as necessary
                ],
              },
            }),
            defineField({
              name: "link",
              type: "url",
              title: "Link",
              validation: (rule) => rule.required(),
            }),
          ],
        }
      ],
    }),
  ],
});
