import React from "react";

type ProfessorComponentProps = {
  name: string;
  description: JSX.Element; // allows passing complex HTML content
  imageUrl: string;
};

const ProfileComponent: React.FC<ProfessorComponentProps> = ({
  name,
  description,
  imageUrl,
}) => {
  return (
    <div className="flex justify-center p-6">
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-6">{name}</h2>
        <img src={imageUrl} alt={name} className="w-2/5 h-32.5 mt-4" />
        <p className="text-l mt-3">{name}</p>
      </div>
      <div className="mt-8">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProfileComponent;
