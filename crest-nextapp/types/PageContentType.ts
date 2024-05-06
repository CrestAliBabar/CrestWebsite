export type PageContentType = {
  _id: string;
  title: string;
  pages: page[];
};

export type page = {
  _key: string;
  _type: string;
  text: string;
  pageBuilder: pageBuilderSection[];
};

export type pageBuilderSection =
  | pageTitle
  | pageSubtitle
  | pageHeading
  | paragraph
  | imgUrl
  | bulletPoint
  | video;

export type heroBannerContent = {
  _key: string;
  _type: string;
  text: string;
  asset: {
    _id: string;
    url: string;
  };
  bulletPoint: string[];
  videoLabel: string;
  url: string;
  image: {
    _type: string;
    asset: {
      _id: string;
      url: string;
      _ref: string;
    };
  };
  Hero_Heading: {
    headingProp: {
      heading: string;
      headingColor: {
        label: string;
        value: string;
      };
    };
    subHeadingProp: {
      subHeading: string;
      subHeadingColor: {
        label: string;
        value: string;
      };
    };
  };
};

export type pageTitle = {
  _key: string;
  _type: string;
  text: string;
  asset: {
    _id: string;
    url: string;
  };
  bulletPoint: string[];
  videoLabel: string;
  url: string;
  image: {
    _type: string;
    asset: {
      _id: string;
      url: string;
      _ref: string;
    };
  };
  Hero_Heading: {
    headingProp: {
      heading: string;
      headingColor: {
        label: string;
        value: string;
      };
    };
    subHeadingProp: {
      subHeading: string;
      subHeadingColor: {
        label: string;
        value: string;
      };
    };
  };
};

export type pageSubtitle = {
  _key: string;
  _type: string;
  text: string;
  asset: {
    _id: string;
    url: string;
  };
  bulletPoint: string[];
  videoLabel: string;
  url: string;
  image: {
    _type: string;
    asset: {
      _id: string;
      url: string;
      _ref: string;
    };
  };
  Hero_Heading: {
    headingProp: {
      heading: string;
      headingColor: {
        label: string;
        value: string;
      };
    };
    subHeadingProp: {
      subHeading: string;
      subHeadingColor: {
        label: string;
        value: string;
      };
    };
  };
};

export type pageHeading = {
  _key: string;
  _type: string;
  text: string;
  asset: {
    _id: string;
    url: string;
  };
  bulletPoint: string[];
  videoLabel: string;
  url: string;
  image: {
    _type: string;
    asset: {
      _id: string;
      url: string;
      _ref: string;
    };
  };
  Hero_Heading: {
    headingProp: {
      heading: string;
      headingColor: {
        label: string;
        value: string;
      };
    };
    subHeadingProp: {
      subHeading: string;
      subHeadingColor: {
        label: string;
        value: string;
      };
    };
  };
};

export type paragraph = {
  _key: string;
  _type: string;
  text: string;
  asset: {
    _id: string;
    url: string;
  };
  bulletPoint: string[];
  videoLabel: string;
  url: string;
  image: {
    _type: string;
    asset: {
      _id: string;
      url: string;
      _ref: string;
    };
  };
  Hero_Heading: {
    headingProp: {
      heading: string;
      headingColor: {
        label: string;
        value: string;
      };
    };
    subHeadingProp: {
      subHeading: string;
      subHeadingColor: {
        label: string;
        value: string;
      };
    };
  };
};

export type imgUrl = {
  _key: string;
  _type: string;
  text: string;
  asset: {
    _id: string;
    url: string;
  };
  bulletPoint: string[];
  videoLabel: string;
  url: string;
  image: {
    _type: string;
    asset: {
      _id: string;
      url: string;
      _ref: string;
    };
  };
  Hero_Heading: {
    headingProp: {
      heading: string;
      headingColor: {
        label: string;
        value: string;
      };
    };
    subHeadingProp: {
      subHeading: string;
      subHeadingColor: {
        label: string;
        value: string;
      };
    };
  };
};

export type bulletPoint = {
  _key: string;
  _type: string;
  text: string;
  asset: {
    _id: string;
    url: string;
  };
  bulletPoint: string[];
  videoLabel: string;
  url: string;
  image: {
    _type: string;
    asset: {
      _id: string;
      url: string;
      _ref: string;
    };
  };
  Hero_Heading: {
    headingProp: {
      heading: string;
      headingColor: {
        label: string;
        value: string;
      };
    };
    subHeadingProp: {
      subHeading: string;
      subHeadingColor: {
        label: string;
        value: string;
      };
    };
  };
};

export type video = {
  _key: string;
  _type: string;
  text: string;
  asset: {
    _id: string;
    url: string;
  };
  bulletPoint: string[];
  videoLabel: string;
  url: string;
  image: {
    _type: string;
    asset: {
      _id: string;
      url: string;
      _ref: string;
    };
  };
  Hero_Heading: {
    headingProp: {
      heading: string;
      headingColor: {
        label: string;
        value: string;
      };
    };
    subHeadingProp: {
      subHeading: string;
      subHeadingColor: {
        label: string;
        value: string;
      };
    };
  };
};
