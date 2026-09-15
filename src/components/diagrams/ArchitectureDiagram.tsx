import React, { useState } from 'react';
import { PIPELINE_STAGES } from '../../data/projectData';
import { Badge } from '../ui/Badge';
import { ArrowRight, Clock, Cpu, Database, RefreshCw, Smartphone, Sparkles } from 'lucide-react';

export const ArchitectureDiagram: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(4); // default to AI/ML engine

  const currentStageData = PIPELINE_STAGES.find((s) => s.stage === activeStage) || PIPELINE_STAGES[3];

  const stageIcons = [
    Smartphone,
    Database,
    Cpu,
    Sparkles,
    Cpu,
    Smartphone,
  ];

  return (
    <div id="architecture-diagram-container" className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-100">
        <div>
          <div className="flex items-center space-x-2">
            <Badge variant="mint" size="sm">System Pipeline</Badge>
            <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Interactive 6-Stage Flow</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
            End-to-End Portion Recommendation Architecture
          </h3>
        </div>
        <div className="flex items-center text-xs text-stone-600 bg-stone-100 px-3 py-1.5 rounded-full self-start sm:self-auto">
          <RefreshCw className="w-3.5 h-3.5 text-[#1F6F4B] mr-1.5 animate-spin" style={{ animationDuration: '6s' }} />
          <span>Active Continuous Feedback Loop</span>
        </div>
      </div>

      {/* Visual Pipeline Bar */}
      <div className="mt-8 overflow-x-auto pb-4">
        <div className="min-w-[700px] grid grid-cols-6 gap-2 relative">
          {PIPELINE_STAGES.map((stage) => {
            const isSelected = stage.stage === activeStage;
            const Icon = stageIcons[stage.stage - 1];

            return (
              <button
                key={stage.stage}
                id={`arch-stage-btn-${stage.stage}`}
                onClick={() => setActiveStage(stage.stage)}
                className={`flex flex-col items-center text-center p-3 rounded-2xl border transition-all relative ${
                  isSelected
                    ? 'bg-[#0E1B14] border-[#3BAA75] text-white shadow-md scale-102 ring-2 ring-[#6FCF97]/50'
                    : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs mb-2 ${
                    isSelected ? 'bg-[#3BAA75] text-white' : 'bg-stone-200 text-stone-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold tracking-wider uppercase opacity-75">
                  Stage {stage.stage}
                </span>
                <span className="text-xs font-bold mt-0.5 leading-tight line-clamp-2">
                  {stage.name}
                </span>

                {/* Arrow connector */}
                {stage.stage < 6 && (
                  <div className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 pointer-events-none">
                    <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Feedback loop indicator beneath */}
        <div className="min-w-[700px] mt-3 relative bg-emerald-50 border border-emerald-200/80 rounded-xl p-2.5 flex items-center justify-between text-xs text-emerald-900">
          <div className="flex items-center space-x-2 font-medium">
            <RefreshCw className="w-4 h-4 text-[#1F6F4B] shrink-0" />
            <span>
              <strong>Continuous Feedback Loop:</strong> User satiety feedback (Stage 6) dynamically feeds back into the Weighted Recommendation Model (Stage 4) to calibrate future portion targets.
            </span>
          </div>
          <span className="text-[10px] bg-[#1F6F4B] text-white font-bold px-2 py-0.5 rounded-full shrink-0 ml-2">
            Adaptive Weights
          </span>
        </div>
      </div>

      {/* Stage Detail Card */}
      <div className="mt-6 bg-[#F4F5F1] rounded-2xl p-6 border border-stone-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-stone-300">
          <div>
            <div className="flex items-center space-x-2">
              <span className="bg-[#1F6F4B] text-white text-xs font-extrabold px-2.5 py-0.5 rounded-full">
                STAGE 0{currentStageData.stage}
              </span>
              <h4 className="text-lg font-extrabold text-stone-900">
                {currentStageData.name}: {currentStageData.subtitle}
              </h4>
            </div>
          </div>
          <div className="flex items-center space-x-3 text-xs text-stone-600">
            <span className="flex items-center bg-white px-2.5 py-1 rounded-md border border-stone-200">
              <Clock className="w-3.5 h-3.5 mr-1 text-[#3BAA75]" />
              <strong>Latency:</strong>&nbsp;{currentStageData.latency}
            </span>
          </div>
        </div>

        <p className="mt-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          {currentStageData.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="bg-white rounded-xl p-4 border border-stone-200">
            <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block mb-2">
              Inputs Handled
            </span>
            <ul className="space-y-1.5">
              {currentStageData.inputs.map((item, i) => (
                <li key={i} className="text-xs sm:text-sm text-stone-800 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3BAA75] mr-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl p-4 border border-stone-200">
            <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block mb-2">
              Outputs Generated
            </span>
            <ul className="space-y-1.5">
              {currentStageData.outputs.map((item, i) => (
                <li key={i} className="text-xs sm:text-sm text-stone-800 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1F6F4B] mr-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-stone-200 flex items-center justify-between text-xs text-stone-600">
          <span className="font-medium">
            <strong>Hardware Footprint:</strong> {currentStageData.hardwareRequirements}
          </span>
          <span className="text-stone-400">Deterministic algorithmic execution</span>
        </div>
      </div>
    </div>
  );
};
