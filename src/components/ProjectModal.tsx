import React, { useEffect } from 'react';
import { Project } from '../data/portfolioData';
import { X, Github, ExternalLink, CheckCircle2, Layers, Cpu, Database, Server, Terminal, Shield } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full max-h-[90vh] bg-white/95 backdrop-blur-2xl border border-purple-200/90 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-purple-100 bg-purple-50/50">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 font-bold border border-purple-200">
                {project.type}
              </span>
              <span className="text-xs text-slate-500 font-semibold">• Case Study</span>
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-500 hover:text-purple-700 hover:bg-purple-100 transition-colors"
            title="Close modal (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {/* System & Architecture Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-700 mb-2 flex items-center gap-1.5">
              <Server className="w-4 h-4" />
              <span>System Overview</span>
            </h4>
            <div className="p-4 rounded-xl bg-purple-50/60 border border-purple-100 text-slate-700 leading-relaxed font-normal">
              "{project.description}"
            </div>
          </div>

          {/* Technology Stack */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-700 mb-2 flex items-center gap-1.5">
              <Terminal className="w-4 h-4" />
              <span>Technology Stack</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-white border border-purple-200/80 text-xs font-semibold text-slate-800 shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Architectural Features */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-700 mb-2 flex items-center gap-1.5">
              <Shield className="w-4 h-4" />
              <span>Core Features & Capabilities</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-2 p-2.5 rounded-lg bg-white border border-purple-100 shadow-2xs"
                >
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* My Engineering Contribution */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-700 mb-2 flex items-center gap-1.5">
              <Cpu className="w-4 h-4" />
              <span>Engineering Contribution</span>
            </h4>
            <div className="p-4 rounded-xl bg-gradient-to-r from-purple-50/80 to-indigo-50/80 border border-purple-200/90 text-slate-800 leading-relaxed font-medium">
              "{project.contribution}"
            </div>
          </div>

          {/* Architecture Pipeline Nodes */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-700 mb-2 flex items-center gap-1.5">
              <Layers className="w-4 h-4" />
              <span>Workflow & Data Pipeline</span>
            </h4>
            <div className="space-y-2">
              {project.architectureNodes.map((node, idx) => (
                <div
                  key={node.id}
                  className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-purple-100"
                >
                  <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">
                      {node.label}
                    </span>
                    <span className="text-xs text-slate-600">
                      {node.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-purple-100 bg-purple-50/50 flex items-center justify-between">
          <div className="text-xs text-slate-500 font-mono">
            {project.type}
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 shadow-sm transition-all"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            )}

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-white border border-purple-200 hover:bg-purple-100 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
