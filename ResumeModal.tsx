import React, { useState } from 'react';
import { PORTFOLIO_CONFIG } from '../config';
import { X, Download, FileText, CheckCircle2, Info, Printer, GraduationCap, Briefcase, Code, Cpu, Award } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleDownload = async () => {
    try {
      const response = await fetch(PORTFOLIO_CONFIG.resume.filePath, { method: 'HEAD' });
      if (response.ok) {
        const link = document.createElement('a');
        link.href = PORTFOLIO_CONFIG.resume.filePath;
        link.download = PORTFOLIO_CONFIG.resume.fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setDownloadNotice("Downloading your PDF resume...");
      } else {
        window.print();
        setDownloadNotice("Print / Save as PDF prompt opened. To supply your custom PDF, save it to /public" + PORTFOLIO_CONFIG.resume.filePath);
      }
    } catch {
      window.print();
      setDownloadNotice("Print prompt opened. To replace, place your custom PDF in /public" + PORTFOLIO_CONFIG.resume.filePath);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-xl bg-black border border-[#A020F0] p-6 sm:p-8 shadow-[0_0_50px_rgba(160,32,240,0.5)]">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-[#C5C5D0] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close Resume Preview"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
          <div className="p-2.5 rounded-lg bg-[#A020F0]/20 text-[#C77DFF]">
            <FileText size={24} />
          </div>
          <div>
            <span className="text-xs font-mono text-[#C77DFF] uppercase tracking-widest block">
              COMPUTER ENGINEERING &amp; QA PROFILE
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
              {PORTFOLIO_CONFIG.name}
            </h3>
          </div>
        </div>

        {/* Notice if action taken */}
        {downloadNotice && (
          <div className="mb-6 p-3.5 rounded-lg bg-[#A020F0]/15 border border-[#C77DFF] text-xs text-white flex items-center gap-2">
            <Info size={16} className="text-[#C77DFF] shrink-0" />
            <span>{downloadNotice}</span>
          </div>
        )}

        {/* Resume Content Sheet */}
        <div className="p-6 sm:p-8 rounded-lg bg-[#070709] border border-white/10 text-white space-y-6 select-text">
          {/* Resume Header */}
          <div className="border-b border-white/10 pb-4">
            <h4 className="text-xl font-black uppercase text-white tracking-wide">
              {PORTFOLIO_CONFIG.name}
            </h4>
            <p className="text-sm font-semibold text-[#C77DFF] uppercase tracking-wider mb-2">
              {PORTFOLIO_CONFIG.role}
            </p>
            <p className="text-xs text-[#C5C5D0]">
              Email: <span className="text-white font-mono">{PORTFOLIO_CONFIG.contact.email}</span> &middot; GitHub: <a href={PORTFOLIO_CONFIG.contact.github} target="_blank" rel="noreferrer" className="text-[#C77DFF] hover:underline font-mono">{PORTFOLIO_CONFIG.contact.githubDisplay}</a>
            </p>
          </div>

          {/* Professional Summary */}
          <div>
            <h5 className="text-xs font-mono font-bold text-[#C77DFF] uppercase tracking-wider mb-2">
              About Me &amp; Professional Summary
            </h5>
            <p className="text-xs sm:text-sm text-[#C5C5D0] leading-relaxed mb-2">
              {PORTFOLIO_CONFIG.introParagraph}
            </p>
            <p className="text-xs sm:text-sm text-[#C5C5D0] leading-relaxed">
              {PORTFOLIO_CONFIG.aboutExtended}
            </p>
          </div>

          {/* Education */}
          <div>
            <h5 className="text-xs font-mono font-bold text-[#C77DFF] uppercase tracking-wider mb-2 flex items-center gap-2">
              <GraduationCap size={15} />
              <span>Education</span>
            </h5>
            <div className="p-3.5 rounded-lg bg-black/50 border border-white/5 space-y-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-sm font-bold text-white">
                  {PORTFOLIO_CONFIG.education.degree}
                </span>
                <span className="text-xs font-mono text-[#C77DFF]">
                  Pursuing Degree
                </span>
              </div>
              <p className="text-xs font-semibold text-[#E0AAFF]">
                {PORTFOLIO_CONFIG.education.school}
              </p>
              <p className="text-xs text-[#C5C5D0] leading-relaxed pt-1">
                {PORTFOLIO_CONFIG.education.description}
              </p>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h5 className="text-xs font-mono font-bold text-[#C77DFF] uppercase tracking-wider mb-2 flex items-center gap-2">
              <Briefcase size={15} />
              <span>Experience</span>
            </h5>
            <div className="p-3.5 rounded-lg bg-black/50 border border-white/5 space-y-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-sm font-bold text-white">
                  {PORTFOLIO_CONFIG.experience.title}
                </span>
                <span className="text-xs font-mono text-[#C77DFF]">
                  Hands-on Application
                </span>
              </div>
              <p className="text-xs text-[#C5C5D0] leading-relaxed pt-1">
                {PORTFOLIO_CONFIG.experience.description}
              </p>
            </div>
          </div>

          {/* Featured Capstone Project */}
          <div>
            <h5 className="text-xs font-mono font-bold text-[#C77DFF] uppercase tracking-wider mb-2 flex items-center gap-2">
              <Award size={15} />
              <span>Featured Project</span>
            </h5>
            <div className="p-3.5 rounded-lg bg-black/50 border border-white/5 space-y-1.5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-sm font-bold text-white">
                  {PORTFOLIO_CONFIG.project.title}
                </span>
                <span className="text-xs font-mono text-[#C77DFF]">
                  {PORTFOLIO_CONFIG.project.role}
                </span>
              </div>
              <p className="text-xs text-[#C5C5D0] leading-relaxed">
                {PORTFOLIO_CONFIG.project.twoSentenceSummary}
              </p>
            </div>
          </div>

          {/* Technical Skills: Only Software & Hardware */}
          <div>
            <h5 className="text-xs font-mono font-bold text-[#C77DFF] uppercase tracking-wider mb-2 flex items-center gap-2">
              <Code size={15} />
              <span>Technical Skills</span>
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#C5C5D0]">
              <div className="p-3 rounded bg-black/40 border border-white/5 space-y-1.5">
                <span className="font-bold text-white block text-xs tracking-wider uppercase text-[#C77DFF]">Software</span>
                <div className="space-y-1">
                  <div>&bull; Java &amp; Python Programming</div>
                  <div>&bull; Quality Assurance (QA)</div>
                  <div>&bull; Software Engineering</div>
                  <div>&bull; System Troubleshooting &amp; Documentation</div>
                </div>
              </div>
              <div className="p-3 rounded bg-black/40 border border-white/5 space-y-1.5">
                <span className="font-bold text-white block text-xs tracking-wider uppercase text-[#C77DFF]">Hardware</span>
                <div className="space-y-1">
                  <div>&bull; Breadboard Circuit Assembly</div>
                  <div>&bull; Schematic Diagram Design</div>
                  <div>&bull; Circuit Testing &amp; Troubleshooting</div>
                  <div>&bull; Electronic Systems &amp; Computer Hardware</div>
                </div>
              </div>
            </div>
          </div>

          {/* Configuration Note */}
          <div className="p-4 rounded bg-black/60 border border-white/5 text-[11px] text-[#C5C5D0]/80">
            <strong className="text-[#C77DFF]">PDF Note:</strong> You can place your custom PDF file at <code className="text-white font-mono">/public{PORTFOLIO_CONFIG.resume.filePath}</code>.
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-[#C5C5D0]/60 text-center sm:text-left">
            Contact: <code className="text-white font-mono">{PORTFOLIO_CONFIG.contact.email}</code>
          </span>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => window.print()}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-black border border-white/20 text-xs font-semibold text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <Printer size={14} />
              <span>Print</span>
            </button>
            <button
              type="button"
              onClick={handleDownload}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-md bg-gradient-to-r from-[#A020F0] to-[#8B00FF] text-black font-extrabold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(160,32,240,0.4)] hover:shadow-[0_0_30px_rgba(160,32,240,0.7)] transition-all cursor-pointer"
            >
              <Download size={14} />
              <span>Download PDF</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
