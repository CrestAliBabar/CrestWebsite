import React from "react";
import ConsultingEngagementsComponent from "@/app/component/ConsultingEngagements";

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
const Project = () => {
  return (
    <div className="container mx-auto pl-10 md:pl-48">
      <ConsultingEngagementsComponent
        listItems={consultingList.listItems}
        contactUrl={consultingList.contactUrl}
      />
    </div>
  );
};

export default Project;
