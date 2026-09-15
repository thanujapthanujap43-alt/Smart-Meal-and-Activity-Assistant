import React from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { CTASection } from '../../components/ui/CTASection';
import { Badge } from '../../components/ui/Badge';
import { StatCounter } from '../../components/ui/StatCounter';
import { AlertOctagon, HelpCircle, ArrowRight, CheckCircle2, TrendingDown, Trash2, BatteryWarning } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ProblemStatement: React.FC = () => {
  return (
    <div>
      <PageHeader
        badge="DEFINITIVE PROBLEM STATEMENT"
        title="Students Choose Portions Blindly"
        intro="Without real-time biological context at the serving counter, 600+ college students default to static habits or visual impulses — resulting in extreme food waste on sedentary days and chronic under-fueling on athletic days."
        breadcrumbs={[
          { label: 'Research', href: '/research/field-observations' },
          { label: 'Problem Statement' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Core Statement Callout */}
        <div className="bg-[#0E1B14] text-white rounded-3xl p-8 border border-white/10 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-[#6FCF97] uppercase tracking-widest block">
              Formal Project Problem Definition
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug">
              "Students at a hostel mess choose food portions based on habit or taste rather than their BMI and daily activity level, causing severe energy mismatch and dining hall food waste."
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed pt-2">
              This disconnect drives a destructive cycle: on low-activity study days, students over-consume carbohydrate-dense grains, inducing afternoon cognitive lethargy and dumping excess food; on high-activity gym or sports days, identical default portions leave them calorically depleted.
            </p>
          </div>
        </div>

        {/* The Triad of Failure */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-8">
          <div>
            <Badge variant="amber">THE TRIAD OF SYSTEM FAILURE</Badge>
            <h3 className="text-2xl font-bold text-stone-900 mt-2">
              Why Campus Dining Suffers from Systemic Mismatch
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-red-50/60 border border-red-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center">
                <BatteryWarning className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-stone-900">50% Energy Mismatch</h4>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                A student's daily caloric expenditure fluctuates by up to 800 kcal between library study and athletic conditioning. Yet the mess counter serves identical 3-roti, 2-scoop plates regardless of physiological demand.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <Trash2 className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-stone-900">60–70% Daily Plate Waste</h4>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                When sedentary students accept full ladles of rice and rotis out of habit, they cannot finish the excessive portion. The resulting plate scrapings account for the majority of the hostel's daily wet-waste burden.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-stone-200 text-stone-700 flex items-center justify-center">
                <AlertOctagon className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-stone-900">Information Blackout</h4>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                Static wall charts located 30 meters from the counter provide zero contextual value in a 4-second serving queue. Without personalized guidance on their screens, diners rely purely on visual impulse.
              </p>
            </div>
          </div>
        </div>

        {/* Cross navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/research/five-whys"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Root Cause Analysis</span>
              <h4 className="text-base font-bold text-stone-900">Explore Five Whys Drilldown</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>

          <Link
            to="/research/stakeholders"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Who Is Affected</span>
              <h4 className="text-base font-bold text-stone-900">Comprehensive Stakeholder Map</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>

      <CTASection
        title="See the Solution in Action"
        description="Learn how we solve this problem statement with our sub-10-second portion recommender."
        primaryLink={{ text: 'Try Portion Recommender', href: '/tools/portion-recommender' }}
        secondaryLink={{ text: 'View Solution Architecture', href: '/solution/overview' }}
      />
    </div>
  );
};
