import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  Trophy,
  Award,
  Flame,
  Code2,
  Cloud,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Maximize2,
  PartyPopper,
  BookOpen,
  Medal
} from 'lucide-react';

interface AchievementsProps {
  onOpenLightbox: (image: string, title: string) => void;
}

export const Achievements: React.FC<AchievementsProps> = ({ onOpenLightbox }) => {
  const { leetcode, salesforce, gfg, mentorship } = PORTFOLIO_DATA.achievements;
  const [celebratingGfg, setCelebratingGfg] = useState(false);

  const handleCelebrate = () => {
    setCelebratingGfg(true);
    setTimeout(() => setCelebratingGfg(false), 2500);
  };

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/70 border border-purple-200 text-xs font-bold text-purple-700 uppercase tracking-widest mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Excellence & Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            MY ACHIEVEMENTS
          </h2>
          <p className="text-slate-600 text-sm mt-3 max-w-xl">
            Verified competitive programming milestones, Salesforce Trailhead credentials, hackathons/scripter awards, and community science mentorship.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-3"></div>
        </div>

        {/* 1. Large LeetCode Showcase */}
        <div className="bg-white/85 backdrop-blur-xl border border-purple-200/90 rounded-3xl p-6 sm:p-9 shadow-sm hover:shadow-xl transition-all duration-300 mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-purple-100">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shadow-xs">
                <Code2 className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-amber-100/80 text-amber-900 font-bold border border-amber-200">
                    Competitive Programming
                  </span>
                  <span className="text-xs text-slate-500 font-medium">Data Structures & Algorithms</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  LeetCode Problem Solving Mastery
                </h3>
              </div>
            </div>

            <a
              href={leetcode.profileUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 shadow-md transition-all self-start lg:self-center"
            >
              <span>VIEW LEETCODE PROFILE</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80">
              <span className="text-xs font-bold text-amber-800 uppercase block mb-1">
                DSA Problems Solved
              </span>
              <span className="text-2xl sm:text-3xl font-black text-slate-900">
                {leetcode.problemsSolved}
              </span>
              <span className="text-[11px] text-slate-600 block mt-1">
                Easy, Medium & Hard verified
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-200/80">
              <span className="text-xs font-bold text-orange-800 uppercase block mb-1">
                Current Streak
              </span>
              <span className="text-2xl sm:text-3xl font-black text-orange-600 flex items-center gap-1">
                <Flame className="w-6 h-6 text-orange-500 animate-bounce" />
                {leetcode.currentStreak} Days
              </span>
              <span className="text-[11px] text-slate-600 block mt-1">
                Continuous daily problem solving
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-200/80">
              <span className="text-xs font-bold text-purple-800 uppercase block mb-1">
                Annual Submissions
              </span>
              <span className="text-2xl sm:text-3xl font-black text-purple-900">
                {leetcode.submissionsYear}
              </span>
              <span className="text-[11px] text-slate-600 block mt-1">
                In past 12-month window
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-200/80">
              <span className="text-xs font-bold text-indigo-800 uppercase block mb-1">
                Earned Badges
              </span>
              <span className="text-2xl sm:text-3xl font-black text-indigo-900">
                {leetcode.badgesCount}
              </span>
              <span className="text-[11px] text-slate-600 block mt-1">
                200-Day, 100-Day & Monthly Medals
              </span>
            </div>
          </div>

          {/* Coding Workflow Pipeline */}
          <div className="mb-6 p-4 rounded-2xl bg-slate-50 border border-purple-100 flex flex-wrap items-center justify-between gap-3 text-xs">
            <span className="font-bold text-slate-700 uppercase tracking-wide">
              Algorithmic Problem-Solving Lifecycle:
            </span>
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {leetcode.flow.map((step, idx) => (
                <React.Fragment key={step}>
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-purple-200 font-mono font-bold text-purple-900 shadow-2xs">
                    {step}
                  </span>
                  {idx < leetcode.flow.length - 1 && (
                    <span className="text-purple-400 font-bold">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Authentic LeetCode Screenshots Display in Glass Browser Windows */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leetcode.screenshots.map((screen, idx) => (
              <div
                key={screen.path}
                className="group relative bg-white/95 rounded-2xl border border-purple-200/90 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Browser top chrome */}
                <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-purple-100 bg-purple-50/60 text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80"></span>
                    <span className="font-mono text-[11px] text-slate-500 ml-2">
                      leetcode.com/u/mdasadanwer
                    </span>
                  </div>
                  <button
                    onClick={() => onOpenLightbox(screen.path, screen.title)}
                    className="p-1 rounded-lg text-slate-400 hover:text-purple-700 hover:bg-white transition-colors"
                    title="Enlarge screenshot"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Screenshot viewport */}
                <div
                  className="p-2 bg-slate-900/5 cursor-pointer relative overflow-hidden"
                  onClick={() => onOpenLightbox(screen.path, screen.title)}
                >
                  <img
                    src={screen.path}
                    alt={screen.title}
                    className="w-full h-auto rounded-lg object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-purple-900/0 group-hover:bg-purple-900/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md text-xs font-bold text-purple-900 shadow-md">
                      Click to Enlarge
                    </span>
                  </div>
                </div>

                <div className="p-3 text-xs font-semibold text-slate-700 border-t border-purple-50">
                  {screen.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Salesforce Trailhead Showcase */}
        <div className="bg-white/85 backdrop-blur-xl border border-purple-200/90 rounded-3xl p-6 sm:p-9 shadow-sm hover:shadow-xl transition-all duration-300 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Details */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-500 shadow-xs">
                  <Cloud className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 font-bold border border-sky-200">
                    Salesforce Trailhead
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                    {salesforce.rank} Rank
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed font-normal bg-sky-50/50 p-4 rounded-xl border border-sky-100">
                "{salesforce.description}"
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-xl bg-white border border-sky-200 shadow-2xs">
                  <span className="text-[10px] font-bold uppercase text-slate-500 block">Badges</span>
                  <span className="text-xl font-black text-sky-700">{salesforce.badges}</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-sky-200 shadow-2xs">
                  <span className="text-[10px] font-bold uppercase text-slate-500 block">Superbadge</span>
                  <span className="text-xl font-black text-purple-700">{salesforce.superbadges}</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-sky-200 shadow-2xs">
                  <span className="text-[10px] font-bold uppercase text-slate-500 block">Total Points</span>
                  <span className="text-xl font-black text-slate-900">{salesforce.points}</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-sky-200 shadow-2xs">
                  <span className="text-[10px] font-bold uppercase text-slate-500 block">Completed Trails</span>
                  <span className="text-xl font-black text-emerald-700">{salesforce.trails}</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={salesforce.profileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 shadow-md shadow-sky-500/20 transition-all"
                >
                  <span>VIEW SALESFORCE TRAILHEAD</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Authentic Dashboard Screenshot in Premium Glass Frame */}
            <div className="lg:col-span-6 flex justify-center">
              <div
                className="group relative max-w-md w-full bg-white rounded-2xl border border-sky-200 shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
                onClick={() =>
                  onOpenLightbox(salesforce.screenshot, 'Salesforce Trailhead Expeditioner Dashboard')
                }
              >
                <div className="flex items-center justify-between px-3.5 py-2 border-b border-sky-100 bg-sky-50/70 text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                    <span className="font-mono text-[11px] text-slate-500 ml-2">
                      trailblazer.salesforce.com
                    </span>
                  </div>
                  <Maximize2 className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-600" />
                </div>

                <div className="p-3 bg-slate-50 flex items-center justify-center">
                  <img
                    src={salesforce.screenshot}
                    alt="Salesforce Badges and Points"
                    className="max-h-72 w-auto object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-3 text-xs font-semibold text-slate-700 bg-white border-t border-sky-50 flex justify-between items-center">
                  <span>Trailhead Expeditioner Credential</span>
                  <span className="text-sky-600 text-[11px]">Click to Enlarge</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. GeeksforGeeks Scripter & Mentorship Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* GFG Scripter Award */}
          <div className="lg:col-span-5 bg-gradient-to-br from-white via-emerald-50/30 to-purple-50/40 backdrop-blur-xl border border-emerald-200/90 rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold border border-emerald-200">
                  National Writing & Code Competition
                </span>
                <Trophy className="w-6 h-6 text-emerald-600" />
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
                {gfg.title}
              </h3>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-emerald-600 text-white text-xs font-bold mb-4 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Winner: {gfg.award}</span>
              </div>

              <div className="p-4 rounded-xl bg-white/90 border border-emerald-100 shadow-2xs mb-4">
                <span className="text-xs font-bold text-emerald-800 uppercase block mb-1">
                  Recognition & Prizes:
                </span>
                <p className="text-sm font-semibold text-slate-800">
                  {gfg.recognition}
                </p>
                <p className="text-xs text-slate-600 mt-2 font-normal">
                  {gfg.description}
                </p>
              </div>
            </div>

            <div>
              <button
                onClick={handleCelebrate}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white border border-emerald-300 text-emerald-700 hover:bg-emerald-50 font-bold text-xs shadow-2xs transition-all active:scale-95"
              >
                <PartyPopper className={`w-4 h-4 text-emerald-600 ${celebratingGfg ? 'animate-bounce' : ''}`} />
                <span>{celebratingGfg ? '🎉 Congratulations Md Asad Anwer!' : 'Click to Celebrate Winner'}</span>
              </button>
            </div>
          </div>

          {/* Academic & Community Science Mentorship */}
          <div className="lg:col-span-7 bg-white/85 backdrop-blur-xl border border-purple-200/90 rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between pb-3 border-b border-purple-100 mb-4">
              <div className="flex items-center gap-2">
                <Medal className="w-5 h-5 text-purple-600" />
                <h3 className="text-lg font-bold text-slate-900">
                  Community Mentorship & Honors
                </h3>
              </div>
              <span className="text-xs text-purple-700 font-semibold">
                Verified Credentials
              </span>
            </div>

            <div className="space-y-4">
              {mentorship.map((m) => (
                <div
                  key={m.title}
                  className="p-4 rounded-xl bg-purple-50/50 border border-purple-100 space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-sm font-bold text-slate-900">
                      {m.title}
                    </span>
                    <span className="text-xs font-mono text-purple-700 font-semibold">
                      {m.date}
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-purple-900 block">
                    {m.institution}
                  </span>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    "{m.citation}"
                  </p>

                  {/* Thumbnail previews of actual certificates */}
                  <div className="flex flex-wrap gap-3 pt-1">
                    {m.images.map((img) => (
                      <div
                        key={img.path}
                        onClick={() => onOpenLightbox(img.path, `${m.title} — ${img.title}`)}
                        className="group/img relative w-24 h-16 rounded-lg overflow-hidden border border-purple-200 bg-slate-100 cursor-pointer shadow-2xs hover:border-purple-400 transition-all"
                      >
                        <img
                          src={img.path}
                          alt={img.title}
                          className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-purple-900/20 opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-opacity">
                          <Maximize2 className="w-3.5 h-3.5 text-white" />
                        </div>
                      </div>
                    ))}
                    <span className="text-[11px] text-slate-500 self-center">
                      Click thumbnail to view certificate
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
