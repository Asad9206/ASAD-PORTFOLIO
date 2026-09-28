import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Code, Database, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Research', href: '#research' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 pt-3 sm:pt-4 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto transition-all duration-300 rounded-2xl ${
          isScrolled
            ? 'bg-white/85 backdrop-blur-xl border border-purple-200/80 shadow-[0_8px_30px_rgb(147,51,234,0.08)] py-2 sm:py-2.5 px-4 sm:px-6'
            : 'bg-white/70 backdrop-blur-md border border-purple-100/70 shadow-[0_4px_20px_rgb(147,51,234,0.04)] py-3 sm:py-4 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform">
              AA
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-slate-900 group-hover:text-purple-700 transition-colors">
                MD ASAD ANWER
              </span>
              <span className="text-[10px] uppercase tracking-wider text-purple-600 font-semibold">
                Backend Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 text-xs font-medium text-slate-600">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-2.5 py-1.5 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-purple-700 bg-purple-100/80 font-semibold shadow-xs'
                      : 'hover:text-purple-700 hover:bg-purple-50/70'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-2.5">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-purple-700 bg-purple-50 hover:bg-purple-100/90 border border-purple-200/80 transition-all hover:shadow-xs active:scale-95"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-purple-700 hover:bg-purple-50 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-Down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-purple-100 grid grid-cols-2 gap-1.5 text-xs animate-fade-in">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'text-purple-700 bg-purple-100 font-semibold'
                      : 'text-slate-700 hover:bg-purple-50 hover:text-purple-700'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="col-span-2 pt-2">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-sm"
              >
                Let's Connect
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
