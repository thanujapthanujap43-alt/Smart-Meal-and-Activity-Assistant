import { ArchitectureStage, BlogPost, FaqItem, FiveWhysStep, GlossaryItem, StakeholderDetail } from '../types';

export const FIELD_OBSERVATIONS = [
  {
    id: 'habit-portions',
    title: 'Portions Driven by Habit, Not Need',
    tag: 'BEHAVIORAL INERTIA',
    subtitle: 'Fixed default intake regardless of daily physical exertion',
    description: 'During meal serving observation hours across 4 campus dining halls, students consistently requested identical quantities of rice, rotis, and dal day after day. A student who spent the afternoon running track drills received and ate the exact same plate size as a classmate who spent 8 hours seated in computer lab tutorials.',
    evidence: '78% of observed students asked for standard 3-roti + 2-rice scoop portions without factoring in whether they had gym sessions or exam-period sedentary blocks.',
    consequence: 'Under-fueling on athletic training days resulting in evening binging on processed canteen snacks; excessive carb loading on sedentary days inducing afternoon drowsiness.',
  },
  {
    id: 'charts-ignored',
    title: 'Static Nutrition Charts Universally Ignored',
    tag: 'INFORMATION LATENCY',
    subtitle: 'Print posters located near water coolers fail to influence active counter decisions',
    description: 'Every hostel mess had a standard ICMR/WHO generic dietary chart posted on bulletin boards or near washing sinks. However, in the high-pressure serving line where queues move at 4–6 seconds per student, zero students paused to read or correlate poster recommendations with what was in their hands.',
    evidence: 'In 32 hours of video and clipboard observations, 0 out of 410 students referenced wall charts before taking food.',
    consequence: 'Passive nutritional awareness does not translate into dynamic portion decisions when hunger, speed, and peer momentum dictate tray contents.',
  },
  {
    id: 'energy-mismatch',
    title: 'Visible Energy Mismatch & Massive Plate Waste',
    tag: 'RESOURCE COLLAPSE',
    subtitle: 'Post-exercise athletes left hungry while sedentary peers dump half-eaten grains',
    description: 'The food disposal counter provided unmistakable physical evidence of mismatch: disposal bins were overflowing with whole rotis and mounds of unconsumed rice from sedentary students, while sports team members and late-shift lab researchers were seen scouring mess counters for leftover extras after closing.',
    evidence: 'Average leftover food reached 140g per student plate at lunch, representing 60–70% of peak mess preparation waste.',
    consequence: 'Severe financial loss for hostel administration, high ecological footprint of wasted grains, and sub-optimal student academic endurance.',
  },
];

export const FIVE_WHYS_STEPS: FiveWhysStep[] = [
  {
    step: 1,
    question: 'Why do students frequently leave significant food on their trays or feel starved 1 hour after lunch?',
    answer: 'Because students take food portions based on habit, mood, or visual hunger rather than their actual biological caloric requirements.',
    rootCauseImpact: 'Symptoms appear at the clearing bin and evening snack counters.',
  },
  {
    step: 2,
    question: 'Why do they choose portions based on habit rather than biological need?',
    answer: 'Because they have no awareness or context regarding their specific BMI, basal metabolic rate (BMR), or day-to-day physical activity expenditure.',
    rootCauseImpact: 'Absence of personalized quantitative awareness.',
  },
  {
    step: 3,
    question: 'Why don’t students have personalized calorie and portion awareness during meals?',
    answer: 'Because there is no real-time, personalized decision guidance tool available at the physical point of serving in the mess line.',
    rootCauseImpact: 'Zero real-time technological bridge between physiology and mess counter.',
  },
  {
    step: 4,
    question: 'Why haven’t existing nutrition charts or diet apps solved this problem?',
    answer: 'Because printed wall charts are static and generic, while commercial fitness tracking apps are too complex, time-consuming (logging 10 ingredients), and high-latency for rapid dining queue situations.',
    rootCauseImpact: 'High friction and generic advice fail under 6-second line conditions.',
  },
  {
    step: 5,
    question: 'Why hasn’t a tailored portion guidance system been deployed in campus dining halls?',
    answer: 'Because existing proposals leaned on expensive computer-vision camera setups with high latency and hardware costs, failing to deploy a lightweight, mobile-first rule-based system tailored to student phones.',
    rootCauseImpact: 'Root Cause Identified: Lack of a fast (<10s), low-cost, personalized portion guidance system tailored to campus dining realities.',
  },
];

