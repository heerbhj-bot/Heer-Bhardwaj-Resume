import React, { useState } from 'react';
import { FileText, Linkedin, Mail, ArrowRight, Plus, X, CheckCircle2 } from 'lucide-react';
import { PROFILE_DATA } from '../data/careerData';

interface HeroProps {
  onOpenRecruiterView: () => void;
  onOpenResumeModal: () => void;
}

interface ProofDetail {
  id: string;
  metric: string;
  label: string;
  detail: string;
  bullets: string[];
}

export const Hero: React.FC<HeroProps> = ({
  onOpenRecruiterView,
  onOpenResumeModal,
}) => {
  const [activeProof, setActiveProof] = useState<string | null>(null);

  const proofPoints: ProofDetail[] = [
    {
      id: 'years',
      metric: '4+ YEARS',
      label: 'Supply Chain & Operations',
      detail:
        'Rapid progression from Intern → Management Trainee → Junior Officer → Officer at Galaxy Surfactants, plus digital supply chain consulting at EY Singapore.',
      bullets: [
        'End-to-end plant & distribution planning experience',
        'Cross-functional leadership across manufacturing, sales & procurement',
        'Bridging plant operations with commercial business goals',
      ],
    },
    {
      id: 'skus',
      metric: '50 SKUs / 700 MT',
      label: 'Supply Planning',
      detail:
        'Managed end-to-end global supply planning and monthly S&OP cycles for 50 specialty chemical SKUs across Europe, North America, and India.',
      bullets: [
        'Balanced service levels, production capacity, and inventory holding',
        '+27% operational efficiency gain via Fixed Schedule Variable Volume model (Output increased from ~70 MT per/month to ~90 MT per/month)',
        'Led production planning for 4 cross-functional new product launches',
      ],
    },
    {
      id: 'rm',
      metric: '~6,000 MT / MONTH',
      label: 'Raw Material Planning',
      detail:
        'Formulated raw-material procurement plan for Lauryl Alcohol (~6,000 MT/month), accounting for ~60% of total plant raw-material demand.',
      bullets: [
        'Coordinated international suppliers and global logistics partners',
        '16% reduction in plant stockouts through buffer management',
        '22% reduction in detention & demurrage expenses over 3 years',
      ],
    },
    {
      id: 'ey',
      metric: 'EY',
      label: 'Supply Chain Transformation',
      detail:
        'Supported digital inventory replenishment platform implementation for one of the world’s largest FMCG organisations.',
      bullets: [
        'Enabled 5 global markets to transition from manual Excel to digital workflows',
        'Documented platform logic, refined user stories, and supported Agile delivery in Jira',
        'Led User Acceptance Testing (UAT) sessions and built release governance dashboards',
      ],
    },
  ];

  const progressionSteps = [
    { name: 'Planning', note: 'Scheduling & S&OP' },
    { name: 'Operations', note: 'Plant & Material Flow' },
    { name: 'Business', note: 'SMU MBA & Valuation' },
    { name: 'Digital', note: 'EY Platform Delivery' },
    { name: 'AI', note: 'Decision Intelligence' },
  ];

  const selectedDetail = proofPoints.find((p) => p.id === activeProof);

  return (
    <section
      id="home"
      className="relative pt-16 sm:pt-24 pb-14 sm:pb-16 bg-[#FAF9F6] border-b border-[#E5E2D9] scroll-mt-28 lg:scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 10-Second Visual Hero */}
        <div className="max-w-4xl space-y-4">
          {/* Main Visual Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#1A1A1A] tracking-tight leading-[1.12]">
            SUPPLY CHAIN <span className="text-[#C2410C] font-light">&times;</span> BUSINESS{' '}
            <span className="text-[#C2410C] font-light">&times;</span> TECHNOLOGY
          </h1>

          {/* Identity & Subtitle */}
          <div>
            <div className="text-xl sm:text-2xl font-serif font-bold text-[#1A1A1A]">
              Heer Bhardwaj
            </div>
            <div className="text-xs sm:text-sm font-mono text-stone-600 mt-0.5">
              Supply Chain &amp; Operations &bull; Digital Transformation | AI-enabled Supply Chain
            </div>
          </div>

          {/* Positioning Statement */}
          <p className="text-base sm:text-lg font-serif text-stone-800 leading-relaxed max-w-3xl pt-1">
            &ldquo;I bring hands-on supply-chain experience together with business thinking and digital transformation &mdash; and I&apos;m exploring how AI can make supply chains more responsive.&rdquo;
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2 pb-2">
            <button
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono font-semibold bg-[#1A1A1A] hover:bg-[#C2410C] text-[#FAF9F6] shadow-2xs transition-all cursor-pointer"
              id="hero-download-resume"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>DOWNLOAD RESUME</span>
            </button>

            <a
              href={PROFILE_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono font-semibold bg-white hover:bg-[#F5F3ED] text-[#1A1A1A] border border-[#E5E2D9] transition-all"
              id="hero-linkedin"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#C2410C]" />
              <span>LINKEDIN</span>
            </a>

            <a
              href={`mailto:${PROFILE_DATA.email}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono font-semibold bg-[#FFF7ED] hover:bg-[#FFEDD5] text-[#C2410C] border border-[#FED7AA] transition-all"
              id="hero-contact"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>LET&apos;S TALK</span>
            </a>
          </div>
        </div>

        {/* 4 Compact Visual Proof Points (Clickable with + explore) */}
        <div className="mt-8 pt-6 border-t border-[#E5E2D9]">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500 font-semibold">
              Verified Operational Proof (Click to discover details)
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {proofPoints.map((item) => {
              const isActive = activeProof === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveProof(isActive ? null : item.id)}
                  className={`p-4 rounded-xl text-left border transition-all cursor-pointer relative flex flex-col justify-between group ${
                    isActive
                      ? 'bg-white border-[#C2410C] ring-2 ring-[#FED7AA] shadow-sm'
                      : 'bg-white border-[#E5E2D9] hover:border-[#C2410C]/60 shadow-2xs hover:shadow-xs'
                  }`}
                  id={`proof-card-${item.id}`}
                >
                  <div>
                    <div className="text-xl sm:text-2xl font-serif font-bold text-[#1A1A1A] tracking-tight group-hover:text-[#C2410C] transition-colors">
                      {item.metric}
                    </div>
                    <div className="text-xs font-serif text-stone-600 mt-1 font-medium leading-snug">
                      {item.label}
                    </div>
                  </div>

                  <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] font-mono text-[#C2410C]">
                    <span className="font-semibold">{isActive ? 'Close detail' : '+ explore'}</span>
                    <ArrowRight className={`w-3 h-3 transition-transform ${isActive ? 'rotate-90' : 'group-hover:translate-x-0.5'}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Expanded Proof Detail Box */}
          {selectedDetail && (
            <div className="mt-4 p-5 rounded-xl bg-white border border-[#C2410C] shadow-sm animate-in fade-in zoom-in-98 duration-150 relative">
              <button
                onClick={() => setActiveProof(null)}
                className="absolute top-3 right-3 p-1 text-stone-400 hover:text-stone-700 cursor-pointer"
                aria-label="Close detail"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono font-bold text-[#C2410C] uppercase tracking-wider">
                  {selectedDetail.metric} &bull; {selectedDetail.label}
                </span>
              </div>
              <p className="text-sm font-serif text-[#1A1A1A] mb-3 leading-relaxed">
                {selectedDetail.detail}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 border-t border-[#E5E2D9]">
                {selectedDetail.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C2410C] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Visual Hook: From Planning -> Operations -> Business -> Digital -> AI */}
        <div className="mt-10 p-5 rounded-xl bg-white border border-[#E5E2D9] shadow-2xs">
          <div className="text-[10px] font-mono uppercase tracking-wider text-stone-400 mb-2">
            Career Arc
          </div>
          <div className="flex items-baseline gap-2 mb-2 flex-wrap">
            <span className="text-xs font-mono font-bold text-[#C2410C] uppercase tracking-widest">
              From:
            </span>
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-serif font-bold text-[#1A1A1A]">
              {progressionSteps.map((step, idx) => (
                <React.Fragment key={step.name}>
                  <span className="px-2.5 py-1 rounded-md bg-[#FAF9F6] border border-[#E5E2D9]">
                    {step.name}
                  </span>
                  {idx < progressionSteps.length - 1 && (
                    <span className="text-[#C2410C] font-normal">&rarr;</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          <p className="text-xs sm:text-sm font-serif italic text-stone-700 mt-1">
            &ldquo;My career has evolved from understanding how supply chains operate to exploring how they can work better.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
};
