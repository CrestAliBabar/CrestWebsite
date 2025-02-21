import { defineType, defineField } from 'sanity';
import {BlockElementIcon} from '@sanity/icons'
import colorList from '@/app/utils/colors';

export const caseStudyListingStyle1 = defineType({
    name: 'caseStudy_Listing_Style1',
    type: 'object',
    title: 'Case Study Listing Style 1',
    icon : BlockElementIcon,
    fields: [
      defineField({
        name: 'title',
        type: 'string',
        title: 'Listing Title',
      }),
      defineField({
        name: 'caseStudies',
        type: 'array',
        title: 'Case Studies',
        of: [{ type: 'reference', to: [{ type: 'caseStudy' }] }],
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
  