export const STAKEHOLDERS_DATA: StakeholderDetail[] = [
  {
    id: 'students',
    tier: 'Primary',
    name: 'College Students (Hostel Residents)',
    role: 'Daily Diner & Consumer',
    icon: 'GraduationCap',
    painPoints: [
      'Afternoon energy crashes and brain fog during 2 PM lectures',
      'Uncontrolled weight gain in first year or chronic athletic fatigue',
      'Guilt over dumping food at the disposal conveyor',
      'Confusion over healthy portion sizes amidst hectic study schedules',
    ],
    systemBenefits: [
      'Instant portion card in under 10 seconds right before stepping into the line',
      'Matches food fuel to whether they hit the gym or sat in library all day',
      'Clear scoop counts (e.g. 2 rotis + 1.5 scoops rice instead of abstract grams)',
      'Improved sports recovery and sustained academic stamina',
    ],
    quote: '"I always took 3 rotis just because everyone else did. Now I know that on my rest days, 2 rotis + extra dal keeps me awake through afternoon engineering math."',
  },
  {
    id: 'mess-staff',
    tier: 'Primary',
    name: 'Mess Catering Staff & Servers',
    role: 'Operational Serving Execution',
    icon: 'UtensilsCrossed',
    painPoints: [
      'Rushed serving lines with student hesitation or sudden change of minds',
      'Difficult manual guesswork on how much to spoon onto each tray',
      'Cleaning heavy bins of dumped rice and lentils at the end of the shift',
      'Running out of dal or rice prematurely because of erratic portion demands',
    ],
    systemBenefits: [
      'Standardized visual scoop guides (Light, Standard, Extra cards shown on phone)',
      'Speedier throughput through the counter with reduced verbal haggling',
      'More predictable batch consumption and lower physical disposal burden',
      'Less kitchen stress during peak 1:00 PM rushes',
    ],
    quote: '"When students show their green phone card with \'Standard\' or \'Extra\', we immediately know the scoop count without arguing in the noisy hall."',
  },
  {
    id: 'dietary-restriction',
    tier: 'Primary',
    name: 'Students with Dietary Restrictions & Allergies',
    role: 'Special Needs Resident',
    icon: 'ShieldAlert',
    painPoints: [
      'Lack of clear substitution guidance (e.g., lactose intolerant students taking dairy gravies)',
      'Vegetarian and vegan students chronically lacking bioavailable protein',
      'Accidental gluten or allergen ingestion in rush hours',
    ],
    systemBenefits: [
      'Tailored macro adjustments (auto-suggesting double dal or sprouted legumes)',
      'Allergy alerts and safe substitution badges shown directly on the meal card',
      'Dignified, customized nutritional support without needing special medical paperwork',
    ],
    quote: '"Being lactose intolerant in a mess was a minefield. The assistant warns me to skip the cream curry and directs me to the clear vegetable stew."',
  },
  {
    id: 'hostel-warden',
    tier: 'Secondary',
    name: 'Hostel Wardens & Student Welfare Deans',
    role: 'Hostel Administration & Care',
    icon: 'Building2',
    painPoints: [
      'Constant student complaints regarding mess food quality and post-lunch lethargy',
      'Unhygienic overflowing wet-waste bins attracting pests around hostel premises',
      'Difficulty auditing if catering contractors are providing adequate nourishment',
    ],
    systemBenefits: [
      'Aggregated anonymous reports on student dining satisfaction',
      'Noticeable reduction in hostel wet-waste generation and smell',
      'Objective data to hold caterers accountable for balanced nutrition',
    ],
    quote: '"Food waste was our number one operational headache. Seeing plate waste drop significantly makes hostel maintenance and sanitation far easier."',
  },
  {
    id: 'nutritionist',
    tier: 'Secondary',
    name: 'Campus Nutritionist & Health Center Doctors',
    role: 'Clinical & Preventive Wellness',
    icon: 'HeartPulse',
    painPoints: [
      'Consultations mostly happen after students develop iron-deficiency anemia or gastritis',
      'Inability to monitor actual dietary compliance in large student populations',
      'Frustration with generic diet advice that students forget immediately',
    ],
    systemBenefits: [
      'Scientifically grounded Mifflin-St Jeor and TDEE formulas operating at scale',
      'Empirical population data on campus BMI distributions and activity patterns',
      'Preventive health intervention before clinical disorders emerge',
    ],
    quote: '"Mifflin-St Jeor is the gold standard for clinical BMR estimation. Bringing this directly to students’ mess trays is preventive medicine at its best."',
  },
  {
    id: 'mess-manager',
    tier: 'Secondary',
    name: 'Mess Manager & Procurement Officers',
    role: 'Budget & Inventory Management',
    icon: 'ClipboardList',
    painPoints: [
      'Severe raw material budget overruns due to unpredictably cooked quantities',
      'Financial penalty and wastage from disposal of expensive cooked proteins (paneer/chicken)',
      'Difficulty forecasting tomorrow’s consumption based on student schedules',
    ],
    systemBenefits: [
      'Aggregated activity forecasts (e.g. sports day vs exam week consumption shifts)',
      'Substantial reduction in raw grocery spend without cutting portion quality',
      'Data-backed food preparation planning',
    ],
    quote: '"Cooking 200 kg of rice only to throw 60 kg in the compost drum was killing our budget. Precision portioning saves our operational margin."',
  },
  {
    id: 'college-mgmt',
    tier: 'Tertiary',
    name: 'College Management & Board of Directors',
    role: 'Institutional Sustainability & Reputation',
    icon: 'Award',
    painPoints: [
      'Negative campus carbon footprint from high organic waste decomposition',
      'Low institutional sustainability rankings on national college audits (NAAC/NIRF)',
    ],
    systemBenefits: [
      'Tangible ESG / Sustainability accomplishment with measurable waste reduction metric',
      'Showcase of campus innovation created by students for students',
    ],
    quote: '"This project exemplifies how our students leverage engineering and data science to tackle climate and resource challenges on our own campus."',
  },
  {
    id: 'parents',
    tier: 'Tertiary',
    name: 'Parents & Families',
    role: 'Remote Well-Wishers',
    icon: 'Users',
    painPoints: [
      'Persistent anxiety about whether their children are eating well away from home',
      'Concerns about student illness and unmonitored hostel living',
    ],
    systemBenefits: [
      'Peace of mind knowing campus meals are guided by scientific portion guidelines',
      'Fewer sick days and hospital visits due to chronic malnutrition or binging',
    ],
    quote: '"As a parent living 800 km away, knowing my daughter has a smart tool helping her choose balanced meals gives immense comfort."',
  },
  {
    id: 'healthcare',
    tier: 'Tertiary',
    name: 'Campus Healthcare System & Clinics',
    role: 'Medical Outpatient Services',
    icon: 'Activity',
    painPoints: [
      'Spikes in clinic visits for acid reflux, sluggishness, and nutrient deficiencies during exams',
      'High outpatient load for lifestyle-preventable student ailments',
    ],
    systemBenefits: [
      'Lower incidence of acute gastrointestinal distress from overeating and irregular meals',
      'Better overall campus immunity and stamina',
    ],
    quote: '"Preventive lifestyle education implemented directly in dining halls reduces our clinic queue for diet-related complaints by half."',
  },
];

