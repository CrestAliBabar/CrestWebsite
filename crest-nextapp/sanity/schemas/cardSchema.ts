
import { defineType, defineField } from 'sanity';

export const Card = defineType({
  name: 'Card',
  type: 'document',
  title: 'Card',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The title of the card',
    },
    // {
    //   name: 'pageName',
    //   type: 'reference',
    //   title: 'Page Name',
    //   description: 'Select a page from the navigation titles defined',
    //   to: [{ type: 'pageContent' }],
    // },
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
      description: 'A brief description of the card',
    },
    {
      name: 'imgUrl',
      type: 'image',
      title: 'Image URL',
      description: 'The image associated with the card',
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
    {
      name: 'navigationTitle',
      type: 'reference',
      title: 'Belonged Navigation Bar Title',
      description: 'Select a title from the navigation titles defined',
      to: [{ type: 'navigationTitleSchema' }],
      validation: (Rule) => Rule.required()
    },
    {
      name: 'isVisible',
      type: 'boolean',
      title: 'Visible on Page',
      description: 'Toggle to show or hide this card on the page',
      initialValue: true, // Default value set to true, meaning the card will be visible unless explicitly turned off
    },
  ],
});

