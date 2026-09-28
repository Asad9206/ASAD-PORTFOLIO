import React, { useState } from 'react';
import { Building2, ArrowRight, ShieldCheck, Key, Server, Cpu, Database, CheckSquare, Info } from 'lucide-react';

interface NodeItem {
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

export const MultiTenantWorkflow: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('header');

  const nodes: NodeItem[] = [
    {
      id: 'org',
      label: 'ORGANIZATION',
      description: 'Multi-tenant client context representing distinct organizational entities.',
      icon: <Building2 className="w-4 h-4 text-purple-600" />
    },
    {
      id: 'req',
      label: 'REQUEST',
      description: 'Incoming client HTTP request with task payload and tenant routing identifiers.',
      icon: <ArrowRight className="w-4 h-4 text-indigo-600" />
    },
    {
      id: 'header',
      label: 'CUSTOM HEADER',
      description: 'Tenant-aware request handling using custom headers and validation mechanisms.',
      icon: <Key className="w-4 h-4 text-amber-600" />
    },
    {
      id: 'val',
      label: 'TENANT VALIDATION',
      description: 'Strict security mechanism preventing cross-tenant access and ensuring isolated tenancy.',
      icon: <ShieldCheck className="w-4 h-4 text-emerald-600" />
    },
    {
      id: 'api',
      label: 'SPRING BOOT API',
      description: 'REST APIs supporting task lifecycle operations (creation, assignment, updates).',
      icon: <Server className="w-4 h-4 text-purple-700" />
    },
    {
      id: 'service',
      label: 'SERVICE LAYER',
      description: 'Transactional business logic executing entity transformations with integrity checks.',
      icon: <Cpu className="w-4 h-4 text-violet-600" />
    },
    {
      id: 'postgres',
      label: 'POSTGRESQL',
      description: 'Database schema and entity relationships supporting consistency and data integrity.',
      icon: <Database className="w-4 h-4 text-blue-600" />
    },
    {
      id: 'task',
      label: 'TASK',
      description: 'End-to-end task object lifecycle successfully stored under isolated tenant boundary.',
      icon: <CheckSquare className="w-4 h-4 text-emerald-700" />
    }
  ];

  const currentNode = nodes.find((n) => n.id === selectedNodeId) || nodes[2];

  return (
    <div className="mt-6 p-5 rounded-2xl bg-purple-50/50 border border-purple-200/90 shadow-xs">
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-purple-100">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-purple-600 animate-ping"></span>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
            Interactive Architecture Workflow (Click Any Node)
          </span>
        </div>
        <span className="text-[11px] text-purple-700 font-medium hidden sm:inline">
          Strict Multi-Tenant Isolation
        </span>
      </div>

      {/* Nodes visual sequence */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-4">
        {nodes.map((node) => {
          const isSelected = selectedNodeId === node.id;
          return (
            <button
              key={node.id}
              onClick={() => setSelectedNodeId(node.id)}
              className={`flex flex-col items-center justify-center p-2.5 rounded-xl border text-center transition-all duration-200 ${
                isSelected
                  ? 'bg-purple-600 text-white border-purple-700 shadow-md scale-105'
                  : 'bg-white/90 text-slate-800 border-purple-200/80 hover:border-purple-400 hover:bg-white'
              }`}
            >
              <div
                className={`p-1.5 rounded-lg mb-1.5 ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-purple-50 text-purple-700'
                }`}
              >
                {node.icon}
              </div>
              <span className="text-[10px] font-extrabold tracking-tight line-clamp-1">
                {node.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Glass Details Panel */}
      <div className="p-4 rounded-xl bg-white/95 backdrop-blur-md border border-purple-300/80 shadow-xs flex items-start gap-3 animate-fade-in">
        <div className="p-2 rounded-lg bg-purple-100 text-purple-700 shrink-0 mt-0.5">
          <Info className="w-4 h-4" />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-xs font-bold text-purple-900 uppercase tracking-wide">
              {currentNode.label}
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 font-medium">
              Architecture Layer
            </span>
          </div>
          <p className="text-xs text-slate-700 leading-relaxed font-medium">
            "{currentNode.description}"
          </p>
        </div>
      </div>
    </div>
  );
};
