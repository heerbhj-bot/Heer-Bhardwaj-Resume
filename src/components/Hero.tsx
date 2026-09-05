import React from 'react';
import {
  FileText,
  Eye,
  ArrowRight,
  Linkedin,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
import { PROFILE_DATA } from '../data/careerData';

interface HeroProps {
  onOpenRecruiterView: () => void;
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenRecruiterView,
  onOpenResumeModal,
}) => {
  return (
    <section
      id="hero"
      className="relative pt-24 sm:pt-28 pb-14 md:pb-20 overflow-hidden border-b border-[#E5E2D9] bg-[#FAF9F6]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#1A1A1A] text-[#FAF9F6] tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C2410C] animate-pulse"></span>
            Singapore Based &bull; Heer Bhardwaj
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#F5F3ED] text-stone-700 border border-[#E5E2D9]">
            <MapPin className="w-3 h-3 text-[#C2410C]" />
            SMU MBA &bull; Ex-Galaxy Surfactants & EY Singapore
          </span>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Statement */}
          <div className="lg:col-span-8 space-y-6">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-500 block mb-2">
                Supply Chain & Operations Portfolio
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#1A1A1A] tracking-tight leading-[1.12]">
                Supply Chain <span className="text-[#C2410C] font-light">&times;</span> Business{' '}
                <span className="text-[#C2410C] font-light">&times;</span> Technology
              </h1>
            </div>

            {/* Short Supporting Line: <= 35 words */}
            <p className="text-lg sm:text-xl font-serif text-stone-700 leading-relaxed max-w-2xl">
              4+ years turning supply-chain problems into better plans, better processes, and better decisions — now exploring what happens when technology and AI enter the equation.
            </p>

            {/* Target Role Micro-Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-stone-400">Target Roles:</span>
              {['Supply Chain Planner', 'Global Supply Chain', 'S&OP / Operations', 'Digital Transformation'].map((role) => (
                <span
                  key={role}
                  className="inline-flex items-center text-[11px] font-medium bg-white px-2.5 py-1 rounded-md border border-[#E5E2D9] text-stone-700 shadow-2xs"
                >
                  <CheckCircle2 className="w-3 h-3 text-[#C2410C] mr-1 shrink-0" />
                  {role}
                </span>
              ))}
            </div>

            {/* Action Buttons: Explore My Journey, View My Resume, LinkedIn */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#how-i-got-here"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-[#1A1A1A] hover:bg-[#C2410C] text-[#FAF9F6] shadow-xs hover:shadow-md transition-all"
                id="hero-explore-journey-cta"
              >
                <span>Explore My Journey</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-white hover:bg-[#F5F3ED] text-[#1A1A1A] border border-[#DDD8CE] shadow-2xs transition-all cursor-pointer"
                id="hero-view-resume-cta"
              >
                <FileText className="w-4 h-4 text-stone-600" />
                <span>View My Resume</span>
              </button>

              <a
                href={PROFILE_DATA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-white hover:bg-[#F5F3ED] text-[#1A1A1A] border border-[#DDD8CE] shadow-2xs transition-all"
                id="hero-linkedin-cta"
              >
                <Linkedin className="w-4 h-4 text-[#C2410C]" />
                <span>LinkedIn</span>
              </a>

              <button
                onClick={onOpenRecruiterView}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg text-xs font-semibold bg-[#FFF7ED] hover:bg-[#FFEDD5] text-[#C2410C] border border-[#FED7AA] shadow-2xs transition-all cursor-pointer ml-auto hidden sm:inline-flex"
                id="hero-recruiter-cta"
              >
                <Eye className="w-3.5 h-3.5 text-[#C2410C]" />
                <span>Recruiter View (30s)</span>
              </button>
            </div>
          </div>

          {/* Right Column: 30-Second Compact Credibility Card */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-xl border border-[#E5E2D9] shadow-2xs p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-[#E5E2D9] pb-3">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-500">
                  Candidate Profile
                </span>
                <span className="text-[11px] font-mono font-semibold text-[#C2410C] bg-[#FFF7ED] px-2 py-0.5 rounded-full border border-[#FED7AA]">
                  Heer Bhardwaj
                </span>
              </div>

              <div className="space-y-3">
                <div className="border-l-2 border-[#C2410C] pl-3 py-0.5">
                  <div className="text-xs font-mono font-semibold text-stone-500 uppercase tracking-wider">
                    Core Operational Base
                  </div>
                  <div className="text-sm font-serif font-bold text-[#1A1A1A] mt-0.5">
                    Plant Planning & S&OP &bull; 50 SKUs / 700 MT
                  </div>
                  <div className="text-xs text-stone-600">Galaxy Surfactants (Europe, North America, India)</div>
                </div>

                <div className="border-l-2 border-[#C2410C] pl-3 py-0.5">
                  <div className="text-xs font-mono font-semibold text-stone-500 uppercase tracking-wider">
                    Transformation Experience
                  </div>
                  <div className="text-sm font-serif font-bold text-[#1A1A1A] mt-0.5">
                    Digital Replenishment across 5 Global Markets
                  </div>
                  <div className="text-xs text-stone-600">EY Singapore &bull; Tier-1 FMCG (Unilever)</div>
                </div>

                <div className="border-l-2 border-[#C2410C] pl-3 py-0.5">
                  <div className="text-xs font-mono font-semibold text-stone-500 uppercase tracking-wider">
                    Business Elevation & AI
                  </div>
                  <div className="text-sm font-serif font-bold text-[#1A1A1A] mt-0.5">
                    MBA &bull; Singapore Management University
                  </div>
                  <div className="text-xs text-stone-600">Connecting planning trade-offs to enterprise value</div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#E5E2D9] bg-[#F5F3ED] -mx-6 -mb-6 p-4 rounded-b-xl">
                <p className="text-xs text-stone-700 font-serif italic leading-relaxed">
                  &ldquo;Make the recruiter curious first. Impress them with evidence second. Give them the depth only if they want it.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
