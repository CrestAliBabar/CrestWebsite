import TrainingPagesComponent from "@/app/component/TrainingPagesComponent";
import { getTrainingPage } from "@/sanity/sanity-utils";

export default async function PageContent() {
  const pageData = await getTrainingPage();
  console.log(pageData);
  return (
    <>
      <TrainingPagesComponent pageContent={pageData} />
    </>
  );
}
