import React from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { CTASection } from '../../components/ui/CTASection';
import { Badge } from '../../components/ui/Badge';
import { ClipboardList, Users, CheckCircle2, ShieldCheck, ArrowRight, Layers, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SurveyMethodology: React.FC = () => {
  return (
    <div>
      <PageHeader
        badge="EMPIRICAL PROTOCOL"
        title="Survey &amp; Audit Methodology"
        intro="How our engineering team gathered, validated, and normalized dining and activity data from over 600 campus students across a 3-week study period."
        breadcrumbs={[
          { label: 'Research', href: '/research/field-observations' },
          { label: 'Survey Methodology' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Sampling Overview */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-100 gap-2">
            <div>
              <Badge variant="mint">SAMPLING STRATEGY</Badge>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
                Stratified Sampling Across 624 Verified Respondents
              </h3>
            </div>
            <span className="text-xs font-mono font-bold text-stone-500 bg-stone-50 p-2 rounded-lg border border-stone-200">
              Confidence Interval: 95% (±3.8%)
            </span>
          </div>

          <p className="text-sm text-stone-700 leading-relaxed">
            To prevent sampling bias towards gym enthusiasts or senior cohorts, respondents were stratified across gender, academic branch, residence type, and physical activity categories. Every participant's institutional ID was verified to eliminate duplicate entries.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block">Hostel Residents</span>
              <span className="text-2xl font-black text-stone-900 font-mono mt-1">486</span>
              <span className="text-[11px] text-stone-500 block">78% of sample (3 meals/day)</span>
            </div>
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block">Day Scholars</span>
              <span className="text-2xl font-black text-stone-900 font-mono mt-1">138</span>
              <span className="text-[11px] text-stone-500 block">22% of sample (Lunch only)</span>
            </div>
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block">Male Diners</span>
              <span className="text-2xl font-black text-stone-900 font-mono mt-1">374</span>
              <span className="text-[11px] text-stone-500 block">60% of sample</span>
            </div>
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block">Female Diners</span>
              <span className="text-2xl font-black text-stone-900 font-mono mt-1">250</span>
              <span className="text-[11px] text-stone-500 block">40% of sample</span>
            </div>
          </div>
        </div>

        {/* 4 Research Instruments */}
        <div className="space-y-4">
          <Badge variant="forest">DATA COLLECTION INSTRUMENTS</Badge>
          <h3 className="text-2xl font-bold text-stone-900">
            Four Triangulated Instruments
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#1F6F4B] flex items-center justify-center font-bold">
                1
              </div>
              <h4 className="text-lg font-bold text-stone-900">Digital Quantitative Questionnaire</h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Distributed via the university student portal. Gathered self-reported height, weight, daily academic timetable, athletic training hours, typical serving sizes, and post-lunch drowsiness ratings on a 1–5 Likert scale.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#1F6F4B] flex items-center justify-center font-bold">
                2
              </div>
              <h4 className="text-lg font-bold text-stone-900">Exit-Door Intercept Interviews</h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Conducted with 120 students immediately after they left the tray return conveyor belt. Students were asked: <em>"Did you finish your plate? If not, why?"</em> and <em>"Did you consider your workout today when requesting rice?"</em>
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#1F6F4B] flex items-center justify-center font-bold">
                3
              </div>
              <h4 className="text-lg font-bold text-stone-900">Kitchen Waste Bin Gravimetric Weighing</h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Partnered with mess cleaning staff to weigh aggregate waste bins before and after lunch and dinner shifts using industrial digital floor scales (accurate to 50g) over 14 consecutive days.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#1F6F4B] flex items-center justify-center font-bold">
                4
              </div>
              <h4 className="text-lg font-bold text-stone-900">Mess Server Observational Timing</h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Timed 410 individual counter interactions with stopwatch logging to determine maximum permissible UI latency (&lt; 10s) without triggering queue disruption during peak 1:00 PM rush.
              </p>
            </div>
          </div>
        </div>

        {/* Cross navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/research/survey-results"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Next Step</span>
              <h4 className="text-base font-bold text-stone-900">View Full Survey Results Deep Dive</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>

          <Link
            to="/research/key-numbers"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Overview Data</span>
              <h4 className="text-base font-bold text-stone-900">Key Numbers Summary</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>

      <CTASection
        title="See the Data Transformed Into Technology"
        description="Learn how survey findings dictated our low-latency rule-based algorithmic design."
        primaryLink={{ text: 'Explore System Architecture', href: '/tech/architecture' }}
        secondaryLink={{ text: 'Try Portion Recommender', href: '/tools/portion-recommender' }}
      />
    </div>
  );
};
