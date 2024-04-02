import React from "react";
import ConsultingPageComponent from "@/app/component/ConsultingPageComponent";

const consultingList = {
  listItems: [
    <>
      <strong>open source</strong> license compliance, program office
      management, and strategy
    </>,
    <>
      <strong>inner source</strong> programs and strategy, and
    </>,
    <>
      <strong>product strategy</strong>.
    </>,
  ],
  contactUrl: "",
  pageTitle: "Advisory Services",
  description:
    "Prof. Riehle is available for mid-term to long-term advisory services in our domain of expertise and excellence of",
};

const Advisory = () => {
  return (
    <div className="container mx-auto pl-10 md:pl-48">
      <ConsultingPageComponent
        listItems={consultingList.listItems}
        contactUrl={consultingList.contactUrl}
        pageTitle={consultingList.pageTitle}
        description={consultingList.description}
      />
    </div>
  );
};

export default Advisory;
