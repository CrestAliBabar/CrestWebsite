import Image from 'next/image'
import CtaImage from '@/public/images/cta-image.png'

export default function CtaBox() {  
  return (
    <div data-aos="fade-up">
      <div className="relative bg-slate-900 rounded-sm py-10 px-8 md:p-10 md:mt-24">

        {/* Background illustration */}
        <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block" aria-hidden="true">
          <Image src={CtaImage} width={451} height={337} alt="Free trial" />
        </div>

        <div className="relative flex flex-col lg:flex-row justify-between items-center">

          {/* CTA content */}
          <div className="text-center lg:text-left lg:max-w-xl">
            <h3 className="h3 font-playfair-display text-slate-100 mb-8">Say goodbye to long queues, big updates, and <span className="text-emerald-500">confusion</span>.</h3>
            <div className="mb-3">
              <a className="btn text-white bg-blue-600 hover:bg-blue-700 group" href="#0">
                Start free trial <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
              </a>
            </div>
            <div className="text-sm italic text-slate-500">No credit card required. Cancel anytime!</div>
          </div>

        </div>

      </div>
    </div>
  )
}