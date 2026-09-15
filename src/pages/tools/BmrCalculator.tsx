import React, { useState } from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { CTASection } from '../../components/ui/CTASection';
import { Badge } from '../../components/ui/Badge';
import { calculateBMR } from '../../utils/nutritionCalculators';
import { Flame, Info, ArrowRight, Brain, Heart, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BmrCalculator: React.FC = () => {
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [age, setAge] = useState(20);
  const [heightCm, setHeightCm] = useState(175);
  const [weightKg, setWeightKg] = useState(68);

  const bmr = calculateBMR(gender, weightKg, heightCm, age);

  // Organ caloric allocation
  const liverKcal = Math.round(bmr * 0.27);
  const brainKcal = Math.round(bmr * 0.19);
  const muscleKcal = Math.round(bmr * 0.18);
  const kidneyKcal = Math.round(bmr * 0.10);
  const heartKcal = Math.round(bmr * 0.07);
  const otherKcal = bmr - (liverKcal + brainKcal + muscleKcal + kidneyKcal + heartKcal);

  return (
    <div>
      <PageHeader
        badge="CLINICALLY VALIDATED PHYSIOLOGY"
        title="Interactive BMR Calculator (Mifflin-St Jeor)"
        intro="Compute your Basal Metabolic Rate (BMR) — the non-negotiable calories your organs burn at complete rest. Discover why the Mifflin-St Jeor equation powers our recommendation engine."
        breadcrumbs={[
          { label: 'Tools', href: '/tools/portion-recommender' },
          { label: 'BMR Calculator' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inputs */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
            <div className="border-b border-stone-100 pb-4">
              <h2 className="text-xl font-bold text-stone-900 flex items-center">
                <Flame className="w-5 h-5 text-[#1F6F4B] mr-2" />
                Mifflin-St Jeor Parameters
              </h2>
              <p className="text-xs text-stone-500 mt-1">
                Men: 10×W + 6.25×H − 5×A + 5 | Women: 10×W + 6.25×H − 5×A − 161
              </p>
            </div>

            {/* Gender Toggle */}
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase mb-2">Biological Gender</label>
              <div className="grid grid-cols-2 gap-3">
                {(['male', 'female'] as const).map((g) => (
                  <button
                    key={g}
                    onClick={() => setGender(g)}
                    className={`py-3 rounded-xl text-xs font-bold capitalize border transition-all ${
                      gender === g
                        ? 'bg-[#1F6F4B] text-white border-[#1F6F4B] shadow-sm'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Age Slider */}
            <div>
              <div className="flex justify-between text-xs font-bold text-stone-700 uppercase mb-1">
                <span>Age:</span>
                <span className="text-[#1F6F4B] text-sm">{age} years</span>
              </div>
              <input
                type="range"
                min="16"
                max="40"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full accent-[#1F6F4B] cursor-pointer"
              />
            </div>

            {/* Height Slider */}
            <div>
              <div className="flex justify-between text-xs font-bold text-stone-700 uppercase mb-1">
                <span>Height:</span>
                <span className="text-[#1F6F4B] text-sm">{heightCm} cm</span>
              </div>
              <input
                type="range"
                min="140"
                max="210"
                value={heightCm}
                onChange={(e) => setHeightCm(Number(e.target.value))}
                className="w-full accent-[#1F6F4B] cursor-pointer"
              />
            </div>

            {/* Weight Slider */}
            <div>
              <div className="flex justify-between text-xs font-bold text-stone-700 uppercase mb-1">
                <span>Weight:</span>
                <span className="text-[#1F6F4B] text-sm">{weightKg} kg</span>
              </div>
              <input
                type="range"
                min="40"
                max="130"
                value={weightKg}
                onChange={(e) => setWeightKg(Number(e.target.value))}
                className="w-full accent-[#1F6F4B] cursor-pointer"
              />
            </div>

            <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200 text-xs text-stone-600 flex items-start space-x-2">
              <Info className="w-4 h-4 text-[#3BAA75] shrink-0 mt-0.5" />
              <span>
                <strong>Physiological Foundation:</strong> BMR accounts for 60–75% of your total daily caloric burn, even if you remain asleep in your dorm room 24 hours a day.
              </span>
            </div>
          </div>

          {/* Results & Organ Energy Breakdown */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#0E1B14] text-white rounded-3xl p-6 sm:p-8 border-2 border-[#3BAA75] shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                  Resting Caloric Requirement
                </span>
                <span className="text-xs text-[#6FCF97] font-semibold">Basal Energy</span>
              </div>

              <div className="py-6 text-center">
                <span className="text-5xl sm:text-6xl font-black text-[#6FCF97] tracking-tight">
                  {bmr}
                </span>
                <span className="text-sm font-semibold text-stone-300 block mt-1">kcal / day at complete rest</span>

                <p className="mt-3 text-xs text-stone-300 max-w-sm mx-auto">
                  This is the absolute floor of energy your body requires to keep your heart beating, lungs ventilating, and brain neurons firing.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/tools/tdee-calculator"
                  className="flex-1 bg-[#1F6F4B] hover:bg-[#28855a] text-white text-center font-bold text-xs py-2.5 rounded-xl flex items-center justify-center space-x-1"
                >
                  <span>Next: Apply Activity (TDEE)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/tools/portion-recommender"
                  className="flex-1 bg-[#6FCF97] hover:bg-[#5bbd84] text-[#0E1B14] text-center font-bold text-xs py-2.5 rounded-xl flex items-center justify-center space-x-1"
                >
                  <span>Meal Portion Demo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Resting Organ Calorie Distribution */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
              <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-2">
                Where Do Your {bmr} BMR Calories Go?
              </h3>
              <p className="text-xs text-stone-500 mb-4">
                Clinical breakdown of basal thermodynamic expenditure by internal organ systems:
              </p>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between p-2 rounded-lg bg-stone-50 border border-stone-200">
                  <span className="font-semibold text-stone-800">Liver &amp; Digestive Splanchnic Bed (27%)</span>
                  <span className="font-mono font-bold text-[#1F6F4B]">{liverKcal} kcal</span>
                </div>
                <div className="flex justify-between p-2 rounded-lg bg-stone-50 border border-stone-200">
                  <span className="font-semibold text-stone-800">Brain &amp; Central Nervous System (19%)</span>
                  <span className="font-mono font-bold text-[#1F6F4B]">{brainKcal} kcal</span>
                </div>
                <div className="flex justify-between p-2 rounded-lg bg-stone-50 border border-stone-200">
                  <span className="font-semibold text-stone-800">Skeletal Muscle Tone (18%)</span>
                  <span className="font-mono font-bold text-[#1F6F4B]">{muscleKcal} kcal</span>
                </div>
                <div className="flex justify-between p-2 rounded-lg bg-stone-50 border border-stone-200">
                  <span className="font-semibold text-stone-800">Kidneys &amp; Renal Filtration (10%)</span>
                  <span className="font-mono font-bold text-[#1F6F4B]">{kidneyKcal} kcal</span>
                </div>
                <div className="flex justify-between p-2 rounded-lg bg-stone-50 border border-stone-200">
                  <span className="font-semibold text-stone-800">Heart &amp; Cardiac Output (7%)</span>
                  <span className="font-mono font-bold text-[#1F6F4B]">{heartKcal} kcal</span>
                </div>
                <div className="flex justify-between p-2 rounded-lg bg-stone-50 border border-stone-200">
                  <span className="font-semibold text-stone-800">Lungs &amp; Residual Cellular Metabolism (19%)</span>
                  <span className="font-mono font-bold text-[#1F6F4B]">{otherKcal} kcal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTASection
        title="Multiply BMR by Daily Activity for True Need"
        description="A student’s BMR is constant, but daily activity multiplies caloric demand from 1.2x to 1.9x. See the TDEE calculator in action."
        primaryLink={{ text: 'Calculate Daily TDEE', href: '/tools/tdee-calculator' }}
        secondaryLink={{ text: 'Compare Nutrition Charts', href: '/solution/comparison' }}
      />
    </div>
  );
};
