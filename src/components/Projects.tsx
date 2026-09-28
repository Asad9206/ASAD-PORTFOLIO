import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { MultiTenantWorkflow } from './MultiTenantWorkflow';
import { ItGenieWorkflow } from './ItGenieWorkflow';
import { ProjectModal } from './ProjectModal';
import {
  FolderGit2,
  Github,
  ExternalLink,
  Layers,
  Sparkles,
  Server,
  Cloud,
  CheckCircle2,
  ArrowRight,
  Shield,
  Workflow
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);
  const { projects } = PORTFOLIO_DATA;

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/70 border border-purple-200 text-xs font-bold text-purple-700 uppercase tracking-widest mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Engineering Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            SELECTED PROJECTS
          </h2>
          <p className="text-slate-600 text-sm mt-3 max-w-xl">
            In-depth architectural solutions featuring enterprise multi-tenancy in Java & Spring Boot and automated service operations on the Salesforce platform.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-3"></div>
        </div>

        {/* Project Cards */}
        <div className="space-y-16">
          {projects.map((project, index) => {
            const isMultiTenant = project.id === 'multi-tenant-task-management';
            return (
              <div
                key={project.id}
                className="bg-white/85 backdrop-blur-xl border border-purple-200/90 rounded-3xl p-6 sm:p-9 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Project Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-purple-100">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-100/80 text-purple-800 font-bold border border-purple-200">
                        0{index + 1} • {project.type}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {project.subtitle}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      {project.title}
                    </h3>
                  </div>

                  {/* Actions: GitHub & Explore Project */}
                  <div className="flex flex-wrap items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-800 bg-white border border-purple-200/90 hover:bg-purple-50 hover:text-purple-700 shadow-2xs transition-all"
                      >
                        <Github className="w-4 h-4 text-slate-800" />
                        <span>Source Code</span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                      </a>
                    )}

                    <button
                      onClick={() => setSelectedCaseStudy(project)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-md shadow-purple-500/20 transition-all active:scale-95"
                    >
                      <span>EXPLORE PROJECT</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Main Content Grid: Description & Highlights */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-6">
                  {/* Left Column: Description & Contribution */}
                  <div className="lg:col-span-7 space-y-4">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                        System Architecture Description
                      </h4>
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal bg-purple-50/50 p-4 rounded-xl border border-purple-100">
                        "{project.description}"
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-purple-700 mb-1.5 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>My Engineering Contribution</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal bg-white p-4 rounded-xl border border-purple-200/80 shadow-2xs">
                        "{project.contribution}"
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Technologies & Architectural Features */}
                  <div className="lg:col-span-5 space-y-4">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                        Technologies Deployed
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-lg bg-white border border-purple-200 text-xs font-semibold text-purple-900 shadow-2xs"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                        Core Functional Highlights
                      </h4>
                      <div className="space-y-1.5">
                        {project.features.slice(0, 4).map((f) => (
                          <div
                            key={f}
                            className="flex items-center gap-2 text-xs text-slate-700"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interactive Workflow Embed (Section 13 & 15) */}
                {isMultiTenant ? <MultiTenantWorkflow /> : <ItGenieWorkflow />}
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </section>
  );
};
