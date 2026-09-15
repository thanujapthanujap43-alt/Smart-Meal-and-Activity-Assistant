import React from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { CTASection } from '../../components/ui/CTASection';
import { Badge } from '../../components/ui/Badge';
import { ArchitectureDiagram } from '../../components/diagrams/ArchitectureDiagram';
import { Layers, Server, Smartphone, Cpu, ShieldCheck, ArrowRight, Zap, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SystemArchitecture: React.FC = () => {
  return (
    <div>
      <PageHeader
        badge="SYSTEM BLUEPRINT"
        title="Technical Architecture &amp; Topology"
        intro="An overview of the client-side, local-first runtime environment designed for sub-15ms inference, zero dining hall queue friction, and absolute biometric privacy."
        breadcrumbs={[
          { label: 'Technical', href: '/tech/architecture' },
          { label: 'System Architecture' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Interactive Architecture Diagram */}
        <ArchitectureDiagram />

        {/* Multi-Tier System Topology */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <Badge variant="mint">TIER TOPOLOGY</Badge>
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              Three-Tier Local-First System Architecture
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tier 1 */}
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#1F6F4B] flex items-center justify-center font-bold">
                <Smartphone className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase tracking-wider block">Tier 1: Client Edge</span>
              <h4 className="text-base font-bold text-stone-900">Progressive Web App (PWA)</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Single-page React + TypeScript frontend running on the student's browser. Loads in &lt; 65 KB. Maintains local offline storage via Web Storage APIs. Generates dynamic SVG scoop badges in real time.
              </p>
            </div>

            {/* Tier 2 */}
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#1F6F4B] flex items-center justify-center font-bold">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase tracking-wider block">Tier 2: Calculation Engine</span>
              <h4 className="text-base font-bold text-stone-900">Deterministic Physiological Core</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Pure TypeScript module executing Mifflin-St Jeor, WHO BMI cutoffs, activity scalar multiplications, and stage 4 meal portion boundary clipping with zero network overhead.
              </p>
            </div>

            {/* Tier 3 */}
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#1F6F4B] flex items-center justify-center font-bold">
                <Server className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase tracking-wider block">Tier 3: Aggregation</span>
              <h4 className="text-base font-bold text-stone-900">Anonymous Dining Hall Ledger</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Asynchronous batch upload of anonymized food waste metrics and aggregate mess headcount predictions to assist kitchen procurement without tracking student identities.
              </p>
            </div>
          </div>
        </div>

        {/* Cross navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/tech/bmi-bmr-tdee"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Formulas &amp; Science</span>
              <h4 className="text-base font-bold text-stone-900">BMI, BMR, &amp; TDEE Equations</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>

          <Link
            to="/tech/ai-ml-engine"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Inference Engine</span>
              <h4 className="text-base font-bold text-stone-900">Recommendation Engine &amp; Optimization</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>

      <CTASection
        title="Ready to See the Code in Execution?"
        description="Launch our interactive simulator or inspect the full algorithms flowchart."
        primaryLink={{ text: 'Try Live Portion Recommender', href: '/tools/portion-recommender' }}
        secondaryLink={{ text: 'View Algorithms Flowchart', href: '/tech/algorithms-flowchart' }}
      />
    </div>
  );
};
