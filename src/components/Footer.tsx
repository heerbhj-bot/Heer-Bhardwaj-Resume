import React from 'react';
import { ArrowUp, Linkedin, Mail, MapPin } from 'lucide-react';
import { PROFILE_DATA } from '../data/careerData';

interface FooterProps {
  onOpenRecruiterView: () => void;
  onOpenResumeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenRecruiterView,
  onOpenResumeModal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A1A1A] text-stone-400 border-t border-stone-800 py-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-stone-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#242220] border border-stone-700 flex items-center justify-center font-serif font-bold text-[#FED7AA] text-xs">
              HB
            </div>
            <div>
              <div className="font-serif font-bold text-white text-sm">
                {PROFILE_DATA.name}
              </div>
              <div className="text-[10px] font-mono text-stone-500">
                Supply Chain &amp; Operations Portfolio &bull; Singapore
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <button
              onClick={onOpenRecruiterView}
              className="text-stone-300 hover:text-white cursor-pointer transition-colors"
            >
              Recruiter View (60s)
            </button>
            <span className="text-stone-700">&bull;</span>
            <button
              onClick={onOpenResumeModal}
              className="text-stone-300 hover:text-white cursor-pointer transition-colors"
            >
              Verified Resume
            </button>
            <span className="text-stone-700">&bull;</span>
            <a
              href={PROFILE_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-300 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-stone-700">&bull;</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-stone-300 hover:text-white cursor-pointer transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-stone-500">
          <p>
            &copy; {new Date().getFullYear()} {PROFILE_DATA.name}. Built with authentic operational data and zero manufactured metrics.
          </p>
          <div className="flex items-center gap-2">
            <MapPin className="w-3 h-3 text-[#C2410C]" />
            <span>Singapore Management University (SMU MBA)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
