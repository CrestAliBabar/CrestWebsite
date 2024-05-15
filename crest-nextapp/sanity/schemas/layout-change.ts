const TransitionDirection = [
  { "title": "Bottom to Top", "value": "to top"},
  { "title": "left to right", "value": "to right"},
  { "title": "top to bottom", "value": "to bottom"},
  { "title": "right to left", "value": "to left"},
  { "title": "bottom-left to top-right", "value": "to top right"},
  { "title": "bottom-right to top-left", "value": "to top left"},
  { "title": "top-left to bottom-right", "value": "to bottom right"},
  { "title": "top-right to bottom-left", "value": "to bottom left"},
]
import colorList from "@/app/utils/colors";

const layoutChange = {
    name: "layout-setting",
    title: "Layout Setting",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
      },
      {
        name: "backgroundColor",
        title: "Background Color with hex Format",
        type: 'simplerColor',
        options: {
          colorList: colorList,
        },
      },
      {
        name: "image",
        title: "Logo",
        type: "image",
        description: "Upload the logo",
        options: {
          hotspot: true,
        },
      },
      {
        name: 'backgroundGradient',
        title: 'Background Gradient Color',
        type: 'object',
        fields: [
          {
            name: 'startColor',
            title: 'Start Color',
            type: 'simplerColor',
            options: {
              colorFormat: "hex",
            },
          },
          {
            name: 'endColor',
            title: 'End Color',
            type: 'simplerColor',
            options: {
              colorFormat: "hex",
            },
          },
          {
            name: "transitionDirection",
            title: "Transition Direction",
            type: "string",
            options: {
              list: TransitionDirection,
              layout: "dropdown",
            },
          }
        ]
      },
    ],
  };
  
  export default layoutChange;