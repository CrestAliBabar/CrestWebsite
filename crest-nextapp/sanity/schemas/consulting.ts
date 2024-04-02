import { DocumentIcon } from '@sanity/icons';
import { defineType, defineField } from 'sanity';

export const bulletPoint = defineType({
  name: 'bulletPoint',
  type: 'object',
  title: 'Bullet Point',
  fields: [
    {
      title: 'Bullet Point', 
      name: 'bulletPoint',
      type: 'array', 
      of: [{type: 'block'}]
    },
    // Any other fields related to bullet points
  ],
});

// export const bulletPoint = defineType({
//   title: 'Bullet Point', 
//   name: 'bulletPoint',
//   type: 'array', 
//   of: [{type: 'block'}]
// });


export const pageTitle = defineType({
  name: 'pageTitle',
  type: 'object',
  title: 'PageTitle',
  fields: [
    defineField({
      name: 'text',
      type: 'string',
      title: 'Text',
    }),
    // Additional subtitle fields if needed
  ],
});

export const description = defineType({
  name: 'description',
  type: 'object',
  title: 'Description',
  fields: [
    defineField({
      name: 'text',
      type: 'string',
      title: 'Text',
    }),
    // Additional subtitle fields if needed
  ],
});

export const simpleText = defineType({
  name: 'simpleText',
  type: 'object',
  title: 'Simple Text',
  fields: [
    defineField({
      name: 'text',
      type: 'string',
      title: 'Text',
    }),
  ],
});

export const consulting = defineType({
  name: 'consulting',
  type: 'document',
  title: 'Consulting',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    {
      name: 'pageBuilder',
      type: 'array',
      title: 'Page Builder',
      of: [
        { type: 'pageTitle' }, 
        { type: 'description' }, // Reference the subtitle type defined above
        { type: 'bulletPoint' }, // Reference the bulletPoint type defined above
        { type: 'simpleText' }, // Reference the simpleText type defined above

      ],
    },
    // Other fields...
  ],
  icon: DocumentIcon,
});

// Remember to include bulletPoint and subtitle in the main schema array as well
