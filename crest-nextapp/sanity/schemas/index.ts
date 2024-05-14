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
import { featureGridLayout } from "./Feature-Schemas/featureGridLayout";
import { featureHeroFacts } from "./Feature-Schemas/featureHeroFacts";
import { featureCard } from "./Feature-Schemas/featureCard";
import { featureFact } from "./Feature-Schemas/featureFacts";
import { contentType } from "./Content-Schemas/contentType";
import { contentImageDescription } from "./Content-Schemas/contentImageDescription";
import { contentHeading } from "./Content-Schemas/contentHeading";
import { featureFactsHyperlink } from "./Feature-Schemas/featureFactsHyperlink";
import { featureHyperlink } from "./Feature-Schemas/featureHyperlinks";
import { teamWithIntroduction } from "./Team-Schemas/teamWithIntroduction";
import { teamType } from "./Team-Schemas/teamType";
import { teamMember } from "./Team-Schemas/teamMember";
import { teamCardStandard } from "./Team-Schemas/teamCardStandard";

import { CTA_Text } from "./CTA-Schemas/CTA_Text";
import { CTA_Pattern } from "./CTA-Schemas/CTA_Pattern";
import { CTA_Hero } from "./CTA-Schemas/CTA_Hero";

import {workFlowType} from "./WorkFlow-Schemas/workFlowType";
import {stepBlockRound} from "./WorkFlow-Schemas/stepBlockRound";
import {stepBlockRectangle} from "./WorkFlow-Schemas/stepBlockRectangle";

export const schemaTypes = [
  pageType,
  //CTA
  promotionType,
  CTA_Text,
  CTA_Pattern,
  CTA_Hero,

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
  featureFactsHyperlink,
  featureCard,
  featureFact,
  featureHyperlink,

  //Content
  contentType,
  contentImageDescription,
  contentHeading,

  //Teams
  teamType,
  teamMember,
  teamWithIntroduction,
  teamCardStandard,

  //WorkFlow
  workFlowType,
  stepBlockRound,
  stepBlockRectangle,

  
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
