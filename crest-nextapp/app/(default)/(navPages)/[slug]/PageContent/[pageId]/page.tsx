import ContentComponent from "@/app/component/contentComponent/contentComponent";
import { getNavigationTitle } from "@/sanity/sanity-utils";

interface PageContentProps {
  params: {
    slug: string;
    pageId: string;
  };
}

export default async function PageContent({
  params: { slug, pageId },
}: PageContentProps) {
  const pageContent = await getNavigationTitle(slug, pageId);
  const pageBuilder = pageContent[0].pages[0].pageBuilder;

  return <ContentComponent Contents={pageBuilder} />;
}
