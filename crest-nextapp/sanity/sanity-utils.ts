import { LayoutType } from "@/types/layoutType";
import { TrainCard, ServiceCard, ConsultingCard } from "@/types/CardType";
import { PageInfoType } from "@/types/PageInfoType";
import { createClient } from "@sanity/client";
import { groq } from "next-sanity";

const client = createClient({
  projectId: "7xkjaifb",

  dataset: "production",

  apiVersion: "2024-03-07",
});

export async function getTrainingCard(): Promise<TrainCard[]> {
  return client.fetch(groq`*[_type == "trainCard"]`);
}

export async function getConsultingCard(): Promise<ConsultingCard[]> {
  return client.fetch(groq`*[_type == "consultingCard"]`);
}

export async function getServiceCard(): Promise<ServiceCard[]> {
  return client.fetch(groq`*[_type == "serviceCard"]`);
}

export async function getPageInfo(
  selectedTabName: string
): Promise<PageInfoType[]> {
  const query = groq`*[_type == "PageInfo" && tabName == $selectedTabName]{heading, description, tabName}`;
  const params = { selectedTabName };
  return client.fetch(query, params);
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

export async function getNavigationTitle(
  slug?: string,
  pageId?: string
): Promise<any[]> {
  if (pageId) {
    return client.fetch(
      groq`*[_type == "navigationTitleSchema" && slug.current == "${slug}"]{_id, slug, title, pages[_key=="${pageId}"]}`
    );
  } else {
    return client.fetch(
      groq`*[_type == "navigationTitleSchema" && isDisplayed == true] | order(_createdAt){_id, slug, title, pages[isDisplayed == true]}`
    );
  }
}

export async function getHomePageContent(): Promise<any[]> {
  return client.fetch(groq`*[_type == "page"] {
    _id,
    title,
    _type,
    pageBuilder[]
  }`);
}
