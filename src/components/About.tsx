import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Code2, Layers, Cpu, Database, LayoutGrid, CheckCircle2, Sparkles, Terminal, ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const workflowSteps = [
    {
      id: 'code',
      title: 'CODE',
      role: 'Clean Architecture',
      desc: 'Robust Java OOP principles, maintainable structures, and algorithmic efficiency.',
      icon: <Code2 className="w-5 h-5 text-purple-600" />
    },
    {
      id: 'api',
      title: 'API',
      role: 'RESTful Contracts',
      desc: 'Standardized request-response payloads, status codes, and custom header validation.',
      icon: <Layers className="w-5 h-5 text-indigo-600" />
    },
    {
      id: 'business',
      title: 'BUSINESS LOGIC',
      role: 'Service Orchestration',
      desc: 'Spring Boot dependency injection, transaction atomicity, and multi-tenant rules.',
      icon: <Cpu className="w-5 h-5 text-violet-600" />
    },
    {
      id: 'database',
      title: 'DATABASE',
      role: 'Relational Consistency',
      desc: 'PostgreSQL & MySQL schemas with strict isolation, indexing, and referential integrity.',
      icon: <Database className="w-5 h-5 text-purple-700" />
    },
    {
      id: 'application',
      title: 'APPLICATION',
      role: 'Production Delivery',
      desc: 'End-to-end full-stack integration with responsive web clients and automated flows.',
      icon: <LayoutGrid className="w-5 h-5 text-emerald-600" />
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/70 border border-purple-200 text-xs font-bold text-purple-700 uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            ABOUT ME
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-3"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Summary and Core Pillars */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div className="bg-white/80 backdrop-blur-xl border border-purple-200/80 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2.5">
                <Terminal className="w-5 h-5 text-purple-600" />
                <span>Backend Engineering Philosophy</span>
              </h3>

              <p className="text-slate-700 text-base leading-relaxed mb-6 font-normal">
                {PORTFOLIO_DATA.personal.summary}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-purple-100">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-purple-50/60 border border-purple-100/70">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">Strict Isolation</span>
                    <span className="text-[11px] text-slate-600">Multi-tenant backend data segregation</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-purple-50/60 border border-purple-100/70">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">DSA Foundations</span>
                    <span className="text-[11px] text-slate-600">450+ solved with 300+ day streak</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-purple-50/60 border border-purple-100/70">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">Enterprise Salesforce</span>
                    <span className="text-[11px] text-slate-600">Admin, Flows, Apex & SOQL mastery</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-purple-50/60 border border-purple-100/70">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">AI Evaluation</span>
                    <span className="text-[11px] text-slate-600">Model quality & published LLM research</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Software Architecture Assembly */}
          <div className="lg:col-span-6">
            <div className="bg-white/80 backdrop-blur-xl border border-purple-200/80 rounded-2xl p-6 sm:p-7 shadow-sm">
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-purple-100">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-600 animate-pulse"></span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    Software Architecture Flow
                  </span>
                </div>
                <span className="text-[11px] text-purple-700 font-medium">
                  Interactive Assembly
                </span>
              </div>

              {/* Pipeline Nodes */}
              <div className="space-y-3 relative">
                {workflowSteps.map((step, idx) => {
                  const isActive = activeStep === idx;
                  return (
                    <div
                      key={step.id}
                      onClick={() => setActiveStep(idx)}
                      className={`relative flex items-center justify-between p-3.5 rounded-xl border transition-all duration-300 cursor-pointer ${
                        isActive
                          ? 'bg-purple-50/90 border-purple-500 shadow-sm translate-x-1'
                          : 'bg-white/90 border-purple-100 hover:border-purple-300 hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-purple-100/70 border border-purple-200 flex items-center justify-center shrink-0">
                          {step.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-black text-slate-900 tracking-wider">
                              {step.title}
                            </span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 font-semibold">
                              {step.role}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-600 mt-0.5 line-clamp-1">
                            {step.desc}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-purple-500">
                          0{idx + 1}
                        </span>
                        <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'text-purple-600 translate-x-0.5' : 'text-slate-300'}`} />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Active Node Detail Card */}
              <div className="mt-5 p-4 rounded-xl bg-gradient-to-r from-purple-50 via-indigo-50/50 to-white border border-purple-200/90">
                <div className="text-xs font-bold text-purple-900 uppercase tracking-wider mb-1">
                  Active Focus: {workflowSteps[activeStep].title} — {workflowSteps[activeStep].role}
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {workflowSteps[activeStep].desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
