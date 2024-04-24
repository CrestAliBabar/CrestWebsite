import React from "react";
import CommonPageComponent from "@/app/component/commonPageComponent";
import { getConsultingCard } from "@/sanity/sanity-utils";
import { getPageInfo } from "@/sanity/sanity-utils";

// const pageInfo = {
//   heading: "Consulting and Advisory",
//   description:
//     "Consulting and advisory services on open source, inner source, and product strategy.",
//   tabPage: "Consulting",
// };

async function Consulting () {
  const tabName = "Consulting";

  const consultingCard = await getConsultingCard();
  const pageInfoArray = await getPageInfo(tabName);
  // console.log(pageInfoArray);
  const pageInfo = pageInfoArray[0] ?? {}; 
  
  return (
    <div className="px-28">
      <CommonPageComponent componentData={consultingCard} pageInfo={pageInfo} />
    </div>
  );
};

export default Consulting;