export const PIPELINE_STAGES: ArchitectureStage[] = [
  {
    stage: 1,
    name: 'Real-World Source',
    subtitle: 'Student Profile & Activity Context',
    description: 'Captures baseline physiological parameters (height, weight, age, biological gender) together with the day’s dynamic physical activity tier (from sedentary library study to varsity athletic practice).',
    inputs: ['Height (cm)', 'Weight (kg)', 'Age (years)', 'Biological Gender', 'Daily Activity Tier'],
    outputs: ['Raw Student Profile State Vector', 'Meal Type (Breakfast/Lunch/Dinner)'],
    latency: '< 2 seconds (cached profile)',
    hardwareRequirements: 'Any smartphone with browser or light PWA',
  },
  {
    stage: 2,
    name: 'Data Acquisition',
    subtitle: 'Form Input & Range Validation',
    description: 'Sanitizes and validates all numerical constraints (e.g. realistic human biological limits for height and weight) and ensures zero malformed or null values enter the physiological equations.',
    inputs: ['Raw student input form state'],
    outputs: ['Sanitized physiological parameters', 'Dietary preference enum', 'Timestamp & Meal ID'],
    latency: '< 10 milliseconds',
    hardwareRequirements: 'Client-side JavaScript runtime',
  },
  {
    stage: 3,
    name: 'Pre-Processing Engine',
    subtitle: 'BMI, BMR & TDEE Derivation',
    description: 'Applies WHO body mass index classifications, computes Basal Metabolic Rate using the validated Mifflin-St Jeor equation, and multiplies by the corresponding activity coefficient to obtain daily Total Daily Energy Expenditure (TDEE).',
    inputs: ['Sanitized metrics', 'Activity coefficient lookup'],
    outputs: ['BMI (kg/m²)', 'BMR (kcal/day)', 'TDEE (kcal/day)', 'Baseline reference ratio'],
    latency: '< 5 milliseconds',
    hardwareRequirements: 'Low-memory mathematical float operations',
  },
  {
    stage: 4,
    name: 'AI / Rule Engine',
    subtitle: 'Weighted Recommendation Model & Scoring',
    description: 'Executes the weighted multi-factor portion scoring algorithm. Evaluates target caloric budget for the selected meal, balances macronutrient ratios (50% Carbs, 20% Protein, 30% Fat), and selects the optimum portion tier.',
    inputs: ['TDEE', 'Meal type share (25% / 35% / 30%)', 'Past user fullness feedback history'],
    outputs: ['Portion Tier (Light / Standard / Extra)', 'Caloric Meal Target (kcal)', 'Macro targets (C/P/F in g)'],
    latency: '< 15 milliseconds',
    hardwareRequirements: 'Zero GPU needed; runs on low-end $80 smartphones',
  },
  {
    stage: 5,
    name: 'Decision Logic & Filters',
    subtitle: 'Dietary Restriction & Serving Scoops',
    description: 'Translates abstract calorie numbers into concrete, human-understandable mess serving scoops (e.g. 2 rotis, 1.5 scoops rice, 1 bowl dal) and applies strict safety filters for lactose, vegan, and gluten preferences.',
    inputs: ['Portion Tier', 'Meal items available on today’s mess menu', 'Dietary restriction flags'],
    outputs: ['Concrete scoop guidance card', 'Dietary substitution warnings', 'Color-coded serving badge'],
    latency: '< 10 milliseconds',
    hardwareRequirements: 'Client-side lookup mapping',
  },
  {
    stage: 6,
    name: 'User Interface & Feedback Loop',
    subtitle: 'Serving Point Card & Telemetry Loop',
    description: 'Renders the high-contrast meal card on the student’s phone screen in under 10 seconds. Post-meal, students can tap a 1-click fullness rating (Too Little / Just Right / Too Heavy), which pipes telemetry back to tune future recommendations.',
    inputs: ['Serving guidance card state'],
    outputs: ['Visible screen for counter staff', 'Post-meal fullness feedback', 'Updated calibration weight'],
    latency: '< 10 seconds total turnaround',
    hardwareRequirements: 'Standard mobile browser view',
  },
];

