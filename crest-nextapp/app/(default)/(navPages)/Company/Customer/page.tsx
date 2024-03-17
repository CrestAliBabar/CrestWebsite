import React from "react";
import CustomerComponent from "@/app/component/CustomerComponent";

const customerInfo = { contactUrl: "" };

const Customer = () => {
  return (
    <div className="container mx-auto pl-10 md:pl-48">
      <CustomerComponent contactUrl={customerInfo.contactUrl} />
    </div>
  );
};

export default Customer;
