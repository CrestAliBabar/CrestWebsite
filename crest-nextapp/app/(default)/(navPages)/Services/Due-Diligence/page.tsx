import React from "react";
import TitleComponent from "@/app/component/titleComponent";
import ReportSection from "@/app/component/reportSection";

const seminarInfo = {
  title: "Open Source Due Diligence",
  tagline: "Services to find and resolve intellectual property challenges",
  taglineContent:
    "We provide due diligence services for mergers & acquisition, private equity, and other activities. Our focus is on analyzing the use of open-source code in software products to identify legal risks for the potential investment or the owner. We can also help you remove the intellectual property risks.",
};
const ReportVideo = {
  videoUrl: "https://www.youtube.com/watch?v=0DkVA3X0lhQ&ab_channel=OryNetwork",
};
const DueDiligence = () => {
  return (
    <div className="container mx-auto pl-10 md:pl-48">
      <TitleComponent
        title={seminarInfo.title}
        tagline={seminarInfo.tagline}
        taglineContent={seminarInfo.taglineContent}
      />
      <ReportSection videoUrl={ReportVideo.videoUrl} />
    </div>
  );
};

export default DueDiligence;
