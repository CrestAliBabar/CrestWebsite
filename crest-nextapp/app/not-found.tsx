import { getLayoutSettings } from "@/sanity/sanity-utils";
import Header from "./component/header";
import Footer from "./component/footer";

export default async function NotFound() {
  const layoutSetting = await getLayoutSettings();
  return (
    <div>
      <Header />
      <section className="bg-white h-screen">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto my-28 max-w-screen-sm text-center lg:my-36">
            <h1
              className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl"
              style={{ color: layoutSetting[0].backgroundColor.value }}
            >
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
              Something&apos;s missing.
            </p>
            <p className="mb-4 text-lg font-light text-gray-500">
              Sorry, we can&apos;t find that page. You&apos;ll find lots to
              explore on the home page.
            </p>
            <a
              href="/"
              className="inline-flex max-h-100% text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
              style={{
                background: layoutSetting[0].backgroundColor.value,
              }}
            >
              Back to Homepage
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
