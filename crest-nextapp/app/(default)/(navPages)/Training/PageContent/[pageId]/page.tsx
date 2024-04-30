import PageContentComponent from "@/app/component/PageContentComponent";
import { getTrainingPage } from "@/sanity/sanity-utils";

interface PageContentProps {
  params: {
    pageId: string;
  };
}

export default async function PageContent({
  params: { pageId },
}: PageContentProps) {
  const pageData = await getTrainingPage(pageId);

  return (
    <>
      <PageContentComponent pageContent={pageData} />
    </>
  );
}
