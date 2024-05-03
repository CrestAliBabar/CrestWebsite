import PageContentComponent from "@/app/component/PageContentComponent";
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
  const pageData = await getNavigationTitle(slug, pageId);

  return (
    <>
      <PageContentComponent pageContent={pageData} />
    </>
  );
}
