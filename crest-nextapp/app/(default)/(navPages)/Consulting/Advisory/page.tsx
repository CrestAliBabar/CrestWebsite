import React from "react";
import AdvisoryEngagementsComponent from "@/app/component/AdvisoryEngagements";

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
};
const Advisory = () => {
  return (
    <div className="container mx-auto pl-10 md:pl-48">
      <AdvisoryEngagementsComponent
        listItems={consultingList.listItems}
        contactUrl={consultingList.contactUrl}
      />
    </div>
  );
};

export default Advisory;
