import React from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { CTASection } from '../../components/ui/CTASection';
import { Badge } from '../../components/ui/Badge';
import { PIPELINE_STAGES } from '../../data/projectData';
import { Clock, CheckCircle2, ArrowRight, Layers, Cpu, RefreshCw, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PipelineDeepDive: React.FC = () => {
  return (
    <div>
      <PageHeader
        badge="TECHNICAL SPECIFICATION"
        title="The 6-Stage Pipeline Deep Dive"
        intro="A granular, engineering-level breakdown of the mathematical transforms, data schemas, and latency budgets governing each stage of the portion recommendation pipeline."
        breadcrumbs={[
          { label: 'Solution', href: '/solution/overview' },
          { label: '6-Stage Pipeline' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Latency budget banner */}
        <div className="bg-[#0E1B14] text-white p-6 rounded-3xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#6FCF97] uppercase tracking-wider">
              Total End-to-End Latency Target
            </span>
            <h3 className="text-xl font-bold">Counter Serving Budget: &lt; 10 Seconds</h3>
            <p className="text-xs text-stone-300">
              Stages 1–3 pre-computed on device; Stage 4–5 executes in &lt; 15ms upon meal selection.
            </p>
          </div>
          <div className="bg-white/10 px-4 py-2 rounded-xl text-center shrink-0 border border-white/10">
            <span className="text-2xl font-black text-[#6FCF97] font-mono">15 ms</span>
            <span className="text-[10px] text-stone-300 block uppercase">Inference Time</span>
          </div>
        </div>

        {/* Detailed Stages */}
        <div className="space-y-8">
          {PIPELINE_STAGES.map((stage) => (
            <div
              key={stage.stage}
              id={`stage-${stage.stage}`}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-100 gap-2">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#1F6F4B] text-white flex items-center justify-center font-bold text-sm">
                    0{stage.stage}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">{stage.name}</h3>
                    <span className="text-xs text-stone-500">{stage.subtitle}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-xs">
                  <Badge variant="mint">Latency: {stage.latency}</Badge>
                </div>
              </div>

              <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                {stage.description}
              </p>

              {/* Data I/O Matrix */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                  <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block">
                    Input Parameters
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {stage.inputs.map((inp, idx) => (
                      <span
                        key={idx}
                        className="bg-white px-2.5 py-1 rounded-lg border border-stone-200 text-xs font-mono text-stone-800"
                      >
                        {inp}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2">
                  <span className="text-[11px] font-bold text-[#1F6F4B] uppercase tracking-wider block">
                    Generated Output Structures
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {stage.outputs.map((out, idx) => (
                      <span
                        key={idx}
                        className="bg-white px-2.5 py-1 rounded-lg border border-emerald-300 text-xs font-mono font-bold text-[#1F6F4B]"
                      >
                        {out}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cross navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/solution/why-this-won"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Decision Justification</span>
              <h4 className="text-base font-bold text-stone-900">Why This Won Over CNNs</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>

          <Link
            to="/tech/algorithms-flowchart"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Visual Logic</span>
              <h4 className="text-base font-bold text-stone-900">Decision Flowchart &amp; Pseudo-code</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>

      <CTASection
        title="Test the Pipeline in Your Browser"
        description="Run live data through Stages 1 through 5 using our interactive simulator."
        primaryLink={{ text: 'Try Portion Recommender', href: '/tools/portion-recommender' }}
        secondaryLink={{ text: 'View System Architecture', href: '/tech/architecture' }}
      />
    </div>
  );
};
