import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Bug, 
  Terminal, 
  Layers, 
  MonitorSmartphone, 
  FileCheck,
  ChevronRight
} from 'lucide-react';

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  deliverables: string[];
  icon: React.ElementType;
}

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('manual');

  const services: ServiceItem[] = [
    {
      id: 'manual',
      number: '01',
      title: 'Manual & Exploratory Testing',
      category: 'Core QA',
      summary: 'In-depth hands-on testing to discover subtle interface flaws, workflow bottlenecks, and edge case anomalies that automated scripts overlook.',
      deliverables: [
        'Exploratory test charers & execution notes',
        'Functional user story verification against acceptance criteria',
        'Boundary value analysis & equivalence partitioning',
        'User experience and workflow friction assessment'
      ],
      icon: CheckCircle2,
    },
    {
      id: 'defects',
      number: '02',
      title: 'Defect Tracking & Triage',
      category: 'Documentation',
      summary: 'Crystal-clear, reproducible bug reports that save developer hours and expedite resolution cycles with minimal back-and-forth.',
      deliverables: [
        'Definitive Steps to Reproduce (STR)',
        'Accurate Expected vs. Actual behavior comparisons',
        'Severity and Priority impact categorization',
        'Console logs, network traces, and environmental specs'
      ],
      icon: Bug,
    },
    {
      id: 'api',
      number: '03',
      title: 'API & Integration Verification',
      category: 'Backend QA',
      summary: 'Rigorous validation of RESTful endpoints, data schemas, response codes, and system integration points.',
      deliverables: [
        'Endpoint status code & schema validation',
        'Payload boundary & invalid input handling checks',
        'Authentication & authorization token verification',
        'Response time and data payload consistency tests'
      ],
      icon: Terminal,
    },
    {
      id: 'regression',
      number: '04',
      title: 'Regression Suites & Test Planning',
      category: 'Lifecycle QA',
      summary: 'Developing structured test suites and test matrices to protect existing functionality during continuous releases.',
      deliverables: [
        'Master test plan document & test strategies',
        'Requirements Traceability Matrix (RTM)',
        'Pre-release smoke and sanity checklists',
        'End-to-end critical path regression suites'
      ],
      icon: Layers,
    },
    {
      id: 'cross-platform',
      number: '05',
      title: 'Cross-Browser & Device Audits',
      category: 'Compatibility',
      summary: 'Validating interface consistency, responsiveness, and behavioral parity across modern desktop and mobile browsers.',
      deliverables: [
        'Responsive layout validation across desktop, tablet, and mobile',
        'Cross-browser rendering tests (Chrome, Safari, Firefox, Edge)',
        'Touch gesture and viewport resizing checks',
        'Platform-specific UI glitch identification'
      ],
      icon: MonitorSmartphone,
    },
    {
      id: 'documentation',
      number: '06',
      title: 'QA Documentation & Checklists',
      category: 'Process',
      summary: 'Creating maintainable, unambiguous QA artifacts that empower teams to sustain high release standards.',
      deliverables: [
        'Standardized test case repositories',
        'Release sign-off criteria and readiness checklists',
        'Sprint QA metrics and test execution summaries',
        'Onboarding guidelines for team testing protocols'
      ],
      icon: FileCheck,
    },
  ];

  const active = services.find((s) => s.id === selectedService) || services[0];
  const ActiveIcon = active.icon;

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-black/85 backdrop-blur-md border-t border-[#A020F0]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-[#C77DFF] font-semibold text-xs tracking-[0.25em] uppercase block mb-3">
            03 // SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase">
            Quality Assurance <span className="bg-gradient-to-r from-[#A020F0] to-[#C77DFF] bg-clip-text text-transparent">Capabilities</span>
          </h2>
          <div className="w-12 h-[2px] bg-[#A020F0] mt-4" />
        </div>

        {/* Services Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Services List (Left) */}
          <div className="lg:col-span-6 space-y-3">
            {services.map((item) => {
              const isSelected = item.id === selectedService;
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedService(item.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-lg border transition-all duration-300 flex items-center justify-between cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A020F0] ${
                    isSelected
                      ? 'bg-[#A020F0]/15 border-[#C77DFF] shadow-[0_0_20px_rgba(160,32,240,0.3)]'
                      : 'bg-black/40 border-white/10 hover:border-[#A020F0]/50 hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-[#C77DFF] font-semibold tracking-wider">
                      {item.number}
                    </span>
                    <div>
                      <h3 className="text-white font-bold text-sm sm:text-base tracking-wide">
                        {item.title}
                      </h3>
                      <span className="text-xs text-[#C5C5D0]/60">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Icon
                      size={18}
                      className={isSelected ? 'text-[#C77DFF]' : 'text-[#C5C5D0]/40'}
                    />
                    <ChevronRight
                      size={16}
                      className={`transition-transform duration-200 ${
                        isSelected ? 'text-[#C77DFF] translate-x-1' : 'text-white/20'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Service Detail Panel (Right) */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-xl bg-black/60 border border-[#A020F0]/40 shadow-[0_0_30px_rgba(160,32,240,0.15)] relative overflow-hidden">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#A020F0]/20 text-[#C77DFF]">
                  <ActiveIcon size={22} />
                </div>
                <div>
                  <span className="font-mono text-xs text-[#C77DFF] font-semibold tracking-widest uppercase">
                    SERVICE {active.number}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                    {active.title}
                  </h3>
                </div>
              </div>
            </div>

            <p className="text-[#C5C5D0] text-sm leading-relaxed mb-6 font-normal">
              {active.summary}
            </p>

            <div>
              <h4 className="text-xs font-mono font-semibold tracking-widest text-[#C77DFF] uppercase mb-4">
                Key QA Deliverables
              </h4>
              <ul className="space-y-3">
                {active.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#C5C5D0]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A020F0] mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-[#C5C5D0]/60">
                Focus: Accuracy &middot; Consistency &middot; Reliability
              </span>
              <a
                href="#contact"
                className="text-xs font-semibold tracking-wider text-[#C77DFF] hover:text-white uppercase inline-flex items-center gap-1 transition-colors"
              >
                Inquire &rarr;
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
