import { allPosts } from 'contentlayer/generated'
import Link from 'next/link'
import Image from 'next/image'
import PostDate from '@/components/post-date'
import PostItem from '@/components/post-item'
import CtaBox from '@/components/cta-box'

export const metadata = {
  title: 'Blog - Tidy',
  description: 'Page description',
}

import Hero from '@/components/hero-blog'
import Tags from '@/components/blog-tags'

export default function Blog() {

  // Sort posts by date
  allPosts.sort((a, b) => {
    return (new Date(a.publishedAt) > new Date(b.publishedAt)) ? -1 : 1
  })
  
  // Slicing content for demo purposes
  const featuredPost = allPosts[0]
  const latestPosts = allPosts.slice(1,4)
  const popularPosts = allPosts.slice(4, 7)
  const productPosts = allPosts.slice(7, 10)

  return (
    <>
      <Hero />
      <Tags />

      {/* Featured article */}
      <section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-8 md:py-16">

            <article className="max-w-sm mx-auto space-y-5 md:max-w-none md:flex md:items-center md:space-y-0 md:space-x-8 lg:space-x-16">
              {/* Image */}
              {featuredPost.image &&
                <Link className="relative block group overflow-hidden md:w-1/2" href={`/blog/${featuredPost.slug}`} data-aos="fade-down">
                  <Image className="w-full aspect-[16/9] md:aspect-[27/17] object-cover group-hover:scale-105 transition duration-700 ease-out" src={featuredPost.image} width={540} height={340} priority alt={featuredPost.title} />
                  <div className="absolute top-6 right-6">
                    <svg className="w-8 h-8" viewBox="0 0 32 32">
                      <circle className="fill-slate-900" fillOpacity=".48" cx="16" cy="16" r="16" />
                      <path className="fill-yellow-500" d="M21.954 14.29A.5.5 0 0 0 21.5 14h-5.36l.845-3.38a.5.5 0 0 0-.864-.446l-6 7A.5.5 0 0 0 10.5 18h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                    </svg>
                  </div>
                </Link>
              }
              {/* Content */}
              <div className="md:w-1/2" data-aos="fade-up">
                <header>
                  <h2 className="h4 md:text-4xl lg:text-5xl font-playfair-display mb-3">
                    <Link className="text-slate-800 hover:underline hover:decoration-blue-100" href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                  </h2>
                </header>
                <p className="text-lg text-slate-500 grow">{featuredPost.summary}</p>
                <footer className="flex items-center mt-4">
                  <a href="#0">
                    <Image className="rounded-full shrink-0 mr-3" src={featuredPost.authorImg} width={32} height={32} alt={featuredPost.author} />
                  </a>
                  <div>
                    <a className="font-medium text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out" href="#0">{featuredPost.author}</a>
                    <span className="text-slate-300"> · </span>
                    <span className="text-slate-500"><PostDate dateString={featuredPost.publishedAt} /></span>
                  </div>
                </footer>
              </div>
            </article>

          </div>

        </div>
      </section>

      {/* All articles */}
      <section className="bg-slate-50">

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-8 md:py-16 space-y-16">

            {/* Latest */}
            <div>
              <h2 className="h3 font-playfair-display text-center md:text-left mb-8">Latest</h2>

              {/* Articles container */}
              <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
                {latestPosts.map((post, postIndex) => (
                  <PostItem key={postIndex} {...post} />
                ))}
              </div>
            </div>

            {/* Popular */}
            <div>
              <h2 className="h3 font-playfair-display text-center md:text-left mb-8">Popular</h2>

              {/* Articles container */}
              <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
                {popularPosts.map((post, postIndex) => (
                  <PostItem key={postIndex} {...post} />
                ))}
              </div>
            </div>

            <CtaBox />

            {/* Product & News */}
            <div>
              <h2 className="h3 font-playfair-display text-center md:text-left mb-8">Product &amp; News</h2>

              {/* Articles container */}
              <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
                {productPosts.map((post, postIndex) => (
                  <PostItem key={postIndex} {...post} />
                ))}
              </div>
            </div>

            {/* See All Articles */}
            <div className="text-center">
              <button className="btn text-white bg-blue-600 hover:bg-blue-700 group">
                See All Articles <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
              </button>
            </div>

          </div>

        </div>
      </section>      
    </>
  )
}
