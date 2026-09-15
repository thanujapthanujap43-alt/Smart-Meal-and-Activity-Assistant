import React from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { CTASection } from '../../components/ui/CTASection';
import { Badge } from '../../components/ui/Badge';
import { RefreshCw, ArrowRight, ShieldCheck, Database, HardDrive, Smartphone, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

export const DataFlow: React.FC = () => {
  const flowSteps = [
    {
      step: 1,
      actor: 'Student Resident',
      action: 'Profile & Morning Activity Check-In',
      payload: 'Height, Weight, Age, Gender, Selected Activity Tier',
      storage: 'Encrypted client-side localStorage (Zero cloud biometric transmission)',
    },
    {
      step: 2,
      actor: 'Local Calculation Kernel',
      action: 'BMR, TDEE, & Meal Partition Calculation',
      payload: 'Daily target kcal, Lunch target (35%), Macronutrient boundary ranges',
      storage: 'In-memory execution in < 15 milliseconds',
    },
    {
      step: 3,
      actor: 'Mobile Viewport',
      action: 'Render Visual Serving Pass Card',
      payload: 'Ladle scoops of rice, roti count, katori bowls of dal, fresh salad volume',
      storage: 'Cached offline PWA service worker asset',
    },
    {
      step: 4,
      actor: 'Mess Serving Counter',
      action: '4-Second Plating by Canteen Staff',
      payload: 'Cook ladles exact scoops matching high-contrast screen badges',
      storage: 'Physical stainless steel dining tray',
    },
    {
      step: 5,
      actor: 'Tray Clearing Station',
      action: 'Post-Meal Plate Disposal Observation',
      payload: 'Zero or minimal food scrapings dumped into organic waste bins',
      storage: 'Hostel daily wet-waste gravimetric audit log',
    },
    {
      step: 6,
      actor: 'Adaptive Feedback Loop',
      action: '1-Tap Satiety Check-in (Too Little / Just Right / Too Heavy)',
      payload: 'Continuous calibration delta (γ) applied to student local profile',
      storage: 'Updated tuning weights saved back to local profile storage',
    },
  ];

  return (
    <div>
      <PageHeader
        badge="SYSTEM DATA LIFECYCLE"
        title="Data Flow &amp; Feedback Loop Architecture"
        intro="Trace how physiological data flows through our local-first state machine: from morning activity inputs to hot canteen ladle scoops, and back through the closed-loop satiety adaptation."
        breadcrumbs={[
          { label: 'Technical', href: '/tech/architecture' },
          { label: 'Data Flow & Lifecycle' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Sequence Flow */}
        <div className="space-y-4">
          <Badge variant="mint">STEP-BY-STEP DATA TRAJECTORY</Badge>
          <h3 className="text-2xl font-bold text-stone-900">
            End-to-End Sequence Diagram &amp; Data Pipeline
          </h3>

          <div className="space-y-4 pt-2">
            {flowSteps.map((f) => (
              <div
                key={f.step}
                className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
              >
                <div className="flex items-center space-x-4">
                  <span className="w-10 h-10 rounded-2xl bg-[#1F6F4B] text-white flex items-center justify-center font-black text-sm shrink-0">
                    0{f.step}
                  </span>
                  <div>
                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
                      {f.actor}
                    </span>
                    <h4 className="text-base font-bold text-stone-900">{f.action}</h4>
                    <p className="text-xs text-stone-600 mt-1">{f.payload}</p>
                  </div>
                </div>

                <div className="md:text-right shrink-0 bg-stone-50 p-3 rounded-xl border border-stone-200 text-xs text-stone-700 max-w-sm">
                  <span className="text-[10px] font-bold text-stone-400 uppercase block mb-0.5">
                    Storage &amp; Transit:
                  </span>
                  {f.storage}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Data Privacy & Local-First Philosophy */}
        <div className="bg-[#0E1B14] text-white rounded-3xl p-8 border border-white/10 shadow-xl space-y-4">
          <Badge variant="mint">LOCAL-FIRST PRIVACY PROMISE</Badge>
          <h3 className="text-xl sm:text-2xl font-bold">
            Zero Centralized Biometric Exposure
          </h3>
          <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-3xl">
            In compliance with campus ethical research standards, no personally identifiable student health metrics (weight, BMI, or dietary restrictions) are stored on a centralized server or sold to external advertisers. Calculations occur inside the client's sandboxed JavaScript runtime. Only anonymous aggregate waste savings are synced to institutional reporting endpoints.
          </p>
        </div>

        {/* Cross navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/tech/algorithms-flowchart"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Next Step</span>
              <h4 className="text-base font-bold text-stone-900">Decision Trees &amp; Pseudo-Code</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>

          <Link
            to="/tech/api-specs"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Specifications</span>
              <h4 className="text-base font-bold text-stone-900">API Specifications &amp; JSON Schemas</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>

      <CTASection
        title="Experience the Full Data Flow in Real Time"
        description="Try our interactive Portion Recommender to see how data flows from inputs to visual scoops."
        primaryLink={{ text: 'Try Live Portion Recommender', href: '/tools/portion-recommender' }}
        secondaryLink={{ text: 'Inspect Algorithms Flowchart', href: '/tech/algorithms-flowchart' }}
      />
    </div>
  );
};
