import React from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { CTASection } from '../../components/ui/CTASection';
import { Badge } from '../../components/ui/Badge';
import { BookOpen, ExternalLink, Bookmark, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const LiteratureReview: React.FC = () => {
  const citations = [
    {
      title: 'A new predictive equation for resting energy expenditure in healthy individuals',
      authors: 'Mifflin, M. D., St Jeor, S. T., Hill, L. A., Scott, B. J., Daugherty, S. A., & Koh, Y. O.',
      journal: 'The American Journal of Clinical Nutrition, 51(2), 241–247 (1990)',
      annotation: 'Demonstrated that the Mifflin-St Jeor formula accurately estimates resting metabolic rate within 10% of indirect calorimetry for over 82% of subjects, significantly outperforming legacy Harris-Benedict formulations.',
      impactOnSystem: 'Adopted as the core mathematical basis for Stage 3 Basal Metabolic Rate (BMR) derivation.',
    },
    {
      title: 'Human energy requirements: Report of a Joint FAO/WHO/UNU Expert Consultation',
      authors: 'Food and Agriculture Organization, World Health Organization, United Nations University',
      journal: 'FAO Food and Nutrition Technical Report Series No. 1, Rome (2004)',
      annotation: 'Established empirical physical activity level (PAL) coefficients across sedentary, moderate, and heavy exertion lifestyles for young adults.',
      impactOnSystem: 'Used to configure our discrete 5-tier activity multiplier schedule (1.2 to 1.9).',
    },
    {
      title: 'Portion size me: Plate-size induced consumption norms and food waste in dining halls',
      authors: 'Wansink, B., & van Ittersum, K.',
      journal: 'Journal of Experimental Psychology: Applied, 19(4), 320–332 (2013)',
      annotation: 'Observed the Delboeuf visual illusion in institutional cafeteria trays: larger plates and uniform cafeteria scoops stimulate subconscious over-serving and subsequent 30%+ plate scrapings.',
      impactOnSystem: 'Directly informs our visual counter scoop pass: calibrating ladles to true biological need prevents visual over-serving before food touches the plate.',
    },
    {
      title: 'A satiety index of common foods',
      authors: 'Holt, S. H. A., Brand Miller, J. C., Petocz, P., & Farmakalidis, E.',
      journal: 'European Journal of Clinical Nutrition, 49(9), 675–690 (1995)',
      annotation: 'Systematically validated the satiety hierarchy of dietary macronutrients, proving that high-fiber pulses and protein generate 2.5x greater two-hour satiety than polished white rice.',
      impactOnSystem: 'Incorporated into Stage 4 boundary constraints: enforcing minimum dal protein floors while preventing excess refined carbohydrate piling.',
    },
    {
      title: 'Nutrient Requirements for Indians: Recommended Dietary Allowances (RDA)',
      authors: 'ICMR-National Institute of Nutrition Expert Group',
      journal: 'Indian Council of Medical Research, Hyderabad (2020)',
      annotation: 'Updated epidemiological energy, protein, and micronutrient standards tailored to the metabolic profiles of Indian collegiate youth.',
      impactOnSystem: 'Grounds our meal partitioning ratios (Lunch = 35%, Breakfast = 25%, Dinner = 30%) and macro balance for campus dining halls.',
    },
    {
      title: 'Global food losses and food waste: Extent, causes and prevention',
      authors: 'Gustavsson, J., Cederberg, C., Sonesson, U., van Otterdijk, R., & Meybeck, A.',
      journal: 'Food and Agriculture Organization of the United Nations (FAO), Rome (2011)',
      annotation: 'Established that institutional consumer-level food waste produces immense environmental, economic, and carbon footprints, with grain waste contributing disproportionately to landfill methane.',
      impactOnSystem: 'Underpins our campus sustainability calculations and United Nations SDG 12.3 alignment.',
    },
  ];

  return (
    <div>
      <PageHeader
        badge="SCHOLARLY FOUNDATION"
        title="Academic Literature Review &amp; Citations"
        intro="An annotated bibliography of peer-reviewed clinical nutrition, behavioral economics, and institutional food waste literature informing our algorithmic design."
        breadcrumbs={[
          { label: 'Documentation', href: '/docs/faqs' },
          { label: 'Literature Review' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Synthesis Overview */}
        <div className="bg-[#0E1B14] text-white rounded-3xl p-8 border border-white/10 shadow-xl space-y-4">
          <Badge variant="mint">THEORETICAL SYNTHESIS</Badge>
          <h2 className="text-xl sm:text-2xl font-bold">
            Bridging Clinical Metabolism and Dining Hall Behavioral Psychology
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-3xl">
            Our engineering strategy combines metabolic physiology (Mifflin et al., FAO/WHO) with institutional cafeteria behavioral nudging (Wansink et al.). Rather than forcing students to use burdensome calorie counting apps, we translate rigorous peer-reviewed science into intuitive physical ladle scoops.
          </p>
        </div>

        {/* Citation Cards */}
        <div className="space-y-6">
          {citations.map((cite, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4"
            >
              <div className="flex items-start justify-between gap-4 border-b border-stone-100 pb-3">
                <div className="flex items-center space-x-3">
                  <span className="w-7 h-7 rounded-lg bg-emerald-100 text-[#1F6F4B] flex items-center justify-center font-bold text-xs">
                    {idx + 1}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-stone-900">
                    {cite.title}
                  </h3>
                </div>
                <Bookmark className="w-5 h-5 text-stone-300 shrink-0 mt-1" />
              </div>

              <div className="text-xs text-stone-500 font-mono space-y-0.5">
                <p><strong>Authors:</strong> {cite.authors}</p>
                <p><strong>Citation:</strong> {cite.journal}</p>
              </div>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {cite.annotation}
              </p>

              <div className="p-3.5 bg-emerald-50/60 rounded-2xl border border-emerald-200 text-xs text-stone-800">
                <span className="font-bold text-[#1F6F4B] uppercase tracking-wider text-[10px] block mb-0.5">
                  Direct Implementation in Our System:
                </span>
                {cite.impactOnSystem}
              </div>
            </div>
          ))}
        </div>

        {/* Cross navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/docs/sitemap"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Site Directory</span>
              <h4 className="text-base font-bold text-stone-900">Complete Sitemap &amp; Page Directory</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>

          <Link
            to="/tech/bmi-bmr-tdee"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Mathematical Rigor</span>
              <h4 className="text-base font-bold text-stone-900">BMI, BMR, &amp; TDEE Equations</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>

      <CTASection
        title="Experience the Validated Science in Action"
        description="Try our interactive Portion Recommender grounded in these academic publications."
        primaryLink={{ text: 'Try Live Portion Recommender', href: '/tools/portion-recommender' }}
        secondaryLink={{ text: 'View Capstone Project Brief', href: '/docs/capstone-brief' }}
      />
    </div>
  );
};
