import React from 'react';
import { ArrowRight, CheckCircle2, Sliders, Layers } from 'lucide-react';

export const IndustryTransferability: React.FC = () => {
  const industries = [
    'Chemicals',
    'FMCG',
    'Consumer Technology',
    'Manufacturing',
    'Other Industries',
  ];

  const valueFlow = [
    { step: 'Demand', desc: 'Forecast reconciliation & commercial signals' },
    { step: 'Capacity', desc: 'Line throughput, tooling & labor availability' },
    { step: 'Inventory', desc: 'Safety stock formulas & buffer thresholds' },
    { step: 'Supply', desc: 'Vendor lead times, batch sizes & freight MOQs' },
    { step: 'Customer', desc: 'OTIF fulfillment & service agreements' },
  ];

  const bridgeSteps = [
    { stage: 'BBA', role: 'Business Foundation', desc: 'Commerce, economics & operations grounding' },
    { stage: 'Supply Chain', role: 'Hands-on Experience', desc: 'Plant scheduling & global S&OP at Galaxy Surfactants' },
    { stage: 'MBA — SMU', role: 'Business Perspective', desc: 'Financial valuation, working capital & executive strategy' },
    { stage: 'EY', role: 'Digital Transformation', desc: 'Translating supply chain logic into digital replenishment platform' },
    { stage: 'AI', role: 'What\'s Next', desc: 'Decision intelligence, scenario modeling & planner co-pilots' },
  ];

  return (
    <section id="transferability" className="py-16 sm:py-20 bg-[#F5F3ED] border-b border-[#E5E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 16: Industry Agility */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C2410C] block mb-1.5">
            Industry Agility
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#1A1A1A] tracking-tight">
            Different products. Same supply-chain questions.
          </h2>
          <p className="mt-2 text-base text-stone-700 font-serif italic">
            &ldquo;The product changes. The supply-chain principles remain. What changes are the constraints, economics, customers and risks.&rdquo;
          </p>
        </div>

        {/* Industries Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-xs font-mono font-bold text-stone-500 uppercase tracking-wider mr-2">
            Applied Sectors:
          </span>
          {industries.map((ind, idx) => (
            <span
              key={ind}
              className={`px-3 py-1.5 rounded-lg text-xs font-serif font-medium border ${
                idx < 2
                  ? 'bg-white text-[#1A1A1A] border-[#C2410C]/40 shadow-2xs font-semibold'
                  : 'bg-white/80 text-stone-700 border-[#E5E2D9]'
              }`}
            >
              {ind}
            </span>
          ))}
        </div>

        {/* 5-Step Invariant Flow: Demand → Capacity → Inventory → Supply → Customer */}
        <div className="bg-white rounded-xl border border-[#E5E2D9] p-6 shadow-2xs mb-12">
          <span className="text-[11px] font-mono uppercase tracking-wider text-stone-400 block mb-4">
            The Invariant Operational Spine
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {valueFlow.map((f, i) => (
              <div
                key={f.step}
                className="p-3.5 rounded-lg bg-[#FAF9F6] border border-[#E5E2D9] relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-[#C2410C] mb-1">
                    <span>0{i + 1}</span>
                    {i < valueFlow.length - 1 && (
                      <span className="hidden sm:inline text-stone-400">&rarr;</span>
                    )}
                  </div>
                  <div className="text-sm font-serif font-bold text-[#1A1A1A] mb-1">
                    {f.step}
                  </div>
                  <div className="text-[11px] text-stone-600 leading-snug">
                    {f.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 13: Make the MBA a Bridge, Not a Credential */}
        <div className="bg-white rounded-xl border border-[#E5E2D9] p-6 sm:p-8 shadow-2xs">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C2410C] block mb-1">
              Education in Context
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#1A1A1A]">
              The MBA as a Bridge, Not a Credential
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 font-serif mt-1">
              Rather than an isolated academic diploma, the SMU MBA served as a conscious strategic bridge connecting shop-floor plant scheduling with enterprise valuation and digital transformation.
            </p>
          </div>

          {/* Sequential Bridge Flow */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {bridgeSteps.map((b, idx) => (
              <div
                key={b.stage}
                className={`p-4 rounded-xl border flex flex-col justify-between ${
                  b.stage.includes('SMU')
                    ? 'bg-[#FFF7ED] border-[#FED7AA]'
                    : 'bg-[#FAF9F6] border-[#E5E2D9]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-stone-400 mb-1.5">
                    <span>STEP 0{idx + 1}</span>
                    {idx < bridgeSteps.length - 1 && <span className="hidden md:inline">&rarr;</span>}
                  </div>
                  <h4 className="text-sm font-serif font-bold text-[#1A1A1A] mb-1">
                    {b.stage}
                  </h4>
                  <div className="text-xs font-mono font-semibold text-[#C2410C] mb-2">
                    {b.role}
                  </div>
                  <p className="text-[11px] text-stone-600 leading-relaxed font-normal">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
