import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, Heart, Shield, ArrowUpRight, Github, Sparkles } from 'lucide-react';
import { ALL_PAGES_INDEX } from '../../data/sitemap';

export const Footer: React.FC = () => {
  const coreLinks = ALL_PAGES_INDEX.filter((p) => p.section === 'Core');
  const researchLinks = ALL_PAGES_INDEX.filter((p) => p.section === 'Research');
  const solutionLinks = ALL_PAGES_INDEX.filter((p) => p.section === 'Solution');
  const techLinks = ALL_PAGES_INDEX.filter((p) => p.section === 'Technology');
  const toolsLinks = ALL_PAGES_INDEX.filter((p) => p.section === 'Tools');
  const stakeholderLinks = ALL_PAGES_INDEX.filter((p) => p.section === 'Stakeholders');
  const supportingLinks = ALL_PAGES_INDEX.filter((p) => p.section === 'Supporting');

  return (
    <footer className="bg-[#0E1B14] text-stone-300 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Branding & Project Mission Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#1F6F4B] to-[#3BAA75] flex items-center justify-center text-white shadow-md shadow-[#1F6F4B]/30">
                <Utensils className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg text-white tracking-tight">
                  Smart Meal &amp; Activity Assistant
                </span>
                <span className="text-xs text-[#6FCF97] font-semibold tracking-wide">
                  Eat Smart • Stay Active • Live Healthy
                </span>
              </div>
            </Link>

            <p className="text-sm text-stone-400 leading-relaxed max-w-md">
              An AI-based portion recommendation system using BMI and daily physical activity level. Designed to eliminate the observed 50% energy mismatch and 60–70% food waste in hostel dining halls through fast, under-10-second guidance.
            </p>

            <div className="flex items-center space-x-2 text-xs text-stone-400 bg-white/5 border border-white/10 rounded-xl p-3 w-fit">
              <Shield className="w-4 h-4 text-[#6FCF97] shrink-0" />
              <span>Estimates for educational &amp; research purposes — not medical advice.</span>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
              <span className="text-2xl font-extrabold text-[#6FCF97] block">50%</span>
              <span className="text-xs font-bold text-white uppercase tracking-wider mt-1 block">
                Observed Mismatch
              </span>
              <p className="text-[11px] text-stone-400 mt-1">
                Discrepancy between plate calories and physiological burn.
              </p>
            </div>

            <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
              <span className="text-2xl font-extrabold text-[#6FCF97] block">60–70%</span>
              <span className="text-xs font-bold text-white uppercase tracking-wider mt-1 block">
                Mess Food Waste
              </span>
              <p className="text-[11px] text-stone-400 mt-1">
                Plate waste dump mass targeted for significant reduction.
              </p>
            </div>

            <div className="bg-white/5 p-4 rounded-2xl border border-white/10 col-span-2 sm:col-span-1">
              <span className="text-2xl font-extrabold text-[#6FCF97] block">&lt; 10s</span>
              <span className="text-xs font-bold text-white uppercase tracking-wider mt-1 block">
                Counter Latency
              </span>
              <p className="text-[11px] text-stone-400 mt-1">
                Recommendation generation at physical point of serving.
              </p>
            </div>
          </div>
        </div>

        {/* Sitemap Grid: All 42 Pages Categorized */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 border-b border-white/10 text-xs">
          {/* Column 1: Core */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3 text-[#6FCF97]">
              Core Portal
            </h4>
            <ul className="space-y-2">
              {coreLinks.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-stone-400 hover:text-white transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Research */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3 text-[#6FCF97]">
              Research &amp; Problem
            </h4>
            <ul className="space-y-2">
              {researchLinks.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-stone-400 hover:text-white transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Solution */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3 text-[#6FCF97]">
              Solution Architecture
            </h4>
            <ul className="space-y-2">
              {solutionLinks.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-stone-400 hover:text-white transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Technology */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3 text-[#6FCF97]">
              Deep Tech Pipeline
            </h4>
            <ul className="space-y-2">
              {techLinks.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-stone-400 hover:text-white transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Tools */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3 text-[#6FCF97]">
              Interactive Tools
            </h4>
            <ul className="space-y-2">
              {toolsLinks.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-stone-400 hover:text-white transition-colors flex items-center">
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 6: Stakeholders & Supporting */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3 text-[#6FCF97]">
              Stakeholders &amp; Info
            </h4>
            <ul className="space-y-2">
              {stakeholderLinks.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-stone-400 hover:text-white transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-white/10">
                <Link to="/team" className="text-stone-400 hover:text-white transition-colors">
                  Team / Contributors
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-stone-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-stone-400 hover:text-white transition-colors">
                  Blog &amp; Insights
                </Link>
              </li>
              <li>
                <Link to="/glossary" className="text-stone-400 hover:text-white transition-colors">
                  Glossary
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-stone-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-stone-400 hover:text-white transition-colors">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Course Marker */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
            <span>© 2026 Smart Meal &amp; Activity Assistant. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-stone-400 font-medium">
              Made as part of B.Tech Final Year Capstone Project [CS8901 / Department of Computer Science &amp; Engineering]
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/privacy-policy" className="hover:text-stone-300">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-stone-300">Terms</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-stone-300">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
