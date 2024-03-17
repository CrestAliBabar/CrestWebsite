import React from "react";

type LeaderProps = {
  name: string;
  imageSrc: string;
};

const Leader: React.FC<LeaderProps> = ({ name, imageSrc }) => (
  <div className="text-center px-4">
    <img
      src={imageSrc}
      alt={name}
      className="mx-auto"
      style={{ maxWidth: "450px", height: "auto" }}
    />
    <p className="mt-2">{name}</p>
  </div>
);

type SeminarLeadersProps = {
  leaders: LeaderProps[];
};

const SeminarLeadersComponent: React.FC<SeminarLeadersProps> = ({
  leaders,
}) => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-6">Seminar leaders</h2>
      <div className="flex flex-wrap">
        {leaders.map((leader) => (
          <Leader key={leader.name} {...leader} />
        ))}
      </div>
    </div>
  );
};

export default SeminarLeadersComponent;
