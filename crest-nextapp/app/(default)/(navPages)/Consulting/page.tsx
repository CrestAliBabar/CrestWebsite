import React from "react";
import CommonPageComponent from "@/app/component/commonPageComponent";

const Consulting = () => {
  const dummyData = [
    {
      title: "Short to mid-term consulting",
      pageName: "Advisory",
      description:
        "Use our expertise to solve your business challenges! For companies from all industries who want to use the power of open source (or need to defend against it).",
      imageUrl:
        "https://i0.wp.com/bayave.com/wp-content/uploads/2023/05/Image-Consulting.png?w=1728&ssl=1",
    },
    {
      title: "Long-term advisory services",
      pageName: "Project",
      description:
        "We provide long-term advisory services for commercial open source firms and everyone who uses open source as a strategy to achieve business goals.",
      imageUrl:
        "https://i0.wp.com/bayave.com/wp-content/uploads/2023/05/Image-Newsletter.png?w=1728&ssl=1",
    },
    // Add more data as needed
  ];
  const pageInfo = {
    heading: "Consulting and Advisory",
    description:
      "Consulting and advisory services on open source, inner source, and product strategy.",
    tabPage: "Consulting",
  };
  return (
    <div className="px-28">
      <CommonPageComponent componentData={dummyData} pageInfo={pageInfo} />
    </div>
  );
};

export default Consulting;
