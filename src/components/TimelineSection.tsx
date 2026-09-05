import React, { useState } from 'react';
import { ChevronRight, ArrowRight, CheckCircle2, MapPin, Briefcase } from 'lucide-react';

interface JourneyStage {
  year: string;
  role: string;
  company: string;
  location: string;
  scope: string; // One-line scope
  proof: string; // One proof point
}

export const TimelineSection: React.FC = () => {
  const stages: JourneyStage[] = [
    {
      year: '2021',
      role: 'Supply Chain Intern',
      company: 'Galaxy Surfactants',
      location: 'India',
      scope: 'Ground-level plant operations, scheduling transactions, and warehouse materials management.',
      proof: 'Independently learned supply chain during COVID; converted internship to full-time Management Trainee.',
    },
    {
      year: '2022',
      role: 'Management Trainee',
      company: 'Galaxy Surfactants',
      location: 'India',
      scope: 'Cross-functional rotation across plant scheduling, procurement, and logistics operations.',
      proof: 'Mastered SAP S/4HANA PP transactions and plant changeover sequencing within 6 months.',
    },
    {
      year: '2022–23',
      role: 'Junior Officer',
      company: 'Galaxy Surfactants',
      location: 'India',
      scope: 'Procurement scheduling for ~6,000 MT/month of Lauryl Alcohol (~60% of plant raw material volume).',
      proof: 'Reduced plant stockouts by 16% through dynamic consumption buffers and maritime vessel tracking.',
    },
    {
      year: '2023–25',
      role: 'Officer / Supply Planner',
      company: 'Galaxy Surfactants',
      location: 'India',
      scope: 'End-to-end supply planning and S&OP for 50 specialty chemical SKUs (700 MT) across Europe, North America, and India.',
      proof: 'Designed FSVV production model delivering +27% efficiency, cut demurrage by 22%, and led 4 NPI launches.',
    },
    {
      year: '2025',
      role: 'MBA — Singapore Management Univ.',
      company: 'SMU',
      location: 'Singapore',
      scope: 'Elevating operational mastery to enterprise corporate strategy, financial valuation, and global risk.',
      proof: 'Elected Career Secretary by MBA cohort peers; connecting plant scheduling to balance-sheet working capital.',
    },
    {
      year: '2026',
      role: 'EY — Supply Chain Transformation',
      company: 'Ernst & Young',
      location: 'Singapore',
      scope: 'Digital replenishment platform rollout for global FMCG (Unilever) across 5 international markets.',
      proof: 'Led client UAT sessions and authored functional requirements to migrate markets from Excel to platform.',
    },
  ];

  const [activeIdx, setActiveIdx] = useState<number>(stages.length - 1);
  const activeStage = stages[activeIdx];

  return (
    <section id="how-i-got-here" className="py-16 sm:py-20 bg-[#FAF9F6] border-b border-[#E5E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C2410C] block mb-1.5">
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#1A1A1A] tracking-tight">
            How I got here
          </h2>
          <p className="mt-2 text-base font-serif italic text-stone-700">
            &ldquo;Increasing responsibility, not simply increasing years.&rdquo;
          </p>
        </div>

        {/* Desktop Horizontal Interactive Stepper */}
        <div className="hidden lg:block mb-8">
          <div className="relative flex items-center justify-between">
            {/* Connecting line */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-[#E5E2D9] z-0"></div>

            {stages.map((stage, idx) => {
              const isSelected = activeIdx === idx;
              return (
                <button
                  key={stage.role + stage.year}
                  onClick={() => setActiveIdx(idx)}
                  className="relative z-10 flex flex-col items-center group cursor-pointer focus:outline-hidden"
                  id={`timeline-step-${idx}`}
                >
                  <span
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-all border ${
                      isSelected
                        ? 'bg-[#1A1A1A] text-[#FAF9F6] border-[#1A1A1A] ring-4 ring-[#FED7AA]'
                        : 'bg-white text-stone-600 border-[#E5E2D9] group-hover:border-[#C2410C] group-hover:text-[#C2410C]'
                    }`}
                  >
                    0{idx + 1}
                  </span>
                  <span
                    className={`mt-2 text-xs font-mono transition-colors ${
                      isSelected ? 'text-[#C2410C] font-semibold' : 'text-stone-500'
                    }`}
                  >
                    {stage.year}
                  </span>
                  <span
                    className={`text-xs font-serif text-center max-w-[120px] line-clamp-1 mt-0.5 ${
                      isSelected ? 'text-[#1A1A1A] font-bold' : 'text-stone-700'
                    }`}
                  >
                    {stage.role}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Stepper Navigation */}
        <div className="lg:hidden flex overflow-x-auto gap-2 pb-4 mb-4 scrollbar-none">
          {stages.map((stage, idx) => {
            const isSelected = activeIdx === idx;
            return (
              <button
                key={stage.role + stage.year}
                onClick={() => setActiveIdx(idx)}
                className={`px-3 py-2 rounded-lg border shrink-0 text-left transition-all ${
                  isSelected
                    ? 'bg-white border-[#C2410C] ring-1 ring-[#C2410C] shadow-2xs'
                    : 'bg-white/80 border-[#E5E2D9] text-stone-600'
                }`}
              >
                <div className="text-[10px] font-mono text-[#C2410C]">{stage.year}</div>
                <div className="text-xs font-serif font-bold text-[#1A1A1A] truncate max-w-[140px]">
                  {stage.role}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Highlight Card */}
        <div className="bg-white rounded-xl border border-[#E5E2D9] p-6 sm:p-8 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E5E2D9]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono font-semibold text-[#C2410C]">
                  {activeStage.year}
                </span>
                <span className="text-[11px] font-mono text-stone-500 bg-[#F5F3ED] px-2 py-0.5 rounded-md border border-[#E5E2D9] flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#C2410C]" />
                  {activeStage.location}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#1A1A1A]">
                {activeStage.role}
              </h3>
              <div className="text-xs text-stone-600 font-serif italic mt-0.5">
                {activeStage.company}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveIdx((prev) => (prev > 0 ? prev - 1 : stages.length - 1))}
                className="px-2.5 py-1 text-xs font-mono rounded border border-[#E5E2D9] hover:bg-[#F5F3ED] text-stone-600 transition-colors"
                title="Previous step"
              >
                &larr; Prev
              </button>
              <button
                onClick={() => setActiveIdx((prev) => (prev < stages.length - 1 ? prev + 1 : 0))}
                className="px-2.5 py-1 text-xs font-mono rounded border border-[#E5E2D9] hover:bg-[#F5F3ED] text-stone-600 transition-colors"
                title="Next step"
              >
                Next &rarr;
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            {/* One-line Scope */}
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-500 block mb-2">
                Scope (≤ 25 Words)
              </span>
              <p className="text-sm font-serif text-stone-800 leading-relaxed bg-[#FAF9F6] p-4 rounded-lg border border-[#E5E2D9]">
                {activeStage.scope}
              </p>
            </div>

            {/* One Proof Point */}
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C2410C] block mb-2">
                Proof Point
              </span>
              <p className="text-sm font-serif text-stone-800 leading-relaxed bg-[#FFF7ED] p-4 rounded-lg border border-[#FED7AA]">
                {activeStage.proof}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
