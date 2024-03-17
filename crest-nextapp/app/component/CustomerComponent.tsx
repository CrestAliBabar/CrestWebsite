import React from "react";

type CustomerProps = {
  contactUrl: string;
};

const CustomerComponent: React.FC<CustomerProps> = ({ contactUrl }) => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Customers</h2>
      <h3 className="text-l mb-6">
        Customer references are available upon request.
      </h3>
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

export default CustomerComponent;
