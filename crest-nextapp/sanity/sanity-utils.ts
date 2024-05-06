import { LayoutType } from "@/types/layoutType";
import { TrainCard, ServiceCard, ConsultingCard } from "@/types/CardType";
import { PageInfoType } from "@/types/PageInfoType";
import { createClient } from "@sanity/client";
import { groq } from "next-sanity";
import { PageContentType } from "@/types/PageContentType";

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
      // console.log("Fetched data:", data[0]);
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


// export async function getNavPageInformation():Promise<any[]> {
//   const query = `
//   *[_type == "PageInfomation"]{
//     _id,
//     "tabName": tabName->{
//       _id,
//       title,
//       slug
//     },
//     heading,
//     description,
//     "associatedCards": associatedCards[]->{
//       _id,
//       title,
//       description,
//       link,
//       "imgUrl": imgUrl.asset->url // Assuming 'imgUrl' is a field in 'Card' that references an image asset
//     }
//   }
  
//   `;

//   try {
//     const results = await client.fetch(query);
//     return results;  // Return the fetched data
//   } catch (error) {
//     console.error('Error fetching page information:', error);
//     throw error;  // Rethrow or handle error as needed
//   }
// }

export async function getNavPageInformation(slug: string): Promise<any[]> {
  // 使用参数化查询以防止注入并优化查询
  const query = `
    *[_type == "PageInfomation" && tabName->slug.current == $slug]{
      _id,
      "tabName": tabName->{
        _id,
        title,
        slug
      },
      heading,
      description,
      "associatedCards": associatedCards[]->{
        _id,
        title,
        description,
        link,
        "imgUrl": imgUrl.asset->url,
        "altText": imgUrl.alt,
      }
    }
  `;

  try {
    // 使用{slug}传递参数到查询中
    const results = await client.fetch(query, { slug });
    return results; // 返回过滤后的数据
  } catch (error) {
    console.error("Error fetching page information based on slug:", error);
    throw error; // 重新抛出错误或按需要处理错误
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