"use client";

import { ArrowRight, Cookie, Sparkles, Star, ShieldCheck } from "lucide-react";
import { copy } from "@/lib/copy";

export default function Hero() {
  const { hero } = copy;

  const handleScrollToCta = () => {
    if (typeof document === "undefined") return;
    const target = document.getElementById("final-cta-section");
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative overflow-hidden bg-[#FFF7F1] pb-20 pt-12 md:pb-28 md:pt-20">
      {/* Background gradient mesh */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-[#FFE7E0] via-[#FFF7F1] to-[#FFE3CF]"
      />
      <div
        aria-hidden="true"
        className="absolute -left-32 top-12 h-[420px] w-[420px] rounded-full bg-[#F5728A] opacity-25 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-32 top-32 h-[460px] w-[460px] rounded-full bg-[#E0A458] opacity-25 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_115%,#F5728A20_0%,transparent_55%)]"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
        {/* LEFT — copy */}
        <div className="relative z-10">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#F5728A]/30 bg-white/70 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E8456A] shadow-sm backdrop-blur-md md:text-xs">
            <Sparkles className="h-3.5 w-3.5" strokeWidth={2.4} />
            <span>{hero.eyebrow}</span>
          </div>

          {/* Brand line - gigantic gradient brand mark */}
          <div className="mt-6 leading-[0.85]">
            <span className="block bg-gradient-to-br from-[#E8456A] via-[#F5728A] to-[#E0A458] bg-clip-text text-[64px] font-black tracking-tight text-transparent sm:text-[88px] md:text-[120px] lg:text-[140px]">
              {hero.brand.line1}
            </span>
            <span className="mt-1 block text-[18px] font-semibold tracking-[0.3em] text-[#6B5560] sm:text-xl md:text-2xl">
              {hero.brand.line2}
            </span>
          </div>

          {/* Headline */}
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-[#2A1A1F] sm:text-4xl md:text-5xl">
            {hero.headline.line1}{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-br from-[#E8456A] to-[#F5728A] bg-clip-text text-transparent">
                {hero.headline.green1}
              </span>
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 right-0 h-3 -rotate-1 rounded-full bg-[#FFB199]/60"
              />
            </span>{" "}
            {hero.headline.line2}
          </h1>

          {/* Subheadline */}
          <p className="mt-5 text-base font-medium text-[#6B5560] md:text-lg">
            {hero.subheadline}
          </p>
          <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-[#6B5560] md:text-base">
            {hero.paragraph}
          </p>

          {/* CTA */}
          <button
            type="button"
            onClick={handleScrollToCta}
            className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-2xl border-b-4 border-[#B33054] bg-gradient-to-br from-[#F5728A] to-[#E8456A] px-7 py-5 text-[15px] font-extrabold uppercase tracking-wide text-white shadow-[0_18px_45px_-15px_rgba(232,69,106,0.65)] transition-all hover:translate-y-0.5 hover:border-b-2 hover:from-[#E8456A] hover:to-[#B33054] sm:w-auto md:text-base"
          >
            {hero.cta}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
          </button>

          {/* Stats row */}
          <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4">
            {hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-[#F5728A]/15 bg-white/70 px-3 py-3 text-center shadow-sm backdrop-blur-md sm:px-4 sm:py-4"
              >
                <div className="bg-gradient-to-br from-[#E8456A] to-[#E0A458] bg-clip-text text-xl font-black text-transparent sm:text-2xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-[#6B5560] sm:text-[11px]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Social proof pill */}
          <div className="mt-7 flex items-center gap-3">
            <div className="flex -space-x-2">
              {hero.socialProof.names.slice(0, 4).map((name, i) => (
                <div
                  key={name}
                  className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-[11px] font-bold text-white shadow-sm ${
                    i === 0
                      ? "bg-[#F5728A]"
                      : i === 1
                        ? "bg-[#E0A458]"
                        : i === 2
                          ? "bg-[#7FC8A9]"
                          : "bg-[#E8456A]"
                  }`}
                >
                  {name.charAt(0)}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#E0A458]">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4" fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <div className="text-xs font-medium text-[#6B5560]">
                {hero.socialProof.starsLabel}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — mockup */}
        <div className="relative z-0">
          <div className="relative mx-auto max-w-[520px]">
            {/* Halo */}
            <div
              aria-hidden="true"
              className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-[#FFB199]/55 via-[#F5728A]/35 to-[#E0A458]/45 blur-3xl"
            />
            {/* Floating decoration */}
            <div className="animate-float absolute -left-4 top-6 z-20 hidden rotate-[-6deg] rounded-2xl bg-white px-4 py-2.5 text-xs font-bold text-[#E8456A] shadow-xl ring-1 ring-[#F5728A]/20 md:flex md:items-center md:gap-2">
              <Cookie className="h-4 w-4" strokeWidth={2.4} />
              <span>{hero.banner}</span>
            </div>
            {/* Badge */}
            <div className="absolute -right-2 top-10 z-20 rotate-3 rounded-full bg-[#2A1A1F] px-4 py-2 text-[11px] font-extrabold uppercase tracking-wide text-[#E0A458] shadow-xl ring-1 ring-[#E0A458]/30 md:text-xs">
              {hero.badge}
            </div>
            {/* Guarantee chip */}
            <div className="absolute -bottom-3 left-3 z-20 hidden items-center gap-2 rounded-2xl bg-white px-4 py-2.5 shadow-xl ring-1 ring-[#7FC8A9]/30 md:flex">
              <ShieldCheck className="h-5 w-5 text-[#7FC8A9]" strokeWidth={2.4} />
              <span className="text-xs font-bold text-[#2A1A1F]">7 días</span>
            </div>

            {/* Mockup image */}
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-white via-[#FFF7F1] to-[#FFE7E0] p-3 shadow-[0_40px_90px_-40px_rgba(232,69,106,0.5)] ring-1 ring-[#F5728A]/15">
              <img
                src="/hero-mockup.webp"
                alt={hero.imageAlt}
                className="block h-auto w-full rounded-2xl object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
