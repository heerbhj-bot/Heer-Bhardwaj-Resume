import React, { useState } from 'react';
import { X, Printer, Copy, Check, ExternalLink, Download } from 'lucide-react';
import { PROFILE_DATA } from '../data/careerData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
HEER BHARDWAJ
${PROFILE_DATA.email} | ${PROFILE_DATA.phone} | ${PROFILE_DATA.linkedin}
Singapore

PROFESSIONAL SUMMARY
${PROFILE_DATA.summary}

PROFESSIONAL EXPERIENCE
ERNST & YOUNG - Singapore (May 2026 - Present)
Business Consulting – Supply Chain Operations & Transformation Intern
• Translated planning expertise into functional platform capabilities by supporting implementation of a digital inventory replenishment platform for one of the world's largest FMCG organisations. Enabling 5 global markets to shift from manual Excel-driven planning to a standardised digital workflow.
• Partnered with client stakeholders and development teams to document business requirements and platform logics, refine user stories and support agile project delivery through Jira.
• Led User Acceptance testing (UAT) sessions with client users, validating business scenarios, planning logic and platform functionality while closely coordinating issue resolution with development teams.
• Developed UAT trackers, testing dashboards and project progress reports for client, improving project governance and release readiness throughout implementation.

GALAXY SURFACTANTS LTD - India (Oct 2021 - May 2025)
Supply Planner – Officer (Progressed from Intern -> Management Trainee -> Junior officer -> Officer)
• Managed end-to-end supply planning and S&OP for 50 speciality chemical SKUs (700 MT) across Europe, North America and India, translating demand requirements and forecasts into production and distribution plans while balancing service levels, capacity and inventory.
• Translated production and demand requirements into raw-material procurement plan for Lauryl Alcohol (~6000 MT/month, ~60% of monthly raw material demand), coordinating global suppliers and logistics partners to improve supply continuity leading reduction in stockout by 16%.
• Led cross-functional planning for 4 new product launches, translating commercial requirements into launch volume and production plans, toning manufacturing & procurement to improve operational efficiency by 35%.
• Implemented a Fixed Schedule Variable Volume production planning model, increasing operational efficiency by 27% through improved production planning and capacity utilisation.
• Initiated automation of purchase order workflows in SAP S/4 HANA, increasing on-time PO accuracy by 65%.
• Redesigned MIS dashboard for S&OP visibility and weekly D&D reporting process, driving 22% reduction in demurrage expenses over 3 years and improving cross-departmental decision-making.

EDUCATION
SINGAPORE MANAGEMENT UNIVERSITY - Singapore (Aug 2025 – Oct 2026)
Master of Business Administration (MBA)
Career Secretary, ELC MBA 2025 cohort

AHMEDABAD UNIVERSITY - India (Aug 2018 - Oct 2021)
Bachelor in Business Administration (BBA)
Secretary, The Management Club 2021 cohort

