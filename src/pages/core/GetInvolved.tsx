import React, { useState } from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { CTASection } from '../../components/ui/CTASection';
import { Badge } from '../../components/ui/Badge';
import { CheckCircle2, UserPlus, Gift, Calendar, ShieldCheck, Sparkles, Send } from 'lucide-react';

export const GetInvolved: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    rollNo: '',
    email: '',
    hostelWing: 'Block A (Boys)',
    dietaryType: 'Regular',
    activityLevel: 'Moderate (Gym / Sports)',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <PageHeader
        badge="CAMPUS PILOT COHORT"
        title="Get Involved: Join the 4-Week Hostel Pilot"
        intro="Be among the first 150 hostel residents to experience personalized dining. Help eliminate dining hall food waste while boosting your cognitive alertness and athletic stamina."
        breadcrumbs={[{ label: 'Get Involved / Join Pilot' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sign Up Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm">
            <div className="border-b border-stone-100 pb-4 mb-6">
              <Badge variant="mint">REGISTRATION FORM</Badge>
              <h2 className="text-2xl font-bold text-stone-900 mt-2">
                Sign Up for Cohort 1
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Open to all registered hostel residents for the upcoming 4-week semester trial.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200 space-y-3 animate-in fade-in">
                <div className="w-12 h-12 bg-[#1F6F4B] text-white rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-stone-900">Registration Received!</h3>
                <p className="text-xs sm:text-sm text-stone-700 max-w-md mx-auto">
                  Thank you, <strong>{formData.name || 'Participant'}</strong>! You have been queued for Cohort 1. You will receive an onboarding link and mess serving card instructions at <strong>{formData.email || 'your email'}</strong> prior to the launch.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-[#1F6F4B] underline pt-2 block mx-auto"
                >
                  Register another student
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl p-3 text-xs font-semibold text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#1F6F4B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                      Roll Number / Student ID *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.rollNo}
                      onChange={(e) => setFormData({ ...formData, rollNo: e.target.value })}
                      placeholder="e.g. 22BCE1045"
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl p-3 text-xs font-semibold text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#1F6F4B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    College Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="student@college.edu"
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl p-3 text-xs font-semibold text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#1F6F4B]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                      Hostel Residence Wing
                    </label>
                    <select
                      value={formData.hostelWing}
                      onChange={(e) => setFormData({ ...formData, hostelWing: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl p-3 text-xs font-semibold text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#1F6F4B]"
                    >
                      <option>Block A (Senior Boys)</option>
                      <option>Block B (Junior Boys)</option>
                      <option>Block C (Girls Residence)</option>
                      <option>Block D (PG &amp; Research)</option>
                      <option>Day Scholar (Canteen User)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                      Dietary Preference
                    </label>
                    <select
                      value={formData.dietaryType}
                      onChange={(e) => setFormData({ ...formData, dietaryType: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl p-3 text-xs font-semibold text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#1F6F4B]"
                    >
                      <option>Regular (Non-Restricted)</option>
                      <option>Vegetarian</option>
                      <option>Vegan</option>
                      <option>Lactose Sensitive</option>
                      <option>Gluten Sensitive</option>
                    </select>
                  </div>
                </div>

                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-600 flex items-start space-x-2">
                  <ShieldCheck className="w-4 h-4 text-[#3BAA75] shrink-0 mt-0.5" />
                  <span>
                    <strong>Student Privacy Pledge:</strong> Your personal biometrics remain confidential. Data is strictly processed for portion calibration and anonymous sustainability reports.
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1F6F4B] hover:bg-[#28855a] text-white font-bold text-xs py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Pilot Registration</span>
                </button>
              </form>
            )}
          </div>

          {/* What Participants Get (Right Column) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0E1B14] text-white rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl space-y-6">
              <div className="flex items-center space-x-2">
                <Gift className="w-5 h-5 text-[#6FCF97]" />
                <h3 className="text-lg font-bold text-white">What Pilot Participants Receive</h3>
              </div>

              <div className="space-y-4 text-xs">
                <div className="p-3 bg-white/5 rounded-2xl border border-white/10 flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#1F6F4B] text-[#6FCF97] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Personalized Baseline Diagnostic</h4>
                    <p className="text-stone-300 mt-0.5">
                      Full breakdown of your Mifflin-St Jeor BMR and activity multipliers customized for your campus routine.
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-white/5 rounded-2xl border border-white/10 flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#1F6F4B] text-[#6FCF97] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Priority Counter Serving Pass</h4>
                    <p className="text-stone-300 mt-0.5">
                      Use the digital serving card at designated mess lines with standardized scoops for lightning-fast plating.
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-white/5 rounded-2xl border border-white/10 flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#1F6F4B] text-[#6FCF97] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Weekly Personal Plate Waste Analytics</h4>
                    <p className="text-stone-300 mt-0.5">
                      Track the exact kilograms of grain waste you prevented and see how your afternoon alertness correlates with meal choices.
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center space-x-2 mb-3">
                  <Calendar className="w-4 h-4 text-[#6FCF97]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white">4-Week Pilot Timeline</span>
                </div>
                <div className="space-y-2 text-[11px] text-stone-300 font-mono">
                  <div className="flex justify-between">
                    <span>Week 1: Baseline Audit</span>
                    <span className="text-[#6FCF97]">Unassisted Tray Log</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Week 2–3: Active Assistant</span>
                    <span className="text-[#6FCF97]">AI Scoop Card in Use</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Week 4: Post-Evaluation</span>
                    <span className="text-[#6FCF97]">Plate Waste Audit &amp; Survey</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTASection
        title="Curious to See What Your Portion Looks Like First?"
        description="Try the interactive Portion Recommender demo without submitting personal data."
        primaryLink={{ text: 'Try Live Portion Recommender', href: '/tools/portion-recommender' }}
        secondaryLink={{ text: 'Explore System Architecture', href: '/tech/architecture' }}
      />
    </div>
  );
};
