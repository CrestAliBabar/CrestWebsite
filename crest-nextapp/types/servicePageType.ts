import { pageTitle } from "@/sanity/schemas/consulting";
import { videoType } from "@/sanity/schemas/videoType";

export type servicePageType = {
  title: string;
  pageBuilder: pageBuilderSection[];
};

export type pageBuilderSection = pageTitle | pageSubtitle | paragraph;
// | videoType;

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

export type paragraph = {
  _key: string;
  _type: string;
  text: string;
};

// export type videoType = {
//   _key: string;
//   _type: string;
//   text: string;
// };
