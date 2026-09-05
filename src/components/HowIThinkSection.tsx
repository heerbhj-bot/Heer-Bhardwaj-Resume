import React, { useState } from 'react';
import { Compass, Lightbulb, ChevronRight, CheckCircle2 } from 'lucide-react';

interface Principle {
  num: string;
  title: string;
  summary: string;
  expansion: string; // <= 30 words
}

export const HowIThinkSection: React.FC = () => {
  const [activePrinciple, setActivePrinciple] = useState<string>('01');

  const principles: Principle[] = [
    {
      num: '01',
      title: 'Think End-to-End',
      summary: 'A planning decision rarely stops at one function.',
      expansion:
        'A single safety stock tweak ripples from supplier purchase orders to plant changeovers, warehouse working capital, and customer service delivery.',
    },
    {
      num: '02',
      title: 'Understand the Why',
      summary: 'Don\'t just execute a process. Understand the business problem behind it.',
      expansion:
        'Following static formulas without questioning commercial intent or operational constraints leads to dead inventory and blind firefighting.',
    },
    {
      num: '03',
      title: 'Improve What Exists',
      summary: 'If something works, ask whether it can work better.',
      expansion:
        'Even stable processes hide hidden capacity bottlenecks and manual Excel fatigue waiting to be simplified with smarter scheduling or digital workflows.',
    },
    {
      num: '04',
      title: 'Keep Learning',
      summary: 'Supply chains evolve. So do I.',
      expansion:
        'From factory floors to corporate valuation and emerging AI decision tools, continuous curiosity is essential to navigate modern volatility.',
    },
  ];

  return (
    <section id="how-i-think" className="py-16 sm:py-20 bg-[#FAF9F6] border-b border-[#E5E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C2410C] block mb-1.5">
            Mindset & Principles
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#1A1A1A] tracking-tight">
            How I Think
          </h2>
          <p className="mt-2 text-base text-stone-700 font-normal">
            Four simple principles that guide how I approach planning, cross-functional trade-offs, and operational change.
          </p>
        </div>

        {/* 4 Interactive Statements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {principles.map((item) => {
            const isActive = activePrinciple === item.num;
            return (
              <div
                key={item.num}
                onClick={() => setActivePrinciple(item.num)}
                className={`bg-white rounded-xl border p-6 transition-all cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'border-[#C2410C] ring-1 ring-[#C2410C] shadow-sm'
                    : 'border-[#E5E2D9] hover:border-[#C2410C]/40 shadow-2xs'
                }`}
                id={`principle-${item.num}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-[#C2410C]">
                      PRINCIPLE {item.num}
                    </span>
                    <span className="text-[10px] font-mono text-stone-400">
                      {isActive ? 'Expanded' : 'Click to expand'}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A1A1A] mb-1.5">
                    {item.title}
                  </h3>

                  <p className="text-sm font-serif italic text-stone-800 mb-4 leading-snug">
                    &ldquo;{item.summary}&rdquo;
                  </p>

                  <div className="pt-3 border-t border-[#E5E2D9] text-xs font-serif text-stone-700 leading-relaxed bg-[#FAF9F6] p-3 rounded-lg">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block mb-0.5">
                      In Practice (≤ 30 words)
                    </span>
                    {item.expansion}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
