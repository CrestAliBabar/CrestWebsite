import { defineType, defineField } from 'sanity';

export const PageInfomation = defineType({
  name: 'PageInfomation',
  type: 'document',
  title: 'Page Information',
  preview: {
    select: {
      title: 'tabName.title', // Make sure to access the title property of the referenced document
    },
    prepare({ title = 'No title' }) {
      return {
        title,
      };
    },
  },
  fields: [
    {
      name: 'tabName',
      type: 'reference',
      title: 'Tab Name',
      description: 'Select a Navigation Bar Title from the navigation titles defined',
      to: [{ type: 'navigationTitleSchema' }],
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
      description: 'The main heading or title of the training page',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'A detailed description of the training page',
    },
    {
      name: 'associatedCards',
      type: 'array',
      title: 'Associated Cards',
      description: 'Select one or more cards associated with this page',
      of: [
        {
          type: 'reference',
          to: [{ type: 'Card' }]
        }
      ]
    }
  ],
});
