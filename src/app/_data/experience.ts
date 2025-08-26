export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export const experiences: Experience[] = [
  {
    role: "Junior Frontend Developer",
    company: "SwipeJobs",
    period: "2025 - Present",
    description: [
      "Built and maintained user-facing features with React and TypeScript",
      "Collaborated with designers to implement responsive and accessible UIs",
      "Optimized performance and reduced bundle size by 20%",
    ],
  },
  {
    role: "Frontend Developer (Freelance)",
    company: "Self-employed",
    period: "2023 - 2025",
    description: [
      "Developed portfolio projects with Next.js, Tailwind, and Framer Motion",
      "Built and deployed a full-stack Web3 voting dApp using Solidity and Ethers.js",
      "Worked with clients to deliver customized websites and web apps",
    ],
  },
];
