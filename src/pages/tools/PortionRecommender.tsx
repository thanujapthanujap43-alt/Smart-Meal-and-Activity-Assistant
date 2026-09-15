import React, { useState } from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { CTASection } from '../../components/ui/CTASection';
import { Badge } from '../../components/ui/Badge';
import { ACTIVITY_MULTIPLIERS, computePortionRecommendation } from '../../utils/nutritionCalculators';
import { ActivityLevel, StudentProfileInput } from '../../types';
import { Sparkles, Utensils, CheckCircle2, RotateCcw, AlertCircle, Info, ChevronRight, Apple, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PortionRecommender: React.FC = () => {
  const [profile, setProfile] = useState<StudentProfileInput>({
    gender: 'male',
    age: 20,
    heightCm: 175,
    weightKg: 68,
    activityLevel: 'moderate',
    mealType: 'lunch',
    dietaryPreference: 'regular',
  });

  const [counterMode, setCounterMode] = useState<boolean>(false);
  const [userFeedback, setUserFeedback] = useState<string | null>(null);

  const result = computePortionRecommendation(profile);

  const presets = [
    {
      name: 'Sedentary Student (Library Study)',
      data: { gender: 'female' as const, age: 19, heightCm: 162, weightKg: 54, activityLevel: 'sedentary' as ActivityLevel, mealType: 'lunch' as const, dietaryPreference: 'regular' as const },
    },
    {
      name: 'Varsity Athlete (Evening Practice)',
      data: { gender: 'male' as const, age: 21, heightCm: 182, weightKg: 78, activityLevel: 'active' as ActivityLevel, mealType: 'dinner' as const, dietaryPreference: 'regular' as const },
    },
    {
      name: 'Vegetarian Gym-Goer',
      data: { gender: 'male' as const, age: 20, heightCm: 176, weightKg: 71, activityLevel: 'moderate' as ActivityLevel, mealType: 'lunch' as const, dietaryPreference: 'vegetarian' as const },
    },
    {
      name: 'Lactose-Free Fresher',
      data: { gender: 'female' as const, age: 18, heightCm: 165, weightKg: 58, activityLevel: 'light' as ActivityLevel, mealType: 'dinner' as const, dietaryPreference: 'lactose_intolerant' as const },
    },
  ];

  return (
    <div>
      <PageHeader
        badge="INTERACTIVE ENGINE DEMO"
        title="Live Portion Recommender Demo"
        intro="Simulate the under-10-second portion decision engine. Enter your biological metrics and today's activity level to generate your personalized campus mess meal card."
        breadcrumbs={[
          { label: 'Tools', href: '/tools/portion-recommender' },
          { label: 'Portion Recommender' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Preset quick buttons */}
        <div className="bg-white rounded-2xl p-4 border border-stone-200 mb-8 shadow-sm">
          <div className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2 flex items-center">
            <Sparkles className="w-3.5 h-3.5 text-[#3BAA75] mr-1" />
            <span>Quick Test Student Archetypes:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {presets.map((p, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setProfile(p.data);
                  setUserFeedback(null);
                }}
                className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-stone-100 text-stone-800 hover:bg-[#6FCF97]/20 hover:text-[#1F6F4B] hover:border-[#3BAA75] border border-stone-200 transition-all"
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Inputs (Left Column - 7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-stone-100">
              <h2 className="text-xl font-bold text-stone-900 flex items-center">
                <Utensils className="w-5 h-5 text-[#1F6F4B] mr-2" />
                Student Physiological Profile
              </h2>
              <button
                onClick={() => {
                  setProfile({
                    gender: 'male',
                    age: 20,
                    heightCm: 175,
                    weightKg: 68,
                    activityLevel: 'moderate',
                    mealType: 'lunch',
                    dietaryPreference: 'regular',
                  });
                  setUserFeedback(null);
                }}
                className="text-xs text-stone-500 hover:text-[#1F6F4B] flex items-center"
              >
                <RotateCcw className="w-3.5 h-3.5 mr-1" /> Reset
              </button>
            </div>

            {/* Gender & Age */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  Biological Gender (BMR Formula)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {(['male', 'female'] as const).map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setProfile({ ...profile, gender: g })}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold capitalize border transition-all ${
                        profile.gender === g
                          ? 'bg-[#1F6F4B] text-white border-[#1F6F4B] shadow-sm'
                          : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  Age (Years): <span className="text-[#1F6F4B]">{profile.age}</span>
                </label>
                <input
                  type="range"
                  min="16"
                  max="35"
                  value={profile.age}
                  onChange={(e) => setProfile({ ...profile, age: Number(e.target.value) })}
                  className="w-full accent-[#1F6F4B] cursor-pointer mt-2"
                />
                <div className="flex justify-between text-[10px] text-stone-400 mt-1">
                  <span>16 yrs</span>
                  <span>25 yrs</span>
                  <span>35 yrs</span>
                </div>
              </div>
            </div>

            {/* Height & Weight */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  Height: <span className="text-[#1F6F4B]">{profile.heightCm} cm</span> ({(profile.heightCm / 100).toFixed(2)} m)
                </label>
                <input
                  type="range"
                  min="140"
                  max="210"
                  value={profile.heightCm}
                  onChange={(e) => setProfile({ ...profile, heightCm: Number(e.target.value) })}
                  className="w-full accent-[#1F6F4B] cursor-pointer mt-2"
                />
                <div className="flex justify-between text-[10px] text-stone-400 mt-1">
                  <span>140 cm</span>
                  <span>175 cm</span>
                  <span>210 cm</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  Weight: <span className="text-[#1F6F4B]">{profile.weightKg} kg</span> ({(profile.weightKg * 2.20462).toFixed(1)} lbs)
                </label>
                <input
                  type="range"
                  min="40"
                  max="130"
                  value={profile.weightKg}
                  onChange={(e) => setProfile({ ...profile, weightKg: Number(e.target.value) })}
                  className="w-full accent-[#1F6F4B] cursor-pointer mt-2"
                />
                <div className="flex justify-between text-[10px] text-stone-400 mt-1">
                  <span>40 kg</span>
                  <span>85 kg</span>
                  <span>130 kg</span>
                </div>
              </div>
            </div>

            {/* Activity Level Selection */}
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                Today's Physical Activity Level (Dynamic Context)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {(Object.keys(ACTIVITY_MULTIPLIERS) as ActivityLevel[]).map((level) => {
                  const meta = ACTIVITY_MULTIPLIERS[level];
                  const isSelected = profile.activityLevel === level;
                  return (
                    <button
                      key={level}
                      type="button"
                      onClick={() => setProfile({ ...profile, activityLevel: level })}
                      className={`text-left p-3 rounded-xl border transition-all ${
                        isSelected
                          ? 'bg-[#0E1B14] border-[#3BAA75] text-white shadow-sm ring-1 ring-[#3BAA75]'
                          : 'bg-stone-50 border-stone-200 text-stone-800 hover:bg-stone-100'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold">{meta.label}</span>
                        <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${isSelected ? 'bg-[#3BAA75] text-white' : 'bg-stone-200 text-stone-700'}`}>
                          {meta.value}x
                        </span>
                      </div>
                      <p className={`text-[10px] mt-1 leading-snug ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                        {meta.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Meal Type & Dietary Preference */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  Meal Being Served
                </label>
                <select
                  value={profile.mealType}
                  onChange={(e) => setProfile({ ...profile, mealType: e.target.value as StudentProfileInput['mealType'] })}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2.5 text-xs font-semibold text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#1F6F4B]"
                >
                  <option value="breakfast">Breakfast (~25% TDEE)</option>
                  <option value="lunch">Lunch (~35% TDEE)</option>
                  <option value="dinner">Dinner (~30% TDEE)</option>
                  <option value="snack">Evening Snack (~10% TDEE)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  Dietary Restriction / Preference
                </label>
                <select
                  value={profile.dietaryPreference}
                  onChange={(e) => setProfile({ ...profile, dietaryPreference: e.target.value as StudentProfileInput['dietaryPreference'] })}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2.5 text-xs font-semibold text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#1F6F4B]"
                >
                  <option value="regular">Standard / Non-Restricted</option>
                  <option value="vegetarian">Vegetarian (Requires plant protein)</option>
                  <option value="vegan">Vegan (Zero dairy/animal foods)</option>
                  <option value="lactose_intolerant">Lactose Intolerant (Skip dairy gravies)</option>
                  <option value="gluten_free">Gluten Sensitive (Rice over chapati)</option>
                </select>
              </div>
            </div>

            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-600 flex items-center justify-between">
              <span className="flex items-center">
                <Info className="w-4 h-4 text-[#3BAA75] mr-1.5 shrink-0" />
                Computation time: <strong>&lt; 12ms</strong> (Pure client-side math)
              </span>
              <span className="text-[11px] text-[#1F6F4B] font-bold">Zero GPU / Server Overhead</span>
            </div>
          </div>

          {/* Results: Generated Meal Card (Right Column - 5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                Point of Serving Display
              </span>
              <button
                onClick={() => setCounterMode(!counterMode)}
                className="text-xs font-bold text-[#1F6F4B] bg-[#6FCF97]/20 hover:bg-[#6FCF97]/40 px-2.5 py-1 rounded-lg transition-colors"
              >
                {counterMode ? 'Show Full Physiology' : 'Simulate Mess Counter Mode'}
              </button>
            </div>

            {/* The Smart Meal Card */}
            <div
              id="student-meal-card"
              className="bg-[#0E1B14] text-white rounded-3xl p-6 border-2 border-[#3BAA75] shadow-xl relative overflow-hidden"
            >
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-white/15">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-lg bg-[#1F6F4B] flex items-center justify-center text-white">
                    <Utensils className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white capitalize">{profile.mealType} Portion Guide</h3>
                    <span className="text-[10px] text-stone-400 uppercase tracking-wider">
                      Student ID: #STU-2026-B
                    </span>
                  </div>
                </div>

                <div
                  className={`px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider ${
                    result.portionTier === 'Light'
                      ? 'bg-amber-400 text-amber-950'
                      : result.portionTier === 'Extra'
                      ? 'bg-[#6FCF97] text-[#0E1B14]'
                      : 'bg-emerald-600 text-white'
                  }`}
                >
                  {result.portionTier} Tier
                </div>
              </div>

              {/* Large Calorie & Tier Callout */}
              <div className="my-5 text-center">
                <span className="text-[11px] font-bold text-stone-400 uppercase tracking-widest block">
                  Target Meal Energy
                </span>
                <div className="text-4xl font-black text-[#6FCF97] mt-0.5 tracking-tight flex items-center justify-center space-x-1">
                  <Flame className="w-7 h-7 text-amber-400 inline" />
                  <span>{result.mealCalorieBudget}</span>
                  <span className="text-sm font-semibold text-stone-300">kcal</span>
                </div>
                <p className="text-xs text-stone-300 mt-1 max-w-xs mx-auto">
                  {result.portionTier === 'Light' && '0.8x standard portion — light metabolic expenditure today'}
                  {result.portionTier === 'Standard' && '1.0x standard portion — balanced academic & campus routine'}
                  {result.portionTier === 'Extra' && '1.25x portion — elevated glycogen burn from sports/training'}
                </p>
              </div>

              {/* Concrete Mess Scoops - The Counter Staff Guidance */}
              <div className="bg-white/10 rounded-2xl p-4 border border-white/10 my-4 space-y-2">
                <span className="text-[11px] font-bold text-[#6FCF97] uppercase tracking-wider block">
                  Canteen Server Scoops:
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-white/5 p-2 rounded-xl">
                    <span className="text-stone-400 block text-[10px]">Grains (Rice / Roti)</span>
                    <span className="font-extrabold text-sm text-white">
                      {result.breakdown.recommendedGrainScoops} scoops / {Math.round(result.breakdown.recommendedGrainScoops * 1.5)} rotis
                    </span>
                  </div>
                  <div className="bg-white/5 p-2 rounded-xl">
                    <span className="text-stone-400 block text-[10px]">Protein (Dal / Paneer)</span>
                    <span className="font-extrabold text-sm text-white">
                      {result.breakdown.curryDalCups} cups ({result.breakdown.proteinGrams}g pro)
                    </span>
                  </div>
                  <div className="bg-white/5 p-2 rounded-xl">
                    <span className="text-stone-400 block text-[10px]">Vegetables &amp; Greens</span>
                    <span className="font-extrabold text-sm text-white">
                      {result.breakdown.vegetablesSaladBowls} bowl
                    </span>
                  </div>
                  <div className="bg-white/5 p-2 rounded-xl">
                    <span className="text-stone-400 block text-[10px]">Total Macros</span>
                    <span className="font-mono text-xs text-stone-300">
                      {result.breakdown.carbsGrams}C / {result.breakdown.proteinGrams}P / {result.breakdown.fatGrams}F
                    </span>
                  </div>
                </div>
              </div>

              {/* Rationale & Diet note */}
              <div className="text-xs text-stone-300 bg-white/5 p-3 rounded-xl border border-white/5 leading-relaxed">
                <strong className="text-white">Rationale:</strong> {result.rationale}
              </div>

              {/* Counter Serving Mode: Toggle info */}
              {!counterMode && (
                <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="bg-white/5 p-2 rounded-lg">
                    <span className="text-[10px] text-stone-400 block">BMI</span>
                    <span className="font-bold text-white">{result.bmi} ({result.bmiCategory})</span>
                  </div>
                  <div className="bg-white/5 p-2 rounded-lg">
                    <span className="text-[10px] text-stone-400 block">BMR (Mifflin)</span>
                    <span className="font-bold text-white">{result.bmr} kcal</span>
                  </div>
                  <div className="bg-white/5 p-2 rounded-lg">
                    <span className="text-[10px] text-stone-400 block">Daily TDEE</span>
                    <span className="font-bold text-white">{result.tdee} kcal</span>
                  </div>
                </div>
              )}

              {/* Stage 6: User Satiety Feedback Loop */}
              <div className="mt-4 pt-3 border-t border-white/10">
                <span className="text-[10px] text-stone-400 uppercase tracking-wider block mb-2">
                  Continuous Feedback Loop (Post-Meal Satiety):
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: 'Too Little', emoji: '😕' },
                    { label: 'Just Right', emoji: '👌' },
                    { label: 'Too Heavy', emoji: '😴' },
                  ].map((fb) => (
                    <button
                      key={fb.label}
                      onClick={() => setUserFeedback(fb.label)}
                      className={`py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center space-x-1 border transition-all ${
                        userFeedback === fb.label
                          ? 'bg-[#6FCF97] text-[#0E1B14] border-[#6FCF97] font-bold'
                          : 'bg-white/5 text-stone-300 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <span>{fb.emoji}</span>
                      <span>{fb.label}</span>
                    </button>
                  ))}
                </div>
                {userFeedback && (
                  <p className="text-[11px] text-[#6FCF97] mt-2 flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1 shrink-0" />
                    Feedback "{userFeedback}" recorded. Tuning algorithm calibration for next meal.
                  </p>
                )}
              </div>
            </div>

            {/* Disclaimer pill */}
            <div className="bg-stone-100 rounded-xl p-3 border border-stone-200 text-[11px] text-stone-600 flex items-start space-x-2">
              <Info className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
              <span>
                <strong>Research Note:</strong> Estimates for educational purposes — not medical advice. Real hostel implementations integrate with mess student ID cards for 1-tap activation.
              </span>
            </div>

            <div className="flex justify-between items-center text-xs text-stone-600 pt-2 px-1">
              <Link to="/tools/bmi-calculator" className="hover:text-[#1F6F4B] underline">
                BMI Calculator →
              </Link>
              <Link to="/tools/bmr-calculator" className="hover:text-[#1F6F4B] underline">
                BMR Calculator →
              </Link>
              <Link to="/tools/tdee-calculator" className="hover:text-[#1F6F4B] underline">
                TDEE Calculator →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <CTASection
        title="Deploy This Portion Engine in Your Campus Mess"
        description="Join our active 4-week hostel pilot to test the recommendation engine with real students and measure plate waste reduction."
        primaryLink={{ text: 'Join Campus Pilot', href: '/get-involved' }}
        secondaryLink={{ text: 'Explore System Architecture', href: '/tech/architecture' }}
      />
    </div>
  );
};