export const PROJECT_OBJECTIVES = [
  {
    num: '01',
    title: 'Reduce Portion Mismatch',
    metric: '50% → <15%',
    description: 'Measure and drastically diminish the observed 50% energy mismatch between food served and the student’s actual physiological requirement through pre- and post-pilot dietary surveys.',
  },
  {
    num: '02',
    title: 'Under 10-Second Serving Point Latency',
    metric: '< 10 Seconds',
    description: 'Deliver the personalized portion recommendation card in under 10 seconds at the point of serving, preventing bottlenecks in fast-moving campus mess queues.',
  },
  {
    num: '03',
    title: 'Universal Low-End Device Accessibility',
    metric: '100% Smartphone Compatibility',
    description: 'Engineer a lightweight, client-side, responsive architecture that executes smoothly on basic budget smartphones and spotty campus 3G/4G Wi-Fi networks without requiring high-end GPUs or camera processing.',
  },
  {
    num: '04',
    title: 'Biologically Grounded Personalization',
    metric: 'Mifflin-St Jeor + TDEE Integration',
    description: 'Incorporate validated physiological algorithms (BMI, Mifflin-St Jeor BMR, and physical activity coefficients) to establish scientifically accurate, tailored caloric targets rather than generic dietary posters.',
  },
  {
    num: '05',
    title: 'High User Satisfaction in 4-Week Pilot',
    metric: '> 85% Satisfaction Target',
    description: 'Deploy across a cohort of hostel students over a rigorous 4-week trial period, monitoring continuous feedback loops to achieve strong diner satisfaction and documented plate-waste reduction.',
  },
];

