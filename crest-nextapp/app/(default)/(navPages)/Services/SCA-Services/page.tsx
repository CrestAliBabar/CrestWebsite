import React from "react";
import TitleComponent from "@/app/component/titleComponent";
import ReportSection from "@/app/component/reportSection";

const seminarInfo = {
  title: "Software Composition Analysis(SCA)",
  tagline: "Services to create a software bill of materials of your code base",
  taglineContent:
    "Fulfilling open source license obligations requires knowing what open-source code is in your products. For each product, a vendor needs to create a software bill-of-materials (“Stückliste”). Many vendors are surprised by what they find in their products when they first take a look, and doing it properly is a lot of work.\n\n We provide license and copyright text, source code scanning, and snippet matching services that help you create a software bill of materials. We do so using specially trained, competitively-priced personnel so that your developers can keep developing new features rather than having to identify legal debt in your code base.\n\n We can use your or our tools.",
};
const ReportVideo = {
  videoUrl: "https://www.youtube.com/watch?v=0DkVA3X0lhQ&ab_channel=OryNetwork",
};

const Services: React.FC = () => {
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

export default Services;
