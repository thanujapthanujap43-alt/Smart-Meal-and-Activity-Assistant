import React, { useState } from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { CTASection } from '../../components/ui/CTASection';
import { Badge } from '../../components/ui/Badge';
import { Smartphone, Utensils, CheckCircle2, RotateCcw, Flame, Sparkles, Activity, ShieldCheck, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AppPreview: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<'counter' | 'checkin' | 'feedback' | 'analytics'>('counter');

  const screens = [
    { id: 'counter', title: '1. Counter Serving Card', desc: 'Shown to mess staff in line under 10 seconds' },
    { id: 'checkin', title: '2. 1-Tap Activity Check-in', desc: 'Daily morning or pre-meal activity update' },
    { id: 'feedback', title: '3. Satiety Feedback Loop', desc: 'Post-meal fullness rating for auto-tuning' },
    { id: 'analytics', title: '4. Student Waste Analytics', desc: 'Personal plate waste saved & energy tracker' },
  ];

  return (
    <div>
      <PageHeader
        badge="MOBILE EXPERIENCE"
        title="Mobile App Interface Preview"
        intro="Explore high-fidelity mockups of the student-facing Smart Meal Assistant. Engineered for low-end smartphones, instant loading under 10 seconds, and zero dining hall queue friction."
        breadcrumbs={[
          { label: 'Tools', href: '/tools/portion-recommender' },
          { label: 'Mobile App Preview' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Screen Switcher Controls (Left - 5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-xl font-bold text-stone-900">
              Interactive Screen Flow
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Every screen is purpose-built to adhere to our strict sub-10-second queue latency requirement. Notice how complex physiological formulas are abstracted into instant, color-coded visual scoop guidance.
            </p>

            <div className="space-y-2.5 pt-2">
              {screens.map((s) => {
                const isSelected = activeScreen === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveScreen(s.id as any)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all ${
                      isSelected
                        ? 'bg-[#0E1B14] border-[#3BAA75] text-white shadow-md ring-1 ring-[#3BAA75]'
                        : 'bg-white border-stone-200 text-stone-800 hover:bg-stone-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm">{s.title}</span>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-[#6FCF97] animate-pulse" />
                      )}
                    </div>
                    <p className={`text-xs mt-1 ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                      {s.desc}
                    </p>
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-stone-200 space-y-2 text-xs text-stone-600">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-[#3BAA75]" />
                <span>PWA bundle size: <strong>&lt; 65 KB</strong> (Loads on spotty 2G/3G Wi-Fi)</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-[#3BAA75]" />
                <span>Local-first storage: <strong>No biometric cloud exposure</strong></span>
              </div>
            </div>
          </div>

          {/* Interactive Smartphone Mockup (Right - 7 cols) */}
          <div className="lg:col-span-7 flex justify-center py-4">
            <div className="w-[320px] sm:w-[350px] bg-[#0E1B14] rounded-[44px] p-3.5 border-4 border-stone-800 shadow-2xl shadow-stone-900/40 relative">
              {/* Phone Speaker & Camera Island */}
              <div className="w-28 h-4 bg-stone-900 rounded-full mx-auto mb-2 flex items-center justify-center space-x-1.5">
                <div className="w-2 h-2 rounded-full bg-stone-700" />
                <div className="w-1.5 h-1.5 rounded-full bg-stone-800" />
              </div>

              {/* Phone Screen Canvas */}
              <div className="bg-[#0B1610] rounded-[34px] overflow-hidden text-white min-h-[580px] p-4 flex flex-col justify-between border border-white/10">
                {/* Screen Top Status Bar */}
                <div className="flex items-center justify-between text-[10px] text-stone-400 pb-3 border-b border-white/10">
                  <span className="font-mono font-bold">12:54 PM</span>
                  <div className="flex items-center space-x-1">
                    <span className="text-[9px] bg-[#1F6F4B] text-[#6FCF97] px-1.5 py-0.2 rounded font-bold">HOSTEL-NET</span>
                    <span>100%</span>
                  </div>
                </div>

                {/* Dynamic Screen Content */}
                <div className="flex-1 py-3">
                  {activeScreen === 'counter' && (
                    <div className="space-y-3 animate-in fade-in duration-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1.5">
                          <Utensils className="w-4 h-4 text-[#6FCF97]" />
                          <span className="text-xs font-bold">Lunch Serving Pass</span>
                        </div>
                        <span className="text-[9px] bg-emerald-500/20 text-[#6FCF97] px-2 py-0.5 rounded-full border border-emerald-500/30 font-bold uppercase">
                          Standard Tier
                        </span>
                      </div>

                      <div className="bg-gradient-to-br from-[#1F6F4B] to-[#0E1B14] p-4 rounded-2xl border border-[#3BAA75]/40 text-center">
                        <span className="text-[10px] uppercase font-bold text-emerald-200 tracking-wider">
                          Recommended Portion
                        </span>
                        <div className="text-3xl font-extrabold text-[#6FCF97] mt-0.5">
                          680 kcal
                        </div>
                        <p className="text-[11px] text-stone-300 mt-0.5">
                          Target for Moderate Campus Activity
                        </p>
                      </div>

                      {/* Scoops */}
                      <div className="space-y-1.5 text-xs">
                        <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
                          Show Counter Staff:
                        </span>
                        <div className="bg-white/5 p-2.5 rounded-xl flex justify-between items-center border border-white/5">
                          <span className="text-stone-300 font-medium">Grains (Rice / Roti)</span>
                          <span className="font-bold text-white text-xs">2 scoops / 3 rotis</span>
                        </div>
                        <div className="bg-white/5 p-2.5 rounded-xl flex justify-between items-center border border-white/5">
                          <span className="text-stone-300 font-medium">Protein (Dal Makhani)</span>
                          <span className="font-bold text-white text-xs">1.5 bowls</span>
                        </div>
                        <div className="bg-white/5 p-2.5 rounded-xl flex justify-between items-center border border-white/5">
                          <span className="text-stone-300 font-medium">Salad &amp; Greens</span>
                          <span className="font-bold text-[#6FCF97] text-xs">1 full bowl</span>
                        </div>
                      </div>

                      <div className="text-[10px] text-stone-400 text-center pt-2">
                        Hold screen visible to counter server
                      </div>
                    </div>
                  )}

                  {activeScreen === 'checkin' && (
                    <div className="space-y-3 animate-in fade-in duration-200">
                      <div className="flex items-center space-x-1.5">
                        <Activity className="w-4 h-4 text-[#6FCF97]" />
                        <span className="text-xs font-bold">Daily Activity Check-in</span>
                      </div>
                      <p className="text-[11px] text-stone-300">
                        What does your physical schedule look like today?
                      </p>

                      <div className="space-y-2 text-xs">
                        {[
                          { title: 'Desk Bound / Studying', mult: '1.2x', desc: 'Exam prep & online classes' },
                          { title: 'Campus Walking & Chores', mult: '1.38x', desc: 'Walking between lecture blocks' },
                          { title: 'Gym or Sports Practice', mult: '1.55x', desc: '1 hr badminton or weight session', active: true },
                          { title: 'Varsity Training', mult: '1.75x', desc: 'Inter-college team drills' },
                        ].map((item, i) => (
                          <div
                            key={i}
                            className={`p-2.5 rounded-xl border text-left ${
                              item.active
                                ? 'bg-[#1F6F4B] border-[#3BAA75] text-white font-bold'
                                : 'bg-white/5 border-white/10 text-stone-300'
                            }`}
                          >
                            <div className="flex justify-between items-center text-xs">
                              <span>{item.title}</span>
                              <span className="text-[10px] font-mono opacity-80">{item.mult}</span>
                            </div>
                            <span className="text-[9px] opacity-75 block mt-0.5">{item.desc}</span>
                          </div>
                        ))}
                      </div>

                      <button className="w-full bg-[#6FCF97] text-[#0E1B14] font-bold text-xs py-2 rounded-xl mt-2">
                        Update Today's Multiplier
                      </button>
                    </div>
                  )}

                  {activeScreen === 'feedback' && (
                    <div className="space-y-4 animate-in fade-in duration-200 text-center pt-4">
                      <div className="w-12 h-12 rounded-full bg-[#1F6F4B] flex items-center justify-center mx-auto text-[#6FCF97]">
                        <Utensils className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">How Was Lunch?</h4>
                        <p className="text-[11px] text-stone-400 mt-1">
                          1-tap feedback continuously tunes your future portion recommendations.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 p-2.5 rounded-xl text-xs font-semibold text-stone-300 flex items-center justify-between">
                          <span>Still Hungry</span>
                          <span>😕</span>
                        </button>
                        <button className="w-full bg-[#1F6F4B] border border-[#3BAA75] p-2.5 rounded-xl text-xs font-bold text-white flex items-center justify-between">
                          <span>Just Right (Zero Food Dumped)</span>
                          <span>👌</span>
                        </button>
                        <button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 p-2.5 rounded-xl text-xs font-semibold text-stone-300 flex items-center justify-between">
                          <span>Too Heavy / Sluggish</span>
                          <span>😴</span>
                        </button>
                      </div>

                      <span className="text-[10px] text-emerald-400 block">
                        Saved 140g food waste today!
                      </span>
                    </div>
                  )}

                  {activeScreen === 'analytics' && (
                    <div className="space-y-3 animate-in fade-in duration-200">
                      <div className="flex items-center space-x-1.5">
                        <Sparkles className="w-4 h-4 text-[#6FCF97]" />
                        <span className="text-xs font-bold">Your Impact Dashboard</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-center text-xs">
                        <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
                          <span className="text-[10px] text-stone-400 block">Food Saved</span>
                          <span className="text-base font-extrabold text-[#6FCF97]">2.4 kg</span>
                          <span className="text-[9px] text-stone-400 block">This month</span>
                        </div>
                        <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
                          <span className="text-[10px] text-stone-400 block">Energy Match</span>
                          <span className="text-base font-extrabold text-[#6FCF97]">94%</span>
                          <span className="text-[9px] text-stone-400 block">Accuracy</span>
                        </div>
                      </div>

                      <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-xs space-y-1.5">
                        <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
                          30-Day Alertness Trend
                        </span>
                        <p className="text-[11px] text-stone-300">
                          Afternoon drowsiness reported reduced by <strong>68%</strong> during 2:00 PM labs.
                        </p>
                      </div>

                      <div className="p-2.5 bg-emerald-950/60 rounded-xl border border-emerald-800 text-[10px] text-emerald-300 text-center">
                        Eligible for Campus Green Dining Award 🌿
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom App Navigation Bar */}
                <div className="pt-3 border-t border-white/10 flex justify-around text-[9px] text-stone-400">
                  <span className="text-[#6FCF97] font-bold">Counter</span>
                  <span>Activity</span>
                  <span>Feedback</span>
                  <span>History</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTASection
        title="Test the Algorithm Right in Your Browser"
        description="Run your own numbers through the interactive Portion Recommender without needing a mobile install."
        primaryLink={{ text: 'Try Live Portion Recommender', href: '/tools/portion-recommender' }}
        secondaryLink={{ text: 'Learn Technical Pipeline', href: '/tech/architecture' }}
      />
    </div>
  );
};
