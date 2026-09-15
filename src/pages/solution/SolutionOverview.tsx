import React from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { CTASection } from '../../components/ui/CTASection';
import { Badge } from '../../components/ui/Badge';
import { Sparkles, Zap, ShieldCheck, HeartPulse, RefreshCw, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SolutionOverview: React.FC = () => {
  return (
    <div>
      <PageHeader
        badge="PRODUCT VISION"
        title="Solution Overview: The Smart Dining Assistant"
        intro="An end-to-end cyber-physical dining framework that bridges physiological science and high-speed canteen operations to guarantee every student gets the exact nutrients they need."
        breadcrumbs={[
          { label: 'Solution', href: '/solution/overview' },
          { label: 'Overview & Vision' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Core Vision Card */}
        <div className="bg-[#0E1B14] text-white rounded-3xl p-8 border border-white/10 shadow-xl">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-[#6FCF97] uppercase tracking-widest block">
              The Guiding Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight">
              Personalized Nutrition Without Queue Friction.
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Most nutrition apps fail in college dining halls because they demand tedious barcode scanning, grams weighing, or cumbersome camera angles. The Smart Meal &amp; Activity Assistant re-engineers the interaction: <strong>a 1-tap morning activity check-in produces an instant color-coded scoop card at the mess counter in under 10 seconds.</strong>
            </p>
          </div>
        </div>

        {/* The 4 Architectural Pillars of the Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#1F6F4B] flex items-center justify-center">
              <HeartPulse className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-stone-900">1. Evidence-Based Baselines</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Eliminates arbitrary guesswork by establishing clinically verified Mifflin-St Jeor BMR baselines calibrated for student age and sex.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#1F6F4B] flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-stone-900">2. Dynamic Multipliers</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Adjusts daily caloric allocation using 5 discrete physical activity tiers, bridging the 50% energy mismatch between study and sports days.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#1F6F4B] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-stone-900">3. Visual Scoop Cards</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Converts complex kilocalories and grams into real-world canteen ladle scoops (e.g. 2 ladles rice, 3 rotis, 1.5 bowls dal) understandable in 2 seconds.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#1F6F4B] flex items-center justify-center">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-stone-900">4. Satiety Feedback Loop</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              A 1-tap post-meal feedback mechanism allows the engine to personalize subsequent portion calculations to individual metabolic rates.
            </p>
          </div>
        </div>

        {/* Cross navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/solution/why-this-won"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Decision Matrix</span>
              <h4 className="text-base font-bold text-stone-900">Why A Rule-Based Model Won Over CNN</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>

          <Link
            to="/solution/pipeline"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Technical Deep Dive</span>
              <h4 className="text-base font-bold text-stone-900">6-Stage Pipeline Breakdown</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>

      <CTASection
        title="Experience the Solution Firsthand"
        description="Try our interactive demo or see the mobile mockups in action."
        primaryLink={{ text: 'Try Live Portion Recommender', href: '/tools/portion-recommender' }}
        secondaryLink={{ text: 'View Mobile App Preview', href: '/tools/app-preview' }}
      />
    </div>
  );
};
