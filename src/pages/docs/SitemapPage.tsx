import React from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { CTASection } from '../../components/ui/CTASection';
import { Badge } from '../../components/ui/Badge';
import { SITEMAP } from '../../data/sitemap';
import { Network, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SitemapPage: React.FC = () => {
  const totalPages = SITEMAP.reduce((acc, cat) => acc + cat.pages.length, 0);

  return (
    <div>
      <PageHeader
        badge="SITE ARCHITECTURE"
        title="Comprehensive Sitemap &amp; Directory"
        intro={`Complete directory of all ${totalPages} production pages built for the Smart Meal & Activity Assistant platform, categorized across research, engineering, tools, and institutional stakeholders.`}
        breadcrumbs={[
          { label: 'Documentation', href: '/docs/faqs' },
          { label: 'Sitemap' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Metric summary banner */}
        <div className="bg-[#0E1B14] text-white rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold text-[#6FCF97] uppercase tracking-wider block">
              PLATFORM DIRECTORY STATUS
            </span>
            <h2 className="text-xl sm:text-2xl font-bold mt-1">
              Full Multi-Page Marketing &amp; Technical System
            </h2>
            <p className="text-xs text-stone-300 mt-1">
              Zero lorem ipsum. Every single page features verified physiological data, survey statistics, and responsive layouts.
            </p>
          </div>

          <div className="flex items-center space-x-4 shrink-0">
            <div className="text-center px-4 py-2 bg-white/5 rounded-2xl border border-white/10">
              <span className="text-2xl sm:text-3xl font-black text-[#6FCF97] font-mono">{totalPages}</span>
              <span className="text-[10px] text-stone-300 block font-bold uppercase">Total Pages</span>
            </div>
            <div className="text-center px-4 py-2 bg-white/5 rounded-2xl border border-white/10">
              <span className="text-2xl sm:text-3xl font-black text-[#6FCF97] font-mono">{SITEMAP.length}</span>
              <span className="text-[10px] text-stone-300 block font-bold uppercase">Sections</span>
            </div>
          </div>
        </div>

        {/* Categories & Pages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SITEMAP.map((section, sIdx) => (
            <div
              key={sIdx}
              className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                  <h3 className="font-bold text-stone-900 text-base">
                    {section.category}
                  </h3>
                  <span className="text-[10px] font-mono font-bold text-stone-500 bg-stone-100 px-2 py-0.5 rounded-full">
                    {section.pages.length} pages
                  </span>
                </div>

                <ul className="divide-y divide-stone-100 pt-2 text-xs">
                  {section.pages.map((p, pIdx) => (
                    <li key={pIdx} className="py-2.5 hover:bg-stone-50 transition-colors rounded-lg px-2">
                      <Link
                        to={p.path}
                        className="flex items-center justify-between group"
                      >
                        <span className="font-medium text-stone-700 group-hover:text-[#1F6F4B] transition-colors">
                          {p.title}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-stone-300 group-hover:text-[#1F6F4B] group-hover:translate-x-0.5 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 text-[10px] text-stone-400 font-mono">
                {section.category} module
              </div>
            </div>
          ))}
        </div>
      </div>

      <CTASection
        title="Ready to Explore the Platform?"
        description="Experience the interactive tools or read through the field research findings."
        primaryLink={{ text: 'Try Live Portion Recommender', href: '/tools/portion-recommender' }}
        secondaryLink={{ text: 'Explore Field Observations', href: '/research/field-observations' }}
      />
    </div>
  );
};
