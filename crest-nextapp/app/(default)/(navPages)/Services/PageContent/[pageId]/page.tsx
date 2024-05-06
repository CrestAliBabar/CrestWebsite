import PageContentComponent from "@/app/component/PageContentComponent";
import { getServicePage } from "@/sanity/sanity-utils";
import HeroWithBanner from "@/app/component/heroComponents/heroWithBanner";

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
      {/* <HeroWithBanner ></HeroWithBanner> */}
      <PageContentComponent pageContent={pageData} />
    </>
  );
}
