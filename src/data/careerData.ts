import {
  CaseStudy,
  MetricItem,
  PhilosophyPrinciple,
  ProfileData,
  SkillCategory,
  TestimonialItem,
  TimelineNode,
  ValueChainNode,
} from '../types';

export const PROFILE_DATA: ProfileData = {
  name: 'Heer Bhardwaj',
  headline: 'Supply Chain & Operations | Digital Transformation | AI-Enabled Planning',
  tagline:
    'Bridging hands-on manufacturing supply planning with enterprise digital transformation and emerging AI decision tools.',
  location: 'Singapore',
  email: 'heer.1304@gmail.com',
  phone: '+65 8649 4072',
  linkedin: 'https://www.linkedin.com/in/heerbh',
  summary:
    'Supply Chain professional with 4 years of hands-on experience in global supply planning, S&OP, inventory management, and operational analytics across Europe, North America, and India. Complemented by digital supply chain transformation experience at EY Singapore—translating planning expertise into digital replenishment workflows for a global FMCG across 5 markets. Currently expanding into AI-enabled decision support and scenario modeling.',
  targetRoles: [
    'Supply Chain Planner',
    'Supply Planner',
    'Demand & Supply Planner',
    'Global Supply Chain Planner',
    'Supply Chain Operations Specialist',
    'Digital Supply Chain Transformation Consultant',
    'Supply Chain Product / Technology Analyst',
    'Operations Strategy Consultant',
  ],
  threeLenses: [
    {
      layer: 'OPERATE',
      title: 'Layer 1: Real Supply Chain Operations',
      subtitle: 'Hands-on plant & market realities',
      description:
        'Not textbook theory. Operated on the ground planning 50 specialty chemical SKUs (700 MT) across Europe, North America, and India, and orchestrated ~6,000 MT/month of raw material procurement at Galaxy Surfactants.',
      capabilities: [
        'Supply Planning & S&OP',
        'Raw Material Procurement Scheduling',
        'Production Capacity Allocation',
        'New Product Launch Coordination',
        'Inventory Optimization & Safety Stock',
        'SAP S/4HANA (PP Module)',
      ],
      evidence: 'Reduced stockouts by 16%, cut demurrage costs by 22% over 3 years, and managed 60% of plant raw material volume.',
    },
    {
      layer: 'TRANSFORM',
      title: 'Layer 2: Digital & Process Transformation',
      subtitle: 'Translating business problems into software workflows',
      description:
        'Bridging the divide between frontline planners and software engineers. At EY Singapore, supported the rollout of a digital replenishment platform for a world-leading FMCG (Unilever), shifting 5 global markets from spreadsheet silos to standardized digital workflows.',
      capabilities: [
        'Business & Functional Requirements',
        'Platform Logic & User Stories (Jira)',
        'User Acceptance Testing (UAT) Leadership',
        'Process Standardization',
        'PowerApps & Workflow Automation',
        'Testing Dashboards & Release Readiness',
      ],
      evidence: 'Led UAT across 5 global markets, validated scenario planning logic, and automated SAP PO workflows achieving 65% accuracy improvement.',
    },
    {
      layer: 'EVOLVE',
      title: 'Layer 3: Business Strategy & AI Integration',
      subtitle: 'Strategic decision-making & AI-assisted productivity',
      description:
        'Framing supply chain as an enterprise value driver. Combining MBA rigor at Singapore Management University with applied exploration of AI tools (Google AI Studio, Prompt Engineering, Python Pandas/NumPy) to solve demand sensing and exception management challenges.',
      capabilities: [
        'Working Capital Optimization',
        'Total Cost of Ownership Trade-Offs',
        'AI Prompt Engineering for Planners',
        'Exception Management Prototyping',
        'Python Data Analysis (Pandas, NumPy)',
        'Scenario & Risk Sensitivity Analysis',
      ],
      evidence: 'SMU MBA candidate & Career Secretary; proactively building practical AI scripts and prompt workflows to augment planner productivity.',
    },
  ],
};

