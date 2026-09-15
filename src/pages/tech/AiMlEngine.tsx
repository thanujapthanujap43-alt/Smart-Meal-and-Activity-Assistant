import React from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { CTASection } from '../../components/ui/CTASection';
import { Badge } from '../../components/ui/Badge';
import { Cpu, ShieldCheck, Zap, Sliders, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AiMlEngine: React.FC = () => {
  return (
    <div>
      <PageHeader
        badge="ALGORITHMIC INFERENCE"
        title="Stage 4: The Portion Recommendation Engine"
        intro="How our deterministic optimization model converts continuous biological energy targets into discrete dining hall ladle scoops while dynamically tuning to student satiety feedback."
        breadcrumbs={[
          { label: 'Technical', href: '/tech/architecture' },
          { label: 'AI/ML Engine' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Core Algorithm Overview */}
        <div className="bg-[#0E1B14] text-white rounded-3xl p-8 border border-white/10 shadow-xl space-y-4">
          <Badge variant="mint">STAGE 4 INFERENCE LOGIC</Badge>
          <h2 className="text-2xl sm:text-3xl font-bold">
            Constrained Optimization vs. Black-Box Hallucination
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-3xl">
            In dining hall operations, an AI recommendation must be deterministic, safety-bounded, and explainable to kitchen cooks. Feeding unconstrained LLMs or black-box neural networks into student meal guidance risks dangerous caloric hallucinations or illegal portion recommendations.
          </p>
        </div>

        {/* The Mathematical Optimization Formulation */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
              The Objective Function &amp; Constraint Boundaries
            </h3>
            <p className="text-xs text-stone-500 mt-1">
              Formalizing the translation from target calories to discrete serving units.
            </p>
          </div>

          <div className="bg-stone-900 text-stone-200 p-5 sm:p-6 rounded-2xl font-mono text-xs sm:text-sm border border-stone-800 space-y-3">
            <span className="text-[#6FCF97] font-bold block">// Objective Function: Minimize Caloric &amp; Macro Error</span>
            <p className="text-white">
              minimize: | ∑(sᵢ × Cᵢ) − TargetMealCalories | + λ × | ∑(sᵢ × Pᵢ) − TargetProtein |
            </p>
            <div className="text-stone-400 text-xs space-y-1 pt-2 border-t border-stone-800">
              <p>where <strong>sᵢ</strong> ∈ &#123; 0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0 &#125; (Discrete ladle scoop bounds)</p>
              <p><strong>Cᵢ</strong> = Caloric density per standard canteen serving scoop of food item i</p>
              <p><strong>Pᵢ</strong> = Protein content in grams per standard serving of food item i</p>
              <p><strong>λ</strong> = Priority weighting factor for lean muscle preservation (λ = 1.4 for athletes)</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
              <span className="text-xs font-bold text-[#1F6F4B] uppercase tracking-wider block">Boundary 1: Glycemic Cap</span>
              <p className="text-xs text-stone-600 leading-relaxed">
                Refined carbohydrate scoops (rice and naans) are strictly capped for sedentary tiers to prevent the 2:00 PM post-prandial insulin spike that causes classroom drowsiness.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
              <span className="text-xs font-bold text-[#1F6F4B] uppercase tracking-wider block">Boundary 2: Protein Floor</span>
              <p className="text-xs text-stone-600 leading-relaxed">
                Dal and legume servings maintain a non-negotiable floor (minimum 1.0 full bowl) regardless of calorie deficit, ensuring essential amino acid availability for all diners.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
              <span className="text-xs font-bold text-[#1F6F4B] uppercase tracking-wider block">Boundary 3: Ladle Quantization</span>
              <p className="text-xs text-stone-600 leading-relaxed">
                All continuous gram outputs are rounded to physical ladle fractions (half-scoop, single, double) to avoid confusing kitchen servers at the hot counter.
              </p>
            </div>
          </div>
        </div>

        {/* Adaptive Satiety Tuning Loop */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <Badge variant="forest">STAGE 6 ADAPTATION</Badge>
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              The Satiety Calibration Loop: Updating Biological Weights
            </h3>
          </div>

          <p className="text-sm text-stone-700 leading-relaxed">
            When a student submits single-tap post-meal feedback, the engine updates their personal metabolic multiplier coefficient (γ) using a damped gradient step:
          </p>

          <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 font-mono text-xs text-stone-800 space-y-2">
            <div className="flex justify-between items-center">
              <span>Too Hungry (Rating = -1):</span>
              <span className="font-bold text-[#1F6F4B]">γₜ₊₁ = γₜ + 0.05 × (1 − γₜ / 1.3)</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Just Right (Rating = 0):</span>
              <span className="font-bold text-stone-600">γₜ₊₁ = γₜ (Equilibrium)</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Too Heavy / Sluggish (Rating = +1):</span>
              <span className="font-bold text-red-600">γₜ₊₁ = γₜ − 0.05 × (γₜ / 0.8)</span>
            </div>
          </div>
        </div>

        {/* Cross navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/tech/data-flow"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Data Pipeline</span>
              <h4 className="text-base font-bold text-stone-900">Data Flow &amp; Feedback Loop Sequence</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>

          <Link
            to="/tech/algorithms-flowchart"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Visual Logic</span>
              <h4 className="text-base font-bold text-stone-900">Decision Trees &amp; Pseudo-Code</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>

      <CTASection
        title="Test the Engine Logic in Real Time"
        description="Try our interactive demo and adjust activity or feedback to see the portions adapt instantly."
        primaryLink={{ text: 'Try Live Portion Recommender', href: '/tools/portion-recommender' }}
        secondaryLink={{ text: 'Inspect Full Architecture', href: '/tech/architecture' }}
      />
    </div>
  );
};
