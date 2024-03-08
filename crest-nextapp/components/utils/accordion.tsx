'use client'

import { useState, useRef, useEffect } from 'react'

type AccordionpProps = {
  children: React.ReactNode
  tag?: string
  title: string
  active?: boolean
}

export default function Accordion({
  children,
  tag = 'li',
  title,
  active = false
}: AccordionpProps) {

  const [accordionOpen, setAccordionOpen] = useState<boolean>(false)
  const accordion = useRef<HTMLDivElement>(null)
  const Component = tag as keyof JSX.IntrinsicElements

  useEffect(() => {
    setAccordionOpen(active)
  }, [accordion])

  return (
    <Component>
      <button
        className="h4 font-playfair-display flex items-center justify-between w-full text-left py-5"
        onClick={(e) => { e.preventDefault(); setAccordionOpen(!accordionOpen); }}
        aria-expanded={accordionOpen}
      >
        <span>{title}</span>
        <svg className={`w-4 h-4 fill-current text-blue-600 shrink-0 ml-8 ${accordionOpen && 'rotate-180'}`} viewBox="0 0 16 16">
          <path d="m3 5 5 6 5-6z" />
        </svg>
      </button>
      <div
        ref={accordion}
        className="text-slate-500 overflow-hidden transition-all duration-300 ease-in-out"
        style={accordionOpen ? { maxHeight: accordion.current?.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: 0 }}
      >
        <p className="pb-5">{children}</p>
      </div>
    </Component>
  )
}
