import React from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { CTASection } from '../../components/ui/CTASection';
import { Badge } from '../../components/ui/Badge';
import { ACTIVITY_MULTIPLIERS } from '../../utils/nutritionCalculators';
import { ActivityLevel } from '../../types';
import { Calculator, CheckCircle2, BookOpen, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BmiBmrTdee: React.FC = () => {
  return (
    <div>
      <PageHeader
        badge="PHYSIOLOGICAL MATHEMATICS"
        title="The Science: BMI, BMR, &amp; TDEE Equations"
        intro="A rigorous mathematical breakdown of the clinical nutritional formulas powering the Smart Meal Assistant, including the Mifflin-St Jeor equation, WHO body metrics, and physical activity coefficients."
        breadcrumbs={[
          { label: 'Technical', href: '/tech/architecture' },
          { label: 'BMI, BMR, & TDEE' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Formula 1: BMI */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-100 gap-2">
            <div>
              <Badge variant="mint">STAGE 1 PHYSIOLOGY</Badge>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
                1. Body Mass Index (BMI) Equation
              </h3>
            </div>
            <span className="text-xs font-mono font-bold text-[#1F6F4B] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              WHO Technical Report Series 854
            </span>
          </div>

          <div className="bg-stone-900 text-white p-4 sm:p-6 rounded-2xl font-mono text-center text-lg sm:text-xl border border-stone-800">
            BMI = Weight (kg) / [ Height (m) ]²
          </div>

          <p className="text-sm text-stone-700 leading-relaxed">
            BMI provides an initial statistical baseline of bodily mass relative to stature. While it does not differentiate lean skeletal muscle from adipose tissue, it serves as a lightweight epidemiological screen to flag students requiring caloric moderation or nutritional restoration.
          </p>
        </div>

        {/* Formula 2: Mifflin-St Jeor BMR */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-100 gap-2">
            <div>
              <Badge variant="forest">STAGE 3 PHYSIOLOGY</Badge>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
                2. Basal Metabolic Rate (Mifflin-St Jeor Formula)
              </h3>
            </div>
            <span className="text-xs font-mono font-bold text-[#1F6F4B] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Am J Clin Nutr 1990; 51:241-247
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-stone-900 text-white p-4 sm:p-5 rounded-2xl font-mono text-xs sm:text-sm border border-stone-800 space-y-2">
              <span className="text-[#6FCF97] font-bold text-xs uppercase block">For Males:</span>
              <p className="text-sm sm:text-base font-bold text-white">
                BMR = 10×W + 6.25×H − 5×A + 5
              </p>
              <span className="text-[11px] text-stone-400 block">W: kg | H: cm | A: years</span>
            </div>

            <div className="bg-stone-900 text-white p-4 sm:p-5 rounded-2xl font-mono text-xs sm:text-sm border border-stone-800 space-y-2">
              <span className="text-[#6FCF97] font-bold text-xs uppercase block">For Females:</span>
              <p className="text-sm sm:text-base font-bold text-white">
                BMR = 10×W + 6.25×H − 5×A − 161
              </p>
              <span className="text-[11px] text-stone-400 block">W: kg | H: cm | A: years</span>
            </div>
          </div>

          <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2 text-xs sm:text-sm text-stone-700">
            <span className="font-bold text-stone-900 block">Why Mifflin-St Jeor Won Over Harris-Benedict (1919):</span>
            <p>
              The American Dietetic Association's systematic review determined that the Mifflin-St Jeor equation predicts resting metabolic rate within 10% of indirect calorimetry in <strong>82% of healthy non-obese individuals</strong>, outperforming the historical Harris-Benedict formula (which systematically overestimates calorie requirements by 5–15%).
            </p>
          </div>
        </div>

        {/* Formula 3: TDEE */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-100 gap-2">
            <div>
              <Badge variant="mint">STAGE 3 COUPLING</Badge>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
                3. Total Daily Energy Expenditure (TDEE)
              </h3>
            </div>
            <span className="text-xs font-mono font-bold text-[#1F6F4B] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              FAO / WHO / UNU Expert Consultation
            </span>
          </div>

          <div className="bg-stone-900 text-white p-4 sm:p-6 rounded-2xl font-mono text-center text-lg sm:text-xl border border-stone-800">
            TDEE = BMR × Physical Activity Level (PAL) Multiplier
          </div>

          {/* PAL Multiplier Table */}
          <div className="overflow-x-auto pt-2">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-stone-200 font-bold text-stone-500 uppercase">
                  <th className="py-2.5 px-3">Activity Tier</th>
                  <th className="py-2.5 px-3">Multiplier</th>
                  <th className="py-2.5 px-3">Campus Context</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {(Object.keys(ACTIVITY_MULTIPLIERS) as ActivityLevel[]).map((level) => {
                  const item = ACTIVITY_MULTIPLIERS[level];
                  return (
                    <tr key={level} className="hover:bg-stone-50">
                      <td className="py-2.5 px-3 font-bold text-stone-900 capitalize">{level}</td>
                      <td className="py-2.5 px-3 font-mono font-bold text-[#1F6F4B]">×{item.value}</td>
                      <td className="py-2.5 px-3 text-stone-600">{item.description}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Worked Numerical Example */}
        <div className="bg-[#0E1B14] text-white rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl space-y-4">
          <Badge variant="mint">END-TO-END WORKED NUMERICAL PROOF</Badge>
          <h3 className="text-xl font-bold text-white">
            Worked Example: 20-Year-Old Male Student (68 kg, 175 cm)
          </h3>

          <div className="space-y-2 text-xs sm:text-sm font-mono text-stone-300">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10">
              <span className="text-[#6FCF97] font-bold block mb-1">Step 1: BMI Calculation</span>
              <span>BMI = 68 / (1.75)² = 68 / 3.0625 = <strong>22.2 kg/m²</strong> (Normal Weight)</span>
            </div>

            <div className="p-3 bg-white/5 rounded-xl border border-white/10">
              <span className="text-[#6FCF97] font-bold block mb-1">Step 2: BMR Calculation (Mifflin-St Jeor)</span>
              <span>BMR = 10(68) + 6.25(175) - 5(20) + 5 = 680 + 1093.75 - 100 + 5 = <strong>1,679 kcal/day</strong></span>
            </div>

            <div className="p-3 bg-white/5 rounded-xl border border-white/10">
              <span className="text-[#6FCF97] font-bold block mb-1">Step 3: TDEE on Moderate Activity Day (Gym Session)</span>
              <span>TDEE = 1,679 × 1.55 = <strong>2,602 kcal/day</strong></span>
            </div>

            <div className="p-3 bg-white/5 rounded-xl border border-white/10">
              <span className="text-[#6FCF97] font-bold block mb-1">Step 4: Lunch Allocation (35% of TDEE)</span>
              <span>Lunch Target = 2,602 × 0.35 = <strong>910 kcal</strong> → 2 scoops rice, 3 rotis, 1.5 bowls dal, salad</span>
            </div>
          </div>
        </div>

        {/* Cross navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/tools/portion-recommender"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Test Yourself</span>
              <h4 className="text-base font-bold text-stone-900">Run These Formulas on Your Own Body</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>

          <Link
            to="/tech/ai-ml-engine"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Next Step</span>
              <h4 className="text-base font-bold text-stone-900">Stage 4: AI/ML Recommendation Engine</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>

      <CTASection
        title="Explore the Interactive Calculators"
        description="Try our standalone BMI, BMR, and TDEE calculation tools."
        primaryLink={{ text: 'Open BMR Calculator', href: '/tools/bmr-calculator' }}
        secondaryLink={{ text: 'Open TDEE Calculator', href: '/tools/tdee-calculator' }}
      />
    </div>
  );
};
