import React from "react";
import { notFound } from "next/navigation";
import { getBlogBySlug } from "@/sanity/sanity-utils";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

type BlogPageProps = {
  params: {
    slug: string;
  };
};

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return notFound();
  }

  return (
    <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        {/* Header Section */}
        <header className="space-y-8 mb-12">
          <h1 className="text-5xl font-bold text-gray-900 text-center leading-tight tracking-tight">
            {blog.title}
          </h1>

          {blog.publishedAt && (
            <div className="flex justify-center items-center gap-2 text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <time className="text-sm">
                {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </time>
            </div>
          )}
        </header>

        {/* Featured Image */}
        {blog.image && (
          <div className="relative mb-12 group flex justify-center">
            <div className="relative overflow-hidden rounded-2xl shadow-xl max-w-2xl">
              <Image
                src={blog.image}
                alt={blog.title}
                priority
                className="transition-transform duration-700 group-hover:scale-105"
                width={800}
                height={600}
                style={{ maxHeight: '60vh' }}
                sizes="(max-width: 800px) 100vw, 800px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        )}

        {/* Description Section */}
        {blog.description && (
          <div className="mb-12">
            <p className="text-xl text-gray-700 leading-relaxed border-l-4 border-primary-500 pl-6 italic">
              {blog.description}
            </p>
          </div>
        )}

        {/* Main Content */}
        {blog.body && (
          <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 
                         prose-p:text-gray-700 prose-p:leading-relaxed
                         prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline
                         prose-img:rounded-xl prose-img:shadow-lg
                         prose-blockquote:border-l-primary-500 prose-blockquote:bg-gray-50 prose-blockquote:py-2
                         prose-code:text-primary-700 prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded">
            <PortableText value={blog.body} />
          </div>
        )}
      </div>
    </article>
  );
}