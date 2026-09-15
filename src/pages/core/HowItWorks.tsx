import React from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { CTASection } from '../../components/ui/CTASection';
import { Badge } from '../../components/ui/Badge';
import { ArchitectureDiagram } from '../../components/diagrams/ArchitectureDiagram';
import { PIPELINE_STAGES } from '../../data/projectData';
import { CheckCircle2, Clock, Sparkles, ArrowRight, Zap, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HowItWorks: React.FC = () => {
  return (
    <div>
      <PageHeader
        badge="ENGINEERING PROCESS"
        title="How It Works: The 6-Stage System Pipeline"
        intro="Explore the end-to-end data pipeline that transforms raw student physiological inputs into instant, color-coded canteen scoop guidance in under 10 seconds."
        breadcrumbs={[{ label: 'How It Works' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Interactive Block Diagram */}
        <ArchitectureDiagram />

        {/* Plain Language Stage Walkthrough */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-8">
          <div>
            <Badge variant="mint">STEP-BY-STEP BREAKDOWN</Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-2">
              The 6 Stages Explained in Plain Language
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2">
              Here is what occurs under the hood from the moment a student selects their daily activity tier to the moment counter staff serve their plate.
            </p>
          </div>

          <div className="space-y-6">
            {PIPELINE_STAGES.map((s) => (
              <div
                key={s.stage}
                id={`stage-detail-${s.stage}`}
                className="p-5 sm:p-6 rounded-2xl bg-stone-50 border border-stone-200 hover:border-stone-300 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-stone-200">
                  <div className="flex items-center space-x-3">
                    <span className="w-8 h-8 rounded-full bg-[#1F6F4B] text-white flex items-center justify-center font-bold text-xs">
                      0{s.stage}
                    </span>
                    <div>
                      <h3 className="font-extrabold text-stone-900 text-base">
                        {s.name}
                      </h3>
                      <span className="text-xs text-stone-500">{s.subtitle}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <span className="bg-white px-2.5 py-1 rounded-md border border-stone-200 font-medium text-stone-700">
                      ⏱ {s.latency}
                    </span>
                  </div>
                </div>

                <p className="text-stone-700 text-sm mt-3 leading-relaxed">
                  {s.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 pt-3 border-t border-stone-200 text-xs">
                  <div>
                    <span className="font-bold text-stone-500 uppercase text-[10px] block">Inputs:</span>
                    <span className="text-stone-800">{s.inputs.join(', ')}</span>
                  </div>
                  <div>
                    <span className="font-bold text-stone-500 uppercase text-[10px] block">Outputs:</span>
                    <span className="text-[#1F6F4B] font-semibold">{s.outputs.join(', ')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Feedback loop detail */}
          <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-2xl flex items-start space-x-3 text-xs sm:text-sm text-emerald-950">
            <RefreshCw className="w-5 h-5 text-[#1F6F4B] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block text-sm">Why the Feedback Loop Closes the System:</span>
              <p className="mt-1 leading-relaxed text-stone-700">
                Biological systems exhibit metabolic variance: two students of identical height, weight, and activity level can differ by 5–10% in non-exercise thermogenesis. Stage 6 records single-tap post-meal fullness ratings, which feed back into Stage 4’s weighted recommendation model to calibrate subsequent portion thresholds.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/tech/ai-ml-engine"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Deep Dive</span>
              <h4 className="text-base font-bold text-stone-900">Stage 4: AI/ML Engine Explained</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>

          <Link
            to="/tools/portion-recommender"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Interactive</span>
              <h4 className="text-base font-bold text-stone-900">Run the Pipeline in Real Time</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>

      <CTASection
        title="Ready to See the Algorithm in Action?"
        description="Launch our interactive simulator or register to be part of the active 4-week dining hall trial."
        primaryLink={{ text: 'Try Live Portion Recommender', href: '/tools/portion-recommender' }}
        secondaryLink={{ text: 'Join Campus Pilot', href: '/get-involved' }}
      />
    </div>
  );
};
