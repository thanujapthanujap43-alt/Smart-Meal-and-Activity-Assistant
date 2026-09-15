import React from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { CTASection } from '../../components/ui/CTASection';
import { Badge } from '../../components/ui/Badge';
import { Smartphone, Zap, Sparkles, Scale, RefreshCw, BarChart2, ShieldCheck, WifiOff, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Features: React.FC = () => {
  const featureList = [
    {
      icon: Scale,
      title: 'Physiological Portion Sizing',
      badge: 'Core Engine',
      desc: 'Replaces uniform mess scoops with calibrated meal targets computed via the Mifflin-St Jeor BMR formula and activity multipliers from 1.2 to 1.9.',
    },
    {
      icon: Smartphone,
      title: 'Sub-10s Counter Serving Pass',
      badge: 'Queue Design',
      desc: 'Translates abstract kilocalories into practical kitchen scoops (e.g. 2 ladles rice, 3 rotis, 1.5 bowls dal) readable at a glance by serving staff.',
    },
    {
      icon: Zap,
      title: '1-Tap Daily Activity Sync',
      badge: 'Frictionless',
      desc: 'Students select their physical schedule in 2 seconds (Study Day, Campus Walk, Gym, Varsity Sport) without entering tedious sets, reps, or food logs.',
    },
    {
      icon: RefreshCw,
      title: 'Adaptive Satiety Calibration',
      badge: 'Stage 6 Feedback',
      desc: 'Post-meal fullness ratings (Too Little / Just Right / Too Heavy) dynamically tune subsequent meal carb-to-protein ratios to individual metabolic variances.',
    },
    {
      icon: BarChart2,
      title: 'Student & Kitchen Waste Analytics',
      badge: 'Sustainability',
      desc: 'Provides students with personal kilograms-of-food-saved metrics while giving kitchen managers aggregate data to optimize bulk prep batches.',
    },
    {
      icon: WifiOff,
      title: 'Offline-First Local Storage',
      badge: 'Resilience',
      desc: 'Engineered as an ultra-lightweight Progressive Web App (&lt; 65 KB) that runs client-side inside the dining hall basement even if cellular signal drops.',
    },
  ];

  return (
    <div>
      <PageHeader
        badge="CAPABILITY ARCHITECTURE"
        title="Comprehensive Feature Breakdown"
        intro="Every feature in the Smart Meal &amp; Activity Assistant was engineered to solve a specific dining hall bottleneck identified during our 32-hour observational audit."
        breadcrumbs={[
          { label: 'Solution', href: '/solution/overview' },
          { label: 'Feature Breakdown' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* 6 Core Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureList.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-sm hover:border-[#1F6F4B] transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-[#1F6F4B] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <Badge variant="mint">{f.badge}</Badge>
                  </div>

                  <h3 className="text-lg font-bold text-stone-900">{f.title}</h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                    {f.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100">
                  <span className="text-[11px] font-bold text-[#1F6F4B] flex items-center">
                    <span>Engineered for campus mess</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cross navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/solution/comparison"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Comparative Impact</span>
              <h4 className="text-base font-bold text-stone-900">Before vs. After: What Changes in the Mess</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>

          <Link
            to="/tools/app-preview"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Mobile UI</span>
              <h4 className="text-base font-bold text-stone-900">Preview Features on Mobile Screens</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>

      <CTASection
        title="Experience All Features in the Interactive Recommender"
        description="Try adjusting parameters to see the portion calculations adapt live in your browser."
        primaryLink={{ text: 'Try Portion Recommender', href: '/tools/portion-recommender' }}
        secondaryLink={{ text: 'View Mobile Mockups', href: '/tools/app-preview' }}
      />
    </div>
  );
};
