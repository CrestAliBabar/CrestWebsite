// import Header from "../component/header";
// import Footer from "../component/footer";
// import { getLayoutSettings } from "@/sanity/sanity-utils";

// export default async function  RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const layoutSetting = await getLayoutSettings();

//     // Constructing the linear gradient string
//     const linearGradient = `linear-gradient(${layoutSetting[0].backgroundGradient.transitionDirection}, ${layoutSetting[0].backgroundGradient.startColor.value}, ${layoutSetting[0].backgroundGradient.endColor.value})`;
//     return (
//     <div className="flex flex-col min-h-screen">
//       <Header />
//       <main className="flex-grow"

//       style={{ backgroundImage: linearGradient }}
//       >
//         <div className="container mx-auto">{children}</div>
//       </main>
//       <Footer />
//     </div>
//   );
// }

import Header from "../component/header";
import Footer from "../component/footer";
import { getLayoutSettings } from "@/sanity/sanity-utils";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const layoutSetting = await getLayoutSettings();

  // Constructing the linear gradient string
  const linearGradient = `linear-gradient(${layoutSetting[0].backgroundGradient.transitionDirection}, ${layoutSetting[0].backgroundGradient.startColor.value}, ${layoutSetting[0].backgroundGradient.endColor.value})`;
  return (
    <div>
      <Header />
      <main className="flex-grow" style={{ backgroundImage: linearGradient }}>
        <div>{children}</div>
      </main>
      <Footer />
    </div>
  );
}
