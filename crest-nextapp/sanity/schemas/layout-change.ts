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
        type: "simplerColor",
        options: {
          colorFormat: "hex",
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
    ],
  };
  
  export default layoutChange;