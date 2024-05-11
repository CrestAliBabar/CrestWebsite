import React from "react";

type SubtitleProps = {
  subtitleContent: any;
};

const SubtitleComponent: React.FC<SubtitleProps> = ({ subtitleContent }) => {
  return (
    <div className="text-2xl font-bold mt-6 mb-6 ml-40 mr-40">
      {subtitleContent.text}
    </div>
  );
};

export default SubtitleComponent;
