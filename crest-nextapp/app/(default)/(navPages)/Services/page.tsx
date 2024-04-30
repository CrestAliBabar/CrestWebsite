import React from "react";
import CommonPageComponent from "@/app/component/commonPageComponent";
import { getServiceCard } from "@/sanity/sanity-utils";
import { getPageInfo } from "@/sanity/sanity-utils";
import { getServicePage } from "@/sanity/sanity-utils";
const pageInfo = {
  heading: "Structured Services",
  description:
    "Competitively priced open source license clearing and due diligence services.",
  tabPage: "Services",
};

async function Services() {
  const tabName = "Services";

  const serviceCard = await getServiceCard();
  const pageInfoArray = await getPageInfo(tabName);
  const pageInfo = pageInfoArray[0] ?? {};
  const servicePage = await getServicePage();

  return (
    <div className="px-28">
      <CommonPageComponent
        componentData={serviceCard}
        pageInfo={pageInfo}
        pageDynamicId={servicePage}
      />
    </div>
  );
}

export default Services;
