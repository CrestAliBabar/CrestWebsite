import { pageTitle } from "@/sanity/schemas/consulting";

export type servicePageType = {
  title: string;
  pageBuilder: pageBuilderSection[];
};

export type pageBuilderSection = pageTitle | pageSubtitle | paragraph;

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

export type videoType = {
  _key: string;
  _type: string;
  text: string;
};
