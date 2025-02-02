

import HomePageComponent from "@/app/component/homePageComponent";
import { getHomePageContent } from "@/sanity/sanity-utils";
import FeatureDashboard from "@/app/component/featureComponents/featureDashboard";
import SvmDashboardComponent from "@/app/component/dashboards/svmDashboardComponent/svmDashboardComponent";



export default async function Home() {

  const homePageContent = await getHomePageContent()


  return (
    <>

    <HomePageComponent pageBuilder ={homePageContent[0].pageBuilder} />

    
    </>

  );
}
