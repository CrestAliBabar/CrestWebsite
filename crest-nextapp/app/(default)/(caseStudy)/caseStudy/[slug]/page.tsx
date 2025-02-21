/* eslint-disable @next/next/no-img-element */
import React from "react";
import { notFound } from "next/navigation";
import { getCaseStudyBySlug } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type CaseStudyPageProps = {
  params: {
    slug: string;
  };
};

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = params;
  const caseStudy = await getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return notFound();
  }

  // Format published date (if available)
  const publishedDate = caseStudy.publishedAt
    ? new Date(caseStudy.publishedAt).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      })
    : null;

  return (
    <article className="min-h-screen bg-[#F1F9FA]">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] bg-[#304E5A]">
        {/* Background Image */}
        {caseStudy.image && (
          <div className="absolute inset-0">
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              className="w-full h-full object-cover opacity-40"
            />
          </div>
        )}
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#304E5A] to-transparent" />
        {/* Hero Content */}
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-16">
          <div className="space-y-4">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl">
              {caseStudy.title}
            </h1>
            {/* Published date (optional) */}
            {publishedDate && (
              <span className="text-gray-300">Published {publishedDate}</span>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Description */}
          {caseStudy.description && (
            <p className="text-lg text-gray-700 leading-relaxed">
              {caseStudy.description}
            </p>
          )}

          {/* Body (Portable Text) */}
          {caseStudy.body && (
            <div className="prose max-w-none">
              <PortableText value={caseStudy.body} />
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
