import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HowToExplore } from './components/HowToExplore';
import { Hero } from './components/Hero';
import { TimelineSection } from './components/TimelineSection';
import { ThreeLenses } from './components/ThreeLenses';
import { HowIThinkSection } from './components/HowIThinkSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { RecruiterDrawer } from './components/RecruiterDrawer';
import { ResumeModal } from './components/ResumeModal';
import { Eye } from 'lucide-react';

export default function App() {
  const [recruiterViewOpen, setRecruiterViewOpen] = useState<boolean>(false);
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'journey',
        'why-me',
        'how-i-think',
        'testimonials',
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
      {/* Sticky Header with 6 Primary Navigation Sections */}
      <Header
        onOpenRecruiterView={() => setRecruiterViewOpen(true)}
        onOpenResumeModal={() => setResumeModalOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Streamlined Narrative Flow */}
      <main>
        {/* Tiny Visual Guide: How to explore */}
        <div className="pt-24 lg:pt-16">
          <HowToExplore />
        </div>

        {/* SECTION 1 — HOME */}
        <Hero
          onOpenRecruiterView={() => setRecruiterViewOpen(true)}
          onOpenResumeModal={() => setResumeModalOpen(true)}
        />

        {/* SECTION 2 — MY JOURNEY (HOW I GOT HERE) */}
        <TimelineSection />

        {/* SECTION 3 — WHY ME (WHAT I BRING) */}
        <ThreeLenses />

        {/* SECTION 4 — HOW I SEE SUPPLY CHAIN (CUSTOMER Diagram, Principles & AI) */}
        <HowIThinkSection />

        {/* SECTION 5 — TESTIMONIALS (BEYOND THE RESUME) */}
        <TestimonialsSection />

        {/* SECTION 6 — CONTACT (LET'S BUILD BETTER SUPPLY CHAINS) */}
        <ContactSection onOpenResumeModal={() => setResumeModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Recruiter View (20s) Trigger */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setRecruiterViewOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1A1A1A] hover:bg-[#C2410C] text-[#FAF9F6] shadow-xl hover:shadow-2xl border border-stone-700 transition-all text-xs font-mono font-semibold cursor-pointer group"
          id="floating-recruiter-view-btn"
          aria-label="Open 20-second recruiter view"
        >
          <Eye className="w-4 h-4 text-[#FED7AA] group-hover:scale-110 transition-transform" />
          <span>Recruiter View (20s)</span>
        </button>
      </div>

      {/* Recruiter Drawer (20-second summary) */}
      <RecruiterDrawer
        isOpen={recruiterViewOpen}
        onClose={() => setRecruiterViewOpen(false)}
        onOpenResume={() => {
          setRecruiterViewOpen(false);
          setResumeModalOpen(true);
        }}
      />

      {/* Resume Viewer Modal with download functionality */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
