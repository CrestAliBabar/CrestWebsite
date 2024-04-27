import ServicePagesComponent from "@/app/component/ServicePagesComponent";
import { getServicePage } from "@/sanity/sanity-utils";

interface PageContentProps {
  params: {
    pageId: string;
  };
}

export default async function pageContent({
  params: { pageId },
}: PageContentProps) {
  const pageData = await getServicePage(pageId);
  return (
    <>
      <ServicePagesComponent pageContent={pageData} />
    </>
  );
}
