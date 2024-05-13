import React from "react";

type BulletPointProps = {
  bulletPointContent: any;
};

const BulletPointComponent: React.FC<BulletPointProps> = ({
  bulletPointContent,
}) => {
  return (
    // <ul className="text-base mb-4 list-disc pl-8 ml-40 mr-40">
    //   {bulletPointContent.bulletPoint.map((item: string, index: number) => (
    //     <li key={index}>{item}</li>
    //   ))}
    // </ul>
    <ul className="text-base mb-4 list-disc pl-8 mx-4 sm:mx-10 md:mx-20 lg:mx-40" style={{ maxWidth: '1200px' }}>
    {bulletPointContent.bulletPoint.map((item: string, index: number) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
  );
};

export default BulletPointComponent;
