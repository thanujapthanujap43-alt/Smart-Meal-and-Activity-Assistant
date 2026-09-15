import React from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { CTASection } from '../../components/ui/CTASection';
import { Badge } from '../../components/ui/Badge';
import { ShieldCheck, HeartPulse, Building2, BarChart2, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ForWardensNutritionists: React.FC = () => {
  return (
    <div>
      <PageHeader
        badge="CAMPUS HEALTH & HOUSING"
        title="For Wardens &amp; Campus Nutritionists"
        intro="How our cyber-physical portioning assistant eliminates the pest and sanitation hazards of overflowing organic waste bins while giving health clinics verified dietary tools."
        breadcrumbs={[
          { label: 'For', href: '/research/stakeholders' },
          { label: 'For Wardens & Nutritionists' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Hostel Warden Section */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-[#1F6F4B] flex items-center justify-center font-bold">
              <Building2 className="w-5 h-5" />
            </div>
            <Badge variant="forest">FOR HOSTEL WARDENS</Badge>
            <h3 className="text-xl font-bold text-stone-900">
              Clean Bins, Lower Pest Risks, &amp; Peaceful Dining
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
              <p>
                Hostel wardens frequently manage student grievances over unhygienic dining conditions, pest infestations around waste chutes, and foul odors from rotting rice in dumpster areas.
              </p>
              <p>
                By cutting plate waste volume by 40–55%, the Smart Meal Assistant directly curtails the organic matter that attracts rodents and stray animals, leading to cleaner facilities and lower municipal waste removal surcharges.
              </p>
            </div>
          </div>

          {/* Campus Nutritionist Section */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-[#1F6F4B] flex items-center justify-center font-bold">
              <HeartPulse className="w-5 h-5" />
            </div>
            <Badge variant="mint">FOR CAMPUS NUTRITIONISTS</Badge>
            <h3 className="text-xl font-bold text-stone-900">
              Evidence-Based Nutritional Baselines
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
              <p>
                Campus medical staff routinely treat students suffering from nutritional deficiencies, erratic eating habits, and post-prandial chronic fatigue.
              </p>
              <p>
                The system gives health counselors an objective baseline grounded in the Mifflin-St Jeor formula, allowing students to learn the relationship between physical expenditure and metabolic intake without restrictive diet fads.
              </p>
            </div>
          </div>
        </div>

        {/* Cross navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/for/college-management"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Institutional View</span>
              <h4 className="text-base font-bold text-stone-900">For College Management: ROI &amp; Sustainability</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>

          <Link
            to="/tools/portion-recommender"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Interactive Tool</span>
              <h4 className="text-base font-bold text-stone-900">Experience Live Portion Recommender</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>

      <CTASection
        title="Interested in Deploying in Your Hostel Wing?"
        description="Connect with our student research team to register your dining hall for our upcoming trial cohort."
        primaryLink={{ text: 'Join Campus Pilot Cohort', href: '/get-involved' }}
        secondaryLink={{ text: 'Contact Us for Inquiries', href: '/contact' }}
      />
    </div>
  );
};
