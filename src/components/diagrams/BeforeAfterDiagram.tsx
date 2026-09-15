import React, { useState } from 'react';
import { BEFORE_AFTER_ITEMS } from '../../data/projectData';
import { Badge } from '../ui/Badge';
import { ArrowRight, Check, X } from 'lucide-react';

export const BeforeAfterDiagram: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'waste' | 'energy' | 'ux'>('all');

  return (
    <div id="before-after-diagram-container" className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-100">
        <div>
          <div className="flex items-center space-x-2">
            <Badge variant="mint" size="sm">Transformation Matrix</Badge>
            <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Before vs. After</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
            Transforming Campus Dining Dynamics
          </h3>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {BEFORE_AFTER_ITEMS.map((item, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-stone-200 p-4 sm:p-5 hover:border-stone-300 transition-all bg-[#FAFAF7]"
          >
            <div className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-3">
              {item.category}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
              {/* Before Column */}
              <div className="bg-red-50/60 border border-red-200/70 rounded-xl p-4 flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <span className="text-[11px] font-extrabold uppercase text-red-800 tracking-wider block">
                    Before: The Status Quo
                  </span>
                  <p className="text-xs sm:text-sm text-stone-800 font-medium mt-1 leading-snug">
                    {item.before}
                  </p>
                </div>
              </div>

              {/* After Column */}
              <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-4 flex items-start space-x-3 relative">
                <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <span className="text-[11px] font-extrabold uppercase text-[#1F6F4B] tracking-wider block">
                    After: With Smart Meal Assistant
                  </span>
                  <p className="text-xs sm:text-sm text-stone-900 font-bold mt-1 leading-snug">
                    {item.after}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
