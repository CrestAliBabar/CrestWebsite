import TrainingPagesComponent from "@/app/component/TrainingPagesComponent";
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
  // console.log(pageData[0]);

  return (
    <>
      <TrainingPagesComponent pageContent={pageData} />
    </>
  );
}
