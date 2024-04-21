import { pageTitle } from "@/sanity/schemas/consulting";

export type TrainingPageType = {
  _id: string;
  title: string;
  pageBuilder: pageBuilderSection[];
};

export type pageBuilderSection =
  | pageTitle
  | pageSubtitle
  | pageHeading
  | paragraph
  | imgUrl;

export type pageTitle = {
  _key: string;
  _type: string;
  text: string;
  asset: {
    _id: string;
    url: string;
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
};

export type pageHeading = {
  _key: string;
  _type: string;
  text: string;
  asset: {
    _id: string;
    url: string;
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
};

export type imgUrl = {
  _key: string;
  _type: string;
  text: string;
  asset: {
    _id: string;
    url: string;
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
};
