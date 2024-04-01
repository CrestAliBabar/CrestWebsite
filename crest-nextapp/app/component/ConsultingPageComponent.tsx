import React from "react";

type ConsultingPageProps = {
  listItems: JSX.Element[];
  contactUrl: string;
  pageTitle: string;
  description: string;
};

const ConsultingPageComponent: React.FC<ConsultingPageProps> = ({
  listItems,
  contactUrl,
  pageTitle,
  description,
}) => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">{pageTitle}</h2>
      <p className="mb-6">{description}</p>
      <ul className="list-disc list-inside mb-6">
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p className="mb-6">
        Please{" "}
        <a href={contactUrl} className="text-blue-600 underline">
          contact us
        </a>{" "}
        if you would like to learn more.
      </p>
    </div>
  );
};

export default ConsultingPageComponent;
