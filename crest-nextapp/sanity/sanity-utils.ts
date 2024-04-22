import { LayoutType } from "@/types/layoutType";
import { servicePageType } from "@/types/servicePageType";
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
}

// export async function getServicePage(): Promise<servicePageType[]> {
//   try {
//     return client.fetch(groq`*[_type == "servicesPageSchema"] {
//       title,
//       "pageBuilder": pageBuilder[]{
//         ...,  // Spread operator to include all fields by default
//         _type == 'videoType' => {
//           "url": url  // Directly use 'url' if it's a string, or use 'asset->url' if 'url' is an asset reference
//         }
//       }
//     }`);
//   } catch (error) {
//     console.error("Failed to fetch service pages:", error);
//     return []; // Return an empty array or handle the error as appropriate
//   }
// }
// export async function getServicePage(): Promise<servicePageType[]> {
//   return client.fetch(
//     groq`*[_id == "29ccca11-d0c2-4524-bb5b-fa3597a337be"]{title, pageBuilder}`
//   );
// }
export async function getServicePage(): Promise<servicePageType[]> {
  try {
    const data = await client.fetch(
      groq`*[_type == "servicesPageSchema"]{title, pageBuilder[]{_key, _type, text}}`
    );
    console.log("Fetched data:", data);
    return data;
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
    return []; // Return an empty array or handle the error as appropriate
  }
}
