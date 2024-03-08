'use client'

import { useState } from 'react'

export default function PricingTables() {

  const [annual, setAnnual] = useState<boolean>(true)
  
  return (
    <div>

      {/* Pricing toggle */}
      <div className="flex justify-center items-center space-x-4 sm:space-x-7 mb-16">
        <div className="text-sm text-slate-500 font-medium text-right min-w-[8rem]">Pay Monthly</div>
        <div className="form-switch shrink-0">
          <input type="checkbox" id="toggle" className="sr-only" checked={annual} onChange={() => setAnnual(!annual)} />
          <label className="bg-slate-700" htmlFor="toggle">
            <span className="bg-slate-300 border-8 border-slate-500" aria-hidden="true"></span>
            <span className="sr-only">Pay annually</span>
          </label>
        </div>
        <div className="text-sm text-slate-500 font-medium min-w-[8rem]">Pay Yearly <span className="text-emerald-500">(-20%)</span></div>
      </div>

      <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none pt-4">

        {/* Pricing table 1 */}
        <div className="relative flex flex-col h-full px-6 py-5 bg-white shadow-lg" data-aos="fade-up">
          <div className="mb-4 pb-4 border-b border-slate-200">
            <div className="text-lg font-semibold text-slate-800 mb-1">Essential</div>
            <div className="inline-flex items-baseline mb-3">
              <span className="h3 font-medium text-slate-500">$</span>
              <span className="h2 leading-7 font-playfair-display text-slate-800">{annual ? '49' : '55'}</span>
              <span className="font-medium text-slate-400">/mo</span>
            </div>
            <div className="text-slate-500">Better insights for growing businesses that want more customers.</div>
          </div>
          <div className="font-medium mb-3">Features include:</div>
          <ul className="text-slate-500 space-y-3 grow mb-6">
            <li className="flex items-center">
              <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>50 Placeholder text commonly</span>
            </li>
            <li className="flex items-center">
              <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Consectetur adipiscing elit</span>
            </li>
            <li className="flex items-center">
              <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Excepteur sint occaecat cupidatat</span>
            </li>
            <li className="flex items-center">
              <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Officia deserunt mollit anim</span>
            </li>
          </ul>
          <div className="p-3 rounded bg-slate-50">
            <a className="btn-sm text-white bg-blue-600 hover:bg-blue-700 w-full group" href="#0">
              Start free trial <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
            </a>
          </div>
        </div>

        {/* Pricing table 2 */}
        <div className="relative flex flex-col h-full px-6 py-5 bg-white shadow-lg" data-aos="fade-up" data-aos-delay="100">
          <div className="absolute top-0 right-0 mr-6 -mt-4">
            <div className="inline-flex text-sm font-semibold py-1 px-3 text-emerald-700 bg-emerald-200 rounded-full">Most Popular</div>
          </div>
          <div className="mb-4 pb-4 border-b border-slate-200">
            <div className="text-lg font-semibold text-slate-800 mb-1">Premium</div>
            <div className="inline-flex items-baseline mb-3">
              <span className="h3 font-medium text-slate-500">$</span>
              <span className="h2 leading-7 font-playfair-display text-slate-800">{annual ? '79' : '85'}</span>
              <span className="font-medium text-slate-400">/mo</span>
            </div>
            <div className="text-slate-500">Better insights for growing businesses that want more customers.</div>
          </div>
          <div className="font-medium mb-3">All features of Essential plus:</div>
          <ul className="text-slate-500 space-y-3 grow mb-6">
            <li className="flex items-center">
              <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>100 placeholder text commonly</span>
            </li>
            <li className="flex items-center">
              <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Consectetur adipiscing elit</span>
            </li>
            <li className="flex items-center">
              <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Excepteur sint occaecat cupidatat</span>
            </li>
            <li className="flex items-center">
              <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Officia deserunt mollit anim</span>
            </li>
            <li className="flex items-center">
              <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Placeholder text commonly used</span>
            </li>
          </ul>
          <div className="p-3 rounded bg-slate-50">
            <a className="btn-sm text-white bg-blue-600 hover:bg-blue-700 w-full group" href="#0">
              Start free trial <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
            </a>
          </div>
        </div>

        {/* Pricing table 3 */}
        <div className="relative flex flex-col h-full px-6 py-5 bg-white shadow-lg" data-aos="fade-up" data-aos-delay="200">
          <div className="mb-4 pb-4 border-b border-slate-200">
            <div className="text-lg font-semibold text-slate-800 mb-1">Advanced</div>
            <div className="inline-flex items-baseline mb-3">
              <span className="h3 font-medium text-slate-500">$</span>
              <span className="h2 leading-7 font-playfair-display text-slate-800">{annual ? '129' : '135'}</span>
              <span className="font-medium text-slate-400">/mo</span>
            </div>
            <div className="text-slate-500">Better insights for growing businesses that want more customers.</div>
          </div>
          <div className="font-medium mb-3">All features of Essential plus:</div>
          <ul className="text-slate-500 space-y-3 grow mb-6">
            <li className="flex items-center">
              <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>200 placeholder text commonly</span>
            </li>
            <li className="flex items-center">
              <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Consectetur adipiscing elit</span>
            </li>
            <li className="flex items-center">
              <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Excepteur sint occaecat cupidatat</span>
            </li>
            <li className="flex items-center">
              <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Officia deserunt mollit anim</span>
            </li>
            <li className="flex items-center">
              <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Voluptate velit esse cillum</span>
            </li>
            <li className="flex items-center">
              <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Placeholder text commonly used</span>
            </li>
          </ul>
          <div className="p-3 rounded bg-slate-50">
            <a className="btn-sm text-white bg-blue-600 hover:bg-blue-700 w-full group" href="#0">
              Start free trial <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  )
}