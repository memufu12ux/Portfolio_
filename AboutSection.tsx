import React from 'react';
import { PORTFOLIO_CONFIG } from '../config';
import { Code2, ShieldCheck, Cpu, Network } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      title: "Software Engineering",
      description: "Writing maintainable applications in Java and Python, building modular logic, and developing clean solutions for system enhancement.",
      icon: Code2,
    },
    {
      title: "Quality Assurance",
      description: "Ensuring software accuracy, consistency, and reliability through structured verification, defect diagnostics, and testing methodologies.",
      icon: ShieldCheck,
    },
    {
      title: "Circuits & Electronics",
      description: "Hands-on breadboard circuit assembly, schematic diagram design, electronic hardware testing, and technical troubleshooting.",
      icon: Cpu,
    },
    {
      title: "Networking & Systems",
      description: "Configuring network infrastructure, hardware-software interfacing, and resolving technical connectivity issues.",
      icon: Network,
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-black/80 backdrop-blur-md border-t border-[#A020F0]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-[#C77DFF] font-semibold text-xs tracking-[0.25em] uppercase block mb-3">
            02 // ABOUT ME
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase">
            Computer Engineering &amp; <span className="bg-gradient-to-r from-[#A020F0] to-[#C77DFF] bg-clip-text text-transparent">Quality Assurance</span>
          </h2>
          <div className="w-12 h-[2px] bg-[#A020F0] mt-4" />
        </div>

        {/* Core Statement & Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-7">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 leading-snug">
              Passionate about emerging technologies, resolving technical issues, and engineering reliable systems.
            </h3>
            <div className="space-y-4 text-[#C5C5D0] leading-relaxed text-sm sm:text-base font-normal">
              <p>
                {PORTFOLIO_CONFIG.introParagraph}
              </p>
              <p>
                {PORTFOLIO_CONFIG.aboutExtended}
              </p>
            </div>
          </div>

          {/* Core Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-5 rounded-lg bg-black/40 border border-[#A020F0]/30 hover:border-[#C77DFF]/70 transition-all duration-300 hover:bg-[#A020F0]/5 group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded bg-[#A020F0]/15 text-[#C77DFF] group-hover:text-white transition-colors">
                      <Icon size={18} />
                    </div>
                    <h4 className="text-white font-bold text-sm tracking-wider uppercase">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="text-xs text-[#C5C5D0]/80 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
