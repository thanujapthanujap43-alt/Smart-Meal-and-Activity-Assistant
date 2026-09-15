import { NavDropdownGroup, NavLinkItem } from '../types';

export const NAV_DROPDOWNS: NavDropdownGroup[] = [
  {
    label: 'Research',
    items: [
      { name: 'Field Observations', href: '/research/field-observations', badge: 'Field Data', description: '3 visible behavioral patterns in campus dining' },
      { name: 'Problem Statement', href: '/research/problem-statement', description: 'Why students choose portions blindly' },
      { name: 'Five Whys Analysis', href: '/research/five-whys', badge: 'Root Cause', description: 'Drilldown from portion habits to missing guidance' },
      { name: 'Stakeholder Map', href: '/research/stakeholders', description: 'Primary, secondary, and tertiary campus beneficiaries' },
      { name: 'Key Numbers & Data', href: '/research/key-numbers', badge: '50% Mismatch', description: 'Core research metrics and waste percentages' },
      { name: 'Survey Methodology', href: '/research/survey-methodology', description: 'Protocol used across 600+ campus respondents' },
      { name: 'Survey Results Deep Dive', href: '/research/survey-results', description: 'Comprehensive charts and statistical breakdown' },
    ],
  },
  {
    label: 'Solution',
    items: [
      { name: 'Solution Overview', href: '/solution/overview', badge: 'Core', description: 'Personalized portion assistant at point of serving' },
      { name: 'Comparison vs Existing', href: '/solution/comparison', description: 'Wall charts vs. mobile-first AI engine' },
      { name: 'Runner-Up Considered', href: '/solution/runner-up', badge: 'CNN Analysis', description: 'Why image recognition was discarded for latency' },
      { name: 'Why This Approach Won', href: '/solution/why-this-won', description: 'Sub-10 second latency and low device overhead' },
      { name: 'Project Objectives', href: '/solution/objectives', description: 'The 5 measurable criteria for the 4-week pilot' },
      { name: 'Expected Outcomes', href: '/solution/expected-outcomes', badge: 'Before & After', description: 'Expected shift from guess-work to precision portions' },
    ],
  },
  {
    label: 'Technology',
    items: [
      { name: 'System Architecture', href: '/tech/architecture', badge: '6 Stages', description: 'Interactive block diagram of the data pipeline' },
      { name: 'AI/ML Engine Explained', href: '/tech/ai-ml-engine', description: 'Weighted rule-based recommendation logic' },
      { name: 'BMI, BMR & TDEE Science', href: '/tech/bmi-bmr-tdee', description: 'Physiological formulas and activity multipliers' },
      { name: 'Decision Logic & Rules', href: '/tech/decision-logic', description: 'Meal-type calorie partitioning & restriction filters' },
      { name: 'Continuous Feedback Loop', href: '/tech/feedback-loop', description: 'Post-meal fullness telemetry and model tuning' },
      { name: 'Data Privacy & Ethics', href: '/tech/data-privacy', badge: 'Student Safe', description: 'Local-first processing and zero biometric surveillance' },
      { name: 'Project Tech Stack', href: '/tech/tech-stack', description: 'Modern client-side web stack for low-end phones' },
      { name: 'Roadmap & Future Scope', href: '/tech/roadmap', description: 'Next steps including multi-campus edge deployment' },
    ],
  },
  {
    label: 'Tools',
    items: [
      { name: 'Portion Recommender Demo', href: '/tools/portion-recommender', badge: 'Interactive', description: 'Live portion tier engine with meal card generator' },
      { name: 'Interactive BMI Calculator', href: '/tools/bmi-calculator', description: 'WHO classification and height-weight ratio tool' },
      { name: 'Mifflin-St Jeor BMR Tool', href: '/tools/bmr-calculator', description: 'Basal metabolic rate calculation for students' },
      { name: 'TDEE Activity Calculator', href: '/tools/tdee-calculator', description: 'Daily expenditure calculator with activity tiers' },
      { name: 'Mobile App Preview', href: '/tools/app-preview', badge: 'Mockups', description: 'Mess counter serving mode phone simulator' },
    ],
  },
  {
    label: 'For You',
    items: [
      { name: 'For Students', href: '/for/students', description: 'Sustained study energy, fitness gains, zero guesswork' },
      { name: 'For Mess Staff & Caterers', href: '/for/mess-staff', description: 'Smoother counter queues and predictable batch sizes' },
      { name: 'For Wardens & Nutritionists', href: '/for/wardens-nutritionists', description: 'Hostel wellness metrics and balanced nutrition audits' },
      { name: 'For College Management & Parents', href: '/for/college-management', description: 'Campus sustainability, cost reduction & student health' },
    ],
  },
];

