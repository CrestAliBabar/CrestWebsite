"use client"
import React from "react";


const GlowingDotButton: React.FC<{
  href: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}> = ({ href, children, style, className }) => {
  return (
    <div className="relative inline-block group hover:scale-110 transition-transform duration-300">
      {/* Floating glowing dots with enhanced glow */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 animate-ping group-hover:animate-ping"
          style={{
            background: '#d4a017',
            boxShadow: '0 0 20px #d4a017, 0 0 40px #d4a017, 0 0 60px #d4a017',
            borderRadius: '50%',
            left: `${Math.cos(i * Math.PI / 4) * 70 + 50}%`,
            top: `${Math.sin(i * Math.PI / 4) * 70 + 50}%`,
            animationDelay: `${i * 0.15}s`,
            animationDuration: '3s'
          }}
        />
      ))}

      {/* Enhanced glow effect */}
      <div 
        className="absolute -inset-2 rounded-xl blur-xl animate-pulse group-hover:opacity-80"
        style={{
          background: 'radial-gradient(circle, rgba(212,160,23,0.6) 0%, rgba(212,160,23,0) 70%)',
          opacity: 0.8
        }}
      />

      {/* Extra glow layer */}
      <div 
        className="absolute -inset-1 rounded-xl blur-md group-hover:opacity-70"
        style={{
          background: 'radial-gradient(circle, rgba(212,160,23,0.8) 0%, rgba(212,160,23,0) 60%)',
          opacity: 0.6
        }}
      />

      {/* Main button with heartbeat animation */}
      <a
        href={href}
        className="relative flex max-w-full flex-row items-center rounded-xl px-6 py-3 font-semibold transition-all duration-300 animate-[heartbeat_1.5s_ease-in-out_infinite] group-hover:animate-[heartbeat_1.5s_ease-in-out_infinite]"
        style={{
          ...style,
          animation: 'heartbeat 1.5s ease-in-out infinite'
        }}
      >
        {children}
      </a>

      <style jsx>{`
        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          25% {
            transform: scale(1.03);
          }
          50% {
            transform: scale(1);
          }
          75% {
            transform: scale(1.03);
          }
        }
      `}</style>
    </div>
  );
};

export default GlowingDotButton;