import { BadgeCheck, Quote, Star } from "lucide-react";
import { copy } from "@/lib/copy";

export default function Testimonials() {
  const { testimonials } = copy;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF7F1] via-[#FFE7E0] to-[#FFF7F1] px-5 py-20 md:px-8 md:py-28">
      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#F5728A]/15 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E8456A] md:text-xs">
            <BadgeCheck className="h-3.5 w-3.5" strokeWidth={2.4} />
            {testimonials.eyebrow}
          </span>
          <h2 className="mt-5 max-w-3xl text-3xl font-extrabold tracking-tight text-[#2A1A1F] md:text-5xl">
            {testimonials.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#6B5560] md:text-lg">
            {testimonials.subheadline}
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.items.map((t) => (
            <li
              key={t.name}
              className="group relative flex flex-col gap-4 rounded-3xl border border-[#F5728A]/10 bg-white p-5 shadow-[0_25px_60px_-40px_rgba(232,69,106,0.4)] transition-all hover:-translate-y-1 hover:shadow-[0_30px_70px_-30px_rgba(232,69,106,0.5)]"
            >
              <Quote
                aria-hidden="true"
                className="absolute right-4 top-4 h-7 w-7 text-[#F5728A]/20"
                fill="currentColor"
                strokeWidth={0}
              />
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gradient-to-br from-[#FFE7E0] to-[#FFE3CF] ring-2 ring-white">
                  <img
                    src={t.photo}
                    alt={`${t.name} ${testimonials.photoAltSuffix}`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-[13px] font-extrabold text-[#2A1A1F]">
                    {t.name}
                    <BadgeCheck className="h-4 w-4 text-[#7FC8A9]" strokeWidth={2.4} />
                  </div>
                  <div className="text-[11px] text-[#6B5560]">{t.date}</div>
                </div>
              </div>

              <div className="flex items-center gap-0.5 text-[#E0A458]">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-3.5 w-3.5" fill="currentColor" strokeWidth={0} />
                ))}
              </div>

              <p className="text-[13px] leading-relaxed text-[#2A1A1F] md:text-sm">
                {t.quote}
              </p>

              <div className="mt-auto flex items-center gap-1.5 border-t border-[#F5728A]/10 pt-3 text-[10px] font-semibold uppercase tracking-wide text-[#3F8A6B]">
                <BadgeCheck className="h-3.5 w-3.5" strokeWidth={2.4} />
                {testimonials.verifiedLabel}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
