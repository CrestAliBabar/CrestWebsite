import { defineType, defineField } from 'sanity';
import { TextIcon, ImageIcon } from '@sanity/icons';

export const caseStudy = defineType({
  name: 'caseStudy',
  type: 'document',
  title: 'Case Study',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Case Study Title',
      icon: TextIcon,
    }),
    defineField({
        name: "slug",
        type: "slug",
        title: "Slug",
        description: "This will be used to generate the URL for this page.",
        options: {
          source: "title",
          maxLength: 96,
          slugify: (input) =>
            input.toLowerCase().replace(/\s+/g, "-").slice(0, 96),
        },
        validation: (Rule) => Rule.required(),
      }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Case Study Image',
      icon: ImageIcon,
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }),
      ],
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Case Study Description',
    }),
    defineField({
      name: 'body',
      type: 'array',
      title: 'Case Study Content',
      of: [
        { type: 'block' }, // Enables Portable Text (Rich Text Editor)
        { type: 'image', fields: [{ name: 'caption', type: 'string', title: 'Caption' }] },
      ],
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published Date',
    }),
  ],
});
