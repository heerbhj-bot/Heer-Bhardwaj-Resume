import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';

interface HowToExploreProps {
  onOpenRecruiterView?: () => void;
}

export const HowToExplore: React.FC<HowToExploreProps> = ({ onOpenRecruiterView }) => {
  const steps = [
    {
      num: '01',
      title: 'Meet me',
      subtitle: 'A 30-second snapshot',
      href: '#me-in-a-nutshell',
      id: 'step-meet-me',
    },
    {
      num: '02',
      title: 'Follow the journey',
      subtitle: 'Operations → MBA → Consulting',
      href: '#how-i-got-here',
      id: 'step-journey',
    },
    {
      num: '03',
      title: 'Explore the work',
      subtitle: 'Real supply-chain problems',
      href: '#case-studies',
      id: 'step-work',
    },
    {
      num: '04',
      title: 'See what\'s next',
      subtitle: 'Digital + AI in planning',
      href: '#supply-chain-ai',
      id: 'step-ai',
    },
  ];

  return (
    <section
      id="how-to-explore"
      className="py-6 bg-[#FAF9F6] border-b border-[#E5E2D9]"
      aria-label="How to explore this portfolio"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl border border-[#E5E2D9] p-4 sm:p-5 shadow-2xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Subtle Label */}
            <div className="flex items-center gap-2 shrink-0">
              <div className="w-7 h-7 rounded-md bg-[#F5F3ED] border border-[#E5E2D9] flex items-center justify-center text-stone-700">
                <Compass className="w-3.5 h-3.5 text-[#C2410C]" />
              </div>
              <div>
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-stone-500 block leading-tight">
                  Micro-Guide
                </span>
                <span className="text-xs font-serif font-bold text-[#1A1A1A]">
                  How to explore
                </span>
              </div>
              <span className="hidden sm:inline-block text-[11px] text-stone-400 font-serif italic pl-2 border-l border-[#E5E2D9]">
                &ldquo;You don&apos;t need to read everything.&rdquo;
              </span>
            </div>

            {/* 4 Steps Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 flex-1 max-w-3xl">
              {steps.map((step) => (
                <a
                  key={step.num}
                  href={step.href}
                  id={step.id}
                  className="group flex flex-col p-2.5 rounded-lg bg-[#FAF9F6] hover:bg-[#F5F3ED] border border-[#E5E2D9] hover:border-[#C2410C]/40 transition-all text-left"
                >
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#C2410C] mb-1">
                    <span>{step.num} &rarr;</span>
                    <ArrowRight className="w-3 h-3 text-stone-400 group-hover:text-[#C2410C] group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <div className="text-xs font-serif font-bold text-[#1A1A1A] group-hover:text-[#C2410C] transition-colors leading-tight">
                    {step.title}
                  </div>
                  <div className="text-[11px] text-stone-500 truncate mt-0.5">
                    {step.subtitle}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
