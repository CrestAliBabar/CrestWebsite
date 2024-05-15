import React from "react";

type TitleProps = {
  titleContent: any;
};

const TitleComponent: React.FC<TitleProps> = ({ titleContent }) => {
  return (
    <div className="text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-bold mt-6 mb-6 px-4 sm:px-10 md:px-20 lg:px-40 xl:px-64 2xl:px-80">
      {titleContent.text}
    </div>
  );
};

export default TitleComponent;
