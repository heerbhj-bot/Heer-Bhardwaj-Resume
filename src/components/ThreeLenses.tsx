import React, { useState } from 'react';
import { Layers, Laptop, Cpu, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

interface WhatIBringCard {
  id: string;
  pillar: string;
  coreStatement: string;
  keywords: string[];
  expandedText: string; // 50-70 words max
  icon: React.ReactNode;
}

export const ThreeLenses: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<string>('operate');

  const cards: WhatIBringCard[] = [
    {
      id: 'operate',
      pillar: 'OPERATE',
      coreStatement: 'I understand supply chains from the ground up.',
      keywords: ['Planning', 'S&OP', 'Production', 'Inventory', 'Procurement', 'Logistics'],
      expandedText:
        'Hands-on planning on the factory floor taught me how supply chains actually behave. I managed 50 export SKUs (700 MT) across Europe, North America, and India, and scheduled ~6,000 MT/month of raw material feed. Operating real changeovers, supplier delays, and port bottlenecks means my planning decisions are always anchored in physical operational reality, not academic theory.',
      icon: <Layers className="w-5 h-5 text-[#C2410C]" />,
    },
    {
      id: 'transform',
      pillar: 'TRANSFORM',
      coreStatement: 'I\'ve moved from operating processes to helping digitise them.',
      keywords: ['Requirements', 'Digital workflows', 'UAT', 'Process improvement', 'Analytics', 'SAP / PowerApps'],
      expandedText:
        'Having lived the daily pain of spreadsheet planning, I translate supply-chain problems into software-enabled solutions. At EY Singapore, I supported the digital replenishment platform rollout for Unilever across 5 global markets. I author functional user stories, design business logic, lead client UAT sessions, and bridge communication between plant planners and software engineers.',
      icon: <Laptop className="w-5 h-5 text-[#C2410C]" />,
    },
    {
      id: 'explore',
      pillar: 'EXPLORE',
      coreStatement: 'I\'m learning how AI can change supply-chain decision making.',
      keywords: ['AI', 'Automation', 'Decision support', 'Productivity', 'Emerging technology'],
      expandedText:
        'I am exploring how predictive and generative AI can move supply chain teams from firefighting exceptions to anticipating them. Combining SMU MBA business perspectives with applied prompt engineering and Python data analysis, I focus on practical tools that augment planner productivity, scenario planning, and inventory decision intelligence.',
      icon: <Cpu className="w-5 h-5 text-[#C2410C]" />,
    },
  ];

  const toggleCard = (id: string) => {
    setExpandedCard((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="what-i-bring" className="py-16 sm:py-20 bg-[#FAF9F6] border-b border-[#E5E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C2410C] block mb-1.5">
            Core Capability
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#1A1A1A] tracking-tight">
            What I Bring
          </h2>
          <p className="mt-2 text-base text-stone-700 font-normal">
            No lists of generic soft skills. Three distinct operational dimensions connected through hands-on practice:
          </p>
        </div>

        {/* 3 Large Interactive Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const isExpanded = expandedCard === card.id;
            return (
              <div
                key={card.id}
                onClick={() => toggleCard(card.id)}
                className={`rounded-xl p-6 sm:p-7 border transition-all cursor-pointer flex flex-col justify-between ${
                  isExpanded
                    ? 'bg-white border-[#C2410C] ring-1 ring-[#C2410C] shadow-md'
                    : 'bg-white border-[#E5E2D9] hover:border-[#C2410C]/50 shadow-2xs'
                }`}
                id={`bring-card-${card.id}`}
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-[#F5F3ED] border border-[#E5E2D9] flex items-center justify-center">
                        {card.icon}
                      </div>
                      <span className="text-xs font-mono font-bold tracking-wider text-stone-500 uppercase">
                        0{idx + 1} &bull; {card.pillar}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-[#C2410C]">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1A1A1A] mb-2 tracking-tight">
                    {card.pillar}
                  </h3>

                  <p className="text-base font-serif italic text-stone-800 mb-5 leading-snug">
                    &ldquo;{card.coreStatement}&rdquo;
                  </p>

                  {/* Keywords Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {card.keywords.map((kw) => (
                      <span
                        key={kw}
                        className="inline-flex items-center text-[11px] font-medium bg-[#F5F3ED] px-2.5 py-1 rounded-md border border-[#E5E2D9] text-stone-800"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#C2410C] mr-1 shrink-0" />
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expanded Content (50-70 words) */}
                <div>
                  {isExpanded ? (
                    <div className="pt-4 border-t border-[#E5E2D9] bg-[#FAF9F6] -mx-6 sm:-mx-7 -mb-6 sm:-mb-7 p-5 rounded-b-xl animate-in fade-in duration-150">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block mb-1">
                        Applied Depth (50–70 Words)
                      </span>
                      <p className="text-xs sm:text-sm font-serif text-stone-700 leading-relaxed">
                        {card.expandedText}
                      </p>
                    </div>
                  ) : (
                    <div className="text-xs font-mono text-[#C2410C] hover:underline flex items-center gap-1 pt-2">
                      <span>Click to read depth &rarr;</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
