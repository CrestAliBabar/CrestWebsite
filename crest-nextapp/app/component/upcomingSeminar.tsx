import React from "react";

type upcomingSeminar = {
  info: string;
  contactUrl: string;
};

const UpcomingSeminarComponent: React.FC<upcomingSeminar> = ({
  info,
  contactUrl,
}) => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-6">Upcoming Seminar</h2>
      <h3 className="text-l mb-6">{info}</h3>
      <div>
        <h3 className="inline text-l mb-6">You can also view </h3>
        <a href={contactUrl} className="text-blue-600 underline">
          contact us
        </a>{" "}
        to inquire about in-house seminars.
      </div>
    </div>
  );
};

export default UpcomingSeminarComponent;
