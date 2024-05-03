export type PageContentType = {
  _id: string;
  title: string;
  pages: page[];
};

type page = {
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
};
