import React, { useState } from 'react';
import { Mail, Phone, Linkedin, FileText, Check, Copy, ArrowRight } from 'lucide-react';
import { PROFILE_DATA } from '../data/careerData';

interface ContactSectionProps {
  onOpenResumeModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResumeModal }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-[#1A1A1A] text-[#FAF9F6] border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-mono font-semibold text-[#FED7AA] uppercase tracking-wider block mb-2">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#FAF9F6] tracking-tight">
            Let&apos;s build something better.
          </h2>
          {/* Supporting line <= 40 words */}
          <p className="mt-4 text-base sm:text-lg text-stone-300 font-serif leading-relaxed">
            I&apos;m interested in roles where supply chain, business, and technology come together — and where I can contribute, learn, and grow with the team.
          </p>

          {/* Core Action Buttons: Let's Talk, LinkedIn, Download Resume */}
          <div className="flex flex-wrap items-center gap-3 pt-6">
            <a
              href={`mailto:${PROFILE_DATA.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-[#C2410C] hover:bg-[#EA580C] text-white shadow-xs transition-all"
              id="cta-lets-talk-btn"
            >
              <Mail className="w-4 h-4" />
              <span>Let&apos;s Talk</span>
            </a>

            <a
              href={PROFILE_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-stone-800 hover:bg-stone-700 text-[#FAF9F6] border border-stone-700 transition-all"
              id="cta-linkedin-btn"
            >
              <Linkedin className="w-4 h-4 text-[#FED7AA]" />
              <span>LinkedIn</span>
            </a>

            <button
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-stone-800 hover:bg-stone-700 text-[#FAF9F6] border border-stone-700 transition-all cursor-pointer"
              id="cta-download-resume-btn"
            >
              <FileText className="w-4 h-4 text-[#FED7AA]" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>

        {/* Contact Details Bar */}
        <div className="pt-8 border-t border-stone-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-stone-400">
          <div className="flex items-center justify-between p-3 rounded-lg bg-stone-900 border border-stone-800">
            <span>Email: {PROFILE_DATA.email}</span>
            <button onClick={copyEmail} className="text-stone-300 hover:text-white cursor-pointer ml-2">
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
          <div className="p-3 rounded-lg bg-stone-900 border border-stone-800">
            <span>Location: Singapore (SMU MBA)</span>
          </div>
          <div className="p-3 rounded-lg bg-stone-900 border border-stone-800">
            <span>Work Authorization: Employment Pass Eligible</span>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-12 pt-6 border-t border-stone-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 font-mono">
          <div>&copy; {new Date().getFullYear()} Heer Bhardwaj &bull; Singapore</div>
          <div className="mt-2 sm:mt-0 font-serif italic text-stone-400">
            &ldquo;Quick to scan &bull; Visual &bull; Interactive &bull; Human &bull; Evidence-based&rdquo;
          </div>
        </div>
      </div>
    </section>
  );
};
