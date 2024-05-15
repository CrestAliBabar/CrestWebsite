import React from "react";

type ParagraphProps = {
  paragraphContent: any;
};

const ParagraphComponent: React.FC<ParagraphProps> = ({ paragraphContent }) => {
  return (
    <div
      className="text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-xl font-normal mt-6 mb-12 px-4 sm:px-10 md:px-20 lg:px-40 xl:px-64 2xl:px-80"
      style={{ maxWidth: "2500px" }}>
      {paragraphContent.text}
    </div>
  );
};

export default ParagraphComponent;
