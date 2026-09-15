import React, { useState } from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { CTASection } from '../../components/ui/CTASection';
import { Badge } from '../../components/ui/Badge';
import { calculateBMI } from '../../utils/nutritionCalculators';
import { Info, ArrowRight, Activity, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BmiCalculator: React.FC = () => {
  const [heightCm, setHeightCm] = useState(172);
  const [weightKg, setWeightKg] = useState(65);

  const { bmi, category, color } = calculateBMI(weightKg, heightCm);

  const categories = [
    { label: 'Underweight', range: '< 18.5', color: 'bg-amber-100 text-amber-800 border-amber-300', desc: 'Higher nutritional risk, muscle recovery priority' },
    { label: 'Normal Weight', range: '18.5 – 24.9', color: 'bg-emerald-100 text-emerald-800 border-emerald-300', desc: 'Standard caloric equilibrium zone' },
    { label: 'Overweight', range: '25.0 – 29.9', color: 'bg-orange-100 text-orange-800 border-orange-300', desc: 'High risk of food surplus and afternoon lethargy' },
    { label: 'Obese', range: '≥ 30.0', color: 'bg-red-100 text-red-800 border-red-300', desc: 'Cardiometabolic attention recommended' },
  ];

  return (
    <div>
      <PageHeader
        badge="PHYSIOLOGICAL SCREENING TOOL"
        title="Interactive BMI Calculator"
        intro="Calculate your Body Mass Index (BMI) using WHO standard epidemiological formulas. Learn why BMI serves as a foundational baseline before layering BMR and daily activity multipliers."
        breadcrumbs={[
          { label: 'Tools', href: '/tools/portion-recommender' },
          { label: 'BMI Calculator' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Calculator Form */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
            <div className="border-b border-stone-100 pb-4">
              <h2 className="text-xl font-bold text-stone-900 flex items-center">
                <Activity className="w-5 h-5 text-[#1F6F4B] mr-2" />
                Input Measurements
              </h2>
              <p className="text-xs text-stone-500 mt-1">
                Formula: BMI = weight(kg) / [height(m)]²
              </p>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-stone-700 uppercase mb-1">
                <span>Height:</span>
                <span className="text-[#1F6F4B] text-sm">{heightCm} cm ({(heightCm / 100).toFixed(2)} m)</span>
              </div>
              <input
                type="range"
                min="135"
                max="215"
                value={heightCm}
                onChange={(e) => setHeightCm(Number(e.target.value))}
                className="w-full accent-[#1F6F4B] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-stone-400 mt-1">
                <span>135 cm</span>
                <span>175 cm</span>
                <span>215 cm</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-stone-700 uppercase mb-1">
                <span>Weight:</span>
                <span className="text-[#1F6F4B] text-sm">{weightKg} kg ({(weightKg * 2.20462).toFixed(1)} lbs)</span>
              </div>
              <input
                type="range"
                min="35"
                max="140"
                value={weightKg}
                onChange={(e) => setWeightKg(Number(e.target.value))}
                className="w-full accent-[#1F6F4B] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-stone-400 mt-1">
                <span>35 kg</span>
                <span>80 kg</span>
                <span>140 kg</span>
              </div>
            </div>

            {/* Quick numerical inputs */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-200">
                <label className="block text-[10px] font-bold text-stone-500 uppercase">Exact Height (cm)</label>
                <input
                  type="number"
                  value={heightCm}
                  onChange={(e) => setHeightCm(Math.max(100, Math.min(240, Number(e.target.value))))}
                  className="w-full bg-white border border-stone-300 rounded-lg p-1.5 text-sm font-bold text-stone-800 mt-1"
                />
              </div>
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-200">
                <label className="block text-[10px] font-bold text-stone-500 uppercase">Exact Weight (kg)</label>
                <input
                  type="number"
                  value={weightKg}
                  onChange={(e) => setWeightKg(Math.max(30, Math.min(200, Number(e.target.value))))}
                  className="w-full bg-white border border-stone-300 rounded-lg p-1.5 text-sm font-bold text-stone-800 mt-1"
                />
              </div>
            </div>

            <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200 text-xs text-stone-600 flex items-start space-x-2">
              <Info className="w-4 h-4 text-[#3BAA75] shrink-0 mt-0.5" />
              <span>
                <strong>Educational Note:</strong> Estimates for educational purposes — not medical advice. BMI provides a fast statistical baseline, but does not differentiate lean muscle from adipose tissue.
              </span>
            </div>
          </div>

          {/* Result Card & WHO Categories */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#0E1B14] text-white rounded-3xl p-6 sm:p-8 border-2 border-[#3BAA75] shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                  Calculated BMI Result
                </span>
                <span className="text-xs text-[#6FCF97] font-semibold">WHO Baseline</span>
              </div>

              <div className="py-6 text-center">
                <span className="text-5xl sm:text-6xl font-black text-[#6FCF97] tracking-tight">
                  {bmi}
                </span>
                <span className="text-sm font-semibold text-stone-300 block mt-1">kg / m²</span>

                <div className="mt-4 inline-block px-4 py-1.5 rounded-full text-sm font-extrabold uppercase tracking-wider bg-white/10 text-white border border-white/20">
                  Category: <span className="text-[#6FCF97]">{category}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-stone-300 leading-relaxed">
                <p>
                  At a BMI of <strong>{bmi}</strong>, your baseline body mass is classified as <strong>{category}</strong>. In our 6-stage architecture, BMI is forwarded to Stage 3 to calculate your basal metabolic baseline alongside Mifflin-St Jeor.
                </p>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/tools/bmr-calculator"
                  className="flex-1 bg-[#1F6F4B] hover:bg-[#28855a] text-white text-center font-bold text-xs py-2.5 rounded-xl flex items-center justify-center space-x-1"
                >
                  <span>Step 2: Calculate BMR</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/tools/portion-recommender"
                  className="flex-1 bg-[#6FCF97] hover:bg-[#5bbd84] text-[#0E1B14] text-center font-bold text-xs py-2.5 rounded-xl flex items-center justify-center space-x-1"
                >
                  <span>Full Portion Recommender</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* WHO Classification Breakdown */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
              <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-4">
                World Health Organization (WHO) BMI Ranges
              </h3>
              <div className="space-y-2.5">
                {categories.map((c) => {
                  const isUserTier = c.label.toLowerCase().includes(category.toLowerCase());
                  return (
                    <div
                      key={c.label}
                      className={`p-3 rounded-xl border text-xs flex items-center justify-between transition-all ${
                        isUserTier
                          ? 'border-[#1F6F4B] bg-emerald-50/70 ring-1 ring-[#1F6F4B]'
                          : 'border-stone-200 bg-stone-50'
                      }`}
                    >
                      <div>
                        <span className="font-bold text-stone-900 block">{c.label}</span>
                        <span className="text-[11px] text-stone-500">{c.desc}</span>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="font-mono font-bold text-xs text-stone-800">{c.range}</span>
                        {isUserTier && (
                          <span className="block text-[10px] font-bold text-[#1F6F4B] uppercase">Your Tier</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTASection
        title="Move Beyond Static BMI into Real Meal Portions"
        description="BMI only tells half the story. Pair it with your daily physical activity in our live recommender demo."
        primaryLink={{ text: 'Try Live Portion Recommender', href: '/tools/portion-recommender' }}
        secondaryLink={{ text: 'Learn BMR Science', href: '/tech/bmi-bmr-tdee' }}
      />
    </div>
  );
};