export const METRIC_CARDS: MetricItem[] = [
  {
    id: 'sku-scope',
    value: '50 SKUs',
    label: 'Specialty Chemical Portfolio',
    context: 'End-to-end supply planning & S&OP across Europe, North America, and India markets (700 MT).',
    category: 'scale',
    highlight: false,
  },
  {
    id: 'raw-material-scale',
    value: '~6,000 MT',
    label: 'Monthly Lauryl Alcohol Planning',
    context: 'Represented ~60% of total plant monthly raw material demand with global supplier coordination.',
    category: 'scale',
    highlight: true,
  },
  {
    id: 'fsvv-efficiency',
    value: '+27%',
    label: 'Operational Efficiency Gain',
    context: 'Achieved via implementation of a Fixed Schedule Variable Volume (FSVV) production model.',
    category: 'efficiency',
    highlight: true,
  },
  {
    id: 'stockout-reduction',
    value: '-16%',
    label: 'Stockout Reduction',
    context: 'Delivered by aligning procurement plans with production and coordinating global logistics partners.',
    category: 'efficiency',
    highlight: true,
  },
  {
    id: 'po-accuracy',
    value: '+65%',
    label: 'On-Time PO Accuracy',
    context: 'Initiated and executed automated purchase order workflows in SAP S/4HANA.',
    category: 'efficiency',
    highlight: false,
  },
  {
    id: 'demurrage-cut',
    value: '-22%',
    label: 'Demurrage Cost Reduction',
    context: 'Achieved over 3 years by redesigning the S&OP MIS dashboard and Detention & Demurrage reporting.',
    category: 'financial',
    highlight: true,
  },
  {
    id: 'global-markets',
    value: '5 Markets',
    label: 'Global FMCG Transformation Scope',
    context: 'Supported transition from manual Excel planning to standardized digital replenishment at EY.',
    category: 'scale',
    highlight: false,
  },
  {
    id: 'npi-launches',
    value: '4 Launches',
    label: 'New Product Introductions (NPI)',
    context: 'Cross-functional planning aligning commercial forecasts with procurement, boosting efficiency by 35%.',
    category: 'launch',
    highlight: false,
  },
];

export const TIMELINE_STAGES: TimelineNode[] = [
  {
    period: 'Oct 2021 – 2022',
    year: '2021',
    title: 'Supply Chain Intern → Management Trainee',
    company: 'Galaxy Surfactants Ltd',
    location: 'India',
    roleType: 'Full-Time Apprenticeship & Operation',
    scopeSummary: 'Entered through self-taught supply chain curiosity during COVID; proved execution discipline on the factory floor.',
    verifiedScopePoints: [
      'Independently studied supply chain dynamics following COVID disruptions during final BBA semester.',
      'Secured and converted a competitive internship into a permanent Management Trainee offer.',
      'Mastered plant production scheduling, warehouse transactions, and SAP materials management on the ground.',
    ],
    keyMilestone: 'Converted internship to full-time trajectory within first 6 months.',
  },
  {
    period: '2022 – 2023',
    year: '2022',
    title: 'Junior Officer – Supply Planning',
    company: 'Galaxy Surfactants Ltd',
    location: 'India',
    roleType: 'Direct Operational Ownership',
    scopeSummary: 'Entrusted with critical raw-material scheduling representing ~60% of total plant volume.',
    verifiedScopePoints: [
      'Took primary responsibility for Lauryl Alcohol procurement scheduling (~6,000 MT/month).',
      'Coordinated global raw-material suppliers and maritime freight partners to mitigate lead-time volatility.',
      'Reduced raw material stockouts by 16% through structured buffer stock and consumption tracking.',
    ],
    keyMilestone: 'Managed ~60% of total manufacturing raw-material demand.',
  },
  {
    period: '2023 – May 2025',
    year: '2023–2025',
    title: 'Officer / Supply Planner',
    company: 'Galaxy Surfactants Ltd',
    location: 'India',
    roleType: 'Multi-Market Portfolio Ownership',
    scopeSummary: 'Promoted to lead end-to-end supply planning and S&OP for 50 specialty chemical SKUs across Europe, North America, and India.',
    verifiedScopePoints: [
      'Balanced demand forecasts against production capacities and distribution constraints across 3 continents.',
      'Introduced a Fixed Schedule Variable Volume (FSVV) production model, boosting operational efficiency by 27%.',
      'Orchestrated cross-functional planning for 4 new product launches, improving launch operational efficiency by 35%.',
      'Automated SAP S/4HANA PO workflows (+65% accuracy) and overhauled S&OP dashboards (22% demurrage savings over 3 years).',
    ],
    keyMilestone: 'Full end-to-end S&OP ownership of 50 export SKUs (700 MT) and continuous process engineering.',
  },
  {
    period: 'Aug 2025 – Oct 2026',
    year: '2025',
    title: 'Master of Business Administration (MBA)',
    company: 'Singapore Management University (SMU)',
    location: 'Singapore',
    roleType: 'Executive Business Education & Leadership',
    scopeSummary: 'Broadening operational mastery into corporate strategy, financial acumen, and global executive leadership.',
    verifiedScopePoints: [
      'Elected Career Secretary, ELC MBA 2025 cohort, leading stakeholder engagement and industry networking.',
      'Deepened expertise in supply chain finance, inventory valuation, risk governance, and international business.',
      'Anchored strategic thinking in Singapore’s global logistics and regional trade ecosystem.',
    ],
    keyMilestone: 'Strategic elevation: Connecting shop-floor planning directly to enterprise balance-sheet outcomes.',
  },
  {
    period: 'May 2026 – Present',
    year: '2026',
    title: 'Business Consulting Intern – Supply Chain Operations & Transformation',
    company: 'Ernst & Young (EY)',
    location: 'Singapore',
    roleType: 'Global Enterprise Transformation',
    scopeSummary: 'Translating real-world planning expertise into platform capabilities for a Tier-1 FMCG giant across 5 markets.',
    verifiedScopePoints: [
      'Supported implementation of a digital replenishment platform for a world-leading FMCG (Unilever).',
      'Documented business requirements, drafted functional platform logic, and refined Jira user stories in agile sprints.',
      'Led client User Acceptance Testing (UAT) sessions, validated planning algorithms against business edge cases.',
      'Built project governance trackers and executive testing dashboards ensuring seamless release readiness.',
    ],
    keyMilestone: 'Bridged the gap between business planning users and technical development teams across 5 countries.',
  },
];

