export interface LeadSubmission {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  gradYear: string;
  currentSchool: string;
  positions: string;
  clubTeam: string;
  message: string;
  timestamp: string;
  status: 'new' | 'viewed' | 'contacted';
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: 'Parent' | 'Student-Athlete' | 'College Baseball Player';
  rating: number;
  avatarUrl?: string;
}

export interface CareerHighlight {
  id: string;
  metric: string;
  label: string;
  subtext?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface RecruitingStep {
  stepNumber: number;
  title: string;
  description: string;
  iconName: string;
}

export interface WhyCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
