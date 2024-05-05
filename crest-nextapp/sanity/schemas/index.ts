// ./schemas/index.ts

import { formType } from "./formType";
import { heroType } from "./Hero-Schemas/heroType";
import { imageGalleryType } from "./imageGalleryType";
import { pageType } from "./pageType";
import { promotionType } from "./promotionType";
import { textWithIllustrationType } from "./textWithIllustrationType";
import { videoType } from "./videoType";
import { consulting, simpleText } from "./consulting";
import { description } from "./consulting";
import { trainCard } from "./trainCard";
import { serviceCard } from "./serviceCard";
import { consultingCard } from "./consultingCard";
import { PageInfo } from "./pageInfo";
import layoutChange from "./layout-change";
import { navigationTitleSchema } from "./navigationTitleSchema";
import {
  bulletPoint,
  imgUrl,
  pageContent,
  pageHeading,
  pageSubtitle,
  pageTitle,
  paragraph,
} from "./pageContentSchema";
import { heroWithoutBanner } from "./Hero-Schemas/heroWithoutBanner";
import { heroWithBanner } from "./Hero-Schemas/heroWithBanner";
import { heroWithImage } from "./Hero-Schemas/heroWithImage";
import { heroHeading } from "./Hero-Schemas/heroHeading";

export const schemaTypes = [
  pageType,
  promotionType,
  heroType,
  heroWithoutBanner,
  heroWithBanner,
  heroWithImage,
  heroHeading,
  textWithIllustrationType,
  imageGalleryType,
  formType,
  videoType,
  consulting,
  pageTitle,
  description,
  bulletPoint,
  simpleText,
  trainCard,
  serviceCard,
  consultingCard,
  PageInfo,
  layoutChange,
  pageSubtitle,
  pageHeading,
  paragraph,
  imgUrl,
  navigationTitleSchema,
  pageContent,
];
