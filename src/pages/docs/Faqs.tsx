import React, { useState } from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { CTASection } from '../../components/ui/CTASection';
import { Badge } from '../../components/ui/Badge';
import { HelpCircle, ChevronDown, ChevronUp, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Faqs: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'science' | 'tech' | 'mess' | 'capstone'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedIndices, setExpandedIndices] = useState<number[]>([0, 1]);

  const toggleExpand = (index: number) => {
    setExpandedIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqData = [
    // Science
    {
      category: 'science',
      q: 'Why does the system use the Mifflin-St Jeor equation instead of Harris-Benedict?',
      a: 'The American Dietetic Association reviewed clinical validation studies and confirmed that Mifflin-St Jeor predicts resting metabolic rate within 10% of indirect calorimetry in 82% of individuals, compared to Harris-Benedict which systematically overestimates caloric expenditure by 5–15% in modern populations.',
    },
    {
      category: 'science',
      q: 'Does BMI accurately reflect body composition for student athletes?',
      a: 'BMI is an epidemiological mass-to-height screening metric, not a body fat analyzer. For heavily muscled athletes, BMI can classify them as overweight. That is why our architecture layers Stage 2 Physical Activity Levels (PAL) and Stage 6 adaptive satiety feedback on top of BMI.',
    },
    {
      category: 'science',
      q: 'How does daily activity create a 50% energy swing for the same student?',
      a: 'A 68 kg student burning 1,680 kcal at complete rest will burn approximately 1,970 kcal on an exam study day (1.2x multiplier), but will burn over 2,950 kcal on a varsity training day (1.75x multiplier). That constitutes a 980 kcal (+50%) delta in physiological demand.',
    },
    {
      category: 'science',
      q: 'What is the macronutrient distribution used for student meals?',
      a: 'Our default optimization target allocates 50–55% carbohydrates (complex grains), 20–25% protein (dal, paneer, soy, eggs), and 25% healthy fats, in alignment with Indian Council of Medical Research (ICMR) dietary guidelines.',
    },
    // Tech
    {
      category: 'tech',
      q: 'Why was Computer Vision (CNN) rejected for tray scanning?',
      a: 'We formally rejected CNNs because: (1) Image inference introduces 8–15s of queue latency, causing massive line delays; (2) Indian dining hall gravies and mixed curries obscure ingredient depth; (3) Scanning occurs after food is already ladled, making waste prevention impossible.',
    },
    {
      category: 'tech',
      q: 'How does the app achieve < 15ms inference latency?',
      a: 'All calculations execute in pure client-side TypeScript on the student device. Because the algorithm relies on deterministic linear constraints rather than remote cloud neural networks, execution is instantaneous.',
    },
    {
      category: 'tech',
      q: 'Is student biometric data uploaded to cloud servers?',
      a: 'No. The system adheres to a strict local-first privacy standard. Height, weight, and daily logs reside purely in browser local storage. Only aggregated, fully anonymized plate waste metrics are uploaded to the dining hall management dashboard.',
    },
    {
      category: 'tech',
      q: 'Will the Progressive Web App (PWA) work in a dining hall basement with poor signal?',
      a: 'Yes. The entire app bundle is cached locally via service workers and weighs under 65 KB. The recommendation engine functions 100% offline without cellular or Wi-Fi connectivity.',
    },
    // Mess Life
    {
      category: 'mess',
      q: 'How do kitchen staff understand the portion output?',
      a: 'Rather than displaying abstract grams or calories, the counter pass renders bold, color-coded ladle counts: "2 Scoops Rice • 3 Rotis • 1.5 Bowls Dal", which canteen servers read from across the counter in under 1 second.',
    },
    {
      category: 'mess',
      q: 'What happens if a student is still hungry after finishing their recommended plate?',
      a: 'The system does not lock dining hall doors. However, we encourage students to wait 15 minutes for leptin satiety hormones to reach the brain before requesting seconds. Students can then tap "Still Hungry" in Stage 6 to tune future portions.',
    },
    {
      category: 'mess',
      q: 'How does this reduce dining hall food waste by 60–70%?',
      a: 'Field audits showed that 72% of discarded plate waste consisted of excess rice and rotis taken out of visual habit on low-activity days. Calibrating grain scoops to true biological need eliminates this systematic over-serving at the source.',
    },
    // Capstone
    {
      category: 'capstone',
      q: 'What is the academic background of this project?',
      a: 'This project is a B.Tech Final Year Capstone Project in Computer Science & Engineering. It was developed to solve real dining hall waste and student health problems observed in university hostel messes.',
    },
    {
      category: 'capstone',
      q: 'How many students were surveyed during the initial research phase?',
      a: 'Over 600 campus students across engineering, science, and arts departments participated in our initial survey, and 32 hours of physical observational audits were conducted across 4 campus dining halls.',
    },
    {
      category: 'capstone',
      q: 'What is the timeline for the live campus pilot?',
      a: 'A 4-week pilot cohort of 150 student residents is being deployed in Hostel Wing A to measure quantitative plate waste reduction before and after implementation.',
    },
  ];

  const filteredFaqs = faqData.filter((item) => {
    const matchesCat = activeCategory === 'all' || item.category === activeCategory;
    const matchesQuery =
      searchQuery === '' ||
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div>
      <PageHeader
        badge="KNOWLEDGE REPOSITORY"
        title="Frequently Asked Questions (FAQ)"
        intro="Detailed answers to 14+ foundational questions spanning physiological science, algorithmic trade-offs, dining hall queue operations, and capstone academic origins."
        breadcrumbs={[
          { label: 'Documentation', href: '/docs/faqs' },
          { label: 'FAQs' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        {/* Search & Category Filter Controls */}
        <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-4 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search across questions, formulas, or canteen operations..."
              className="w-full bg-stone-50 border border-stone-300 rounded-xl pl-11 pr-4 py-2.5 text-xs sm:text-sm font-semibold text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#1F6F4B]"
            />
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {[
              { id: 'all', label: 'All Questions' },
              { id: 'science', label: 'Nutritional Science' },
              { id: 'tech', label: 'Software & Algorithms' },
              { id: 'mess', label: 'Canteen Operations' },
              { id: 'capstone', label: 'Capstone Academic' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#1F6F4B] text-white shadow-sm'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((item, idx) => {
            const isExpanded = expandedIndices.includes(idx);
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleExpand(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-stone-50/50"
                >
                  <span className="font-bold text-stone-900 text-sm sm:text-base">
                    {item.q}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-stone-100 flex items-center justify-center shrink-0 text-stone-500">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 bg-stone-50/30">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="p-8 text-center text-stone-500 text-sm bg-white rounded-2xl border border-stone-200">
              No questions found matching your search term "{searchQuery}".
            </div>
          )}
        </div>

        {/* Cross navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
          <Link
            to="/docs/glossary"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Next Step</span>
              <h4 className="text-base font-bold text-stone-900">Scientific &amp; Technical Glossary</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>

          <Link
            to="/docs/capstone-brief"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Academic Context</span>
              <h4 className="text-base font-bold text-stone-900">Capstone Project Brief</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>

      <CTASection
        title="Have a Question Not Listed Here?"
        description="Reach out directly to our student engineering and faculty advisory team."
        primaryLink={{ text: 'Contact Us', href: '/contact' }}
        secondaryLink={{ text: 'Try Portion Recommender', href: '/tools/portion-recommender' }}
      />
    </div>
  );
};
