import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, UserPlus } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryLink?: { text: string; href: string };
  secondaryLink?: { text: string; href: string };
  variant?: 'forest' | 'dark' | 'mint';
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = 'Ready to Eliminate Food Waste and Fuel Campus Days?',
  description = 'Experience the interactive portion recommender demo or register your hostel wing for our upcoming 4-week trial.',
  primaryLink = { text: 'Try Portion Recommender', href: '/tools/portion-recommender' },
  secondaryLink = { text: 'Join the Campus Pilot', href: '/get-involved' },
  variant = 'forest',
}) => {
  const bgStyles = {
    forest: 'bg-[#1F6F4B] text-white',
    dark: 'bg-[#0E1B14] text-white border-t border-b border-white/10',
    mint: 'bg-[#6FCF97]/15 text-stone-900 border border-[#3BAA75]/30',
  };

  return (
    <section className={`py-12 md:py-16 ${bgStyles[variant]} relative overflow-hidden my-12 rounded-3xl mx-4 sm:mx-6 lg:mx-8 shadow-sm`}>
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center space-x-2 bg-white/10 text-emerald-200 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#6FCF97]" />
          <span>Active Pilot Phase</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight max-w-3xl mx-auto leading-snug">
          {title}
        </h2>

        <p className={`mt-4 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed ${variant === 'mint' ? 'text-stone-700' : 'text-stone-200'}`}>
          {description}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to={primaryLink.href}
            id="cta-primary-button"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-sm bg-[#6FCF97] text-[#0E1B14] hover:bg-[#5bbd84] transition-all shadow-md hover:shadow-lg transform active:scale-95"
          >
            <span>{primaryLink.text}</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>

          {secondaryLink && (
            <Link
              to={secondaryLink.href}
              id="cta-secondary-button"
              className={`w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-sm border transition-all ${
                variant === 'mint'
                  ? 'border-stone-400 text-stone-800 hover:bg-stone-100'
                  : 'border-white/30 text-white hover:bg-white/10'
              }`}
            >
              <UserPlus className="w-4 h-4 mr-2" />
              <span>{secondaryLink.text}</span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
