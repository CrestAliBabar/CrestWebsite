import React from "react";
import { getLayoutSettings } from "@/sanity/sanity-utils";

export default async function  Footer () {
  const layoutSetting = await getLayoutSettings();
  return (
    <footer
      style={{ backgroundColor: layoutSetting[0].backgroundColor.value }}
      className="text-white p-5 w-full"
    >
      <div className="container mx-auto flex flex-wrap p-1.5 flex-col md:flex-row justify-between items-center">
        <h3 className="text-white p-3 font-bold mx-40">Crest Technology</h3>
        <div className="flex">
          {" "}
          {/* Adjust the percentage as needed */}
          <a href="/" className="underline">
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

