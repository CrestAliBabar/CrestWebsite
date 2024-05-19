import Header from "../component/header";
import Footer from "../component/footer";
import { getLayoutSettings } from "@/sanity/sanity-utils";
import ChatBoxComponent from "../clientComponent/utils/chatBoxComponent";


export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {


 // const layoutSetting = await getLayoutSettings();

  // Constructing the linear gradient string
 // const linearGradient = `linear-gradient(${layoutSetting[0].backgroundGradient.transitionDirection}, ${layoutSetting[0].backgroundGradient.startColor.value}, ${layoutSetting[0].backgroundGradient.endColor.value})`;
 //style={{ backgroundImage: linearGradient }}

  return (
    <div>
      <ChatBoxComponent/>
      <Header />
      <main >
        <div>{children}</div>
      </main>
      <Footer />
    </div>
  );
}
