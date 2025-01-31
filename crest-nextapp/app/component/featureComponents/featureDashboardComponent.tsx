import React from "react";
import { FaShieldAlt, FaLock, FaCheckCircle } from "react-icons/fa";
import InteractiveDashboardComponent from "../dashboardComponent/newInteractiveComponent";



const FeatureDashboardComponent: React.FC = () => {

  const customCursorStyle = {
    cursor: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" style="transform: rotate(-30deg);" fill="%23eabc25"><path d="M12 2L2 22l3-3 7-3 7 3 3 3L12 2z"/></svg>') 16 16, pointer`
  };

  return (
    <div className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center" data-aos="fade-up">
          <h2 className="text-base font-semibold leading-7 text-[#bc8012]">
          End-to-End AI Data Intelligence – Streamlined pipelines, infrastructure, and reporting
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Effortless Data Management
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          AI-Driven Insights & Infrastructure – From raw data to actionable intelligence.
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8" data-aos="fade-down" data-aos-delay="400">
          {/* Rounded card with gradient background */}
          <div className="relative rounded-3xl p-8 overflow-hidden bg-gradient-to-br from-[#f6e792] to-[#d4a017] transition-all duration-500 hover:shadow-xl">
            {/* White fade overlay at the edges */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-l from-white via-transparent to-white opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white opacity-10" />
            
            {/* Content container with extra padding for visual comfort */}
            <div className="relative z-10 "
            style={customCursorStyle}
            >
              <InteractiveDashboardComponent />
            </div>
          </div>
          
          {/* Bottom gradient fade */}
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-[#304e5a] pt-[7%]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureDashboardComponent;