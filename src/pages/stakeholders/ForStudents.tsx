import React from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { CTASection } from '../../components/ui/CTASection';
import { Badge } from '../../components/ui/Badge';
import { BookOpen, Zap, Moon, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ForStudents: React.FC = () => {
  return (
    <div>
      <PageHeader
        badge="STUDENT RESIDENT GUIDE"
        title="For Students: Eat Smart, Stay Focused, Perform Better"
        intro="How personalized dining hall portion guidance eliminates the dreaded 2:00 PM classroom crash while ensuring college athletes and gym-goers never go to bed under-fueled."
        breadcrumbs={[
          { label: 'For', href: '/research/stakeholders' },
          { label: 'For Students' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* The Two Main Student Dilemmas Solved */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <Badge variant="amber">ACADEMIC PEAK FOCUS</Badge>
            <h3 className="text-xl font-bold text-stone-900">
              Say Goodbye to the 2:00 PM Lecture Slump
            </h3>
            <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
              When you spend 6 hours studying for exams in the library, your body requires sustained glucose stability, not a massive 4-roti carbohydrate overload. By calibrating grain scoops to sedentary needs, the assistant avoids the severe post-lunch insulin spike, keeping your mind alert during afternoon engineering labs.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-[#1F6F4B] flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <Badge variant="mint">ATHLETIC RECOVERY</Badge>
            <h3 className="text-xl font-bold text-stone-900">
              Fuel Your Workouts Without 11:00 PM Hunger
            </h3>
            <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
              If you hit the campus gym or train for varsity football, static mess portions leave you 500+ calories short. On high-activity days, the assistant instructs the counter staff to ladle an additional half-scoop of dal and an extra roti, preventing muscle catabolism and late-night cravings for oily canteen snacks.
            </p>
          </div>
        </div>

        {/* 3 Steps to Using It */}
        <div className="bg-[#0E1B14] text-white rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl space-y-6">
          <Badge variant="mint">3-STEP DAILY ROUTINE</Badge>
          <h3 className="text-xl sm:text-2xl font-bold">
            How It Works in Your Daily Routine
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-2">
              <span className="text-[#6FCF97] font-bold text-sm">Step 1: Morning Tap (2s)</span>
              <p className="text-xs text-stone-300">
                Select your schedule: studying, light walking, gym workout, or sports practice.
              </p>
            </div>

            <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-2">
              <span className="text-[#6FCF97] font-bold text-sm">Step 2: Show Counter Card</span>
              <p className="text-xs text-stone-300">
                At the mess counter, display your scoop pass (e.g. 2 ladles rice, 3 rotis) to the server.
              </p>
            </div>

            <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-2">
              <span className="text-[#6FCF97] font-bold text-sm">Step 3: 1-Tap Satiety Check</span>
              <p className="text-xs text-stone-300">
                After dining, tap "Just Right" or "Too Heavy" so tomorrow's meal adapts to your metabolic pace.
              </p>
            </div>
          </div>
        </div>

        {/* Cross navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/tools/portion-recommender"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Interactive Tool</span>
              <h4 className="text-base font-bold text-stone-900">Calculate Your Meal Portion Right Now</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>

          <Link
            to="/get-involved"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Pilot Registration</span>
              <h4 className="text-base font-bold text-stone-900">Sign Up for the 4-Week Hostel Trial</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>

      <CTASection
        title="Ready to Fuel Your Body Right?"
        description="Try our interactive Portion Recommender and see your tailored meal card in seconds."
        primaryLink={{ text: 'Try Portion Recommender', href: '/tools/portion-recommender' }}
        secondaryLink={{ text: 'Join Campus Pilot Cohort', href: '/get-involved' }}
      />
    </div>
  );
};
