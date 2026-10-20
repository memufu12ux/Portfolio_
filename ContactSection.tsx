import React, { useState } from 'react';
import { PORTFOLIO_CONFIG } from '../config';
import { Mail, Copy, Check, Send, Download, FileText, ArrowRight, Github } from 'lucide-react';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_CONFIG.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Construct mailto link as direct fallback
    const mailtoUrl = `mailto:${PORTFOLIO_CONFIG.contact.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-black/85 backdrop-blur-md border-t border-[#A020F0]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-[#C77DFF] font-semibold text-xs tracking-[0.25em] uppercase block mb-3">
            06 // CONTACT ME
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase">
            Let&apos;s Connect &amp; <span className="bg-gradient-to-r from-[#A020F0] to-[#C77DFF] bg-clip-text text-transparent">Collaborate</span>
          </h2>
          <div className="w-12 h-[2px] bg-[#A020F0] mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Communication Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-xl bg-black/60 border border-[#A020F0]/40 shadow-[0_0_30px_rgba(160,32,240,0.15)]">
              <span className="text-xs font-mono font-semibold text-[#C77DFF] uppercase tracking-wider block mb-2">
                DIRECT INQUIRY
              </span>
              <h3 className="text-xl font-bold text-white mb-4">
                Connect with Francis Basence
              </h3>
              <p className="text-sm text-[#C5C5D0] leading-relaxed mb-6 font-normal">
                Open for technical projects, software engineering, quality assurance, hardware-software troubleshooting, and academic collaborations.
              </p>

              {/* Email Copy Box */}
              <div className="p-3.5 rounded-lg bg-black border border-white/10 flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail size={16} className="text-[#C77DFF] shrink-0" />
                  <span className="text-xs sm:text-sm font-mono text-white truncate">
                    {PORTFOLIO_CONFIG.contact.email}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded bg-white/5 hover:bg-[#A020F0]/20 text-[#C77DFF] hover:text-white transition-colors cursor-pointer shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                </button>
              </div>

              {/* GitHub Link Box */}
              <a
                href={PORTFOLIO_CONFIG.contact.github}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-lg bg-black border border-white/10 flex items-center justify-between gap-3 mb-6 hover:border-[#C77DFF] hover:bg-[#A020F0]/10 transition-colors group"
              >
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Github size={16} className="text-[#C77DFF] shrink-0 group-hover:text-white transition-colors" />
                  <span className="text-xs sm:text-sm font-mono text-white truncate">
                    {PORTFOLIO_CONFIG.contact.githubDisplay}
                  </span>
                </div>
                <ArrowRight size={14} className="text-[#C77DFF] group-hover:translate-x-1 transition-transform shrink-0" />
              </a>

              {copied && (
                <div className="mb-4 text-xs font-mono text-green-400 flex items-center gap-1.5">
                  <Check size={12} />
                  <span>Email address copied to clipboard!</span>
                </div>
              )}

              {/* Direct Mailto Action */}
              <a
                href={`mailto:${PORTFOLIO_CONFIG.contact.email}?subject=${encodeURIComponent(
                  PORTFOLIO_CONFIG.contact.subject
                )}`}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-gradient-to-r from-[#A020F0] to-[#8B00FF] text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(160,32,240,0.4)] hover:shadow-[0_0_30px_rgba(160,32,240,0.7)] transition-all"
              >
                <span>OPEN EMAIL CLIENT</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Resume Quick Access Banner */}
            <div className="p-6 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#A020F0]/15 text-[#C77DFF]">
                  <FileText size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase">
                    Francis Basence Resume
                  </h4>
                  <span className="text-xs text-[#C5C5D0]/70">
                    Computer Engineering &amp; QA Profile
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded border border-[#A020F0]/80 text-xs font-semibold text-[#C77DFF] hover:text-white hover:bg-[#A020F0]/20 transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Preview</span>
                <Download size={14} />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl bg-black/40 border border-[#A020F0]/30 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-[#C5C5D0]/80 mb-6">
                Fill in the details below to send a message directly to Francis.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-lg bg-[#A020F0]/15 border border-[#C77DFF] text-center space-y-3">
                  <Check size={32} className="text-[#C77DFF] mx-auto" />
                  <h4 className="text-base font-bold text-white">
                    Message Dispatched
                  </h4>
                  <p className="text-xs text-[#C5C5D0] leading-relaxed">
                    Thank you for reaching out! Your email application has opened with your inquiry pre-filled to {PORTFOLIO_CONFIG.contact.email}.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="text-xs font-mono text-[#C77DFF] hover:underline pt-2 inline-block cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-semibold text-[#C77DFF] uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-2.5 rounded-md bg-black border border-white/10 text-white text-sm focus:border-[#C77DFF] focus:outline-none focus:ring-1 focus:ring-[#A020F0] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-semibold text-[#C77DFF] uppercase tracking-wider mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@example.com"
                        className="w-full px-4 py-2.5 rounded-md bg-black border border-white/10 text-white text-sm focus:border-[#C77DFF] focus:outline-none focus:ring-1 focus:ring-[#A020F0] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-[#C77DFF] uppercase tracking-wider mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Collaboration / Technical Project Inquiry"
                      className="w-full px-4 py-2.5 rounded-md bg-black border border-white/10 text-white text-sm focus:border-[#C77DFF] focus:outline-none focus:ring-1 focus:ring-[#A020F0] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-[#C77DFF] uppercase tracking-wider mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your technical project, software testing needs, or collaboration idea..."
                      className="w-full px-4 py-2.5 rounded-md bg-black border border-white/10 text-white text-sm focus:border-[#C77DFF] focus:outline-none focus:ring-1 focus:ring-[#A020F0] transition-colors resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-black border border-[#A020F0] text-white hover:bg-[#A020F0]/20 hover:border-[#C77DFF] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(160,32,240,0.3)] hover:shadow-[0_0_25px_rgba(160,32,240,0.5)] cursor-pointer"
                  >
                    <span>SEND MESSAGE</span>
                    <Send size={15} className="text-[#C77DFF]" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
