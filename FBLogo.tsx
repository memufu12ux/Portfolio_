import React from 'react';

interface FBLogoProps {
  className?: string;
  size?: number;
}

export const FBLogo: React.FC<FBLogoProps> = ({ className = '', size = 36 }) => {
  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:scale-105"
      >
        <defs>
          <linearGradient id="fbGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C77DFF" />
            <stop offset="50%" stopColor="#A020F0" />
            <stop offset="100%" stopColor="#8B00FF" />
          </linearGradient>
          <linearGradient id="fbGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E0AAFF" />
            <stop offset="60%" stopColor="#9D4EDD" />
            <stop offset="100%" stopColor="#5A189A" />
          </linearGradient>
          <filter id="fbGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#A020F0" floodOpacity="0.6" />
          </filter>
        </defs>

        {/* Outer subtle glow backing */}
        <g filter="url(#fbGlow)">
          {/* F Stem & Bars */}
          <path
            d="M 6 8 L 18 8 L 18 14 L 12 14 L 12 21 L 17 21 L 17 26 L 12 26 L 12 40 L 6 40 Z"
            fill="url(#fbGrad1)"
          />
          
          {/* Diagonal connector bar giving cyber aesthetic */}
          <path
            d="M 12 8 L 22 8 L 17 21 L 12 21 Z"
            fill="url(#fbGrad2)"
            opacity="0.85"
          />

          {/* B - Interlocking faceted geometric curves */}
          <path
            d="M 20 8 L 34 8 C 38.5 8 42 11.5 42 16 C 42 19.2 39.8 21.9 36.8 22.7 C 40.8 23.6 43 27 43 31 C 43 36 39 40 33.5 40 L 20 40 L 20 8 Z M 26 13 L 26 21 L 32.5 21 C 35 21 36.5 19.5 36.5 17 C 36.5 14.5 35 13 32.5 13 L 26 13 Z M 26 26 L 26 35 L 33 35 C 35.8 35 37.5 33.2 37.5 30.5 C 37.5 27.8 35.8 26 33 26 L 26 26 Z"
            fill="url(#fbGrad1)"
          />

          {/* Sharp cyber cut accent */}
          <polygon
            points="20,8 26,8 26,14 20,20"
            fill="#C77DFF"
            opacity="0.9"
          />
        </g>
      </svg>
    </div>
  );
};
