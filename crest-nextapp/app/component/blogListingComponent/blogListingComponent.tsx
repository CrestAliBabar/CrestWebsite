/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import BlogListingStyle1 from "./blogListingStyle1";
type BlogListingComponentProps = {
  BlogListingContent: any[];
};

const BlogListingComponent : React.FC<BlogListingComponentProps> = ({ BlogListingContent }) =>  {
  return (
    <>
      {BlogListingContent.map((content: any, index: number) => {
        switch (content._type) {
          case "blog_Listing_Style1":
            return <BlogListingStyle1 BlogListingStyle1Content = {content}  key={index} />;
          default:
            return null;
        }
      })}
    </>
  );
};

export default BlogListingComponent;
