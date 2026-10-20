import React from 'react';
import { FBLogo } from './FBLogo';
import { PORTFOLIO_CONFIG } from '../config';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black/90 backdrop-blur-md border-t border-white/10 py-12 text-[#C5C5D0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand Lockup */}
        <div className="flex items-center gap-3">
          <FBLogo size={28} />
          <div>
            <span className="text-white font-bold text-sm tracking-widest uppercase block">
              {PORTFOLIO_CONFIG.name}
            </span>
            <span className="text-xs text-[#C5C5D0]/60">
              {PORTFOLIO_CONFIG.role} Portfolio
            </span>
          </div>
        </div>

        {/* Focus Statement */}
        <div className="text-center md:text-left">
          <span className="text-xs font-mono text-[#C77DFF] tracking-widest uppercase">
            Accuracy &middot; Consistency &middot; Reliability
          </span>
        </div>

        {/* Back to top & copyright */}
        <div className="flex items-center gap-6">
          <span className="text-xs text-[#C5C5D0]/50 font-mono">
            &copy; {new Date().getFullYear()} Francis Basence
          </span>
          <button
            type="button"
            onClick={scrollToTop}
            className="p-2.5 rounded-md bg-black border border-[#A020F0]/50 text-[#C77DFF] hover:text-white hover:border-[#C77DFF] hover:bg-[#A020F0]/15 transition-all cursor-pointer"
            title="Back to top"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
};
