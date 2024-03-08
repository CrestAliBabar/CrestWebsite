export default function HeroBlog() {  
  return (
    <section className="relative">

      {/* Dark background */}
      <div className="absolute inset-0 bg-slate-900 pointer-events-none -z-10" aria-hidden="true"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1 font-playfair-display text-slate-100 mb-4">Several People Are Typing</h1>
            <p className="text-xl text-slate-400 mb-8">Lessons designed to help you kick start and grow your business and turn your idea into a thriving empire.</p>
            {/* Subscribe form */}
            <form>
              <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md">
                <input type="email" className="form-input w-full bg-slate-800 border border-slate-700 focus:border-slate-600 text-white placeholder-slate-500 mb-2 sm:mb-0 sm:mr-2" placeholder="Your email" aria-label="Your email…" />
                <button className="btn text-white bg-blue-600 hover:bg-blue-700">Subscribe</button>
              </div>
              {/* Success message */}
              {/* <p class="text-xs text-slate-500 mt-3 italic">Thanks for subscribing!</p> */}
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}