import React from "react";

type ParagraphProps = {
  paragraphContent: any;
};

const ParagraphComponent: React.FC<ParagraphProps> = ({ paragraphContent }) => {
  return (
    <div className="text-lg font-normal mt-6 mb-12 ml-40 mr-40">
      {paragraphContent.text}
    </div>
  );
};

export default ParagraphComponent;
