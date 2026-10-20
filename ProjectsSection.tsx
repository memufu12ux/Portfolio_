import React, { useState } from 'react';
import { PORTFOLIO_CONFIG } from '../config';
import { 
  FileCheck2, 
  ExternalLink, 
  Bug, 
  CheckCircle, 
  ArrowUpRight, 
  X, 
  Layers, 
  ShieldAlert, 
  Activity,
  Award
} from 'lucide-react';

interface QAProject {
  id: string;
  title: string;
  category: string;
  summary: string;
  focus: string;
  testCasesCount: number;
  defectsResolved: number;
  testingTypes: string[];
  toolsUsed: string[];
  caseStudyDetails: {
    objective: string;
    scope: string;
    sampleDefectReport: {
      id: string;
      title: string;
      severity: string;
      steps: string[];
      expected: string;
      actual: string;
    };
    results: string[];
  };
}

export const ProjectsSection: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<QAProject | null>(null);

  const projects: QAProject[] = [
    {
      id: 'nexus-parking-system',
      title: PORTFOLIO_CONFIG.project.title,
      category: 'Capstone Project — Software Design',
      summary: PORTFOLIO_CONFIG.project.twoSentenceSummary,
      focus: 'Real-time parking slot availability, reservation state management, vehicle tracking, admin dashboard & UAT defect triage',
      testCasesCount: 58,
      defectsResolved: 17,
      testingTypes: ['Quality Assurance', 'Functional Testing', 'Reservation State Testing', 'UAT Verification'],
      toolsUsed: ['Java / Python', 'Database Verification', 'TestRail', 'Jira'],
      caseStudyDetails: {
        objective: 'Develop and validate a computerized Parking Slot Reservation & Management System that eliminates parking congestion and reduces driver search time through real-time slot monitoring.',
        scope: 'Slot status tracking (available vs. occupied), driver slot booking, administrative parking management, vehicle entry/exit logging, and reservation timeouts.',
        sampleDefectReport: {
          id: 'NEXUS-BUG-018',
          title: 'Concurrent slot reservation allows two drivers to reserve the same parking slot simultaneously',
          severity: 'Critical / High Priority',
          steps: [
            'Open parking floor map on two separate sessions.',
            'Select the same vacant parking slot (Slot A-04) simultaneously.',
            "Click 'Confirm Reservation' on both clients within 500ms of each other.",
          ],
          expected: "First incoming transaction reserves the slot; second transaction receives immediate notification: 'Slot already reserved, please choose another slot.'",
          actual: 'Both transactions succeeded in creating confirmed reservations for Slot A-04 due to missing atomic database lock.',
        },
        results: [
          'Identified and resolved race condition in slot reservation API with transactional mutex locks.',
          'Achieved 100% test pass rate for parking slot occupancy detection and status updates.',
          'Validated responsive user interface for both drivers and parking facility administrators.',
        ],
      },
    },
    {
      id: 'api-validation',
      title: 'RESTful API Schema & Security Boundary Test Suite',
      category: 'Backend & API QA',
      summary: 'Automated Postman test collections verifying endpoint schemas, Bearer authentication, rate-limiting, and payload injection boundaries.',
      focus: 'Status code accuracy, payload validation, edge-case headers, token expiration',
      testCasesCount: 64,
      defectsResolved: 19,
      testingTypes: ['API Testing', 'Contract Testing', 'Security Boundary', 'Error Handling'],
      toolsUsed: ['Postman', 'Swagger / OpenAPI', 'JSON Schema Validator', 'cURL'],
      caseStudyDetails: {
        objective: 'Guarantee API contract consistency, preventing unhandled 500 server crashes and ensuring predictable error responses for client developers.',
        scope: 'Authentication endpoints, CRUD resources, pagination limits, filter combinations, and error format uniformity.',
        sampleDefectReport: {
          id: 'BUG-219',
          title: 'Passing negative integer in ?page_size query parameter results in unhandled 500 internal server error',
          severity: 'Major',
          steps: [
            'Issue GET request to /api/v1/orders?page_size=-1 with valid Bearer token.',
          ],
          expected: 'Return HTTP 400 Bad Request with standardized error message: "page_size must be a positive integer between 1 and 100".',
          actual: 'Database throws unhandled SQL syntax exception; API returns HTTP 500 with exposed stack trace in payload.',
        },
        results: [
          'Standardized all error response payloads to RFC 7807 problem details.',
          'Zero unhandled 500 exceptions remaining across tested endpoints.',
          'Integrated automated Postman collection into daily quality verification.',
        ],
      },
    },
    {
      id: 'cross-browser',
      title: 'Cross-Browser & Responsive Web Layout Audit',
      category: 'Compatibility QA',
      summary: 'Rigorous cross-platform verification across Chrome, Safari, Firefox, and Edge on Windows, macOS, iOS, and Android viewport breakpoints.',
      focus: 'Flexbox wrapping, touch vs click listeners, sticky headers, CSS grid alignments',
      testCasesCount: 36,
      defectsResolved: 12,
      testingTypes: ['Cross-Browser', 'Responsive Layout', 'Usability', 'Visual Regression'],
      toolsUsed: ['Chrome DevTools', 'Safari Web Inspector', 'BrowserStack', 'Lighthouse'],
      caseStudyDetails: {
        objective: 'Ensure seamless usability and visual fidelity for users regardless of operating system, browser engine, or display resolution.',
        scope: 'Desktop monitors (1920x1080, 1440x900), tablets (iPad Air / Mini), mobile viewports (iPhone 14/15, Pixel 7/8).',
        sampleDefectReport: {
          id: 'BUG-312',
          title: 'Sticky data grid header collapses and overlaps rows on WebKit (Safari on macOS)',
          severity: 'Moderate',
          steps: [
            'Open Analytics dashboard on Safari 17.2.',
            'Scroll vertically past the initial 20 rows of the data grid.',
          ],
          expected: 'Header remains pinned with solid background and correct z-index layering.',
          actual: 'Sticky header loses background opacity due to missing backdrop-filter prefix, rendering text unreadable over table rows.',
        },
        results: [
          'Fixed 8 Safari-specific rendering quirks before major product release.',
          'Verified 100% responsive conformity down to 320px mobile viewports.',
          'Achieved smooth, glitch-free scroll performance across all target browsers.',
        ],
      },
    },
  ];

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-black/85 backdrop-blur-md border-t border-[#A020F0]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-[#C77DFF] font-semibold text-xs tracking-[0.25em] uppercase block mb-3">
              05 // PROJECTS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase">
              Featured Capstone &amp; <span className="bg-gradient-to-r from-[#A020F0] to-[#C77DFF] bg-clip-text text-transparent">QA Work</span>
            </h2>
            <div className="w-12 h-[2px] bg-[#A020F0] mt-4" />
          </div>
          <p className="text-xs sm:text-sm text-[#C5C5D0]/80 max-w-md">
            Academic software design capstone project and technical quality assurance deliverables.
          </p>
        </div>

        {/* Featured Capstone Project Card (Full Width) */}
        <div className="mb-10 p-6 sm:p-8 rounded-xl bg-gradient-to-b from-[#A020F0]/15 via-black/60 to-black/80 border-2 border-[#C77DFF]/70 shadow-[0_0_35px_rgba(160,32,240,0.35)] relative overflow-hidden group">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded bg-[#A020F0]/30 text-[#C77DFF]">
                <Award size={16} />
              </span>
              <span className="text-xs font-mono font-bold text-[#C77DFF] tracking-wider uppercase">
                FEATURED CAPSTONE PROJECT &middot; SOFTWARE DESIGN
              </span>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded bg-[#A020F0]/25 text-[#E0AAFF] border border-[#A020F0]/50 font-semibold">
              Role: Quality Assurance (QA) Engineer
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white mb-3 group-hover:text-[#E0AAFF] transition-colors leading-snug">
            {PORTFOLIO_CONFIG.project.title}
          </h3>

          {/* Exactly 2 Sentences About Project as Requested */}
          <p className="text-sm sm:text-base text-[#C5C5D0] leading-relaxed mb-6 font-normal">
            {PORTFOLIO_CONFIG.project.twoSentenceSummary}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 pt-4 border-t border-white/10">
            <div>
              <span className="text-xs font-mono text-[#C77DFF] block mb-1">
                INSTITUTION &amp; COURSE:
              </span>
              <p className="text-xs text-[#C5C5D0]">
                {PORTFOLIO_CONFIG.project.institution} &middot; {PORTFOLIO_CONFIG.project.course}
              </p>
            </div>
            <div>
              <span className="text-xs font-mono text-[#C77DFF] block mb-1">
                QA FOCUS &amp; METRICS:
              </span>
              <p className="text-xs text-[#C5C5D0]">
                58 Designed Test Cases &middot; 17 Defects Documented &amp; Resolved &middot; Slot Availability &amp; Booking State Testing
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <div className="flex flex-wrap gap-2">
              {['Slot Monitoring', 'Quality Assurance', 'Reservation Logic', 'UAT Verification'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded bg-black/60 border border-[#A020F0]/40 text-[#C77DFF]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setActiveModalProject(projects[0])}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-gradient-to-r from-[#A020F0] to-[#8B00FF] text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer shadow-[0_0_15px_rgba(160,32,240,0.4)]"
            >
              <span>Examine Capstone Case Study</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>

        {/* Secondary QA Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.slice(1).map((project) => (
            <div
              key={project.id}
              className="p-6 sm:p-8 rounded-xl bg-black/40 border border-[#A020F0]/30 hover:border-[#C77DFF] transition-all duration-300 hover:bg-[#A020F0]/5 flex flex-col justify-between group shadow-[0_0_20px_rgba(0,0,0,0.5)]"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-mono font-semibold text-[#C77DFF] tracking-wider uppercase">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-[#C5C5D0]/70">
                      {project.testCasesCount} Test Cases
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#E0AAFF] transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-sm text-[#C5C5D0] leading-relaxed mb-5 font-normal">
                  {project.summary}
                </p>

                {/* Focus Areas */}
                <div className="mb-6 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                  <span className="text-xs font-mono text-[#C77DFF] block mb-1">
                    FOCUS METRICS:
                  </span>
                  <p className="text-xs text-[#C5C5D0]/90">
                    {project.focus}
                  </p>
                </div>

                {/* Testing Types Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.testingTypes.map((type) => (
                    <span
                      key={type}
                      className="text-xs px-2.5 py-1 rounded bg-[#A020F0]/10 border border-[#A020F0]/30 text-[#C77DFF]"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action: View Test Artifact Details */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-[#C5C5D0]/60">
                  {project.defectsResolved} Defect Reports Logged
                </span>
                
                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C77DFF] hover:text-white uppercase tracking-wider transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#A020F0]"
                >
                  <span>Examine Test Case</span>
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study / Defect Artifact Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl bg-black border border-[#A020F0] p-6 sm:p-8 shadow-[0_0_50px_rgba(160,32,240,0.4)]">
            
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-[#C5C5D0] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div className="mb-6 pr-8">
              <span className="text-xs font-mono text-[#C77DFF] tracking-widest uppercase block mb-1">
                PROJECT DETAIL // {activeModalProject.category}
              </span>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                {activeModalProject.title}
              </h3>
            </div>

            {/* Objective & Scope */}
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="text-xs font-mono font-bold text-[#C77DFF] tracking-wider uppercase mb-1">
                  Project Objective
                </h4>
                <p className="text-sm text-[#C5C5D0] leading-relaxed">
                  {activeModalProject.caseStudyDetails.objective}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono font-bold text-[#C77DFF] tracking-wider uppercase mb-1">
                  Scope &amp; Architecture
                </h4>
                <p className="text-sm text-[#C5C5D0] leading-relaxed">
                  {activeModalProject.caseStudyDetails.scope}
                </p>
              </div>
            </div>

            {/* Sample Defect Reproduction Card */}
            <div className="mb-6 p-5 rounded-lg bg-black border border-[#A020F0]/50 shadow-[0_0_15px_rgba(160,32,240,0.15)]">
              <div className="flex items-center justify-between gap-4 mb-3 pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Bug size={16} className="text-[#C77DFF]" />
                  <span className="text-xs font-mono font-bold text-white">
                    SAMPLE BUG REPORT: {activeModalProject.caseStudyDetails.sampleDefectReport.id}
                  </span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#A020F0]/20 text-[#C77DFF] border border-[#A020F0]/40">
                  {activeModalProject.caseStudyDetails.sampleDefectReport.severity}
                </span>
              </div>

              <h5 className="text-sm font-bold text-white mb-3">
                {activeModalProject.caseStudyDetails.sampleDefectReport.title}
              </h5>

              <div className="space-y-2 text-xs mb-3">
                <span className="text-[#C77DFF] font-mono block">Steps to Reproduce (STR):</span>
                <ol className="list-decimal list-inside space-y-1 text-[#C5C5D0] pl-1">
                  {activeModalProject.caseStudyDetails.sampleDefectReport.steps.map((st, i) => (
                    <li key={i}>{st}</li>
                  ))}
                </ol>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2 border-t border-white/5">
                <div>
                  <span className="text-[#C77DFF] font-mono block mb-1">Expected Result:</span>
                  <p className="text-[#C5C5D0]">{activeModalProject.caseStudyDetails.sampleDefectReport.expected}</p>
                </div>
                <div>
                  <span className="text-[#C77DFF] font-mono block mb-1">Actual Result:</span>
                  <p className="text-red-300">{activeModalProject.caseStudyDetails.sampleDefectReport.actual}</p>
                </div>
              </div>
            </div>

            {/* Results Delivered */}
            <div className="mb-6">
              <h4 className="text-xs font-mono font-bold text-[#C77DFF] tracking-wider uppercase mb-2">
                Quality Verification Outcomes
              </h4>
              <ul className="space-y-2">
                {activeModalProject.caseStudyDetails.results.map((res, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#C5C5D0]">
                    <CheckCircle size={15} className="text-[#C77DFF] mt-0.5 shrink-0" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-white/10 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="px-5 py-2 rounded bg-black border border-[#A020F0] text-xs font-semibold text-white hover:bg-[#A020F0]/20 transition-colors cursor-pointer"
              >
                Close Project Details
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
