import { defineType, defineField } from 'sanity';
import {BlockElementIcon} from '@sanity/icons'
import colorList from '@/app/utils/colors';

export const blogListingStyle1 = defineType({
    name: 'blog_Listing_Style1',
    type: 'object',
    title: 'Blog Listing Style 1',
    icon : BlockElementIcon,
    fields: [
      defineField({
        name: 'title',
        type: 'string',
        title: 'Listing Title',
      }),
      defineField({
        name: 'blogs',
        type: 'array',
        title: 'Blogs',
        of: [{ type: 'reference', to: [{ type: 'blog' }] }],
      }),
      {
        name: "backGroundColor",
        title: "Back Ground Color",
        type: "simplerColor",
        options: {
          colorList: colorList,
        },
      },
    ],
  });
  