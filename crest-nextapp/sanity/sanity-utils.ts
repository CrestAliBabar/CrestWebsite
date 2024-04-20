import { LayoutType } from "@/types/layoutType";
import { TrainingPageType } from "@/types/TrainingPageType";
import { createClient } from "@sanity/client";
import { groq } from "next-sanity";

const client = createClient({
  projectId: "7xkjaifb",

  dataset: "production",

  apiVersion: "2024-03-07",
});

type TrainCard = {
  title: string;
  pageName: string;
  description: string;
  imgUrl: string;
};

export async function getTrainingCard(): Promise<TrainCard[]> {
  return client.fetch(groq`*[_type == "trainCard"]`);
  // return client.fetch(groq `*[_type == "trainCard"] {
  //   pageName,
  //   imgUrl,
  //   description,
  //   title
  // }`)
}

export async function getLayoutSettings(): Promise<LayoutType[]> {
  return client.fetch(groq`*[_type == "layout-setting"] {
    _id,
    name,
    backgroundColor{
    value
  },
    image {
      asset->{
      _id,
      url,
    }
    }
  }`);
export async function getTrainingPage(): Promise<TrainingPageType[]> {
  return client.fetch(
    groq`*[_id == "066d2e06-ab1f-4ee7-882f-4f97d045664a"]{title, pageBuilder}`
  );
}
