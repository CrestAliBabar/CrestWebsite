export default function FeaturesPricing() {
  return (
    <section className="bg-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left pb-12 md:pb-20">
            <h2 className="h2 font-playfair-display text-slate-800">It's easy to add extra benefits to all of our plans.</h2>
          </div>

          {/* Items */}
          <div className="relative max-w-sm mx-auto grid gap-8 lg:gap-16 md:grid-cols-3 lg:gap-y-20 items-start md:max-w-none">

            {/* 1st item */}
            <div className="relative" data-aos="fade-up">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <defs>
                  <filter x="-50%" y="-35.7%" width="200%" height="200%" filterUnits="objectBoundingBox" id="fbp1-a">
                    <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
                    <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                    <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
                    <feColorMatrix values="0 0 0 0 0.062745098 0 0 0 0 0.11372549 0 0 0 0 0.176470588 0 0 0 0.12 0" in="shadowBlurOuter1" />
                  </filter>
                  <filter x="-50%" y="-35.7%" width="200%" height="200%" filterUnits="objectBoundingBox" id="fbp1-c">
                    <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
                    <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                    <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
                    <feColorMatrix values="0 0 0 0 0.062745098 0 0 0 0 0.11372549 0 0 0 0 0.176470588 0 0 0 0.12 0" in="shadowBlurOuter1" />
                  </filter>
                  <filter x="-25%" y="-17.9%" width="150%" height="150%" filterUnits="objectBoundingBox" id="fbp1-e">
                    <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
                    <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                    <feColorMatrix values="0 0 0 0 0.062745098 0 0 0 0 0.11372549 0 0 0 0 0.176470588 0 0 0 0.12 0" in="shadowBlurOuter1" />
                  </filter>
                  <filter x="-25%" y="-17.9%" width="150%" height="150%" filterUnits="objectBoundingBox" id="fbp1-h">
                    <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
                    <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                    <feColorMatrix values="0 0 0 0 0.062745098 0 0 0 0 0.11372549 0 0 0 0 0.176470588 0 0 0 0.12 0" in="shadowBlurOuter1" />
                  </filter>
                  <path d="M43 28h-2v-1c0-2.206-1.794-4-4-4h-1v-2h1c3.309 0 6 2.691 6 6v1Z" id="fbp1-b" />
                  <path d="M28 43h-1c-3.309 0-6-2.691-6-6v-1h2v1c0 2.206 1.794 4 4 4h1v2Z" id="fbp1-d" />
                  <path d="M28 30a2 2 0 0 1 2-2h4v-5a1 1 0 0 0-1-1h-5.586l-1.707-1.707A1 1 0 0 0 25 20h-4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h7v-4Z" id="fbp1-f" />
                  <path d="M43 32h-5.586l-1.707-1.707A.996.996 0 0 0 35 30h-4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V33a1 1 0 0 0-1-1Z" id="fbp1-i" />
                  <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="fbp1-g">
                    <stop stopColor="#FFF" offset="0%" />
                    <stop stopColor="#DBEAFE" offset="100%" />
                  </linearGradient>
                </defs>
                <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                <use fill="#000" filter="url(#fbp1-a)" xlinkHref="#fbp1-b" />
                <use fillOpacity=".64" fill="#BFDBFE" xlinkHref="#fbp1-b" />
                <use fill="#000" filter="url(#fbp1-c)" xlinkHref="#fbp1-d" />
                <use fillOpacity=".64" fill="#BFDBFE" xlinkHref="#fbp1-d" />
                <use fill="#000" filter="url(#fbp1-e)" xlinkHref="#fbp1-f" />
                <use fill="url(#fbp1-g)" xlinkHref="#fbp1-f" />
                <use fill="#000" filter="url(#fbp1-h)" xlinkHref="#fbp1-i" />
                <use fill="url(#fbp1-g)" xlinkHref="#fbp1-i" />
              </svg>
              <h3 className="h4 font-playfair-display mb-2">Workers' Wallet</h3>
              <p className="text-lg text-slate-500 mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <div className="font-medium text-slate-800">From $6/mo per participant. No setup fee</div>
            </div>

            {/* 2nd item */}
            <div className="relative" data-aos="fade-up" data-aos-delay="100">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <defs>
                  <filter x="-70.7%" y="-50%" width="241.3%" height="240%" filterUnits="objectBoundingBox" id="fbp2-a">
                    <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
                    <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                    <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
                    <feColorMatrix values="0 0 0 0 0.062745098 0 0 0 0 0.11372549 0 0 0 0 0.176470588 0 0 0 0.12 0" in="shadowBlurOuter1" />
                  </filter>
                  <filter x="-70.7%" y="-50%" width="241.3%" height="240%" filterUnits="objectBoundingBox" id="fbp2-c">
                    <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
                    <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                    <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
                    <feColorMatrix values="0 0 0 0 0.062745098 0 0 0 0 0.11372549 0 0 0 0 0.176470588 0 0 0 0.12 0" in="shadowBlurOuter1" />
                  </filter>
                  <filter x="-18.4%" y="-11.9%" width="136.8%" height="133.3%" filterUnits="objectBoundingBox" id="fbp2-e">
                    <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
                    <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                    <feColorMatrix values="0 0 0 0 0.062745098 0 0 0 0 0.11372549 0 0 0 0 0.176470588 0 0 0 0.12 0" in="shadowBlurOuter1" />
                  </filter>
                  <path d="M25.162 26H23.18v-4c0-.553.444-1 .99-1h3.962v2h-2.971v3Z" id="fbp2-b" />
                  <path d="M41.01 26h-1.981v-3h-2.972v-2h3.962c.547 0 .99.447.99 1v4Z" id="fbp2-d" />
                  <path d="M42 45V34c0-1.105-.886-2-1.981-2h-5.943v-5.999A1.991 1.991 0 0 0 32.096 24a1.99 1.99 0 0 0-1.982 2v11l-4.188-3.382a1.789 1.789 0 0 0-1.694-.305c-1.064.358-1.548 1.601-1.012 2.595L28.133 45H42Z" id="fbp2-f" />
                  <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="fbp2-g">
                    <stop stopColor="#FFF" offset="0%" />
                    <stop stopColor="#DBEAFE" offset="100%" />
                  </linearGradient>
                </defs>
                <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                <use fill="#000" filter="url(#fbp2-a)" xlinkHref="#fbp2-b" />
                <use fillOpacity=".64" fill="#BFDBFE" xlinkHref="#fbp2-b" />
                <use fill="#000" filter="url(#fbp2-c)" xlinkHref="#fbp2-d" />
                <use fillOpacity=".64" fill="#BFDBFE" xlinkHref="#fbp2-d" />
                <use fill="#000" filter="url(#fbp2-e)" xlinkHref="#fbp2-f" />
                <use fill="url(#fbp2-g)" xlinkHref="#fbp2-f" />
              </svg>
              <h3 className="h4 font-playfair-display mb-2">Workers' Wallet</h3>
              <p className="text-lg text-slate-500 mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <div className="font-medium text-slate-800">From $6/mo per participant. No setup fee</div>
            </div>

            {/* 3rd item */}
            <div className="relative" data-aos="fade-up" data-aos-delay="200">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <defs>
                  <filter x="-35%" y="-25%" width="170%" height="170%" filterUnits="objectBoundingBox" id="fbp3-a">
                    <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
                    <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                    <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
                    <feColorMatrix values="0 0 0 0 0.062745098 0 0 0 0 0.11372549 0 0 0 0 0.176470588 0 0 0 0.12 0" in="shadowBlurOuter1" />
                  </filter>
                  <filter x="-29.2%" y="-20.8%" width="158.3%" height="158.3%" filterUnits="objectBoundingBox" id="fbp3-c">
                    <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
                    <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                    <feColorMatrix values="0 0 0 0 0.062745098 0 0 0 0 0.11372549 0 0 0 0 0.176470588 0 0 0 0.12 0" in="shadowBlurOuter1" />
                  </filter>
                  <filter x="-35%" y="-25%" width="170%" height="170%" filterUnits="objectBoundingBox" id="fbp3-f">
                    <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
                    <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                    <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
                    <feColorMatrix values="0 0 0 0 0.062745098 0 0 0 0 0.11372549 0 0 0 0 0.176470588 0 0 0 0.12 0" in="shadowBlurOuter1" />
                  </filter>
                  <filter x="-35%" y="-25%" width="170%" height="170%" filterUnits="objectBoundingBox" id="fbp3-h">
                    <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
                    <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                    <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
                    <feColorMatrix values="0 0 0 0 0.062745098 0 0 0 0 0.11372549 0 0 0 0 0.176470588 0 0 0 0.12 0" in="shadowBlurOuter1" />
                  </filter>
                  <rect id="fbp3-b" x="21" y="21.998" width="10" height="10" rx="2" />
                  <rect id="fbp3-g" x="33" y="33.998" width="10" height="10" rx="2" />
                  <rect id="fbp3-i" x="21" y="33.998" width="10" height="10" rx="2" />
                  <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="fbp3-e">
                    <stop stopColor="#FFF" offset="0%" />
                    <stop stopColor="#DBEAFE" offset="100%" />
                  </linearGradient>
                  <path d="m43.428 25.616-4.047-4.046a1.957 1.957 0 0 0-2.762 0l-4.047 4.046c-.76.765-.76 2 0 2.764l4.047 4.047c.764.76 1.998.76 2.762 0l4.047-4.046c.761-.764.761-2 0-2.765Z" id="fbp3-d" />
                </defs>
                <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                <use fill="#000" filter="url(#fbp3-a)" xlinkHref="#fbp3-b" />
                <use fillOpacity=".64" fill="#BFDBFE" xlinkHref="#fbp3-b" />
                <use fill="#000" filter="url(#fbp3-c)" xlinkHref="#fbp3-d" />
                <use fill="url(#fbp3-e)" xlinkHref="#fbp3-d" />
                <use fill="#000" filter="url(#fbp3-f)" xlinkHref="#fbp3-g" />
                <use fillOpacity=".64" fill="#BFDBFE" xlinkHref="#fbp3-g" />
                <use fill="#000" filter="url(#fbp3-h)" xlinkHref="#fbp3-i" />
                <use fillOpacity=".64" fill="#BFDBFE" xlinkHref="#fbp3-i" />
              </svg>
              <h3 className="h4 font-playfair-display mb-2">Workers' Wallet</h3>
              <p className="text-lg text-slate-500 mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <div className="font-medium text-slate-800">From $6/mo per participant. No setup fee</div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}