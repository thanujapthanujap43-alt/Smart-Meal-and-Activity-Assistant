import React from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { CTASection } from '../../components/ui/CTASection';
import { Badge } from '../../components/ui/Badge';
import { BarChart3, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SurveyResults: React.FC = () => {
  const findings = [
    {
      percentage: 84,
      label: 'Nutritional Blindness',
      stat: '84% of students admit they have no idea of their daily caloric or protein needs.',
      details: 'When asked to estimate their daily BMR or TDEE, over 520 respondents guessed values off by more than 800 kcal or could not provide an answer.',
      color: 'bg-red-500',
    },
    {
      percentage: 76,
      label: 'Afternoon Academic Slump',
      stat: '76% regularly experience severe post-lunch lethargy during 2:00 PM labs or lectures.',
      details: 'Directly linked to massive carbohydrate intake (high glycemic load from excess rice and maida-based breads) during 1:00 PM lunch rushes.',
      color: 'bg-amber-500',
    },
    {
      percentage: 68,
      label: 'Athletic Under-Fueling',
      stat: '68% of student athletes and gym-goers report chronic late-night hunger.',
      details: 'Due to uniform mess portions, high-activity students run a 400–600 kcal daily deficit, driving late-night ordering of fried street food.',
      color: 'bg-orange-500',
    },
    {
      percentage: 91,
      label: 'Willingness to Adopt',
      stat: '91% stated they would use a 1-tap mobile portion card if queue delay was zero.',
      details: 'Students strongly reject complex calorie-tracking apps (like MyFitnessPal) because barcode scanning is impossible in a mess line.',
      color: 'bg-[#1F6F4B]',
    },
    {
      percentage: 94,
      label: 'Institutional Urgency',
      stat: '94% agree that campus mess food waste is a critical sustainability problem.',
      details: 'Students routinely witness multiple 100-liter waste bins filled with rice scrapings daily and desire a proactive solution.',
      color: 'bg-[#3BAA75]',
    },
  ];

  return (
    <div>
      <PageHeader
        badge="SURVEY ANALYSIS"
        title="Survey Results Deep Dive"
        intro="Detailed analysis of 624 student responses revealing widespread nutritional blindness, chronic energy mismatch, and overwhelming demand for a rapid, zero-friction serving assistant."
        breadcrumbs={[
          { label: 'Research', href: '/research/field-observations' },
          { label: 'Survey Results' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Results grid */}
        <div className="space-y-6">
          {findings.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl sm:text-4xl font-black text-stone-900 font-mono">
                    {f.percentage}%
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-stone-900">{f.label}</h3>
                    <span className="text-xs text-stone-500">n = 624 verified campus respondents</span>
                  </div>
                </div>
              </div>

              {/* Progress visual bar */}
              <div className="w-full bg-stone-100 rounded-full h-3 overflow-hidden">
                <div className={`${f.color} h-full rounded-full transition-all duration-1000`} style={{ width: `${f.percentage}%` }} />
              </div>

              <div className="text-sm font-semibold text-stone-800">
                {f.stat}
              </div>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed bg-stone-50 p-3.5 rounded-xl border border-stone-200">
                {f.details}
              </p>
            </div>
          ))}
        </div>

        {/* Cross navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/solution/why-this-won"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Solution Logic</span>
              <h4 className="text-base font-bold text-stone-900">Why Our Rule-Based Engine Won</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>

          <Link
            to="/tools/portion-recommender"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Interactive Tool</span>
              <h4 className="text-base font-bold text-stone-900">Experience Live Portion Recommender</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>

      <CTASection
        title="Ready to See How We Eliminate These Discrepancies?"
        description="Launch our interactive simulator and test how portion sizes adjust based on BMI and daily activity."
        primaryLink={{ text: 'Try Live Portion Recommender', href: '/tools/portion-recommender' }}
        secondaryLink={{ text: 'View Solution Architecture', href: '/solution/overview' }}
      />
    </div>
  );
};
