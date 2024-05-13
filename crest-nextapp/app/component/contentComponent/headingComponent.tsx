import React from "react";

type HeadingProps = {
  headingContent: any;
};

const HeadingComponent: React.FC<HeadingProps> = ({ headingContent }) => {
  return (
    <div className="text-lg md:text-xl lg:text-2xl font-bold mt-6 mb-6 px-4 sm:px-10 md:px-20 lg:px-40" style={{ maxWidth: '1200px' }}>
      {headingContent.text}
    </div>
  );
};

export default HeadingComponent;
