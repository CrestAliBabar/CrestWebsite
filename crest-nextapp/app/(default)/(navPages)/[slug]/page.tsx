import { getNavigationTitle } from "@/sanity/sanity-utils";
import { notFound } from "next/navigation";
import React from "react";

interface CardsProps {
  params: {
    slug: string;
  };
}

export default async function Cards({ params: { slug } }: CardsProps) {
  const titles = await getNavigationTitle();
  const isFound = titles.find((title) => title.slug.current === slug);
  if (!isFound) {
    notFound();
  }
  return <>{slug}</>;
}