export const VALUE_CHAIN_NODES: ValueChainNode[] = [
  {
    id: 'demand',
    stage: '01',
    title: 'Demand Translation & Sensing',
    level: 'Experienced',
    heerExperience:
      'Consolidating multi-region sales forecasts, historical consumption trends, and commercial launch schedules into clean unconstrained demand signals.',
    verifiedApplication:
      'Mapped regional demand signals across Europe, North America, and domestic India for 50 SKUs. At EY, documented user stories for automated demand translation in digital replenishment.',
    toolsUsed: ['SAP S/4HANA', 'Advanced Excel', 'Power BI', 'Jira'],
  },
  {
    id: 'supply-sop',
    stage: '02',
    title: 'Supply Planning & S&OP',
    level: 'Experienced',
    heerExperience:
      'Reconciling demand against plant line capacities, maintenance downtime, safety stock targets, and commercial priority rules.',
    verifiedApplication:
      'Owned monthly S&OP cycles at Galaxy Surfactants for 700 MT volume. Redesigned executive MIS dashboards to provide transparent cross-functional visibility.',
    toolsUsed: ['S&OP MIS Dashboards', 'SAP S/4HANA (PP)', 'Capacity Models'],
  },
  {
    id: 'production',
    stage: '03',
    title: 'Production Scheduling',
    level: 'Experienced',
    heerExperience:
      'Structuring production campaigns to minimize changeover losses, smooth line utilization, and protect promised ship dates.',
    verifiedApplication:
      'Pioneered the Fixed Schedule Variable Volume (FSVV) planning model, delivering a verified 27% increase in operational efficiency through optimized batch sizing.',
    toolsUsed: ['FSVV Framework', 'Plant Scheduling Tools', 'SAP PP'],
  },
  {
    id: 'inventory',
    stage: '04',
    title: 'Inventory & Replenishment',
    level: 'Experienced',
    heerExperience:
      'Determining safety stock buffers, reorder points, and dynamic multi-echelon replenishment logic to prevent stockouts without trapping working capital.',
    verifiedApplication:
      'Implemented digital replenishment parameters at EY for 5 global FMCG markets. Reduced raw material stockouts by 16% at Galaxy Surfactants.',
    toolsUsed: ['Replenishment Algorithms', 'Safety Stock Formulae', 'PowerApps'],
  },
  {
    id: 'procurement',
    stage: '05',
    title: 'Raw Material Procurement Planning',
    level: 'Experienced',
    heerExperience:
      'Converting Master Production Schedules (MPS) into time-phased purchase requisitions for critical bulk materials and packaging.',
    verifiedApplication:
      'Scheduled ~6,000 MT/month of Lauryl Alcohol (~60% of total plant raw material demand), synchronizing international supplier contracts with production requirements.',
    toolsUsed: ['Material Requirements Planning (MRP)', 'Supplier Scheduling', 'SAP PO Automation'],
  },
  {
    id: 'logistics',
    stage: '06',
    title: 'Import, Logistics & Demurrage',
    level: 'Working Knowledge',
    heerExperience:
      'Managing port container clearance timelines, maritime shipping documentation, detention risk, and intermodal transport handoffs.',
    verifiedApplication:
      'Instituted weekly Detention & Demurrage (D&D) tracking in the S&OP dashboard, directly slashing demurrage container charges by 22% over 3 years.',
    toolsUsed: ['D&D Tracking Dashboards', 'Freight Partner Collaboration', 'Excel VBA'],
  },
  {
    id: 'customer',
    stage: '07',
    title: 'Customer Fulfillment & Service Levels',
    level: 'Experienced',
    heerExperience:
      'Ensuring promised On-Time In-Full (OTIF) delivery to global consumer goods clients while protecting product launch timelines.',
    verifiedApplication:
      'Orchestrated 4 critical new product launches with zero line-stoppages, improving launch operational efficiency by 35%.',
    toolsUsed: ['OTIF Metrics', 'NPI Stage-Gate Trackers', 'Commercial Service SLAs'],
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-01-global-supply',
    caseNumber: 'CASE 01',
    title: 'Global Multi-SKU Supply Planning & S&OP',
    subtitle: 'Balancing multi-regional demand across Europe, North America, and India',
    tag: 'Supply Planning / S&OP',
    challenge:
      'Managing disparate customer demand signals across 3 continents with varying shipping lead times, fluctuating export container availability, and finite plant line capacity.',
    role:
      'Supply Planner – Officer with end-to-end ownership of 50 specialty chemical SKUs (700 MT volume).',
    approach: [
      'Consolidated regional demand forecasts into a unified, capacity-feasible master production plan.',
      'Led monthly cross-functional S&OP meetings connecting sales, manufacturing, QA, and logistics.',
      'Established disciplined inventory holding policies to buffer against trans-Atlantic transit fluctuations.',
    ],
    outcome: [
      'Maintained consistent service levels across Europe and North America while minimizing finished-goods excess.',
      'Achieved stable plant scheduling rhythm across seasonal demand peaks.',
    ],
    metrics: ['50 Specialty SKUs', '700 MT Scope', '3 Global Continents'],
    demonstrates: ['End-to-End S&OP', 'Global Supply Planning', 'Cross-Functional Stakeholder Management'],
    deepDive: {
      rootProblem:
        'Regional sales teams placed erratic batch orders without visibility into production line changeovers, creating artificial plant bottlenecks and delayed export dispatches.',
      methodology:
        'Introduced rolling 12-week forecast reconciliation and segmented SKUs by demand variability, establishing clear priority rules during constrained allocation periods.',
      tradeoffsHandled:
        'Balanced commercial customer urgency against plant efficiency—protecting high-margin export batches while batching campaign production to cut cleaning downtime.',
      keyLearning:
        'Supply planning is fundamentally an exercise in transparent trade-offs. The role of the planner is to make operational constraints visible before commercial commitments are compromised.',
    },
  },
  {
    id: 'case-02-raw-material',
    caseNumber: 'CASE 02',
    title: 'Strategic Raw Material Continuity (Lauryl Alcohol)',
    subtitle: 'Managing ~6,000 MT/month representing ~60% of total plant raw material demand',
    tag: 'Procurement Planning / Risk Mitigation',
    challenge:
      'Lauryl Alcohol is the primary precursor for surfactant production. A single shipment delay or vessel schedule disruption risked total plant shutdown and extensive downstream customer penalties.',
    role:
      'Raw Material Planner responsible for monthly consumption forecasting, supplier order release, and logistics alignment.',
    approach: [
      'Built a granular material requirements model that translated multi-line production schedules into daily consumption rates.',
      'Coordinated closely with global chemical suppliers and maritime shipping agents to track vessel movement milestones.',
      'Set dynamic buffer levels pegged to real-time port congestion indices rather than static calendar assumptions.',
    ],
    outcome: [
      'Achieved a verified 16% reduction in plant stockouts.',
      'Ensured uninterrupted raw material feed for high-volume manufacturing lines throughout volatile market conditions.',
    ],
    metrics: ['~6,000 MT/month planned', '~60% Plant RM Demand', '-16% Stockout Reduction'],
    demonstrates: ['Critical Raw Material Planning', 'Supplier Coordination', 'Supply Chain Risk Mitigation'],
    deepDive: {
      rootProblem:
        'Reliance on static safety stock calculations failed during global shipping delays, resulting in sudden stockouts and emergency plant changeovers.',
      methodology:
        'Shifted from monthly static ordering to weekly consumption re-calibration with supplier delivery slotting and buffer stock adjustments.',
      tradeoffsHandled:
        'Managed the tension between working capital constraints (tank farm storage capacity) and catastrophic stockout risk.',
      keyLearning:
        'High-volume material planning requires real-time physical visibility into logistics pipelines, not just ledger entries in an ERP.',
    },
  },
  {
    id: 'case-03-npi-launches',
    caseNumber: 'CASE 03',
    title: 'Cross-Functional New Product Introductions (NPI)',
    subtitle: 'Orchestrating 4 high-stakes product launches from commercial sign-off to full production',
    tag: 'NPI / Manufacturing Integration',
    challenge:
      'New product launches routinely encounter delays due to misaligned raw material lead times, packaging trials, and unvalidated production cycle times.',
    role:
      'Lead Supply Planner for 4 new specialty chemical launches, serving as the operational liaison between Commercial, R&D, Procurement, and Manufacturing.',
    approach: [
      'Established a rigorous stage-gate operational timeline mapping pilot batches, raw material trials, and scale-up slots.',
      'Aligned procurement with formulation requirements early, preventing packaging and catalyst hold-ups.',
      'Pre-scheduled dedicated plant trial windows to stress-test throughput rates before committing to commercial delivery dates.',
    ],
    outcome: [
      'Delivered all 4 new product launches on target with zero commercial fulfillment delays.',
      'Improved overall launch operational efficiency by 35% across procurement and manufacturing workflows.',
    ],
    metrics: ['4 Product Launches', '+35% Launch Efficiency', '0 Line Stoppages'],
    demonstrates: ['NPI Operational Readiness', 'Cross-Functional Coordination', 'Stage-Gate Execution'],
    deepDive: {
      rootProblem:
        'Commercial commitments were frequently agreed with clients prior to confirming chemical ingredient availability and plant trial capacity.',
      methodology:
        'Created a synchronized checklist tying R&D pilot sign-off directly into ERP material masters and production line trial reservation.',
      tradeoffsHandled:
        'Accommodated R&D recipe tweaks without bumping commercial mass-production schedules on existing high-volume SKUs.',
      keyLearning:
        'Successful new product launches depend on disciplined cross-functional governance rather than heroic last-minute operational interventions.',
    },
  },
  {
    id: 'case-04-fsvv-model',
    caseNumber: 'CASE 04',
    title: 'Production Model Transformation (FSVV Model)',
    subtitle: 'Transitioning from reactive batch scheduling to Fixed Schedule Variable Volume',
    tag: 'Process Engineering / Capacity Optimization',
    challenge:
      'Frequent ad-hoc changes in production scheduling led to excessive reactor washouts, low capacity utilization, and unpredictable operator workloads.',
    role:
      'Supply Planner designing and executing the production scheduling model redesign.',
    approach: [
      'Analyzed historical SKU changeover matrices and cleaning cycles across reactor units.',
      'Designed and instituted a Fixed Schedule Variable Volume (FSVV) planning framework: locking in product family production sequence while varying volume based on actual demand.',
      'Collaborated with plant production managers and shift supervisors to train staff on the fixed rhythm.',
    ],
    outcome: [
      'Increased overall operational efficiency by 27%.',
      'Significantly improved line capacity utilization and reduced chemical cleaning waste between product runs.',
    ],
    metrics: ['+27% Operational Efficiency', 'Optimized Line Capacity', 'Reduced Changeover Waste'],
    demonstrates: ['Operations Research', 'Production Model Innovation', 'Change Management'],
    deepDive: {
      rootProblem:
        'Planners adjusted daily batch schedules reactively to individual sales orders, causing compounding changeovers and losing 15-20% of productive line hours.',
      methodology:
        'Grouped products into compatible chemistry families, fixing the cycle sequence weekly and modulating run-hours by order volume rather than order arrival.',
      tradeoffsHandled:
        'Required commercial teams to accept strict cut-off windows in exchange for higher on-time delivery consistency and faster turnaround.',
      keyLearning:
        'Predictable operational cadence often delivers significantly better commercial responsiveness than chasing erratic real-time requests.',
    },
  },
  {
    id: 'case-05-sap-automation',
    caseNumber: 'CASE 05',
    title: 'Enterprise Workflow Automation in SAP S/4HANA',
    subtitle: 'Streamlining purchase order creation and cutting demurrage expenses',
    tag: 'Digital Operations / Enterprise Systems',
    challenge:
      'Manual purchase order creation in SAP led to delayed vendor communications, transcription errors, and recurring import demurrage penalties at container freight stations.',
    role:
      'Initiator and project lead for SAP PO workflow automation and S&OP MIS dashboard redesign.',
    approach: [
      'Identified repetitive manual data-entry choke points within the SAP S/4HANA materials management flow.',
      'Initiated and co-designed automated PO release workflows tied directly to approved procurement schedules.',
      'Redesigned the executive MIS dashboard, integrating weekly Detention & Demurrage (D&D) tracking to proactively flag overdue containers.',
    ],
    outcome: [
      'Boosted on-time PO accuracy by 65%.',
      'Drove a verified 22% reduction in port demurrage and detention expenses over 3 consecutive years.',
    ],
    metrics: ['+65% PO Accuracy', '-22% Demurrage Expenses', '3-Year Sustained Savings'],
    demonstrates: ['SAP S/4HANA Workflow Design', 'Process Automation', 'Cost Elimination'],
    deepDive: {
      rootProblem:
        'Port demurrage fees accrued quietly because demurrage reports were retrospective monthly tallies rather than actionable weekly alerts.',
      methodology:
        'Created a dynamic Excel/MIS tracker pulling real-time customs clearance statuses and aging dates, triggering automated alerts before grace periods expired.',
      tradeoffsHandled:
        'Standardized vendor delivery terms and PO creation parameters across procurement managers without slowing down urgent purchasing needs.',
      keyLearning:
        'Process automation delivers maximum ROI when paired with active operational dashboards that convert latent data into immediate managerial intervention.',
    },
  },
  {
    id: 'case-06-ey-transformation',
    caseNumber: 'CASE 06',
    title: 'Global FMCG Digital Replenishment Transformation (EY Singapore)',
    subtitle: 'Transitioning 5 global markets from manual Excel planning to a standardized digital workflow',
    tag: 'Consulting / Digital Transformation',
    challenge:
      'One of the world’s largest FMCG organisations (Unilever) managed regional inventory replenishment through fractured, individual spreadsheets across multiple countries, causing inconsistent replenishment rules and limited global visibility.',
    role:
      'Business Consulting Intern – Supply Chain Operations & Transformation, embedded in the core consulting and client delivery team.',
    approach: [
      'Translated ground-level replenishment logic and business rules into structured platform capabilities.',
      'Partnered with client stakeholders and engineering teams to author functional requirements and Jira user stories.',
      'Led client User Acceptance Testing (UAT) sessions: validated complex inventory simulation scenarios and resolved edge-case calculation defects with developers.',
      'Engineered live UAT progress trackers, issue resolution dashboards, and executive steering reports.',
    ],
    outcome: [
      'Enabled 5 global markets to systematically migrate from manual spreadsheets to an enterprise digital replenishment platform.',
      'Enhanced project release governance, risk transparency, and on-schedule sprint deployments.',
    ],
    metrics: ['5 Global Markets', '1 Unified Platform', 'Excel → Digital Workflow'],
    demonstrates: ['Functional Solution Architecture', 'Agile Delivery & Jira', 'UAT Leadership & Client Delivery'],
    deepDive: {
      rootProblem:
        'Software developers did not understand the practical edge cases faced by market planners (e.g., minimum order quantities, warehouse pack sizes, promotional spikes), while planners struggled to articulate requirements in software user stories.',
      methodology:
        'Served as the functional translator: converting market planning heuristics into unambiguous mathematical logic, validation acceptance criteria, and regression test cases.',
      tradeoffsHandled:
        'Balanced market-specific customization requests against the mandate to maintain a clean, scalable core platform architecture.',
      keyLearning:
        'Digital transformation fails when software is built in isolation from planning reality. Real impact happens when functional practitioners bridge business logic with development teams.',
    },
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Supply Chain Operations',
    description: 'Ground-level manufacturing, planning, and multi-echelon coordination',
    skills: [
      { name: 'Supply Planning', level: 'Experienced', note: '50 SKUs, 700 MT scope' },
      { name: 'Sales & Operations Planning (S&OP)', level: 'Experienced', note: 'Cross-functional leadership' },
      { name: 'Production Planning & Scheduling', level: 'Experienced', note: 'FSVV model implementation' },
      { name: 'Raw Material Procurement Planning', level: 'Experienced', note: '~6,000 MT/mo Lauryl Alcohol' },
      { name: 'Inventory Optimization', level: 'Experienced', note: 'Safety stock & replenishment models' },
      { name: 'New Product Introductions (NPI)', level: 'Experienced', note: '4 successful launches' },
      { name: 'Demand & Forecast Translation', level: 'Experienced', note: 'Multi-region reconciliation' },
      { name: 'Supplier & Freight Coordination', level: 'Experienced', note: 'Global chemical logistics' },
      { name: 'Import Logistics & D&D Governance', level: 'Working Knowledge', note: '22% demurrage reduction' },
    ],
  },
  {
    category: 'Digital & Transformation',
    description: 'Translating business operating models into enterprise digital workflows',
    skills: [
      { name: 'SAP S/4HANA (PP Module)', level: 'Experienced', note: 'Production planning & PO automation' },
      { name: 'Digital Replenishment Platforms', level: 'Experienced', note: 'EY FMCG implementation (5 markets)' },
      { name: 'Business Requirements Document (BRD)', level: 'Experienced', note: 'Functional specification' },
      { name: 'User Stories & Acceptance Criteria', level: 'Experienced', note: 'Agile delivery via Jira' },
      { name: 'User Acceptance Testing (UAT)', level: 'Experienced', note: 'Led client validation sessions' },
      { name: 'Microsoft PowerApps', level: 'Working Knowledge', note: 'Custom business workflow apps' },
      { name: 'Process Mapping & Optimization', level: 'Experienced', note: 'Root cause problem-solving' },
      { name: 'Agile & Scrum Methodologies', level: 'Working Knowledge', note: 'Sprint planning & backlog grooming' },
    ],
  },
  {
    category: 'Analytics & Decision Support',
    description: 'Transforming operational data into executive visibility and actionable insights',
    skills: [
      { name: 'Advanced Microsoft Excel', level: 'Experienced', note: 'Complex modeling, index-match, solver' },
      { name: 'Microsoft Power BI', level: 'Working Knowledge', note: 'Interactive operational dashboards' },
      { name: 'S&OP MIS Reporting', level: 'Experienced', note: 'Executive reporting suites' },
      { name: 'KPI & Root Cause Analysis', level: 'Experienced', note: 'OTIF, OEE, stockout metrics' },
      { name: 'Capacity & Load Modeling', level: 'Experienced', note: 'Plant throughput optimization' },
    ],
  },
  {
    category: 'AI & Emerging Technology',
    description: 'Augmenting planner productivity and exploring algorithmic decision intelligence',
    skills: [
      { name: 'Google AI Studio & GenAI Tools', level: 'Working Knowledge', note: 'Exploration of supply chain prompts' },
      { name: 'Prompt Engineering for Operations', level: 'Working Knowledge', note: 'Extracting insights & formatting data' },
      { name: 'ChatGPT / Claude / Copilot', level: 'Experienced', note: 'Planner productivity & synthesis' },
      { name: 'Python (Pandas, NumPy)', level: 'Currently Learning', note: 'Jupyter notebooks, data wrangling' },
      { name: 'Algorithmic Exception Sensing', level: 'Currently Learning', note: 'Prototyping risk alerts' },
    ],
  },
];

