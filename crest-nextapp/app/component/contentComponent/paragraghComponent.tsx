import React from "react";

type ParagraphProps = {
  paragraphContent: any;
};

const ParagraphComponent: React.FC<ParagraphProps> = ({ paragraphContent }) => {
  return (
    <div className="text-lg font-normal mt-6 mb-12 px-4 sm:px-10 md:px-20 lg:px-40" style={{ maxWidth: '1200px' }}>
      {paragraphContent.text}
    </div>
  );
};

export default ParagraphComponent;
