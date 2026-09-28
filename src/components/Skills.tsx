import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  Code2,
  Layers,
  Database,
  Cloud,
  Cpu,
  Wrench,
  Users,
  Sparkles,
  ArrowDown,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const { skills } = PORTFOLIO_DATA;

  // Specific cascading relationship rules as requested in prompt
  const getCascadingTech = (name: string): string[] | null => {
    if (name === 'Spring Boot') {
      return ['Spring Boot', 'REST APIs', 'Java', 'Database'];
    }
    if (name.includes('Salesforce')) {
      return ['Salesforce', 'Objects', 'Flow', 'Apex / SOQL', 'LWC'];
    }
    if (name === 'Java') {
      return ['Java', 'OOP', 'Multithreading', 'Spring Boot'];
    }
    if (name === 'REST APIs') {
      return ['REST APIs', 'Custom Headers', 'JSON Payloads', 'Service Layer'];
    }
    if (name === 'PostgreSQL' || name === 'MySQL') {
      return [name, 'Schema Design', 'Entity Relations', 'ACID Consistency'];
    }
    return null;
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/70 border border-purple-200 text-xs font-bold text-purple-700 uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            TECHNICAL SKILLS
          </h2>
          <p className="text-slate-600 text-sm mt-3 max-w-xl">
            Interactive skill matrix reflecting verified backend engineering, Salesforce architecture, databases, and foundational core computer science subjects.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-3"></div>
        </div>

        {/* Category Grids */}
        <div className="space-y-12">
          {/* 1. Programming Languages & Frameworks */}
          <div>
            <div className="flex items-center gap-2.5 mb-4 pb-2 border-b border-purple-100">
              <div className="p-1.5 rounded-lg bg-purple-100 text-purple-700">
                <Code2 className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Programming Languages & Frameworks
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {skills.programmingLanguages.map((lang) => {
                const cascade = getCascadingTech(lang.name);
                const isHovered = hoveredCard === lang.name;
                return (
                  <div
                    key={lang.name}
                    onMouseEnter={() => setHoveredCard(lang.name)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="relative bg-white/80 backdrop-blur-xl border border-purple-200/80 rounded-2xl p-4 shadow-sm hover:shadow-lg hover:border-purple-400 transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 font-bold border border-purple-200/60">
                        {lang.level}
                      </span>
                      <Code2 className="w-4 h-4 text-purple-600 group-hover:scale-110 transition-transform" />
                    </div>

                    <h4 className="text-base font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                      {lang.name}
                    </h4>

                    <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                      {lang.highlight}
                    </p>

                    {/* Cascading Tech Cascade on Hover */}
                    {cascade && isHovered && (
                      <div className="mt-3 pt-2.5 border-t border-purple-100 animate-fade-in">
                        <span className="text-[10px] font-bold uppercase text-purple-600 block mb-1.5">
                          Architectural Flow:
                        </span>
                        <div className="flex flex-wrap items-center gap-1 text-[11px] font-mono text-purple-900">
                          {cascade.map((item, idx) => (
                            <React.Fragment key={item}>
                              <span className="px-1.5 py-0.5 rounded bg-purple-100 font-semibold">
                                {item}
                              </span>
                              {idx < cascade.length - 1 && (
                                <span className="text-purple-400 font-bold">↓</span>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              {skills.frameworksAndTech.map((tech) => {
                const cascade = getCascadingTech(tech.name);
                const isHovered = hoveredCard === tech.name;
                return (
                  <div
                    key={tech.name}
                    onMouseEnter={() => setHoveredCard(tech.name)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="relative bg-white/80 backdrop-blur-xl border border-purple-200/80 rounded-2xl p-4 shadow-sm hover:shadow-lg hover:border-purple-400 transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 font-bold border border-indigo-200/60">
                        Technology
                      </span>
                      <Layers className="w-4 h-4 text-indigo-600 group-hover:scale-110 transition-transform" />
                    </div>

                    <h4 className="text-base font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                      {tech.name}
                    </h4>

                    <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                      {tech.highlight}
                    </p>

                    {/* Cascading Tech Cascade on Hover */}
                    {cascade && isHovered && (
                      <div className="mt-3 pt-2.5 border-t border-purple-100 animate-fade-in">
                        <span className="text-[10px] font-bold uppercase text-purple-600 block mb-1.5">
                          Architectural Flow:
                        </span>
                        <div className="flex flex-wrap items-center gap-1 text-[11px] font-mono text-purple-900">
                          {cascade.map((item, idx) => (
                            <React.Fragment key={item}>
                              <span className="px-1.5 py-0.5 rounded bg-purple-100 font-semibold">
                                {item}
                              </span>
                              {idx < cascade.length - 1 && (
                                <span className="text-purple-400 font-bold">↓</span>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* 2. Databases & Relational Integrity */}
          <div>
            <div className="flex items-center gap-2.5 mb-4 pb-2 border-b border-purple-100">
              <div className="p-1.5 rounded-lg bg-indigo-100 text-indigo-700">
                <Database className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Databases & Relational Modeling
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.databases.map((db) => {
                const cascade = getCascadingTech(db.name);
                const isHovered = hoveredCard === db.name;
                return (
                  <div
                    key={db.name}
                    onMouseEnter={() => setHoveredCard(db.name)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="relative bg-white/80 backdrop-blur-xl border border-purple-200/80 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:border-purple-400 transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold border border-blue-200/60">
                        Relational DBMS
                      </span>
                      <Database className="w-5 h-5 text-indigo-600 group-hover:scale-110 transition-transform" />
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                      {db.name}
                    </h4>

                    <p className="text-xs text-slate-600 mt-1">
                      {db.highlight}
                    </p>

                    {cascade && isHovered && (
                      <div className="mt-3 pt-2.5 border-t border-purple-100 animate-fade-in">
                        <span className="text-[10px] font-bold uppercase text-purple-600 block mb-1">
                          Database Flow:
                        </span>
                        <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-purple-900">
                          {cascade.map((item, idx) => (
                            <React.Fragment key={item}>
                              <span className="px-2 py-0.5 rounded bg-purple-100 font-semibold">
                                {item}
                              </span>
                              {idx < cascade.length - 1 && (
                                <span className="text-purple-400 font-bold">↓</span>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* 3. Salesforce / SFDC */}
          <div>
            <div className="flex items-center gap-2.5 mb-4 pb-2 border-b border-purple-100">
              <div className="p-1.5 rounded-lg bg-sky-100 text-sky-700">
                <Cloud className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Salesforce / SFDC Architecture
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.salesforce.map((sf) => {
                const cascade = getCascadingTech(sf.name);
                const isHovered = hoveredCard === sf.name;
                return (
                  <div
                    key={sf.name}
                    onMouseEnter={() => setHoveredCard(sf.name)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="relative bg-white/80 backdrop-blur-xl border border-purple-200/80 rounded-2xl p-4 shadow-sm hover:shadow-lg hover:border-purple-400 transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-sky-50 text-sky-700 font-bold border border-sky-200/60">
                        Salesforce
                      </span>
                      <Cloud className="w-4 h-4 text-sky-500 group-hover:scale-110 transition-transform" />
                    </div>

                    <h4 className="text-base font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                      {sf.name}
                    </h4>

                    <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                      {sf.highlight}
                    </p>

                    {cascade && isHovered && (
                      <div className="mt-3 pt-2.5 border-t border-purple-100 animate-fade-in">
                        <span className="text-[10px] font-bold uppercase text-purple-600 block mb-1">
                          Salesforce Cascade:
                        </span>
                        <div className="flex flex-wrap items-center gap-1 text-[11px] font-mono text-purple-900">
                          {cascade.map((item, idx) => (
                            <React.Fragment key={item}>
                              <span className="px-1.5 py-0.5 rounded bg-purple-100 font-semibold">
                                {item}
                              </span>
                              {idx < cascade.length - 1 && (
                                <span className="text-purple-400 font-bold">↓</span>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* 4. Core Computer Science Subjects */}
          <div>
            <div className="flex items-center gap-2.5 mb-4 pb-2 border-b border-purple-100">
              <div className="p-1.5 rounded-lg bg-purple-100 text-purple-700">
                <Cpu className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Core Computer Science Subjects
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {skills.coreSubjects.map((sub) => (
                <div
                  key={sub.name}
                  className="bg-white/80 backdrop-blur-xl border border-purple-200/80 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-purple-300 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 font-semibold border border-purple-200/60">
                      Core CS
                    </span>
                    <Cpu className="w-4 h-4 text-purple-600" />
                  </div>

                  <h4 className="text-sm font-bold text-slate-900">
                    {sub.name}
                  </h4>

                  <p className="text-xs text-slate-600 mt-1">
                    {sub.highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Tools */}
          <div>
            <div className="flex items-center gap-2.5 mb-4 pb-2 border-b border-purple-100">
              <div className="p-1.5 rounded-lg bg-purple-100 text-purple-700">
                <Wrench className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Developer Tools & Environments
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {skills.tools.map((tool) => (
                <div
                  key={tool.name}
                  className="bg-white/80 backdrop-blur-xl border border-purple-200/80 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-purple-300 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 font-semibold border border-purple-200/60">
                        Tool
                      </span>
                      <Wrench className="w-4 h-4 text-purple-600" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900">
                      {tool.name}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1">
                      {tool.highlight}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Soft Skills */}
          <div>
            <div className="flex items-center gap-2.5 mb-4 pb-2 border-b border-purple-100">
              <div className="p-1.5 rounded-lg bg-indigo-100 text-indigo-700">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Professional & Interpersonal Skills
              </h3>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {skills.softSkills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/80 backdrop-blur-md border border-purple-200/80 text-xs font-semibold text-slate-800 shadow-2xs hover:border-purple-400 hover:bg-purple-50/50 transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
