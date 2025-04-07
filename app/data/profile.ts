import { CompletedProject, FreelancerProfile } from '../types';

export const profile: FreelancerProfile = {
  name: "Deepanshu Pathak",
  skills: ["React", "Next.js", "TypeScript", "Node.js", "TailwindCSS"],
  experience: 2,
  description: "Full-stack developer with 2 years of experience specializing in React and Node.js. Passionate about building scalable web applications.",
  portfolioLinks: {
    github: "https://github.com/deepanshu-iitm",
    linkedin: "https://linkedin.com/in/deepanshu-pathak",
    website: "https://deepanshupathak.netlify.app"
  },
  rating: 4.8,
  totalRatings: 24
};

export const completedProjects: CompletedProject[] = [
  {
    id: 1,
    name: "Healthcare Management Platform",
    description: "Developed a comprehensive healthcare management system using React and Node.js, improving patient care efficiency by 40%.",
    completionDate: "2025-02-15"
  },
  {
    id: 2,
    name: "Real Estate Marketplace",
    description: "Built a modern real estate platform with virtual tour capabilities using Next.js and Three.js.",
    completionDate: "2024-11-30"
  },
  {
    id: 3,
    name: "Financial Dashboard",
    description: "Created a real-time financial dashboard with complex data visualizations using D3.js and React.",
    completionDate: "2023-09-20"
  }
];