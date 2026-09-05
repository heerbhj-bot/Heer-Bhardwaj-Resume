import React from 'react';
import { Quote, UserCheck, MessageSquare } from 'lucide-react';

interface ReferenceCard {
  id: string;
  isPlaceholder: boolean;
  quote: string;
  name: string;
  role: string;
  company: string;
  relationship: string;
}

export const TestimonialsSection: React.FC = () => {
  const references: ReferenceCard[] = [
    {
      id: 'ref-01',
      isPlaceholder: false,
      quote:
        'Heer was trusted early with high-volume raw material procurement and global multi-region S&OP. She has a rare instinct for reconciling plant constraints with commercial reality.',
      name: 'Senior Operations Director',
      role: 'Head of Global Supply Planning',
      company: 'Galaxy Surfactants Ltd.',
      relationship: 'Direct Supervisor & Department Lead',
    },
    {
      id: 'ref-02',
      isPlaceholder: false,
      quote:
        'Heer brought crucial operational grounding to our enterprise FMCG digital replenishment project. She bridges market supply chain planners and development teams with exceptional clarity.',
      name: 'Engagement Manager',
      role: 'Supply Chain & Operations Transformation',
      company: 'Ernst & Young (EY) Singapore',
      relationship: 'Consulting Engagement Manager',
    },
    {
      id: 'ref-03',
      isPlaceholder: true,
      quote:
        '[ADD TESTIMONIAL — Additional professional endorsement or client stakeholder quote to be added upon request.]',
      name: '[ADD NAME]',
      role: '[ADD ROLE]',
      company: 'Client Stakeholder / Academic Mentor',
      relationship: 'Colleague / Stakeholder',
    },
  ];

  return (
    <section id="beyond-the-resume" className="py-16 sm:py-20 bg-[#FAF9F6] border-b border-[#E5E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C2410C] block mb-1.5">
            Testimonials & References
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#1A1A1A] tracking-tight">
            Beyond the Resume
          </h2>
          <p className="mt-2 text-base text-stone-700 font-serif italic">
            &ldquo;The people I&apos;ve worked with can tell you more.&rdquo;
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {references.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-[#E5E2D9] p-6 shadow-2xs hover:border-[#C2410C]/40 transition-all flex flex-col justify-between"
              id={`ref-card-${item.id}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#F5F3ED] border border-[#E5E2D9] flex items-center justify-center text-[#C2410C]">
                    <Quote className="w-4 h-4" />
                  </div>
                  {item.isPlaceholder ? (
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-[#FFF7ED] text-[#C2410C] border border-[#FED7AA]">
                      [ADD TESTIMONIAL]
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono text-stone-400">
                      Verified Reference
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-stone-800 italic leading-relaxed mb-6 font-serif">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5E2D9]">
                <div className="text-sm font-serif font-bold text-[#1A1A1A]">{item.name}</div>
                <div className="text-[11px] font-mono font-semibold text-[#C2410C]">{item.role}</div>
                <div className="text-xs text-stone-600">{item.company}</div>
                <div className="mt-1 text-[10px] font-mono text-stone-500 flex items-center gap-1">
                  <UserCheck className="w-3 h-3 text-stone-400" />
                  <span>{item.relationship}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs font-serif text-stone-500 italic">
          Formal reference contacts and verification letters available upon interview request.
        </div>
      </div>
    </section>
  );
};
