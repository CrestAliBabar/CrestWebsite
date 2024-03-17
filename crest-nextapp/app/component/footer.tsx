import React from "react";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#69488E" }}
      className="text-white p-5 w-full"
    >
      <div className="container mx-auto flex flex-wrap p-1.5 flex-col md:flex-row justify-between items-center">
        <h3 className="text-white p-3 font-bold mx-40">Bayave GmbH</h3>
        <div className="flex">
          {" "}
          {/* Adjust the percentage as needed */}
          <a href="#contact" className="underline">
            Contact
          </a>
          <a href="#legal" className="ml-4 underline">
            Legal Notices
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
