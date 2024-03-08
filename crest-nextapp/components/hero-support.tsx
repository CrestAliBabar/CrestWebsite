export default function HeroSupport() {  
  return (
    <section className="relative">

      {/* Dark background */}
      <div className="absolute inset-0 bg-slate-900 pointer-events-none -z-10" aria-hidden="true"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1 font-playfair-display text-slate-100 mb-8">Advice and answers from the Tidy Team</h1>
            {/* Search form */}
            <form className="relative flex items-center mt-8">
              <input type="search" className="form-input w-full bg-slate-800 border border-slate-700 focus:border-slate-600 text-white placeholder-slate-500 pl-12" placeholder="Search for articles…" aria-label="Search for articles" />
              <button type="submit" className="absolute inset-0 right-auto" aria-label="Search">
                <svg className="w-4 h-4 shrink-0 ml-4 mr-3" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path className="fill-slate-400" d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm8.707 12.293a.999.999 0 11-1.414 1.414L11.9 13.314a8.019 8.019 0 001.414-1.414l2.393 2.393z" />
                </svg>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}