
import HeroStandard from "@/app/component/heroComponents/heroStandard";
import HomePageComponent from "@/app/component/homePageComponent";
import { getHomePageContent } from "@/sanity/sanity-utils";



export default async function Home() {

  const homePageContent = await getHomePageContent()


  return (
    <>
    <HeroStandard/>
    <HomePageComponent pageBuilder ={homePageContent[0].pageBuilder} />

    </>

  );
}
