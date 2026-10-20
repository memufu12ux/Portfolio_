import React from 'react';
import { PORTFOLIO_CONFIG } from '../config';
import { GraduationCap, Briefcase, Cpu, Code } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const skillGroups = [
    {
      category: "Software",
      icon: Code,
      skills: [
        "Java",
        "Python",
        "Quality Assurance",
        "Software Engineering",
        "System Troubleshooting",
        "Technical Documentation",
      ],
    },
    {
      category: "Hardware",
      icon: Cpu,
      skills: [
        "Breadboard Circuit Assembly",
        "Schematic Diagram Design",
        "Circuit Testing",
        "Circuit Troubleshooting",
        "Electronic Systems",
        "Computer Hardware",
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-black/85 backdrop-blur-md border-t border-[#A020F0]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-[#C77DFF] font-semibold text-xs tracking-[0.25em] uppercase block mb-3">
            04 // SKILLS &amp; EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase">
            Technical Skills &amp; <span className="bg-gradient-to-r from-[#A020F0] to-[#C77DFF] bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="w-12 h-[2px] bg-[#A020F0] mt-4" />
        </div>

        {/* Technical Skills: Only Software & Hardware */}
        <div className="mb-16">
          <h3 className="text-xs font-mono font-bold tracking-widest text-[#C77DFF] uppercase mb-6">
            TECHNICAL SKILLS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <div
                  key={group.category}
                  className="p-6 sm:p-8 rounded-xl bg-black/50 border border-[#A020F0]/30 hover:border-[#C77DFF] transition-all duration-300 hover:bg-[#A020F0]/5 group flex flex-col justify-between shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                >
                  <div>
                    <div className="flex items-center gap-3.5 mb-6 pb-3 border-b border-white/10">
                      <div className="p-3 rounded-lg bg-[#A020F0]/20 text-[#C77DFF] group-hover:text-white transition-colors">
                        <Icon size={24} />
                      </div>
                      <div>
                        <span className="font-mono text-[11px] text-[#C77DFF] uppercase tracking-wider block">
                          CORE DOMAIN
                        </span>
                        <h4 className="text-white font-bold text-lg tracking-wide uppercase">
                          {group.category}
                        </h4>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {group.skills.map((skill) => (
                        <div
                          key={skill}
                          className="flex items-center gap-2.5 text-xs sm:text-sm text-[#C5C5D0]"
                        >
                          <span className="w-2 h-2 rounded-full bg-[#C77DFF] shadow-[0_0_8px_#C77DFF] shrink-0" />
                          <span className="font-medium text-white/90">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Education & Experience Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Education Card */}
          <div className="p-6 sm:p-8 rounded-xl bg-black/60 border border-white/10 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <div className="p-2.5 rounded-lg bg-[#A020F0]/20 text-[#C77DFF]">
                <GraduationCap size={24} />
              </div>
              <div>
                <span className="font-mono text-xs text-[#C77DFF] font-semibold tracking-wider uppercase block">
                  EDUCATION
                </span>
                <h3 className="text-lg font-bold text-white tracking-wide">
                  {PORTFOLIO_CONFIG.education.degree}
                </h3>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-[#E0AAFF]">
                  {PORTFOLIO_CONFIG.education.school}
                </h4>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#A020F0]/20 text-[#C77DFF] border border-[#A020F0]/30">
                  In Progress
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#C5C5D0] leading-relaxed">
                {PORTFOLIO_CONFIG.education.description}
              </p>
            </div>
          </div>

          {/* Practical Experience Card */}
          <div className="p-6 sm:p-8 rounded-xl bg-black/60 border border-white/10 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <div className="p-2.5 rounded-lg bg-[#A020F0]/20 text-[#C77DFF]">
                <Briefcase size={24} />
              </div>
              <div>
                <span className="font-mono text-xs text-[#C77DFF] font-semibold tracking-wider uppercase block">
                  EXPERIENCE
                </span>
                <h3 className="text-lg font-bold text-white tracking-wide">
                  {PORTFOLIO_CONFIG.experience.title}
                </h3>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-[#E0AAFF]">
                  Academic &amp; Practical Application
                </h4>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/10 text-[#C5C5D0]">
                  Ongoing
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#C5C5D0] leading-relaxed">
                {PORTFOLIO_CONFIG.experience.description}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
