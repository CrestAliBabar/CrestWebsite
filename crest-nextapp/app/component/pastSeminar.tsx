import React from "react";

type passSeminar = {
  //   text: string;
  pastSeminarUrl: string;
};

const PastSeminarComponent: React.FC<passSeminar> = ({
  //   text,
  pastSeminarUrl,
}) => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-6">Past Seminar</h2>
      {/* <h3 className="text-l mb-6">{text}</h3> */}
      <div>
        <h3 className="inline text-l mb-6">You can also view </h3>
        <a
          href={pastSeminarUrl}
          className="text-blue-600 hover:text-blue-800 underline"
        >
          past public seminar instances.
        </a>
      </div>
    </div>
  );
};

export default PastSeminarComponent;
