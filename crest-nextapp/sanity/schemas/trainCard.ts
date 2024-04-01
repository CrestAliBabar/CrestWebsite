import { DocumentIcon } from '@sanity/icons';
import { defineType, defineField } from 'sanity';

export const trainCard = defineType({
  name: 'trainCard',
  type: 'document',
  title: 'Train Card',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The title of the train card',
    },
    {
      name: 'pageName',
      type: 'string',
      title: 'Page Name',
      description: 'corresponding page name',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'A brief description of the train card',
    },
    {
      name: 'imgUrl',
      type: 'image',
      title: 'Image URL',
      description: 'The image associated with the train card',
      // If you want to have fields for alt text or captions, you can add them like this:
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'A description of the image for accessibility purposes',
          options: {
            isHighlighted: true // Use this option to highlight the field in the Sanity Studio
          }
        }
      ],
      options: {
        hotspot: true // Enables hotspot positioning for responsive images
      }
    },
  ],
});

