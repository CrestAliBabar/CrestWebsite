import React from "react";
import ProfileComponent from "@/app/component/professorPage";

const profileInfo = {
  name: "Prof. Riehle",
  imageUrl: "/Dirk.png",
  description: (
    <p>
      Bayave GmbH is wholly owned and personally operated by Prof. Riehle. We
      stand by our name and quality.
      <br />
      <br />
      Prof. Riehle is the professor of open-source software at University of
      Erlangen, in Germany. ...
    </p>
  ),
};

const Company = () => {
  return (
    <div>
      {" "}
      <ProfileComponent
        name={profileInfo.name}
        description={profileInfo.description}
        imageUrl={profileInfo.imageUrl}
      />
    </div>
  );
};

export default Company;
