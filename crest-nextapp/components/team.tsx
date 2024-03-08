import Image from 'next/image'
import TeamImage01 from '@/public/images/team-01.jpg'
import TeamImage02 from '@/public/images/team-02.jpg'
import TeamImage03 from '@/public/images/team-03.jpg'

export default function Team() {  
  return (
    <section className="bg-slate-100">

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-playfair-display text-slate-800">We are fully distributed, which means you can join us whenever you want.</h2>
          </div>

        </div>
      </div>

      {/* Images container */}
      <div className="-ml-28 -mr-28 mb-8 md:mb-16">
        <div className="max-w-[1652px] mx-auto flex items-center space-x-2 md:space-x-4">
          <div className="relative w-1/3" data-aos="fade-right">
            <Image className="aspect-[3/2] object-cover" src={TeamImage01} width={540} height={360} alt="Team 01" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-100" aria-hidden="true"></div>
          </div>
          <div className="relative w-1/3" data-aos="fade">
            <Image className="aspect-[3/2] object-cover" src={TeamImage02} width={540} height={360} alt="Team 02" />
          </div>
          <div className="relative w-1/3" data-aos="fade-left">
            <Image className="aspect-[3/2] object-cover" src={TeamImage03} width={540} height={360} alt="Team 03" />
            <div className="absolute inset-0 bg-gradient-to-l from-slate-100" aria-hidden="true"></div>
          </div>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Line */}
          <div className="hidden md:block absolute top-0 left-1/2 -ml-px -mt-4 w-0.5 h-12 bg-slate-300" aria-hidden="true"></div>

          {/* Locations */}
          <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-16 items-start mb-12 md:mb-20">

            {/* 1st Location */}
            <div className="h-full flex flex-col items-center text-center" data-aos="fade-up">
              <div className="inline-flex w-[62px] h-[62px] mb-4">
                <svg className="fill-blue-600" width="62" height="61" viewBox="0 0 62 61">
                  <path d="M9.622 25H3v-2.724l.688-.226c.06-.02.193-.069.39-.15.337-.14.717-.318 1.128-.536a16.292 16.292 0 0 0 3.471-2.472c2.018-1.88 3.537-4.246 4.36-7.164l.206-.728h8.86a7.33 7.33 0 0 1 .664-1.854c.736-1.462 1.96-2.976 3.535-4.512a36.714 36.714 0 0 1 2.827-2.474 35.764 35.764 0 0 1 1.298-.98L31 .78l.573.4a35.764 35.764 0 0 1 1.297.979 36.714 36.714 0 0 1 2.828 2.475c1.576 1.536 2.799 3.05 3.535 4.512A7.33 7.33 0 0 1 39.898 11h8.859l.205.728c.824 2.918 2.343 5.284 4.36 7.164a16.292 16.292 0 0 0 3.472 2.472c.41.218.79.395 1.129.536.196.081.33.13.39.15l.687.226V25h-6.622a15.245 15.245 0 0 0 3.945 5.892 16.292 16.292 0 0 0 3.47 2.472c.412.218.792.395 1.13.536.196.081.33.13.39.15l.687.226V37h-6v24H6V37H0v-2.724l.688-.226c.06-.02.193-.069.39-.15.337-.14.717-.318 1.128-.536a16.292 16.292 0 0 0 3.471-2.472A15.245 15.245 0 0 0 9.622 25Zm2.119 0a17.259 17.259 0 0 1-4.7 7.355A18.289 18.289 0 0 1 3.385 35h55.228a18.289 18.289 0 0 1-3.654-2.645A17.259 17.259 0 0 1 50.26 25H11.74Zm12.422-14h13.674a5.998 5.998 0 0 0-.39-.954c-.62-1.23-1.714-2.585-3.145-3.98A34.747 34.747 0 0 0 31 3.241a34.747 34.747 0 0 0-3.302 2.825c-1.431 1.395-2.526 2.75-3.146 3.98a5.998 5.998 0 0 0-.39.954Zm23.096 2H14.741a17.259 17.259 0 0 1-4.7 7.355A18.289 18.289 0 0 1 6.385 23h49.228a18.289 18.289 0 0 1-3.654-2.645A17.259 17.259 0 0 1 47.26 13ZM44 37H18v22h7v-8.48l6-4.8 6 4.8V59h7V37Zm2 0v22h8V37h-8ZM8 37v22h8V37H8Zm27 22v-7.52l-4-3.2-4 3.2V59h8Zm22-35.316.223.093.197-.197L57 23v.684Zm-52.223.093L5 23.684V23l-.42.58.197.197Z" />
                </svg>
              </div>
              <h4 className="h4 font-playfair-display text-slate-800 mb-2">Shangai</h4>
              <div className="grow text-slate-500 mb-2">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </div>
              <div className="font-sm font-medium text-slate-800">14 open positions</div>
            </div>

            {/* 2nd Location */}
            <div className="h-full flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay={100}>
              <div className="inline-flex w-[62px] h-[62px] mb-4">
                <svg className="fill-blue-600" width="60" height="61" viewBox="0 0 60 61">
                  <path d="M10 59V23h26v36h22V12.705L32 3.419V19h-2V.581l30 10.714V61H0V33h6v2H2v24h8Zm8-13v-2h10v2H18Zm0-6v-2h10v2H18Zm0 12v-2h10v2H18Zm0-18v-2h10v2H18Zm16 25V25H12v34h22Zm8-7h-2V13h2v39Zm6 0h-2V15h2v37Zm6 0h-2V17h2v35Z" />
                </svg>
              </div>
              <h4 className="h4 font-playfair-display text-slate-800 mb-2">London</h4>
              <div className="grow text-slate-500 mb-2">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </div>
              <div className="font-sm font-medium text-slate-800">7 open positions</div>
            </div>

            {/* 3rd Location */}
            <div className="h-full flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay={200}>
              <div className="inline-flex w-[62px] h-[62px] mb-4">
                <svg className="fill-blue-600" width="62" height="62" viewBox="0 0 62 62">
                  <path d="M19 60h7V50h10v10h7V38H19v22Zm-2 0V38h-7v22h7Zm-7-24h42v-6H10v6Zm42 2h-7v22h7V38ZM30 12.49V0h2v2h8v6h-8v4.49l22 16V46h8v16H0V46h8V28.49l22-16ZM8 60V48H2v12h6Zm46-12v12h6V48h-6ZM28 60h6v-8h-6v8ZM12.075 28h37.85L31 14.236 12.075 28ZM32 4v2h6V4h-6Zm-6 41v-2h10v2H26Z" />
                </svg>
              </div>
              <h4 className="h4 font-playfair-display text-slate-800 mb-2">Washington D.C</h4>
              <div className="grow text-slate-500 mb-2">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </div>
              <div className="font-sm font-medium text-slate-800">24 open positions</div>
            </div>
          </div>

          {/* See All Customers */}
          <div className="text-center">
            <button className="btn text-white bg-blue-600 hover:bg-blue-700 group">
              See Open Positions <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}