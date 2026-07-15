import { Project } from "../types/types";

export const projects: Project[] = [
  {
    title: "rentluxy",
    description:
      "A peer-to-peer car rental marketplace connecting hosts and guests across the USA. Book verified cars, manage bookings in real-time, and complete secure transactions with identity verification and insurance options — built for trust and transparency in the sharing economy.",
    tech: ["React", "SCSS", "Firebase", "GCP", "PayPal", "Didit"],
    status: "In Progress",
    categories: ["FULL-STACK"],
    liveLink: "https://rentluxy.com",
    codeLink: "",
    image:
      "https://res.cloudinary.com/daypv7q8r/image/upload/v1783324428/vlyk2idepimozvlsnkh2.png",
  },
  {
    title: "Beacon",
    description:
      "A local-first CLI (npm: beacon-bip) that turns git commits into build-in-public drafts for Twitter/X, LinkedIn, dev.to, Bluesky, and Mastodon. A post-commit hook runs a five-stage pipeline — capture → regex secret scanner → LLM significance scoring → voice-matched drafting → atomic JSON queue — with the scanner guaranteed to run before any model call, so the LLM only ever sees a redacted, truncated diff. A provider abstraction supports the Anthropic SDK or any OpenAI-compatible endpoint (including fully-offline Ollama), with every draft Zod-validated against per-platform schemas. Nothing is ever auto-posted: approving a draft copies it to the clipboard, and the whole footprint is two JSON files under ~/.beacon.",
    tech: ["TypeScript", "Node.js", "Zod", "Anthropic API", "Next.JS", "Vitest"],
    status: "Completed",
    categories: ["AI"],
    liveLink: "https://beacon-bip.vercel.app",
    codeLink: "https://github.com/O-Midey/beacon",
    image:
      "https://res.cloudinary.com/daypv7q8r/image/upload/v1783175985/h1ntljjudawq963zhueh.png",
  },
  {
    title: "Proxima",
    description:
      "A self-hosted HTTP(S) network inspector shipped as a single Go binary — your own Chrome DevTools Network tab. Proxima intercepts HTTPS traffic via a hand-rolled MITM layer built directly on the Go standard library (CONNECT tunnel hijacking, root CA generation, and per-domain leaf cert issuance — no goproxy wrapper), logs every request/response pair to SQLite with WAL, and streams them live to a Next.js web UI over WebSocket. Supports replay, diffing, request interception with breakpoints, parameterised filter queries, and HAR 1.2 export, plus a Chrome extension for zero-config browser setup.",
    tech: [
      "Go",
      "SQLite",
      "Next.JS",
      "TypeScript",
      "Websocket",
      "Chrome Extension",
    ],
    status: "In Progress",
    categories: ["FULL-STACK"],
    liveLink: "",
    codeLink: "https://github.com/O-Midey/proxima",
    image:
      "https://res.cloudinary.com/daypv7q8r/image/upload/v1782075746/zlkw9qufnbjgurlptxqs.png",
  },
  {
    title: "Narrate",
    description:
      "A PWA that turns any article or PDF into natural-sounding audio. Paste a link or drop a PDF and Narrate extracts the readable content — Mozilla Readability over a lightweight linkedom DOM on the server, pdf.js for documents — then streams OpenAI text-to-speech with sentence-level highlighting and tap-to-seek. The entire backend runs as same-origin Next.js route handlers with an httpOnly-cookie session signed via jose, Prisma on Neon Postgres, and ships as a single app on Vercel.",
    tech: [
      "Next.JS",
      "TypeScript",
      "Prisma",
      "Postgres",
      "OpenAI",
      "Tailwind CSS",
      "PWA",
    ],
    status: "In Progress",
    categories: ["AI", "FULL-STACK"],
    liveLink: "https://narrate-sigma.vercel.app",
    codeLink: "https://github.com/O-Midey/narrate",
    image:
      "https://res.cloudinary.com/daypv7q8r/image/upload/v1782074737/ry7kra41eodzsr6np1qm.png",
  },
  {
    title: "streamkit-ui",
    description:
      "A vendor-agnostic React library of rendering and state primitives for streaming LLM UIs — token streaming, incrementally-rendered markdown, tool-call state machines, and multi-stream orchestration. Markdown and code are sanitized at the render boundary with DOMPurify so model output can't inject into the DOM, while a single normalized StreamChunk type lets adapters swap OpenAI, Anthropic, and the Vercel AI SDK without touching UI code. Published to npm with build provenance, 94 passing tests, and a VitePress documentation site.",
    tech: ["React", "TypeScript", "Vercel AI SDK", "Storybook", "Vitest"],
    status: "Completed",
    categories: ["AI"],
    liveLink: "https://o-midey.github.io/streamkit/",
    codeLink: "https://github.com/O-Midey/streamkit",
    image:
      "https://res.cloudinary.com/daypv7q8r/image/upload/v1781897634/zaurnseghns1ezcljrg6.png",
  },
  {
    title: "Polywallet",
    description:
      "A fully functional Web3 wallet for Polygon — create & import wallets, send MATIC and ERC-20 tokens, and track transaction history.",
    tech: ["React", "Node.js", "Ethers.js", "Alchemy", "Polygon"],
    status: "In Progress",
    categories: ["WEB3"],
    liveLink: "",
    codeLink: "https://github.com/o-midey",
    image:
      "https://res.cloudinary.com/daypv7q8r/image/upload/v1763330559/Screenshot_2025-11-16_at_23.01.58_x3sebk.png",
  },
  {
    title: "Ledgr",
    description:
      "An AI-powered crypto wallet operating system built on Sepolia testnet. Ledgr lets users manage wallet operations through natural language — with every transaction simulated before execution, a full reasoning trace, real-time audit logs, and a security supervisor enforcing spend limits and injection guards. Built for financial-grade reliability.",
    tech: [
      "Next.JS",
      "TypeScript",
      "Vercel AI SDK",
      "Viem",
      "Wagmi",
      "RainbowKit",
      "Tailwind CSS",
    ],
    status: "In Progress",
    categories: ["AI", "WEB3"],
    liveLink: "https://ledgr-nu.vercel.app/",
    codeLink: "https://github.com/O-Midey/ledgr",
    image:
      "https://res.cloudinary.com/daypv7q8r/image/upload/v1780237169/Screenshot_2026-05-30_at_11.19.48_xfytpc.png",
  },
  {
    title: "Ward",
    description:
      "A non-custodial Ethereum wallet PWA built on Sepolia testnet. Ward handles HD wallet generation, AES-GCM encrypted key storage, and transaction signing entirely client-side — private keys never leave the device. Designed to look and feel like a native mobile app with a clean, minimal UI.",
    tech: [
      "Next.JS",
      "TypeScript",
      "Viem",
      "Wagmi",
      "Tailwind CSS",
      "IndexedDB",
    ],
    status: "In Progress",
    categories: ["WEB3"],
    liveLink: "https://ward-zeta.vercel.app/",
    codeLink: "https://github.com/O-Midey/ward",
    image:
      "https://res.cloudinary.com/daypv7q8r/image/upload/v1780762294/Screenshot_2026-06-06_at_17.11.23_b2fo8g.png",
  },
  {
    title: "Mankorie Global",
    description:
      "A professional energy and infrastructure company website built with Next.js. Mankorie Global Energy showcases integrated solar, electrical, and security solutions with a clean service-focused layout, client testimonials, and a streamlined consultation flow — serving residential and commercial clients across Nigeria.",
    tech: ["Next.JS", "Tailwind CSS", "Zustand"],
    status: "Completed",
    categories: ["FULL-STACK"],
    liveLink: "https://mankorieglobal.com",
    codeLink: "https://github.com/O-Midey/mankorie-global",
    image:
      "https://res.cloudinary.com/daypv7q8r/image/upload/v1778682616/Screenshot_2026-05-13_at_15.29.53_t97jgt.png",
  },
  {
    title: "ChainVote",
    description:
      "A decentralized on-chain voting platform built on Base L2. ChainVote lets users create and vote on polls via smart contracts — with every vote recorded as an immutable transaction. Poll metadata is stored on IPFS, results are publicly verifiable on-chain, and the contract has no admin keys or upgrade mechanism.",
    tech: ["Next.JS", "Solidity", "Base L2", "IPFS", "Wagmi", "Viem"],
    status: "Completed",
    categories: ["WEB3"],
    liveLink: "https://chain-vote-d-app.vercel.app/",
    codeLink: "https://github.com/O-Midey/ChainVote",
    image:
      "https://res.cloudinary.com/daypv7q8r/image/upload/v1780237186/Screenshot_2026-05-31_at_15.17.39_tufnqq.png",
  },
  {
    title: "Havesta",
    description:
      "Havesta is a full-stack AgriTech marketplace platform that connects farmers directly with customers, featuring vendor product management, secure payment processing via Paystack, and a comprehensive admin dashboard for business analytics. Built with React, Node.js, PostgreSQL, and modern web technologies.",
    tech: [
      "React",
      "Node.js",
      "Framer Motion",
      "Postgres",
      "Sequelize",
      "Paystack API",
    ],
    status: "Completed",
    categories: ["FULL-STACK"],
    liveLink: "https://havesta.com",
    codeLink: "",
    image:
      "https://res.cloudinary.com/daypv7q8r/image/upload/v1778682597/Screenshot_2026-05-13_at_15.29.36_vlmkji.png",
  },
  {
    title: "SwipeJobb",
    description:
      "Swipejobs is a modern, AI-powered staffing and job-matching platform that serves both job seekers and employers.",
    tech: ["ReactJS", "Tailwind CSS", "Framer Motion", "Websocket"],
    status: "Completed",
    categories: ["AI", "FULL-STACK"],
    liveLink: "https://swipejobb.se/",
    codeLink: "",
    image:
      "https://res.cloudinary.com/daypv7q8r/image/upload/v1760979777/Screenshot_2025-10-20_at_18.00.51_inclpg.png",
  },

  {
    title: "AquaLife",
    description:
      "Aqualife is a responsive donation platform built to support clean water initiatives. It features a modern design, secure payment integration, and an intuitive donation flow that makes giving simple and impactful.",
    tech: [
      "NextJS",
      "Tailwind CSS",
      "Flutterwave",
      "Lucide React",
      "Framer Motion",
    ],
    status: "Completed",
    categories: ["FULL-STACK"],
    liveLink: "https://aqua-life-ta98.vercel.app/",
    codeLink: "https://github.com/O-Midey/AquaLife",
    image:
      "https://res.cloudinary.com/daypv7q8r/image/upload/v1756156742/Screenshot_2025-08-25_at_21.55.03_mhphsq.png",
  },
];
