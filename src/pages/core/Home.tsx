import React from 'react';
import { Link } from 'react-router-dom';
import { StatCounter } from '../../components/ui/StatCounter';
import { Badge } from '../../components/ui/Badge';
import { FIELD_OBSERVATIONS } from '../../data/projectData';
import { ArchitectureDiagram } from '../../components/diagrams/ArchitectureDiagram';
import { BeforeAfterDiagram } from '../../components/diagrams/BeforeAfterDiagram';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap, Users, Utensils, Award } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#0E1B14] text-white pt-16 pb-20 md:pt-24 md:pb-28 border-b border-white/10 overflow-hidden">
        {/* Subtle decorative radial gradients */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1F6F4B]/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#3BAA75]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 text-[#6FCF97] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-6 border border-white/15 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>B.Tech Final Year Capstone Project</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
              Smart Meal &amp; Activity Assistant
            </h1>

            <p className="mt-4 text-xl sm:text-2xl font-bold text-[#6FCF97] tracking-wide">
              Eat Smart • Stay Active • Live Healthy
            </p>

            <p className="mt-6 text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl font-normal">
              AI-based food portion recommendation using BMI and daily activity level. Designed to eliminate the <strong>50% energy mismatch</strong> and <strong>60–70% plate waste</strong> observed across hostel mess halls through personalized guidance delivered at the serving counter in <strong>under 10 seconds</strong>.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/tools/portion-recommender"
                id="hero-primary-cta"
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl font-bold text-sm bg-[#6FCF97] text-[#0E1B14] hover:bg-[#5bbd84] transition-all shadow-lg shadow-[#6FCF97]/20 transform active:scale-95"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                <span>Try Live Portion Demo</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>

              <Link
                to="/get-involved"
                id="hero-secondary-cta"
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl font-bold text-sm bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-all"
              >
                <span>Join Campus 4-Week Pilot</span>
              </Link>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-stone-400">
              <span className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-[#6FCF97] mr-1.5" />
                No camera / Zero latency
              </span>
              <span className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-[#6FCF97] mr-1.5" />
                Mifflin-St Jeor &amp; TDEE Equations
              </span>
              <span className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-[#6FCF97] mr-1.5" />
                Tested across 600+ Students
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Key Stats Strip */}
      <section className="py-12 -mt-6 relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCounter
            target={50}
            suffix="%"
            label="Energy Mismatch"
            subtext="Observed difference between food calories served and actual physiological daily expenditure."
            highlight={true}
          />
          <StatCounter
            target={70}
            prefix="60–"
            suffix="%"
            label="Mess Food Waste"
            subtext="Portion of daily mass discarded by diners at disposal bins due to uncalibrated serving scoops."
            highlight={false}
          />
          <StatCounter
            target={600}
            suffix="+"
            label="Students Surveyed"
            subtext="Comprehensive campus research study examining eating habits and athletic schedules."
            highlight={false}
          />
          <StatCounter
            target={10}
            prefix="< "
            suffix="s"
            label="Serving Point Latency"
            subtext="Turnaround time to generate personalized meal card without creating mess queue bottlenecks."
            highlight={true}
          />
        </div>
      </section>

      {/* Problem Teaser: Three Field Observations */}
      <section className="py-16 md:py-20 bg-[#F4F5F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <Badge variant="mint">Research Findings</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 mt-3 tracking-tight">
              Three Field Patterns Observed in Campus Dining
            </h2>
            <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
              Before writing a single line of code, our team conducted 32 hours of field audits in hostel dining halls. Students choose portions based on habit or visual hunger rather than biological need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FIELD_OBSERVATIONS.map((obs, idx) => (
              <div
                key={obs.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-sm flex flex-col justify-between hover:border-stone-300 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-[#1F6F4B] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      PATTERN 0{idx + 1}
                    </span>
                    <span className="text-[10px] font-bold text-stone-400 tracking-wider uppercase">
                      {obs.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-stone-900 group-hover:text-[#1F6F4B] transition-colors">
                    {obs.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {obs.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100">
                  <div className="text-xs text-stone-500 italic">
                    "{obs.evidence}"
                  </div>
                  <Link
                    to="/research/field-observations"
                    className="inline-flex items-center text-xs font-bold text-[#1F6F4B] hover:text-[#3BAA75] mt-3 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read observational analysis</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/research/problem-statement"
              className="inline-flex items-center text-sm font-bold text-stone-800 hover:text-[#1F6F4B] underline"
            >
              Explore Full Problem Statement &amp; Five Whys Analysis →
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive System Pipeline */}
      <section className="py-16 md:py-20 bg-white border-t border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <Badge variant="forest">System Design</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 mt-3 tracking-tight">
              A 6-Stage Pipeline Built for Queue Speed
            </h2>
            <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
              We chose a rule-based BMR/TDEE engine over slow computer-vision alternatives. Click any stage below to inspect the mathematical transformations that occur in milliseconds.
            </p>
          </div>

          <ArchitectureDiagram />
        </div>
      </section>

      {/* Before vs. After Transformation Section */}
      <section className="py-16 md:py-20 bg-[#F4F5F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <Badge variant="mint">Expected Impact</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 mt-3 tracking-tight">
              Before vs. After the Smart Assistant
            </h2>
            <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
              Projected outcomes across dining hall waste, student afternoon focus, and kitchen operational predictability during our 4-week pilot deployment.
            </p>
          </div>

          <BeforeAfterDiagram />
        </div>
      </section>

      {/* Why This Approach Won Callout */}
      <section className="py-16 bg-[#0E1B14] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <Badge variant="mint">DECISION RATIONALE</Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Why A Rule-Based BMR/TDEE Engine Won Over a CNN
              </h2>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                Early proposals considered an image-based Convolutional Neural Network (CNN) to photograph trays. We formally rejected this approach because CNN inference introduces 8–15 second latency per student, requires expensive high-end phones or dedicated counter cameras, and still cannot deduce whether a student spent the afternoon running sprints or studying at a desk.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                  <span className="text-xs font-bold text-[#6FCF97] uppercase tracking-wider block">Rule-Based Engine</span>
                  <p className="text-xs text-stone-300 mt-1">&lt; 15ms latency, runs locally on an $80 Android phone, incorporates physiological formulas.</p>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                  <span className="text-xs font-bold text-red-400 uppercase tracking-wider block">Rejected CNN</span>
                  <p className="text-xs text-stone-400 mt-1">High latency, battery drain, fails on mixed gravies, ignores student internal activity.</p>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  to="/solution/why-this-won"
                  className="inline-flex items-center text-xs font-bold text-[#6FCF97] hover:underline"
                >
                  <span>Read full technical decision analysis</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/5 p-6 rounded-3xl border border-white/10 text-center space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#1F6F4B] flex items-center justify-center text-white mx-auto">
                <Zap className="w-6 h-6 text-[#6FCF97]" />
              </div>
              <h3 className="text-xl font-bold text-white">Experience It Yourself</h3>
              <p className="text-xs text-stone-300 max-w-sm mx-auto">
                Adjust height, weight, and activity to see a personalized portion card generated in real time.
              </p>
              <Link
                to="/tools/portion-recommender"
                className="w-full bg-[#6FCF97] text-[#0E1B14] font-extrabold text-xs py-3 rounded-xl block hover:bg-[#5bbd84] transition-colors"
              >
                Launch Live Recommender
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stakeholders Strip */}
      <section className="py-16 bg-[#F4F5F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <Badge variant="forest">Stakeholder Ecosystem</Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-2">
                Designed for the Whole Campus Community
              </h2>
            </div>
            <Link to="/research/stakeholders" className="text-xs font-bold text-[#1F6F4B] hover:underline mt-2 md:mt-0">
              View All 9 Stakeholders &amp; Pain Points →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { role: 'Students', desc: 'Eliminates afternoon study crashes & athletic under-fueling', link: '/for/students' },
              { role: 'Mess Staff', desc: 'Clear visual scoop guidance; faster counter throughput', link: '/for/mess-staff' },
              { role: 'Hostel Wardens', desc: 'Dramatically reduced food waste bins & pest attraction', link: '/for/wardens-nutritionists' },
              { role: 'College Management', desc: 'Measurable green campus sustainability & lower food procurement cost', link: '/for/college-management' },
            ].map((s, idx) => (
              <Link
                key={idx}
                to={s.link}
                className="bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] hover:shadow-md transition-all group"
              >
                <div className="text-xs font-bold text-[#1F6F4B] uppercase tracking-wider mb-1">
                  Target Group
                </div>
                <h3 className="font-bold text-stone-900 text-base group-hover:text-[#1F6F4B]">
                  {s.role}
                </h3>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  {s.desc}
                </p>
                <span className="inline-flex items-center text-xs font-bold text-[#1F6F4B] mt-4">
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
