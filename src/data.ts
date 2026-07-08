import { CareerHighlight, Service, RecruitingStep, WhyCard, Testimonial } from './types';

export const CAREER_HIGHLIGHTS: CareerHighlight[] = [
  { id: 'wins', metric: '1,006+', label: 'Career Victories', subtext: 'In 29 legendary years of head coaching' },
  { id: 'slu_wins', metric: '516', label: 'Wins at Saint Louis', subtext: "Program's all-time winningest baseball coach" },
  { id: 'coaching_yrs', metric: '29', label: 'Years Coaching', subtext: 'Of unmatched collegiate leadership & development' },
  { id: 'mlb_picks', metric: '33', label: 'MLB Draft Picks', subtext: 'Developed into professional draft selections' },
  { id: 'championships', metric: '6', label: 'A10 Regular Season titles', subtext: 'Championship standards at the highest level' },
  { id: 'ncaa_tourneys', metric: '3', label: 'NCAA Appearances', subtext: 'Tournament experiences leading elite programs' }
];

export const SERVICES: Service[] = [
  {
    id: 'consultation',
    title: 'One-on-One Recruiting Consultation',
    description: 'Receive a personalized recruiting roadmap based on your athletic ability, academic goals, and long-term aspirations.',
    iconName: 'UserCheck'
  },
  {
    id: 'evaluation',
    title: 'Player Evaluation',
    description: 'Get an honest assessment of your current skill level, strengths, and areas for improvement to better understand where you fit within the college baseball landscape.',
    iconName: 'Activity'
  },
  {
    id: 'strategy',
    title: 'Recruiting Strategy',
    description: 'Develop a customized recruiting plan that identifies the schools best suited to your playing ability, academic interests, and future goals.',
    iconName: 'Compass'
  },
  {
    id: 'communication',
    title: 'Coach Communication',
    description: 'Learn how to professionally communicate with college coaches through emails, phone calls, recruiting profiles, and social media.',
    iconName: 'Mail'
  },
  {
    id: 'matching',
    title: 'College Matching',
    description: 'Identify programs that provide the best overall fit academically, athletically, and personally while maximizing your recruiting opportunities.',
    iconName: 'Award'
  },
  {
    id: 'mentorship',
    title: 'Ongoing Mentorship',
    description: 'Receive continued guidance throughout every stage of the recruiting process, from your first evaluation to your college commitment.',
    iconName: 'TrendingUp'
  }
];export const RECRUITING_STEPS: RecruitingStep[] = [
  {
    stepNumber: 1,
    title: 'Discovery & Evaluation',
    description: 'I begin by understanding your goals, academics, athletic ability, and recruiting potential to create a strong foundation.',
    iconName: 'Search'
  },
  {
    stepNumber: 2,
    title: 'Strategy & Targeting',
    description: 'Together, we identify colleges that match your athletic ability, academic interests, and long-term goals while creating a personalized target school list.',
    iconName: 'Target'
  },
  {
    stepNumber: 3,
    title: 'Preparation & Communication',
    description: 'Learn how to effectively communicate with college coaches through professional emails, recruiting videos, phone conversations, and social media.',
    iconName: 'FileText'
  },
  {
    stepNumber: 4,
    title: 'Connection & Advocacy',
    description: "Benefit from Darin's decades of experience and trusted, respected relationships throughout college baseball to increase meaningful recruiting opportunities.",
    iconName: 'Users'
  },
  {
    stepNumber: 5,
    title: 'Decision Guidance',
    description: 'Compare programs, evaluate scholarship packages and roster opportunities, and confidently choose the college that best fits your future.',
    iconName: 'Sparkles'
  },
  {
    stepNumber: 6,
    title: 'Ongoing Mentorship',
    description: 'My mentorship continues beyond your commitment, providing ongoing guidance as you transition into collegiate athletics and beyond.',
    iconName: 'HeartHandshake'
  }
];

export const WHY_CHOOSE_CARDS: WhyCard[] = [
  {
    id: 'experience',
    title: 'Proven Winning Experience',
    description: 'Over 1,006 career victories prove a methodology and standard that translates directly to player growth and recruiting success.',
    iconName: 'Trophy'
  },
  {
    id: 'evaluations',
    title: 'Honest Evaluations',
    description: "No sugarcoating. You'll receive realistic, highly respected assessments of your current level to target the right college tiers.",
    iconName: 'CheckCircle2'
  },
  {
    id: 'network',
    title: 'Extensive Recruiting Network',
    description: 'Decades of building trust with college head coaches and recruiting coordinators means your profile gets seen by decision makers.',
    iconName: 'Network'
  },
  {
    id: 'leadership',
    title: 'Championship Leadership',
    description: "Former Division 1 championship coach and 3-time A10 Coach of the Year who knows what it takes to perform at the highest levels.",
    iconName: 'ShieldCheck'
  },
  {
    id: 'personalized',
    title: 'Personalized Coaching',
    description: 'Get tailored one-on-one strategy directly from Darin himself, ensuring customized focus that generic services cannot offer.',
    iconName: 'User'
  },
  {
    id: 'family',
    title: 'Family-Focused Guidance',
    description: 'Navigating recruitment can be overwhelming for families. I make it a team effort, ensuring parents and players are aligned and supported.',
    iconName: 'Users'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    text: 'Coach Hendrickson provided honest advice throughout the recruiting process and helped our son find the perfect college fit. His experience and guidance gave us confidence every step of the way.',
    author: 'The Thompson Family',
    role: 'Parent',
    rating: 5
  },
  {
    id: 'test-2',
    text: 'The recruiting process felt overwhelming until I started working with Coach Hendrickson. His knowledge, connections, and honest feedback made all the difference in my recruitment.',
    author: 'Marcus Vance',
    role: 'Student-Athlete',
    rating: 5
  },
  {
    id: 'test-3',
    text: "Having someone with Coach Hendrickson's experience in my corner completely changed my recruiting journey. I always knew I had an advisor I could 100% trust.",
    author: 'Alex Martinez',
    role: 'College Baseball Player',
    rating: 5
  }
];

export const ADDITIONAL_HIGHLIGHTS = [
  '1,006+ Career Coaching Victories',
  '516 Wins at Saint Louis University',
  '29 Years of Head Coaching Experience',
  '33 MLB Draft Picks Developed',
  '11 MLB Draft Picks at Saint Louis',
  '6 Atlantic 10 Regular Season Championships',
  '3 NCAA Tournament Appearances',
  '3× Atlantic 10 Coach of the Year',
  'National Coach of the Year Honorable Mention',
  'Saint Louis University All-Time Winningest Baseball Coach'
];
