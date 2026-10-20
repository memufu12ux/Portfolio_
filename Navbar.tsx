import React, { useState, useEffect } from 'react';
import { FBLogo } from './FBLogo';
import { PORTFOLIO_CONFIG } from '../config';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    onNavigate(targetId);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-[#A020F0]/20 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Left: Brand Monogram + Full Name */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="group flex items-center gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A020F0]"
          aria-label="Francis Basence Portfolio Home"
        >
          <FBLogo size={34} />
          <span className="text-white font-bold text-sm sm:text-base tracking-[0.16em] uppercase whitespace-nowrap group-hover:text-white transition-colors">
            {PORTFOLIO_CONFIG.name}
          </span>
        </a>

        {/* Center: Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-8 lg:gap-10"
          aria-label="Main Navigation"
        >
          {PORTFOLIO_CONFIG.navItems.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`relative py-1 text-xs lg:text-[13px] font-semibold tracking-[0.18em] uppercase transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-1 focus-visible:ring-[#A020F0] ${
                  isActive
                    ? 'text-white'
                    : 'text-[#C5C5D0]/70 hover:text-white'
                }`}
              >
                {item.label}

                {/* Active indicator with glowing center dot */}
                {isActive && (
                  <span className="absolute -bottom-2 left-0 right-0 flex items-center justify-center">
                    <span className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#A020F0] to-transparent" />
                    <span className="absolute w-2 h-2 rounded-full bg-[#C77DFF] shadow-[0_0_10px_#C77DFF,0_0_15px_#A020F0]" />
                  </span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: "LET'S TALK ->" Action Button */}
        <div className="hidden sm:flex items-center">
          <a
            href={`mailto:${PORTFOLIO_CONFIG.contact.email}?subject=${encodeURIComponent(
              PORTFOLIO_CONFIG.contact.subject
            )}`}
            className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-md bg-black/60 border border-[#A020F0]/80 text-[#C77DFF] hover:text-white text-xs lg:text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:border-[#C77DFF] hover:bg-[#A020F0]/15 hover:shadow-[0_0_20px_rgba(160,32,240,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A020F0]"
          >
            <span>LET&apos;S TALK</span>
            <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#C5C5D0] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A020F0]"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-b border-[#A020F0]/30 px-6 py-6 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="flex flex-col gap-4">
            {PORTFOLIO_CONFIG.navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`text-sm font-semibold tracking-widest uppercase py-2 border-b border-white/5 transition-colors ${
                    isActive
                      ? 'text-[#C77DFF] font-bold'
                      : 'text-[#C5C5D0] hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}

            <div className="pt-3">
              <a
                href={`mailto:${PORTFOLIO_CONFIG.contact.email}?subject=${encodeURIComponent(
                  PORTFOLIO_CONFIG.contact.subject
                )}`}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-black border border-[#A020F0] text-[#C77DFF] text-xs font-semibold tracking-wider uppercase"
              >
                <span>LET&apos;S TALK</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
