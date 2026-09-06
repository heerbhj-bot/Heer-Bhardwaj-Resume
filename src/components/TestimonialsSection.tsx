import React from 'react';
import { Quote, UserCheck } from 'lucide-react';

interface TestimonialCard {
  id: string;
  tag: string;
  quote: string;
  name: string;
  designation: string;
  company: string;
  isPlaceholder: boolean;
}

export const TestimonialsSection: React.FC = () => {
  const testimonials: TestimonialCard[] = [
    {
      id: 'testimonial-01',
      tag: 'TESTIMONIAL 01',
      quote:
        `Heer Bhardwaj has consistently demonstrated exceptional learning agility, ownership, and problem-solving abilities, rapidly evolving into an end-to-end Supply Planner while successfully managing complex supply chains, driving process improvements, and delivering strong customer service outcomes. She has played a pivotal role in achieving high CDI performance, improving SAP and planning hygiene, reducing operational bottlenecks, and leading key knowledge transfer initiatives, reflecting her readiness for expanded responsibilities and the next level of leadership.\n\nA highly committed and solution-oriented professional, Heer combines analytical thinking with strong stakeholder management and execution excellence. Her track record of driving results, embracing new challenges, and consistently improving planning processes makes her an asset with significant potential for growth and higher responsibilities`,
      name: 'Jeetukumar Singh',
      designation: 'Deputy Manager | Supply Planning Lead',
      company: 'Galaxy Surfactants Ltd.',
      isPlaceholder: false,
    },
    {
      id: 'testimonial-02',
      tag: 'TESTIMONIAL 02',
      quote:
        'When it comes to Heer the first thing associated with her is her curiosity and enthusiasm to learn new things. Second thing which I associate with Heer is her energy and ownership level which was one of the very important aspect during her growth in Galaxy Surfactants.',
      name: 'Rakshmith Shetty',
      designation: 'Supply Planner | Team Lead',
      company: 'Galaxy Surfactants Ltd.',
      isPlaceholder: false,
    },
    {
      id: 'testimonial-03',
      tag: 'TESTIMONIAL 03',
      quote:
        '[ADD EY / CONSULTING FEEDBACK — Translated end-to-end supply-planning knowledge into functional replenishment capabilities, working seamlessly with client planners and development teams across 5 global markets.]',
      name: '[ADD EY / CONSULTING NAME]',
      designation: 'Engagement Manager — Supply Chain & Operations',
      company: 'Ernst & Young (EY) Singapore',
      isPlaceholder: true,
    },
  ];

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-[#FAF9F6] border-b border-[#E5E2D9] scroll-mt-28 lg:scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C2410C] block mb-1">
            Endorsements
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#1A1A1A] tracking-tight">
            BEYOND THE RESUME
          </h2>
          <p className="mt-2 text-base font-serif italic text-stone-700">
            &ldquo;The people I&apos;ve worked with can tell you more.&rdquo;
          </p>
        </div>

        {/* Exactly 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-[#E5E2D9] p-5 sm:p-6 shadow-2xs hover:border-[#C2410C]/60 transition-all flex flex-col justify-between"
              id={item.id}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF9F6] border border-[#E5E2D9] flex items-center justify-center text-[#C2410C]">
                    <Quote className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-[#FFF7ED] text-[#C2410C] border border-[#FED7AA]">
                    {item.tag}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-stone-800 italic leading-relaxed mb-6 font-serif">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5E2D9]">
                <div className="text-sm font-serif font-bold text-[#1A1A1A]">{item.name}</div>
                <div className="text-[11px] font-mono text-[#C2410C] font-semibold mt-0.5 leading-snug">
                  {item.designation}
                </div>
                <div className="text-xs text-stone-600 font-serif mt-0.5">{item.company}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs font-serif text-stone-500 italic">
          Formal references and verification contacts available upon interview request.
        </div>
      </div>
    </section>
  );
};
