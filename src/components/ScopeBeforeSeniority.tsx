import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ScopeCard {
  title: string;
  tag: string;
  statement: string;
  context: string;
}

export const ScopeBeforeSeniority: React.FC = () => {
  const cards: ScopeCard[] = [
    {
      title: 'Early Responsibility',
      tag: 'Trajectory',
      statement: 'Progressed from Intern → Management Trainee → Junior Officer → Officer in under 4 years.',
      context: 'Earned operational autonomy quickly by demonstrating reliability on the factory floor and mastering SAP transactions.',
    },
    {
      title: 'Global Planning',
      tag: 'Market Scope',
      statement: 'Managed end-to-end supply planning and S&OP across multiple international markets.',
      context: 'Balanced disparate demand signals, vessel transit times, and line capacities across Europe, North America, and India.',
    },
    {
      title: 'Scale',
      tag: 'Volume',
      statement: 'Planned ~6,000 MT/month of Lauryl Alcohol representing ~60% of total plant raw material demand.',
      context: 'Coordinated global chemical suppliers and maritime freight partners to protect uninterrupted plant production.',
    },
    {
      title: 'Business Impact',
      tag: 'Operational Gain',
      statement: 'Delivered a 27% operational efficiency improvement through a Fixed Schedule Variable Volume model.',
      context: 'Cut changeover downtime by locking family production sequences while varying run volume to demand.',
    },
    {
      title: 'Transformation',
      tag: 'Digital Delivery',
      statement: 'Worked on a digital replenishment platform covering 5 global markets at EY.',
      context: 'Translated market planning practices into functional user stories and led client UAT to retire spreadsheet silos.',
    },
  ];

  return (
    <section id="scope-before-seniority" className="py-16 sm:py-20 bg-[#F5F3ED] border-b border-[#E5E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C2410C] block mb-2">
            The Signature Section
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#1A1A1A] tracking-tight">
            Scope Before Seniority
          </h2>
          <p className="mt-3 text-lg font-serif italic text-stone-800 leading-relaxed">
            &ldquo;My career has been relatively short. The scope I&apos;ve been trusted with hasn&apos;t always been.&rdquo;
          </p>
        </div>

        {/* 5 Evidence Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div
              key={card.title}
              className={`rounded-xl p-6 border transition-all flex flex-col justify-between ${
                idx === 0
                  ? 'bg-white border-[#C2410C]/60 shadow-xs'
                  : 'bg-white border-[#E5E2D9] shadow-2xs hover:border-[#C2410C]/40'
              }`}
              id={`scope-card-${idx}`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-semibold text-[#C2410C]">
                    0{idx + 1} &bull; {card.tag}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#C2410C]" />
                </div>

                <h3 className="text-lg font-serif font-bold text-[#1A1A1A] mb-2">
                  {card.title}
                </h3>

                <p className="text-sm font-serif font-semibold text-stone-900 mb-2 leading-snug">
                  {card.statement}
                </p>

                <p className="text-xs text-stone-600 leading-relaxed font-normal">
                  {card.context}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E5E2D9] text-[10px] font-mono text-stone-400 uppercase tracking-wider">
                Verifiable Resume Evidence
              </div>
            </div>
          ))}

          {/* Recruiter Reflection Card */}
          <div className="rounded-xl p-6 bg-[#1A1A1A] text-[#FAF9F6] border border-stone-800 shadow-md flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-semibold text-[#FED7AA] uppercase tracking-wider block mb-2">
                Recruiter Takeaway
              </span>
              <p className="text-sm font-serif italic text-stone-300 leading-relaxed mt-2">
                &ldquo;She seems to have taken on quite a lot quite early — with verified operational accountability and measurable business results.&rdquo;
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-800 text-[11px] font-mono text-[#FED7AA]">
              Ready for high-ownership planning roles in Singapore
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
