import React from 'react'
import CommonPageComponent from "@/app/component/commonPageComponent";
import { getServiceCard } from "@/sanity/sanity-utils";

const pageInfo = {
  heading:"Structured Services",
  description:"Competitively priced open source license clearing and due diligence services.",
  tabPage: "Services"
}


 async function Services () {
  const serviceCard = await getServiceCard();

  return (
    <div className="px-28">
    <CommonPageComponent componentData={serviceCard}  pageInfo={pageInfo} />
    </div>
  )
}

export default Services