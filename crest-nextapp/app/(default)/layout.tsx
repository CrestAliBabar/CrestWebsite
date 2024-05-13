import Header from "../component/header";
import Footer from "../component/footer";
import { getLayoutSettings } from "@/sanity/sanity-utils";
import Script from "next/script";
import ChatBoxComponent from "../clientComponent/utils/chatBoxComponent";

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
      <ChatBoxComponent/>
      <Header />
      <main style={{ backgroundImage: linearGradient }}>
        <div>{children}</div>
      </main>
      <Footer />
    </div>
  );
}
