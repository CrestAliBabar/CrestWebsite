import ContentComponent from "@/app/component/contentComponent/contentComponent";
import { getNavigationTitle } from "@/sanity/sanity-utils";
import { notFound } from "next/navigation";

interface PageContentProps {
  params: {
    slug: string;
    pageId: string;
  };
}

export default async function PageContent({
  params: { slug, pageId },
}: PageContentProps) {
  try {
    const pageContent = await getNavigationTitle(slug, pageId);
    const pageBuilder = pageContent[0].pages[0].pageBuilder;

    return <ContentComponent Contents={pageBuilder} />;
  } catch (e) {
    notFound();
  }
}
