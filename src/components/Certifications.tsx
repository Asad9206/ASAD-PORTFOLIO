import React from 'react';
import { PORTFOLIO_DATA, CertificateItem } from '../data/portfolioData';
import { Award, CheckCircle2, Maximize2, ExternalLink, Sparkles, ShieldCheck } from 'lucide-react';

interface CertificationsProps {
  onOpenLightbox: (image: string, title: string) => void;
}

export const Certifications: React.FC<CertificationsProps> = ({ onOpenLightbox }) => {
  const { certifications } = PORTFOLIO_DATA;

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/70 border border-purple-200 text-xs font-bold text-purple-700 uppercase tracking-widest mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            CERTIFICATIONS & BADGES
          </h2>
          <p className="text-slate-600 text-sm mt-3 max-w-xl">
            Accredited certifications from IIT Kharagpur (NPTEL Elite + Gold), Oracle Certified Professional, Salesforce Trailhead, and Eduskills Foundation.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-3"></div>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white/85 backdrop-blur-xl border border-purple-200/90 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-purple-400 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-100/80 text-purple-900 font-bold border border-purple-200">
                    {cert.badgeType || 'Certified'}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {cert.dateOrPeriod}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 tracking-tight mb-1 group-hover:text-purple-700 transition-colors">
                  {cert.title}
                </h3>

                <div className="text-xs font-bold text-purple-700 mb-3">
                  {cert.issuer}
                </div>

                <div className="p-3 rounded-xl bg-purple-50/60 border border-purple-100 text-xs font-semibold text-slate-800 mb-4">
                  {cert.credentialDetails}
                </div>

                {/* Highlights List */}
                <div className="space-y-1.5 mb-5">
                  {cert.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certificate Image Frame */}
              <div>
                <div
                  onClick={() => onOpenLightbox(cert.image, `${cert.title} — ${cert.issuer}`)}
                  className="relative aspect-[16/10] bg-slate-900/5 rounded-2xl border border-purple-100 overflow-hidden cursor-pointer flex items-center justify-center p-3 group/img hover:border-purple-300 transition-all shadow-inner"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover/img:scale-105"
                  />
                  <div className="absolute inset-0 bg-purple-950/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3.5 py-1.5 rounded-xl bg-white/95 text-xs font-bold text-purple-900 shadow-md flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-purple-700" />
                      <span>View High-Res Certificate</span>
                    </span>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-mono">
                    Official Verification Asset
                  </span>
                  <button
                    onClick={() => onOpenLightbox(cert.image, `${cert.title} — ${cert.issuer}`)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-purple-700 bg-purple-50 hover:bg-purple-100 border border-purple-200 transition-colors"
                  >
                    <span>View Certificate</span>
                    <Maximize2 className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
