import React from "react";

interface CardsProps {
  params: {
    slug: string;
  };
}

export default async function Cards({ params: { slug } }: CardsProps) {
  return <>{slug}</>;
}
