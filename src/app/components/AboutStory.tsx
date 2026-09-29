import Image from "next/image";
import Scribble, { ScribbledText } from "./Scribble";
import BrainDoodle from "./BrainDoodle";
import BuildDoodle from "./BuildDoodle";
import { aboutPlaylist } from "../data/about";

const projectLinks = {
  Beacon: {
    href: "https://beacon-bip.vercel.app",
    lightIcon: "/project-icons/beacon.svg",
    darkIcon: "/project-icons/beacon-dark.svg",
  },
  RentLuxy: {
    href: "https://rentluxy.com",
    lightIcon: "/project-icons/rentluxy.png",
    darkIcon: "/project-icons/rentluxy-dark.svg",
  },
  Ledgr: {
    href: "https://ledgr-nu.vercel.app/",
    lightIcon: "/project-icons/ledgr.svg",
    darkIcon: "/project-icons/ledgr-dark.svg",
  },
  streamkit: {
    href: "https://o-midey.github.io/streamkit/",
    lightIcon: "/project-icons/streamkit.svg",
    darkIcon: "/project-icons/streamkit-dark.svg",
  },
} as const;

function ProjectLink({ name }: { name: keyof typeof projectLinks }) {
  return (
    <a
      href={projectLinks[name].href}
      target="_blank"
      rel="noopener noreferrer"
      className="whitespace-nowrap font-semibold text-neutral-950 transition-colors hover:text-neutral-600 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500 dark:text-white dark:hover:text-neutral-300"
    >
      <Image
        src={projectLinks[name].lightIcon}
        alt=""
        aria-hidden="true"
        width={16}
        height={16}
        className="mr-1 inline-block size-4 align-middle rounded-[3px] bg-transparent object-contain p-px ring-1 ring-black/25 dark:hidden"
      />
      <Image
        src={projectLinks[name].darkIcon}
        alt=""
        aria-hidden="true"
        width={16}
        height={16}
        className="mr-1 hidden size-4 align-middle rounded-[3px] bg-transparent object-contain p-px ring-1 ring-white/35 dark:inline-block"
      />
      {name}
    </a>
  );
}

export default function AboutStory() {
  return (
    <div className="space-y-9 md:space-y-0">
      <section className="grid gap-3 border-t border-neutral-200 pt-6 dark:border-white/15 md:grid-cols-[0.7fr_1.3fr] md:gap-16 md:py-10">
        <h2 className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
          What I build
          <BuildDoodle />
        </h2>
        <div className="space-y-4 text-[15px] leading-[1.8] text-neutral-700 dark:text-neutral-300 md:text-base md:leading-7 lg:text-lg lg:leading-8">
          <p>
            I build marketplaces, dashboards, blockchain infrastructures,
            AI-powered applications, and developer tools. I built{" "}
            <ProjectLink name="Beacon" />, a local-first tool that turns Git
            commits into reviewable social drafts; I also built{" "}
            <ProjectLink name="RentLuxy" /> end to end across its admin
            dashboards, backend, web app, and LLM integration. It’s a
            peer-to-peer home and car rental platform. I’m exploring
            natural-language wallet interactions with{" "}
            <ProjectLink name="Ledgr" /> on Sepolia, and I maintain{" "}
            <ProjectLink name="streamkit" />, a vendor-agnostic library for
            streaming AI interfaces.
          </p>
          <p>
            My work spans React and Next.js, backend systems in Node.js and Go,
            PostgreSQL, Solidity, and modern AI infrastructure.
          </p>
        </div>
      </section>

      <section className="grid gap-3 border-t border-neutral-200 pt-6 dark:border-white/15 md:grid-cols-[0.7fr_1.3fr] md:gap-16 md:py-10">
        <h2 className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
          How I work
          <BrainDoodle />
        </h2>
        <div className="space-y-4 text-[15px] leading-[1.8] text-neutral-700 dark:text-neutral-300 md:text-base md:leading-7 lg:text-lg lg:leading-8">
          <p>
            I start by understanding the problem, then choose the simplest
            architecture that can support it well. I value readable code, clear
            boundaries, thoughtful testing, and interfaces that feel considered.
            Security and reliability shape those decisions from the beginning.
          </p>
          <p>
            AI interests me because it brings new possibilities and new
            engineering questions around permissions, validation, memory, and
            human control. Blockchain raises its own questions about ownership
            and value. I enjoy working through those details and making the
            results useful and understandable.
          </p>
          <div className="relative max-w-[420px] pt-1">
            <Scribble
              variant="rays"
              color="amber"
              className="absolute right-1 top-1 size-5 -rotate-12"
            />
            <p className="pr-7 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
              When I’m not tinkering with blockchain or AI systems, you’ll find
              me <ScribbledText color="pink" variant="loop">listening to music</ScribbledText>{" "}
              or playing/watching{" "}
              <ScribbledText color="amber" variant="brackets">
                football
              </ScribbledText>
              .<br></br>
              <br></br>Here’s what I’ve been listening to lately.
            </p>
            <iframe
              title="Afrobeats playlist on Spotify"
              src={aboutPlaylist.embedUrl}
              width="100%"
              height="152"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
              className="mt-3 block h-[152px] w-full overflow-hidden rounded-xl border-0"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
