import React from 'react';
import { ArrowRight, ArrowDown, CheckCircle2, ChevronRight } from 'lucide-react';

export const EYScopeDiagram: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Business Problem',
      desc: 'Global FMCG enterprise managing replenishment in isolated spreadsheets across countries with no unified visibility.',
    },
    {
      num: '02',
      title: 'Supply-Chain Process',
      desc: 'Mapped multi-echelon stock targets, order lead times, minimum order quantities (MOQ), and pack sizes.',
    },
    {
      num: '03',
      title: 'Business Requirements',
      desc: 'Synthesized market nuances into structured BRD specifications and actionable Jira user stories.',
    },
    {
      num: '04',
      title: 'Functional Logic',
      desc: 'Defined mathematical calculation rules for dynamic replenishment formulas and exception alerts.',
    },
    {
      num: '05',
      title: 'Development',
      desc: 'Collaborated with engineering squads in agile sprints, resolving edge cases before coding.',
    },
    {
      num: '06',
      title: 'UAT',
      desc: 'Led client User Acceptance Testing sessions across 5 markets, validating simulation calculations.',
    },
    {
      num: '07',
      title: 'Digital Workflow',
      desc: 'Standardized automated replenishment platform successfully replacing spreadsheet silos.',
    },
  ];

  return (
    <div className="bg-[#1A1A1A] text-[#FAF9F6] rounded-2xl p-6 sm:p-8 my-8 border border-stone-800 shadow-md">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-800 pb-5 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[11px] font-mono font-semibold text-[#FED7AA] uppercase tracking-wider">
              EY Singapore &bull; Global FMCG Digital Replenishment
            </span>
            <span className="text-[10px] font-mono bg-stone-800 text-stone-300 px-2 py-0.5 rounded-full border border-stone-700">
              5 Global Markets
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#FAF9F6]">
            From Supply Chain Operator &rarr; Supply Chain Transformer
          </h3>
          <p className="text-xs text-stone-400 font-serif italic mt-1">
            &ldquo;My job title said Intern. The work taught me a lot more.&rdquo;
          </p>
        </div>

        <div className="bg-stone-900 border border-stone-800 p-3 rounded-xl max-w-sm">
          <p className="text-xs text-stone-300 font-serif italic leading-relaxed">
            &ldquo;I don&apos;t only understand how a supply chain works. I can also help translate supply-chain problems into technology-enabled solutions.&rdquo;
          </p>
        </div>
      </div>

      {/* 7-Step Visual Bridge */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-2.5">
        {steps.map((item, idx) => (
          <div
            key={item.num}
            className="bg-stone-900/90 rounded-xl p-3.5 border border-stone-800 flex flex-col justify-between hover:border-[#C2410C]/60 transition-colors relative"
          >
            <div>
              <div className="flex items-center justify-between text-[10px] font-mono text-[#FED7AA] mb-1.5">
                <span>STEP {item.num}</span>
                {idx < steps.length - 1 && (
                  <span className="hidden lg:inline text-stone-600">&rarr;</span>
                )}
              </div>
              <h4 className="text-xs font-serif font-bold text-white mb-1 leading-snug">
                {item.title}
              </h4>
              <p className="text-[11px] text-stone-400 leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>

            {idx < steps.length - 1 && (
              <div className="lg:hidden flex justify-center pt-2 text-stone-600">
                <ArrowDown className="w-3 h-3" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer Proof Strip */}
      <div className="mt-6 pt-4 border-t border-stone-800 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-400 font-mono">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#FED7AA]" />
          <span>Outcome: Standardized replenishment across 5 markets with zero launch calculation defects</span>
        </div>
        <span className="text-[11px] text-[#FED7AA]">Bridging Business & Tech</span>
      </div>
    </div>
  );
};
