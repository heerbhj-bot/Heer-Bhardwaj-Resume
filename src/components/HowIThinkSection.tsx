import React, { useState } from 'react';
import { Compass, Sparkles, User, ArrowRight, Plus, CheckCircle2 } from 'lucide-react';

interface CircularNode {
  id: string;
  name: string;
  angle: number; // for circular distribution
  detail: string;
}

interface Principle {
  num: string;
  title: string;
  sentence: string; // Max 20 words
  expanded: string;
}

interface AIBubble {
  id: string;
  title: string;
  subtitle: string;
  explanation: string;
}

export const HowIThinkSection: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string>('planning');
  const [expandedPrinciples, setExpandedPrinciples] = useState<Record<string, boolean>>({
    '01': false,
    '02': false,
    '03': false,
    '04': false,
  });
  const [selectedBubble, setSelectedBubble] = useState<string>('see-earlier');

  const nodes: CircularNode[] = [
    {
      id: 'demand',
      name: 'Demand',
      angle: 0,
      detail: 'Commercial forecasting & consumption signals that initiate the entire cycle.',
    },
    {
      id: 'planning',
      name: 'Planning',
      angle: 45,
      detail: 'Reconciling demand with manufacturing capacity, inventory, and working capital.',
    },
    {
      id: 'supply',
      name: 'Supply',
      angle: 90,
      detail: 'Managing multi-tier vendor commitments, lead times, and freight routes.',
    },
    {
      id: 'production',
      name: 'Production',
      angle: 135,
      detail: 'Plant throughput, changeover scheduling, and resource allocation.',
    },
    {
      id: 'inventory',
      name: 'Inventory',
      angle: 180,
      detail: 'Dynamic safety buffers to absorb variance without cash lockup.',
    },
    {
      id: 'procurement',
      name: 'Procurement',
      angle: 225,
      detail: 'Raw material feed continuity and supplier contract coordination.',
    },
    {
      id: 'logistics',
      name: 'Logistics',
      angle: 270,
      detail: 'Port handling, customs clearance, and container dwell time control.',
    },
    {
      id: 'technology',
      name: 'Technology',
      angle: 315,
      detail: 'ERP workflows, digital replenishment, and real-time visibility tools.',
    },
  ];

  const principles: Principle[] = [
    {
      num: '01',
      title: 'AGILITY',
      sentence: 'Supply chains rarely behave exactly as planned. Good planning must leave room to respond.',
      expanded:
        'Building dynamic safety stocks and variable production schedules ensures operations absorb supplier delays and sudden demand surges without plant shutdowns.',
    },
    {
      num: '02',
      title: 'COMMUNICATION',
      sentence: 'A supply chain is connected. A decision in one function can create a problem somewhere else. Communication keeps the chain intact.',
      expanded:
        'A single sales promotion change impacts plant changeovers, logistics bookings, and warehouse space. Regular cross-functional S&OP prevents silos.',
    },
    {
      num: '03',
      title: 'CUSTOMER',
      sentence: 'When I prioritise a supply-chain problem, I think about customer impact alongside cost, capacity and inventory.',
      expanded:
        'Cost savings achieved at the expense of OTIF (On-Time In-Full) delivery damage long-term business value. The customer is the true benchmark.',
    },
    {
      num: '04',
      title: 'CONTINUOUS IMPROVEMENT',
      sentence: 'The goal isn\'t simply to keep the chain running. It is to make it more responsive, visible and efficient.',
      expanded:
        'Whether automating manual purchase orders in SAP or shifting markets from Excel to digital platforms, stable processes can always be made simpler.',
    },
  ];

  const aiBubbles: AIBubble[] = [
    {
      id: 'see-earlier',
      title: 'SEE EARLIER',
      subtitle: 'Risk & disruption signals',
      explanation:
        'Scanning multi-tier port congestion indices, carrier performance feeds, and supplier alerts to flag bottlenecks weeks before stockouts occur.',
    },
    {
      id: 'plan-better',
      title: 'PLAN BETTER',
      subtitle: 'Demand / supply scenarios',
      explanation:
        'Simulating what-if scenarios across raw material outages or plant line downtime in seconds instead of building complex manual spreadsheet formulas.',
    },
    {
      id: 'respond-faster',
      title: 'RESPOND FASTER',
      subtitle: 'Exception management',
      explanation:
        'Automating standard replenishment triggers so planners spend their time solving real operational exceptions rather than manual order entry.',
    },
    {
      id: 'decide-smarter',
      title: 'DECIDE SMARTER',
      subtitle: 'Decision support',
      explanation:
        'Providing planners with probabilistic trade-offs between overtime production costs, airfreight expedites, and customer backorder penalties.',
    },
    {
      id: 'work-better',
      title: 'WORK BETTER',
      subtitle: 'Planner productivity & automation',
      explanation:
        'Empowering supply planners with AI co-pilots that instantly parse ERP backlogs, purchase order status, and weekly S&OP variance logs.',
    },
  ];

  const togglePrinciple = (num: string) => {
    setExpandedPrinciples((prev) => ({ ...prev, [num]: !prev[num] }));
  };

  const currentNode = nodes.find((n) => n.id === selectedNode) || nodes[1];
  const currentAIBubble = aiBubbles.find((b) => b.id === selectedBubble) || aiBubbles[0];

  return (
    <section id="how-i-think" className="py-16 sm:py-20 bg-[#FAF9F6] border-b border-[#E5E2D9] scroll-mt-28 lg:scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C2410C] block mb-1">
            Philosophy &amp; Mindset
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#1A1A1A] tracking-tight">
            HOW I SEE SUPPLY CHAIN
          </h2>
          <p className="mt-2 text-base font-serif italic text-stone-700">
            &ldquo;This section is about my thinking, not my resume.&rdquo;
          </p>
        </div>

        {/* Circular Diagram: CUSTOMER at the centre */}
        <div className="bg-white rounded-2xl border border-[#E5E2D9] p-6 sm:p-10 shadow-2xs mb-14">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#C2410C] font-semibold block mb-1">
              The Central Premise
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#1A1A1A]">
              Every supply-chain decision eventually reaches the customer.
            </h3>
            <p className="text-xs font-serif text-stone-500 mt-1">
              Click any function around the customer to see how it ties back to delivery and value.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Circular Representation */}
            <div className="lg:col-span-7 flex flex-col items-center justify-center p-4">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full border border-dashed border-[#E5E2D9] pointer-events-none"></div>

                {/* Center: CUSTOMER */}
                <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#1A1A1A] text-[#FAF9F6] flex flex-col items-center justify-center p-2 text-center shadow-lg border-2 border-[#FED7AA]">
                  <User className="w-5 h-5 text-[#FED7AA] mb-0.5" />
                  <span className="text-xs font-mono font-bold tracking-widest uppercase">
                    CUSTOMER
                  </span>
                  <span className="text-[9px] font-serif text-stone-300 italic leading-tight mt-0.5">
                    Service, OTIF &amp; Value
                  </span>
                </div>

                {/* 8 Nodes positioned radially */}
                {nodes.map((node, i) => {
                  const radius = 120; // px
                  const rad = (node.angle * Math.PI) / 180;
                  const x = radius * Math.cos(rad);
                  const y = radius * Math.sin(rad);
                  const isSelected = selectedNode === node.id;

                  return (
                    <button
                      key={node.id}
                      onClick={() => setSelectedNode(node.id)}
                      style={{
                        transform: `translate(${x}px, ${y}px)`,
                      }}
                      className={`absolute px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold transition-all cursor-pointer border ${
                        isSelected
                          ? 'bg-[#C2410C] text-white border-[#C2410C] shadow-md scale-110 z-20'
                          : 'bg-white text-stone-700 border-[#E5E2D9] hover:border-[#C2410C] hover:text-[#C2410C] z-10'
                      }`}
                      id={`node-${node.id}`}
                    >
                      {node.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Node Explanation Card */}
            <div className="lg:col-span-5 bg-[#FAF9F6] rounded-xl border border-[#E5E2D9] p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#C2410C] font-bold">
                  Connected Function
                </span>
                <span className="text-[10px] font-mono text-stone-400">
                  Impact on Customer
                </span>
              </div>
              <h4 className="text-xl font-serif font-bold text-[#1A1A1A] mb-1">
                {currentNode.name}
              </h4>
              <p className="text-xs sm:text-sm font-serif text-stone-700 leading-relaxed mb-4">
                {currentNode.detail}
              </p>
              <div className="p-3 bg-white rounded-lg border border-[#E5E2D9] text-xs font-serif text-stone-800">
                <span className="font-bold text-[#1A1A1A] block mb-0.5">Why it matters:</span>
                Failing here directly risks product stockouts, delayed fulfillment, or inflated costs passed to the customer.
              </div>
            </div>
          </div>
        </div>

        {/* 4 Short Principles (Max 20 words on surface, expandable) */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-500">
              Four Guiding Principles (Click to expand practical reality)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {principles.map((p) => {
              const isExpanded = expandedPrinciples[p.num];
              return (
                <div
                  key={p.num}
                  className={`p-5 rounded-xl bg-white border transition-all flex flex-col justify-between ${
                    isExpanded
                      ? 'border-[#C2410C] ring-1 ring-[#C2410C] shadow-sm'
                      : 'border-[#E5E2D9] hover:border-[#C2410C]/60 shadow-2xs'
                  }`}
                  id={`principle-card-${p.num}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-[#C2410C]">
                        {p.num} &bull; {p.title}
                      </span>
                      <button
                        onClick={() => togglePrinciple(p.num)}
                        className="text-[11px] font-mono text-[#C2410C] font-semibold hover:underline cursor-pointer"
                      >
                        {isExpanded ? 'Collapse' : '+ explore'}
                      </button>
                    </div>

                    {/* Default View <= 20 words */}
                    <p className="text-sm font-serif italic text-stone-800 leading-snug mb-3">
                      &ldquo;{p.sentence}&rdquo;
                    </p>

                    {/* Expandable on click */}
                    {isExpanded && (
                      <div className="mt-2 pt-2 border-t border-stone-100 text-xs font-serif text-stone-700 bg-[#FAF9F6] p-3 rounded-lg leading-relaxed animate-in fade-in duration-150">
                        <span className="text-[10px] font-mono uppercase text-stone-400 block mb-0.5 font-bold">
                          In Practice
                        </span>
                        {p.expanded}
                      </div>
                    )}
                  </div>

                  {!isExpanded && (
                    <button
                      onClick={() => togglePrinciple(p.num)}
                      className="text-left text-[10px] font-mono text-stone-400 hover:text-[#C2410C] pt-2 border-t border-stone-100 flex items-center justify-between"
                    >
                      <span>Click to see operational application</span>
                      <ArrowRight className="w-2.5 h-2.5" />
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* AI + SUPPLY CHAIN SUBSECTION */}
        <div className="bg-white rounded-2xl border border-[#E5E2D9] p-6 sm:p-8 shadow-2xs">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C2410C] block mb-1">
              Future Frontier
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#1A1A1A]">
              WHAT AI COULD CHANGE
            </h3>
            <p className="text-xs font-serif text-stone-600 mt-1">
              Connecting applied artificial intelligence directly to supply chain planning problems.
            </p>
          </div>

          {/* 5 Clickable Bubbles */}
          <div className="flex flex-wrap gap-2.5 mb-6">
            {aiBubbles.map((bubble) => {
              const isSelected = selectedBubble === bubble.id;
              return (
                <button
                  key={bubble.id}
                  onClick={() => setSelectedBubble(bubble.id)}
                  className={`px-3.5 py-2 rounded-xl text-left border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#1A1A1A] text-[#FAF9F6] border-[#1A1A1A] shadow-xs'
                      : 'bg-[#FAF9F6] text-stone-800 border-[#E5E2D9] hover:border-[#C2410C]'
                  }`}
                  id={`ai-bubble-${bubble.id}`}
                >
                  <div className="text-xs font-mono font-bold">{bubble.title}</div>
                  <div className={`text-[10px] font-serif ${isSelected ? 'text-[#FED7AA]' : 'text-stone-500'}`}>
                    {bubble.subtitle}
                  </div>
                </button>
              );
            })}
          </div>

          {/* 1-2 sentence explanation */}
          <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#E5E2D9] mb-6">
            <div className="flex items-center gap-2 mb-1.5 text-xs font-mono font-bold text-[#C2410C]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{currentAIBubble.title} &bull; {currentAIBubble.subtitle}</span>
            </div>
            <p className="text-xs sm:text-sm font-serif text-stone-800 leading-relaxed">
              {currentAIBubble.explanation}
            </p>
          </div>

          {/* Closing Strong Statement */}
          <div className="p-4 rounded-xl bg-[#FFF7ED] border border-[#FED7AA] text-center sm:text-left">
            <p className="text-sm sm:text-base font-serif font-bold text-[#1A1A1A] leading-relaxed">
              &ldquo;I see AI less as a replacement for supply-chain expertise and more as a way to make that expertise faster, more informed and more responsive.&rdquo;
            </p>
            <div className="mt-1 text-[11px] font-mono text-[#C2410C]">
              Humble Positioning &bull; Supply-chain practitioner learning how AI solves real operational problems
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
