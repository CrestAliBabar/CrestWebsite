// components/NavComponent.tsx
"use client";

import React, { useState } from "react";

type NavToggleProps = {
  children: React.ReactNode;
};

const NavComponent: React.FC<NavToggleProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="md:hidden flex flex-col justify-center items-center mx-auto mb-4 md:mb-0"
      >
        <span
          className={`bg-gray-900 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-gray-900 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-gray-900 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      <div className={`md:flex ${isOpen ? "block" : "hidden"} md:block`}>
        {children}
      </div>
    </>
  );
};

export default NavComponent;
