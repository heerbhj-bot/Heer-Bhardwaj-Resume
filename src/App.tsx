import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowToExplore } from './components/HowToExplore';
import { MetricsShowcase } from './components/MetricsShowcase';
import { TimelineSection } from './components/TimelineSection';
import { ScopeBeforeSeniority } from './components/ScopeBeforeSeniority';
import { ThreeLenses } from './components/ThreeLenses';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { WhySupplyChainSection } from './components/WhySupplyChainSection';
import { HowIThinkSection } from './components/HowIThinkSection';
import { SupplyChainAISection } from './components/SupplyChainAISection';
import { IndustryTransferability } from './components/IndustryTransferability';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { RecruiterDrawer } from './components/RecruiterDrawer';
import { ResumeModal } from './components/ResumeModal';
import { Eye, FileText } from 'lucide-react';

export default function App() {
  const [recruiterViewOpen, setRecruiterViewOpen] = useState<boolean>(false);
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'how-to-explore',
        'me-in-a-nutshell',
        'how-i-got-here',
        'scope-before-seniority',
        'what-i-bring',
        'case-studies',
        'why-supply-chain',
        'how-i-think',
        'supply-chain-ai',
        'transferability',
        'beyond-the-resume',
        'contact',
      ];

      const scrollPos = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1A1A1A] font-sans selection:bg-[#C2410C] selection:text-white">
      {/* Top Sticky Header */}
      <Header
        onOpenRecruiterView={() => setRecruiterViewOpen(true)}
        onOpenResumeModal={() => setResumeModalOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Narrative Flow */}
      <main>
        {/* 01 — HERO */}
        <Hero
          onOpenRecruiterView={() => setRecruiterViewOpen(true)}
          onOpenResumeModal={() => setResumeModalOpen(true)}
        />

        {/* 02 — HOW TO EXPLORE */}
        <HowToExplore onOpenRecruiterView={() => setRecruiterViewOpen(true)} />

        {/* 03 — ME IN A NUTSHELL */}
        <MetricsShowcase />

        {/* 04 — HOW I GOT HERE */}
        <TimelineSection />

        {/* 05 — SCOPE BEFORE SENIORITY */}
        <ScopeBeforeSeniority />

        {/* 06 — WHAT I BRING */}
        <ThreeLenses />

        {/* 07 — PROBLEMS I'VE WORKED ON (Includes EY / Digital Transformation) */}
        <CaseStudiesSection />

        {/* 08 — WHY SUPPLY CHAIN */}
        <WhySupplyChainSection />

        {/* 09 — HOW I THINK */}
        <HowIThinkSection />

        {/* 10 — SUPPLY CHAIN + AI */}
        <SupplyChainAISection />

        {/* 11 — INDUSTRY AGILITY & MBA AS A BRIDGE */}
        <IndustryTransferability />

        {/* 12 — BEYOND THE RESUME */}
        <TestimonialsSection />

        {/* 13 — FINAL CTA */}
        <ContactSection onOpenResumeModal={() => setResumeModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating Recruiter View Button (Section 19) */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <button
          onClick={() => setRecruiterViewOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1A1A1A] hover:bg-[#C2410C] text-[#FAF9F6] shadow-xl hover:shadow-2xl border border-stone-700 transition-all text-xs font-mono font-semibold cursor-pointer group"
          id="floating-recruiter-view-btn"
          aria-label="Open 30-second recruiter view"
        >
          <Eye className="w-4 h-4 text-[#FED7AA] group-hover:scale-110 transition-transform" />
          <span>Recruiter View (30s)</span>
        </button>
      </div>

      {/* Recruiter Drawer (30-second summary) */}
      <RecruiterDrawer
        isOpen={recruiterViewOpen}
        onClose={() => setRecruiterViewOpen(false)}
        onOpenResume={() => {
          setRecruiterViewOpen(false);
          setResumeModalOpen(true);
        }}
      />

      {/* Resume Viewer Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
