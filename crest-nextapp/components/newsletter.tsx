export default function Newsletter() {  
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20 border-b border-slate-200">

          {/* CTA box */}
          <div className="max-w-3xl mx-auto bg-slate-900 rounded-sm p-8">

            <div className="flex flex-col justify-between items-center">

              {/* CTA content */}
              <div className="text-center">
                <div className="inline-flex mb-3">
                  <svg className="w-12 h-12" viewBox="0 0 48 48">
                    <circle className="fill-blue-600" cx="24" cy="24" r="24" />
                    <path className="fill-blue-100" d="m12.397 22.797 2.577 1.952 9-4-6.977 5.499v6.749a1 1 0 0 0 1.765.643l3.13-3.72 6.505 4.877a1 1 0 0 0 1.58-.6l4-20a1 1 0 0 0-1.351-1.125l-20 8a1 1 0 0 0-.23 1.725Z" fill="#DBEAFE" />
                    <path className="fill-blue-600" d="m33.917 14.499-3.94 19.698a1 1 0 0 1-1.58.6l-6.505-4.876 12.025-15.422Z" fillOpacity=".5" fill="#2174EA" />
                  </svg>
                </div>
                <h3 className="h4 font-playfair-display text-slate-100 mb-2">Sign up for Tidy Digest</h3>
                <p className="text-slate-400 mb-6">Stay in the loop with the Tidy industry - get the latest news, stories and tools.</p>
                {/* CTA form */}
                <form className="w-full">
                  <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md">
                    <input type="email" className="form-input w-full appearance-none bg-slate-800 border border-slate-700 focus:border-slate-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-slate-500" placeholder="Your email" aria-label="Your email…" />
                    <button className="btn text-white bg-blue-600 hover:bg-blue-700">Subscribe</button>
                  </div>
                  {/* Success message */}
                  {/* <p class="text-xs text-slate-500 mt-3 italic">Thanks for subscribing!</p> */}
                  <p className="text-xs text-slate-500 mt-3 italic">No spam. You can unsubscribe at any time.</p>
                </form>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}