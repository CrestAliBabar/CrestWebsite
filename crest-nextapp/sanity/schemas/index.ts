// ./schemas/index.ts

import {formType} from './formType'
import {heroType} from './heroType'
import {imageGalleryType} from './imageGalleryType'
import {pageType} from './pageType'
import {promotionType} from './promotionType'
import {textWithIllustrationType} from './textWithIllustrationType'
import {videoType} from './videoType'
import {bulletPoint, consulting, simpleText} from './consulting'
import {description,pageTitle} from './consulting'
import {trainCard} from './trainCard'
import {serviceCard} from './serviceCard'
import {consultingCard} from './consultingCard'
import {PageInfo} from './pageInfo'
import layoutChange from './layout-change'
import {
  imgUrl,
  pageHeading,
  pageSubtitle,
  paragraph,
  trainingPageSchema,
} from "./trainingPageSchema";

import { servicesPageSchema } from "./servicesPageSchema";

export const schemaTypes = [
  pageType,
  promotionType,
  heroType,
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
  servicesPageSchema,
  trainingPageSchema,
  pageSubtitle,
  pageHeading,
  paragraph,
  imgUrl,
];
