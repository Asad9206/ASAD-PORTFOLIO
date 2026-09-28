import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Linkedin, Github, Code2, Cloud, ArrowUp, Sparkles, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Education', href: '#education' },
    { label: 'Research', href: '#research' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white/90 border-t border-purple-200/80 pt-16 pb-12 px-4 sm:px-6 overflow-hidden">
      {/* Tiny elegant lavender animated line as specified */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse-subtle"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-purple-100">
          {/* Brand & Subtitle */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                AA
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 tracking-tight">
                  {personal.name}
                </h3>
                <span className="text-xs uppercase tracking-wider text-purple-700 font-bold block">
                  Backend Engineer / Software Developer
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 max-w-sm leading-relaxed">
              Crafting robust backend microservices, resilient multi-tenant architectures, and automated cloud workflows with Java, Spring Boot, SQL & Salesforce.
            </p>

            <div className="text-xs text-slate-500 font-mono">
              📍 {personal.location}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-3">
              Quick Links
            </span>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-medium text-slate-600">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-purple-700 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-3">
                Verified Profiles
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={personal.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-purple-50 text-slate-700 hover:text-purple-700 hover:bg-purple-100 border border-purple-200 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                </a>

                <a
                  href={personal.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-purple-50 text-slate-700 hover:text-purple-700 hover:bg-purple-100 border border-purple-200 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4 text-slate-800" />
                </a>

                <a
                  href={personal.socialLinks.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-purple-50 text-slate-700 hover:text-purple-700 hover:bg-purple-100 border border-purple-200 transition-colors"
                  aria-label="LeetCode Profile"
                >
                  <Code2 className="w-4 h-4 text-amber-600" />
                </a>

                <a
                  href={personal.socialLinks.salesforce}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-purple-50 text-slate-700 hover:text-purple-700 hover:bg-purple-100 border border-purple-200 transition-colors"
                  aria-label="Salesforce Trailhead Profile"
                >
                  <Cloud className="w-4 h-4 text-sky-500" />
                </a>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-purple-50 border border-purple-200 text-xs font-semibold text-purple-700 hover:bg-purple-100 transition-all shadow-2xs"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <div>
            © 2026 Md Asad Anwer. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-purple-900 font-medium">
            <span>Built with White • Lavender • Glassmorphism Engineering</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
