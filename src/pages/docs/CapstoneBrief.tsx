import React from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { CTASection } from '../../components/ui/CTASection';
import { Badge } from '../../components/ui/Badge';
import { GraduationCap, Award, BookOpen, CheckCircle2, ArrowRight, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CapstoneBrief: React.FC = () => {
  return (
    <div>
      <PageHeader
        badge="ACADEMIC PROJECT PROSPECTUS"
        title="Capstone Project Brief &amp; Abstract"
        intro="The formal academic dossier for our Final Year B.Tech Capstone Project in Computer Science &amp; Engineering, outlining our thesis, methodology, faculty mentorship, and institutional deliverables."
        breadcrumbs={[
          { label: 'Documentation', href: '/docs/faqs' },
          { label: 'Capstone Project Brief' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Project Meta Information Card */}
        <div className="bg-[#0E1B14] text-white rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
            <div>
              <span className="text-[#6FCF97] font-mono text-xs font-bold uppercase tracking-wider block">
                Capstone Project ID: CSE-CAP-2025-084
              </span>
              <h2 className="text-xl sm:text-2xl font-bold mt-1 text-white">
                Smart Meal &amp; Activity Assistant
              </h2>
              <span className="text-xs text-stone-300">
                AI-Based Food Portion Recommendation Using BMI and Daily Activity Level
              </span>
            </div>
            <span className="text-xs font-bold text-white bg-[#1F6F4B] px-3.5 py-1.5 rounded-full border border-emerald-500 self-start sm:self-auto">
              Semester 8 Capstone
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
            <div>
              <span className="text-stone-400 font-bold block mb-1">Academic Department:</span>
              <span className="text-stone-200">Department of Computer Science &amp; Engineering</span>
            </div>
            <div>
              <span className="text-stone-400 font-bold block mb-1">Target Institution:</span>
              <span className="text-stone-200">Campus Dining Halls &amp; Hostel Mess Infrastructure</span>
            </div>
            <div>
              <span className="text-stone-400 font-bold block mb-1">Core Focus:</span>
              <span className="text-stone-200">Cyber-Physical Optimization &amp; Food Waste Reduction</span>
            </div>
          </div>
        </div>

        {/* Formal Capstone Abstract */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
          <Badge variant="mint">EXECUTIVE THESIS ABSTRACT</Badge>
          <h3 className="text-xl font-bold text-stone-900">Project Abstract</h3>
          <p className="text-sm text-stone-700 leading-relaxed">
            Institutional dining facilities in university residential colleges universally employ static, uncalibrated food portion serving protocols. Diners with wildly differing metabolic requirements—ranging from sedentary desk study to intense athletic training—receive uniform ladle scoops of calorie-dense grains. Consequently, our empirical campus audit across 4 dining halls revealed a 50% physiological energy mismatch and identified that 60–70% of discarded organic waste stems from plate scrapings of surplus carbohydrates.
          </p>
          <p className="text-sm text-stone-700 leading-relaxed">
            This project develops a privacy-preserving, local-first cyber-physical web assistant that couples individual biometric parameters (height, weight, age, sex) with dynamic daily activity tiers via the clinically validated Mifflin-St Jeor equation. By translating target kilocalories into discrete kitchen serving ladles (e.g. 2 ladles rice, 3 rotis, 1.5 bowls dal) presented on high-contrast screen passes, the system minimizes counter latency (&lt; 4s plating) while providing a closed-loop post-meal satiety feedback adaptation. Preliminary pilot data indicates a projected 40–55% drop in plate waste and significant mitigation of post-prandial cognitive sluggishness.
          </p>
        </div>

        {/* Academic Deliverables Checklist */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
          <Badge variant="forest">DELIVERABLE MILESTONES</Badge>
          <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
            Capstone Engineering Deliverables
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            {[
              'Comprehensive 32-hour dining hall observational audit across 4 mess halls',
              'Survey analysis of 624 university student residents across 3 disciplines',
              'Pure client-side TypeScript physiological calculation engine (< 15ms latency)',
              'Zero-latency counter serving pass UI tested with physical kitchen staff',
              'Stage 6 closed-loop adaptive satiety gradient weight update algorithm',
              'Live 4-week pilot cohort deployment across 150 residential dorm students',
            ].map((milestone, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-stone-50 rounded-2xl border border-stone-200 flex items-start space-x-2 text-stone-800"
              >
                <CheckCircle2 className="w-4 h-4 text-[#1F6F4B] shrink-0 mt-0.5" />
                <span>{milestone}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cross navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/docs/literature-review"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Academic Rigor</span>
              <h4 className="text-base font-bold text-stone-900">Literature Review &amp; Citations</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>

          <Link
            to="/docs/sitemap"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Architecture Index</span>
              <h4 className="text-base font-bold text-stone-900">Site Map &amp; Page Directory</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>

      <CTASection
        title="Experience the Capstone Software in Real Time"
        description="Try our interactive Portion Recommender built as part of this graduation project."
        primaryLink={{ text: 'Try Portion Recommender', href: '/tools/portion-recommender' }}
        secondaryLink={{ text: 'View System Architecture', href: '/tech/architecture' }}
      />
    </div>
  );
};
