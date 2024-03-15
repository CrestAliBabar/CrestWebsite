import React from 'react'
import CommonPageComponent from "@/app/component/commonPageComponent";

const dummyData = [
  {
    title: "Software composition analysis",
    subtitle: "Subtitle for the first section",
    description:
      "We take stock and create a software bill of materials of your code base! For everyone who wants to program new functions, not clean up legal debt.",
    imageUrl: "https://i0.wp.com/bayave.com/wp-content/uploads/2023/05/Image-SCA-Services.png?w=1728&ssl=1",
  },
  {
    title: "Open source due diligence",
    subtitle: "Subtitle for the second section",
    description:
      "We find and help resolve intellectual property challenges resulting from open-source code! For use in mergers & acquisitions, intellectual property cleanups, and related activities.",
    imageUrl: "	https://i0.wp.com/bayave.com/wp-content/uploads/2023/05/Image-Due-Diligence.png?w=1728&ssl=1",
  },
  // Add more data as needed
];
const pageInfo = {
  heading:"Structured Services",
  description:"Competitively priced open source license clearing and due diligence services."
}


const ScaServices = () => {
  return (
    <CommonPageComponent componentData={dummyData}  pageInfo={pageInfo} />
  )
}

export default ScaServices