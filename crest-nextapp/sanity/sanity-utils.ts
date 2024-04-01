import { createClient } from '@sanity/client';
import { groq } from 'next-sanity';

const client = createClient ({
  projectId :"7xkjaifb",

  dataset : "production",

  apiVersion : "2024-03-07",
})


type TrainCard = {
  title: string;
  pageName: string;
  description: string;
  imgUrl: string;
}

export async function getTrainingCard(): Promise<TrainCard[]> {
  return client.fetch(groq`*[_type == "trainCard"]`);
  // return client.fetch(groq `*[_type == "trainCard"] {
  //   pageName,
  //   imgUrl,
  //   description,
  //   title
  // }`)
}


