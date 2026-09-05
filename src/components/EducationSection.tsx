import React from 'react';
import { GraduationCap, MapPin, Award, BookOpen, CheckCircle2 } from 'lucide-react';

export const EducationSection: React.FC = () => {
  const educationItems = [
    {
      institution: 'Singapore Management University (SMU)',
      degree: 'Master of Business Administration (MBA)',
      period: 'Aug 2025 – Oct 2026',
      location: 'Singapore',
      leadership: 'Career Secretary, ELC MBA 2025 Cohort',
      narrativeRole:
        'Bridging plant operations with enterprise corporate strategy, financial acumen, and global executive leadership.',
      keyTakeaways: [
        'Elected by peers as Career Secretary, driving industry networking and executive career forums.',
        'Coursework in Supply Chain Finance, Corporate Valuation, Operations Analytics, and Global Strategy.',
        'Anchored understanding of Singapore as a premier international supply chain and logistics hub.',
      ],
    },
    {
      institution: 'Ahmedabad University',
      degree: 'Bachelor in Business Administration (BBA)',
      period: 'Aug 2018 – Oct 2021',
      location: 'India',
      leadership: 'Secretary, The Management Club 2021 Cohort',
      narrativeRole:
        'Foundational business training leading to self-directed discovery of supply chain dynamics during COVID disruptions.',
      keyTakeaways: [
        'Curriculum covering marketing, operations management, organizational behavior, and economics.',
        'Led student leadership initiatives as Secretary of the Management Club.',
        'Independently studied supply chain continuity during 2020 disruptions, motivating career entry.',
      ],
    },
  ];

  return (
    <section id="education" className="py-20 bg-[#F5F3ED] border-b border-[#E5E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C2410C] block mb-2">
            Academic Foundation
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#1A1A1A] tracking-tight">
            Education That Enhances Operational Scope
          </h2>
          <p className="mt-3 text-base text-stone-700 leading-relaxed font-normal">
            I pursued my MBA at SMU because I recognized that operational excellence alone is insufficient. True impact requires connecting shop-floor scheduling with balance-sheet outcomes, working capital velocity, and strategic customer growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationItems.map((item) => (
            <div
              key={item.institution}
              className="bg-white rounded-xl border border-[#E5E2D9] p-6 sm:p-8 shadow-2xs hover:border-[#C2410C]/40 transition-all flex flex-col justify-between"
              id={`edu-card-${item.institution.toLowerCase().includes('smu') ? 'smu' : 'bba'}`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono text-stone-500">
                    {item.period}
                  </span>
                  <span className="text-[11px] font-mono text-stone-700 bg-[#F5F3ED] border border-[#E5E2D9] px-2 py-0.5 rounded-md flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#C2410C]" />
                    {item.location}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#1A1A1A] mb-1">
                  {item.degree}
                </h3>
                <div className="text-sm font-serif text-stone-700 mb-2 font-medium">
                  {item.institution}
                </div>

                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#FFF7ED] border border-[#FED7AA] text-xs font-mono font-semibold text-[#C2410C] mb-4">
                  <Award className="w-3.5 h-3.5 text-[#C2410C] shrink-0" />
                  <span>{item.leadership}</span>
                </div>

                <p className="text-xs text-stone-600 font-serif italic leading-relaxed mb-5">
                  &ldquo;{item.narrativeRole}&rdquo;
                </p>

                <div className="space-y-2 mb-4">
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-stone-500 block">
                    Key Focus & Engagement
                  </span>
                  <ul className="space-y-2">
                    {item.keyTakeaways.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-stone-700 leading-relaxed font-normal">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C2410C] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-3 border-t border-[#E5E2D9] text-[10px] font-mono uppercase tracking-wider text-stone-400">
                Connected to Career Progression
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