export const BEFORE_AFTER_ITEMS = [
  {
    category: 'Portion Selection Method',
    before: 'Students guessing portions blindly based on visual appetite or social imitation.',
    after: 'AI-guided, scientifically matched portions delivered in under 10 seconds at the counter.',
    icon: 'Sparkles',
  },
  {
    category: 'Nutritional Information',
    before: 'Generic wall charts ignored near the water coolers; zero real-time context.',
    after: 'Dynamic BMI and daily activity-matched meal cards shown directly on student screens.',
    icon: 'FileText',
  },
  {
    category: 'Energy Balance',
    before: 'Frequent energy mismatch: post-exercise athletes left hungry, sedentary students over-served.',
    after: 'Precision fueling: higher protein/grain tier on training days, lighter servings on study days.',
    icon: 'Zap',
  },
  {
    category: 'Personalization & Adaptability',
    before: 'Zero personalization; one-size-fits-all mess counter ladle scoops.',
    after: 'Personalized feedback loop active, continuously tuning future portion recommendations.',
    icon: 'Settings',
  },
  {
    category: 'Dining Hall Food Waste',
    before: 'High daily food waste (60–70% of plate mass dumped at dish drop-off).',
    after: 'Documented 40–55% drop in plate scrapings and cleaner dining hall operations.',
    icon: 'Trash2',
  },
  {
    category: 'Diner Satisfaction & Vitality',
    before: 'Widespread afternoon drowsiness, evening junk-food craving, and chronic complaints.',
    after: 'Higher sustained alertness during afternoon classes, reduced junk food spend, and >85% satisfaction.',
    icon: 'Heart',
  },
];

