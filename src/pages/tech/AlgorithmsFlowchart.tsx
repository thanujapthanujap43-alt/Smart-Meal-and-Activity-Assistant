import React from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { CTASection } from '../../components/ui/CTASection';
import { Badge } from '../../components/ui/Badge';
import { GitBranch, Code, CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AlgorithmsFlowchart: React.FC = () => {
  const pseudoCode = `// Deterministic Portion Calculation & Clamping Kernel
function calculateOptimalMealPortion(
  profile: StudentProfile,
  activity: ActivityLevel,
  mealType: 'breakfast' | 'lunch' | 'dinner',
  adaptationFactor: number = 1.0
): PortionRecommendation {
  
  // 1. Compute Basal Metabolic Rate via Mifflin-St Jeor
  const bmr = (profile.gender === 'male')
    ? (10 * profile.weightKg) + (6.25 * profile.heightCm) - (5 * profile.age) + 5
    : (10 * profile.weightKg) + (6.25 * profile.heightCm) - (5 * profile.age) - 161;

  // 2. Derive Total Daily Energy Expenditure (TDEE)
  const palMultiplier = ACTIVITY_MULTIPLIERS[activity].value;
  const tdee = Math.round(bmr * palMultiplier * adaptationFactor);

  // 3. Partition by Meal Target (Lunch = 35% of daily TDEE)
  const mealRatios = { breakfast: 0.25, lunch: 0.35, dinner: 0.30 };
  const targetMealKcal = Math.round(tdee * mealRatios[mealType]);

  // 4. Quantize into Physical Canteen Scoop Units
  let grainScoops: number;
  let rotiCount: number;
  let dalBowls: number;

  if (targetMealKcal < 600) {
    // Sedentary / Rest Day Clamp
    grainScoops = 1.0; // 1 ladle cooked rice (150 kcal)
    rotiCount = 2;     // 2 chapatis (160 kcal)
    dalBowls = 1.0;    // 1 full katori dal (140 kcal)
  } else if (targetMealKcal <= 850) {
    // Moderate Campus Activity
    grainScoops = 2.0; // 2 ladles cooked rice (300 kcal)
    rotiCount = 3;     // 3 chapatis (240 kcal)
    dalBowls = 1.5;    // 1.5 katori dal (210 kcal)
  } else {
    // High Activity / Varsity Conditioning
    grainScoops = 2.5; // 2.5 ladles cooked rice (375 kcal)
    rotiCount = 4;     // 4 chapatis (320 kcal)
    dalBowls = 2.0;    // 2 full katoris dal (280 kcal)
  }

  return {
    targetMealKcal,
    grainScoops,
    rotiCount,
    dalBowls,
    saladRecommendation: '1 full fresh bowl (non-caloric satiety volume)',
    executionTimeMs: 0.12
  };
}`;

  return (
    <div>
      <PageHeader
        badge="LOGICAL SPECIFICATION"
        title="Decision Flowchart &amp; Core Algorithm"
        intro="Inspect the complete decision tree, branching rules, safety clamp thresholds, and production TypeScript pseudo-code executing inside the recommendation kernel."
        breadcrumbs={[
          { label: 'Technical', href: '/tech/architecture' },
          { label: 'Algorithms & Flowchart' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Visual Decision Flowchart */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <Badge variant="mint">DECISION TREE</Badge>
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              Visual Algorithmic Logic Flow
            </h3>
            <p className="text-xs text-stone-500 mt-1">
              How the engine parses student telemetry to generate deterministic serving scoop counts.
            </p>
          </div>

          <div className="space-y-4 text-xs font-mono">
            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 flex items-center justify-between">
              <div>
                <span className="text-[#1F6F4B] font-bold block">[START] Student Profile &amp; Morning Input</span>
                <span className="text-stone-500">Inputs: Gender, Weight (kg), Height (cm), Age, Activity Tier</span>
              </div>
              <span className="text-xs bg-emerald-100 text-[#1F6F4B] px-2.5 py-1 rounded font-bold">Step 1</span>
            </div>

            <div className="flex justify-center text-stone-400">↓</div>

            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 flex items-center justify-between">
              <div>
                <span className="text-[#1F6F4B] font-bold block">Calculate Basal Metabolic Rate (BMR)</span>
                <span className="text-stone-500">Mifflin-St Jeor formula applied according to biological sex</span>
              </div>
              <span className="text-xs bg-emerald-100 text-[#1F6F4B] px-2.5 py-1 rounded font-bold">Step 2</span>
            </div>

            <div className="flex justify-center text-stone-400">↓</div>

            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 flex items-center justify-between">
              <div>
                <span className="text-[#1F6F4B] font-bold block">Multiply by Activity Multiplier (TDEE)</span>
                <span className="text-stone-500">Apply PAL scalar: 1.2 (Sedentary) through 1.9 (Very Active) × Satiety Weight</span>
              </div>
              <span className="text-xs bg-emerald-100 text-[#1F6F4B] px-2.5 py-1 rounded font-bold">Step 3</span>
            </div>

            <div className="flex justify-center text-stone-400">↓</div>

            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 flex items-center justify-between">
              <div>
                <span className="text-[#1F6F4B] font-bold block">Meal Caloric Partitioning (Lunch = 35%)</span>
                <span className="text-stone-500">Apply glycemic clamps, protein floors, and discrete ladle quantization</span>
              </div>
              <span className="text-xs bg-emerald-100 text-[#1F6F4B] px-2.5 py-1 rounded font-bold">Step 4</span>
            </div>

            <div className="flex justify-center text-stone-400">↓</div>

            <div className="p-4 bg-[#0E1B14] text-white rounded-2xl border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[#6FCF97] font-bold block">[OUTPUT] Sub-10s Counter Scoop Card</span>
                <span className="text-stone-300">Generated: 2 ladles rice, 3 rotis, 1.5 bowls dal, fresh salad</span>
              </div>
              <span className="text-xs bg-[#1F6F4B] text-white px-2.5 py-1 rounded font-bold">Ready</span>
            </div>
          </div>
        </div>

        {/* Clean Production Code Snippet */}
        <div className="bg-stone-900 text-stone-100 rounded-3xl p-6 sm:p-8 border border-stone-800 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-stone-800 pb-3">
            <div className="flex items-center space-x-2">
              <Code className="w-5 h-5 text-[#6FCF97]" />
              <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                nutritionEngine.ts (Core Execution Kernel)
              </span>
            </div>
            <span className="text-[10px] text-stone-400 font-mono">TypeScript ES2022</span>
          </div>

          <pre className="overflow-x-auto text-xs font-mono text-stone-200 leading-relaxed p-2">
            <code>{pseudoCode}</code>
          </pre>
        </div>

        {/* Cross navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/tech/tech-stack"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Next Step</span>
              <h4 className="text-base font-bold text-stone-900">Explore Complete Tech Stack</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>

          <Link
            to="/tools/portion-recommender"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Interactive</span>
              <h4 className="text-base font-bold text-stone-900">Run This Code Live in Your Browser</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>

      <CTASection
        title="Ready to Test the Decision Tree Yourself?"
        description="Try our interactive Portion Recommender to see how the code runs on any input configuration."
        primaryLink={{ text: 'Try Live Portion Recommender', href: '/tools/portion-recommender' }}
        secondaryLink={{ text: 'View API & Data Schemas', href: '/tech/api-specs' }}
      />
    </div>
  );
};
