'use client'

import { useState, useRef, Fragment } from 'react'
import type { StaticImageData } from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'

interface ModalVideo02Props {
  thumb: StaticImageData
  thumbWidth: number
  thumbHeight: number
  thumbAlt: string
  video: string
  videoWidth: number
  videoHeight: number
}

export default function ModalVideo02({
  thumb,
  thumbWidth,
  thumbHeight,
  thumbAlt,
  video,
  videoWidth,
  videoHeight,
}: ModalVideo02Props) {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <div className="max-w-3xl mx-auto" data-aos="fade-up">
      <div className="relative flex justify-center items-center">

        {/* Video thumbnail */}
        <Image src={thumb} width={thumbWidth} height={thumbHeight} alt={thumbAlt} />
        <button className="absolute group" onClick={() => { setModalOpen(true) }} aria-label="Watch the video">
          <svg className="w-16 h-16 fill-current sm:w-20 sm:h-20 group" viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg">
            <circle className="text-white opacity-80 group-hover:opacity-100 transition duration-150 ease-in-out" cx="44" cy="44" r="44" />
            <path className="text-blue-600" d="M52 44a.999.999 0 00-.427-.82l-10-7A1 1 0 0040 37V51a.999.999 0 001.573.82l10-7A.995.995 0 0052 44V44c0 .001 0 .001 0 0z" />
          </svg>
        </button>
        {/* End: Video thumbnail */}

        <Transition show={modalOpen} as={Fragment} afterEnter={() => videoRef.current?.play()}>
          <Dialog initialFocus={videoRef} onClose={() => setModalOpen(false)}>

            {/* Modal backdrop */}
            <Transition.Child
              className="fixed inset-0 z-[99999] bg-black bg-opacity-75 transition-opacity"
              enter="transition ease-out duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition ease-out duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              aria-hidden="true"
            />
            {/* End: Modal backdrop */}

            {/* Modal dialog */}
            <Transition.Child
              className="fixed inset-0 z-[99999] overflow-hidden flex items-center justify-center transform px-4 sm:px-6"
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ttransition ease-out duration-200"
              leaveFrom="oopacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="max-w-6xl mx-auto h-full flex items-center">
                <Dialog.Panel className="w-full max-h-full aspect-video bg-black overflow-hidden">
                  <video ref={videoRef} width={videoWidth} height={videoHeight} loop controls>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </Dialog.Panel>
              </div>
            </Transition.Child>
            {/* End: Modal dialog */}

          </Dialog>
        </Transition>

      </div>
    </div>
  )
}