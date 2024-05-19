"use client"

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AosComponent = () => {

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });
  return <></> ;
};

export default AosComponent;
