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
      description: 'This will be used to generate the URL slug for this page.',
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
      of: [{ type: 'footerPageContent' }],
    }),
  ],
});

export const footerPageContent = defineType({
  name: 'footerPageContent',
  type: 'object',
  title: 'Footer Page Content',
  fields: [
    defineField({
      name: 'text',
      type: 'string',
      title: 'Page Title',
    }),
    defineField({
      title: 'Use URL to link to page',
      name: 'hasUrl',
      type: 'boolean',
      initialValue: false,
      description:
        'Check this box if you want to use a URL to link to this page.',
    }),
    defineField({
      name: 'url',
      type: 'string',
      title: 'URL',
      description:
        'Enter the URL for this page. Do not include the domain. Example: /contact/PageContent/4f7478fdff99',
      hidden: ({ parent }) => !parent.hasUrl,
    }),
    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Page Builder',
      hidden: ({ parent }) => parent.hasUrl,
      of: [
        { type: 'pageTitle' },
        { type: 'pageSubtitle' },
        { type: 'pageHeading' },
        { type: 'paragraph' },
        { type: 'image' },
        { type: 'bulletPoint' },
        { type: 'video' },
        { type: 'team' },
        { type: 'cta' },
        { type: 'contact' },
        { type: 'work_flow' },
        { type: 'hero' },
        { type: 'feature' },
        { type: 'logoCloud' },
        { type: 'FAQs' },
      ],
    }),
  ],
});
