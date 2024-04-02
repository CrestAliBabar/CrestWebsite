import CommonPageComponent from "@/app/component/commonPageComponent";
import React from "react";
import { getTrainingCard } from "@/sanity/sanity-utils";


const pageInfo = {
  heading:"Workshops and Training",
  description:"Best-in-class corporate strategy workshops and compliance training on open source.",
  tabPage: "Training"
}


type TrainCard = {
  title: string;
  pageName: string;
  description: string;
  imgUrl: string;
}

export default async function Training () {
  
  const trainingCard = await getTrainingCard();
  console.log(trainingCard);

  return (
    <div className="px-28">
      <CommonPageComponent componentData={trainingCard}  pageInfo={pageInfo} />
    </div>
  );
};


