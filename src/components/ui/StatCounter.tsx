import React, { useEffect, useState } from 'react';

interface StatCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  label: string;
  subtext?: string;
  highlight?: boolean;
}

export const StatCounter: React.FC<StatCounterProps> = ({
  target,
  suffix = '',
  prefix = '',
  label,
  subtext,
  highlight = false,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const steps = 30;
    const increment = target / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div
      id={`stat-${label.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
      className={`rounded-2xl p-6 border transition-all duration-300 ${
        highlight
          ? 'bg-[#0E1B14] border-[#3BAA75]/50 text-white shadow-lg shadow-[#1F6F4B]/20'
          : 'bg-white border-stone-200 text-stone-900 shadow-sm'
      }`}
    >
      <div className="flex items-baseline space-x-1">
        <span className={`text-4xl md:text-5xl font-extrabold tracking-tight ${highlight ? 'text-[#6FCF97]' : 'text-[#1F6F4B]'}`}>
          {prefix}{count}{suffix}
        </span>
      </div>
      <h3 className={`mt-2 font-bold text-base md:text-lg tracking-tight ${highlight ? 'text-stone-100' : 'text-stone-900'}`}>
        {label}
      </h3>
      {subtext && (
        <p className={`mt-1 text-sm ${highlight ? 'text-stone-300' : 'text-stone-600'} leading-relaxed`}>
          {subtext}
        </p>
      )}
    </div>
  );
};