export const PHILOSOPHY_PRINCIPLES: PhilosophyPrinciple[] = [
  {
    number: '01',
    title: 'Think End-to-End',
    coreIdea: 'A supply chain decision rarely stops within one department.',
    operationalApplication:
      'Adjusting a production schedule alters supplier delivery slots, warehouse pick queues, customer ship dates, and cash flow. I approach every planning variable by tracing its upstream prerequisites and downstream consequences.',
  },
  {
    number: '02',
    title: 'Learn the Business',
    coreIdea: 'Operational decisions must ultimately serve customer satisfaction and enterprise financial performance.',
    operationalApplication:
      'My mindset has evolved from merely "keeping products on the shelf" to understanding working capital intensity, cost-to-serve trade-offs, and how supply chain agility drives competitive commercial advantage.',
  },
  {
    number: '03',
    title: 'Improve What Exists',
    coreIdea: 'If a workflow is manual, fragile, or siloed today, ask how it can become simpler, faster, and self-sustaining.',
    operationalApplication:
      'Whether replacing chaotic scheduling with an FSVV model (+27% efficiency), automating SAP POs (+65% accuracy), or digitizing FMCG spreadsheets at EY, my default reflex is to leave operations better than I found them.',
  },
  {
    number: '04',
    title: 'Stay Curious',
    coreIdea: 'Supply chains are being fundamentally reshaped by volatility, regionalization, and artificial intelligence.',
    operationalApplication:
      'From self-taught COVID supply chain fundamentals to an SMU MBA and active Python/AI exploration, I constantly push beyond my formal job description to learn the tools that will define tomorrow’s supply chains.',
  },
];

