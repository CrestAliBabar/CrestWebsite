import { LayoutType } from "@/types/layoutType";
import { createClient } from "@sanity/client";
import { groq } from "next-sanity";
import { PageContentType } from "@/types/PageContentType";

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
    },
  backgroundGradient{
      transitionDirection,
  startColor{
    value
  },
  endColor{
    value
  }
  }

  }`);
}

export async function getTrainingPage(
  pageId?: string
): Promise<PageContentType[]> {
  if (pageId) {
    return client.fetch(
      groq`*[_type == "trainingPageSchema" && _id == "${pageId}" ]{_id, pageBuilder[]{_key, _type, text, asset->{_id, url}, bulletPoint[], url, videoLabel}}`
    );
  } else {
    return client.fetch(
      groq`*[_type == "trainingPageSchema"]| order(_createdAt){_id, title}`
    );
  }
}

export async function getServicePage(
  pageId?: string
): Promise<PageContentType[]> {
  if (pageId) {
    try {
      const data = await client.fetch(
        groq`*[_type == "servicesPageSchema"&&_id=="${pageId}"]{_id, pageBuilder[]{_key, _type, text, asset->{_id, url}, bulletPoint[], url, videoLabel}}`
      );
      return data;
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
      return []; // Return an empty array or handle the error as appropriate
    }
  } else {
    return client.fetch(
      groq`*[_type == "servicesPageSchema"] | order(_createdAt){_id, title}`
    );
  }
}

export async function getConsultingPage(
  pageId?: string
): Promise<PageContentType[]> {
  if (pageId) {
    return client.fetch(
      groq`*[_type == "consultingPageSchema" && _id == "${pageId}" ]{_id, pageBuilder[]{_key, _type, text, asset->{_id, url}, bulletPoint[], url, videoLabel}}`
    );
  } else {
    return client.fetch(
      groq`*[_type == "consultingPageSchema"]| order(_createdAt){_id, title}`
    );
  }
}

export async function getCompanyPage(
  pageId?: string
): Promise<PageContentType[]> {
  if (pageId) {
    return client.fetch(
      groq`*[_type == "companyPageSchema" && _id == "${pageId}" ]{_id, pageBuilder[]{_key, _type, text, asset->{_id, url}, bulletPoint[], url, videoLabel}}`
    );
  } else {
    return client.fetch(
      groq`*[_type == "companyPageSchema"]| order(_createdAt){_id, title}`
    );
  }
}
