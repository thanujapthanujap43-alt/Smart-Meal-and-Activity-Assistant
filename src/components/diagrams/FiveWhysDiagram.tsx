import React, { useState } from 'react';
import { FIVE_WHYS_STEPS } from '../../data/projectData';
import { Badge } from '../ui/Badge';
import { AlertCircle, ArrowDown, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';

export const FiveWhysDiagram: React.FC = () => {
  const [expandedStep, setExpandedStep] = useState<number>(5); // default root cause open

  return (
    <div id="five-whys-diagram-container" className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-100">
        <div>
          <div className="flex items-center space-x-2">
            <Badge variant="mint" size="sm">Root Cause Analysis</Badge>
            <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Five Whys Methodology</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
            Drilldown from Plate Waste to Core Missing System
          </h3>
        </div>
        <p className="text-xs text-stone-500 max-w-xs">
          Rigorous root cause determination based on observational canteen audits and 600+ student surveys.
        </p>
      </div>

      <div className="mt-8 space-y-3">
        {FIVE_WHYS_STEPS.map((item, index) => {
          const isExpanded = expandedStep === item.step;
          const isLast = item.step === 5;

          return (
            <div key={item.step} className="relative">
              <div
                id={`five-why-step-${item.step}`}
                onClick={() => setExpandedStep(item.step)}
                className={`cursor-pointer rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isLast
                    ? 'bg-[#0E1B14] border-[#3BAA75] text-white shadow-md'
                    : isExpanded
                    ? 'bg-stone-50 border-[#1F6F4B]/50 ring-1 ring-[#1F6F4B]/20'
                    : 'bg-white border-stone-200 hover:border-stone-300'
                }`}
              >
                <div className="p-4 sm:p-5 flex items-start justify-between gap-4">
                  <div className="flex items-start space-x-3.5">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-extrabold text-xs shrink-0 mt-0.5 ${
                        isLast
                          ? 'bg-[#6FCF97] text-[#0E1B14]'
                          : isExpanded
                          ? 'bg-[#1F6F4B] text-white'
                          : 'bg-stone-100 text-stone-700'
                      }`}
                    >
                      W{item.step}
                    </div>

                    <div>
                      <span
                        className={`text-xs font-bold uppercase tracking-wider block ${
                          isLast ? 'text-[#6FCF97]' : 'text-[#1F6F4B]'
                        }`}
                      >
                        {isLast ? 'ROOT CAUSE (WHY 5)' : `WHY LEVEL 0${item.step}`}
                      </span>
                      <h4
                        className={`text-sm sm:text-base font-bold mt-0.5 ${
                          isLast ? 'text-white' : 'text-stone-900'
                        }`}
                      >
                        {item.question}
                      </h4>
                    </div>
                  </div>

                  <button
                    className={`p-1 rounded-full ${
                      isLast ? 'text-[#6FCF97]' : 'text-stone-400'
                    }`}
                    aria-label="Toggle details"
                  >
                    <ChevronRight
                      className={`w-5 h-5 transition-transform ${
                        isExpanded ? 'rotate-90' : ''
                      }`}
                    />
                  </button>
                </div>

                {isExpanded && (
                  <div
                    className={`px-5 pb-5 pt-1 border-t text-sm leading-relaxed ${
                      isLast
                        ? 'border-white/10 text-stone-200'
                        : 'border-stone-200 text-stone-700'
                    }`}
                  >
                    <div className="flex items-start space-x-2 mt-2">
                      <span className="font-bold shrink-0">Finding:</span>
                      <p>{item.answer}</p>
                    </div>

                    <div
                      className={`mt-3 p-3 rounded-xl flex items-center space-x-2 text-xs font-medium ${
                        isLast
                          ? 'bg-[#1F6F4B]/40 text-emerald-200 border border-[#3BAA75]/30'
                          : 'bg-stone-100 text-stone-600'
                      }`}
                    >
                      {isLast ? (
                        <CheckCircle2 className="w-4 h-4 text-[#6FCF97] shrink-0" />
                      ) : (
                        <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                      )}
                      <span>
                        <strong>Impact:</strong> {item.rootCauseImpact}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Connector icon down */}
              {item.step < 5 && (
                <div className="flex justify-center py-1">
                  <ArrowDown className="w-4 h-4 text-stone-300" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-900 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <CheckCircle2 className="w-5 h-5 text-[#1F6F4B] shrink-0" />
          <span>
            <strong>Conclusion:</strong> The problem cannot be solved by more posters or admonishments; it requires an instant, personalized, low-friction mobile tool at the serving counter.
          </span>
        </div>
      </div>
    </div>
  );
};
