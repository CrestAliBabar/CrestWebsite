import { pageTitle } from "@/sanity/schemas/consulting";

export type TrainingPageType = {
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
  text: string;
};

// export type bulletPoint = {
//   _key: string;
//   _type: string;
//   text: string;
// };
