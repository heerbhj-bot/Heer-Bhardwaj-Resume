import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, ChevronRight, Info, Layers, Sparkles } from 'lucide-react';

interface NutshellCard {
  id: string;
  metric: string;
  label: string;
  explanation: string;
  proofContext: string;
  tag: string;
}

export const MetricsShowcase: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<string>('sku-scope');

  const cards: NutshellCard[] = [
    {
      id: 'years',
      metric: '4+',
      label: 'Years in Supply Chain',
      explanation: 'Progressed rapidly across 4 roles at Galaxy Surfactants and digital transformation consulting at EY Singapore.',
      proofContext: 'Intern → Management Trainee → Junior Officer → Officer / Supply Planner → EY Consultant',
      tag: 'Trajectory',
    },
    {
      id: 'sku-scope',
      metric: '50',
      label: 'SKUs Managed',
      explanation: 'End-to-end multi-country supply planning and monthly S&OP cycles across Europe, North America, and domestic India.',
      proofContext: 'Export portfolio for specialty chemical formulations (Galaxy Surfactants)',
      tag: 'Portfolio Scope',
    },
    {
      id: 'planning-scope',
      metric: '700 MT',
      label: 'Planning Scope',
      explanation: 'Reconciled capacity-feasible master production schedules and warehouse allocations across 3 global continents.',
      proofContext: 'Balanced commercial SLAs against plant changeover matrices',
      tag: 'Scale',
    },
    {
      id: 'raw-material',
      metric: '~6,000 MT/mo',
      label: 'Raw-Material Planning',
      explanation: 'Orchestrated Lauryl Alcohol procurement representing ~60% of total plant raw material demand, cutting stockouts by 16%.',
      proofContext: 'Synchronized maritime shipments and buffer stocks with plant tank farm capacities',
      tag: 'Critical Procurement',
    },
    {
      id: 'markets',
      metric: '5',
      label: 'Global Markets',
      explanation: 'Supported digital replenishment platform rollout at EY for a global Tier-1 FMCG, shifting 5 markets from Excel to digital workflows.',
      proofContext: 'Authored business requirements and led cross-border client User Acceptance Testing (UAT)',
      tag: 'Transformation',
    },
    {
      id: 'ey-transformation',
      metric: 'EY',
      label: 'Supply Chain Transformation',
      explanation: 'Business consulting intern translating frontline planning realities into platform functional specifications and Jira user stories.',
      proofContext: 'Bridged the divide between market planners and software engineering teams',
      tag: 'Consulting',
    },
  ];

  const activeData = cards.find((c) => c.id === selectedCard) || cards[0];

  return (
    <section id="me-in-a-nutshell" className="py-16 sm:py-20 bg-[#FAF9F6] border-b border-[#E5E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C2410C] block mb-1.5">
              The 30-Second Snapshot
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#1A1A1A] tracking-tight">
              Me, in a nutshell
            </h2>
            <p className="mt-2 text-sm text-stone-600 font-serif italic">
              &ldquo;Numbers tell part of the story.&rdquo; Click any metric for the context behind it.
            </p>
          </div>

          <div className="text-xs font-mono text-stone-500 bg-[#F5F3ED] px-3 py-1.5 rounded-lg border border-[#E5E2D9] self-start md:self-auto">
            Interactive &bull; Click to reveal evidence
          </div>
        </div>

        {/* 6 Compact Clickable Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-6">
          {cards.map((card) => {
            const isSelected = selectedCard === card.id;
            return (
              <button
                key={card.id}
                onClick={() => setSelectedCard(card.id)}
                className={`flex flex-col justify-between p-4 rounded-xl border text-left transition-all cursor-pointer relative ${
                  isSelected
                    ? 'bg-white border-[#C2410C] shadow-md ring-1 ring-[#C2410C]'
                    : 'bg-white/80 border-[#E5E2D9] hover:bg-white hover:border-[#C2410C]/40 shadow-2xs'
                }`}
                id={`nutshell-card-${card.id}`}
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-stone-400 mb-1.5">
                    <span>{card.tag}</span>
                    {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#C2410C]"></span>}
                  </div>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-[#1A1A1A] tracking-tight">
                    {card.metric}
                  </div>
                </div>
                <div className="mt-2 text-xs font-medium text-stone-700 leading-tight">
                  {card.label}
                </div>
              </button>
            );
          })}
        </div>

        {/* Tiny Active Explanation Panel */}
        <div className="p-5 sm:p-6 rounded-xl bg-white border border-[#E5E2D9] shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#E5E2D9]">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-md bg-[#FFF7ED] text-[#C2410C] border border-[#FED7AA]">
                {activeData.metric} &bull; {activeData.label}
              </span>
              <span className="text-xs text-stone-500 font-mono">Verified Resume Data</span>
            </div>
            <a
              href="#case-studies"
              className="text-xs font-medium text-[#C2410C] hover:underline flex items-center gap-1"
            >
              <span>See related case study</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="pt-4 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-8">
              <p className="text-base font-serif text-[#1A1A1A] leading-relaxed">
                {activeData.explanation}
              </p>
              <p className="text-xs text-stone-500 mt-1 font-serif italic">
                {activeData.proofContext}
              </p>
            </div>

            {/* Quick Supporting Impact Proof */}
            <div className="md:col-span-4 bg-[#F5F3ED] rounded-lg p-3 border border-[#E5E2D9] text-xs">
              <div className="font-mono text-[10px] text-stone-500 uppercase tracking-wider mb-1">
                Measurable Impact Highlight
              </div>
              <div className="font-serif text-stone-800 font-bold">
                {activeData.id === 'years' && '+27% efficiency gain via FSVV model & 65% PO accuracy'}
                {activeData.id === 'sku-scope' && 'Maintained OTIF across Europe & North America with finite line capacity'}
                {activeData.id === 'planning-scope' && 'Zero line shutdowns across 4 new product scale-up launches'}
                {activeData.id === 'raw-material' && '-16% stockouts achieved by synchronizing consumption buffers'}
                {activeData.id === 'markets' && 'Replaced fragmented spreadsheets with enterprise digital replenishment'}
                {activeData.id === 'ey-transformation' && 'UAT validation of multi-echelon replenishment logic with zero release defects'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
