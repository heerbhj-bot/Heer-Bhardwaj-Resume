import React from 'react';
import { Target, TrendingUp, Shuffle, GraduationCap, CheckCircle2 } from 'lucide-react';

export const ProofOfPotential: React.FC = () => {
  const proofPillars = [
    {
      pillar: 'RESPONSIBILITY',
      title: 'Accelerated Scope Ownership',
      icon: <Target className="w-5 h-5 text-slate-900" />,
      tagline: 'Trusted with mission-critical plant and market volumes early',
      facts: [
        'Progressed rapidly from Intern → Management Trainee → Junior Officer → Officer at Galaxy Surfactants.',
        'Entrusted with Lauryl Alcohol scheduling (~6,000 MT/month), representing ~60% of total plant raw material demand.',
        'Full S&OP and supply planning ownership for 50 specialty chemical SKUs (700 MT) across Europe, North America, and India.',
        'At EY, entrusted with client UAT coordination and functional requirement documentation across 5 global markets.',
      ],
      takeaway: 'Proven capability to handle high-stakes operational complexity with zero supervision.',
    },
    {
      pillar: 'IMPACT',
      title: 'Measurable Business Metrics',
      icon: <TrendingUp className="w-5 h-5 text-slate-900" />,
      tagline: 'Real outcomes delivered to cost, throughput, and service levels',
      facts: [
        '+27% Operational Efficiency gained through the design of the Fixed Schedule Variable Volume (FSVV) model.',
        '-16% Reduction in Plant Stockouts via active raw material scheduling and vessel milestone tracking.',
        '+65% On-Time PO Accuracy achieved through SAP S/4HANA workflow automation.',
        '-22% Reduction in Demurrage Expenses sustained over 3 years via redesigned S&OP D&D analytics.',
      ],
      takeaway: 'Focuses on operational leverage that translates directly to working capital and P&L gains.',
    },
    {
      pillar: 'ADAPTABILITY',
      title: 'Plant Floor to Global Consulting',
      icon: <Shuffle className="w-5 h-5 text-slate-900" />,
      tagline: 'Translating manufacturing reality into international client delivery',
      facts: [
        'Bridged direct manufacturing plant floor realities (chemical reactors, batch changeovers) with Tier-1 consulting at EY Singapore.',
        'Coordinated with diverse stakeholders: plant shift supervisors, global logistics freight forwarders, commercial sales heads, and software engineers.',
        'International operational exposure spanning India, Europe, North America, and Singapore.',
      ],
      takeaway: 'Comfortable operating at multiple altitudes—from granular warehouse transactions to executive steering committees.',
    },
    {
      pillar: 'LEARNING AGILITY',
      title: 'Continuous Upward Trajectory',
      icon: <GraduationCap className="w-5 h-5 text-slate-900" />,
      tagline: 'Deliberate career transitions driven by curiosity and discipline',
      facts: [
        'Discovered supply chain independently during COVID disruptions; converted internship into a full-time career track.',
        'Earned admission to Singapore Management University (SMU MBA); elected Career Secretary by cohort peers.',
        'Continuously expanding into digital systems: SAP S/4HANA, Microsoft PowerApps, Jira, Agile, and Power BI.',
        'Actively learning Python (Pandas/NumPy) and exploring GenAI tools (Google AI Studio) for supply chain decision support.',
      ],
      takeaway: 'Steep learning curve with demonstrated ability to quickly master unfamiliar domains.',
    },
  ];

  return (
    <section id="proof-of-potential" className="py-20 bg-[#F5F3ED] border-b border-[#E5E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C2410C] block mb-2">
            Why Believe In My Trajectory?
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#1A1A1A] tracking-tight">
            Proof of Potential
          </h2>
          <p className="mt-3 text-base text-stone-700 leading-relaxed font-normal">
            I don&apos;t measure my readiness for bigger roles by tenure on a page. I measure it by the complexity of challenges I have been trusted with, the quantifiable results delivered, and how rapidly I absorb new responsibilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {proofPillars.map((item) => (
            <div
              key={item.pillar}
              className="bg-white rounded-xl border border-[#E5E2D9] p-6 shadow-2xs hover:border-[#C2410C]/40 transition-all flex flex-col justify-between"
              id={`proof-card-${item.pillar.toLowerCase()}`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#F5F3ED] border border-[#E5E2D9] flex items-center justify-center">
                      <div className="text-[#C2410C]">{item.icon}</div>
                    </div>
                    <span className="text-xs font-mono font-semibold tracking-wider uppercase text-stone-500">
                      {item.pillar}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-[#C2410C] bg-[#FFF7ED] px-2 py-0.5 rounded-md border border-[#FED7AA]">
                    Verified Proof
                  </span>
                </div>

                <h3 className="text-lg font-serif font-bold text-[#1A1A1A] mb-1">{item.title}</h3>
                <p className="text-xs text-stone-500 font-serif italic mb-4">{item.tagline}</p>

                <ul className="space-y-2.5 mb-6">
                  {item.facts.map((fact, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-stone-700 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C2410C] shrink-0 mt-0.5" />
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-[#E5E2D9] bg-[#F5F3ED] -mx-6 -mb-6 p-4 rounded-b-xl">
                <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-stone-500 block mb-1">
                  Recruiter Takeaway
                </span>
                <p className="text-xs font-serif italic text-[#1A1A1A]">
                  &ldquo;{item.takeaway}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
