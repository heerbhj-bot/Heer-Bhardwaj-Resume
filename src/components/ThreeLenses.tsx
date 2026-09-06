import React, { useState } from 'react';
import { Layers, Laptop, Cpu, Globe, ArrowDown, ArrowRight, CheckCircle2, Plus, X } from 'lucide-react';

interface BringCard {
  id: string;
  cardNum: string;
  title: string;
  headline: string;
  tags: string[];
  expandedContent: string;
  icon: React.ReactNode;
}

interface ProofItem {
  id: string;
  title: string;
  stat: string;
  explanation: string;
}

export const ThreeLenses: React.FC = () => {
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({
    'card-01': false,
    'card-02': false,
    'card-03': false,
    'card-04': false,
  });

  const [activeProof, setActiveProof] = useState<string | null>(null);

  const cards: BringCard[] = [
    {
      id: 'card-01',
      cardNum: '01',
      title: 'SUPPLY CHAIN',
      headline: 'I understand the operation.',
      tags: [
        'Supply Planning',
        'S&OP',
        'Production Planning',
        'Inventory',
        'Raw Materials',
        'New Product Launches',
        'Supplier Coordination',
        'Logistics',
      ],
      expandedContent:
        'My foundation is hands-on supply chain. I have worked across planning, production, inventory, raw materials and cross-functional coordination — not just studied them.',
      icon: <Layers className="w-4 h-4 text-[#C2410C]" />,
    },
    {
      id: 'card-02',
      cardNum: '02',
      title: 'DIGITAL TRANSFORMATION',
      headline: 'I can connect operations with technology.',
      tags: [
        'SAP S/4HANA',
        'PowerApps',
        'Digital Replenishment',
        'Business Requirements',
        'Functional Logic',
        'UAT',
        'Jira',
        'Process Improvement',
      ],
      expandedContent:
        'At EY, I moved from operating supply chains to helping translate supply-chain requirements into digital solutions — working between business users and development teams.',
      icon: <Laptop className="w-4 h-4 text-[#C2410C]" />,
    },
    {
      id: 'card-03',
      cardNum: '03',
      title: 'AI & ANALYTICS',
      headline: "I'm interested in what comes next.",
      tags: [
        'AI',
        'Prompt Engineering',
        'Google AI Studio',
        'ChatGPT',
        'Copilot',
        'Excel',
        'Power BI',
        'Python — Learning',
      ],
      expandedContent:
        "I'm not an AI engineer. I'm a supply-chain professional learning how AI can solve real operational problems — from risk detection and planning to decision support and planner productivity.",
      icon: <Cpu className="w-4 h-4 text-[#C2410C]" />,
    },
    {
      id: 'card-04',
      cardNum: '04',
      title: 'BUSINESS & INDUSTRY AGILITY',
      headline: 'I learn the business behind the supply chain.',
      tags: [
        'Specialty Chemicals',
        'FMCG',
        'Cross-Industry',
        'Economics',
        'Constraints',
        'SMU MBA',
      ],
      expandedContent:
        'My experience began in specialty chemicals, expanded through an MBA and consulting exposure, and continues to grow across industries. I focus on understanding the underlying supply-chain problem first, then adapting to the product, customer, economics and constraints of the industry.',
      icon: <Globe className="w-4 h-4 text-[#C2410C]" />,
    },
  ];

  const proofItems: ProofItem[] = [
    {
      id: 'progression',
      title: 'PROGRESSION',
      stat: 'Intern → Officer',
      explanation:
        'Advanced rapidly across 4 formal roles at Galaxy Surfactants in 3.5 years, taking on production scheduling, RM feed, and multi-market S&OP.',
    },
    {
      id: 'scale',
      title: 'SCALE',
      stat: '50 SKUs | 700 MT',
      explanation:
        'Governed supply planning and production allocation for 50 specialty chemical SKUs spanning Europe, North America, and Indian domestic demand.',
    },
    {
      id: 'ownership',
      title: 'OWNERSHIP',
      stat: '~6,000 MT/month RM',
      explanation:
        'Direct procurement scheduling for Lauryl Alcohol representing ~60% of total plant raw material volume, reducing stockouts by 16%.',
    },
    {
      id: 'transformation',
      title: 'TRANSFORMATION',
      stat: '5-market digital rollout',
      explanation:
        'Consulting engagement at EY Singapore translating supply-planning logic into standardized digital replenishment capabilities for a global FMCG enterprise.',
    },
  ];

  const toggleCard = (id: string) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const howIWorkSteps = [
    'Asked to do X',
    'Understand the bigger problem',
    'Take ownership',
    'Learn what I don\'t know',
    'Deliver',
  ];

  return (
    <section id="why-me" className="py-16 sm:py-20 bg-[#FAF9F6] border-b border-[#E5E2D9] scroll-mt-28 lg:scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C2410C] block mb-1">
            Value Proposition
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#1A1A1A] tracking-tight">
            WHAT I BRING
          </h2>
          <p className="mt-2 text-base font-serif italic text-stone-700">
            &ldquo;A combination of hands-on supply chain experience, business thinking and digital curiosity.&rdquo;
          </p>
        </div>

        {/* 4 Large Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {cards.map((card) => {
            const isExpanded = expandedCards[card.id];
            return (
              <div
                key={card.id}
                className={`rounded-xl border p-5 sm:p-6 transition-all bg-white flex flex-col justify-between ${
                  isExpanded
                    ? 'border-[#C2410C] ring-1 ring-[#C2410C] shadow-sm'
                    : 'border-[#E5E2D9] hover:border-[#C2410C]/60 shadow-2xs'
                }`}
                id={`what-i-bring-${card.id}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-md bg-[#FAF9F6] border border-[#E5E2D9]">
                        {card.icon}
                      </div>
                      <span className="text-[11px] font-mono font-bold text-[#C2410C] tracking-wider uppercase">
                        CARD {card.cardNum} &bull; {card.title}
                      </span>
                    </div>

                    <button
                      onClick={() => toggleCard(card.id)}
                      className="text-xs font-mono text-[#C2410C] font-semibold hover:underline cursor-pointer flex items-center gap-1"
                    >
                      <span>{isExpanded ? 'Collapse' : '+ explore'}</span>
                    </button>
                  </div>

                  {/* Surface Headline (<= 20 words) */}
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A1A1A] mb-3">
                    {card.headline}
                  </h3>

                  {/* Compact Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-[#FAF9F6] border border-[#E5E2D9] text-stone-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="pt-3 border-t border-stone-100 text-xs sm:text-sm font-serif text-stone-800 leading-relaxed bg-[#FFF7ED] p-3.5 rounded-lg animate-in fade-in duration-150">
                      <p>&ldquo;{card.expandedContent}&rdquo;</p>
                    </div>
                  )}
                </div>

                {!isExpanded && (
                  <button
                    onClick={() => toggleCard(card.id)}
                    className="mt-2 text-left text-[11px] font-mono text-stone-400 hover:text-[#C2410C] transition-colors flex items-center justify-between pt-2 border-t border-stone-100"
                  >
                    <span>Click to see expanded context</span>
                    <ArrowRight className="w-3 h-3 text-[#C2410C]" />
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* "HOW I WORK" Strip */}
        <div className="mt-12 bg-white rounded-xl border border-[#E5E2D9] p-6 sm:p-8 shadow-2xs">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C2410C] block mb-2">
            Work Ethic &amp; Ownership
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#1A1A1A] mb-4">
            More responsibility than the job description?
          </h3>

          {/* Visual Step Progression */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5 mb-6">
            {howIWorkSteps.map((step, idx) => (
              <div
                key={step}
                className="p-3 rounded-lg bg-[#FAF9F6] border border-[#E5E2D9] flex flex-col justify-between"
              >
                <span className="text-[10px] font-mono font-bold text-[#C2410C] mb-1">
                  0{idx + 1}
                </span>
                <span className="text-xs font-serif font-bold text-[#1A1A1A] leading-snug">
                  {step}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-[#E5E2D9] space-y-2">
            <p className="text-sm font-serif text-stone-800">
              &ldquo;Throughout my career, I have tried not to let my title define the work I am capable of taking responsibility for.&rdquo;
            </p>
            <p className="text-xs font-mono font-semibold text-[#C2410C]">
              Signature takeaway: &ldquo;My titles changed gradually. The responsibility I was trusted with grew faster.&rdquo;
            </p>
          </div>
        </div>

        {/* "PROOF" Row */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500 font-semibold">
              The Proof Row (Click card to reveal evidence)
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {proofItems.map((p) => {
              const isSelected = activeProof === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveProof(isSelected ? null : p.id)}
                  className={`p-4 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white border-[#C2410C] ring-2 ring-[#FED7AA] shadow-sm'
                      : 'bg-white border-[#E5E2D9] hover:border-[#C2410C]/60 shadow-2xs'
                  }`}
                  id={`proof-row-${p.id}`}
                >
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block mb-1">
                      {p.title}
                    </span>
                    <div className="text-sm sm:text-base font-serif font-bold text-[#1A1A1A]">
                      {p.stat}
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-[#C2410C]">
                    <span>{isSelected ? 'Hide' : '+ explore'}</span>
                    <ArrowRight className="w-2.5 h-2.5" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Proof Drawer / Explanation */}
          {activeProof && (
            <div className="mt-3 p-4 rounded-xl bg-white border border-[#C2410C] shadow-2xs animate-in fade-in duration-150 flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold text-[#C2410C] uppercase block mb-1">
                  Verified Evidence &bull; {proofItems.find((p) => p.id === activeProof)?.title}
                </span>
                <p className="text-xs sm:text-sm font-serif text-stone-800">
                  {proofItems.find((p) => p.id === activeProof)?.explanation}
                </p>
              </div>
              <button
                onClick={() => setActiveProof(null)}
                className="p-1 text-stone-400 hover:text-stone-700 cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
