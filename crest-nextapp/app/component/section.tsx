import React from "react";

export type SectionProps = {
  title: string;
  items: string[];
};

const Section: React.FC<SectionProps> = ({ title, items }) => (
  <div className="mb-4">
    <h3 className="font-semibold">{title}</h3>
    <ul className="list-disc list-inside">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);
export default Section;
