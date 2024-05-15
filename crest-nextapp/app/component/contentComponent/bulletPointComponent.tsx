import React from "react";

type BulletPointProps = {
  bulletPointContent: any;
};

const BulletPointComponent: React.FC<BulletPointProps> = ({
  bulletPointContent,
}) => {
  return (
    <ul
      className="text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-xl font-normal mt-6 mb-12 px-4 sm:px-10 md:px-20 lg:px-40 xl:px-64 2xl:px-80 list-disc"
      style={{ maxWidth: "2500px" }}>
      {bulletPointContent.bulletPoint.map((item: string, index: number) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default BulletPointComponent;
