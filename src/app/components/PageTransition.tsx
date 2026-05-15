"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
    const t = setTimeout(() => setActive(false), 400);
    return () => clearTimeout(t);
  }, [pathname]);

  if (!active) return null;

  return <div className="page-glitch-overlay bg-[#fafafa] dark:bg-[#111]" aria-hidden />;
}
