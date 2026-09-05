import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  ArrowDown,
  BookOpen,
} from 'lucide-react';
import { EYScopeDiagram } from './EYScopeDiagram';

interface DetailedCaseStudy {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  tag: string;
  problemSummary: string;
  myRole: string;
  impactSummary: string;
  metrics: string[];
  context: string;
  theProblem: string;
  whatIDid: string;
  diagram: {
    problem: string;
    analysis: string;
    intervention: string;
    outcome: string;
  };
  theResult: string;
  whatILearned: string;
}

export const CaseStudiesSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>('case-01');

  const cases: DetailedCaseStudy[] = [
    {
      id: 'case-01',
      num: '01',
      title: 'Planning at Scale',
      subtitle: '50 SKUs / 700 MT / Multiple Global Markets',
      tag: 'Global Supply Planning & S&OP',
      problemSummary:
        'Managing disparate export customer orders across Europe, North America, and India while balancing volatile ocean container lead times and fixed plant line capacity.',
      myRole:
        'Officer – Supply Planning. Single-point accountability for monthly master production scheduling and regional S&OP alignment for specialty chemical formulations.',
      impactSummary:
        'Sustained OTIF fulfillment across 3 global continents, eliminated scheduling whiplash, and minimized deadstock inventory.',
      metrics: ['50 Specialty SKUs', '700 MT Volume', '3 Global Continents'],
      context:
        'Galaxy Surfactants manufactures performance chemical ingredients serving major personal care FMCG giants globally. The plant operates high-volume batch reactors that require meticulous line changeovers between incompatible product chemistries.',
      theProblem:
        'Sales teams across Europe and North America operated on aggressive quarterly commercial quotas, routinely placing ad-hoc batch orders without awareness of factory changeover matrices. This caused severe schedule disruption, high finished goods inventory in domestic warehouses, and missed export shipping windows.',
      whatIDid:
        'Established a structured monthly S&OP cadenced review with regional sales managers. Reconciled rolling 12-week unconstrained demand with capacity-feasible plant constraints, implemented SKU segmentation based on order frequency, and set dynamic inventory holding targets at destination hub warehouses.',
      diagram: {
        problem: 'Ad-hoc sales orders created plant line chaos',
        analysis: 'Analyzed changeover times & export vessel schedules',
        intervention: 'Instituted disciplined monthly S&OP & SKU segmentation',
        outcome: 'Capacity-feasible MPS with predictable export dispatches',
      },
      theResult:
        'Protected plant throughput with zero unplanned changeovers during peak seasons, maintained service levels across Europe and North America, and reduced finished goods inventory carrying cost by stabilizing warehouse stocking policies.',
      whatILearned:
        'Supply planning is fundamentally an exercise in transparent trade-offs. The role of the planner is to make operational constraints visible before commercial commitments are compromised.',
    },
    {
      id: 'case-02',
      num: '02',
      title: 'Keeping Raw Materials Moving',
      subtitle: '~6,000 MT/month / ~60% of Monthly RM Demand / -16% Stockouts',
      tag: 'Critical Procurement & Inventory Continuity',
      problemSummary:
        'Lauryl Alcohol is the vital precursor for plant production. Any shipment delay or maritime logistics bottleneck risked complete plant shutdown and severe delivery penalties.',
      myRole:
        'Junior Officer – Raw Material Planning. Managed demand translation, chemical supplier releases, and vessel arrival synchronizations.',
      impactSummary:
        'Achieved a 16% reduction in plant stockout events while sustaining continuous 24/7 chemical reactor operations.',
      metrics: ['~6,000 MT/Month', '~60% Plant RM Demand', '-16% Plant Stockouts'],
      context:
        'Surfactant synthesis requires massive volumes of Lauryl Alcohol transported via chemical tankers and ISO tank containers. Onsite tank farm storage capacity is strictly finite, creating a razor-thin margin between tank overflow and empty reactor starvation.',
      theProblem:
        'Static calendar-based reordering failed to account for volatile port congestion and customs clearance swings at Indian ports, causing either costly vessel demurrage or sudden production halts due to dry tanks.',
      whatIDid:
        'Engineered a dynamic consumption calculation model translating live weekly master schedules into daily draw rates. Replaced static buffer assumptions with variable buffer days indexed to maritime tracking signals, and established direct daily alignment with port logistics agents.',
      diagram: {
        problem: 'Finite tank farm capacity vs. erratic vessel arrivals',
        analysis: 'Modelled daily consumption rates & maritime port delays',
        intervention: 'Introduced variable buffer thresholds & weekly supplier slots',
        outcome: 'Continuous plant feed with zero dry-tank outages',
      },
      theResult:
        'Reduced raw material stockout frequency by 16%, prevented line shutdowns, and optimized vessel discharge scheduling to reduce port demurrage penalties.',
      whatILearned:
        'Procurement planning cannot be treated as a passive order-placement function; planners must build operational buffers around logistics variance rather than optimistic supplier lead times.',
    },
    {
      id: 'case-03',
      num: '03',
      title: 'Planning New Products',
      subtitle: '4 Product Launches / 35% Operational Efficiency Gain',
      tag: 'NPI Supply Integration & Ramp-Up',
      problemSummary:
        'Scaling 4 complex new chemical product formulations from R&D pilot stage to full commercial plant manufacturing without disrupting existing high-volume production lines.',
      myRole:
        'Supply Planner – Cross-functional coordinator bridging R&D, pilot plant technicians, quality assurance, and commercial sales teams.',
      impactSummary:
        'Achieved a 35% operational efficiency improvement during product transitions and delivered zero delayed customer launch orders.',
      metrics: ['4 New Products', '+35% Transition Efficiency', 'Zero Launch Stockouts'],
      context:
        'New product introductions (NPI) in chemical manufacturing require stringent validation: pilot trial batches, quality approvals, customer qualification samples, and specialized packaging runs.',
      theProblem:
        'Previous launches suffered from unpredictable production delays, excessive raw material write-offs due to shelf-life expiration, and production line congestion that delayed mature product orders.',
      whatIDid:
        'Designed an integrated trial-to-commercial readiness matrix. Synchronized pilot batch runs into planned plant maintenance windows, established strict gating criteria for commercial scale-up batches, and mapped component procurement milestones with suppliers.',
      diagram: {
        problem: 'Pilot trial runs disrupted ongoing commercial plant lines',
        analysis: 'Mapped changeover bottlenecks & shelf-life risks',
        intervention: 'Integrated trial runs into planned maintenance windows',
        outcome: '+35% faster transition with zero scrap or launch delays',
      },
      theResult:
        'Successfully transitioned 4 new formulations into stable commercial production, boosted line transition efficiency by 35%, and met all launch commitments with zero scrap or shelf-life obsolescence.',
      whatILearned:
        'New product introduction succeeds or fails on cross-functional governance. The planner must serve as the pragmatic anchor ensuring commercial optimism is reconciled with manufacturing reality.',
    },
    {
      id: 'case-04',
      num: '04',
      title: 'Rethinking Production Planning',
      subtitle: 'Fixed Schedule Variable Volume / +27% Efficiency Improvement',
      tag: 'Lean Scheduling & Capacity Optimization',
      problemSummary:
        'Frequent mid-week schedule changes and emergency rush orders caused severe reactor cleaning downtime, volatile labor overtime, and high finished goods inventory.',
      myRole:
        'Officer – Supply Planning. Conducted manufacturing capacity study and spearheaded the transition to an FSVV scheduling methodology.',
      impactSummary:
        'Boosted overall plant operational efficiency by 27% and sharply reduced weekly schedule adherence variances.',
      metrics: ['+27% Operational Efficiency', '-22% Demurrage Costs', 'FSVV Implementation'],
      context:
        'Producing mild specialty surfactants requires extensive chemical flushing and reactor CIP (Clean-in-Place) procedures when switching between chemical families. Unplanned sequence changes waste up to 8 hours of reactor capacity per event.',
      theProblem:
        'Planners historically altered the master schedule reactively whenever an urgent customer order arrived, creating a domino effect of delayed production runs across the entire monthly schedule.',
      whatIDid:
        'Designed and championed a Fixed Schedule Variable Volume (FSVV) production model. Locked the sequence of product family runs to minimize washouts, while allowing order volume to flex dynamically within pre-agreed parameter boundaries.',
      diagram: {
        problem: 'Reactive schedule changes caused 8h reactor washouts',
        analysis: 'Identified that product sequence mattered more than batch volume',
        intervention: 'Designed FSVV model: fixed sequence, flexible batch size',
        outcome: '+27% operational throughput without adding capital equipment',
      },
      theResult:
        'Unlocked a 27% improvement in plant operational efficiency, slashed changeover washouts, and cut demurrage expenses by 22% through synchronized product release schedules.',
      whatILearned:
        'True capacity is often hidden behind poorly structured scheduling habits. Disciplined production rules create more flexibility for customers than chaotic reactive changes.',
    },
    {
      id: 'case-05',
      num: '05',
      title: 'Making Planning More Digital',
      subtitle: 'SAP Workflow Automation / 65% Improvement in PO Accuracy',
      tag: 'ERP Optimization & Digital Execution',
      problemSummary:
        'Manual spreadsheet purchase order generation and fragmented email communications led to frequent clerical errors, vendor delivery discrepancies, and administrative delays.',
      myRole:
        'Junior Officer / Officer. Partnered with internal IT to map manual procurement pain points and configure automated PO workflows in SAP S/4HANA.',
      impactSummary:
        'Improved purchase order accuracy by 65% and cut procurement cycle processing time significantly.',
      metrics: ['+65% PO Accuracy', 'SAP S/4HANA Workflow', 'Zero Vendor PO Disputes'],
      context:
        'Procurement execution relied heavily on offline Excel templates being manually transcribed into SAP ERP, creating redundant administrative labor and transcription risks.',
      theProblem:
        'Discrepancies between approved contract pricing, delivery terms, and SAP purchase order line items resulted in invoice holds, delayed vendor payments, and delivery holds at plant gates.',
      whatIDid:
        'Standardized purchase order creation templates, created automated validation rules linking SAP purchase requisitions with approved vendor contracts, and instituted automated exception alerts for price variance breaches.',
      diagram: {
        problem: 'Manual Excel-to-SAP transcription led to clerical PO errors',
        analysis: 'Identified root causes of invoice mismatches & delivery holds',
        intervention: 'Configured automated contract-linked validation rules in SAP',
        outcome: '+65% PO accuracy and instantaneous vendor PO generation',
      },
      theResult:
        'Increased purchase order accuracy by 65%, eliminated vendor billing disputes, and accelerated purchase order approval turnaround time from days to hours.',
      whatILearned:
        'Digital transformation is most effective when it removes friction from high-frequency routine transactions, liberating planners to focus on exception management and strategic supply risks.',
    },
    {
      id: 'case-06',
      num: '06',
      title: 'From Supply Chain to Digital Transformation',
      subtitle: 'EY / Digital Inventory Replenishment / 5 Global Markets / UAT',
      tag: 'Enterprise Digital Transformation Consulting',
      problemSummary:
        'Unilever managing multi-echelon replenishment across disparate spreadsheets with zero centralized visibility, leading to inventory imbalances and lost sales.',
      myRole:
        'Business Consulting Intern (Supply Chain & Operations, EY Singapore). Functional translator bridging market planners and platform software developers.',
      impactSummary:
        'Standardized automated replenishment platform across 5 global markets with zero launch calculation defects.',
      metrics: ['5 Global Markets', 'Multi-Echelon Logic', 'Zero Launch Defects'],
      context:
        'At EY Singapore, I supported the deployment of a modern digital replenishment platform for a world-leading FMCG enterprise (Unilever), transitioning 5 international business units from disparate spreadsheets to automated replenishment.',
      theProblem:
        'Each regional market utilized localized Excel calculators with idiosyncratic assumptions, making global inventory visibility and centralized replenishment planning impossible.',
      whatIDid:
        'Documented end-to-end business requirements (BRDs) and translated market supply chain realities into structured Jira user stories. Led hands-on client User Acceptance Testing (UAT) sessions with market planners, engineered live test execution tracking dashboards, and validated multi-echelon replenishment calculation logic.',
      diagram: {
        problem: '5 country markets planning replenishment in isolated Excel files',
        analysis: 'Dissected localized planning formulas & regional supply constraints',
        intervention: 'Translated business requirements into software user stories & led client UAT',
        outcome: 'Enterprise platform deployed with zero calculation release defects',
      },
      theResult:
        'Enabled 5 global markets to transition cleanly to the unified replenishment platform, establishing centralized inventory visibility and automated order recommendation generation.',
      whatILearned:
        'Software does not fail because developers make coding errors; it fails when developers do not understand how planners think and work. The supply-chain consultant is the vital translator who ensures technology solves the actual business problem.',
    },
  ];

  return (
    <section id="case-studies" className="py-16 sm:py-20 bg-[#FAF9F6] border-b border-[#E5E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C2410C] block mb-1.5">
            The Main Event
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#1A1A1A] tracking-tight">
            Problems I&apos;ve Worked On
          </h2>
          <p className="mt-2 text-base text-stone-700 font-serif italic">
            &ldquo;Okay, but what did I actually do?&rdquo; — Click &ldquo;See how&rdquo; on any case study to explore the context, actions, visual process flow, and key learnings.
          </p>
        </div>

        {/* EY Transformation Highlight Diagram */}
        <EYScopeDiagram />

        {/* 6 Visually Distinct Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {cases.map((cs) => {
            const isExpanded = expandedId === cs.id;
            return (
              <div
                key={cs.id}
                className={`bg-white rounded-xl border transition-all flex flex-col justify-between ${
                  isExpanded
                    ? 'border-[#C2410C] shadow-md ring-1 ring-[#C2410C]/20'
                    : 'border-[#E5E2D9] hover:border-[#C2410C]/50 shadow-2xs'
                }`}
                id={`case-card-${cs.id}`}
              >
                <div className="p-6 sm:p-7">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-bold text-[#C2410C] bg-[#FFF7ED] px-2 py-0.5 rounded-md border border-[#FED7AA]">
                      CASE {cs.num}
                    </span>
                    <span className="text-[11px] font-mono text-stone-600 bg-[#F5F3ED] px-2.5 py-0.5 rounded-full border border-[#E5E2D9]">
                      {cs.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-[#1A1A1A] mb-1 leading-snug">
                    {cs.title}
                  </h3>
                  <p className="text-xs text-stone-500 font-serif italic mb-4">
                    {cs.subtitle}
                  </p>

                  {/* Initial 3 Summary Elements */}
                  <div className="space-y-3 mb-5">
                    <div>
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-stone-400 block mb-0.5">
                        The Problem
                      </span>
                      <p className="text-xs text-stone-700 leading-relaxed font-normal">
                        {cs.problemSummary}
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-stone-400 block mb-0.5">
                        My Role
                      </span>
                      <p className="text-xs text-stone-700 leading-relaxed font-normal">
                        {cs.myRole}
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#C2410C] block mb-0.5">
                        Impact
                      </span>
                      <p className="text-xs font-serif font-semibold text-stone-900 leading-relaxed">
                        {cs.impactSummary}
                      </p>
                    </div>
                  </div>

                  {/* Metric Badges */}
                  <div className="flex flex-wrap gap-1.5 pb-4 border-b border-[#E5E2D9]">
                    {cs.metrics.map((m) => (
                      <span
                        key={m}
                        className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-md bg-[#FAF9F6] text-stone-700 border border-[#E5E2D9]"
                      >
                        {m}
                      </span>
                    ))}
                  </div>

                  {/* Expanded Content: Context, Problem, What I Did, Diagram, Result, Learned */}
                  {isExpanded && (
                    <div className="pt-5 space-y-5 animate-in fade-in duration-200">
                      {/* Section 1: The Context */}
                      <div className="bg-[#FAF9F6] p-4 rounded-lg border border-[#E5E2D9]">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-stone-600 block mb-1">
                          01 &bull; The Context (What was happening?)
                        </span>
                        <p className="text-xs text-stone-700 leading-relaxed font-normal">
                          {cs.context}
                        </p>
                      </div>

                      {/* Section 2: The Problem */}
                      <div className="bg-[#FAF9F6] p-4 rounded-lg border border-[#E5E2D9]">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-stone-600 block mb-1">
                          02 &bull; The Problem (What needed to change?)
                        </span>
                        <p className="text-xs text-stone-700 leading-relaxed font-normal">
                          {cs.theProblem}
                        </p>
                      </div>

                      {/* Section 3: What I Did + Visual Diagram */}
                      <div className="bg-[#FFF7ED] p-4 rounded-lg border border-[#FED7AA]">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C2410C] block mb-1">
                          03 &bull; What I Did (What did I personally contribute?)
                        </span>
                        <p className="text-xs text-stone-800 leading-relaxed font-normal mb-3">
                          {cs.whatIDid}
                        </p>

                        {/* Visual Process Diagram: Problem → Analysis → Intervention → Outcome */}
                        <div className="bg-white p-3 rounded-lg border border-[#FED7AA] space-y-2">
                          <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-stone-400 block">
                            Execution Flow Diagram
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center">
                            <div className="p-2 rounded-md bg-[#FAF9F6] border border-[#E5E2D9]">
                              <div className="text-[10px] font-mono text-stone-400 uppercase">Problem</div>
                              <div className="text-[11px] font-serif font-bold text-stone-800 mt-0.5">{cs.diagram.problem}</div>
                            </div>
                            <div className="p-2 rounded-md bg-[#FAF9F6] border border-[#E5E2D9]">
                              <div className="text-[10px] font-mono text-stone-400 uppercase">Analysis</div>
                              <div className="text-[11px] font-serif font-bold text-stone-800 mt-0.5">{cs.diagram.analysis}</div>
                            </div>
                            <div className="p-2 rounded-md bg-[#FFF7ED] border border-[#FED7AA]">
                              <div className="text-[10px] font-mono text-[#C2410C] uppercase">Intervention</div>
                              <div className="text-[11px] font-serif font-bold text-stone-900 mt-0.5">{cs.diagram.intervention}</div>
                            </div>
                            <div className="p-2 rounded-md bg-[#FAF9F6] border border-[#E5E2D9]">
                              <div className="text-[10px] font-mono text-stone-500 uppercase">Outcome</div>
                              <div className="text-[11px] font-serif font-bold text-stone-800 mt-0.5">{cs.diagram.outcome}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Section 4: The Result */}
                      <div className="bg-[#FAF9F6] p-4 rounded-lg border border-[#E5E2D9]">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-stone-600 block mb-1">
                          04 &bull; The Result (What changed?)
                        </span>
                        <p className="text-xs text-stone-700 leading-relaxed font-normal">
                          {cs.theResult}
                        </p>
                      </div>

                      {/* Section 5: What I Learned */}
                      <div className="bg-[#1A1A1A] text-[#FAF9F6] p-4 rounded-lg border border-stone-800">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FED7AA] block mb-1">
                          05 &bull; What I Learned (What did the experience teach me?)
                        </span>
                        <p className="text-xs text-stone-200 font-serif italic leading-relaxed">
                          &ldquo;{cs.whatILearned}&rdquo;
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Toggle Button: "See how" */}
                <div className="px-6 py-3 bg-[#FAF9F6] border-t border-[#E5E2D9] rounded-b-xl flex items-center justify-between">
                  <span className="text-[11px] text-stone-500 font-serif italic">
                    {isExpanded ? 'Full case study revealed' : 'Deep dive available'}
                  </span>
                  <button
                    onClick={() => setExpandedId(isExpanded ? '' : cs.id)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-white hover:bg-[#F5F3ED] text-[#C2410C] border border-[#DDD8CE] shadow-2xs transition-all cursor-pointer"
                  >
                    <span>{isExpanded ? 'Collapse' : 'See how'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
