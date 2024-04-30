import CommonPageComponent from "@/app/component/commonPageComponent";
import React from "react";
import { getTrainingCard } from "@/sanity/sanity-utils";
import { getPageInfo } from "@/sanity/sanity-utils";
import { getTrainingPage } from "@/sanity/sanity-utils";
// const pageInfo = {
//   heading: "Workshops and Training",
//   description:
//     "Best-in-class corporate strategy workshops and compliance training on open source.",
//   tabPage: "Training",
// };

export default async function Training() {
  const tabName = "Training";

  const trainingCard = await getTrainingCard();
  const pageInfoArray = await getPageInfo(tabName);
  const pageInfo = pageInfoArray[0] ?? {};
  const trainingPage = await getTrainingPage();

  return (
    <div className="px-28">
      <CommonPageComponent
        componentData={trainingCard}
        pageInfo={pageInfo}
        pageDynamicId={trainingPage}
      />
    </div>
  );
}
