import React from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { CTASection } from '../../components/ui/CTASection';
import { Badge } from '../../components/ui/Badge';
import { Check, X, AlertTriangle, ShieldCheck, Cpu, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const WhyThisWon: React.FC = () => {
  const comparisonData = [
    {
      criterion: 'Queue Latency',
      ruleBased: '< 15 ms (Immediate)',
      cnn: '8–15 seconds (Fatal bottleneck)',
      genericApps: '45–90 seconds (Barcode search)',
      winner: 'ruleBased',
    },
    {
      criterion: 'Hardware Requirement',
      ruleBased: 'Any $80 Android phone or browser',
      cnn: 'Dedicated overhead cameras / GPU servers',
      genericApps: 'High-end smartphone with camera',
      winner: 'ruleBased',
    },
    {
      criterion: 'Awareness of Physical Activity',
      ruleBased: 'Native daily activity coefficient multiplier',
      cnn: 'Zero (cannot photograph internal metabolism)',
      genericApps: 'Optional sync, tedious manual logging',
      winner: 'ruleBased',
    },
    {
      criterion: 'Accuracy on Mess Curries / Dal',
      ruleBased: '100% deterministic based on mess recipe data',
      cnn: 'Fails on homogeneous gravies & hidden fats',
      genericApps: 'Relies on crowd-sourced inaccurate recipes',
      winner: 'ruleBased',
    },
    {
      criterion: 'Student Adoption & Compliance',
      ruleBased: 'High (1 tap in morning or line)',
      cnn: 'Low (awkward tray repositioning required)',
      genericApps: '< 5% after week 1 (logging fatigue)',
      winner: 'ruleBased',
    },
    {
      criterion: 'Mess Staff Operational Alignment',
      ruleBased: 'Direct visual scoops (e.g. 2 ladles, 3 rotis)',
      cnn: 'Output in grams (staff have no scale at counter)',
      genericApps: 'Output in calories/macros (meaningless to staff)',
      winner: 'ruleBased',
    },
  ];

  return (
    <div>
      <PageHeader
        badge="ENGINEERING DESIGN DECISION"
        title="Why This Approach Won: Rule-Based vs. CNN"
        intro="An architectural autopsy of why our engineering team rejected computer-vision tray photography (CNNs) and generic calorie trackers in favor of a deterministic, sub-15ms physiological rule engine."
        breadcrumbs={[
          { label: 'Solution', href: '/solution/overview' },
          { label: 'Why This Approach Won' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Core Rationale Hero */}
        <div className="bg-[#0E1B14] text-white rounded-3xl p-8 border border-white/10 shadow-xl space-y-4">
          <Badge variant="mint">THE DEFINING ARCHITECTURAL INSIGHT</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug">
            "You cannot photograph how many sprints a student ran at 7:00 AM."
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-3xl">
            Early in capstone brainstorming, our advisors proposed training a Convolutional Neural Network (CNN) like YOLO or ResNet to detect food on stainless steel trays. While academically impressive on paper, field testing revealed that image-based AI solves the wrong problem at catastrophic operational cost.
          </p>
        </div>

        {/* Detailed Comparison Matrix */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
              Three-Way Architectural Comparison Matrix
            </h3>
            <p className="text-xs text-stone-500 mt-1">
              Evaluating the candidate architectures against strict dining hall constraints.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-stone-200 text-xs font-bold text-stone-500 uppercase tracking-wider">
                  <th className="py-3 px-4">Evaluation Criteria</th>
                  <th className="py-3 px-4 bg-emerald-50 text-[#1F6F4B] rounded-t-xl">
                    Our Solution (Rule-Based Engine)
                  </th>
                  <th className="py-3 px-4">Computer Vision / CNN</th>
                  <th className="py-3 px-4">Generic Calorie Apps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-xs">
                {comparisonData.map((row, i) => (
                  <tr key={i} className="hover:bg-stone-50 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-stone-900">{row.criterion}</td>
                    <td className="py-3.5 px-4 bg-emerald-50/50 font-bold text-[#1F6F4B] flex items-center space-x-1.5">
                      <Check className="w-4 h-4 text-[#1F6F4B] shrink-0" />
                      <span>{row.ruleBased}</span>
                    </td>
                    <td className="py-3.5 px-4 text-stone-600">
                      <div className="flex items-center space-x-1.5 text-stone-500">
                        <X className="w-3.5 h-3.5 text-red-500 shrink-0" />
                        <span>{row.cnn}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-stone-600">
                      <div className="flex items-center space-x-1.5 text-stone-500">
                        <X className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>{row.genericApps}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Deep Dive into 3 Flaws of the CNN Approach */}
        <div className="space-y-4">
          <Badge variant="amber">TECHNICAL AUTOPSY OF REJECTED CNN</Badge>
          <h3 className="text-2xl font-bold text-stone-900">
            Three Fatal Weaknesses of the Computer Vision (CNN) Approach
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center font-bold">
                1
              </div>
              <h4 className="text-base font-bold text-stone-900">The Homogeneous Gravy Problem</h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Indian dining hall food consists largely of gravies, dals, and mixed vegetable curries. A camera cannot estimate the depth of a katori bowl, distinguish low-fat dal from butter-laden dal tadka, or detect whether paneer is submerged underneath the sauce.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center font-bold">
                2
              </div>
              <h4 className="text-base font-bold text-stone-900">Queue Catastrophe</h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                In peak hours, students pass the counter at 4–6 seconds per person. Forcing students to halt, balance their metal tray under a lens, wait 8 seconds for cloud model inference, and re-plate creates a 40-minute backlog stretching out the dining hall doors.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center font-bold">
                3
              </div>
              <h4 className="text-base font-bold text-stone-900">Ex Post Facto Guidance</h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                A CNN photographs food <em>after</em> it has already been ladled onto the plate. Telling a student "you have taken 300 kcal too much rice" after it touches their tray is useless: sanitary regulations forbid dumping served food back into hot buffet containers!
              </p>
            </div>
          </div>
        </div>

        {/* Cross navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/solution/features"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Feature Breakdown</span>
              <h4 className="text-base font-bold text-stone-900">Explore Core Platform Features</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>

          <Link
            to="/solution/comparison"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Dining Hall Transformation</span>
              <h4 className="text-base font-bold text-stone-900">Before vs. After Comparison</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>

      <CTASection
        title="Experience the Sub-15ms Engine in Action"
        description="Run our live simulator to see how instantly physiological guidance calculates without camera lag."
        primaryLink={{ text: 'Try Portion Recommender', href: '/tools/portion-recommender' }}
        secondaryLink={{ text: 'Inspect Algorithm Flowchart', href: '/tech/algorithms-flowchart' }}
      />
    </div>
  );
};
