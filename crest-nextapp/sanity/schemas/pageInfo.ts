import { defineType, defineField } from 'sanity';

export const PageInfo = defineType({
  name: 'PageInfo',
  type: 'document',
  title: 'Page Information',
  preview: {
    select: {
      title: 'tabName',
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
      type: 'string',
      title: 'tab name',
      description: 'tab name for link and title',
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
    }
  ],
});
