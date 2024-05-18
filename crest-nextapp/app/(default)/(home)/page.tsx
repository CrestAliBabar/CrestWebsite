import HomePageComponent from "@/app/component/homePageComponent";
import Step3Blocks from "@/app/component/workFlowComponent/step3Blocks";
import { getHomePageContent } from "@/sanity/sanity-utils";



export default async function Home() {

  const homePageContent = await getHomePageContent()


  return (
    <>

    <HomePageComponent pageBuilder ={homePageContent[0].pageBuilder} />

    </>

  );
}
