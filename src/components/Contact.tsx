import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Code2,
  Cloud,
  FolderGit2,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

export const Contact: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const professionalLinks = [
    {
      name: 'LinkedIn Profile',
      url: personal.socialLinks.linkedin,
      handle: 'in/md-asad-anwer-19a703318',
      desc: 'Connect for career, internship, and engineering opportunities',
      icon: <Linkedin className="w-5 h-5 text-[#0A66C2]" />,
      bg: 'hover:border-[#0A66C2]/50'
    },
    {
      name: 'GitHub Profile',
      url: personal.socialLinks.github,
      handle: 'github.com/Asad9206',
      desc: 'Explore open-source repositories and backend codebase',
      icon: <Github className="w-5 h-5 text-slate-900" />,
      bg: 'hover:border-slate-400'
    },
    {
      name: 'LeetCode Profile',
      url: personal.socialLinks.leetcode,
      handle: 'leetcode.com/u/mdasadanwer',
      desc: '450+ solved algorithmic problems with 300+ day streak',
      icon: <Code2 className="w-5 h-5 text-amber-600" />,
      bg: 'hover:border-amber-400'
    },
    {
      name: 'Salesforce Trailhead',
      url: personal.socialLinks.salesforce,
      handle: 'trailblazer.salesforce.com/mnrf94aufyws59yqjq',
      desc: 'Expeditioner rank with 68 badges and 1 superbadge',
      icon: <Cloud className="w-5 h-5 text-sky-500" />,
      bg: 'hover:border-sky-400'
    },
    {
      name: 'Multi-Tenant System Repo',
      url: personal.socialLinks.projectGithub,
      handle: 'Asad9206/Multi-Tenant-Task-Management-System',
      desc: 'Core Spring Boot multi-tenant backend architecture repo',
      icon: <FolderGit2 className="w-5 h-5 text-purple-700" />,
      bg: 'hover:border-purple-400'
    }
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA Card */}
        <div className="bg-gradient-to-br from-white via-purple-50/40 to-indigo-50/30 backdrop-blur-2xl border border-purple-200/90 rounded-3xl p-8 sm:p-12 shadow-xl mb-16 text-center relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-purple-200/50 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-indigo-200/40 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs font-bold uppercase tracking-widest mb-4">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
              LET'S CONNECT
            </h2>

            <p className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed">
              Have an opportunity, project, or technical conversation in mind? Let's connect.
            </p>

            {/* Direct Action Buttons: EMAIL ME, CALL ME, LINKEDIN, GITHUB */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
              <a
                href={`mailto:${personal.email}`}
                className="px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 shadow-md shadow-purple-500/25 transition-all active:scale-95 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>EMAIL ME</span>
              </a>

              <a
                href={`tel:${personal.phone}`}
                className="px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-slate-800 bg-white hover:bg-purple-50 border border-purple-200/90 shadow-2xs transition-all active:scale-95 flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-purple-600" />
                <span>CALL ME</span>
              </a>

              <a
                href={personal.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#0A66C2] hover:bg-[#084e96] shadow-sm transition-all active:scale-95 flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4" />
                <span>LINKEDIN</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={personal.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-slate-900 hover:bg-slate-800 shadow-sm transition-all active:scale-95 flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>GITHUB</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Direct Contact Info Strip with Copy Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-purple-100 text-left">
              {/* Email */}
              <div className="p-3.5 rounded-xl bg-white/90 border border-purple-100 shadow-2xs flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-xs font-semibold text-slate-800 hover:text-purple-700 transition-colors line-clamp-1"
                  >
                    {personal.email}
                  </a>
                </div>
                <button
                  onClick={() => handleCopy(personal.email, 'email')}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-purple-700 hover:bg-purple-50 transition-colors"
                  title="Copy email"
                >
                  {copiedType === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="p-3.5 rounded-xl bg-white/90 border border-purple-100 shadow-2xs flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">
                    Direct Phone
                  </span>
                  <a
                    href={`tel:${personal.phone}`}
                    className="text-xs font-semibold text-slate-800 hover:text-purple-700 transition-colors"
                  >
                    {personal.phoneFormatted}
                  </a>
                </div>
                <button
                  onClick={() => handleCopy(personal.phone, 'phone')}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-purple-700 hover:bg-purple-50 transition-colors"
                  title="Copy phone"
                >
                  {copiedType === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="p-3.5 rounded-xl bg-white/90 border border-purple-100 shadow-2xs flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-50 text-purple-700 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">
                    Location
                  </span>
                  <span className="text-xs font-semibold text-slate-800">
                    {personal.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 25: Professional Links Showcase */}
        <div>
          <div className="flex flex-col items-center text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              CONNECT WITH ME — VERIFIED PLATFORMS
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Direct access to all verified engineering profiles and repositories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {professionalLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className={`group p-5 rounded-2xl bg-white/80 backdrop-blur-xl border border-purple-200/80 shadow-2xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between ${link.bg}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-purple-100 group-hover:scale-105 transition-transform">
                      {link.icon}
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-purple-700 transition-colors" />
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                    {link.name}
                  </h4>

                  <span className="font-mono text-[11px] text-purple-600 block mt-0.5 break-all">
                    {link.handle}
                  </span>

                  <p className="text-xs text-slate-600 mt-2 font-normal">
                    {link.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-purple-50 text-[11px] font-semibold text-purple-700 flex items-center justify-between">
                  <span>Visit Profile</span>
                  <ExternalLink className="w-3 h-3 text-purple-400" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
