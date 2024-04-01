import React from "react";
import TitleComponent from "@/app/component/titleComponent";
import SummaryComponent from "@/app/component/summary";
import summaryImage from "@/public/summaryImage2.png";
import Section from "@/app/component/section";
// import DownloadLinks from "@/app/component/downloadLinks";
import SeminarContentComponent from "@/app/component/seminarContent";
import SeminarLeadersComponent from "@/app/component/seminarLeader";
import GetUpdatesComponent from "@/app/component/update";
import UpcomingSeminarComponent from "@/app/component/upcomingSeminar";

const seminarInfo = {
  title: "The License-Compliant Delivery (LCD) Seminar",
  tagline: "Streamline open source license compliance in projects and products",
  taglineContent:
    "Product vendors that include open-source software in their products need to fulfill the obligations put upon them by the licenses of the open-source code they are using. Otherwise, an immediate sales and distribution stop could be enforced.",
  summaryText:
    "In this full-day seminar, you will learn everything you need to know about license-compliant delivery of products that contain open-source software. It provides an integrative perspective that shows how the legal counsel, the engineering department, and the person or office tasked with managing open source work together best. It is therefore suitable for all main stakeholders.",
  summaryImageSrc: summaryImage.src,
  lincense: "The license-compliant delivery workflow",
  targetAudience: [
    "• Engineering program officers",
    "• Legal counsels",
    "• Automotive developers",
  ],
  relatedSeminarsUrl: "",
};
const seminarContentData = {
  sections: [
    {
      title: "A. Open source licenses",
      items: [
        "Open source licenses",
        "The copyleft obligation",
        "The state of open source licensing",
      ],
    },
  ],
  downloadLinks: [
    { language: "English", url: "/path-to-english-pdf" },
    { language: "Deutsch", url: "/path-to-deutsch-pdf" },
  ],
  contactUrl: "/contact",
};

const seminarLeadersData = [
  {
    name: "Prof. Dr. Dirk Riehle",
    imageSrc: "/Dirk.png",
  },
];

const upcomingSeminar = {
  info: "The seminar is currently being provided as an in-house seminar only.\n\nThe material covers significantly more than 8 hours and will be customized to your needs. ",
  contactUrl: "",
};

const ktsanity = () => {
  return (
    <div>
      <div className="container mx-auto pl-10 md:pl-48">
        <TitleComponent
          title={"seminarInfo.title"}
          tagline={"seminarInfo.tagline"}
          taglineContent={"seminarInfo.taglineContent"}
        />
      </div>
      {/* <div className="container mx-auto pl-10 md:pl-48">
        <TitleComponent
          title={seminarInfo.title}
          tagline={seminarInfo.tagline}
          taglineContent={seminarInfo.taglineContent}
        />
        <SummaryComponent
          summaryText={seminarInfo.summaryText}
          summaryImageSrc={seminarInfo.summaryImageSrc}
          lincense={seminarInfo.lincense}
          targetAudience={seminarInfo.targetAudience}
          relatedSeminarsUrl={seminarInfo.relatedSeminarsUrl}
        />
        <SeminarContentComponent
          sections={seminarContentData.sections}
          downloadLinks={seminarContentData.downloadLinks}
          contactUrl={seminarContentData.contactUrl}
        />
        <SeminarLeadersComponent leaders={seminarLeadersData} />
        <UpcomingSeminarComponent
          info={upcomingSeminar.info}
          contactUrl={upcomingSeminar.contactUrl}
        />
        <GetUpdatesComponent />
      </div> */}
    </div>
  );
};

export default ktsanity;