export const DIFFERENTIATORS = [
  {
    number: '01',
    title: 'I have actually operated a supply chain',
    summary:
      'I understand what happens when a batch fails, a container is delayed at port, or a raw material supplier misses a delivery window. My recommendations are grounded in plant and market reality, not theoretical spreadsheets.',
  },
  {
    number: '02',
    title: 'I have demonstrated increasing responsibility early',
    summary:
      'From an initial intern to managing 50 export SKUs, 60% of plant raw material demand, and multi-country S&OP cycles in under 4 years, I rapidly earn trust through execution reliability and ownership.',
  },
  {
    number: '03',
    title: 'I bring authentic international & cross-market exposure',
    summary:
      'Direct operational coordination across Europe, North America, and India, complemented by global digital replenishment rollout across 5 international markets at EY Singapore.',
  },
  {
    number: '04',
    title: 'I combine hands-on operations with digital transformation',
    summary:
      'I have lived the pain of spreadsheet planning and successfully translated that pain into digital platform logic, user stories, and tested software capabilities.',
  },
  {
    number: '05',
    title: 'I bridge the gap between business and technology',
    summary:
      'I can debate safety stock equations with a plant manager in the morning and write unambiguous Jira acceptance criteria for a software developer in the afternoon.',
  },
  {
    number: '06',
    title: 'I am comfortable learning beyond my job description',
    summary:
      'Proactively learned supply chain fundamentals during COVID, completed an SMU MBA, and am now actively learning Python and AI tools to augment decision-making.',
  },
  {
    number: '07',
    title: 'I think beyond the immediate task',
    summary:
      'I don’t just complete tickets or schedules—I identify recurring root causes and build systematic solutions, such as the FSVV model or automated demurrage tracking.',
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 't-01',
    quote:
      'Heer demonstrated exceptional ownership and learning agility, taking on end-to-end supply planning responsibilities across complex global markets far ahead of typical career timelines.',
    name: '[Senior Operations Leader]',
    designation: 'Supply Chain Director / Mentor',
    company: 'Galaxy Surfactants Ltd',
    relationship: 'Direct Supervisor & Operations Head',
    isPlaceholder: true,
  },
  {
    id: 't-02',
    quote:
      'Heer has an uncanny ability to translate ambiguous client planning pain points into sharp functional requirements. Her leadership in UAT sessions across international markets was instrumental to project momentum.',
    name: '[Senior Consulting Engagement Manager]',
    designation: 'Supply Chain & Operations Transformation Lead',
    company: 'Ernst & Young (EY) Singapore',
    relationship: 'Engagement Manager & Project Lead',
    isPlaceholder: true,
  },
  {
    id: 't-03',
    quote:
      'A standout professional who combines deep operational intuition with strategic business acumen. Heer approaches every problem with curiosity, rigor, and a natural bias for continuous improvement.',
    name: '[Academic & Industry Mentor]',
    designation: 'Professor / Industry Advisory Member',
    company: 'Singapore Management University (SMU)',
    relationship: 'Academic Advisor & MBA Leadership Faculty',
    isPlaceholder: true,
  },
];

