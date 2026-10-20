import React from 'react';
import { PORTFOLIO_CONFIG } from '../config';
import { Download, ArrowRight } from 'lucide-react';

interface HeroProps {
  onViewWork: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewWork, onOpenResume }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-transparent text-white flex flex-col justify-between overflow-hidden pt-28 pb-12 sm:pb-16 select-none"
    >
      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[calc(100vh-12rem)]">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-8 z-10 flex flex-col justify-center py-6 sm:py-10">
            {/* Introductory Label */}
            <div className="mb-4 sm:mb-6">
              <span className="text-[#C77DFF] font-semibold text-xs sm:text-sm tracking-[0.25em] uppercase inline-block drop-shadow-[0_0_10px_rgba(199,125,255,0.4)]">
                {PORTFOLIO_CONFIG.greeting}
              </span>
            </div>

            {/* Main Heading: FRANCIS BASENCE */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-black tracking-tighter leading-[0.95] mb-4 sm:mb-6 uppercase">
              <span className="text-white block sm:inline mr-0 sm:mr-4 drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]">
                {PORTFOLIO_CONFIG.firstName}
              </span>
              <span className="inline-block bg-gradient-to-r from-[#A020F0] via-[#C77DFF] to-[#8B00FF] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(160,32,240,0.5)]">
                {PORTFOLIO_CONFIG.lastName}
              </span>
            </h1>

            {/* Professional Title: QUALITY ASSURANCE. */}
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold tracking-[0.16em] uppercase text-white mb-6 sm:mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              {PORTFOLIO_CONFIG.roleFormatted}
            </h2>

            {/* Professional Introduction Paragraph */}
            <p className="text-[#C5C5D0] text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mb-8 sm:mb-10 font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              {PORTFOLIO_CONFIG.introParagraph}
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
              {/* Primary CTA */}
              <button
                type="button"
                onClick={onViewWork}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-md bg-gradient-to-r from-[#A020F0] via-[#9333EA] to-[#8B00FF] text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_0_25px_rgba(160,32,240,0.45)] hover:shadow-[0_0_35px_rgba(160,32,240,0.75)] hover:brightness-110 active:scale-[0.98] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>VIEW MY WORK</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              {/* Secondary CTA */}
              <button
                type="button"
                onClick={onOpenResume}
                className="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-md bg-black/60 border border-[#A020F0]/80 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:border-[#C77DFF] hover:bg-[#A020F0]/15 hover:shadow-[0_0_20px_rgba(160,32,240,0.4)] active:scale-[0.98] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A020F0]"
              >
                <span>DOWNLOAD RESUME</span>
                <Download
                  size={16}
                  className="text-[#C77DFF] transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </button>
            </div>

            {/* Clean negative space preserved below CTA buttons */}
          </div>

          {/* Right Column: Decorative Elements & Focus Panel */}
          <div className="lg:col-span-4 relative h-full flex flex-col justify-between py-6 lg:py-10 pointer-events-none">
            
            {/* Top Right: Vertical Indicator (01 + vertical line + dots) */}
            <div className="flex justify-end pr-2 sm:pr-4">
              <div className="flex flex-col items-center">
                {/* Number "01" & Top Indicator */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
                    01
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C77DFF] shadow-[0_0_8px_#C77DFF]" />
                </div>

                {/* Thin Vertical Purple Line with Circular Indicators */}
                <div className="relative flex flex-col items-center py-2 h-44 sm:h-52">
                  {/* The vertical hairline */}
                  <div className="absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#A020F0]/80 via-[#A020F0]/40 to-transparent" />

                  {/* 6 Circular Purple Indicators spaced vertically */}
                  <div className="relative flex flex-col justify-between h-full items-center z-10">
                    {[0, 1, 2, 3, 4, 5].map((index) => (
                      <span
                        key={index}
                        className={`w-1 h-1 rounded-full ${
                          index === 0
                            ? 'bg-[#C77DFF] shadow-[0_0_6px_#C77DFF]'
                            : 'bg-[#A020F0]/70'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Middle/Bottom Right: Professional Focus Panel */}
            <div className="flex flex-col items-start lg:items-end pr-2 sm:pr-4 mt-8 lg:mt-auto">
              <div className="text-left lg:text-right p-3 rounded-lg bg-black/30 backdrop-blur-[2px]">
                <span className="text-[#C77DFF] font-semibold text-xs tracking-[0.25em] uppercase block mb-2 drop-shadow-[0_0_8px_rgba(199,125,255,0.5)]">
                  FOCUS
                </span>
                
                <div className="space-y-1 mb-3">
                  {PORTFOLIO_CONFIG.focusWords.map((word) => (
                    <div
                      key={word}
                      className="text-[#C5C5D0] font-bold text-xs sm:text-sm tracking-[0.16em] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                    >
                      {word}
                    </div>
                  ))}
                </div>

                {/* Horizontal Accent Line under Focus */}
                <div className="w-8 h-[2px] bg-[#A020F0] shadow-[0_0_8px_rgba(160,32,240,0.8)] lg:ml-auto" />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom-Right Angular Cyber Corner Detail */}
      <div
        className="hidden md:block absolute bottom-0 right-0 w-36 h-36 lg:w-44 lg:h-44 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="cornerGlowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A020F0" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#C77DFF" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#8B00FF" stopOpacity="0.3" />
            </linearGradient>
            <filter id="cornerFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="2.5" floodColor="#A020F0" floodOpacity="0.8" />
            </filter>
          </defs>

          {/* Diagonal cut background triangle with translucent violet fill */}
          <polygon
            points="100,0 100,100 0,100"
            fill="rgba(160, 32, 240, 0.05)"
          />

          {/* Thin Glowing Diagonal Line */}
          <line
            x1="0"
            y1="100"
            x2="100"
            y2="0"
            stroke="url(#cornerGlowGrad)"
            strokeWidth="1.5"
            filter="url(#cornerFilter)"
          />

          {/* Right and bottom frame lines */}
          <line
            x1="100"
            y1="0"
            x2="100"
            y2="100"
            stroke="#A020F0"
            strokeWidth="1"
            opacity="0.6"
          />
          <line
            x1="0"
            y1="100"
            x2="100"
            y2="100"
            stroke="#A020F0"
            strokeWidth="1"
            opacity="0.6"
          />

          {/* Inner subtle diagonal arrow (↘) */}
          <path
            d="M 75 75 L 85 85 M 85 85 L 77 85 M 85 85 L 85 77"
            stroke="#C77DFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.8"
          />
        </svg>
      </div>
    </section>
  );
};
