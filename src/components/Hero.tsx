import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { HeroAnimationPlayer } from './HeroAnimationPlayer';
import { ArchitectureVisual } from './ArchitectureVisual';
import {
  ArrowDown,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Code2,
  Cloud,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Terminal,
  CheckCircle2
} from 'lucide-react';

interface HeroProps {
  onOpenLightbox: (image: string, title: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenLightbox }) => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section id="hero" className="relative pt-24 sm:pt-28 pb-16 lg:pb-24 px-4 sm:px-6 overflow-hidden">
      {/* Subtle ambient lavender gradients */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-subtle"></div>
      <div className="absolute top-40 right-10 w-80 h-80 bg-indigo-100/50 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-violet-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Heading, Subheading, Summary, Actions */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50/90 border border-purple-200/80 shadow-xs mb-5 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="text-xs font-semibold text-purple-900 tracking-wide">
                Available for Backend & Software Engineering Roles
              </span>
            </div>

            {/* Main Name Heading */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-2">
              <span className="block text-slate-900">{personal.name}</span>
            </h1>

            {/* Subheading */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-lg sm:text-xl font-bold tracking-widest uppercase bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-800 bg-clip-text text-transparent">
                BACKEND ENGINEER
              </span>
              <span className="text-slate-300">/</span>
              <span className="text-xs sm:text-sm font-medium text-slate-600">
                Software Developer
              </span>
            </div>

            {/* Supporting Text */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4 max-w-xl">
              {personal.summary}
            </p>

            {/* Additional Core Tech Line */}
            <div className="p-3 rounded-xl bg-purple-50/70 border border-purple-100 text-xs sm:text-sm font-semibold text-purple-950 mb-6 flex items-center gap-2 shadow-xs">
              <Terminal className="w-4 h-4 text-purple-600 shrink-0" />
              <span>{personal.tagline}</span>
            </div>

            {/* Hero Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-7">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 shadow-md shadow-purple-500/25 hover:shadow-lg hover:shadow-purple-500/35 transition-all duration-200 active:scale-95 flex items-center gap-2"
              >
                <span>VIEW MY WORK</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-xl font-semibold text-sm text-purple-800 bg-white/90 hover:bg-purple-50/90 border border-purple-200/80 shadow-xs hover:shadow-md transition-all duration-200 active:scale-95 flex items-center gap-2"
              >
                <span>LET'S CONNECT</span>
                <Sparkles className="w-4 h-4 text-purple-600" />
              </a>
            </div>

            {/* Secondary Social Links */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="text-xs font-semibold text-slate-500 mr-1">Profiles:</span>

              <a
                href={personal.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 bg-white/80 hover:bg-purple-50 hover:text-purple-700 border border-purple-100 shadow-2xs transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              <a
                href={personal.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 bg-white/80 hover:bg-purple-50 hover:text-purple-700 border border-purple-100 shadow-2xs transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-slate-800" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              <a
                href={personal.socialLinks.leetcode}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 bg-white/80 hover:bg-purple-50 hover:text-purple-700 border border-purple-100 shadow-2xs transition-colors"
              >
                <Code2 className="w-3.5 h-3.5 text-amber-600" />
                <span>LeetCode (450+)</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              <a
                href={personal.socialLinks.salesforce}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 bg-white/80 hover:bg-purple-50 hover:text-purple-700 border border-purple-100 shadow-2xs transition-colors"
              >
                <Cloud className="w-3.5 h-3.5 text-sky-500" />
                <span>Salesforce Trailhead</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>

            {/* Subtle Contact Information Strip */}
            <div className="pt-4 border-t border-purple-100/90 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-600">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-purple-600" />
                <span>{personal.location}</span>
              </div>
              <span className="text-slate-300">•</span>
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-1.5 hover:text-purple-700 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-purple-600" />
                <span>{personal.email}</span>
              </a>
              <span className="text-slate-300">•</span>
              <a
                href={`tel:${personal.phone}`}
                className="flex items-center gap-1.5 hover:text-purple-700 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-purple-600" />
                <span>{personal.phoneFormatted}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Workstation Studio & Architecture Pipeline */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Real Workstation Live Frame Player */}
            <HeroAnimationPlayer onOpenLightbox={onOpenLightbox} />

            {/* Interactive Architecture Transformation Visual */}
            <div className="bg-white/80 backdrop-blur-xl border border-purple-200/80 rounded-2xl p-4 sm:p-5 shadow-lg">
              <ArchitectureVisual />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
