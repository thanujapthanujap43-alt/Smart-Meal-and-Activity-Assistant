import React from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { CTASection } from '../../components/ui/CTASection';
import { Badge } from '../../components/ui/Badge';
import { FIELD_OBSERVATIONS } from '../../data/projectData';
import { Eye, Clock, AlertTriangle, ArrowRight, BarChart2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FieldObservations: React.FC = () => {
  return (
    <div>
      <PageHeader
        badge="PRIMARY FIELD DATA"
        title="What We Observed in the Field"
        intro="Over 32 hours of ethnographic observation across 4 campus dining halls revealed a broken dynamic: portions dictated entirely by inertia, static charts ignored by 100% of diners, and severe plate waste side-by-side with student hunger."
        breadcrumbs={[
          { label: 'Research', href: '/research/field-observations' },
          { label: 'Field Observations' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Method overview card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-100">
            <div>
              <Badge variant="mint">OBSERVATION PROTOCOL</Badge>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
                32 Hours Across 4 Hostel Dining Halls
              </h2>
            </div>
            <div className="flex items-center space-x-3 text-xs text-stone-600 bg-stone-50 p-2.5 rounded-xl border border-stone-200">
              <Clock className="w-4 h-4 text-[#1F6F4B]" />
              <span>Lunch Rush (12:30 – 2:00 PM) &amp; Dinner Rush (7:30 – 9:00 PM)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 text-center">
            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200">
              <span className="text-2xl font-extrabold text-[#1F6F4B]">410</span>
              <span className="text-xs font-bold text-stone-900 block mt-1">Diners Observed Individually</span>
              <span className="text-[11px] text-stone-500">Tracked from counter to disposal</span>
            </div>
            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200">
              <span className="text-2xl font-extrabold text-[#1F6F4B]">4–6s</span>
              <span className="text-xs font-bold text-stone-900 block mt-1">Average Interaction Time</span>
              <span className="text-[11px] text-stone-500">Time spent requesting portions</span>
            </div>
            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200">
              <span className="text-2xl font-extrabold text-[#1F6F4B]">0%</span>
              <span className="text-xs font-bold text-stone-900 block mt-1">Consulted Nutrition Posters</span>
              <span className="text-[11px] text-stone-500">Zero students paused to read charts</span>
            </div>
          </div>
        </div>

        {/* The Three Detailed Patterns */}
        <div className="space-y-8">
          {FIELD_OBSERVATIONS.map((obs, idx) => (
            <div
              key={obs.id}
              id={obs.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-stone-100">
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-8 rounded-full bg-[#1F6F4B] text-white flex items-center justify-center font-bold text-xs">
                    0{idx + 1}
                  </span>
                  <h3 className="text-xl font-bold text-stone-900">
                    {obs.title}
                  </h3>
                </div>
                <Badge variant="amber">{obs.tag}</Badge>
              </div>

              <div className="text-sm font-semibold text-[#1F6F4B]">
                {obs.subtitle}
              </div>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                {obs.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200">
                  <span className="text-xs font-bold text-stone-600 uppercase tracking-wider block mb-1">
                    Quantified Field Evidence:
                  </span>
                  <p className="text-xs sm:text-sm text-stone-900 font-medium">
                    {obs.evidence}
                  </p>
                </div>

                <div className="bg-red-50/60 p-4 rounded-2xl border border-red-200">
                  <span className="text-xs font-bold text-red-800 uppercase tracking-wider block mb-1">
                    Consequence for Student &amp; Mess:
                  </span>
                  <p className="text-xs sm:text-sm text-stone-900 font-medium">
                    {obs.consequence}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cross navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/research/problem-statement"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Next Step</span>
              <h4 className="text-base font-bold text-stone-900">Read the Full Problem Statement</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>

          <Link
            to="/research/five-whys"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Root Cause</span>
              <h4 className="text-base font-bold text-stone-900">Five Whys Analysis Diagram</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>

      <CTASection
        title="Transform Field Insights into Instant Serving Scoops"
        description="Test how our algorithm converts these exact observations into tailored portions."
        primaryLink={{ text: 'Try Portion Recommender', href: '/tools/portion-recommender' }}
        secondaryLink={{ text: 'View Key Research Data', href: '/research/key-numbers' }}
      />
    </div>
  );
};
