import React, { useState } from 'react';
import { PORTFOLIO_DATA, ExperienceItem } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, Sparkles, CheckCircle2, ArrowDown, Bot, Layers } from 'lucide-react';

export const Experience: React.FC = () => {
  const [activeStep, setActiveStep] = useState<{ [key: string]: number }>({
    'exp-1': 0,
    'exp-2': 0
  });

  const { experiences } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/70 border border-purple-200 text-xs font-bold text-purple-700 uppercase tracking-widest mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Career</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            EXPERIENCE
          </h2>
          <p className="text-slate-600 text-sm mt-3 max-w-lg">
            Hands-on professional experience in AI model evaluation, data annotation workflows, and prompt engineering quality assurance.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-3"></div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-purple-200 space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative group">
              {/* Timeline marker icon */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-8 h-8 rounded-full bg-white border-2 border-purple-500 shadow-md shadow-purple-500/15 flex items-center justify-center text-purple-700 font-bold text-xs">
                0{index + 1}
              </div>

              {/* Main Experience Card */}
              <div className="bg-white/85 backdrop-blur-xl border border-purple-200/90 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-lg hover:border-purple-400 transition-all duration-300">
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-purple-100">
                  <div>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-purple-100/80 text-purple-800 font-bold border border-purple-200 mb-2 inline-block">
                      {exp.type}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-purple-700 mt-0.5 flex flex-wrap items-center gap-1.5">
                      <span>{exp.company}</span>
                      {exp.partnership && (
                        <span className="text-xs text-slate-500 font-normal">
                          ({exp.partnership})
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs text-slate-500 space-y-1">
                    <span className="flex items-center gap-1.5 font-medium text-slate-700">
                      <Calendar className="w-3.5 h-3.5 text-purple-600" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div className="py-4 text-sm text-slate-700 leading-relaxed font-normal">
                  <p className="bg-purple-50/50 p-3.5 rounded-xl border border-purple-100/80">
                    "{exp.description}"
                  </p>
                </div>

                {/* Visual AI Workflow Simulation */}
                <div className="pt-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-3">
                    {exp.id === 'exp-1' ? 'AI Evaluation Pipeline:' : 'Annotation & Model Training Pipeline:'}
                  </span>

                  <div className="flex flex-wrap items-center gap-2 p-3 bg-purple-50/60 rounded-xl border border-purple-100/80">
                    {exp.workflowSteps.map((step, sIdx) => {
                      const isCurrent = activeStep[exp.id] === sIdx;
                      return (
                        <React.Fragment key={step}>
                          <button
                            onClick={() =>
                              setActiveStep((prev) => ({ ...prev, [exp.id]: sIdx }))
                            }
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                              isCurrent
                                ? 'bg-purple-600 text-white shadow-sm'
                                : 'bg-white text-slate-700 border border-purple-200 hover:border-purple-400 hover:text-purple-700'
                            }`}
                          >
                            {step}
                          </button>
                          {sIdx < exp.workflowSteps.length - 1 && (
                            <span className="text-purple-400 font-bold text-xs">→</span>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>

                  <p className="text-[11px] text-slate-500 mt-2 px-1">
                    Interactive workflow tracking pipeline execution stages.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
