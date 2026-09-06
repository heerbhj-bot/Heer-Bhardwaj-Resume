import React, { useState } from 'react';
import { ChevronRight, ArrowRight, CheckCircle2, X, Plus, ExternalLink, Sparkles } from 'lucide-react';

interface StageData {
  id: string;
  year: string;
  title: string;
  company: string;
  oneLineDesc: string;
  highlightMetric: string;
  responsibility: string[];
  impact: string[];
  whatItTaughtMe: string;
  isEY?: boolean;
  eyDetails?: {
    workedOn: string;
    whatIDid: string[];
    scale: string;
    bridgeSteps: string[];
    quote: string;
  };
}

export const TimelineSection: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<StageData | null>(null);

  const stages: StageData[] = [
    {
      id: 'intern',
      year: '2021',
      title: 'Supply Chain Intern',
      company: 'Galaxy Surfactants Ltd.',
      oneLineDesc: 'Shop-floor visibility & port cost tracking',
      highlightMetric: 'Daily MIS & D&D Reporting',
      responsibility: [
        'Initiated daily S&OP MIS reporting dashboard comparing target vs. actuals in real time.',
        'Tracked detention and demurrage (D&D) costs for port shipments and raw material containers.',
        'Observed manufacturing line changeovers and warehouse inventory staging.',
      ],
      impact: [
        'Converted initial internship into full-time Management Trainee appointment.',
        'Established early warning alerts for container dwell times at shipping ports.',
      ],
      whatItTaughtMe: 'Visibility across the entire chain is the prerequisite for all operational control.',
    },
    {
      id: 'trainee',
      year: '2021–22',
      title: 'Management Trainee',
      company: 'Galaxy Surfactants Ltd.',
      oneLineDesc: 'Production planning for 33 SKUs & SAP automation',
      highlightMetric: '33 SKUs | 500 MT Monthly',
      responsibility: [
        'In charge of production planning and distribution for specialty chemicals of 33 SKUs in 1 unit.',
        'Created purchase orders in SAP S/4HANA for raw material procurement.',
        'Initiated automation of purchase order workflows in SAP S/4HANA.',
      ],
      impact: [
        '65% improvement in on-time PO accuracy via automated SAP workflows.',
        'Eliminated manual entry delays for recurring supplier purchase orders.',
      ],
      whatItTaughtMe: 'Automating routine transactional tasks frees planners to anticipate disruptions rather than react to them.',
    },
    {
      id: 'junior-officer',
      year: '2022–24',
      title: 'Junior Officer',
      company: 'Galaxy Surfactants Ltd.',
      oneLineDesc: 'Performance chemicals planning & RM scheduling',
      highlightMetric: '50 SKUs | ~6,000 MT RM',
      responsibility: [
        'In charge of performance chemicals, handling planning and distribution of 50 SKUs under 2 units.',
        'Managed raw material procurement scheduling for Lauryl Alcohol (~6,000 MT/month, ~60% RM demand).',
        'Balanced production capacity, supplier schedules, and warehouse inventory availability.',
      ],
      impact: [
        '16% reduction in factory stockouts through dynamic raw material consumption buffers.',
        'Trained 2 incoming management trainees on MIS reporting and D&D analytics.',
      ],
      whatItTaughtMe: 'A planner\'s real value lies in resolving supplier-to-line bottlenecks before they hit production.',
    },
    {
      id: 'officer',
      year: '2024–25',
      title: 'Officer / Supply Planner',
      company: 'Galaxy Surfactants Ltd.',
      oneLineDesc: 'Global supply planning & S&OP leadership',
      highlightMetric: '50 SKUs | 700 MT Global',
      responsibility: [
        'Managed end-to-end supply planning and S&OP for 50 specialty chemical SKUs across Europe, North America, and India.',
        'Designed and implemented Fixed Schedule Variable Volume (FSVV) production model.',
        'Led cross-functional planning for 4 new product launches (NPIs) across manufacturing and procurement.',
        'Redesigned S&OP visibility dashboards and weekly Detention & Demurrage reporting.',
      ],
      impact: [
        '27% operational efficiency improvement through improved production planning & capacity utilisation.',
        '22% reduction in demurrage expenses over 3 years.',
        '35% improvement in operational efficiency during 4 new product rollouts.',
      ],
      whatItTaughtMe: 'Real supply chain resilience requires balancing plant production realities with commercial customer commitments.',
    },
    {
      id: 'mba',
      year: '2025–26',
      title: 'MBA — SMU',
      company: 'Singapore Management University',
      oneLineDesc: 'Corporate valuation, working capital & strategy',
      highlightMetric: 'Career Secretary, ELC MBA',
      responsibility: [
        'Full-time Master of Business Administration in Singapore focusing on strategic operations and enterprise finance.',
        'Elected Career Secretary for the Executive Leadership Committee (ELC) MBA 2025 cohort.',
        'Analyzed global supply chain network resilience, balance-sheet working capital, and tech disruption.',
      ],
      impact: [
        'Synthesized shop-floor operational experience with executive financial and strategic decision frameworks.',
        'Represented MBA cohort in employer relations and corporate leadership forums across Singapore.',
      ],
      whatItTaughtMe: 'Operational decisions only succeed when they create measurable value for working capital, customers, and corporate strategy.',
    },
    {
      id: 'ey',
      year: '2026–',
      title: 'EY — Digital Transformation',
      company: 'Ernst & Young (EY) Singapore',
      oneLineDesc: 'Digital replenishment platform implementation',
      highlightMetric: '5 Global Markets',
      isEY: true,
      eyDetails: {
        workedOn: 'Digital inventory replenishment transformation for a global Tier-1 FMCG organisation.',
        whatIDid: [
          'Translated supply-planning knowledge into functional platform capabilities.',
          'Worked with business stakeholders and development teams.',
          'Documented business requirements and platform logic.',
          'Refined user stories and supported Agile delivery via Jira.',
          'Led User Acceptance Testing (UAT) sessions, validating business scenarios and platform functionality.',
          'Built UAT trackers, testing dashboards, and project progress reports for governance.',
        ],
        scale: '5 global markets shifting from manual Excel planning to standardised digital workflow',
        bridgeSteps: [
          'Supply Chain Knowledge',
          'Business Requirements',
          'Digital Solution',
          'UAT',
          'Implementation',
        ],
        quote: 'I learned to connect how supply chains work with how technology can improve them.',
      },
      responsibility: [
        'Translated planning expertise into functional digital platform capabilities for global FMCG client.',
        'Partnered with client stakeholders and development teams to document business logic and refine Jira user stories.',
        'Led client UAT sessions and built testing progress dashboards for project governance.',
      ],
      impact: [
        'Enabled 5 global markets to transition from manual Excel-driven planning to a standardised digital workflow.',
        'Ensured release readiness and business validation across complex multi-echelon replenishment scenarios.',
      ],
      whatItTaughtMe: 'Digital transformation succeeds only when software developers understand the operational reality of planners.',
    },
  ];

  return (
    <section id="journey" className="py-16 sm:py-20 bg-[#FAF9F6] border-b border-[#E5E2D9] scroll-mt-28 lg:scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C2410C] block mb-1">
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#1A1A1A] tracking-tight">
            HOW I GOT HERE
          </h2>
          <p className="mt-2 text-sm sm:text-base font-serif italic text-stone-700">
            &ldquo;Increasing responsibility, not merely increasing years.&rdquo;
          </p>
        </div>

        {/* Horizontal Interactive Timeline (Desktop) / Vertical (Mobile) */}
        <div className="bg-white rounded-xl border border-[#E5E2D9] p-4 sm:p-6 shadow-2xs">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-stone-100">
            <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500 font-semibold">
              Interactive Timeline (Click any stage to open details &amp; proof)
            </span>
            <span className="text-[10px] font-mono text-[#C2410C]">
              6 Career Milestones
            </span>
          </div>

          {/* Desktop Horizontal Stepper */}
          <div className="hidden lg:grid grid-cols-6 gap-2">
            {stages.map((stage, idx) => {
              const isSelected = selectedStage?.id === stage.id;
              return (
                <button
                  key={stage.id}
                  onClick={() => setSelectedStage(stage)}
                  className={`p-3 rounded-xl text-left border transition-all cursor-pointer relative flex flex-col justify-between group ${
                    isSelected
                      ? 'bg-[#FFF7ED] border-[#C2410C] ring-1 ring-[#C2410C] shadow-xs'
                      : 'bg-[#FAF9F6] border-[#E5E2D9] hover:border-[#C2410C]/60 hover:bg-white'
                  }`}
                  id={`stage-card-${stage.id}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-mono font-bold text-[#C2410C]">
                        {stage.year}
                      </span>
                      <span className="text-[9px] font-mono text-stone-400">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-xs font-serif font-bold text-[#1A1A1A] leading-snug group-hover:text-[#C2410C] transition-colors">
                      {stage.title}
                    </h3>

                    <p className="text-[11px] font-serif text-stone-600 mt-1 line-clamp-2 leading-tight">
                      {stage.oneLineDesc}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-stone-200/80">
                    <div className="text-[11px] font-mono font-semibold text-[#1A1A1A] truncate">
                      {stage.highlightMetric}
                    </div>
                    <div className="mt-1 flex items-center justify-between text-[10px] font-mono text-[#C2410C]">
                      <span>+ explore</span>
                      <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Mobile Vertical Stepper */}
          <div className="lg:hidden space-y-3">
            {stages.map((stage) => {
              const isSelected = selectedStage?.id === stage.id;
              return (
                <button
                  key={stage.id}
                  onClick={() => setSelectedStage(stage)}
                  className={`w-full p-3.5 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#FFF7ED] border-[#C2410C] ring-1 ring-[#C2410C]'
                      : 'bg-[#FAF9F6] border-[#E5E2D9]'
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#C2410C]">
                        {stage.year}
                      </span>
                      <span className="text-xs font-serif font-bold text-[#1A1A1A]">
                        {stage.title}
                      </span>
                    </div>
                    <div className="text-xs text-stone-600 font-serif">
                      {stage.oneLineDesc}
                    </div>
                    <div className="text-xs font-mono font-medium text-[#1A1A1A]">
                      {stage.highlightMetric}
                    </div>
                  </div>
                  <div className="text-xs font-mono text-[#C2410C] font-semibold pl-2 shrink-0">
                    + explore &rarr;
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Career Progression Visual */}
        <div className="mt-8 p-5 rounded-xl bg-white border border-[#E5E2D9] shadow-2xs">
          <div className="text-[10px] font-mono uppercase tracking-wider text-stone-400 mb-2">
            Career Progression Arc
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-serif font-bold text-[#1A1A1A]">
            <span className="px-2.5 py-1 rounded-md bg-[#FAF9F6] border border-[#E5E2D9]">
              INTERN
            </span>
            <span className="text-[#C2410C]">&rarr;</span>
            <span className="px-2.5 py-1 rounded-md bg-[#FAF9F6] border border-[#E5E2D9]">
              MANAGEMENT TRAINEE
            </span>
            <span className="text-[#C2410C]">&rarr;</span>
            <span className="px-2.5 py-1 rounded-md bg-[#FAF9F6] border border-[#E5E2D9]">
              JUNIOR OFFICER
            </span>
            <span className="text-[#C2410C]">&rarr;</span>
            <span className="px-2.5 py-1 rounded-md bg-[#FAF9F6] border border-[#E5E2D9]">
              OFFICER
            </span>
            <span className="text-[#C2410C]">&rarr;</span>
            <span className="px-2.5 py-1 rounded-md bg-[#FAF9F6] border border-[#E5E2D9]">
              MBA
            </span>
            <span className="text-[#C2410C]">&rarr;</span>
            <span className="px-2.5 py-1 rounded-md bg-[#FFF7ED] border border-[#FED7AA] text-[#C2410C]">
              EY TRANSFORMATION
            </span>
          </div>

          <div className="mt-3 pt-3 border-t border-[#E5E2D9] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <p className="text-xs sm:text-sm font-serif text-stone-700">
              <span className="font-bold text-[#1A1A1A]">More responsibility. More complex problems. Broader perspective.</span>
            </p>
            <p className="text-xs font-serif italic text-stone-600">
              &ldquo;My titles changed gradually. The responsibility I was trusted with grew faster.&rdquo;
            </p>
          </div>
        </div>

        {/* Detailed Modal / Slide-Out Side Panel for Selected Stage */}
        {selectedStage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1A1A1A]/70 backdrop-blur-xs">
            <div className="bg-[#FAF9F6] rounded-2xl border border-[#E5E2D9] shadow-2xl max-w-2xl w-full my-auto max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-98 duration-150">
              {/* Modal Header */}
              <div className="p-5 sm:p-6 bg-[#1A1A1A] text-[#FAF9F6] flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold text-[#FED7AA]">
                      {selectedStage.year}
                    </span>
                    <span className="text-[11px] font-mono text-stone-400">
                      &bull; {selectedStage.company}
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif font-normal text-[#FAF9F6]">
                    {selectedStage.title}
                  </h3>
                  <p className="text-xs text-stone-300 font-mono mt-1">
                    Highlight: {selectedStage.highlightMetric}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedStage(null)}
                  className="p-1 text-stone-400 hover:text-white transition-colors cursor-pointer rounded-lg hover:bg-stone-800"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Special EY Transformation View */}
                {selectedStage.isEY && selectedStage.eyDetails ? (
                  <div className="space-y-5">
                    <div className="p-4 rounded-xl bg-white border border-[#E5E2D9]">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#C2410C] font-bold block mb-1">
                        WHAT I WORKED ON
                      </span>
                      <p className="text-sm font-serif text-[#1A1A1A]">
                        {selectedStage.eyDetails.workedOn}
                      </p>
                      <div className="mt-2 text-xs font-mono text-stone-500">
                        Scale: <span className="font-semibold text-stone-800">{selectedStage.eyDetails.scale}</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-[#E5E2D9]">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 font-bold block mb-2">
                        WHAT I DID
                      </span>
                      <div className="space-y-1.5">
                        {selectedStage.eyDetails.whatIDid.map((item, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-stone-800">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C2410C] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* The Visual Bridge */}
                    <div className="p-4 rounded-xl bg-[#F5F3ED] border border-[#E5E2D9]">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#C2410C] font-bold block mb-2">
                        THE BRIDGE
                      </span>
                      <div className="flex flex-wrap items-center gap-1.5 text-xs font-serif font-semibold text-[#1A1A1A]">
                        {selectedStage.eyDetails.bridgeSteps.map((step, idx) => (
                          <React.Fragment key={step}>
                            <span className="px-2 py-1 bg-white rounded border border-[#E5E2D9]">
                              {step}
                            </span>
                            {idx < selectedStage.eyDetails!.bridgeSteps.length - 1 && (
                              <span className="text-[#C2410C]">&rarr;</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                      <p className="mt-3 text-xs font-serif italic text-stone-700">
                        &ldquo;{selectedStage.eyDetails.quote}&rdquo;
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* RESPONSIBILITY */}
                    <div>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C2410C] block mb-2">
                        RESPONSIBILITY
                      </span>
                      <div className="space-y-2">
                        {selectedStage.responsibility.map((r, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-stone-800">
                            <CheckCircle2 className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                            <span>{r}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* IMPACT */}
                    <div className="p-4 rounded-xl bg-white border border-[#E5E2D9]">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1A1A1A] block mb-2">
                        IMPACT &amp; OUTCOMES
                      </span>
                      <div className="space-y-2">
                        {selectedStage.impact.map((imp, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs sm:text-sm font-serif font-bold text-[#1A1A1A]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C2410C] mt-2 shrink-0"></span>
                            <span>{imp}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* WHAT IT TAUGHT ME */}
                    <div className="p-4 rounded-xl bg-[#FFF7ED] border border-[#FED7AA]">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#C2410C] font-bold block mb-1">
                        WHAT IT TAUGHT ME
                      </span>
                      <p className="text-xs sm:text-sm font-serif italic text-stone-800">
                        &ldquo;{selectedStage.whatItTaughtMe}&rdquo;
                      </p>
                    </div>
                  </>
                )}

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => setSelectedStage(null)}
                    className="px-4 py-2 text-xs font-mono font-semibold rounded-lg bg-[#1A1A1A] text-white hover:bg-[#C2410C] transition-colors cursor-pointer"
                  >
                    Close stage
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
