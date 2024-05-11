import React from "react";

type HeadingProps = {
  headingContent: any;
};

const HeadingComponent: React.FC<HeadingProps> = ({ headingContent }) => {
  return (
    <div className="text-xl font-bold mt-6 mb-6 ml-40 mr-40">
      {headingContent.text}
    </div>
  );
};

export default HeadingComponent;
