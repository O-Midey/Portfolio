import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Scribble, { ScribbledText } from "./Scribble";
import { buttonStyles } from "./buttonStyles";

export default function HeroIntroduction() {
  return (
    <div className="hero-introduction mx-auto flex w-full max-w-[21rem] flex-col items-center gap-4 md:mx-0 md:max-w-md md:items-start">
      <p className="text-center text-sm font-normal leading-[1.7] text-term-fg/75 md:text-left">
        I build products{" "}
        <ScribbledText className="whitespace-nowrap">end-to-end</ScribbledText>{" "}
        — shipping real apps across the full stack, on-chain, and with AI in the
        loop.
      </p>

      <div className="flex items-center gap-2.5 pt-1">
        <Link
          href="/about"
          className={buttonStyles.primary}
        >
          ABOUT ME
          <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
        <Scribble variant="arrow" color="pink" className="-mt-4 size-11" />
      </div>
    </div>
  );
}
