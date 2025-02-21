"use client"; // 1. Make this a Client Component

import React, { useEffect, useState } from "react";
import { getAllBlogs } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

// =========== Types ===========
type BlogDoc = {
  _id: string;
  title: string;
  slug: string;
  image?: string;
  description?: string;
  publishedAt?: string;
  // ...any other fields you need
};

type BlogRef = {
  _ref: string;
};

type BlogListingStyle1Props = {
  BlogListingStyle1Content: {
    title?: string;
    backGroundColor?: {
      value?: string;
    };
    // References to the blog docs
    blogs?: BlogRef[];
  };
};

// =========== Component ===========

export default function BlogListingStyle1({
  BlogListingStyle1Content,
}: BlogListingStyle1Props) {
  const { title, backGroundColor, blogs } = BlogListingStyle1Content || {};

  // 2. Local state for all fetched blogs & references
  const [allBlogs, setAllBlogs] = useState<BlogDoc[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  // 3. Fetch all blog docs on the client side
  useEffect(() => {
    async function fetchBlogs() {
      const fetchedBlogs = await getAllBlogs();
      setAllBlogs(fetchedBlogs);
    }
    fetchBlogs();
  }, []);

  // 4. Match references from props to actual blog documents
  const matchedBlogs = (blogs || [])
    .map((ref) => allBlogs.find((doc) => doc._id === ref._ref))
    .filter(Boolean) as BlogDoc[]; // Type assertion to BlogDoc[]

  // 5. Filter matched blogs by search query
  const filteredBlogs = matchedBlogs.filter((blog) => {
    const query = searchQuery.toLowerCase();
    // Filter by title or description
    return (
      blog.title.toLowerCase().includes(query) ||
      (blog.description && blog.description.toLowerCase().includes(query))
    );
  });

  // 6. Render UI
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: backGroundColor?.value || "#fff" }}
    >
      <div className="container mx-auto px-4 py-12">
        {/* Section Title */}
        {title && (
          <h1 className="text-4xl font-bold text-primary-900 text-center mb-6 tracking-tight">
            {title}
          </h1>
        )}

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 rounded-full border-2 border-primary-100 
        focus:outline-none focus:border-primary-300 focus:ring-4 focus:ring-primary-100
        transition-all duration-300 pr-12 text-gray-700 placeholder-gray-400
        bg-white/80 backdrop-blur-sm shadow-sm"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-400">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Optional: Search Results Count */}
          <div className="text-center mt-4 text-sm text-black">
            {filteredBlogs.length === matchedBlogs.length ? (
              <span>Showing all {matchedBlogs.length} blogs</span>
            ) : (
              <span>
                Found {filteredBlogs.length} of {matchedBlogs.length} blogs
              </span>
            )}
          </div>
        </div>
        {/* Blogs Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredBlogs.map((blog) => (
            <Card
              key={blog._id}
              className="group overflow-hidden rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-primary-200 bg-[#dceef1]"
            >
              <CardHeader className="p-0">
                {blog.image && (
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )}
              </CardHeader>

              <CardContent className="p-6 space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                  {blog.title}
                </h2>
                {blog.description && (
                  <p className="text-gray-600 line-clamp-3 text-sm leading-relaxed">
                    {blog.description}
                  </p>
                )}
              </CardContent>

              <CardFooter className="px-6 pb-6 pt-0 flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  {blog.publishedAt
                    ? new Date(blog.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })
                    : ""}
                </span>

                <Link href={`/blog/${blog.slug}`}>
                  <button className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-primary-600 bg-primary-50 hover:bg-primary-100 transition-colors duration-300">
                    Read More
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
