import React from "react";

type AdvisoryEngagementsProps = {
  listItems: JSX.Element[];
  contactUrl: string;
};

const AdvisoryEngagementsComponent: React.FC<AdvisoryEngagementsProps> = ({
  listItems,
  contactUrl,
}) => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Advisory Services</h2>
      <p className="mb-6">
        Prof. Riehle is available for mid-term to long-term advisory services in
        our domain of expertise and excellence of
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

export default AdvisoryEngagementsComponent;
