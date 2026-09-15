import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

// Core Pages
import { Home } from './pages/core/Home';
import { About } from './pages/core/About';
import { HowItWorks } from './pages/core/HowItWorks';
import { GetInvolved } from './pages/core/GetInvolved';
import { Contact } from './pages/core/Contact';

// Tool Pages
import { PortionRecommender } from './pages/tools/PortionRecommender';
import { BmiCalculator } from './pages/tools/BmiCalculator';
import { BmrCalculator } from './pages/tools/BmrCalculator';
import { TdeeCalculator } from './pages/tools/TdeeCalculator';
import { AppPreview } from './pages/tools/AppPreview';

// Research Pages
import { FieldObservations } from './pages/research/FieldObservations';
import { ProblemStatement } from './pages/research/ProblemStatement';
import { FiveWhys } from './pages/research/FiveWhys';
import { Stakeholders } from './pages/research/Stakeholders';
import { KeyNumbers } from './pages/research/KeyNumbers';
import { SurveyMethodology } from './pages/research/SurveyMethodology';
import { SurveyResults } from './pages/research/SurveyResults';

// Solution Pages
import { SolutionOverview } from './pages/solution/SolutionOverview';
import { PipelineDeepDive } from './pages/solution/PipelineDeepDive';
import { WhyThisWon } from './pages/solution/WhyThisWon';
import { Features } from './pages/solution/Features';
import { Comparison } from './pages/solution/Comparison';
import { FutureRoadmap } from './pages/solution/FutureRoadmap';
import { Limitations } from './pages/solution/Limitations';

// Technical & Architecture Pages
import { SystemArchitecture } from './pages/tech/SystemArchitecture';
import { BmiBmrTdee } from './pages/tech/BmiBmrTdee';
import { AiMlEngine } from './pages/tech/AiMlEngine';
import { DataFlow } from './pages/tech/DataFlow';
import { AlgorithmsFlowchart } from './pages/tech/AlgorithmsFlowchart';
import { TechStack } from './pages/tech/TechStack';
import { ApiSpecs } from './pages/tech/ApiSpecs';

// Stakeholder Pages
import { ForStudents } from './pages/stakeholders/ForStudents';
import { ForMessStaff } from './pages/stakeholders/ForMessStaff';
import { ForWardensNutritionists } from './pages/stakeholders/ForWardensNutritionists';
import { ForCollegeManagement } from './pages/stakeholders/ForCollegeManagement';

// Documentation Pages
import { Faqs } from './pages/docs/Faqs';
import { Glossary } from './pages/docs/Glossary';
import { CapstoneBrief } from './pages/docs/CapstoneBrief';
import { LiteratureReview } from './pages/docs/LiteratureReview';
import { SitemapPage } from './pages/docs/SitemapPage';

// 404 Fallback Component
const NotFound: React.FC = () => (
  <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
    <div className="max-w-md w-full text-center space-y-6 bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
      <span className="text-4xl font-mono font-black text-[#1F6F4B]">404</span>
      <h2 className="text-2xl font-bold text-stone-900">Page Not Found</h2>
      <p className="text-stone-600 text-sm">
        The dining hall page you requested cannot be located. You can navigate back to the home page or try our live calculator.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
        <a
          href="/"
          className="px-5 py-2.5 rounded-xl bg-[#1F6F4B] text-white font-bold text-xs hover:bg-[#165438] transition-colors"
        >
          Return Home
        </a>
        <a
          href="/tools/portion-recommender"
          className="px-5 py-2.5 rounded-xl bg-stone-100 text-stone-800 font-bold text-xs hover:bg-stone-200 transition-colors"
        >
          Portion Recommender
        </a>
      </div>
    </div>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Core Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/contact" element={<Contact />} />

          {/* Interactive Tools */}
          <Route path="/tools" element={<Navigate to="/tools/portion-recommender" replace />} />
          <Route path="/calculator" element={<Navigate to="/tools/portion-recommender" replace />} />
          <Route path="/tools/portion-recommender" element={<PortionRecommender />} />
          <Route path="/tools/bmi-calculator" element={<BmiCalculator />} />
          <Route path="/tools/bmr-calculator" element={<BmrCalculator />} />
          <Route path="/tools/tdee-calculator" element={<TdeeCalculator />} />
          <Route path="/tools/app-preview" element={<AppPreview />} />

          {/* Research & Field Work */}
          <Route path="/research/field-observations" element={<FieldObservations />} />
          <Route path="/research/problem-statement" element={<ProblemStatement />} />
          <Route path="/research/five-whys" element={<FiveWhys />} />
          <Route path="/research/stakeholders" element={<Stakeholders />} />
          <Route path="/research/key-numbers" element={<KeyNumbers />} />
          <Route path="/research/survey-methodology" element={<SurveyMethodology />} />
          <Route path="/research/survey-results" element={<SurveyResults />} />

          {/* Solution */}
          <Route path="/solution/overview" element={<SolutionOverview />} />
          <Route path="/solution/pipeline-deep-dive" element={<PipelineDeepDive />} />
          <Route path="/solution/why-this-won" element={<WhyThisWon />} />
          <Route path="/solution/features" element={<Features />} />
          <Route path="/solution/comparison" element={<Comparison />} />
          <Route path="/solution/future-roadmap" element={<FutureRoadmap />} />
          <Route path="/solution/limitations" element={<Limitations />} />

          {/* Technical & Architecture */}
          <Route path="/tech/architecture" element={<SystemArchitecture />} />
          <Route path="/tech/bmi-bmr-tdee" element={<BmiBmrTdee />} />
          <Route path="/tech/ai-ml-engine" element={<AiMlEngine />} />
          <Route path="/tech/data-flow" element={<DataFlow />} />
          <Route path="/tech/algorithms-flowchart" element={<AlgorithmsFlowchart />} />
          <Route path="/tech/tech-stack" element={<TechStack />} />
          <Route path="/tech/api-specs" element={<ApiSpecs />} />

          {/* Stakeholder Personas */}
          <Route path="/for/students" element={<ForStudents />} />
          <Route path="/for/mess-staff" element={<ForMessStaff />} />
          <Route path="/for/wardens-nutritionists" element={<ForWardensNutritionists />} />
          <Route path="/for/college-management" element={<ForCollegeManagement />} />

          {/* Documentation & Academic */}
          <Route path="/docs/faqs" element={<Faqs />} />
          <Route path="/docs/glossary" element={<Glossary />} />
          <Route path="/docs/capstone-brief" element={<CapstoneBrief />} />
          <Route path="/docs/literature-review" element={<LiteratureReview />} />
          <Route path="/docs/sitemap" element={<SitemapPage />} />

          {/* Catch-all 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
