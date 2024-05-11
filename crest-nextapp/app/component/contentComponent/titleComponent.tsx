import React from "react";

type TitleProps = {
  titleContent: any;
};

const TitleComponent: React.FC<TitleProps> = ({ titleContent }) => {
  return (
    <div className="text-3xl font-bold mt-6 mb-6 ml-40 mr-40 pt-12">
      {titleContent.text}
    </div>
  );
};

export default TitleComponent;
