import React, { useState } from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { CTASection } from '../../components/ui/CTASection';
import { Badge } from '../../components/ui/Badge';
import { ACTIVITY_MULTIPLIERS, calculateBMR, calculateTDEE } from '../../utils/nutritionCalculators';
import { ActivityLevel } from '../../types';
import { Zap, Info, ArrowRight, BatteryCharging, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TdeeCalculator: React.FC = () => {
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [age, setAge] = useState(20);
  const [heightCm, setHeightCm] = useState(175);
  const [weightKg, setWeightKg] = useState(68);
  const [activityLevel, setActivityLevel] = useState<ActivityLevel>('moderate');

  const bmr = calculateBMR(gender, weightKg, heightCm, age);
  const tdee = calculateTDEE(bmr, activityLevel);
  const activeMultiplier = ACTIVITY_MULTIPLIERS[activityLevel];

  // Meal breakdown
  const breakfastKcal = Math.round(tdee * 0.25);
  const lunchKcal = Math.round(tdee * 0.35);
  const dinnerKcal = Math.round(tdee * 0.30);
  const snackKcal = Math.round(tdee * 0.10);

  // Mismatch comparison
  const sedentaryTdee = calculateTDEE(bmr, 'sedentary');
  const activeTdee = calculateTDEE(bmr, 'active');
  const mismatchDelta = activeTdee - sedentaryTdee;

  return (
    <div>
      <PageHeader
        badge="DYNAMIC ENERGY BALANCING"
        title="Interactive TDEE Calculator (Total Daily Energy Expenditure)"
        intro="Total Daily Energy Expenditure pairs your basal metabolic floor with dynamic activity coefficients. Discover why a student's daily need can swing by over 800 kcal depending on campus physical exertion."
        breadcrumbs={[
          { label: 'Tools', href: '/tools/portion-recommender' },
          { label: 'TDEE Calculator' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inputs */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
            <div className="border-b border-stone-100 pb-4">
              <h2 className="text-xl font-bold text-stone-900 flex items-center">
                <Zap className="w-5 h-5 text-[#1F6F4B] mr-2" />
                Select Activity Level &amp; Biological Metrics
              </h2>
              <p className="text-xs text-stone-500 mt-1">
                TDEE = BMR × Activity Multiplier (from 1.2 to 1.9)
              </p>
            </div>

            {/* Quick biological inputs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-stone-50 p-4 rounded-2xl border border-stone-200">
              <div>
                <label className="block text-[10px] font-bold text-stone-500 uppercase">Gender</label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value as 'male' | 'female')}
                  className="w-full bg-white border border-stone-300 rounded-lg p-1.5 text-xs font-bold text-stone-800 mt-1"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-stone-500 uppercase">Age</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full bg-white border border-stone-300 rounded-lg p-1.5 text-xs font-bold text-stone-800 mt-1"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-stone-500 uppercase">Height (cm)</label>
                <input
                  type="number"
                  value={heightCm}
                  onChange={(e) => setHeightCm(Number(e.target.value))}
                  className="w-full bg-white border border-stone-300 rounded-lg p-1.5 text-xs font-bold text-stone-800 mt-1"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-stone-500 uppercase">Weight (kg)</label>
                <input
                  type="number"
                  value={weightKg}
                  onChange={(e) => setWeightKg(Number(e.target.value))}
                  className="w-full bg-white border border-stone-300 rounded-lg p-1.5 text-xs font-bold text-stone-800 mt-1"
                />
              </div>
            </div>

            {/* Activity Multiplier Selection */}
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                Today's Activity Multiplier Tier:
              </label>
              <div className="space-y-2">
                {(Object.keys(ACTIVITY_MULTIPLIERS) as ActivityLevel[]).map((level) => {
                  const item = ACTIVITY_MULTIPLIERS[level];
                  const isSelected = activityLevel === level;
                  return (
                    <div
                      key={level}
                      onClick={() => setActivityLevel(level)}
                      className={`cursor-pointer p-3.5 rounded-2xl border transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#0E1B14] border-[#3BAA75] text-white shadow-md ring-1 ring-[#3BAA75]'
                          : 'bg-stone-50 border-stone-200 text-stone-800 hover:bg-stone-100'
                      }`}
                    >
                      <div className="pr-2">
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-sm">{item.label}</span>
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded font-mono font-bold ${
                              isSelected ? 'bg-[#3BAA75] text-white' : 'bg-stone-200 text-stone-700'
                            }`}
                          >
                            ×{item.value}
                          </span>
                        </div>
                        <p className={`text-xs mt-1 leading-tight ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                          {item.description}
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className={`text-sm font-extrabold font-mono ${isSelected ? 'text-[#6FCF97]' : 'text-stone-900'}`}>
                          {Math.round(bmr * item.value)} kcal
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* The 50% Mismatch Demonstration Block */}
            <div className="bg-amber-50/80 rounded-2xl p-4 border border-amber-200 text-xs text-amber-900">
              <div className="flex items-center space-x-2 font-bold mb-1 text-amber-950">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Field Research Insight: The 50% Energy Mismatch</span>
              </div>
              <p className="leading-relaxed">
                Notice that for this same student, a <strong>Sedentary</strong> day burns <strong>{sedentaryTdee} kcal</strong> while an <strong>Active</strong> training day burns <strong>{activeTdee} kcal</strong> — a swing of <strong>{mismatchDelta} kcal (+{Math.round((mismatchDelta / sedentaryTdee) * 100)}%)</strong>. Without a smart assistant, both days receive the exact same 3-roti plate in the mess!
              </p>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0E1B14] text-white rounded-3xl p-6 sm:p-8 border-2 border-[#3BAA75] shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                  Total Daily Caloric Need
                </span>
                <span className="text-xs text-[#6FCF97] font-semibold">TDEE Output</span>
              </div>

              <div className="py-6 text-center">
                <span className="text-5xl sm:text-6xl font-black text-[#6FCF97] tracking-tight">
                  {tdee}
                </span>
                <span className="text-sm font-semibold text-stone-300 block mt-1">kcal / day total burn</span>

                <div className="mt-3 text-xs text-stone-300">
                  <span>Base BMR ({bmr} kcal) × Multiplier ({activeMultiplier.value})</span>
                </div>
              </div>

              {/* Meal-by-Meal Caloric Allocation */}
              <div className="pt-4 border-t border-white/10 space-y-2 text-xs">
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
                  Campus Mess Meal Calorie Partitioning:
                </span>
                <div className="flex justify-between p-2 rounded-lg bg-white/5">
                  <span>Breakfast (25%)</span>
                  <span className="font-mono font-bold text-[#6FCF97]">{breakfastKcal} kcal</span>
                </div>
                <div className="flex justify-between p-2 rounded-lg bg-white/10 font-semibold text-white">
                  <span>Lunch (35% — Peak Meal)</span>
                  <span className="font-mono font-bold text-[#6FCF97]">{lunchKcal} kcal</span>
                </div>
                <div className="flex justify-between p-2 rounded-lg bg-white/5">
                  <span>Dinner (30%)</span>
                  <span className="font-mono font-bold text-[#6FCF97]">{dinnerKcal} kcal</span>
                </div>
                <div className="flex justify-between p-2 rounded-lg bg-white/5 text-stone-400">
                  <span>Evening Snack (10%)</span>
                  <span className="font-mono font-bold text-stone-300">{snackKcal} kcal</span>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  to="/tools/portion-recommender"
                  className="w-full bg-[#6FCF97] hover:bg-[#5bbd84] text-[#0E1B14] text-center font-bold text-xs py-3 rounded-xl flex items-center justify-center space-x-1 transition-all"
                >
                  <span>Translate TDEE Into Canteen Scoops</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTASection
        title="Experience the Mobile App in Action"
        description="See how these TDEE calculations appear on student screens during active 1:00 PM lunch rushes."
        primaryLink={{ text: 'Explore Mobile App Mockups', href: '/tools/app-preview' }}
        secondaryLink={{ text: 'View System Architecture', href: '/tech/architecture' }}
      />
    </div>
  );
};