export const ALL_PAGES_INDEX: { title: string; href: string; section: string; desc: string }[] = [
  // Core
  { title: 'Home', href: '/', section: 'Core', desc: 'Main project portal, key statistics, and pilot CTA' },
  { title: 'About the Project', href: '/about', section: 'Core', desc: 'Project vision, problem context, and mission' },
  { title: 'How It Works', href: '/how-it-works', section: 'Core', desc: '6-stage pipeline overview and process flow' },
  { title: 'Get Involved / Join Pilot', href: '/get-involved', section: 'Core', desc: 'Sign up for the 4-week mess trial cohort' },
  { title: 'Contact Us', href: '/contact', section: 'Core', desc: 'Reach the student engineering team and mess liaison' },

  // Research
  { title: 'Field Observations', href: '/research/field-observations', section: 'Research', desc: '3 field patterns observed in hostel mess dining' },
  { title: 'Problem Statement', href: '/research/problem-statement', section: 'Research', desc: 'Students choose portions blindly without context' },
  { title: 'Five Whys Analysis', href: '/research/five-whys', section: 'Research', desc: 'Root cause analysis drilldown diagram' },
  { title: 'Stakeholder Map', href: '/research/stakeholders', section: 'Research', desc: 'Primary, secondary, and tertiary campus stakeholders' },
  { title: 'Key Numbers & Data', href: '/research/key-numbers', section: 'Research', desc: '50% mismatch, 60-70% waste, 600+ surveyed' },
  { title: 'Survey Methodology', href: '/research/survey-methodology', section: 'Research', desc: 'Survey design, sample demographics, and data collection' },
  { title: 'Survey Results Deep Dive', href: '/research/survey-results', section: 'Research', desc: 'Deep dive statistics and student response charts' },

  // Solution
  { title: 'Solution Overview', href: '/solution/overview', section: 'Solution', desc: 'Personalized food portion assistant using BMI and activity' },
  { title: 'Comparison vs Existing', href: '/solution/comparison', section: 'Solution', desc: 'Wall charts vs. smart AI-assisted serving' },
  { title: 'Runner-Up Considered (CNN)', href: '/solution/runner-up', section: 'Solution', desc: 'Why computer vision food recognition was rejected' },
  { title: 'Why This Approach Won', href: '/solution/why-this-won', section: 'Solution', desc: 'Low latency, zero extra hardware, universal phone access' },
  { title: 'Project Objectives', href: '/solution/objectives', section: 'Solution', desc: 'The 5 target goals of the portion recommendation system' },
  { title: 'Expected Outcomes (Before vs After)', href: '/solution/expected-outcomes', section: 'Solution', desc: 'Expected results and food waste reduction impact' },

  // Tech
  { title: 'System Architecture (6 Stages)', href: '/tech/architecture', section: 'Technology', desc: 'Full 6-stage block diagram and data transformations' },
  { title: 'AI/ML Engine Explained', href: '/tech/ai-ml-engine', section: 'Technology', desc: 'Rule-based BMR/TDEE and weighted scoring algorithms' },
  { title: 'Understanding BMI, BMR & TDEE', href: '/tech/bmi-bmr-tdee', section: 'Technology', desc: 'Mifflin-St Jeor physiology and metabolic calculations' },
  { title: 'Decision Logic & Rules', href: '/tech/decision-logic', section: 'Technology', desc: 'Meal type thresholding and dietary restriction filters' },
  { title: 'Continuous Feedback Loop', href: '/tech/feedback-loop', section: 'Technology', desc: 'User feedback, fullness rating, and weight tracking' },
  { title: 'Data Privacy & Ethics', href: '/tech/data-privacy', section: 'Technology', desc: 'Responsible student data governance and privacy guarantees' },
  { title: 'Tech Stack', href: '/tech/tech-stack', section: 'Technology', desc: 'Frontend, algorithms, and deployment specifications' },
  { title: 'Roadmap & Future Scope', href: '/tech/roadmap', section: 'Technology', desc: 'Future phases including automated counter kiosks' },

  // Tools
  { title: 'Interactive Portion Recommender', href: '/tools/portion-recommender', section: 'Tools', desc: 'Generate a personalized meal portion recommendation' },
  { title: 'Interactive BMI Calculator', href: '/tools/bmi-calculator', section: 'Tools', desc: 'Instant BMI calculation with WHO category ranges' },
  { title: 'Mifflin-St Jeor BMR Calculator', href: '/tools/bmr-calculator', section: 'Tools', desc: 'Calculate resting calorie requirements by gender' },
  { title: 'TDEE Activity Calculator', href: '/tools/tdee-calculator', section: 'Tools', desc: 'Compute total daily expenditure across 5 activity tiers' },
  { title: 'Mobile App Interface Preview', href: '/tools/app-preview', section: 'Tools', desc: 'Interactive phone simulator for the student mess assistant' },

  // Stakeholders
  { title: 'For Students', href: '/for/students', section: 'Stakeholders', desc: 'Better academic focus, athletic fuel, and balanced health' },
  { title: 'For Mess Staff & Caterers', href: '/for/mess-staff', section: 'Stakeholders', desc: 'Faster lines, standardized serving scoops, less kitchen waste' },
  { title: 'For Wardens & Nutritionists', href: '/for/wardens-nutritionists', section: 'Stakeholders', desc: 'Hostel wellness compliance and food balance monitoring' },
  { title: 'For College Management & Parents', href: '/for/college-management', section: 'Stakeholders', desc: 'Operational cost savings and reassurance for families' },

  // Supporting
  { title: 'Project Team & Contributors', href: '/team', section: 'Supporting', desc: 'Meet the engineering and nutrition research team' },
  { title: 'Frequently Asked Questions', href: '/faq', section: 'Supporting', desc: 'Common questions from students, staff, and faculty' },
  { title: 'Blog & Research Insights', href: '/blog', section: 'Supporting', desc: 'Field research articles and dietary thought leadership' },
  { title: 'Why Generic Nutrition Charts Fail', href: '/blog/why-generic-nutrition-charts-fail', section: 'Supporting', desc: 'Field study on why static wall posters are ignored' },
  { title: 'Nutrition & Tech Glossary', href: '/glossary', section: 'Supporting', desc: 'Key terms: BMI, BMR, TDEE, Mifflin-St Jeor, Portion Tier' },
  { title: 'Privacy Policy', href: '/privacy-policy', section: 'Supporting', desc: 'Data protection policies for student health metrics' },
  { title: 'Terms of Use', href: '/terms', section: 'Supporting', desc: 'Pilot guidelines and educational disclaimer terms' },
];

