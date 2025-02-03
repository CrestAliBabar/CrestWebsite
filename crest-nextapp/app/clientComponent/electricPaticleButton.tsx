"use client"
import React from 'react';

type ElectricParticleWrapperProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const ElectricParticleWrapper: React.FC<ElectricParticleWrapperProps> = ({
  href,
  children,
  className = "",
  style = {},
}) => {
  // Remove any shadow classes from the incoming className
  const cleanClassName = className.replace(/shadow-\[[^\]]*\]/g, '');

  return (
    <div className="relative inline-block group hover:scale-110 transition-transform duration-300">
      {/* Electric lines radiating outward */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`electric-${i}`}
          className="absolute opacity-70"
          style={{
            width: '2px',
            height: '40px',
            background: 'linear-gradient(180deg, #e4af0e, transparent)',
            left: '50%',
            top: '50%',
            transform: `rotate(${i * 45}deg) translateY(-30px)`,
            animation: 'electricPulse 1.5s ease-in-out infinite',
            animationDelay: `${i * 0.2}s`
          }}
        />
      ))}

      {/* Electric rings */}
      {[...Array(3)].map((_, i) => (
        <div
          key={`ring-${i}`}
          className="absolute inset-0 rounded-xl"
          style={{
            border: '2px solid #e4af0e',
            animation: 'electricRing 2s ease-out infinite',
            animationDelay: `${i * 0.3}s`,
            opacity: 0.5
          }}
        />
      ))}

      {/* Enhanced glow effect */}
      <div 
        className="absolute -inset-2 rounded-xl blur-xl animate-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(228,175,14,0.6) 0%, rgba(228,175,14,0) 70%)',
          opacity: 0.8
        }}
      />

      {/* Extra glow layer */}
      <div 
        className="absolute -inset-1 rounded-xl blur-md"
        style={{
          background: 'radial-gradient(circle, rgba(228,175,14,0.8) 0%, rgba(228,175,14,0) 60%)',
          opacity: 0.6
        }}
      />

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
          ${cleanClassName}
        `}
        style={{
          ...style,
          boxShadow: 'none'
        }}
      >
        <div className="relative z-10">
          {children}
        </div>
      </a>

      <style jsx>{`
        @keyframes electricPulse {
          0% {
            transform: rotate(var(--tw-rotate)) translateY(-30px) scaleY(1);
            opacity: 0.7;
          }
          50% {
            transform: rotate(var(--tw-rotate)) translateY(-30px) scaleY(1.2);
            opacity: 1;
          }
          100% {
            transform: rotate(var(--tw-rotate)) translateY(-30px) scaleY(1);
            opacity: 0.7;
          }
        }

        @keyframes electricRing {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ElectricParticleWrapper;