export type ProficiencyLevel = 'Experienced' | 'Working Knowledge' | 'Exposure' | 'Currently Learning';

export interface ProfileData {
  name: string;
  headline: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  summary: string;
  targetRoles: string[];
  threeLenses: {
    layer: string;
    title: string;
    subtitle: string;
    description: string;
    capabilities: string[];
    evidence: string;
  }[];
}

export interface MetricItem {
  id: string;
  value: string;
  label: string;
  context: string;
  category: 'efficiency' | 'scale' | 'financial' | 'launch';
  highlight?: boolean;
}

export interface TimelineNode {
  period: string;
  year: string;
  title: string;
  company: string;
  location: string;
  roleType: string;
  scopeSummary: string;
  verifiedScopePoints: string[];
  keyMilestone: string;
}

export interface ValueChainNode {
  id: string;
  stage: string;
  title: string;
  level: ProficiencyLevel;
  heerExperience: string;
  verifiedApplication: string;
  toolsUsed: string[];
}

export interface CaseStudy {
  id: string;
  caseNumber: string;
  title: string;
  subtitle: string;
  tag: string;
  challenge: string;
  role: string;
  approach: string[];
  outcome: string[];
  metrics: string[];
  demonstrates: string[];
  context?: string;
  problem?: string;
  whatIDid?: string;
  result?: string;
  learning?: string;
  processFlow?: { step: string; label: string; detail?: string }[];
  deepDive?: {
    rootProblem: string;
    methodology: string;
    tradeoffsHandled: string;
    keyLearning: string;
  };
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: ProficiencyLevel;
    note?: string;
  }[];
}

export interface PhilosophyPrinciple {
  number: string;
  title: string;
  coreIdea: string;
  operationalApplication: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  designation: string;
  company: string;
  relationship: string;
  isPlaceholder: boolean;
}
