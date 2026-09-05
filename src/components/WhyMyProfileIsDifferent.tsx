import React from 'react';
import { DIFFERENTIATORS } from '../data/careerData';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export const WhyMyProfileIsDifferent: React.FC = () => {
  return (
    <section id="what-i-bring" className="py-20 bg-[#F5F3ED] border-b border-[#E5E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C2410C] block mb-2">
            Value Proposition
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#1A1A1A] tracking-tight">
            Why My Profile Is Different: Seven Complementary Capabilities
          </h2>
          <p className="mt-3 text-base text-stone-700 leading-relaxed font-normal">
            Rather than relying on vague corporate slogans, here is the concrete evidence of what I bring to your supply chain organization from day one:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIFFERENTIATORS.map((item, index) => (
            <div
              key={item.number}
              className={`rounded-xl p-6 border transition-all flex flex-col justify-between ${
                index === 0 || index === 3
                  ? 'bg-white border-[#C2410C]/40 shadow-2xs'
                  : 'bg-white border-[#E5E2D9] shadow-2xs hover:border-[#C2410C]/40'
              }`}
              id={`diff-card-${item.number}`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-base font-serif italic text-[#C2410C]">
                    {item.number}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#C2410C]" />
                </div>

                <h3 className="text-base font-serif font-bold text-[#1A1A1A] mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E5E2D9] text-[10px] font-mono uppercase tracking-wider text-stone-400">
                Grounded in verifiable track record
              </div>
            </div>
          ))}

          {/* Humble summary card */}
          <div className="rounded-xl p-6 bg-[#1A1A1A] text-[#FAF9F6] border border-stone-800 shadow-md flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-semibold text-[#FED7AA] uppercase tracking-wider block mb-2">
                Executive Mindset
              </span>
              <h3 className="text-base font-serif font-normal text-[#FAF9F6] mb-2">
                Commitment to Growth & Accountability
              </h3>
              <p className="text-xs font-serif italic text-stone-300 leading-relaxed">
                &ldquo;I don&apos;t believe my age defines the level of responsibility I can grow into. I believe responsibility is earned through reliable execution, intellectual honesty, and consistent value creation for the team.&rdquo;
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-800 text-[10px] font-mono text-stone-400">
              Heer Bhardwaj &bull; Singapore
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
