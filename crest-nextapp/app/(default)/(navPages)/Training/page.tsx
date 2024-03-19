import CommonPageComponent from "@/app/component/commonPageComponent";
import React from "react";

const dummyData = [
  {
    title: "Open source license compliance",
    pageName: "LCD-Seminar",
    description:
      "Learn how open source affects your business and develop an open source strategy for your organization! For decision makers in all industries and those consulting to them..",
    imageUrl: "https://i0.wp.com/bayave.com/wp-content/uploads/2023/05/Image-LCD-Seminar.png?w=1728&ssl=1",
  },
  {
    title: "Open source license compliance",
    pageName: "OSB-Seminar",
    description:
      "Learn how to streamline license compliance of projects and products that contain open-source code! Critical skills and knowledge for everyone involved with open-source software..",
    imageUrl: "	https://i0.wp.com/bayave.com/wp-content/uploads/2023/05/Image-OSB-Seminar.png?w=1728&ssl=1",
  },
  // Add more data as needed
];
const pageInfo = {
  heading:"Workshops and Training",
  description:"Best-in-class corporate strategy workshops and compliance training on open source.",
  tabPage: "Training"
}

const Training = () => {
  return (
    <div className="px-28">
      <CommonPageComponent componentData={dummyData}  pageInfo={pageInfo} />
    </div>
  );
};

export default Training;
