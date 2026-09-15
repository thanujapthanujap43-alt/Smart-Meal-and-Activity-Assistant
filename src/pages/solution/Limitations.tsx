import React from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { CTASection } from '../../components/ui/CTASection';
import { Badge } from '../../components/ui/Badge';
import { AlertTriangle, ShieldCheck, HeartPulse, Info, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Limitations: React.FC = () => {
  const limitations = [
    {
      title: 'Buffet Self-Service & Secondary Helpings',
      problem: 'In canteens where students self-serve or return for unlimited rice refills, counter cards guide the initial plate but cannot physically restrict subsequent visits.',
      mitigation: 'The app promotes a "Wait 15 Minutes" satiety reminder after the first plate before returning for second helpings.',
    },
    {
      title: 'Athletes in Intentional Bulking / Cutting Phases',
      problem: 'Standard TDEE formulas target caloric equilibrium (weight maintenance). Varsity wrestlers or bodybuilders deliberately pursue high-surplus or deficit diets.',
      mitigation: 'Future iterations include explicit metabolic goal toggles (+300 kcal Surplus / -300 kcal Deficit). Currently flagged for clinical supervision.',
    },
    {
      title: 'Acute Illness, Fever, & Gastrointestinal Upset',
      problem: 'Infections, viral fevers, or food poisoning radically alter metabolic demands while blunting digestive capacity.',
      mitigation: 'A prominent "Sick Day / Light Diet" override mode provides bland khichdi/toast recommendations rather than normal caloric calculations.',
    },
    {
      title: 'Self-Reported Activity & Weight Biases',
      problem: 'Survey literature indicates that up to 30% of young adults underestimate weight and overestimate athletic workout duration.',
      mitigation: 'Stage 6 feedback loop acts as an automated dampener: if a student claims "Very Active" but rates post-meal fullness as "Too Heavy", the system auto-tunes portions downward.',
    },
  ];

  return (
    <div>
      <PageHeader
        badge="SCIENTIFIC INTEGRITY"
        title="Honest Limitations &amp; Edge Cases"
        intro="Rigorous engineering requires explicit boundary definition. Here are the known physiological constraints, behavioral assumptions, and operational edge cases of our system."
        breadcrumbs={[
          { label: 'Solution', href: '/solution/overview' },
          { label: 'Limitations & Edge Cases' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Prominent Educational & Medical Disclaimer */}
        <div className="bg-amber-50 rounded-3xl p-6 sm:p-8 border-2 border-amber-300 shadow-sm flex items-start space-x-4">
          <AlertTriangle className="w-8 h-8 text-amber-600 shrink-0 mt-1" />
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-amber-950">
              Mandatory Health &amp; Educational Disclaimer
            </h3>
            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
              <strong>Estimates for educational purposes — not medical advice.</strong> The Smart Meal &amp; Activity Assistant is an academic engineering capstone designed to optimize institutional dining hall food portions and reduce campus plate waste. It does not replace clinical consultation with a registered dietitian, certified sports nutritionist, or physician. Individuals with clinical metabolic conditions, diabetes, or eating disorders should adhere strictly to medical directives.
            </p>
          </div>
        </div>

        {/* Detailed Edge Case Breakdown */}
        <div className="space-y-6">
          <Badge variant="mint">KNOWN EDGE CASES &amp; MITIGATION PROTOCOLS</Badge>
          <h3 className="text-2xl font-bold text-stone-900">
            Four Operational Boundaries
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {limitations.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-sm space-y-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-2 text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">
                    <span>Edge Case 0{idx + 1}</span>
                  </div>
                  <h4 className="text-lg font-bold text-stone-900">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                    {item.problem}
                  </p>
                </div>

                <div className="bg-emerald-50/70 p-3.5 rounded-2xl border border-emerald-200 text-xs text-stone-800">
                  <span className="font-bold text-[#1F6F4B] uppercase text-[10px] tracking-wider block mb-0.5">
                    Engineering Mitigation:
                  </span>
                  {item.mitigation}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cross navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/tech/architecture"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Next Section</span>
              <h4 className="text-base font-bold text-stone-900">Explore Technical Architecture</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>

          <Link
            to="/tools/portion-recommender"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Interactive Tool</span>
              <h4 className="text-base font-bold text-stone-900">Test Recommender With Validated Parameters</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>

      <CTASection
        title="Explore Our Core Technical Architecture"
        description="Review the full technical stack, data flow diagram, and algorithm pseudo-code."
        primaryLink={{ text: 'Explore System Architecture', href: '/tech/architecture' }}
        secondaryLink={{ text: 'View Algorithms Flowchart', href: '/tech/algorithms-flowchart' }}
      />
    </div>
  );
};
