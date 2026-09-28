import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, Calendar, Award, Building, Sparkles } from 'lucide-react';

export const Education: React.FC = () => {
  const { education } = PORTFOLIO_DATA;
  const [selectedYear, setSelectedYear] = useState<string>('2027');

  const timelineYears = ['2020', '2021', '2022', '2023', '2027'];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/70 border border-purple-200 text-xs font-bold text-purple-700 uppercase tracking-widest mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            EDUCATION
          </h2>
          <p className="text-slate-600 text-sm mt-3 max-w-lg">
            Academic qualifications spanning undergraduate Computer Science and Engineering and high school schooling with strong academic performance.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-3"></div>
        </div>

        {/* Timeline Progression Bar: 2020 -> 2021 -> 2022 -> 2023 -> 2027 */}
        <div className="mb-12 p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-purple-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
            Chronological Progression:
          </span>
          <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto max-w-full py-1">
            {timelineYears.map((year, idx) => (
              <React.Fragment key={year}>
                <button
                  onClick={() => setSelectedYear(year)}
                  className={`px-3 py-1 rounded-xl text-xs font-mono font-bold transition-all ${
                    selectedYear === year
                      ? 'bg-purple-600 text-white shadow-xs scale-105'
                      : 'bg-purple-50 text-purple-900 hover:bg-purple-100'
                  }`}
                >
                  {year}
                </button>
                {idx < timelineYears.length - 1 && (
                  <span className="text-purple-300 font-bold text-sm">↓</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Education Timeline Cards */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-purple-200 space-y-10">
          {education.map((item, index) => (
            <div key={item.degree} className="relative group">
              {/* Marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-8 h-8 rounded-full bg-white border-2 border-purple-500 shadow-md shadow-purple-500/15 flex items-center justify-center text-purple-700 font-bold text-xs">
                0{index + 1}
              </div>

              {/* Card */}
              <div className="bg-white/85 backdrop-blur-xl border border-purple-200/90 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-lg hover:border-purple-400 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-purple-100">
                  <div>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-purple-100/80 text-purple-800 font-bold border border-purple-200 mb-1.5 inline-block">
                      {item.mode}
                    </span>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                      {item.degree}
                    </h3>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs">
                    <span className="flex items-center gap-1.5 font-bold text-slate-700">
                      <Calendar className="w-3.5 h-3.5 text-purple-600" />
                      {item.period}
                    </span>
                    <span className="text-purple-700 font-bold mt-1 text-sm bg-purple-50 px-2.5 py-0.5 rounded-lg border border-purple-200/70">
                      {item.scoreLabel}: {item.score}
                    </span>
                  </div>
                </div>

                <div className="pt-3 space-y-1.5 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Building className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                    <span className="font-bold text-slate-900">{item.institution}</span>
                  </div>
                  <div className="text-slate-500 pl-5.5">
                    Affiliation: {item.boardOrUniversity}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
