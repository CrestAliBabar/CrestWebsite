import Image from 'next/image'
import SingleImage from '@/public/images/wof-single.jpg'

export default function WolContent() {  
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:pt-20 md:pb-16">

          <div className="max-w-3xl mx-auto">
            <div className="text-lg text-slate-500">
              <h2 className="h3 font-playfair-display text-slate-800 mb-4">About Black Inc.</h2>
              <p className="mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum. Neque sodales ut etiam sit amet how to manage <a className="font-medium text-blue-600 hover:underline" href="#0">Black Inc.</a> malesuada proin libero nunc consequat interdum varius. Quam pellentesque nec nam aliquam sem et tortor consequat. Pellentesque adipiscing commodo elit at imperdiet. Semper auctor neque vitae tempus quam pellentesque nec. Amet dictum sit amet justo donec enim diam. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Odio pellentesque diam volutpat commodo sed. Elit sed vulputate mi sit amet mauris commodo quis imperdiet.
              </p>
              <div className="flex justify-center mb-8" aria-hidden="true">
                <svg className="fill-slate-400" width="36" height="4">
                  <circle cx="18" cy="2" r="2" />
                  <circle cx="2" cy="2" r="2" />
                  <circle cx="34" cy="2" r="2" />
                </svg>
              </div>
              <h3 className="flex h4 font-playfair-display text-slate-800 mb-4 lg:-ml-10">
                <div className="mr-5 mt-2">
                  <svg className="fill-blue-600 shrink-0" width="20" height="16">
                    <path d="M2.76 16c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.613-2.272-1.748-2.272s-2.27.726-3.283 1.64C3.16 6.439 5.613 3.346 9.571.885L9.233 0C3.466 2.903 0 7.732 0 12.213 0 14.517.828 16 2.76 16Zm10.43 0c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.614-2.272-1.749-2.272-1.135 0-2.27.726-3.282 1.64.276-2.934 2.73-6.027 6.687-8.488L19.663 0c-5.767 2.903-9.234 7.732-9.234 12.213 0 2.304.829 3.787 2.761 3.787Z" />
                  </svg>
                </div>
                <span>Duis aute irure dolor in reprehenderit in voluptate?</span>
              </h3>
              <p className="mb-8">
                Et leo duis ut diam quam nulla porttitor porttitor lacus luctus accumsan tortor, lorem dolor sed viverra ipsum nunc aliquet bibendum enim eu augue ut lectus arcu bibendum at. Non sodales neque sodales ut etiam sit. Venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam.
              </p>
              <h3 className="flex h4 font-playfair-display text-slate-800 mb-4 lg:-ml-10">
                <div className="mr-5 mt-2">
                  <svg className="fill-blue-600 shrink-0" width="20" height="16">
                    <path d="M2.76 16c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.613-2.272-1.748-2.272s-2.27.726-3.283 1.64C3.16 6.439 5.613 3.346 9.571.885L9.233 0C3.466 2.903 0 7.732 0 12.213 0 14.517.828 16 2.76 16Zm10.43 0c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.614-2.272-1.749-2.272-1.135 0-2.27.726-3.282 1.64.276-2.934 2.73-6.027 6.687-8.488L19.663 0c-5.767 2.903-9.234 7.732-9.234 12.213 0 2.304.829 3.787 2.761 3.787Z" />
                  </svg>
                </div>
                <span>Qui officia deserunt mollit anim?</span>
              </h3>
              <p className="mb-8">
                A condimentum vitae sapien pellentesque habitant morbi tristique, nunc sed blandit libero volutpat sed cras ornare arcu dui Ullamcorper velit sed ullamcorper morbi. Lacus laoreet non curabitur gravida adipiscing bibendum.
              </p>
              <h3 className="flex h4 font-playfair-display text-slate-800 mb-4 lg:-ml-10">
                <div className="mr-5 mt-2">
                  <svg className="fill-blue-600 shrink-0" width="20" height="16">
                    <path d="M2.76 16c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.613-2.272-1.748-2.272s-2.27.726-3.283 1.64C3.16 6.439 5.613 3.346 9.571.885L9.233 0C3.466 2.903 0 7.732 0 12.213 0 14.517.828 16 2.76 16Zm10.43 0c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.614-2.272-1.749-2.272-1.135 0-2.27.726-3.282 1.64.276-2.934 2.73-6.027 6.687-8.488L19.663 0c-5.767 2.903-9.234 7.732-9.234 12.213 0 2.304.829 3.787 2.761 3.787Z" />
                  </svg>
                </div>
                <span>Facilisis sed odio morbi quis commodo vel pharetra vel turpis?</span>
              </h3>
              <p className="mb-8">
                Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat auctor urna nunc id cursus metus aliquam eleifend, arcu dictum varius duis at consectetur lorem donec massa sapien, sed risus ultricies tristique nulla aliquet. Morbi tristique senectus et netus et, nibh nisl condimentum id venenatis a condimentum vitae sapien
              </p>
              <figure className="mb-8">
                <Image className="w-full" src={SingleImage} width={768} height={432} alt="Wall of Love single" />
              </figure>
              <h3 className="flex h4 font-playfair-display text-slate-800 mb-4 lg:-ml-10">
                <div className="mr-5 mt-2">
                  <svg className="fill-blue-600 shrink-0" width="20" height="16">
                    <path d="M2.76 16c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.613-2.272-1.748-2.272s-2.27.726-3.283 1.64C3.16 6.439 5.613 3.346 9.571.885L9.233 0C3.466 2.903 0 7.732 0 12.213 0 14.517.828 16 2.76 16Zm10.43 0c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.614-2.272-1.749-2.272-1.135 0-2.27.726-3.282 1.64.276-2.934 2.73-6.027 6.687-8.488L19.663 0c-5.767 2.903-9.234 7.732-9.234 12.213 0 2.304.829 3.787 2.761 3.787Z" />
                  </svg>
                </div>
                <span>Acilisis sed odio morbi quis commodo eu facilisis?</span>
              </h3>
              <p className="mb-8">
                A condimentum vitae sapien pellentesque habitant morbi tristique, nunc sed blandit libero volutpat sed cras ornare arcu dui Ullamcorper velit sed ullamcorper morbi. Lacus laoreet non curabitur gravida adipiscing bibendum.
              </p>
              <div className="flex justify-center mb-8" aria-hidden="true">
                <svg className="fill-slate-400" width="36" height="4">
                  <circle cx="18" cy="2" r="2" />
                  <circle cx="2" cy="2" r="2" />
                  <circle cx="34" cy="2" r="2" />
                </svg>
              </div>
              <h2 className="h3 font-playfair-display text-slate-800 mb-4">Conclusion</h2>
              <p className="mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum. Neque sodales ut etiam sit amet how to manage <a className="font-medium text-blue-600 hover:underline" href="#0">Black Inc.</a> Varius sit amet mattis vulputate enim nulla aliquet porttitor. Odio pellentesque diam volutpat commodo.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}