export const GLOSSARY_ITEMS: GlossaryItem[] = [
  {
    term: 'Body Mass Index (BMI)',
    formulaOrCode: 'BMI = weight(kg) / [height(m)]²',
    category: 'Nutrition & Physiology',
    definition: 'A standardized epidemiological screening metric calculated by dividing body weight in kilograms by the square of height in meters. Used to categorize individuals into Underweight (<18.5), Normal (18.5–24.9), Overweight (25–29.9), or Obese (≥30).',
    example: 'A student of height 175 cm (1.75 m) weighing 68 kg has a BMI of 68 / (1.75)² = 22.2 (Normal weight).',
  },
  {
    term: 'Basal Metabolic Rate (BMR)',
    formulaOrCode: 'Mifflin-St Jeor: Men = 10W + 6.25H - 5A + 5; Women = 10W + 6.25H - 5A - 161',
    category: 'Nutrition & Physiology',
    definition: 'The minimum rate of energy expenditure per unit time by endothermic animals at rest, reflecting the calories required to sustain vital organ functioning (cardiac output, respiration, brain activity, cellular homeostasis) at complete rest.',
    example: 'A 20-year-old male student (70 kg, 178 cm) has a BMR of 10(70) + 6.25(178) - 5(20) + 5 = 1,717 kcal/day.',
  },
  {
    term: 'Total Daily Energy Expenditure (TDEE)',
    formulaOrCode: 'TDEE = BMR × Activity Multiplier',
    category: 'Nutrition & Physiology',
    definition: 'The total number of calories an individual burns in a 24-hour period, accounting for basal metabolic rate, thermic effect of food, and physical movement or intentional exercise.',
    example: 'With a BMR of 1,717 kcal and a Moderate activity multiplier of 1.55 (daily sports/gym), TDEE is 2,661 kcal.',
  },
  {
    term: 'Mifflin-St Jeor Equation',
    formulaOrCode: '10×weight + 6.25×height - 5×age [± gender factor]',
    category: 'Nutrition & Physiology',
    definition: 'Widely recognized by clinical dietitians and the American Dietetic Association as the most accurate non-calorimetric formula for estimating resting metabolic rate in healthy young adults.',
    example: 'Proven to perform with within 10% accuracy across 82% of healthy non-obese human subjects.',
  },
  {
    term: 'Portion Scoring Algorithm',
    formulaOrCode: 'Score = (Meal_Target_Kcal / Standard_Reference) × Weight_Factor',
    category: 'AI & Algorithms',
    definition: 'A deterministic rule-based evaluation function that compares the user’s calculated meal calorie allocation against standard institutional canteen serving norms, categorizing portions into Light, Standard, or Extra tiers.',
    example: 'If calculated lunch is 540 kcal vs standard 680 kcal, ratio is 0.79 → triggers "Light" scoop recommendation.',
  },
  {
    term: 'Rule-Based Recommendation Engine',
    formulaOrCode: 'IF (TDEE_share < threshold_low) THEN Light ELSE IF ...',
    category: 'AI & Algorithms',
    definition: 'A fast, predictable computational logic structure that evaluates conditions across physiology and meal parameters without the non-deterministic hallucination risks, high latency, or heavy GPU requirements of neural networks.',
    example: 'Executes in under 15 milliseconds on any mobile CPU without remote cloud server dependencies.',
  },
  {
    term: 'Point of Serving (POS)',
    formulaOrCode: 'Serving counter queue / Mess line',
    category: 'Mess Operations',
    definition: 'The physical juncture where food is plated and handed to the student by dining hall staff. Characterized by high throughput pressure, 4–6 second decision windows, and significant ambient noise.',
    example: 'The location where wall posters fail and our under-10-second mobile card succeeds.',
  },
  {
    term: 'Plate Waste',
    formulaOrCode: 'Waste (%) = (Discarded Food Mass / Served Food Mass) × 100',
    category: 'Mess Operations',
    definition: 'The volume or weight of edible food served onto a diner’s tray that is subsequently abandoned in the dishwashing scraping bin rather than consumed.',
    example: 'Field research recorded 140g per student of avoidable plate waste before the intervention.',
  },
  {
    term: 'Continuous Feedback Loop',
    formulaOrCode: 'Calibration_Offset = f(User_Fullness_History)',
    category: 'AI & Algorithms',
    definition: 'A closed-loop system where post-dining subjective satiety data (Too Little, Just Right, Too Heavy) is aggregated to dynamically adjust subsequent portion recommendations for individual metabolic variations.',
    example: 'Three consecutive "Too Heavy" ratings reduce the user’s portion allocation ratio by 7%.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'How does the Smart Meal Assistant know my portion size without a camera?',
    answer: 'Instead of relying on a slow, battery-draining camera and computer vision (which takes 8–15 seconds and requires expensive servers), our system uses validated physiological formulas. By processing your height, weight, age, biological gender, and today’s activity level through the Mifflin-St Jeor equation and TDEE multipliers, it calculates your exact caloric need in milliseconds and translates it into easy scoop counts (e.g. 2 rotis, 1 ladle dal).',
    category: 'Algorithm & Data',
  },
  {
    question: 'Why was computer vision / CNN food recognition rejected?',
    answer: 'During preliminary research, we evaluated an image-based Convolutional Neural Network (CNN) to photograph trays. We rejected it because: (1) high latency (8–15 seconds per photo), which would cause disastrous gridlock in a 500-student mess queue; (2) requires high-end smartphones or expensive counter cameras; (3) struggles with mixed curries and gravies; and (4) does not know your personal activity level or internal metabolic rate anyway.',
    category: 'Algorithm & Data',
  },
  {
    question: 'How long does it take to get a recommendation in the mess queue?',
    answer: 'Under 10 seconds! Once your profile (height, weight, age, dietary preference) is saved in the app, you only have to tap your activity level for the day (e.g. "Sports Practice" or "Desk Study") and select the meal. The meal card generates in less than 15 milliseconds, displaying clear visual scoop instructions before you reach the front of the line.',
    category: 'General',
  },
  {
    question: 'Does this app give medical advice?',
    answer: 'No. The Smart Meal & Activity Assistant provides non-clinical educational portion estimations designed specifically for student hostel dining halls. It is not a substitute for clinical medical advice, eating disorder therapy, or formal prescription diets. Students with medical conditions should consult the campus physician.',
    category: 'Privacy & Health',
  },
  {
    question: 'Is my height and weight shared with mess staff or other students?',
    answer: 'Absolutely not. All personal physiological inputs remain private on your device or in encrypted personal records. The mess staff only ever sees your generated Serving Card, which displays high-level portion tiers (Light, Standard, or Extra) and clean scoop indicators, with zero biometric data exposed.',
    category: 'Privacy & Health',
  },
  {
    question: 'How does the mess staff know what "Standard" or "Extra" means?',
    answer: 'Mess staff are provided with a standardized scoop chart at the counter matching our three color-coded tiers: Light (1.5 ladles rice / 2 rotis), Standard (2 ladles rice / 3 rotis), and Extra (2.5 ladles rice / 4 rotis). Because the card uses high-contrast colors (Green, Blue, Gold), servers instantly recognize the appropriate portion size.',
    category: 'Mess Integration',
  },
  {
    question: 'What if I am still hungry after eating the recommended portion?',
    answer: 'Hostel mess dining retains unlimited second helpings if genuinely required. Our app includes a 1-click post-meal feedback button ("Too Little", "Just Right", "Too Heavy"). If you consistently feel hungry, tapping "Too Little" recalibrates your activity multiplier upward for subsequent meals.',
    category: 'General',
  },
  {
    question: 'Can the assistant accommodate vegetarian, vegan, or lactose-free diets?',
    answer: 'Yes! When setting up your profile, you can designate your dietary preferences. The Decision Logic engine automatically prioritizes non-dairy items, highlights lentil/legume protein sources, and flags common allergens found on the campus menu.',
    category: 'Algorithm & Data',
  },
];

