export default function Stats() {  
  return (
    <section className="-mt-16">

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">

          <div className="bg-white py-3 sm:py-6 shadow-xl">
            <ul className="flex">
              <li className="relative w-1/3 px-1 text-center after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:translate-x-px after:w-0.5 after:h-16 after:bg-slate-300 after:hidden sm:after:block last:after:hidden">
                <div className="text-4xl md:text-5xl font-playfair-display font-bold text-blue-600 mb-2">79%</div>
                <div className="text-xs sm:text-sm md:text-base text-slate-500 font-medium">Incremental Uplift</div>
              </li>
              <li className="relative w-1/3 px-1 text-center after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:translate-x-px after:w-0.5 after:h-16 after:bg-slate-300 after:hidden sm:after:block last:after:hidden">
                <div className="text-4xl md:text-5xl font-playfair-display font-bold text-blue-600 mb-2">-32%</div>
                <div className="text-xs sm:text-sm md:text-base text-slate-500 font-medium">Cost of Acquisition</div>
              </li>
              <li className="relative w-1/3 px-1 text-center after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:translate-x-px after:w-0.5 after:h-16 after:bg-slate-300 after:hidden sm:after:block last:after:hidden">
                <div className="text-4xl md:text-5xl font-playfair-display font-bold text-blue-600 mb-2">128%</div>
                <div className="text-xs sm:text-sm md:text-base text-slate-500 font-medium">ROI Increase</div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}