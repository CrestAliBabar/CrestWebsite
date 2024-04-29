import PageContentComponent from "@/app/component/PageContentComponent";
import { getConsultingPage } from "@/sanity/sanity-utils";

interface PageContentProps {
  params: {
    pageId: string;
  };
}

export default async function PageContent({
  params: { pageId },
}: PageContentProps) {
  const pageData = await getConsultingPage(pageId);

  return (
    <>
      <PageContentComponent pageContent={pageData} />
    </>
  );
}
