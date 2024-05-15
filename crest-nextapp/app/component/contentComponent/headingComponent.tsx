import React from "react";

type HeadingProps = {
  headingContent: any;
};

const HeadingComponent: React.FC<HeadingProps> = ({ headingContent }) => {
  return (
    <div
      className="text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl font-bold mt-6 mb-6 px-4 sm:px-10 md:px-20 lg:px-40 xl:px-64 2xl:px-80"
      style={{ maxWidth: "2500px" }}>
      {headingContent.text}
    </div>
  );
};

export default HeadingComponent;
