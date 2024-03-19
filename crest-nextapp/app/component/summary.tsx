import React from "react";

type SummaryProps = {
  summaryText: string;
  summaryImageSrc: string;
  lincense: string;
  targetAudience: string[];
  relatedSeminarsUrl: string;
};

const SummaryComponent: React.FC<SummaryProps> = ({
  summaryText,
  summaryImageSrc,
  lincense,
  targetAudience,
  relatedSeminarsUrl,
}) => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-6">Summary</h2>
      <h3 className="text-l mb-6">{summaryText}</h3>
      <img src={summaryImageSrc} alt="Summary" className="w-3/4 h-auto" />
      <h3 className="text-l mb-6">{lincense}</h3>
      <div className="target-audience">
        <h3 className="text-l font-bold mb-6">Target audience</h3>
        <ul className="text-l mb-6">
          {targetAudience.map((audience, index) => (
            <li key={index}>{audience}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-l font-bold mb-6">Related seminars</h3>
        <h3 className="inline text-l mb-6">You may also like our </h3>
        <a
          href={relatedSeminarsUrl}
          className="text-blue-600 hover:text-blue-800 underline"
        >
          open source business (strategy) seminar.
        </a>
      </div>
    </div>
  );
};
export default SummaryComponent;
