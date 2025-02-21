"use client";

import React, { useState, useEffect } from "react";
import { getAllCaseStudies } from "@/sanity/sanity-utils"; // Your new function to fetch all case studies
import Image from "next/image";

// 1. Single case study document type
type CaseStudyDoc = {
  _id: string;
  title: string;
  description: string;
  image?: string;
  slug: string;         // If you have a slug for detail pages
  publishedAt?: string; // Optional date field
  // ...any other fields from your schema
};

// 2. Reference type
type CaseStudyRef = {
  _ref: string;
};

// 3. Component's props: references, background color, etc.
type CaseStudyListingStyle1Props = {
  caseStudyListingStyle1Content: {
    title?: string;
    backGroundColor?: {
      value?: string;
    };
    caseStudies?: CaseStudyRef[];
  };
};

// 4. Main component
export default function CaseStudyListingStyle1({
  caseStudyListingStyle1Content,
}: CaseStudyListingStyle1Props) {
  // Destructure your incoming props
  const { title, backGroundColor, caseStudies } =
    caseStudyListingStyle1Content || {};

  // ================ Local States ================
  const [allCaseStudies, setAllCaseStudies] = useState<CaseStudyDoc[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // ================ Fetch Data ================
  useEffect(() => {
    async function fetchStudies() {
      const fetchedStudies = await getAllCaseStudies();
      setAllCaseStudies(fetchedStudies);
    }
    fetchStudies();
  }, []);

  // ================ Match References ================
  // Convert references in props to actual documents from `allCaseStudies`.
  const matchedCaseStudies = (caseStudies || [])
    .map((ref) => allCaseStudies.find((doc) => doc._id === ref._ref))
    .filter(Boolean) as CaseStudyDoc[]; // Filter out not-found references

  // ================ Search Filter ================
  const filteredCaseStudies = matchedCaseStudies.filter((study) => {
    const query = searchQuery.toLowerCase();
    return (
      study.title.toLowerCase().includes(query) ||
      (study.description && study.description.toLowerCase().includes(query))
    );
  });

  // ================ Pagination Logic ================
  const totalPages = Math.ceil(filteredCaseStudies.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCaseStudies.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  function handlePageChange(pageNumber: number) {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ================ Render ================
  return (
    <div
      className="w-full min-h-screen"
      style={{ backgroundColor: backGroundColor?.value || "#F8FAFC" }}
    >
      <div className="container mx-auto px-4 py-12">
        {/* Heading */}
        {title ? (
          <h1 className="text-4xl md:text-5xl font-bold text-[#4390A3] mb-8">
            {title}
          </h1>
        ) : (
          <h1 className="text-4xl md:text-5xl font-bold text-[#4390A3] mb-8">
            Case studies
          </h1>
        )}

        {/* Search Bar */}
        <div className="relative mb-12">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
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
          <input
            type="search"
            className="w-full md:w-96 p-4 pl-12 text-sm text-gray-900 rounded-lg border border-gray-200 focus:border-[#4390A3] focus:ring-2 focus:ring-[#4390A3]/20 outline-none transition-all duration-200"
            placeholder="Search case studies..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1); // Reset to first page when searching
            }}
          />
        </div>

        {/* No Results Found */}
        {filteredCaseStudies.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl text-gray-600">
              No case studies found matching your search.
            </h3>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-4 text-[#4390A3] hover:text-[#377D83] font-medium"
            >
              Clear search
            </button>
          </div>
        ) : (
          // If we have results, show the list (with the left-right flip for each row)
          <div className="space-y-16">
            {currentItems.map((study, index) => (
              <div
                key={study._id}
                className={`flex flex-col gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center transition-all duration-300 ease-in-out`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2">
  <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
    <Image
      src={study.image || "/placeholder.svg"}
      alt={study.title}
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      className="object-cover hover:scale-105 transition-transform duration-500"
      priority
    />
  </div>
</div>

                {/* Text */}
                <div className="w-full md:w-1/2 md:px-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1f2937] mb-4">
                    {study.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {study.description}
                  </p>
                  {/* If you have a slug page for each case study:
                      e.g. /case-studies/[slug], link accordingly. */}
                  <a
                    href={`/caseStudy/${study.slug}`}
                    className="inline-flex items-center text-[#f97316] hover:text-[#ea580c] font-semibold transition-colors"
                  >
                    READ THE CASE STUDY
                    <svg
                      className="w-4 h-4 ml-2"
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
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {filteredCaseStudies.length > itemsPerPage && (
          <div className="flex justify-center items-center space-x-1 mt-16">
            {/* Previous Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-2 rounded-md transition-colors duration-200 ${
                currentPage === 1
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-gray-600 hover:text-[#4390A3] hover:bg-gray-100"
              }`}
              aria-label="Previous page"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }).map((_, idx) => {
              const pageNumber = idx + 1;
              return (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={`min-w-[40px] h-10 flex items-center justify-center rounded-md text-sm transition-colors duration-200 ${
                    currentPage === pageNumber
                      ? "bg-[#4390A3] text-white font-medium"
                      : "text-gray-600 hover:bg-gray-100 hover:text-[#4390A3]"
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-md transition-colors duration-200 ${
                currentPage === totalPages
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-gray-600 hover:text-[#4390A3] hover:bg-gray-100"
              }`}
              aria-label="Next page"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
