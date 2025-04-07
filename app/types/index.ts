export interface Project {
    id: number;
    name: string;
    budget: number;
    timeline: number;
    skills: string[];
    description: string;
  }
  
  export interface Bid {
    id: number;
    projectId: number;
    amount: number;
    timeline: number;
    proposal: string;
    status: 'pending' | 'accepted' | 'rejected';
  }
  
  export interface FreelancerProfile {
    name: string;
    skills: string[];
    experience: number;
    description: string;
    portfolioLinks: {
      github: string;
      linkedin: string;
      website: string;
    };
    rating: number;
    totalRatings: number;
  }
  
  export interface CompletedProject {
    id: number;
    name: string;
    description: string;
    completionDate: string;
  }