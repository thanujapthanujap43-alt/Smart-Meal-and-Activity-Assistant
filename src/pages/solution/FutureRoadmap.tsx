import React from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { CTASection } from '../../components/ui/CTASection';
import { Badge } from '../../components/ui/Badge';
import { Sparkles, Calendar, Watch, Scale, Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FutureRoadmap: React.FC = () => {
  const roadmapPhases = [
    {
      phase: 'Phase 1: Current Capstone',
      timeline: 'Semester 8 (Active Deployment)',
      badge: 'Live Now',
      badgeColor: 'bg-emerald-100 text-[#1F6F4B] border-emerald-300',
      title: 'Rule-Based Mobile Assistant &amp; Counter Scoop Passes',
      desc: 'Local-first PWA executing Mifflin-St Jeor and TDEE calculations in &lt; 15ms. Tested across 624 surveyed campus students and deployed for a 4-week 150-student hostel pilot.',
      milestones: [
        'Deterministic portion calculation algorithm',
        'Sub-10s counter queue display pass',
        'Stage 6 single-tap satiety feedback loop',
        'Offline-capable PWA architecture (&lt; 65 KB)',
      ],
    },
    {
      phase: 'Phase 2: IoT Hardware',
      timeline: 'Semester 8 / Inter-Semester',
      badge: 'Prototyping',
      badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
      title: 'Automated Tray Scales at Clearing Conveyor',
      desc: 'Integration of load-cell weight sensors embedded beneath the dish return counter. Automatically logs post-meal leftover food weight via RFID student badges without manual questionnaire logs.',
      milestones: [
        'HX711 load-cell amplifier + ESP32 microcontroller',
        'Tare compensation for standard stainless steel trays',
        'RFID tap-to-clear dining hall tray station',
        'Correlates actual plate waste with morning recommended portions',
      ],
    },
    {
      phase: 'Phase 3: Wearable Integration',
      timeline: 'Next Academic Year',
      badge: 'Planned',
      badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
      title: 'Continuous Step &amp; Heart Rate Telemetry Sync',
      desc: 'Direct synchronization with Google Health Connect, Apple HealthKit, and Strava. Replaces manual activity tier selection with real-time active metabolic rate (AMR) streaming.',
      milestones: [
        'Health Connect API background activity sync',
        'Automatic cardio workout calories burned deduction',
        'Resting heart rate monitoring for recovery tracking',
        'Zero-interaction morning TDEE updates',
      ],
    },
    {
      phase: 'Phase 4: Institutional API',
      timeline: 'Campus-Wide Scale',
      badge: 'Future Vision',
      badgeColor: 'bg-stone-100 text-stone-800 border-stone-300',
      title: 'Predictive Kitchen Procurement &amp; Inventory AI',
      desc: 'Feeds aggregate student caloric demands into the central catering supply chain, allowing hostel managers to forecast precise raw grain purchasing 48 hours in advance.',
      milestones: [
        'Aggregate caloric demand forecasting dashboard',
        'Predictive raw grain &amp; dairy purchasing API',
        'Cross-hostel dining hall load balancing',
        'Municipal green campus composting certification',
      ],
    },
  ];

  return (
    <div>
      <PageHeader
        badge="SCALING & INNOVATION"
        title="Future Scope &amp; Extension Roadmap"
        intro="From our current lightweight rule-based PWA to IoT smart-tray scales, continuous biometric wearable synchronization, and institutional kitchen ERP integrations."
        breadcrumbs={[
          { label: 'Solution', href: '/solution/overview' },
          { label: 'Future Roadmap' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Roadmap Timeline */}
        <div className="space-y-8">
          {roadmapPhases.map((phase, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm relative overflow-hidden space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-stone-100">
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-8 rounded-full bg-[#1F6F4B] text-white flex items-center justify-center font-bold text-xs">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-stone-900" dangerouslySetInnerHTML={{ __html: phase.title }} />
                    <span className="text-xs text-stone-500">{phase.timeline}</span>
                  </div>
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${phase.badgeColor}`}>
                  {phase.badge}
                </span>
              </div>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                {phase.desc}
              </p>

              <div className="pt-2">
                <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block mb-2">
                  Key Engineering Deliverables:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {phase.milestones.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className="bg-stone-50 p-2.5 rounded-xl border border-stone-200 text-xs text-stone-800 flex items-center space-x-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1F6F4B] shrink-0" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cross navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/solution/limitations"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Next Step</span>
              <h4 className="text-base font-bold text-stone-900">Honest Limitations &amp; Edge Cases</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>

          <Link
            to="/tools/portion-recommender"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Active Engine</span>
              <h4 className="text-base font-bold text-stone-900">Experience Phase 1 in Action</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>

      <CTASection
        title="Want to Help Build Phase 2 and 3?"
        description="Join our capstone research group or sign up your hostel wing for experimental IoT trials."
        primaryLink={{ text: 'Join Campus Pilot', href: '/get-involved' }}
        secondaryLink={{ text: 'Contact Research Team', href: '/contact' }}
      />
    </div>
  );
};
