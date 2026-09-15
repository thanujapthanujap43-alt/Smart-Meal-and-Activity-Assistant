import { ActivityLevel, CalculationResult, StudentProfileInput } from '../types';

export const ACTIVITY_MULTIPLIERS: Record<ActivityLevel, { value: number; label: string; description: string }> = {
  sedentary: {
    value: 1.2,
    label: 'Sedentary',
    description: 'Desk-bound, studying, minimal walking (< 4,000 steps/day)',
  },
  light: {
    value: 1.375,
    label: 'Lightly Active',
    description: 'Campus walking between lecture halls, light chores (4,000–7,500 steps/day)',
  },
  moderate: {
    value: 1.55,
    label: 'Moderately Active',
    description: 'Daily gym session, sports practice, cycling (7,500–11,000 steps/day)',
  },
  active: {
    value: 1.725,
    label: 'Very Active',
    description: 'College sports team training, intense manual lab/athletic load',
  },
  very_active: {
    value: 1.9,
    label: 'Extremely Active',
    description: 'Twice-a-day varsity endurance athletics or hard physical labor',
  },
};

export const MEAL_SHARE: Record<StudentProfileInput['mealType'], { percentage: number; label: string }> = {
  breakfast: { percentage: 0.25, label: 'Breakfast (25% TDEE)' },
  lunch: { percentage: 0.35, label: 'Lunch (35% TDEE)' },
  dinner: { percentage: 0.30, label: 'Dinner (30% TDEE)' },
  snack: { percentage: 0.10, label: 'Evening Snack (10% TDEE)' },
};

export function calculateBMI(weightKg: number, heightCm: number): { bmi: number; category: CalculationResult['bmiCategory']; color: string } {
  if (!weightKg || !heightCm) return { bmi: 0, category: 'Normal', color: 'text-emerald-600' };
  const heightM = heightCm / 100;
  const bmi = Number((weightKg / (heightM * heightM)).toFixed(1));

  if (bmi < 18.5) return { bmi, category: 'Underweight', color: 'text-amber-500' };
  if (bmi < 25) return { bmi, category: 'Normal', color: 'text-emerald-600' };
  if (bmi < 30) return { bmi, category: 'Overweight', color: 'text-orange-500' };
  return { bmi, category: 'Obese', color: 'text-red-500' };
}

export function calculateBMR(gender: 'male' | 'female', weightKg: number, heightCm: number, age: number): number {
  if (!weightKg || !heightCm || !age) return 0;
  // Mifflin-St Jeor Equation
  if (gender === 'male') {
    return Math.round(10 * weightKg + 6.25 * heightCm - 5 * age + 5);
  } else {
    return Math.round(10 * weightKg + 6.25 * heightCm - 5 * age - 161);
  }
}

export function calculateTDEE(bmr: number, activityLevel: ActivityLevel): number {
  const multiplier = ACTIVITY_MULTIPLIERS[activityLevel]?.value || 1.2;
  return Math.round(bmr * multiplier);
}

export function computePortionRecommendation(input: StudentProfileInput): CalculationResult {
  const { bmi, category: bmiCategory } = calculateBMI(input.weightKg, input.heightCm);
  const bmr = calculateBMR(input.gender, input.weightKg, input.heightCm, input.age);
  const tdee = calculateTDEE(bmr, input.activityLevel);

  const mealShare = MEAL_SHARE[input.mealType]?.percentage || 0.35;
  const mealCalorieBudget = Math.round(tdee * mealShare);

  // Reference standard meal in mess: 650 kcal for lunch/dinner, 450 for breakfast
  const standardMealRef = input.mealType === 'breakfast' ? 450 : input.mealType === 'snack' ? 220 : 680;

  let portionTier: CalculationResult['portionTier'] = 'Standard';
  let portionRatio = 1.0;
  let rationale = '';

  const ratio = mealCalorieBudget / standardMealRef;

  if (ratio < 0.88) {
    portionTier = 'Light';
    portionRatio = 0.8;
    rationale = `Your ${ACTIVITY_MULTIPLIERS[input.activityLevel].label.toLowerCase()} activity profile indicates lower thermodynamic expenditure today. A Light portion avoids digestive sluggishness and prevents mess tray waste.`;
  } else if (ratio > 1.15) {
    portionTier = 'Extra';
    portionRatio = 1.25;
    rationale = `Your ${ACTIVITY_MULTIPLIERS[input.activityLevel].label.toLowerCase()} activity burns significant glycogen. An Extra portion supplies the recovery protein and complex carbohydrates you require to prevent post-lecture fatigue.`;
  } else {
    portionTier = 'Standard';
    portionRatio = 1.0;
    rationale = `Your physical activity matches typical campus metabolic equilibrium. A balanced Standard portion satisfies your caloric window without surplus.`;
  }

  // Adjust for dietary restrictions
  let dietaryNote = '';
  if (input.dietaryPreference === 'vegetarian') {
    dietaryNote = ' Focus on lentil dal, paneer/tofu, and sprouted legumes for complete amino acids.';
  } else if (input.dietaryPreference === 'vegan') {
    dietaryNote = ' Double up on legume curries, soya chunks, and peanut chutneys for protein replenishment.';
  } else if (input.dietaryPreference === 'lactose_intolerant') {
    dietaryNote = ' Request plant curd or clear sambar instead of dairy raita/paneer gravies.';
  } else if (input.dietaryPreference === 'gluten_free') {
    dietaryNote = ' Choose steamed rice or millet rotis rather than standard whole-wheat chapati.';
  }

  rationale += dietaryNote;

  // Macro calculation based on 50% carbs, 20% protein, 30% fat
  const carbsGrams = Math.round((mealCalorieBudget * 0.5) / 4);
  const proteinGrams = Math.round((mealCalorieBudget * 0.2) / 4);
  const fatGrams = Math.round((mealCalorieBudget * 0.3) / 9);

  // Practical mess scoops
  const grainBase = input.mealType === 'breakfast' ? 1.5 : 2.0;
  const recommendedGrainScoops = Number((grainBase * portionRatio).toFixed(1));
  const proteinServings = Number((1.5 * portionRatio).toFixed(1));
  const curryDalCups = Number((1.2 * portionRatio).toFixed(1));
  const vegetablesSaladBowls = portionTier === 'Light' ? 1.5 : 1.0; // Encourage more high-fiber salad for light meals

  return {
    bmi,
    bmiCategory,
    bmr,
    tdee,
    mealCalorieBudget,
    portionTier,
    portionRatio,
    rationale,
    breakdown: {
      carbsGrams,
      proteinGrams,
      fatGrams,
      recommendedGrainScoops,
      proteinServings,
      curryDalCups,
      vegetablesSaladBowls,
    },
  };
}
