

import {defineField, defineType} from 'sanity'
import colorList from "@/app/utils/colors";

export const promotionType = defineType({
  name: 'promotion',
  type: 'object',
  title: 'Promotion',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'link',
      type: 'url',
    }),

    {
      name: 'buttonBackgroundColor',
      title: 'Button Background Color',
      type: 'simplerColor',
      options: {
        colorList: colorList
      },
    },

  ],
})
