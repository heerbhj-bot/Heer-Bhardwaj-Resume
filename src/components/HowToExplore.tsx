import React from 'react';
import { ArrowDown, Plus, ArrowRight } from 'lucide-react';

export const HowToExplore: React.FC = () => {
  return (
    <aside
      id="how-to-explore"
      className="py-3 bg-[#FAF9F6] border-b border-[#E5E2D9]"
      aria-label="How to explore guide"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-stone-600">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C2410C] animate-pulse"></span>
            <span className="font-semibold uppercase tracking-wider text-[#1A1A1A]">
              How to explore:
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-[11px] sm:text-xs">
            <div className="flex items-center gap-1.5">
              <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#F5F3ED] border border-[#E5E2D9] text-[#C2410C]">
                <ArrowDown className="w-2.5 h-2.5 animate-bounce" />
              </span>
              <span className="font-bold text-[#1A1A1A]">Scroll</span>
              <span className="text-stone-400">&rarr;</span>
              <span>Get the 20-second version</span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#F5F3ED] border border-[#E5E2D9] text-[#C2410C]">
                <Plus className="w-2.5 h-2.5" />
              </span>
              <span className="font-bold text-[#1A1A1A]">Click</span>
              <span className="text-stone-400">&rarr;</span>
              <span>See the detail</span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#F5F3ED] border border-[#E5E2D9] text-[#C2410C]">
                <ArrowRight className="w-2.5 h-2.5" />
              </span>
              <span className="font-bold text-[#1A1A1A]">Explore</span>
              <span className="text-stone-400">&rarr;</span>
              <span>Follow the parts that interest you</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
