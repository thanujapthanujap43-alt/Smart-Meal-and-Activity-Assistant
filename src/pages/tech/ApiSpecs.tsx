import React from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { CTASection } from '../../components/ui/CTASection';
import { Badge } from '../../components/ui/Badge';
import { Code, FileJson, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ApiSpecs: React.FC = () => {
  const userProfileSchema = `{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "UserProfile",
  "type": "object",
  "properties": {
    "studentId": { "type": "string", "example": "22BCE1045" },
    "gender": { "type": "string", "enum": ["male", "female"] },
    "age": { "type": "integer", "minimum": 16, "maximum": 40 },
    "heightCm": { "type": "number", "minimum": 120, "maximum": 240 },
    "weightKg": { "type": "number", "minimum": 35, "maximum": 200 },
    "hostelWing": { "type": "string" },
    "dietaryPreference": { "type": "string", "enum": ["regular", "vegetarian", "vegan"] },
    "adaptationMultiplier": { "type": "number", "default": 1.0 }
  },
  "required": ["gender", "age", "heightCm", "weightKg"]
}`;

  const recommendationSchema = `{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "PortionRecommendation",
  "type": "object",
  "properties": {
    "timestamp": { "type": "string", "format": "date-time" },
    "targetMealKcal": { "type": "integer", "example": 780 },
    "servingScoops": {
      "type": "object",
      "properties": {
        "grains": { "type": "number", "description": "Ladle count of cooked rice", "example": 2.0 },
        "rotis": { "type": "integer", "description": "Whole chapati count", "example": 3 },
        "proteinDal": { "type": "number", "description": "Standard katori bowls of dal", "example": 1.5 },
        "salad": { "type": "string", "example": "1 full katori bowl" }
      },
      "required": ["grains", "rotis", "proteinDal"]
    },
    "macronutrients": {
      "type": "object",
      "properties": {
        "carbsGrams": { "type": "number" },
        "proteinGrams": { "type": "number" },
        "fatGrams": { "type": "number" }
      }
    }
  }
}`;

  const feedbackSchema = `{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "SatietyFeedback",
  "type": "object",
  "properties": {
    "studentId": { "type": "string" },
    "mealType": { "type": "string", "enum": ["breakfast", "lunch", "dinner"] },
    "satietyRating": { "type": "integer", "enum": [-1, 0, 1], "description": "-1: Too Little, 0: Just Right, 1: Too Heavy" },
    "plateWasteObserved": { "type": "boolean" },
    "submittedAt": { "type": "string", "format": "date-time" }
  },
  "required": ["satietyRating", "submittedAt"]
}`;

  return (
    <div>
      <PageHeader
        badge="DATA CONTRACTS"
        title="API Specifications &amp; JSON Schemas"
        intro="Formal data schemas governing the exchange of student biometrics, meal target distributions, visual scoop passes, and closed-loop feedback telemetry."
        breadcrumbs={[
          { label: 'Technical', href: '/tech/architecture' },
          { label: 'API Specifications' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Schema 1: User Profile */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
          <div className="flex items-center space-x-2">
            <FileJson className="w-5 h-5 text-[#1F6F4B]" />
            <h3 className="text-xl font-bold text-stone-900">
              1. Student Profile Schema (UserProfile.json)
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-600">
            Defines the biometric parameters stored client-side for BMR and BMI derivation.
          </p>
          <pre className="bg-stone-900 text-stone-200 p-4 sm:p-5 rounded-2xl overflow-x-auto text-xs font-mono">
            <code>{userProfileSchema}</code>
          </pre>
        </div>

        {/* Schema 2: Portion Recommendation */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
          <div className="flex items-center space-x-2">
            <FileJson className="w-5 h-5 text-[#1F6F4B]" />
            <h3 className="text-xl font-bold text-stone-900">
              2. Portion Recommendation Output Schema (PortionRecommendation.json)
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-600">
            Structure of the calculated meal targets rendered onto the student's counter pass.
          </p>
          <pre className="bg-stone-900 text-stone-200 p-4 sm:p-5 rounded-2xl overflow-x-auto text-xs font-mono">
            <code>{recommendationSchema}</code>
          </pre>
        </div>

        {/* Schema 3: Satiety Feedback */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
          <div className="flex items-center space-x-2">
            <FileJson className="w-5 h-5 text-[#1F6F4B]" />
            <h3 className="text-xl font-bold text-stone-900">
              3. Satiety Feedback Schema (SatietyFeedback.json)
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-600">
            Payload transmitted to Stage 6 adaptive weights optimizer to prevent metabolic drift.
          </p>
          <pre className="bg-stone-900 text-stone-200 p-4 sm:p-5 rounded-2xl overflow-x-auto text-xs font-mono">
            <code>{feedbackSchema}</code>
          </pre>
        </div>

        {/* Cross navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/tech/algorithms-flowchart"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">Visual Logic</span>
              <h4 className="text-base font-bold text-stone-900">Decision Trees &amp; Flowchart</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>

          <Link
            to="/for/students"
            className="bg-[#FAFAF7] hover:bg-white p-5 rounded-2xl border border-stone-200 hover:border-[#1F6F4B] transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-[#1F6F4B] uppercase">User Guides</span>
              <h4 className="text-base font-bold text-stone-900">Guide for Campus Students</h4>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#1F6F4B] group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>

      <CTASection
        title="Explore Live Implementation"
        description="Test how these exact JSON schemas operate in the interactive Portion Recommender."
        primaryLink={{ text: 'Try Portion Recommender', href: '/tools/portion-recommender' }}
        secondaryLink={{ text: 'View System Architecture', href: '/tech/architecture' }}
      />
    </div>
  );
};
