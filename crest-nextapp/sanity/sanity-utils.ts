import { LayoutType } from '@/types/layoutType';
import { PageInfoType } from '@/types/PageInfoType';
import { createClient } from '@sanity/client';
import { groq } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: '7xkjaifb',

  dataset: 'production',

  apiVersion: '2024-03-07',
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

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
    footerSlogan
  }`,
    {},
    { cache: 'no-store' }
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
      { cache: 'no-store' }
    );
  } else {
    return client.fetch(
      groq`*[_type == "navigationTitleSchema" && isDisplayed == true] | order(_createdAt){_id, slug, title, pages[isDisplayed == true]}`,
      {},
      { cache: 'no-store' }
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
    { cache: 'no-store' }
  );
}

export async function getPageDetailForBotPress(slug?: string): Promise<any[]> {
  return client.fetch(
    groq`*[ _type == "navigationTitleSchema" && slug.current == "${slug}"] {
      pages[]{_type,_key,text}
    }`,
    {},
    { cache: 'no-store' }
  );
}

export async function getNavigationPageContent(slug: string): Promise<any[]> {
  return client.fetch(
    groq`*[_type == "navigationTitleSchema" && slug.current == "${slug}"]`,
    {},
    { cache: 'no-store' }
  );
}

export async function getFooter(
  slug?: string,
  pageId?: string
): Promise<any[]> {
  if (pageId) {
    return client.fetch(
      groq`*[_type == "footerSchema"]{_id, _type, footerTextSections[slug.current=="${slug}"]{pages[_key=="${pageId}"]}}`,
      {},
      { cache: 'no-store' }
    );
  } else {
    return client.fetch(
      groq`*[_type == "footerSchema"]`,
      {},
      { cache: 'no-store' }
    );
  }
}
