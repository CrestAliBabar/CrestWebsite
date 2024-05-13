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

export async function getPageInfo(
  selectedTabName: string
): Promise<PageInfoType[]> {
  const query = groq`*[_type == "PageInfo" && tabName == $selectedTabName]{heading, description, tabName}`;
  const params = { selectedTabName };
  return client.fetch(query, params);
}

export async function getLayoutSettings(): Promise<LayoutType[]> {
  return client.fetch(
    groq`*[_type == "layout-setting"] {
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

  }`,
    {},
    { cache: "no-store" }
  );
}

export async function getNavigationTitle(
  slug?: string,
  pageId?: string
): Promise<any[]> {
  if (pageId) {
    return client.fetch(
      groq`*[_type == "navigationTitleSchema" && slug.current == "${slug}"]{_id, slug, title, pages[_key=="${pageId}"]}`,
      {},
      { cache: "no-store" }
    );
  } else {
    return client.fetch(
      groq`*[_type == "navigationTitleSchema" && isDisplayed == true] | order(_createdAt){_id, slug, title, pages[isDisplayed == true]}`,
      {},
      { cache: "no-store" }
    );
  }
}

export async function getHomePageContent(): Promise<any[]> {
  return client.fetch(
    groq`*[_type == "page"] {
    _id,
    title,
    _type,
    pageBuilder[]
  }`,
    {},
    { cache: "no-store" }
  );
}

export async function getPageDetailForBotPress(slug?: string): Promise<any[]> {
  return client.fetch(
    groq`*[ _type == "navigationTitleSchema" && slug.current == "${slug}"] {
      pages[]{_type,_key,text}
    }`,
    {},
    { cache: "no-store" }
  );
}
