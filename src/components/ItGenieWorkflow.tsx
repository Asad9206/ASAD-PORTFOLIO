import React, { useState } from 'react';
import {
  FileText,
  Boxes,
  ShieldAlert,
  Flame,
  Workflow,
  Clock,
  FileSpreadsheet,
  LayoutDashboard,
  Info,
  CheckCircle2,
  PieChart,
  BarChart2
} from 'lucide-react';

interface StageNode {
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

export const ItGenieWorkflow: React.FC = () => {
  const [selectedStageId, setSelectedStageId] = useState<string>('dashboard');

  const stages: StageNode[] = [
    {
      id: 'req',
      label: 'SERVICE REQUEST',
      description: 'Incoming user IT support ticket intake capturing user details and asset references.',
      icon: <FileText className="w-4 h-4 text-purple-600" />
    },
    {
      id: 'obj',
      label: 'CUSTOM OBJECT',
      description: 'Structured custom Salesforce object storing ticket lifecycle and configuration fields.',
      icon: <Boxes className="w-4 h-4 text-indigo-600" />
    },
    {
      id: 'val',
      label: 'VALIDATION',
      description: 'Custom validation rules enforcing mandatory asset tags and issue categorization.',
      icon: <ShieldAlert className="w-4 h-4 text-amber-600" />
    },
    {
      id: 'prio',
      label: 'PRIORITY',
      description: 'Automated prioritization matrix calculating urgency based on business impact.',
      icon: <Flame className="w-4 h-4 text-orange-500" />
    },
    {
      id: 'flow',
      label: 'SALESFORCE FLOW',
      description: 'Automated record-triggered flows routing requests to technicians and sending alerts.',
      icon: <Workflow className="w-4 h-4 text-sky-600" />
    },
    {
      id: 'res',
      label: 'RESOLUTION TRACKING',
      description: 'SLA milestone tracking from triage, in-progress diagnostics to resolved state.',
      icon: <Clock className="w-4 h-4 text-purple-700" />
    },
    {
      id: 'rep',
      label: 'REPORTS',
      description: 'Real-time tabular and summary reports aggregating ticket metrics across teams.',
      icon: <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
    },
    {
      id: 'dashboard',
      label: 'DASHBOARD',
      description: 'Executive Salesforce visualization of IT service requests, asset status, and SLA trends.',
      icon: <LayoutDashboard className="w-4 h-4 text-purple-900" />
    }
  ];

  const currentStage = stages.find((s) => s.id === selectedStageId) || stages[7];

  return (
    <div className="mt-6 p-5 rounded-2xl bg-sky-50/50 border border-sky-200/90 shadow-xs">
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-sky-100">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-sky-600 animate-ping"></span>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
            Interactive Salesforce Flow (Click Any Stage)
          </span>
        </div>
        <span className="text-[11px] text-sky-700 font-medium hidden sm:inline">
          IT Service & Asset Automation
        </span>
      </div>

      {/* Sequence Nodes */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-4">
        {stages.map((stage) => {
          const isSelected = selectedStageId === stage.id;
          return (
            <button
              key={stage.id}
              onClick={() => setSelectedStageId(stage.id)}
              className={`flex flex-col items-center justify-center p-2.5 rounded-xl border text-center transition-all duration-200 ${
                isSelected
                  ? 'bg-sky-600 text-white border-sky-700 shadow-md scale-105'
                  : 'bg-white/90 text-slate-800 border-sky-200/80 hover:border-sky-400 hover:bg-white'
              }`}
            >
              <div
                className={`p-1.5 rounded-lg mb-1.5 ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-sky-50 text-sky-700'
                }`}
              >
                {stage.icon}
              </div>
              <span className="text-[10px] font-extrabold tracking-tight line-clamp-1">
                {stage.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Details Box */}
      <div className="p-4 rounded-xl bg-white/95 backdrop-blur-md border border-sky-300/80 shadow-xs flex items-start gap-3 mb-4 animate-fade-in">
        <div className="p-2 rounded-lg bg-sky-100 text-sky-700 shrink-0 mt-0.5">
          <Info className="w-4 h-4" />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-xs font-bold text-sky-900 uppercase tracking-wide">
              {currentStage.label}
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-100 text-sky-700 font-medium">
              Salesforce Platform Layer
            </span>
          </div>
          <p className="text-xs text-slate-700 leading-relaxed font-medium">
            "{currentStage.description}"
          </p>
        </div>
      </div>

      {/* Conceptual Salesforce Dashboard (When clicking DASHBOARD or active) */}
      {selectedStageId === 'dashboard' && (
        <div className="p-4 rounded-xl bg-white/95 border border-sky-200 shadow-xs animate-fade-in">
          <div className="flex items-center justify-between pb-3 border-b border-sky-100 mb-3">
            <div className="flex items-center gap-2">
              <LayoutDashboard className="w-4 h-4 text-sky-600" />
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Salesforce IT Service Dashboard Preview
              </span>
            </div>
            <span className="text-[10px] text-slate-500 font-mono">
              *Demonstrates monitored attributes, no fabricated metrics.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            {/* 1. Request Status */}
            <div className="p-3 rounded-lg bg-sky-50/70 border border-sky-100">
              <span className="text-[10px] font-bold text-sky-800 uppercase block mb-1">
                Request Status
              </span>
              <div className="space-y-1 text-[11px] text-slate-700">
                <div className="flex justify-between">
                  <span>• New Intake</span>
                  <span className="font-semibold text-sky-700">Tracked</span>
                </div>
                <div className="flex justify-between">
                  <span>• In Progress</span>
                  <span className="font-semibold text-purple-700">Active</span>
                </div>
                <div className="flex justify-between">
                  <span>• Resolved</span>
                  <span className="font-semibold text-emerald-700">Verified</span>
                </div>
              </div>
            </div>

            {/* 2. Priority Tracking */}
            <div className="p-3 rounded-lg bg-purple-50/70 border border-purple-100">
              <span className="text-[10px] font-bold text-purple-800 uppercase block mb-1">
                Priority Levels
              </span>
              <div className="space-y-1 text-[11px] text-slate-700">
                <div className="flex justify-between">
                  <span className="text-red-600 font-semibold">• Critical / High</span>
                  <span className="text-slate-500">Flow Escalated</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-amber-600 font-medium">• Medium</span>
                  <span className="text-slate-500">Queue Assigned</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">• Low</span>
                  <span className="text-slate-500">Standard SLA</span>
                </div>
              </div>
            </div>

            {/* 3. Request Type Tracking */}
            <div className="p-3 rounded-lg bg-indigo-50/70 border border-indigo-100">
              <span className="text-[10px] font-bold text-indigo-800 uppercase block mb-1">
                Request Types
              </span>
              <div className="space-y-1 text-[11px] text-slate-700">
                <div className="flex justify-between">
                  <span>• Hardware Provisioning</span>
                  <span className="text-indigo-600 font-mono">Linked Asset</span>
                </div>
                <div className="flex justify-between">
                  <span>• Software License</span>
                  <span className="text-indigo-600 font-mono">Verified</span>
                </div>
                <div className="flex justify-between">
                  <span>• Network & Access</span>
                  <span className="text-indigo-600 font-mono">Permission Set</span>
                </div>
              </div>
            </div>

            {/* 4. IT Support Activity */}
            <div className="p-3 rounded-lg bg-emerald-50/70 border border-emerald-100">
              <span className="text-[10px] font-bold text-emerald-800 uppercase block mb-1">
                Resolution Tracking
              </span>
              <div className="space-y-1 text-[11px] text-slate-700">
                <div className="flex justify-between">
                  <span>• Automated Routing</span>
                  <span className="text-emerald-700 font-semibold">Active</span>
                </div>
                <div className="flex justify-between">
                  <span>• SLA Monitoring</span>
                  <span className="text-emerald-700 font-semibold">Enabled</span>
                </div>
                <div className="flex justify-between">
                  <span>• Support Activity</span>
                  <span className="text-emerald-700 font-semibold">Logged</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
