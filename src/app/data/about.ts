// About copy shared by the desktop and mobile about views.
export type AboutSection = {
  heading: string;
  body: string;
  link?: { label: string; href: string };
};

export const aboutSections: AboutSection[] = [
  {
    heading: "Who I am",
    body: "I'm Omotosho David Ayomide, a full-stack, AI, and Web3 engineer based in Lagos. I build production-ready products across the entire stack—from interfaces and infrastructure to AI agents and smart contracts.",
  },
  {
    heading: "What I build",
    body: "I build marketplaces, dashboards, wallets, AI-powered applications, and developer tools. My work spans React and Next.js, backend systems in Node.js and Go, PostgreSQL, Solidity, and modern AI infrastructure.",
  },
  {
    heading: "Building with AI",
    body: "I build the systems around the model: tool orchestration, structured outputs, memory, validation, observability, and safety controls. In Ledgr, an agentic crypto-wallet OS, every proposed transaction passes through a security supervisor and is simulated before reaching the chain. I also maintain streamkit, a vendor-agnostic npm library for streaming AI interfaces.",
  },
  {
    heading: "Shipping in public",
    body: "I built Beacon, a Git-powered tool that turns commits into platform-specific social posts—making it easier for developers to share their work consistently.",
  },
  {
    heading: "Why Web3",
    body: "Web3 makes ownership and value programmable. I'm interested in building products that make those capabilities secure, understandable, and useful to real people.",
  },
  {
    heading: "Outside of code",
    body: "Usually listening to Afrobeats. Check out what's currently in rotation.",
    link: {
      label: "Open playlist →",
      href: "https://open.spotify.com/user/31jibew2j4bcfy3edf6ezxorcbxu/playlists",
    },
  },
];
