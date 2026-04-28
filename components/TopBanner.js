"use client";

import { useEffect, useState } from "react";
import { Sparkles, X } from "lucide-react";
import { copy } from "@/lib/copy";

const COUNTDOWN_MINUTES = 15;

export default function TopBanner() {
  const { topBanner } = copy;
  const [isMounted, setIsMounted] = useState(false);
  const [closed, setClosed] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(COUNTDOWN_MINUTES * 60);

  useEffect(() => {
    setIsMounted(true);
    const tick = setInterval(() => {
      setSecondsLeft((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(tick);
  }, []);

  if (!isMounted || closed) return null;

  const m = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const s = String(secondsLeft % 60).padStart(2, "0");

  return (
    <div className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#E8456A] via-[#F5728A] to-[#E0A458] text-white">
      <div className="relative mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-2.5 text-center text-[13px] font-semibold sm:gap-3 sm:text-sm md:py-3">
        <span aria-hidden="true" className="hidden sm:inline-block">
          {topBanner.emoji}
        </span>
        <Sparkles className="h-4 w-4 text-white sm:hidden" strokeWidth={2.4} />
        <span className="tracking-wide uppercase">{topBanner.label}</span>
        <span className="mx-1 hidden h-4 w-px bg-white/40 sm:inline-block" />
        <span
          className="hidden font-mono text-[13px] tabular-nums sm:inline-block"
          aria-live="polite"
        >
          {m}
          <span className="mx-0.5 opacity-70">{topBanner.minutesLabel}</span>
          {topBanner.timerSeparator}
          {s}
          <span className="ml-0.5 opacity-70">{topBanner.secondsLabel}</span>
        </span>
        <button
          type="button"
          aria-label={topBanner.closeLabel}
          onClick={() => setClosed(true)}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-white/85 transition hover:bg-white/15 hover:text-white"
        >
          <X className="h-4 w-4" strokeWidth={2.4} />
        </button>
      </div>
    </div>
  );
}
