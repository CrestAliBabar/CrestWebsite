import TrainingPagesComponent from "@/app/component/TrainingPagesComponent";
import summaryImage from "@/public/summaryImage.png";

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
    {
      title: "B. Open source risk management",
      items: [
        "Open source copyright risks",
        "Open source patent risks",
        "The open source program office",
      ],
    },
    {
      title: "C. The software bill of materials",
      items: [
        "The software bill of materials",
        "The software supply chain",
        "Software composition analysis",
      ],
    },
    {
      title: "D. License-compliant delivery",
      items: [
        "Standardized license interpretation",
        "License-compliant distribution",
        "Compliance for selected technologies",
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
  {
    name: "Dipl.-Ing. Theofanis Vassiliou-Gioles",
    imageSrc: "/Theofanis.png",
  },
];

const seminarEvent = {
  seminarEventUrl: "",
};

const LCD_Seminar = () => {
  return (
    <TrainingPagesComponent
      seminarInfo={seminarInfo}
      seminarContentData={seminarContentData}
      seminarLeadersData={seminarLeadersData}
      seminarEvent={seminarEvent}
    />
  );
};

export default LCD_Seminar;