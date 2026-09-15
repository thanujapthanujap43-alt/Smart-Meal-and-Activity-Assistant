import React from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { CTASection } from '../../components/ui/CTASection';
import { Badge } from '../../components/ui/Badge';
import { STAKEHOLDERS_DATA } from '../../data/projectData';
import { Users, CheckCircle2, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Stakeholders: React.FC = () => {
  const primaryStakeholders = STAKEHOLDERS_DATA.filter((s) => s.tier === 'Primary');
  const secondaryStakeholders = STAKEHOLDERS_DATA.filter((s) => s.tier === 'Secondary');
  const tertiaryStakeholders = STAKEHOLDERS_DATA.filter((s) => s.tier === 'Tertiary');

  const renderCard = (s: typeof STAKEHOLDERS_DATA[0]) => (
    <div
      key={s.id}
      className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:border-[#1F6F4B] transition-all space-y-4 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between">
          <Badge variant={s.tier === 'Primary' ? 'mint' : s.tier === 'Secondary' ? 'forest' : 'neutral'}>
            {s.tier} Stakeholder
          </Badge>
          <span className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-wider">
            {s.id}
          </span>
        </div>

        <h4 className="text-lg font-bold text-stone-900 mt-2">
          {s.name}
        </h4>
        <span className="text-xs text-[#1F6F4B] font-semibold block">{s.role}</span>

        <div className="mt-3 space-y-2 text-xs">
          <div className="p-2.5 rounded-xl bg-red-50/60 border border-red-200">
            <span className="font-bold text-red-900 block mb-0.5">Key Pain Points:</span>
            <ul className="list-disc list-inside space-y-0.5 text-stone-700">
              {s.painPoints.map((pp, idx) => (
                <li key={idx}>{pp}</li>
              ))}
            </ul>
          </div>

          <div className="p-2.5 rounded-xl bg-emerald-50/60 border border-emerald-200">
            <span className="font-bold text-[#1F6F4B] block mb-0.5">Value Delivered:</span>
            <ul className="list-disc list-inside space-y-0.5 text-stone-700">
              {s.systemBenefits.map((sb, idx) => (
                <li key={idx}>{sb}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-stone-100 italic text-[11px] text-stone-500">
        {s.quote}
      </div>
    </div>
  );

  return (
    <div>
      <PageHeader
        badge="ECOSYSTEM ANALYSIS"
        title="Stakeholder Map &amp; Matrix"
        intro="Transforming dining hall operations requires aligning incentives across 9 distinct campus groups — from hungry engineering students to early-morning kitchen prep staff."
        breadcrumbs={[
          { label: 'Research', href: '/research/field-observations' },
          { label: 'Stakeholders' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Primary Stakeholders */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-[#1F6F4B]" />
            <h3 className="text-xl font-bold text-stone-900">
              Primary Stakeholders (Daily Dining Hall Actors)
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {primaryStakeholders.map(renderCard)}
          </div>
        </div>

        {/* Secondary Stakeholders */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-[#3BAA75]" />
            <h3 className="text-xl font-bold text-stone-900">
              Secondary Stakeholders (Hostel &amp; Healthcare Supervisors)
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {secondaryStakeholders.map(renderCard)}
          </div>
        </div>

        {/* Tertiary Stakeholders */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-stone-500" />
            <h3 className="text-xl font-bold text-stone-900">
              Tertiary Stakeholders (Campus Administration &amp; Municipalities)
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tertiaryStakeholders.map(renderCard)}
          </div>
        </div>

        {/* Cross navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/research/key-numbers"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Quantitative Deep Dive</span>
              <h4 className="text-base font-bold text-stone-900">Key Research Numbers &amp; Charts</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>

          <Link
            to="/solution/features"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Engineered Features</span>
              <h4 className="text-base font-bold text-stone-900">How Features Address Pain Points</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>

      <CTASection
        title="Ready to Address Campus-Wide Dining Inefficiencies?"
        description="See how these stakeholder requirements formed our technical constraints."
        primaryLink={{ text: 'Explore System Architecture', href: '/tech/architecture' }}
        secondaryLink={{ text: 'Try Live Portion Recommender', href: '/tools/portion-recommender' }}
      />
    </div>
  );
};
