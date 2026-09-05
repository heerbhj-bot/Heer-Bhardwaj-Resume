import React from 'react';
import { ArrowRight, Compass, Sparkles, BookOpen, Lightbulb } from 'lucide-react';

export const WhySupplyChainSection: React.FC = () => {
  const chapters = [
    {
      num: '01',
      title: 'Curiosity',
      text: 'Started with a BBA in business-oriented disciplines. COVID made supply-chain disruption impossible to ignore.',
    },
    {
      num: '02',
      title: 'Experiment',
      text: 'Started learning supply chain independently. That self-directed curiosity earned my first supply-chain internship at Galaxy Surfactants.',
    },
    {
      num: '03',
      title: 'Learn by Doing',
      text: 'Converted the internship into full-time roles, taking on increasing planning scope across plant lines, procurement, and global S&OP.',
    },
    {
      num: '04',
      title: 'What\'s Next?',
      text: 'SMU MBA broadened business perspective; EY grounded digital transformation; now exploring how AI augments supply-chain decisions.',
    },
  ];

  return (
    <section id="why-supply-chain" className="py-16 sm:py-20 bg-[#F5F3ED] border-b border-[#E5E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C2410C] block mb-1.5">
            Personal Narrative
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#1A1A1A] tracking-tight">
            Why Supply Chain?
          </h2>
          <p className="mt-2 text-base text-stone-700 font-normal">
            A 4-part micro-story of how curiosity turned into frontline operational commitment.
          </p>
        </div>

        {/* 4 Short Chapters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {chapters.map((ch) => (
            <div
              key={ch.num}
              className="bg-white rounded-xl p-5 border border-[#E5E2D9] shadow-2xs flex flex-col justify-between hover:border-[#C2410C]/40 transition-all"
            >
              <div>
                <span className="text-xs font-mono font-bold text-[#C2410C] block mb-2">
                  CHAPTER {ch.num}
                </span>
                <h3 className="text-lg font-serif font-bold text-[#1A1A1A] mb-2">
                  {ch.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-700 font-serif leading-relaxed font-normal">
                  {ch.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Signature End Statement Box */}
        <div className="bg-[#1A1A1A] text-[#FAF9F6] rounded-2xl p-6 sm:p-8 border border-stone-800 shadow-md text-center max-w-3xl mx-auto">
          <p className="text-lg sm:text-xl font-serif italic text-[#FAF9F6] leading-relaxed">
            &ldquo;Operations taught me how supply chains work.<br />
            Business taught me why they matter.<br />
            Technology is teaching me how they can evolve.&rdquo;
          </p>
          <div className="mt-4 pt-3 border-t border-stone-800 text-xs font-mono text-[#FED7AA] uppercase tracking-wider">
            Heer Bhardwaj &bull; Singapore
          </div>
        </div>
      </div>
    </section>
  );
};
