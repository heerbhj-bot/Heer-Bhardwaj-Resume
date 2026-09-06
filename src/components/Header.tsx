import React, { useState, useEffect, useRef } from 'react';
import { Eye, ArrowUpRight, FileText } from 'lucide-react';
import { PROFILE_DATA } from '../data/careerData';

interface HeaderProps {
  onOpenRecruiterView: () => void;
  onOpenResumeModal: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenRecruiterView,
  onOpenResumeModal,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home', id: 'home' },
    { label: 'JOURNEY', href: '#journey', id: 'journey' },
    { label: 'WHY ME', href: '#why-me', id: 'why-me' },
    { label: 'HOW I THINK', href: '#how-i-think', id: 'how-i-think' },
    { label: 'TESTIMONIALS', href: '#testimonials', id: 'testimonials' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  // Auto-scroll active section link into view on mobile
  useEffect(() => {
    if (mobileNavRef.current) {
      const activeEl = mobileNavRef.current.querySelector<HTMLElement>(
        `[data-section="${activeSection}"]`
      );
      if (activeEl) {
        activeEl.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        });
      }
    }
  }, [activeSection]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const isMobile = window.innerWidth < 1024;
      const offset = isMobile ? 100 : 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      window.history.replaceState(null, '', `#${id}`);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#E5E2D9] shadow-xs'
          : 'bg-[#FAF9F6]/90 backdrop-blur-xs border-b border-[#E5E2D9]/60'
      }`}
    >
      {/* Top Bar: Brand, Desktop Nav, and Action Buttons */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-13 sm:h-14 lg:h-16 flex items-center justify-between">
        {/* Brand / Name */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="flex items-center gap-2 sm:gap-2.5 group text-left cursor-pointer"
          id="nav-brand"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-[#1A1A1A] text-[#FAF9F6] flex items-center justify-center font-serif font-bold text-xs tracking-wider group-hover:bg-[#C2410C] transition-colors shrink-0">
            HB
          </div>
          <div>
            <span className="block font-serif font-semibold text-[#1A1A1A] tracking-tight text-xs sm:text-base leading-tight">
              {PROFILE_DATA.name}
            </span>
            <span className="hidden xs:block text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-stone-500">
              Supply Chain &bull; Operations
            </span>
          </div>
        </a>

        {/* Desktop Nav: Kept exactly as user likes */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`px-3 py-1.5 rounded-md text-xs font-mono tracking-wider transition-colors ${
                  isActive
                    ? 'text-[#C2410C] bg-[#FFF7ED] font-semibold border-b-2 border-[#C2410C]'
                    : 'text-stone-600 hover:text-[#1A1A1A] hover:bg-[#F5F3ED] font-medium'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons: Visible on both desktop and mobile */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={onOpenRecruiterView}
            className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md text-[11px] sm:text-xs font-mono font-semibold bg-[#FFF7ED] hover:bg-[#FFEDD5] text-[#C2410C] border border-[#FED7AA] transition-all cursor-pointer shadow-2xs"
            id="header-recruiter-view-btn"
            aria-label="Open 20-second recruiter view"
          >
            <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C2410C]" />
            <span className="hidden sm:inline">Recruiter View (20s)</span>
            <span className="sm:hidden">20s Scan</span>
          </button>

          <button
            onClick={onOpenResumeModal}
            className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md text-[11px] sm:text-xs font-mono font-semibold bg-[#1A1A1A] hover:bg-[#C2410C] text-[#FAF9F6] shadow-2xs transition-all cursor-pointer"
            id="header-resume-btn"
            aria-label="View resume"
          >
            <FileText className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-stone-300" />
            <span>Resume</span>
            <ArrowUpRight className="hidden sm:inline w-3 h-3 text-stone-400" />
          </button>
        </div>
      </div>

      {/* Mobile Section Nav Bar: Visible ON SCREEN directly (no hamburger / sidebar) */}
      <div className="lg:hidden border-t border-[#E5E2D9] bg-[#FAF9F6]/95 backdrop-blur-md">
        <nav
          ref={mobileNavRef}
          aria-label="Page sections navigation"
          className="flex items-center gap-1 px-2.5 py-1.5 overflow-x-auto scrollbar-none touch-pan-x"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                data-section={link.id}
                className={`px-2.5 py-1 rounded-md text-[11px] font-mono tracking-wider transition-all whitespace-nowrap border flex items-center shrink-0 cursor-pointer ${
                  isActive
                    ? 'text-[#C2410C] bg-[#FFF7ED] border-[#FED7AA] font-bold shadow-2xs'
                    : 'text-stone-600 bg-white/70 border-[#E5E2D9] hover:text-[#1A1A1A] hover:bg-white font-medium'
                }`}
              >
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
