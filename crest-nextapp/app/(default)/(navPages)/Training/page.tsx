import CommonPageComponent from "@/app/component/commonPageComponent";
import React from "react";
import { getTrainingCard } from "@/sanity/sanity-utils";

const pageInfo = {
  heading: "Workshops and Training",
  description:
    "Best-in-class corporate strategy workshops and compliance training on open source.",
  tabPage: "Training",
};


export default async function Training() {
  const trainingCard = await getTrainingCard();

  return (
    <div className="px-28">
      <CommonPageComponent componentData={trainingCard} pageInfo={pageInfo} />
    </div>
  );
}