export const INDUSTRY_TRANSFERABILITY = {
  universalQuestions: [
    {
      question: 'What is the true customer demand?',
      explanation: 'Unconstraining demand signals, reconciling commercial promotional forecasts, and filtering bullwhip noise.',
    },
    {
      question: 'What needs to be supplied and when?',
      explanation: 'Translating net requirements into executable production, staging, and procurement schedules.',
    },
    {
      question: 'What capacity and constraints exist?',
      explanation: 'Balancing machine hours, changeover matrices, labor shifts, and supplier batch minimums.',
    },
    {
      question: 'What inventory should be held and where?',
      explanation: 'Establishing multi-echelon safety buffers that safeguard OTIF without trapping working capital.',
    },
    {
      question: 'What risks could disrupt execution?',
      explanation: 'Monitoring port bottlenecks, raw material lead-time creep, and single-source supplier dependencies.',
    },
    {
      question: 'What trade-offs must the business make?',
      explanation: 'Equipping leadership to evaluate cost-to-serve versus customer SLA and capacity utilization.',
    },
  ],
  industryVariables: [
    {
      factor: 'Shelf Life & Obsolescence',
      comparison: 'Chemical expiration vs FMCG freshness dates vs Tech product life cycles.',
    },
    {
      factor: 'Regulatory & Compliance',
      comparison: 'REACH/hazardous chemical documentation vs FDA food safety vs Pharma GMP standards.',
    },
    {
      factor: 'Supplier Lead Times',
      comparison: 'Multi-month ocean bulk chemical tankers vs regional overland component supply.',
    },
    {
      factor: 'Manufacturing Architecture',
      comparison: 'Continuous reactor batch processes vs discrete electronics assembly lines.',
    },
  ],
};
