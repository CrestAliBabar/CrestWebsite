import { defineField, defineType } from 'sanity';

export const footerSchema = defineType({
  name: 'footerSchema',
  type: 'document',
  title: 'Footer',

  fields: [
    defineField({
      name: 'footer',
      type: 'string',
      title: 'Footer',
    }),
    defineField({
      name: 'image',
      title: 'Logo',
      type: 'image',
      description: 'Upload the logo',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'footerSlogan',
      title: 'Footer Slogan',
      type: 'text',
    }),
    defineField({
      name: 'footerCopyRight',
      type: 'text',
      title: 'Footer Copy Right',
    }),
    defineField({
      name: 'footerTextSections',
      type: 'array',
      title: 'Footer Text Sections',
      of: [{ type: 'footerSectionContent' }],
    }),
  ],
});

export const footerSectionContent = defineType({
  name: 'footerSectionContent',
  type: 'object',
  title: 'Footer Section Content',

  fields: [
    defineField({
      name: 'sectionTitle',
      type: 'string',
      title: 'Section Title',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'This will be used to generate the URL for this page.',
      options: {
        source: (doc, { parent }: any) => parent && parent.sectionTitle,
        maxLength: 96,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 96),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pages',
      type: 'array',
      title: 'Pages',
      of: [{ type: 'pageContent' }],
    }),
  ],
});