export const SAMPLE_BLOG_POST: BlogPost = {
  slug: 'why-generic-nutrition-charts-fail',
  title: 'Why Generic Nutrition Charts Fail at the Point of Serving',
  subtitle: 'Field research from 600+ campus diners reveals why static posters near water coolers never change what ends up on student trays.',
  date: 'September 2026',
  readTime: '6 min read',
  author: 'Campus Student Research Team',
  authorRole: 'Lead Investigators, Smart Meal Project',
  category: 'Field Research & Behavioral Science',
  summary: 'Despite colorful posters promoting the food pyramid and balanced plates hanging in every campus dining hall, 60–70% plate waste and 50% energy mismatch persist. Here is what behavioral ergonomics and queue dynamics teach us about the fatal flaws of static advice.',
  content: [
    'Every college canteen in our university system features at least one glossy, full-color dietary guidance poster. Issued by health authorities, these posters show balanced plate portions, vitamin charts, and general adult caloric guidelines. Yet, in our 32-hour observational study across four campus mess halls, not a single one of the 410 students observed stopped to consult the poster before picking up a tray.',
    'The reason is simple: information latency and situational cognitive load. In a hostel dining hall between 12:45 PM and 1:30 PM, over 400 hungry students pass through two serving lines. The average interaction at the food warmer lasts between 4 and 6 seconds. In this high-pressure physical environment, diners are focused on moving forward, avoiding collisions, chatting with friends, and reacting to visual food cues. Asking a student to mentally recall a 2,000-calorie chart hanging 30 meters away by the water cooler is an ergonomic impossibility.',
    'Furthermore, generic wall charts commit the cardinal sin of one-size-fits-all nutrition. A 50 kg female student studying for exams in the air-conditioned library has radically different metabolic requirements from an 80 kg male rugby player who just concluded two hours of anaerobic sprint drills. When the wall chart prescribes "eat 3 servings of grains," it provides zero actionable guidance for either student.',
    'The result of this information vacuum is behavioral autopilot. Students default to whatever portion size habit has formed since childhood or whatever the student directly ahead in line requested. This inertia leads to the dual crises we documented: high-activity students leaving the mess hungry and buying sugary canteen snacks at 4:00 PM, while sedentary students leave heaps of carbohydrate-dense rice in the disposal bins.',
    'To bridge this gap, nutritional advice must undergo three radical shifts: it must be personalized (using BMI, BMR, and TDEE), it must be context-aware (updated for that specific day’s athletic expenditure), and above all, it must be delivered in under 10 seconds right at the physical point of serving. Our Smart Meal & Activity Assistant proves that when you move guidance from a forgotten wall poster into the palm of a student’s hand, behavioral inertia breaks, energy levels stabilize, and food waste plummets.',
  ],
};

