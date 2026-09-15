import React from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { CTASection } from '../../components/ui/CTASection';
import { Badge } from '../../components/ui/Badge';
import { Layers, Cpu, ShieldCheck, Zap, Globe, HardDrive, ArrowRight, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TechStack: React.FC = () => {
  const stackItems = [
    {
      category: 'Frontend Framework',
      name: 'React 18 + TypeScript',
      desc: 'Strictly typed component architecture providing compile-time type safety for physiological inputs, BMR equations, and meal states.',
    },
    {
      category: 'Build & Bundling',
      name: 'Vite 5',
      desc: 'Sub-second development compilation and production roll-up generating an ultra-lean bundle (< 65 KB) optimized for patchy hostel Wi-Fi.',
    },
    {
      category: 'Design & Utility Styling',
      name: 'Tailwind CSS v3',
      desc: 'Zero-runtime utility CSS engine with custom color tokens (Mint, Forest Green, Warm Off-White, Dark Slate) adhering to WCAG AA accessibility.',
    },
    {
      category: 'Motion & UI Feedback',
      name: 'Motion (Framer Motion)',
      desc: 'Hardware-accelerated micro-interactions and layout transitions for instant feedback during serving card toggles.',
    },
    {
      category: 'Data Visualization',
      name: 'Recharts & Pure CSS Bars',
      desc: 'Declarative data charting for energy mismatch comparisons, organ calorie distribution, and aggregate plate waste analytics.',
    },
    {
      category: 'Storage & Privacy Model',
      name: 'Local-First Client Storage',
      desc: 'Biometric measurements and activity history remain entirely in browser local storage, ensuring zero biometric data leaves student devices.',
    },
  ];

  return (
    <div>
      <PageHeader
        badge="SOFTWARE ENGINEERING"
        title="Complete Technology Stack"
        intro="An inspection of the modern, type-safe, and zero-runtime-overhead technology stack chosen to meet our strict sub-10-second dining hall performance criteria."
        breadcrumbs={[
          { label: 'Technical', href: '/tech/architecture' },
          { label: 'Technology Stack' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stackItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-sm space-y-3 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-stone-900 mt-1">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center text-xs font-bold text-[#1F6F4B]">
                <span>Production ready</span>
              </div>
            </div>
          ))}
        </div>

        {/* Why Zero-Runtime Overhead Matters in Canteens */}
        <div className="bg-[#0E1B14] text-white rounded-3xl p-8 border border-white/10 shadow-xl space-y-4">
          <Badge variant="mint">PERFORMANCE CRITERIA</Badge>
          <h3 className="text-xl sm:text-2xl font-bold">
            Engineered to Run on a $70 Android Phone
          </h3>
          <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-3xl">
            A major engineering flaw of modern university applications is relying on heavy client bundles that choke older Android devices. By avoiding heavy UI libraries and complex neural network runtimes, our total JavaScript footprint executes instantaneously even on budget smartphones without draining student battery life.
          </p>
        </div>

        {/* Cross navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/tech/api-specs"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Specifications</span>
              <h4 className="text-base font-bold text-stone-900">API Specifications &amp; JSON Schemas</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>

          <Link
            to="/tools/portion-recommender"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Experience It</span>
              <h4 className="text-base font-bold text-stone-900">Test Live Portion Recommender</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>

      <CTASection
        title="Ready to Review Data Contracts?"
        description="Inspect the formal JSON schemas and interfaces powering data exchange across stages."
        primaryLink={{ text: 'View API & Data Schemas', href: '/tech/api-specs' }}
        secondaryLink={{ text: 'View System Architecture', href: '/tech/architecture' }}
      />
    </div>
  );
};
