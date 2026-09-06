import React, { useState } from 'react';
import { Mail, Linkedin, FileText, Check, Copy, ArrowUpRight } from 'lucide-react';
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
    <section id="contact" className="py-20 sm:py-24 bg-[#1A1A1A] text-[#FAF9F6] border-t border-stone-800 scroll-mt-28 lg:scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-mono font-semibold text-[#FED7AA] uppercase tracking-wider block mb-2">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#FAF9F6] tracking-tight">
            LET&apos;S BUILD BETTER SUPPLY CHAINS.
          </h2>
          {/* Supporting text <= 30 words */}
          <p className="mt-4 text-base sm:text-lg text-stone-300 font-serif leading-relaxed">
            I&apos;m interested in opportunities where supply chain, business and technology come together &mdash; and where I can contribute, learn and grow.
          </p>

          {/* Core Action Buttons: EMAIL ME, LINKEDIN, DOWNLOAD RESUME */}
          <div className="flex flex-wrap items-center gap-3 pt-6">
            <a
              href={`mailto:${PROFILE_DATA.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono font-semibold bg-[#C2410C] hover:bg-[#EA580C] text-white shadow-xs transition-all"
              id="cta-email-me-btn"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>EMAIL ME</span>
            </a>

            <a
              href={PROFILE_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono font-semibold bg-stone-800 hover:bg-stone-700 text-[#FAF9F6] border border-stone-700 transition-all"
              id="cta-linkedin-btn"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#FED7AA]" />
              <span>LINKEDIN</span>
              <ArrowUpRight className="w-3 h-3 text-stone-400" />
            </a>

            <button
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono font-semibold bg-stone-800 hover:bg-stone-700 text-[#FAF9F6] border border-stone-700 transition-all cursor-pointer"
              id="cta-download-resume-btn"
            >
              <FileText className="w-3.5 h-3.5 text-[#FED7AA]" />
              <span>DOWNLOAD RESUME</span>
            </button>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="pt-8 border-t border-stone-800 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono text-stone-400">
          <div className="flex items-center justify-between p-3 rounded-lg bg-stone-900 border border-stone-800">
            <span>{PROFILE_DATA.email}</span>
            <button
              onClick={copyEmail}
              className="text-stone-300 hover:text-white cursor-pointer ml-2"
              aria-label="Copy email address"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
          <div className="p-3 rounded-lg bg-stone-900 border border-stone-800">
            <span>Phone: +65 8649 4072</span>
          </div>
          <div className="p-3 rounded-lg bg-stone-900 border border-stone-800">
            <span>Location: Singapore</span>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-12 pt-6 border-t border-stone-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 font-mono">
          <div>&copy; {new Date().getFullYear()} Heer Bhardwaj &bull; Singapore</div>
          <div className="mt-2 sm:mt-0 font-serif italic text-stone-400">
            &ldquo;Scan &rarr; Interest &rarr; Click &rarr; Discover&rdquo;
          </div>
        </div>
      </div>
    </section>
  );
};
