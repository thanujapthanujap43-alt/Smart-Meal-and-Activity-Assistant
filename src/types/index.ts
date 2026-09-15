export interface NavLinkItem {
  name: string;
  href: string;
  badge?: string;
  description?: string;
}

export interface NavDropdownGroup {
  label: string;
  items: NavLinkItem[];
}

export type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active';

export interface StudentProfileInput {
  gender: 'male' | 'female';
  age: number;
  heightCm: number;
  weightKg: number;
  activityLevel: ActivityLevel;
  mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  dietaryPreference: 'regular' | 'vegetarian' | 'vegan' | 'lactose_intolerant' | 'gluten_free';
}

export interface CalculationResult {
  bmi: number;
  bmiCategory: 'Underweight' | 'Normal' | 'Overweight' | 'Obese';
  bmr: number;
  tdee: number;
  mealCalorieBudget: number;
  portionTier: 'Light' | 'Standard' | 'Extra';
  portionRatio: number;
  rationale: string;
  breakdown: {
    carbsGrams: number;
    proteinGrams: number;
    fatGrams: number;
    recommendedGrainScoops: number;
    proteinServings: number;
    curryDalCups: number;
    vegetablesSaladBowls: number;
  };
}

export interface StakeholderDetail {
  id: string;
  tier: 'Primary' | 'Secondary' | 'Tertiary';
  name: string;
  role: string;
  icon: string;
  painPoints: string[];
  systemBenefits: string[];
  quote: string;
}

export interface FiveWhysStep {
  step: number;
  question: string;
  answer: string;
  rootCauseImpact: string;
}

export interface ArchitectureStage {
  stage: number;
  name: string;
  subtitle: string;
  description: string;
  inputs: string[];
  outputs: string[];
  latency: string;
  hardwareRequirements: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  category: string;
  summary: string;
  content: string[];
}

export interface GlossaryItem {
  term: string;
  formulaOrCode?: string;
  category: 'Nutrition & Physiology' | 'AI & Algorithms' | 'Mess Operations';
  definition: string;
  example: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'General' | 'Algorithm & Data' | 'Mess Integration' | 'Privacy & Health';
}
