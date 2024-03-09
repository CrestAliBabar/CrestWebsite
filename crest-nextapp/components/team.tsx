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
          {/* <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-16 items-start mb-12 md:mb-20 "> */}
          <div className="max-w-sm mx-auto md:max-w-none items-start mb-12 md:mb-20 ">
            {/* 1nd Location */}
            <div className="h-full flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay={100}>
              <div className="inline-flex w-[62px] h-[62px] mb-4">
                <svg className="fill-blue-600" width="60" height="61" viewBox="0 0 60 61">
                  <path d="M10 59V23h26v36h22V12.705L32 3.419V19h-2V.581l30 10.714V61H0V33h6v2H2v24h8Zm8-13v-2h10v2H18Zm0-6v-2h10v2H18Zm0 12v-2h10v2H18Zm0-18v-2h10v2H18Zm16 25V25H12v34h22Zm8-7h-2V13h2v39Zm6 0h-2V15h2v37Zm6 0h-2V17h2v35Z" />
                </svg>
              </div>
              <h4 className="h4 font-playfair-display text-slate-800 mb-2">Adelaide</h4>
              <div className="grow text-slate-500 mb-2">
              "Situated in the heart of Adelaide, our office is a vibrant hub of innovation and collaboration. 
              </div>
              <div className="font-sm font-medium text-slate-800">2 open positions</div>
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