import React from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { CTASection } from '../../components/ui/CTASection';
import { Badge } from '../../components/ui/Badge';
import { Award, TrendingUp, DollarSign, Globe, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ForCollegeManagement: React.FC = () => {
  return (
    <div>
      <PageHeader
        badge="EXECUTIVE LEADERSHIP"
        title="For College Management: Financial ROI &amp; Green Campus Leadership"
        intro="How deploying intelligent dining hall portion guidance lowers institutional catering expenditure by 12–18%, achieves UN SDG 12 targets, and elevates institutional sustainability rankings."
        breadcrumbs={[
          { label: 'For', href: '/research/stakeholders' },
          { label: 'For College Management' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Three Pillars of Institutional ROI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-[#1F6F4B] flex items-center justify-center">
              <DollarSign className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-stone-900">1. Direct Procurement Savings</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              When students stop dumping uneaten rice and bread, bulk grain procurement demand drops by 12–18% annually, generating tens of thousands of dollars in recurring institutional savings.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-[#1F6F4B] flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-stone-900">2. UN SDG 12 Compliance</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Provides verifiable, audit-ready ESG telemetry aligning with United Nations Sustainable Development Goal 12.3: halving per capita global food waste at retail and consumer levels.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-[#1F6F4B] flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-stone-900">3. Accreditation &amp; Rankings</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Demonstrates proactive campus innovation for national accreditation boards (e.g. NAAC, NIRF, AASHE STARS), earning top-tier marks for sustainable infrastructure and student well-being.
            </p>
          </div>
        </div>

        {/* Projected Financial Model */}
        <div className="bg-[#0E1B14] text-white rounded-3xl p-8 border border-white/10 shadow-xl space-y-6">
          <Badge variant="mint">CAMPUS FINANCIAL PROJECTION</Badge>
          <h3 className="text-xl sm:text-2xl font-bold">
            Projected Impact on a 2,000-Resident Campus
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-center">
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
              <span className="text-3xl font-black text-[#6FCF97] font-mono">34.2 Tons</span>
              <span className="text-xs font-bold text-stone-300 block mt-1">Grain Waste Diverted</span>
              <span className="text-[10px] text-stone-400">Annual organic mass prevented</span>
            </div>

            <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
              <span className="text-3xl font-black text-[#6FCF97] font-mono">$48,000+</span>
              <span className="text-xs font-bold text-stone-300 block mt-1">Estimated Annual Savings</span>
              <span className="text-[10px] text-stone-400">In avoided food procurement &amp; hauling</span>
            </div>

            <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
              <span className="text-3xl font-black text-[#6FCF97] font-mono">88%</span>
              <span className="text-xs font-bold text-stone-300 block mt-1">Student Approval Rating</span>
              <span className="text-[10px] text-stone-400">Measured across pilot cohort</span>
            </div>
          </div>
        </div>

        {/* Cross navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/solution/comparison"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Dining Transformation</span>
              <h4 className="text-base font-bold text-stone-900">Before vs. After: What Changes in the Mess</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>

          <Link
            to="/get-involved"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Campus Rollout</span>
              <h4 className="text-base font-bold text-stone-900">Sign Up for the 4-Week Trial</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>

      <CTASection
        title="Ready to Bring Sustainable Dining to Your Campus?"
        description="Partner with our research group for institutional pilot deployments and operational audits."
        primaryLink={{ text: 'Contact Us for Collaboration', href: '/contact' }}
        secondaryLink={{ text: 'Explore System Architecture', href: '/tech/architecture' }}
      />
    </div>
  );
};