export interface SitemapSection {
  category: string;
  pages: { title: string; path: string; description: string }[];
}

export const SITEMAP: SitemapSection[] = [
  {
    category: 'Core Pages',
    pages: [
      { title: 'Home', path: '/', description: 'Project portal, key statistics, and pilot CTA' },
      { title: 'About the Project', path: '/about', description: 'Vision, problem context, and mission' },
      { title: 'How It Works', path: '/how-it-works', description: '6-stage pipeline overview and process flow' },
      { title: 'Get Involved / Join Pilot', path: '/get-involved', description: 'Sign up for the 4-week mess trial cohort' },
      { title: 'Contact Us', path: '/contact', description: 'Reach student engineering and dining liaison' },
    ],
  },
  {
    category: 'Interactive Tools',
    pages: [
      { title: 'Portion Recommender', path: '/tools/portion-recommender', description: 'Interactive portion calculator and counter pass' },
      { title: 'BMI Calculator', path: '/tools/bmi-calculator', description: 'WHO classification and height-weight ratio tool' },
      { title: 'Mifflin-St Jeor BMR Tool', path: '/tools/bmr-calculator', description: 'Basal metabolic rate calculation' },
      { title: 'TDEE Activity Calculator', path: '/tools/tdee-calculator', description: 'Daily expenditure across 5 activity levels' },
      { title: 'Mobile App Preview', path: '/tools/app-preview', description: 'Counter serving mode phone simulator' },
    ],
  },
  {
    category: 'Research & Field Work',
    pages: [
      { title: 'Field Observations', path: '/research/field-observations', description: '3 visible behavioral patterns in campus dining' },
      { title: 'Problem Statement', path: '/research/problem-statement', description: 'Why students choose portions blindly' },
      { title: 'Five Whys Analysis', path: '/research/five-whys', description: 'Drilldown from portion habits to missing guidance' },
      { title: 'Stakeholder Map', path: '/research/stakeholders', description: 'Primary, secondary, and tertiary campus beneficiaries' },
      { title: 'Key Numbers & Data', path: '/research/key-numbers', description: '50% mismatch, 60-70% waste, 600+ surveyed' },
      { title: 'Survey Methodology', path: '/research/survey-methodology', description: 'Protocol used across 600+ campus respondents' },
      { title: 'Survey Results Deep Dive', path: '/research/survey-results', description: 'Comprehensive charts and statistical breakdown' },
    ],
  },
  {
    category: 'Solution & Innovation',
    pages: [
      { title: 'Solution Overview', path: '/solution/overview', description: 'Personalized food portion assistant using BMI and activity' },
      { title: 'Pipeline Deep Dive', path: '/solution/pipeline-deep-dive', description: '6-stage end-to-end operational walkthrough' },
      { title: 'Why This Won (vs CNN)', path: '/solution/why-this-won', description: 'Why rule-based calculation won over computer vision' },
      { title: 'Feature Breakdown', path: '/solution/features', description: 'Complete inventory of user capabilities' },
      { title: 'Before vs After Comparison', path: '/solution/comparison', description: 'Detailed dining hall transformation matrix' },
      { title: 'Future Roadmap', path: '/solution/future-roadmap', description: 'Wearables, IoT scales, and campus procurement API' },
      { title: 'Limitations & Edge Cases', path: '/solution/limitations', description: 'Scientific boundaries, medical disclaimers, edge cases' },
    ],
  },
  {
    category: 'Technical & Architecture',
    pages: [
      { title: 'System Architecture', path: '/tech/architecture', description: '3-tier local-first client architecture' },
      { title: 'BMI, BMR & TDEE Science', path: '/tech/bmi-bmr-tdee', description: 'Physiological formulas and activity multipliers' },
      { title: 'AI/ML Engine Explained', path: '/tech/ai-ml-engine', description: 'Weighted rule-based recommendation logic' },
      { title: 'Data Flow & Feedback Loop', path: '/tech/data-flow', description: 'End-to-end data trajectory and closed loop' },
      { title: 'Algorithms & Flowchart', path: '/tech/algorithms-flowchart', description: 'Decision trees and TypeScript pseudo-code' },
      { title: 'Tech Stack', path: '/tech/tech-stack', description: 'Modern client-side web stack for budget phones' },
      { title: 'API & Data Schemas', path: '/tech/api-specs', description: 'JSON schemas for profiles, recommendations, feedback' },
    ],
  },
  {
    category: 'Stakeholders & Personas',
    pages: [
      { title: 'For Students', path: '/for/students', description: 'Better academic focus, athletic fuel, zero guesswork' },
      { title: 'For Mess Staff & Caterers', path: '/for/mess-staff', description: 'Faster lines, standardized serving scoops, less kitchen waste' },
      { title: 'For Wardens & Nutritionists', path: '/for/wardens-nutritionists', description: 'Hostel wellness compliance and food balance monitoring' },
      { title: 'For College Management', path: '/for/college-management', description: 'Campus sustainability, cost reduction & student health' },
    ],
  },
  {
    category: 'Documentation & Academic',
    pages: [
      { title: 'Frequently Asked Questions', path: '/docs/faqs', description: '14+ questions across science, tech, mess, and capstone' },
      { title: 'Scientific Glossary', path: '/docs/glossary', description: 'Key physiological and technical terminology' },
      { title: 'Capstone Project Brief', path: '/docs/capstone-brief', description: 'Official thesis abstract, team, and deliverables' },
      { title: 'Literature Review', path: '/docs/literature-review', description: 'Annotated bibliography of peer-reviewed citations' },
      { title: 'Complete Sitemap', path: '/docs/sitemap', description: 'Visual index of all 40 platform pages' },
    ],
  },
];

