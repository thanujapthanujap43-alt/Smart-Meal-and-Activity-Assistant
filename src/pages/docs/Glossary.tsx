import React, { useState } from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { CTASection } from '../../components/ui/CTASection';
import { Badge } from '../../components/ui/Badge';
import { BookA, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Glossary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const terms = [
    {
      term: 'BMR (Basal Metabolic Rate)',
      category: 'Physiology',
      def: 'The baseline number of kilocalories required by the human body to sustain vital autonomic cellular functions (cardiac circulation, pulmonary respiration, thermoregulation, organ cell turnover) at complete thermal and physical rest.',
    },
    {
      term: 'TDEE (Total Daily Energy Expenditure)',
      category: 'Physiology',
      def: 'The total number of calories burned in a 24-hour cycle, composed of BMR + Thermic Effect of Food (TEF) + Non-Exercise Activity Thermogenesis (NEAT) + Exercise Activity Thermogenesis (EAT).',
    },
    {
      term: 'NEAT (Non-Exercise Activity Thermogenesis)',
      category: 'Physiology',
      def: 'Energy expended for everything that is not sleeping, eating, or sports-like exercise. In college students, NEAT consists predominantly of walking between hostel dorms, lecture halls, and climbing academic building stairs.',
    },
    {
      term: 'TEF (Thermic Effect of Food)',
      category: 'Physiology',
      def: 'The metabolic energy cost of chewing, digesting, absorbing, and assimilating nutrients from food. Protein has the highest TEF (20–30%), followed by carbohydrates (5–10%) and fats (0–3%).',
    },
    {
      term: 'PAL (Physical Activity Level)',
      category: 'Physiology',
      def: 'A physiological ratio expressing an individual\'s daily energy expenditure relative to their basal metabolic rate. Standard values range from 1.2 (Sedentary desk work) to 1.9 (Intense athletic training).',
    },
    {
      term: 'Post-Prandial Somnolence',
      category: 'Clinical',
      def: 'Commonly known as the "afternoon food coma." A state of acute lethargy and cognitive fog induced by large high-glycemic carbohydrate meals, causing rapid insulin secretion and shifts in brain neurotransmitters (tryptophan/serotonin).',
    },
    {
      term: 'Satiety Index',
      category: 'Nutrition',
      def: 'A calibrated scale measuring how effectively individual foods satisfy appetite over a 120-minute post-consumption period. Whole boiled potatoes, pulses, and fiber-rich greens rank highest; refined white rice ranks lower.',
    },
    {
      term: 'Ladle Quantization',
      category: 'Engineering',
      def: 'The algorithmic transformation of continuous floating-point gram weights into discrete physical serving kitchen units (e.g. 1.0, 1.5, or 2.0 standard dining hall ladles) to enable frictionless counter execution.',
    },
    {
      term: 'Gravimetric Waste Audit',
      category: 'Methodology',
      def: 'The empirical scientific measurement of food waste by physically weighing collected organic scraps using industrial digital scales before landfill or compost transfer, categorized by preparation vs. plate waste.',
    },
    {
      term: 'Local-First Architecture',
      category: 'Software',
      def: 'A software paradigm where data storage and core business logic reside directly on the user\'s local device. Eliminates network latency, guarantees 100% offline availability, and safeguards biometric privacy.',
    },
  ];

  const filteredTerms = terms.filter(
    (t) =>
      t.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.def.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <PageHeader
        badge="SCIENTIFIC LEXICON"
        title="Scientific &amp; Technical Glossary"
        intro="Precise definitions of physiological metrics, metabolic formulas, dining hall operational terms, and software concepts used across the Smart Meal &amp; Activity Assistant."
        breadcrumbs={[
          { label: 'Documentation', href: '/docs/faqs' },
          { label: 'Glossary' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        {/* Search Bar */}
        <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm">
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-4 top-3.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search terms (e.g. BMR, NEAT, Quantization, Somnolence)..."
              className="w-full bg-stone-50 border border-stone-300 rounded-xl pl-11 pr-4 py-2.5 text-xs sm:text-sm font-semibold text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#1F6F4B]"
            />
          </div>
        </div>

        {/* Terms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTerms.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-sm space-y-3 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-stone-900">{item.term}</h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#1F6F4B] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    {item.category}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                  {item.def}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 text-[11px] font-mono text-stone-400">
                Verified terminology
              </div>
            </div>
          ))}
        </div>

        {/* Cross navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
          <Link
            to="/docs/literature-review"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Academic Citations</span>
              <h4 className="text-base font-bold text-stone-900">Academic Literature Review</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>

          <Link
            to="/docs/capstone-brief"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Project Overview</span>
              <h4 className="text-base font-bold text-stone-900">Capstone Project Brief</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>

      <CTASection
        title="Ready to Put These Concepts to Work?"
        description="Try the interactive tool that translates these scientific definitions into daily meals."
        primaryLink={{ text: 'Try Live Portion Recommender', href: '/tools/portion-recommender' }}
        secondaryLink={{ text: 'View System Architecture', href: '/tech/architecture' }}
      />
    </div>
  );
};
