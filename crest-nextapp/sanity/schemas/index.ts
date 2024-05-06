// ./schemas/index.ts

import { formType } from "./formType";
import { heroType } from "./Hero-Schemas/heroType";
import { imageGalleryType } from "./imageGalleryType";
import { pageType } from "./pageType";
import { promotionType } from "./promotionType";
import { featureType } from "./Feature-Schemas/featureType";
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
import { heroWithoutButton } from "./Hero-Schemas/heroWithoutButton";
import { featureHeading } from "./Feature-Schemas/featureHeading";
import {  featureGridLayout } from "./Feature-Schemas/featureGridLayout";
import { featureHeroFacts } from "./Feature-Schemas/featureHeroFacts";
import { featureCard } from "./Feature-Schemas/featureCard";
import { featureFact } from "./Feature-Schemas/featureFacts";
import { contentType } from "./Content-Schemas/contentType";
import { contentImageDescription } from "./Content-Schemas/contentImageDescription";
import { contentHeading } from "./Content-Schemas/contentHeading";

export const schemaTypes = [
  pageType,
  //CTA
  promotionType,

  //Hero
  heroType,
  heroWithoutBanner,
  heroWithBanner,
  heroWithImage,
  heroWithoutButton,
  heroHeading,

  //Feature
  featureType,
  featureHeading,
  featureGridLayout,
  featureHeroFacts,
  featureCard,
  featureFact,

  //Content
  contentType,
  contentImageDescription,
  contentHeading,

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
