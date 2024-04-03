export type TrainingPageType = {
  _id: string;
  _type: string;
  _createdAt: Date;
  _updatedAt: Date;
  title: string;
  pageBuilder: (
    | pageTitle
    | pageSubtitle
    | pageHeading
    | paragraph
    | imgUrl
    | bulletPoint
  )[];
};

export type pageTitle = {
  _key: string;
  _type: string;
  text: string;
};

export type pageSubtitle = {
  _key: string;
  _type: string;
  text: string;
};

export type pageHeading = {
  _key: string;
  _type: string;
  text: string;
};

export type paragraph = {
  _key: string;
  _type: string;
  text: string;
};

export type imgUrl = {
  _key: string;
  _type: string;
  asset: {
    _type: string;
    _ref: string;
  };
};

export type bulletPoint = {
  _key: string;
  _type: string;
  children: {
    _key: string;
    _type: string;
    text: string;
  };
};
