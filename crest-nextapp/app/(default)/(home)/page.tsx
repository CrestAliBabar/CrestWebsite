

import HomePageComponent from "@/app/component/homePageComponent";
import InteractiveDashboardComponent from "@/app/component/dashboardComponent/newInteractiveComponent";
import { getHomePageContent } from "@/sanity/sanity-utils";
import FeatureDashboardComponent from "@/app/component/featureComponents/featureDashboardComponent";



export default async function Home() {

  const homePageContent = await getHomePageContent()


  return (
    <>

    <HomePageComponent pageBuilder ={homePageContent[0].pageBuilder} />
    <FeatureDashboardComponent/>
    
    </>

  );
}
