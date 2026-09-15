import React from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { CTASection } from '../../components/ui/CTASection';
import { Badge } from '../../components/ui/Badge';
import { Utensils, Clock, Trash2, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ForMessStaff: React.FC = () => {
  return (
    <div>
      <PageHeader
        badge="CATERING OPERATIONS"
        title="For Mess Staff &amp; Caterers: Streamline Plating &amp; Cut Waste"
        intro="How standardized digital scoop passes speed up counter serving times, eliminate student portion disputes, and drastically reduce the physical burden of hauling heavy food waste bins."
        breadcrumbs={[
          { label: 'For', href: '/research/stakeholders' },
          { label: 'For Mess Staff & Caterers' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Operational Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-[#1F6F4B] flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-stone-900">1. Instant Visual Scoops</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              No grams or calorie calculations needed. Students present bold, high-contrast badges: <em>"2 Scoops Rice / 3 Rotis / 1.5 Dal"</em> that cooks read from across the counter in 1 second.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-[#1F6F4B] flex items-center justify-center">
              <Utensils className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-stone-900">2. Zero Counter Disputes</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Eliminates awkward arguments when diners demand excessive portions or complain about stingy ladles. The authority shifts to the student's personal nutritional pass.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-[#1F6F4B] flex items-center justify-center">
              <Trash2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-stone-900">3. Less Waste Bin Hauling</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Hostel kitchen cleaning staff currently haul multiple 80-kilogram bins of rotten cooked rice daily. A 40–50% reduction in plate waste directly alleviates heavy physical labor.
            </p>
          </div>
        </div>

        {/* Counter Staff FAQ */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
          <Badge variant="mint">COUNTER PRACTICALITIES</Badge>
          <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
            Frequently Asked Questions from Mess Supervisors
          </h3>

          <div className="space-y-4 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
              <span className="font-bold text-stone-900 block">Q: Does this slow down the 1:00 PM rush hour?</span>
              <p className="text-stone-600">
                A: In fact, it speeds it up! Observational tests prove that students displaying a clear screen pass spend 2.4 seconds less at the counter than students deliberating or changing their minds midway through plating.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
              <span className="font-bold text-stone-900 block">Q: Do we need expensive electronic scales or Wi-Fi scanners?</span>
              <p className="text-stone-600">
                A: Zero equipment is required for kitchen staff. Cooks continue using their standard stainless steel ladles. The technology sits entirely on the student's phone screen.
              </p>
            </div>
          </div>
        </div>

        {/* Cross navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/for/wardens-nutritionists"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Next Persona</span>
              <h4 className="text-base font-bold text-stone-900">For Wardens &amp; Campus Nutritionists</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>

          <Link
            to="/tools/app-preview"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Visual Preview</span>
              <h4 className="text-base font-bold text-stone-900">Preview the Mess Counter Card</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>

      <CTASection
        title="See the Counter Pass in Action"
        description="Try our interactive Portion Recommender to view the exact screen mess staff will see."
        primaryLink={{ text: 'Try Live Portion Recommender', href: '/tools/portion-recommender' }}
        secondaryLink={{ text: 'Contact Us for Mess Demos', href: '/contact' }}
      />
    </div>
  );
};
