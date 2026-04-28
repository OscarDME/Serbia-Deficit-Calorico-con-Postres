"use client";

import { BadgeCheck, Star, Users } from "lucide-react";
import { copy } from "@/lib/copy";

export default function CarouselSection() {
  const { carouselSection } = copy;
  const doubled = [...carouselSection.items, ...carouselSection.items];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF7F1] via-[#FFE7E0] to-[#FFF7F1] py-20 md:py-28">
      {/* Header */}
      <div className="mx-auto mb-12 max-w-5xl px-5 text-center md:px-8">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#E0A458]/15 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B97D2E] md:text-xs">
          <Star className="h-3.5 w-3.5" fill="currentColor" strokeWidth={0} />
          {carouselSection.eyebrow}
        </span>
        <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#2A1A1F] md:text-5xl">
          {carouselSection.headline}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-[#6B5560] md:text-lg">
          {carouselSection.subheadline}
        </p>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Edge fades */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#FFE7E0] to-transparent md:w-40"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#FFE7E0] to-transparent md:w-40"
        />

        <div className="flex w-max animate-marquee gap-5 px-5 md:gap-7 md:px-8">
          {doubled.map((item, i) => (
            <figure
              key={`${item.name}-${i}`}
              className="group relative w-[260px] shrink-0 overflow-hidden rounded-3xl border border-[#F5728A]/15 bg-white shadow-[0_20px_50px_-30px_rgba(232,69,106,0.45)] sm:w-[300px]"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#FFE7E0]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Verified pill on photo */}
                <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold text-[#3F8A6B] shadow-sm backdrop-blur">
                  <BadgeCheck className="h-3.5 w-3.5 text-[#7FC8A9]" strokeWidth={2.4} />
                  {carouselSection.verifiedLabel}
                </div>
                {/* Rating pill */}
                <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold text-[#2A1A1F] shadow-sm backdrop-blur">
                  <Star className="h-3.5 w-3.5 text-[#E0A458]" fill="currentColor" strokeWidth={0} />
                  {carouselSection.rating}
                </div>
              </div>
              <figcaption className="bg-gradient-to-r from-[#F5728A] to-[#E0A458] px-4 py-3 text-center text-sm font-bold text-white">
                {item.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Social proof bar */}
      <div className="mx-auto mt-12 flex max-w-md items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#F5728A] to-[#E0A458] px-5 py-3 text-white shadow-lg">
        <Users className="h-4 w-4" strokeWidth={2.4} />
        <span className="text-[13px] font-semibold md:text-sm">
          {carouselSection.socialProofLabel}
        </span>
        <span className="text-[13px] font-bold md:text-sm">
          {carouselSection.rating}★
        </span>
      </div>
    </section>
  );
}
