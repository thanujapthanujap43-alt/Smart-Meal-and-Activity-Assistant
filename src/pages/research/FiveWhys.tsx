import React from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { CTASection } from '../../components/ui/CTASection';
import { Badge } from '../../components/ui/Badge';
import { FiveWhysDiagram } from '../../components/diagrams/FiveWhysDiagram';
import { Search, HelpCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FiveWhys: React.FC = () => {
  return (
    <div>
      <PageHeader
        badge="ROOT CAUSE INVESTIGATION"
        title="Five Whys: Root Cause Analysis"
        intro="Using the classical Toyota Production System 'Five Whys' methodology, our team drilled from surface-level dining hall food waste all the way down to the systemic absence of personalized serving cues at the point of plating."
        breadcrumbs={[
          { label: 'Research', href: '/research/field-observations' },
          { label: 'Five Whys Analysis' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Interactive Five Whys Diagram Component */}
        <FiveWhysDiagram />

        {/* Analytical Takeaways */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <Badge variant="forest">KEY SYSTEMIC INSIGHT</Badge>
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              Why Institutional Blaming Fails
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-stone-700 leading-relaxed">
            <p>
              Traditional hostel administrations attempt to solve food waste through moral persuasion: mounting posters that say <em>"Do Not Waste Food"</em> or levying disciplinary fines at clearing tables. Our Five Whys investigation proves that this approach targets a symptom rather than the underlying mechanism.
            </p>
            <p>
              Students do not waste food maliciously. They waste food because when standing in front of a rushed 4-second serving counter with empty stomachs, they have <strong>zero real-time guidance</strong> on how many scoops their actual body requires for that specific day's physical exertion.
            </p>
          </div>

          <div className="bg-[#0E1B14] text-white p-6 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs text-[#6FCF97] font-bold uppercase tracking-wider block">
                The Engineering Opportunity
              </span>
              <h4 className="text-lg font-bold text-white mt-1">
                Provide Just-In-Time Serving Guidance Under 10 Seconds
              </h4>
            </div>
            <Link
              to="/tools/portion-recommender"
              className="bg-[#6FCF97] hover:bg-[#5bbd84] text-[#0E1B14] font-bold text-xs px-5 py-2.5 rounded-xl shrink-0 transition-all"
            >
              Test Our Solution
            </Link>
          </div>
        </div>

        {/* Cross navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/research/stakeholders"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Next Step</span>
              <h4 className="text-base font-bold text-stone-900">Stakeholder Matrix &amp; Pain Points</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>

          <Link
            to="/research/key-numbers"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Quantitative Data</span>
              <h4 className="text-base font-bold text-stone-900">Key Research Numbers &amp; Charts</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>

      <CTASection
        title="From Root Cause to Functional Solution"
        description="Review the complete architectural breakdown that directly neutralizes Level 5 of the Five Whys."
        primaryLink={{ text: 'Explore System Architecture', href: '/tech/architecture' }}
        secondaryLink={{ text: 'Try Live Portion Recommender', href: '/tools/portion-recommender' }}
      />
    </div>
  );
};
