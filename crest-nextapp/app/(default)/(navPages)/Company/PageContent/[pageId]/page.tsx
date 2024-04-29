import PageContentComponent from "@/app/component/PageContentComponent";
import { getCompanyPage } from "@/sanity/sanity-utils";

interface PageContentProps {
  params: {
    pageId: string;
  };
}

export default async function PageContent({
  params: { pageId },
}: PageContentProps) {
  const pageData = await getCompanyPage(pageId);
  console.log(pageData[0]);

  return (
    <>
      <PageContentComponent pageContent={pageData} />
    </>
  );
}
