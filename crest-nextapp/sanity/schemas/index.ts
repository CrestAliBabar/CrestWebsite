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
  simpleText
]
