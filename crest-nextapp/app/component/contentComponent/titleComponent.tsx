import React from "react";

type TitleProps = {
  titleContent: any;
};

const TitleComponent: React.FC<TitleProps> = ({ titleContent }) => {
  return (
    // <div className="text-3xl font-bold mt-6 mb-6 ml-40 mr-40 pt-12">
    //   {titleContent.text}
    // </div>
    <div className="text-2xl lg:text-3xl font-bold mt-6 mb-6 px-4 sm:px-10 md:px-20 lg:px-40" style={{ maxWidth: '1200px' }}>
      {titleContent.text}
    </div>
  );
};

export default TitleComponent;
