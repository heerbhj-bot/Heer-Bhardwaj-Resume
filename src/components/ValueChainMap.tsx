import React, { useState } from 'react';
import { VALUE_CHAIN_NODES } from '../data/careerData';
import { ArrowRight, CheckCircle2, Shield, Wrench, Info } from 'lucide-react';

export const ValueChainMap: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>(VALUE_CHAIN_NODES[1].id);

  const activeNode =
    VALUE_CHAIN_NODES.find((n) => n.id === activeNodeId) || VALUE_CHAIN_NODES[0];

  const getLevelBadge = (level: string) => {
    switch (level) {
      case 'Experienced':
        return (
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
            Experienced
          </span>
        );
      case 'Working Knowledge':
        return (
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
            Working Knowledge
          </span>
        );
      default:
        return (
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
            Currently Developing
          </span>
        );
    }
  };

  return (
    <section id="value-chain" className="py-20 bg-[#F5F3ED] border-b border-[#E5E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C2410C] block mb-2">
            End-to-End Operational Breadth
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#1A1A1A] tracking-tight">
            Interactive Supply Chain Value Map
          </h2>
          <p className="mt-3 text-base text-stone-700 leading-relaxed font-normal">
            Supply chain decisions cannot be made in silos. Click across each node of the value chain to inspect my hands-on operational ownership, verified applications, and systems expertise.
          </p>
        </div>

        {/* Horizontal Chain Flow (Desktop) & Grid (Mobile) */}
        <div className="mb-8 overflow-x-auto pb-4 pt-1">
          <div className="flex items-center gap-2 min-w-[760px] lg:min-w-0 lg:grid lg:grid-cols-7">
            {VALUE_CHAIN_NODES.map((node, i) => {
              const isSelected = activeNodeId === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => setActiveNodeId(node.id)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex-1 relative ${
                    isSelected
                      ? 'bg-[#1A1A1A] text-[#FAF9F6] border-[#1A1A1A] shadow-md ring-1 ring-[#C2410C]'
                      : 'bg-white hover:bg-[#FAF9F6] text-stone-800 border-[#E5E2D9] shadow-2xs hover:border-[#C2410C]/40'
                  }`}
                  id={`value-node-${node.id}`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className={`text-[10px] font-mono font-bold ${
                        isSelected ? 'text-[#FED7AA]' : 'text-stone-400'
                      }`}
                    >
                      {node.stage}
                    </span>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C2410C]"></span>
                    )}
                  </div>
                  <div className="text-xs font-serif font-bold leading-tight mb-2 line-clamp-2">
                    {node.title}
                  </div>
                  <div>
                    <span
                      className={`text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded-md ${
                        isSelected
                          ? 'bg-stone-800 text-stone-200'
                          : 'bg-[#F5F3ED] text-stone-700 border border-[#E5E2D9]'
                      }`}
                    >
                      {node.level}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Node Detail Card */}
        <div className="bg-white rounded-2xl border border-[#E5E2D9] p-6 sm:p-8 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E5E2D9] pb-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono font-semibold text-stone-500">
                  NODE {activeNode.stage} OF 07
                </span>
                {getLevelBadge(activeNode.level)}
              </div>
              <h3 className="text-2xl font-serif font-normal text-[#1A1A1A]">
                {activeNode.title}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-500 mb-1.5">
                  Scope & Understanding
                </h4>
                <p className="text-sm text-stone-700 leading-relaxed font-normal">
                  {activeNode.heerExperience}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-500 mb-1.5">
                  Verified Application & Track Record
                </h4>
                <div className="p-4 rounded-lg bg-[#F5F3ED] border border-[#E5E2D9] text-xs sm:text-sm text-[#1A1A1A] font-serif italic leading-relaxed">
                  &ldquo;{activeNode.verifiedApplication}&rdquo;
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-500 mb-2">
                  Key Systems, Tools & Methods
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeNode.toolsUsed.map((tool) => (
                    <span
                      key={tool}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#F5F3ED] border border-[#E5E2D9] text-stone-800 shadow-2xs"
                    >
                      <Wrench className="w-3 h-3 text-[#C2410C]" />
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#F5F3ED] border border-[#E5E2D9] text-xs text-stone-600 space-y-1">
                <div className="flex items-center gap-1.5 font-serif font-bold text-[#1A1A1A]">
                  <Info className="w-3.5 h-3.5 text-[#C2410C]" />
                  <span>Why this matters for your team:</span>
                </div>
                <p>
                  Because Heer has worked upstream (Procurement, RM scheduling) and downstream (S&OP, Customer Launch OTIF), she does not plan in an isolated bubble.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
