// About copy shared by the desktop and mobile about views.
export type AboutSection = {
  heading: string;
  body: string;
  link?: { label: string; href: string };
};

export const aboutSections: AboutSection[] = [
  {
    heading: "Who I am",
    body: "I'm Omotosho David Ayomide — a fullstack, AI, and Web3 engineer based in Lagos. I build systems end-to-end: database to UI, smart contract to agent.",
  },
  {
    heading: "What I do",
    body: "I specialise in building web apps, AI-powered tools, and Web3 products. Think marketplaces, dashboards, Ethereum wallets, LLM agents, and smart contracts — shipped end-to-end with React, Node.js, Postgres, Solidity, Python and Golang.",
  },
  {
    heading: "Building with AI",
    body: "I build the system around the model — LLM agents that call tools, reason step-by-step, and ship with real guardrails. In Ledgr, my agentic crypto-wallet OS (Next.js, Vercel AI SDK, viem, Sepolia), every action runs through a security supervisor and gets simulated before it touches the chain. I also maintain streamkit, a published npm library for vendor-agnostic AI streaming UI.",
  },
  {
    heading: "Shipping in public",
    body: "I built Beacon, a git-hook tool that drafts platform-specific social posts straight from your commits — so build-in-public stops being a chore you forget to do.",
  },
  {
    heading: "Why Web3",
    body: "Web3 is one of the few spaces where software can genuinely shift how people own and exchange value. That's the kind of work I want to be part of.",
  },

  {
    heading: "Outside of code",
    body: "I'm vibing to Afrobeats 🎶✨ — check out my playlist on Spotify.",
    link: {
      label: "Open playlist →",
      href: "https://open.spotify.com/user/31jibew2j4bcfy3edf6ezxorcbxu/playlists",
    },
  },
];
