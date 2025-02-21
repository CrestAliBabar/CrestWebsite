import { defineType, defineField } from "sanity";
import {TextIcon} from '@sanity/icons'
import {ImageIcon} from '@sanity/icons'

export const pageContent = defineType({
  name: "pageContent",
  type: "object",
  title: "PageTitle",
  fields: [
    defineField({
      name: "text",
      type: "string",
      title: "Page Title",
      icon: TextIcon,
    }),
    defineField({
      title: "Display on Navigation Dropdown Menu",
      name: "isDisplayed",
      type: "boolean",
      initialValue: false,
      description:
        "Check this box if you want this page to be displayed on the navigation dropdown menu.",
    }),
    defineField({
      name: "pageBuilder",
      type: "array",
      title: "Page Builder",
      of: [
        { type: "pageTitle" },
        { type: "pageSubtitle" },
        { type: "pageHeading" },
        { type: "paragraph" },
        { type: "bulletPoint" },
        { type: "customImage" },
        { type: "video" },
        { type: "team" },
        { type: "cta" },
        { type: "contact" },
        { type: "work_flow"},
        { type: "hero"},
        {type: "feature"},
        {type: "logoCloud"},
        {type: "FAQs"},
        {type: "blogListing"},        
        {type: "caseStudyListing"}        
      ],
    }),
  ],
});

export const pageTitle = defineType({
  name: "pageTitle",
  type: "object",
  title: "PageTitle",
  icon: TextIcon,
  fields: [
    defineField({
      name: "text",
      type: "string",
      title: "Text",
    }),
    // Additional subtitle fields if needed
  ],
});

export const pageSubtitle = defineType({
  name: "pageSubtitle",
  type: "object",
  title: "Page Subtitle",
  icon: TextIcon,
  fields: [
    defineField({
      name: "text",
      type: "string",
      title: "Text",
    }),
  ],
});

export const pageHeading = defineType({
  name: "pageHeading",
  type: "object",
  title: "Page Heading",
  icon: TextIcon,
  fields: [
    defineField({
      name: "text",
      type: "string",
      title: "Text",
    }),
  ],
});

export const paragraph = defineType({
  name: "paragraph",
  type: "object",
  title: "Paragraph",
  icon: TextIcon,
  fields: [
    defineField({
      name: "text",
      type: "text",
      title: "Text",
    }),
  ],
});

export const imgUrl = defineType({
  name: "imgUrl",
  type: "object",
  title: "Image URL",
  fields: [
    defineField({
      name: "imgUrl",
      type: "image",
      title: "Image URL",
    }),
  ],
});

export const bulletPoint = defineType({
  name: "bulletPoint",
  type: "object",
  title: "Bullet Point",
  icon: TextIcon,
  fields: [
    {
      title: "Bullet Point",
      name: "bulletPoint",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "list",
      },
    },
    // Any other fields related to bullet points
  ],
  
});

export const customImage = defineType({
  name: "customImage",
  type: "image",
  title: "Custom Image",
  icon: ImageIcon,
  fields: [
    defineField({
      name: "altText",
      type: "string",
      title: "Alternative Text",
      description: "A short description of the image for accessibility.",
    }),
    defineField({
      name: "caption",
      type: "string",
      title: "Caption",
      description: "Caption for the image.",
    }),
  ],
});