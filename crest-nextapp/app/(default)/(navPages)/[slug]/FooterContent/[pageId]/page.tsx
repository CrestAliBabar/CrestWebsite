import ContentComponent from '@/app/component/contentComponent/contentComponent';
import { getFooter } from '@/sanity/sanity-utils';
import { notFound } from 'next/navigation';

interface FooterContentProps {
  params: {
    slug: string;
    pageId: string;
  };
}

export default async function FooterContent({
  params: { slug, pageId },
}: FooterContentProps) {
  try {
    const footerContent = await getFooter(slug, pageId);
    const pageBuilder =
      footerContent[0].footerTextSections[0].pages[0].pageBuilder;

    return <ContentComponent Contents={pageBuilder} />;
  } catch (e) {
    notFound();
  }
}
