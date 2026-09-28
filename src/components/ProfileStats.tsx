import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, Award, Code2, Flame, Cloud, Zap } from 'lucide-react';

export const ProfileStats: React.FC = () => {
  const icons = [
    <GraduationCap className="w-5 h-5 text-purple-600" />,
    <Award className="w-5 h-5 text-indigo-600" />,
    <Code2 className="w-5 h-5 text-amber-600" />,
    <Flame className="w-5 h-5 text-orange-500" />,
    <Cloud className="w-5 h-5 text-sky-500" />,
    <Zap className="w-5 h-5 text-emerald-600" />
  ];

  return (
    <section className="relative -mt-6 sm:-mt-8 z-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {PORTFOLIO_DATA.stats.map((item, index) => (
            <div
              key={item.label}
              className="group relative bg-white/80 backdrop-blur-xl border border-purple-200/80 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-purple-400 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 rounded-xl bg-purple-50 group-hover:bg-purple-100 transition-colors">
                  {icons[index % icons.length]}
                </div>
                <span className="text-[10px] font-mono text-slate-400">0{index + 1}</span>
              </div>

              <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight group-hover:text-purple-700 transition-colors">
                {item.value}
              </div>

              <div className="text-xs font-bold text-slate-700 mt-0.5">
                {item.label}
              </div>

              <div className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                {item.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
