import React from 'react';
import { X, CheckCircle2, Mail, FileText, ArrowRight, Linkedin } from 'lucide-react';
import { PROFILE_DATA } from '../data/careerData';

interface RecruiterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

export const RecruiterDrawer: React.FC<RecruiterDrawerProps> = ({
  isOpen,
  onClose,
  onOpenResume,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#1A1A1A]/80 backdrop-blur-xs">
      <div className="bg-[#FAF9F6] rounded-2xl border border-[#E5E2D9] shadow-2xl max-w-xl w-full my-auto overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="p-6 bg-[#1A1A1A] text-[#FAF9F6] flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-mono font-bold text-[#FED7AA] uppercase tracking-wider">
                Recruiter View &bull; Under 30 Seconds
              </span>
              <span className="text-[10px] font-mono bg-stone-800 text-stone-300 px-2 py-0.5 rounded-full border border-stone-700">
                Summary
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-normal tracking-tight text-[#FAF9F6]">
              {PROFILE_DATA.name}
            </h3>
            <p className="text-xs text-stone-300 font-serif italic mt-1">
              Supply Chain &amp; Operations | Digital Transformation | AI / Emerging Technology
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5">
          {/* Experience & Education Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-white border border-[#E5E2D9]">
              <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block mb-1">
                Experience
              </span>
              <div className="text-xl font-serif font-bold text-[#1A1A1A]">4+ years</div>
              <div className="text-[11px] text-stone-500 mt-0.5">Galaxy Surfactants &amp; EY</div>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-[#E5E2D9]">
              <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block mb-1">
                Education
              </span>
              <div className="text-xl font-serif font-bold text-[#1A1A1A]">MBA &mdash; SMU</div>
              <div className="text-[11px] text-stone-500 mt-0.5">Singapore (ELC Career Sec.)</div>
            </div>
          </div>

          {/* Core Capabilities */}
          <div className="p-4 rounded-xl bg-white border border-[#E5E2D9]">
            <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block mb-1.5">
              Core
            </span>
            <div className="text-sm font-serif font-bold text-[#1A1A1A]">
              Supply Planning | S&amp;OP | Operations | Analytics
            </div>
            <p className="text-xs text-stone-600 mt-1 leading-relaxed">
              Managed 50 export SKUs (700 MT) across Europe, North America &amp; India; ~6,000 MT/month raw material feed; +27% operational efficiency gain via FSVV model.
            </p>
          </div>

          {/* Transformation */}
          <div className="p-4 rounded-xl bg-white border border-[#E5E2D9]">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#C2410C] block mb-1.5">
              Transformation
            </span>
            <div className="text-sm font-serif font-bold text-[#1A1A1A]">
              EY | Digital Supply Chain | UAT | Requirements
            </div>
            <p className="text-xs text-stone-600 mt-1 leading-relaxed">
              Standardized digital replenishment platform for Unilever across 5 global markets, translating operational logic into Jira user stories and leading client UAT.
            </p>
          </div>

          {/* Best-Fit Roles */}
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block mb-2">
              Best-Fit Roles
            </span>
            <div className="flex flex-wrap gap-1.5">
              {[
                'Supply Chain Planning',
                'Global Supply Chain',
                'Demand & Supply Planning',
                'Supply Chain Transformation',
                'Supply Chain Consulting',
              ].map((role) => (
                <span
                  key={role}
                  className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-serif font-medium bg-[#F5F3ED] text-stone-800 border border-[#E5E2D9]"
                >
                  <CheckCircle2 className="w-3 h-3 text-[#C2410C] mr-1.5 shrink-0" />
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons: [Download Resume], [Contact] */}
          <div className="pt-2 flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenResume();
              }}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono font-semibold bg-[#1A1A1A] hover:bg-[#C2410C] text-[#FAF9F6] transition-all cursor-pointer shadow-2xs"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume</span>
            </button>

            <a
              href={`mailto:${PROFILE_DATA.email}`}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono font-semibold bg-white hover:bg-[#F5F3ED] text-[#1A1A1A] border border-[#DDD8CE] transition-all"
            >
              <Mail className="w-4 h-4 text-[#C2410C]" />
              <span>Contact Heer</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
