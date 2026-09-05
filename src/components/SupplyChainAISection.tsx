import React, { useState } from 'react';
import { Cpu, Sparkles, CheckCircle2, BookOpen, Compass, ArrowRight } from 'lucide-react';

interface BubbleItem {
  id: string;
  name: string;
  explanation: string;
}

export const SupplyChainAISection: React.FC = () => {
  const [activeBubble, setActiveBubble] = useState<string>('demand-sensing');

  const bubbles: BubbleItem[] = [
    {
      id: 'demand-sensing',
      name: 'Demand Sensing',
      explanation:
        'Evaluating near-term downstream signals (POS, distributor sell-out, weather anomalies) to adjust short-horizon planning before static monthly forecast revisions.',
    },
    {
      id: 'risk-intelligence',
      name: 'Risk Intelligence',
      explanation:
        'Scanning multi-tier port congestion indices, carrier performance feeds, and supplier financial alerts to identify choke points weeks ahead.',
    },
    {
      id: 'scenario-planning',
      name: 'Scenario Planning',
      explanation:
        'Running dynamic "what-if" simulations on supplier shutdowns or line outages in minutes rather than spending days rebuilding spreadsheet matrices.',
    },
    {
      id: 'inventory-decisions',
      name: 'Inventory Decisions',
      explanation:
        'Shifting from static safety-stock formulas to probabilistic multi-echelon inventory optimization based on real demand variance.',
    },
    {
      id: 'planner-productivity',
      name: 'Planner Productivity',
      explanation:
        'Empowering planners with conversational AI co-pilots that instantly synthesize ERP order backlogs, PO statuses, and S&OP exception logs.',
    },
  ];

  const currentBubble = bubbles.find((b) => b.id === activeBubble) || bubbles[0];

  return (
    <section id="supply-chain-ai" className="py-16 sm:py-20 bg-[#FAF9F6] border-b border-[#E5E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C2410C]">
              What&apos;s Next?
            </span>
            <span className="text-[10px] font-mono text-stone-500 bg-[#F5F3ED] px-2 py-0.5 rounded-full border border-[#E5E2D9]">
              Future Frontier
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#1A1A1A] tracking-tight">
            Supply Chain + AI
          </h2>
          <p className="mt-3 text-base text-stone-800 font-serif italic leading-relaxed">
            &ldquo;I&apos;m interested in how AI can move supply chains from reacting to exceptions towards anticipating them and helping planners make better decisions.&rdquo;
          </p>
          <div className="mt-2 text-xs font-mono text-stone-500">
            Microcopy: &ldquo;What happens when supply chain meets AI?&rdquo;
          </div>
        </div>

        {/* 5 Interactive Bubbles */}
        <div className="mb-8">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-500 block mb-3">
            5 Interactive Focus Areas (Click to reveal application)
          </span>
          <div className="flex flex-wrap gap-2.5">
            {bubbles.map((b) => {
              const isSelected = activeBubble === b.id;
              return (
                <button
                  key={b.id}
                  onClick={() => setActiveBubble(b.id)}
                  className={`px-4 py-2 rounded-full text-xs font-serif font-semibold transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-[#1A1A1A] text-[#FAF9F6] border-[#1A1A1A] shadow-xs ring-2 ring-[#FED7AA]'
                      : 'bg-white text-stone-700 border-[#E5E2D9] hover:border-[#C2410C] hover:text-[#C2410C]'
                  }`}
                  id={`ai-bubble-${b.id}`}
                >
                  {b.name}
                </button>
              );
            })}
          </div>

          {/* Reveal Box */}
          <div className="mt-4 p-5 rounded-xl bg-white border border-[#E5E2D9] shadow-2xs max-w-3xl">
            <div className="flex items-center gap-2 mb-1.5 text-xs font-mono text-[#C2410C]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{currentBubble.name} Application</span>
            </div>
            <p className="text-sm font-serif text-stone-800 leading-relaxed">
              {currentBubble.explanation}
            </p>
          </div>
        </div>

        {/* 3 Distinct Horizons Matrix: Done / Learning / Want to Explore */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="bg-white p-5 rounded-xl border border-[#E5E2D9] shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#C2410C] uppercase mb-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>What I Have Done</span>
            </div>
            <p className="text-xs text-stone-700 leading-relaxed font-normal">
              Automated ERP purchase workflows in SAP S/4HANA, supported multi-echelon digital replenishment rollout at EY, and used LLMs to accelerate S&OP briefs and UAT test cases.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-[#E5E2D9] shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-stone-800 uppercase mb-2">
              <BookOpen className="w-4 h-4 text-[#C2410C]" />
              <span>What I&apos;m Learning</span>
            </div>
            <p className="text-xs text-stone-700 leading-relaxed font-normal">
              Studying Python data analysis (Pandas, NumPy) in Jupyter notebooks for safety-stock calculations, and evaluating AI agent prompt frameworks for supply disruption alert parsing.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-[#E5E2D9] shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-stone-800 uppercase mb-2">
              <Compass className="w-4 h-4 text-[#C2410C]" />
              <span>What I Want to Explore</span>
            </div>
            <p className="text-xs text-stone-700 leading-relaxed font-normal">
              Predictive exception management, AI planner co-pilots, and dynamic scenario evaluation that assist planners during supply-demand imbalances.
            </p>
          </div>
        </div>

        {/* Clear Humble Positioning */}
        <div className="mt-8 p-4 rounded-xl bg-[#F5F3ED] border border-[#E5E2D9] text-xs text-stone-700 flex items-center justify-between flex-wrap gap-2">
          <div>
            <span className="font-serif font-bold text-[#1A1A1A]">Humble Positioning: </span>
            <span>&ldquo;Supply-chain practitioner learning how AI can solve real supply-chain problems.&rdquo;</span>
          </div>
          <span className="font-mono text-[11px] text-stone-500">Not an AI theorist &bull; Practical business grounding</span>
        </div>
      </div>
    </section>
  );
};
