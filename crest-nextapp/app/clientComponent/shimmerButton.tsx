"use client"
import React from 'react';

type ShimmerButtonWrapperProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const ShimmerButtonWrapper: React.FC<ShimmerButtonWrapperProps> = ({
  href,
  children,
  className = "",
  style = {},
}) => {
  // Remove any shadow classes from the incoming className
  const cleanClassName = className.replace(/shadow-\[[^\]]*\]/g, '');

  return (
    <div className="relative inline-block group hover:scale-110 transition-transform duration-300">
      {/* Eastern Blue gradient effect */}
      <div 
        className="absolute -inset-[2px] rounded-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(45deg, #F1F9FA, #DCEEF1, #BDDEE4, #90C6D0, #5BA4B5, #4390A3, #377083, #325C6C, #304E5A, #2B424E, #192B33)',
          backgroundSize: '200% 200%',
          animation: 'shimmerGradient 3s linear infinite'
        }}
      />

      {/* Shimmering overlay */}
      <div 
        className="absolute inset-0 rounded-xl overflow-hidden"
        style={{
          animation: 'shimmerOverlay 2s infinite'
        }}
      >
        <div 
          className="absolute w-[200%] h-full"
          style={{
            background: 'linear-gradient(to right, transparent, rgba(241,249,250,0.2), transparent)',
            transform: 'translateX(-100%)',
            animation: 'shimmerSwipe 2s infinite'
          }}
        />
      </div>

      {/* Main button */}
      <a
        href={href}
        className={`
          relative 
          flex 
          max-w-full 
          flex-row 
          items-center 
          rounded-xl 
          px-6 
          py-3 
          font-semibold 
          transition-all 
          duration-300
          backdrop-blur-sm
          ${cleanClassName}
        `}
        style={{
          ...style,
          boxShadow: 'none',
          background: 'rgba(255, 255, 255, 0.1)'
        }}
      >
        <div className="relative z-10">
          {children}
        </div>
      </a>

      <style jsx>{`
        @keyframes shimmerGradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes shimmerSwipe {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes shimmerOverlay {
          0% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
};

export default ShimmerButtonWrapper;