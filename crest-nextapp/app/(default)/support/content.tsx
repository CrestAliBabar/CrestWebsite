import Image from 'next/image'
import AvatarImage01 from '@/public/images/support-avatar-01.jpg'
import AvatarImage02 from '@/public/images/support-avatar-02.jpg'
import AvatarImage03 from '@/public/images/support-avatar-03.jpg'
import AvatarImage04 from '@/public/images/support-avatar-04.jpg'
import AvatarImage05 from '@/public/images/support-avatar-05.jpg'
import AvatarImage06 from '@/public/images/support-avatar-06.jpg'

export default function SupportContent() {  
  return (
    <section className="bg-slate-50">

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Articles */}
          <div className="max-w-3xl mx-auto space-y-4" data-aos-id-support>

            {/* Article*/}
            <article className="bg-white p-6 md:px-8 shadow-lg" data-aos="fade-up" data-aos-anchor="[data-aos-id-support]">
              <div className="flex">
                {/* Icon */}
                <div className="flex items-center shrink-0 pr-6 sm:pr-8 sm:mr-6 sm:border-r border-slate-200">
                  <svg className="w-8 h-8 fill-blue-600" viewBox="0 0 32 32">
                    <path d="M17 18h12v6h-4v8H7v-8H3v-6h12v-7a6 6 0 0 1-6-6V2h2c1.537 0 2.938.578 4 1.528V0h2v8.528A5.978 5.978 0 0 1 21 7h2v3a6 6 0 0 1-6 6v2Zm10 2H5v2h22v-2Zm-4 4H9v6h14v-6Zm-6-10a4 4 0 0 0 4-4V9a4 4 0 0 0-4 4v1Zm-2-5V8a4 4 0 0 0-4-4v1a4 4 0 0 0 4 4Z" />
                  </svg>
                </div>
                {/* Content */}
                <div className="grow">
                  <header>
                    <h2 className="h4 font-playfair-display mb-2">
                      <a className="text-slate-800 hover:underline hover:decoration-blue-100" href="#0">Getting Started with Tidy</a>
                    </h2>
                  </header>
                  <p className="text-slate-500 mb-4">New to Tidy or feeling a little lost? Start here ;)</p>
                  <footer className="flex items-center">
                    <div className="flex shrink-0 -space-x-3 -ml-0.5 mr-3">
                      <Image className="rounded-full border-2 border-white box-content" src={AvatarImage01} width={32} height={32} alt="Avatar 01" />
                      <Image className="rounded-full border-2 border-white box-content" src={AvatarImage02} width={32} height={32} alt="Avatar 02" />
                      <Image className="rounded-full border-2 border-white box-content" src={AvatarImage03} width={32} height={32} alt="Avatar 03" />
                    </div>
                    <div className="grow text-sm font-medium text-slate-600"><a className="text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out" href="#0">4 Articles</a> written by <a className="text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out" href="#0">Anna L.</a>, and 2 others</div>
                  </footer>
                </div>
              </div>
            </article>

            {/* Article*/}
            <article className="bg-white p-6 md:px-8 shadow-lg" data-aos="fade-up" data-aos-anchor="[data-aos-id-support]" data-aos-delay={100}>
              <div className="flex">
                {/* Icon */}
                <div className="flex items-center shrink-0 pr-6 sm:pr-8 sm:mr-6 sm:border-r border-slate-200">
                  <svg className="w-8 h-8 fill-blue-600" viewBox="0 0 32 32">
                    <path d="M25.324 22H22v-2h3.324a6 6 0 0 1 4.992 2.671l1.206 1.81-1.16.451-15.167 5.9a7 7 0 0 1-6.3-.619L0 24.55V14h3c2.994 0 5.922 1.078 7.5 3H15a6 6 0 0 1 6 6v1H8v-2h10.874A4.002 4.002 0 0 0 15 19H9.466l-.297-.443C8.123 16.995 5.612 16 3 16H2v7.451l7.97 5.075a5 5 0 0 0 4.5.442l13.996-5.444A4 4 0 0 0 25.324 22Zm-6.317-8.014a6.993 6.993 0 1 1 0-13.986 6.993 6.993 0 0 1 0 13.986Zm0-2a4.993 4.993 0 1 0 0-9.986 4.993 4.993 0 0 0 0 9.986ZM18 4h2v6h-2V4Z" />
                  </svg>
                </div>
                {/* Content */}
                <div className="grow">
                  <header>
                    <h2 className="h4 font-playfair-display mb-2">
                      <a className="text-slate-800 hover:underline hover:decoration-blue-100" href="#0">Account Access and Billing</a>
                    </h2>
                  </header>
                  <p className="text-slate-500 mb-4">Managing your account; upgrading, downgrading and cancellations, payments, etc.</p>
                  <footer className="flex items-center">
                    <div className="flex shrink-0 -space-x-3 -ml-0.5 mr-3">
                      <Image className="rounded-full border-2 border-white box-content" src={AvatarImage01} width={32} height={32} alt="Avatar 01" />
                      <Image className="rounded-full border-2 border-white box-content" src={AvatarImage04} width={32} height={32} alt="Avatar 04" />
                      <Image className="rounded-full border-2 border-white box-content" src={AvatarImage05} width={32} height={32} alt="Avatar 05" />
                    </div>
                    <div className="grow text-sm font-medium text-slate-600"><a className="text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out" href="#0">7 Articles</a> written by <a className="text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out" href="#0">Anna L.</a>, and 2 others</div>
                  </footer>
                </div>
              </div>
            </article>

            {/* Article*/}
            <article className="bg-white p-6 md:px-8 shadow-lg" data-aos="fade-up" data-aos-anchor="[data-aos-id-support]" data-aos-delay={200}>
              <div className="flex">
                {/* Icon */}
                <div className="flex items-center shrink-0 pr-6 sm:pr-8 sm:mr-6 sm:border-r border-slate-200">
                  <svg className="w-8 h-8 fill-blue-600" viewBox="0 0 32 32">
                    <path d="M17.235 14H8a2 2 0 0 0-2 2v13h2v-3.446a3 3 0 0 1 .428-1.543l3.143-5.24.78.293 6.699 2.512a3 3 0 0 1 1.95 2.81V29h2v-6.134l2.234-8.191-4.76-2.33A4 4 0 0 1 17.236 14Zm-12.688-.02A5 5 0 0 1 0 9V8h2v1a3 3 0 0 0 3 3h12.235a2 2 0 0 0 1.748-1.029l4.787-8.616 2.723 2.724L32 6.18V9a4 4 0 0 1-4 4h-.236L25 23.134V31h-6v-6.614a1 1 0 0 0-.651-.937l-5.92-2.22-2.287 3.81a1 1 0 0 0-.142.515V31H4V16c0-.737.2-1.427.547-2.02Zm16.926-3.372 4.297 2.102.466-1.71H28a2 2 0 0 0 2-2V7.82l-4.493-.899-1.277-1.276-2.757 4.963ZM17 8h1v2h-1a9 9 0 0 1-9-9V0h2v1a7 7 0 0 0 7 7Z" />
                  </svg>
                </div>
                {/* Content */}
                <div className="grow">
                  <header>
                    <h2 className="h4 font-playfair-display mb-2">
                      <a className="text-slate-800 hover:underline hover:decoration-blue-100" href="#0">Best Practices</a>
                    </h2>
                  </header>
                  <p className="text-slate-500 mb-4">Practical platform tips and recommendations.</p>
                  <footer className="flex items-center">
                    <div className="flex shrink-0 -space-x-3 -ml-0.5 mr-3">
                      <Image className="rounded-full border-2 border-white box-content" src={AvatarImage06} width={32} height={32} alt="Avatar 06" />
                      <Image className="rounded-full border-2 border-white box-content" src={AvatarImage02} width={32} height={32} alt="Avatar 02" />
                      <Image className="rounded-full border-2 border-white box-content" src={AvatarImage03} width={32} height={32} alt="Avatar 03" />
                    </div>
                    <div className="grow text-sm font-medium text-slate-600"><a className="text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out" href="#0">2 Articles</a> written by <a className="text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out" href="#0">Kevin P.</a>, and 2 others</div>
                  </footer>
                </div>
              </div>
            </article>

            {/* Article*/}
            <article className="bg-white p-6 md:px-8 shadow-lg" data-aos="fade-up" data-aos-anchor="[data-aos-id-support]" data-aos-delay={300}>
              <div className="flex">
                {/* Icon */}
                <div className="flex items-center shrink-0 pr-6 sm:pr-8 sm:mr-6 sm:border-r border-slate-200">
                  <svg className="w-8 h-8 fill-blue-600" viewBox="0 0 32 32">
                    <path d="M27.37 6.045a7.835 7.835 0 0 1-.663 10.326l-2.876 2.874L12.755 8.169l.707-.707 2.167-2.17a7.835 7.835 0 0 1 10.326-.662L30 .586 31.414 2 27.37 6.045Zm-1.986.755-.184-.184a5.833 5.833 0 0 0-8.157.09l-1.46 1.463 8.248 8.248 1.462-1.46a5.834 5.834 0 0 0 .09-8.157ZM4.63 25.955a7.835 7.835 0 0 1 .663-10.326l2.876-2.874 2.83 2.83 3.001-3L15.414 14l-3 3L15 19.586l3-3L19.414 18l-3 3 2.831 2.832-.707.707-2.167 2.168a7.835 7.835 0 0 1-10.326.663L2 31.414.586 30l4.044-4.045Zm1.986-.755.184.184a5.833 5.833 0 0 0 8.157-.09l1.46-1.462-8.248-8.25-1.462 1.461a5.834 5.834 0 0 0-.09 8.157Z" />
                  </svg>
                </div>
                {/* Content */}
                <div className="grow">
                  <header>
                    <h2 className="h4 font-playfair-display mb-2">
                      <a className="text-slate-800 hover:underline hover:decoration-blue-100" href="#0">API</a>
                    </h2>
                  </header>
                  <p className="text-slate-500 mb-4">Find the most commonly asked questions about Tidy's API</p>
                  <footer className="flex items-center">
                    <div className="flex shrink-0 -space-x-3 -ml-0.5 mr-3">
                      <Image className="rounded-full border-2 border-white box-content" src={AvatarImage01} width={32} height={32} alt="Avatar 01" />
                    </div>
                    <div className="grow text-sm font-medium text-slate-600"><a className="text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out" href="#0">2 Articles</a> written by <a className="text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out" href="#0">Anna L.</a></div>
                  </footer>
                </div>
              </div>
            </article>

            {/* Article*/}
            <article className="bg-white p-6 md:px-8 shadow-lg" data-aos="fade-up" data-aos-anchor="[data-aos-id-support]" data-aos-delay={400}>
              <div className="flex">
                {/* Icon */}
                <div className="flex items-center shrink-0 pr-6 sm:pr-8 sm:mr-6 sm:border-r border-slate-200">
                  <svg className="w-8 h-8 fill-blue-600" viewBox="0 0 32 32">
                    <path d="M25 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm23 7.016a.995.995 0 0 0-.48-.856A8.838 8.838 0 0 0 24.98 11a8.702 8.702 0 0 0-4.493 1.146 1 1 0 0 0-.487.86l.001 1-2 .002-.001-1a3.007 3.007 0 0 1 1.476-2.587A10.68 10.68 0 0 1 24.985 9c1.937-.03 3.847.461 5.54 1.43A3 3 0 0 1 32 13.017V19h-8v-2h6v-3.984ZM2 17h6v2H0v-5.982a3.005 3.005 0 0 1 1.487-2.594A10.763 10.763 0 0 1 6.98 9a10.73 10.73 0 0 1 5.558 1.43A3 3 0 0 1 14 13.008l-.001 1-2-.002.001-1a.994.994 0 0 0-.472-.85A8.754 8.754 0 0 0 6.985 11a8.789 8.789 0 0 0-4.493 1.153 1 1 0 0 0-.492.864V17Zm14 15a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm0-2a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm-1-10h2L17 28h-2L15 20Z" />
                  </svg>
                </div>
                {/* Content */}
                <div className="grow">
                  <header>
                    <h2 className="h4 font-playfair-display mb-2">
                      <a className="text-slate-800 hover:underline hover:decoration-blue-100" href="#0">Other Tools</a>
                    </h2>
                  </header>
                  <p className="text-slate-500 mb-4">Tutorials, FAQs and best practices with tools like Tidy Pro, Tidy Tracker, and more.</p>
                  <footer className="flex items-center">
                    <div className="flex shrink-0 -space-x-3 -ml-0.5 mr-3">
                      <Image className="rounded-full border-2 border-white box-content" src={AvatarImage01} width={32} height={32} alt="Avatar 01" />
                      <Image className="rounded-full border-2 border-white box-content" src={AvatarImage04} width={32} height={32} alt="Avatar 04" />
                      <Image className="rounded-full border-2 border-white box-content" src={AvatarImage05} width={32} height={32} alt="Avatar 05" />
                    </div>
                    <div className="grow text-sm font-medium text-slate-600"><a className="text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out" href="#0">5 Articles</a> written by <a className="text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out" href="#0">Anna L.</a>, and 2 others</div>
                  </footer>
                </div>
              </div>
            </article>

          </div>

        </div>
      </div>
    </section>
  )
}