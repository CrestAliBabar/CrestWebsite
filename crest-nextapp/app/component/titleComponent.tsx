import React from "react";

type TitleProps = {
  title: string;
  tagline: string;
  taglineContent: string;
};

const TitleComponent: React.FC<TitleProps> = ({
  title,
  tagline,
  taglineContent,
}) => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <h2 className="text-xl font-bold mb-6">{tagline}</h2>
      <p className="mt-4 whitespace-pre-line">{taglineContent}</p>
    </div>
  );
};

export default TitleComponent;
