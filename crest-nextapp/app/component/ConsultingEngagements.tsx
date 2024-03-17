import React from "react";

type ConsultingEngagementsProps = {
  listItems: JSX.Element[];
  contactUrl: string;
};

const ConsultingEngagementsComponent: React.FC<ConsultingEngagementsProps> = ({
  listItems,
  contactUrl,
}) => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Consulting Engagements</h2>
      <p className="mb-6">
        We are available for short to mid-term consulting engagements in our
        domain of expertise and excellence of...
      </p>
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

export default ConsultingEngagementsComponent;
