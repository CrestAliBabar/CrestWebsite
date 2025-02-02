// ./schemas/index.ts

import { formType } from './formType';
import { heroType } from './Hero-Schemas/heroType';
import { imageGalleryType } from './imageGalleryType';
import { pageType } from './pageType';
import { promotionType } from './promotionType';
import { featureType } from './Feature-Schemas/featureType';
import { videoType } from './videoType';
//import { PageInfo } from './pageInfo';
import layoutChange from './layout-change';
import { navigationTitleSchema } from './navigationTitleSchema';
import {
  bulletPoint,
  imgUrl,
  pageContent,
  pageHeading,
  pageSubtitle,
  pageTitle,
  paragraph,
  customImage
} from './pageContentSchema';
import { heroWithoutBanner } from './Hero-Schemas/heroWithoutBanner';
import { heroWithBanner } from './Hero-Schemas/heroWithBanner';
import { heroWithImage } from './Hero-Schemas/heroWithImage';
import { heroHeading } from './Hero-Schemas/heroHeading';
import { heroWithoutButton } from './Hero-Schemas/heroWithoutButton';

// Feature Schemas
import { featureHeading } from './Feature-Schemas/featureHeading';
import { featureGridLayout } from './Feature-Schemas/featureGridLayout';
import { featureHeroFacts } from './Feature-Schemas/featureHeroFacts';
import { featureCard } from './Feature-Schemas/featureCard';
import { featureFact } from './Feature-Schemas/featureFacts';
import {
  featureCenteredGrid,
  featureCardForCenteredGrid,
} from './Feature-Schemas/featureCenteredGrid';
import { featureWithLargeScreenShot } from './Feature-Schemas/featureWithLargeScreenShot';
import {
  featureWithSmIconLink,
  featureCardForSmIconLink,
} from './Feature-Schemas/featureWithSmIconLink';
import { featureWithColumnLgIcon } from './Feature-Schemas/featureWithColumnLgIcon';

import { contentType } from './Content-Schemas/contentType';
import { contentImageDescription } from './Content-Schemas/contentImageDescription';
import { contentHeading } from './Content-Schemas/contentHeading';
import { featureFactsHyperlink } from './Feature-Schemas/featureFactsHyperlink';
import { featureHyperlink } from './Feature-Schemas/featureHyperlinks';
import { teamWithIntroduction } from './Team-Schemas/teamWithIntroduction';
import { teamType } from './Team-Schemas/teamType';
import { teamMember } from './Team-Schemas/teamMember';
import { teamCardStandard } from './Team-Schemas/teamCardStandard';
import { contact } from './Contact-Schemas/contact';

import { CTA_Text } from './CTA-Schemas/CTA_Text';
import { CTA_Pattern } from './CTA-Schemas/CTA_Pattern';
import { CTA_Hero } from './CTA-Schemas/CTA_Hero';
import { ctaType } from './CTA-Schemas/ctaType';

import { workFlowType } from './WorkFlow-Schemas/workFlowType';
import { stepBlockRound } from './WorkFlow-Schemas/stepBlockRound';
import { stepBlockRectangle } from './WorkFlow-Schemas/stepBlockRectangle';

import { pageContentForNavPage } from './pageContentForNavPage';
import { logoCloudType } from './LogoCloud-Schemas/logoCloudType';
import { logoCloudUtlis } from './LogoCloud-Schemas/logoCloudUtlis';

import { logoGrid } from './LogoCloud-Schemas/logoGrid';
import { logoStandardText } from './LogoCloud-Schemas/logoStandardText';
import {
  footerPageContent,
  footerSchema,
  footerSectionContent,
} from './footerSchema';

//FAQs
import { FAQsType } from './FAQs-Schemas/FAQsType';
import { FAQsWithSupportingText } from './FAQs-Schemas/FAQsWithSupportingText';
import { FAQsTwoColumn } from './FAQs-Schemas/FAQsTwoColumn';
import { FAQsThreeColumnCentered } from './FAQs-Schemas/FAQsThreeColumnCentered';
import { FAQsSideBySide } from './FAQs-Schemas/FAQsSideBySide';
import { featurePageDetails } from './Feature-Schemas/featurePageDetails';
import { featurePageDetialsFields } from './Feature-Schemas/featurePageDetialsFields';
import { featureDashboard } from './Feature-Schemas/featureDashboard';

export const schemaTypes = [
  pageType,
  //CTA
  promotionType,
  CTA_Text,
  CTA_Pattern,
  CTA_Hero,
  ctaType,

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
  featureCardForCenteredGrid,
  featureCenteredGrid,
  featureWithLargeScreenShot,
  featureWithSmIconLink,
  featureCardForSmIconLink,
  featureWithColumnLgIcon,
  featurePageDetails,
  featurePageDetialsFields,
  featureDashboard,

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

  //FAQs
  FAQsType,
  FAQsWithSupportingText,
  FAQsTwoColumn,
  FAQsThreeColumnCentered,
  FAQsSideBySide,

  // Contact
  contact,

  //LogoCloud
  logoCloudType,
  logoCloudUtlis,
  logoStandardText,
  logoGrid,

  imageGalleryType,
  formType,
  videoType,
  pageTitle,
  bulletPoint,
  // PageInfo,
  layoutChange,
  pageSubtitle,
  pageHeading,
  paragraph,
  imgUrl,
  customImage,
  navigationTitleSchema,
  pageContent,
  pageContentForNavPage,

  // Footer
  footerSchema,
  footerSectionContent,
  footerPageContent,
];
