import VideoThumb from '@/public/images/wof-hero.jpg'
import ModalVideo02 from '@/components/modal-video-02'

export default function HeroWol() {  
  return (
    <section className="relative">

      {/* Dark background */}
      <div className="absolute inset-0 bg-slate-900 pointer-events-none -z-10 mb-36 lg:mb-0 lg:h-[48rem] [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)]" aria-hidden="true"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-16">
            <h1 className="h1 font-playfair-display text-slate-100 mb-4">Join 70K+ companies and investors</h1>
            <p className="text-xl text-slate-400">We're proud to have played a part in these amazing journeys.</p>
          </div>

          {/* Hero image */}
          <ModalVideo02
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080} />

        </div>
      </div>
    </section>
  )
}