import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/careerData';
import { CheckCircle2, Search, Filter } from 'lucide-react';
import { ProficiencyLevel } from '../types';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.category)];

  const getBadgeStyle = (level: ProficiencyLevel) => {
    switch (level) {
      case 'Experienced':
        return 'bg-[#FFF7ED] text-[#C2410C] border-[#FED7AA] font-mono';
      case 'Working Knowledge':
        return 'bg-[#F5F3ED] text-stone-800 border-[#E5E2D9] font-mono';
      case 'Exposure':
        return 'bg-white text-stone-600 border-[#E5E2D9] font-mono';
      case 'Currently Learning':
        return 'bg-[#FFFBEB] text-amber-800 border-amber-200 font-mono';
    }
  };

  const filteredCategories = SKILL_CATEGORIES.filter((cat) =>
    activeCategory === 'All' ? true : cat.category === activeCategory
  ).map((cat) => ({
    ...cat,
    skills: cat.skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (skill.note && skill.note.toLowerCase().includes(searchQuery.toLowerCase()))
    ),
  })).filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="py-20 bg-[#FAF9F6] border-b border-[#E5E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C2410C] block mb-2">
            Tooling & Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#1A1A1A] tracking-tight">
            Interactive Skills & Competency Matrix
          </h2>
          <p className="mt-3 text-base text-stone-700 leading-relaxed font-normal">
            I believe in transparent skill representations. Each capability is clearly labeled with genuine proficiency levels—from hands-on daily execution to ongoing learning.
          </p>

          {/* Legend */}
          <div className="flex flex-wrap items-center gap-2.5 mt-5 text-xs">
            <span className="font-mono text-xs uppercase tracking-wider text-stone-500 mr-1">Proficiency Legend:</span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-md border text-[10px] font-mono font-semibold bg-[#FFF7ED] text-[#C2410C] border-[#FED7AA]">
              Experienced (Daily Production Execution)
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-md border text-[10px] font-mono font-semibold bg-[#F5F3ED] text-stone-800 border-[#E5E2D9]">
              Working Knowledge (Applied in Projects)
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-md border text-[10px] font-mono font-semibold bg-[#FFFBEB] text-amber-800 border-amber-200">
              Currently Learning (Proactive Expansion)
            </span>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-1.5 p-1 bg-[#F5F3ED] rounded-lg border border-[#E5E2D9] w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-md text-xs font-mono font-medium transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#1A1A1A] text-[#FAF9F6] shadow-2xs'
                    : 'text-stone-600 hover:text-[#1A1A1A]'
                }`}
                id={`skill-cat-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder="Search specific skill or tool..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-[#E5E2D9] rounded-lg text-[#1A1A1A] placeholder:text-stone-400 focus:outline-hidden focus:ring-1 focus:ring-[#C2410C]"
              id="skills-search-input"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.category}
              className="bg-white rounded-xl border border-[#E5E2D9] p-6 shadow-2xs"
            >
              <div className="mb-4">
                <h3 className="text-base font-serif font-bold text-[#1A1A1A]">{cat.category}</h3>
                <p className="text-xs text-stone-500 font-serif italic mt-0.5">{cat.description}</p>
              </div>

              <div className="space-y-2.5">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between p-3 rounded-lg bg-[#F5F3ED] border border-[#E5E2D9] hover:border-[#C2410C]/40 transition-colors"
                  >
                    <div>
                      <span className="text-xs font-serif font-bold text-[#1A1A1A] block">
                        {skill.name}
                      </span>
                      {skill.note && (
                        <span className="text-[11px] text-stone-600">
                          {skill.note}
                        </span>
                      )}
                    </div>
                    <span
                      className={`text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md border shrink-0 ${getBadgeStyle(
                        skill.level
                      )}`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