TECHNICAL & ANALYTICAL
• ERP/Business Systems: SAP S/4 HANA (PP), Microsoft PowerApps
• Analytics: Advanced Microsoft Excel, Power BI, S&OP Reporting, KPI Analysis
• Others: Python (learning) (Pandas, NumPy, Jupyter & Google Colab), Google AI Studio
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-[#1A1A1A]/80 backdrop-blur-xs">
      <div className="bg-[#FAF9F6] rounded-xl shadow-2xl max-w-4xl w-full my-auto overflow-hidden border border-[#E5E2D9] animate-in fade-in duration-150">
        {/* Modal Top Control Bar (No Print) */}
        <div className="no-print p-4 bg-[#1A1A1A] text-[#FAF9F6] flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-sm">Official Resume Document</span>
            <span className="text-[10px] font-mono bg-[#2E2C29] px-2 py-0.5 rounded text-[#FED7AA] border border-stone-700">
              Verified Source
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded text-xs font-mono font-medium bg-[#2E2C29] hover:bg-stone-800 text-stone-200 border border-stone-700 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#FED7AA]" />
                  <span>Copied Text</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Plain Text</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded text-xs font-mono font-semibold bg-[#C2410C] hover:bg-[#9A3412] text-white cursor-pointer shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* The Printable Resume Sheet */}
        <div className="p-8 sm:p-12 max-h-[85vh] overflow-y-auto bg-white text-[#1A1A1A] font-sans leading-normal">
          {/* Header */}
          <div className="border-b-2 border-[#1A1A1A] pb-4 mb-5">
            <h1 className="text-2xl sm:text-3xl font-serif font-normal tracking-tight text-[#1A1A1A] uppercase">
              HEER BHARDWAJ
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-stone-700 font-mono mt-1">
              <span>{PROFILE_DATA.email}</span>
              <span>&bull;</span>
              <span>{PROFILE_DATA.phone}</span>
              <span>&bull;</span>
              <a
                href={PROFILE_DATA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C2410C] underline underline-offset-2"
              >
                linkedin.com/in/heerbh
              </a>
              <span>&bull;</span>
              <span>Singapore</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1A1A1A] border-b border-[#E5E2D9] pb-1 mb-2">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs text-stone-800 leading-relaxed text-justify font-serif">
              Supply Chain professional with 4 years of experience in global supply planning, S&amp;OP, forecasting, inventory management and analytics across global markets. Experienced in translating demand and commercial requirements into executable supply, production and inventory plans, managing capacity and supply constraints, supporting new product launches and cross-functional decision making. Complemented by digital supply chain transformation experience at EY Singapore, working with FMCG stakeholders on planning solutions and process improvement across 5 global markets.
            </p>
          </div>

          {/* Professional Experience */}
          <div className="mb-5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1A1A1A] border-b border-[#E5E2D9] pb-1 mb-3">
              PROFESSIONAL EXPERIENCE
            </h2>

            {/* EY Singapore */}
            <div className="mb-4">
              <div className="flex justify-between items-baseline text-xs font-serif font-bold text-[#1A1A1A]">
                <span>ERNST &amp; YOUNG - Singapore</span>
                <span className="font-mono font-medium text-stone-500">May 2026 - Present</span>
              </div>
              <div className="text-xs font-medium text-[#C2410C] italic mb-1.5 font-serif">
                Business Consulting – Supply Chain Operations &amp; Transformation Intern
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-stone-800 leading-relaxed font-serif">
                <li>
                  Translated planning expertise into functional platform capabilities by supporting implementation of a digital inventory replenishment platform for one of the world&apos;s largest FMCG organisations. Enabling 5 global markets to shift from manual Excel-driven planning to a standardised digital workflow.
                </li>
                <li>
                  Partnered with client stakeholders and development teams to document business requirements and platform logics, refine user stories and support agile project delivery through Jira.
                </li>
                <li>
                  Led User Acceptance testing (UAT) sessions with client users, validating business scenarios, planning logic and platform functionality while closely coordinating issue resolution with development teams.
                </li>
                <li>
                  Developed UAT trackers, testing dashboards and project progress reports for client, improving project governance and release readiness throughout implementation.
                </li>
              </ul>
            </div>

            {/* Galaxy Surfactants */}
            <div>
              <div className="flex justify-between items-baseline text-xs font-serif font-bold text-[#1A1A1A]">
                <span>GALAXY SURFACTANTS LTD - India</span>
                <span className="font-mono font-medium text-stone-500">Oct 2021 - May 2025</span>
              </div>
              <div className="text-[11px] text-stone-500 italic mb-0.5 font-serif">
                A global manufacturer of specialty chemicals and surfactants for the personal and home care industries.
              </div>
              <div className="text-xs font-medium text-[#C2410C] italic mb-1.5 font-serif">
                Supply Planner – Officer (Progressed from Intern &rarr; Management Trainee &rarr; Junior officer &rarr; Officer)
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-stone-800 leading-relaxed font-serif">
                <li>
                  Managed end-to-end supply planning and S&amp;OP for 50 speciality chemical SKUs (700 MT) across Europe, North America and India, translating demand requirements and forecasts into production and distribution plans while balancing service levels, capacity and inventory.
                </li>
                <li>
                  Translated production and demand requirements into raw-material procurement plan for Lauryl Alcohol (~6000 MT/month, ~ 60% of monthly raw material demand), coordinating global suppliers and logistics partners to improve supply continuity leading to a reduction in stockout by 16%.
                </li>
                <li>
                  Led cross-functional planning for 4 new product launches, translating commercial requirements into launch volume and production plans, toning manufacturing &amp; procurement to improve operational efficiency by 35%.
                </li>
                <li>
                  Implemented a Fixed Schedule Variable Volume production planning model, increasing operational efficiency by 27% through improved production planning and capacity utilisation.
                </li>
                <li>
                  Initiated automation of purchase order workflows in SAP S/4 HANA, increasing on-time PO accuracy by 65%.
                </li>
                <li>
                  Redesigned MIS dashboard for S&amp;OP visibility and weekly Detention &amp; Demurrage reporting process, driving 22% reduction in demurrage expenses over 3 years and improving cross-departmental decision-making.
                </li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="mb-5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1A1A1A] border-b border-[#E5E2D9] pb-1 mb-2.5">
              EDUCATION
            </h2>

            <div className="mb-2">
              <div className="flex justify-between items-baseline text-xs font-serif font-bold text-[#1A1A1A]">
                <span>SINGAPORE MANAGEMENT UNIVERSITY - Singapore</span>
                <span className="font-mono font-medium text-stone-500">Aug 2025 – Oct 2026</span>
              </div>
              <div className="text-xs text-stone-800 font-medium font-serif">
                Master of Business Administration (MBA)
              </div>
              <div className="text-[11px] text-stone-600 italic font-serif">
                Career Secretary, ELC MBA 2025 cohort
              </div>
            </div>

            <div>
              <div className="flex justify-between items-baseline text-xs font-serif font-bold text-[#1A1A1A]">
                <span>AHMEDABAD UNIVERSITY - India</span>
                <span className="font-mono font-medium text-stone-500">Aug 2018 - Oct 2021</span>
              </div>
              <div className="text-xs text-stone-800 font-medium font-serif">
                Bachelor in Business Administration (BBA)
              </div>
              <div className="text-[11px] text-stone-600 italic font-serif">
                Secretary, The Management Club 2021 cohort
              </div>
            </div>
          </div>

          {/* Technical & Analytical */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1A1A1A] border-b border-[#E5E2D9] pb-1 mb-2">
              TECHNICAL &amp; ANALYTICAL SKILLS
            </h2>
            <div className="text-xs text-stone-800 space-y-1 font-serif">
              <div>
                <strong>ERP / Business Systems:</strong> SAP S/4 HANA (PP), Microsoft PowerApps
              </div>
              <div>
                <strong>Analytics:</strong> Advanced Microsoft Excel, Power BI, S&amp;OP Reporting, KPI Analysis
              </div>
              <div>
                <strong>Emerging Tech &amp; AI:</strong> Python (learning) (Pandas, NumPy, Jupyter &amp; Google Colab), Google AI Studio, GenAI Prompting
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