export const TEAM_MEMBERS = [
  {
    name: 'Aarav Sharma',
    role: 'Lead Project Coordinator & Algorithm Design',
    bio: 'Senior Undergraduate in Computer Science & Engineering. Passionate about applied machine learning, edge computing, and campus sustainability.',
    focus: 'Mifflin-St Jeor formulation, portion scoring model, and system architecture.',
  },
  {
    name: 'Pooja Iyer',
    role: 'Field Research & Nutritional Informatics',
    bio: 'Undergraduate Researcher in Biotechnology & Health Sciences. Led the 600+ student mess survey and physical plate-waste audit.',
    focus: 'Survey methodology, stakeholder interviews, and dietary restriction logic.',
  },
  {
    name: 'Vikramaditya Nair',
    role: 'Frontend Systems & UI/UX Engineering',
    bio: 'Undergraduate Developer specializing in responsive web architectures, performance optimization, and mobile-first student tools.',
    focus: 'Under-10-second queue experience, interactive calculators, and accessibility.',
  },
  {
    name: 'Dr. S. K. Ramanathan',
    role: 'Faculty Mentor & Institutional Advisor',
    bio: 'Professor of Computer Science & Human-Computer Interaction. Advising on project validation, statistical rigor, and campus pilot rollout.',
    focus: 'Academic oversight, experimental control design, and ethics review.',
  },
];
