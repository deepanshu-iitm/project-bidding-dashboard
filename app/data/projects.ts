import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    name: "E-commerce Website Redesign",
    budget: 45000,
    timeline: 14,
    skills: ["React", "Next.js", "TailwindCSS", "TypeScript"],
    description: "Redesign and implement a modern e-commerce website with focus on user experience and performance."
  },
  {
    id: 2,
    name: "Blockchain Smart Contract Development",
    budget: 80000,
    timeline: 21,
    skills: ["Solidity", "Ethereum", "Web3.js", "Smart Contracts"],
    description: "Develop and deploy smart contracts for a decentralized marketplace application."
  },
  {
    id: 3,
    name: "Mobile App UI/UX Design",
    budget: 35000,
    timeline: 10,
    skills: ["Figma", "UI/UX", "Mobile Design", "Prototyping"],
    description: "Design a modern and intuitive mobile app interface for a fitness tracking application."
  },
  {
    id: 4,
    name: "AI-Powered Chatbot Integration",
    budget: 60000,
    timeline: 30,
    skills: ["Python", "NLP", "Machine Learning", "API Integration"],
    description: "Integrate an AI chatbot with existing customer support platform for automated responses."
  },
  {
    id: 5,
    name: "Social Media Dashboard",
    budget: 25000,
    timeline: 7,
    skills: ["React", "Data Visualization", "API Integration", "Redux"],
    description: "Create a dashboard to track and analyze social media metrics across multiple platforms."
  }
];