import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  BookOpen,
  FileText,
  Sparkles,
  Maximize2,
  CheckCircle2,
  Bot,
  Layers,
  ShieldCheck,
  Brain,
  Award
} from 'lucide-react';

interface ResearchProps {
  onOpenLightbox: (image: string, title: string) => void;
}

export const Research: React.FC<ResearchProps> = ({ onOpenLightbox }) => {
  const { research } = PORTFOLIO_DATA;
  const [activePipelineStep, setActivePipelineStep] = useState<number>(2);

  return (
    <section id="research" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/70 border border-purple-200 text-xs font-bold text-purple-700 uppercase tracking-widest mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Scholarly Publications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            RESEARCH & INNOVATION
          </h2>
          <p className="text-slate-600 text-sm mt-3 max-w-xl">
            Published co-authored research paper on improving large language model faithfulness and hallucination mitigation strategies presented at RAICCIT 2025.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-3"></div>
        </div>

        {/* Paper Feature Showcase Card */}
        <div className="bg-white/85 backdrop-blur-xl border border-purple-200/90 rounded-3xl p-6 sm:p-9 shadow-sm hover:shadow-xl transition-all duration-300 mb-12">
          {/* Header Metadata */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-purple-100">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-mono px-3 py-0.5 rounded-full bg-purple-100 text-purple-800 font-bold border border-purple-200">
                  National Conference Paper
                </span>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                  ISBN: {research.isbn}
                </span>
                <span className="text-xs text-purple-700 font-semibold">
                  {research.date}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
                {research.title}
              </h3>

              <div className="text-xs sm:text-sm font-semibold text-purple-900 mt-2">
                {research.event}
              </div>
            </div>

            <div className="flex flex-col sm:items-end text-xs space-y-1">
              <span className="px-3 py-1 rounded-xl bg-purple-600 text-white font-bold uppercase tracking-wider self-start sm:self-auto">
                Role: {research.role}
              </span>
              <span className="text-slate-500 font-medium">
                {research.institution}
              </span>
            </div>
          </div>

          {/* Authors & Abstract Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-6">
            <div className="lg:col-span-8 space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Core Research Objective
                </h4>
                <p className="text-sm text-slate-800 font-normal leading-relaxed bg-purple-50/50 p-4 rounded-xl border border-purple-100">
                  "{research.description}"
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Scope & Methods Investigated
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal bg-white p-4 rounded-xl border border-purple-100">
                  {research.abstractSummary}
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-4">
              <div className="p-4 rounded-2xl bg-white border border-purple-200/90 shadow-2xs">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                  Paper Authors
                </span>
                <div className="space-y-1.5 text-xs text-slate-800">
                  {research.authors.map((author, idx) => (
                    <div
                      key={author}
                      className={`flex items-center gap-2 p-1.5 rounded-lg ${
                        author.includes('Md Asad Anwer')
                          ? 'bg-purple-100/80 font-bold text-purple-950'
                          : 'text-slate-700'
                      }`}
                    >
                      <span className="font-mono text-[10px] text-purple-600">
                        0{idx + 1}.
                      </span>
                      <span>{author}</span>
                      {author.includes('Md Asad Anwer') && (
                        <span className="text-[10px] ml-auto px-1.5 py-0.2 rounded bg-purple-600 text-white font-semibold">
                          You
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Research Visualization Pipeline: LLM -> GENERATED OUTPUT -> EVALUATION -> RELIABILITY -> IMPROVED OUTPUT */}
          <div className="my-6 p-4 rounded-2xl bg-gradient-to-r from-purple-50/80 via-indigo-50/80 to-purple-50/80 border border-purple-200">
            <span className="text-xs font-bold text-purple-900 uppercase tracking-wider block mb-3">
              Research Pipeline Flow:
            </span>
            <div className="flex flex-wrap items-center justify-between gap-2">
              {research.flow.map((step, idx) => {
                const isCurrent = activePipelineStep === idx;
                return (
                  <React.Fragment key={step}>
                    <button
                      onClick={() => setActivePipelineStep(idx)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                        isCurrent
                          ? 'bg-purple-700 text-white shadow-md shadow-purple-500/20 scale-105'
                          : 'bg-white text-slate-700 border border-purple-200 hover:border-purple-400 hover:text-purple-700'
                      }`}
                    >
                      {step}
                    </button>
                    {idx < research.flow.length - 1 && (
                      <span className="text-purple-400 font-bold text-sm">→</span>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Authentic Conference & Paper Photographs */}
          <div>
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-3">
              Conference Proceedings & Verification Gallery (Click Any To Enlarge)
            </span>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {research.images.map((img) => (
                <div
                  key={img.path}
                  onClick={() => onOpenLightbox(img.path, `${research.title} — ${img.title}`)}
                  className="group relative bg-white rounded-2xl border border-purple-200/90 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="aspect-[4/3] bg-slate-900/5 relative overflow-hidden flex items-center justify-center p-2">
                    <img
                      src={img.path}
                      alt={img.title}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-purple-950/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      <span className="px-3 py-1.5 rounded-xl bg-white/95 text-xs font-bold text-purple-900 shadow-md flex items-center gap-1.5">
                        <Maximize2 className="w-3.5 h-3.5 text-purple-700" />
                        <span>Enlarge Asset</span>
                      </span>
                    </div>
                  </div>

                  <div className="p-3 bg-white border-t border-purple-100">
                    <span className="text-xs font-bold text-slate-800 line-clamp-1">
                      {img.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
