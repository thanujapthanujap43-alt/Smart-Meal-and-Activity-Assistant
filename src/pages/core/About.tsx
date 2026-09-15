import React from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { CTASection } from '../../components/ui/CTASection';
import { Badge } from '../../components/ui/Badge';
import { Target, Compass, Sparkles, BookOpen, HeartPulse, Scale, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <div>
      <PageHeader
        badge="PROJECT CONTEXT & ORIGINS"
        title="About the Project"
        intro="The Smart Meal & Activity Assistant was born inside a university hostel mess hall after observing students dump hundreds of kilograms of wholesome food daily while athletes went to bed undernourished."
        breadcrumbs={[{ label: 'About the Project' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Origin Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <Badge variant="mint">THE ORIGIN STORY</Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              From Dining Hall Observation to Engineering Solution
            </h2>
            <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
              <p>
                In any university campus, dining halls represent both the heartbeat of social life and an acute operational bottleneck. Every semester, hundreds of students line up three times a day at stainless-steel food counters, accepting standardized ladle scoops of rice, dal, and rotis.
              </p>
              <p>
                Our student engineering team noticed a paradox: while students leaving 2:00 PM engineering lectures routinely complained of overwhelming brain fog and digestive lethargy, members of the campus basketball and track teams were regularly raiding the hostel canteen for fried snacks at 4:30 PM because their lunch portions had been inadequate.
              </p>
              <p>
                When we examined the food disposal counter, the problem became undeniable: <strong>60–70% of plate mass at the clearing station consisted of uneaten carbohydrates</strong>. Students were taking portions based on visual habit rather than their biological energy requirements.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-[#1F6F4B] to-[#0E1B14] text-white p-6 sm:p-8 rounded-3xl border border-[#3BAA75]/30 shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-[#6FCF97] text-[#0E1B14] flex items-center justify-center font-bold mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider block">
              Our Core Creed
            </span>
            <h3 className="text-2xl font-extrabold text-white mt-1">
              "Eat Smart • Stay Active • Live Healthy"
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-stone-300 leading-relaxed">
              Our mission is to replace dining hall portion guesswork with scientifically tailored guidance in under 10 seconds, eliminating food waste while maximizing student cognitive focus and athletic stamina.
            </p>

            <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-stone-400 block text-[10px] uppercase">Method</span>
                <span className="font-bold text-[#6FCF97]">Mifflin-St Jeor + TDEE</span>
              </div>
              <div>
                <span className="text-stone-400 block text-[10px] uppercase">Latency</span>
                <span className="font-bold text-[#6FCF97]">&lt; 10s at Counter</span>
              </div>
            </div>
          </div>
        </div>

        {/* Three Guiding Pillars */}
        <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm">
          <div className="max-w-2xl mb-8">
            <Badge variant="forest">PROJECT PILLARS</Badge>
            <h3 className="text-2xl font-extrabold text-stone-900 mt-2">
              Three Scientific Anchors Guiding Our Design
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#1F6F4B] flex items-center justify-center mb-3">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-stone-900">Physiological Rigor</h4>
              <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                We reject arbitrary diet trends in favor of clinically peer-reviewed formulas: BMI classifications from WHO, Basal Metabolic Rate via the Mifflin-St Jeor equation, and validated activity coefficients.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#1F6F4B] flex items-center justify-center mb-3">
                <Scale className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-stone-900">Queue Ergonomics</h4>
              <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                A tool that takes 30 seconds to load is useless in a 500-person mess line. Our recommendation engine runs locally on client hardware in under 15 milliseconds, displaying clear scoop directives before students reach the front.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#1F6F4B] flex items-center justify-center mb-3">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-stone-900">Continuous Satiety Tuning</h4>
              <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                Rather than treating recommendations as static commands, Stage 6 incorporates post-meal diner feedback (Too Little / Just Right / Too Heavy) into an adaptive calibration loop.
              </p>
            </div>
          </div>
        </div>

        {/* Cross links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/research/field-observations"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Deep Dive</span>
              <h4 className="text-base font-bold text-stone-900">Field Observations &amp; 600+ Survey Data</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>

          <Link
            to="/how-it-works"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Next Step</span>
              <h4 className="text-base font-bold text-stone-900">How It Works: 6-Stage Pipeline</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>

      <CTASection
        title="Experience the Assistant in Action"
        description="Run your own metrics through the interactive recommender or register for our 4-week pilot cohort."
        primaryLink={{ text: 'Try Live Portion Recommender', href: '/tools/portion-recommender' }}
        secondaryLink={{ text: 'Sign Up for the Pilot', href: '/get-involved' }}
      />
    </div>
  );
};
