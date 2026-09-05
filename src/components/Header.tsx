import React, { useState, useEffect } from 'react';
import { Eye, Menu, X, ArrowUpRight } from 'lucide-react';
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Snapshot', href: '#me-in-a-nutshell', id: 'me-in-a-nutshell' },
    { label: 'Journey', href: '#how-i-got-here', id: 'how-i-got-here' },
    { label: 'Scope', href: '#scope-before-seniority', id: 'scope-before-seniority' },
    { label: 'What I Bring', href: '#what-i-bring', id: 'what-i-bring' },
    { label: 'Case Studies', href: '#case-studies', id: 'case-studies' },
    { label: 'Why Supply Chain', href: '#why-supply-chain', id: 'why-supply-chain' },
    { label: 'Supply Chain + AI', href: '#supply-chain-ai', id: 'supply-chain-ai' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#E5E2D9] shadow-xs'
          : 'bg-[#FAF9F6]/85 backdrop-blur-xs border-b border-[#E5E2D9]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Name */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 group text-left"
          id="nav-brand"
        >
          <div className="w-8 h-8 rounded-md bg-[#1A1A1A] text-[#FAF9F6] flex items-center justify-center font-serif font-bold text-xs tracking-wider group-hover:bg-[#C2410C] transition-colors">
            HB
          </div>
          <div>
            <span className="block font-serif font-semibold text-[#1A1A1A] tracking-tight text-sm sm:text-base leading-tight">
              {PROFILE_DATA.name}
            </span>
            <span className="block text-[10px] font-mono uppercase tracking-wider text-stone-500">
              Supply Chain &bull; Singapore
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-2.5 py-1.5 rounded-md text-xs transition-colors ${
                  isActive
                    ? 'text-[#C2410C] bg-[#F5F3ED] font-semibold border-b-2 border-[#C2410C]'
                    : 'text-stone-600 hover:text-[#1A1A1A] hover:bg-[#F5F3ED]/70 font-medium'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={onOpenRecruiterView}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-[#FFF7ED] hover:bg-[#FFEDD5] text-[#C2410C] border border-[#FED7AA] transition-all cursor-pointer shadow-2xs"
            id="header-recruiter-view-btn"
          >
            <Eye className="w-3.5 h-3.5 text-[#C2410C]" />
            <span>Recruiter View (30s)</span>
          </button>

          <button
            onClick={onOpenResumeModal}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-[#1A1A1A] hover:bg-[#C2410C] text-[#FAF9F6] shadow-2xs transition-all cursor-pointer"
            id="header-resume-btn"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 text-stone-400" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenRecruiterView}
            className="p-1.5 rounded-md bg-[#FFF7ED] text-[#C2410C] border border-[#FED7AA] text-xs font-mono font-bold"
            aria-label="Quick Recruiter Summary"
          >
            30s
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-stone-600 hover:bg-[#F5F3ED] transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#FAF9F6] border-b border-[#E5E2D9] px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-stone-700 hover:bg-[#F5F3ED]"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-[#E5E2D9] flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRecruiterView();
              }}
              className="flex-1 py-2 text-center text-xs font-semibold rounded-md bg-[#FFF7ED] text-[#C2410C] border border-[#FED7AA]"
            >
              Recruiter View (30s)
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="flex-1 py-2 text-center text-xs font-semibold rounded-md bg-[#1A1A1A] text-white"
            >
              Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
