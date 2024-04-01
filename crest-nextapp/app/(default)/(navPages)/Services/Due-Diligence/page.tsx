import ServicePagesComponent from "@/app/component/ServicePagesComponent";

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
    <ServicePagesComponent
      seminarInfo={seminarInfo}
      ReportVideo={ReportVideo}
    />
  );
};

export default DueDiligence;
