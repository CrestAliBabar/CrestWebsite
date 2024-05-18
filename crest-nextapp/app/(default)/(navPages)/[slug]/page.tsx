import React from "react";
import {getNavigationPageContent} from "@/sanity/sanity-utils";
import ContentComponent from "@/app/component/contentComponent/contentComponent";


interface PageContentProps {
  params: {
    slug: string;
  };
}

export default async function PageContentForNavPage({
  params: { slug },
}: PageContentProps) {
  const pageContent = await getNavigationPageContent(slug);
  const pageBuilder = pageContent[0].navigationPages[0].pageBuilder;
  // console.log(pageContent)
  // console.log("pageBuilder: ", pageBuilder)
  return <ContentComponent Contents={pageBuilder} />;
}