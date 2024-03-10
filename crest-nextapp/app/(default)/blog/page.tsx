import Link from "next/link";
import Image from "next/image";
import PostDate from "@/components/post-date";
import PostItem from "@/components/post-item";
import CtaBox from "@/components/cta-box";

export const metadata = {
  title: "Blog - Tidy",
  description: "Page description",
};

import Hero from "@/components/hero-blog";
import Tags from "@/components/blog-tags";

export default function Blog() {
  return (
    <>
      <Hero />
      <Tags />

      <section className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-8 md:py-16 space-y-16">
            {/* Latest */}
            <div>
              <h2 className="h3 font-playfair-display text-center md:text-left mb-8">
                Latest
              </h2>

              {/* Articles container */}
              <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
                {}
              </div>
            </div>

            {/* Popular */}
            <div>
              <h2 className="h3 font-playfair-display text-center md:text-left mb-8">
                Popular
              </h2>

              {/* Articles container */}
              <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
                {}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
