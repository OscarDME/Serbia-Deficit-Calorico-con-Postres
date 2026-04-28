import { Gift } from "lucide-react";
import { copy } from "@/lib/copy";

export default function Bonuses() {
  const { bonuses } = copy;

  return (
    <section className="relative overflow-hidden bg-[#FFF7F1] px-5 py-20 md:px-8 md:py-28">
      <div
        aria-hidden="true"
        className="absolute -left-20 top-32 h-[360px] w-[360px] rounded-full bg-[#E0A458] opacity-15 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-20 bottom-32 h-[360px] w-[360px] rounded-full bg-[#F5728A] opacity-15 blur-[140px]"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#F5728A]/15 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E8456A] md:text-xs">
            <Gift className="h-3.5 w-3.5" strokeWidth={2.4} />
            {bonuses.eyebrow}
          </span>
          <h2 className="mt-5 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-[#2A1A1F] md:text-5xl">
            {bonuses.headlineTop}
            <br />
            <span className="bg-gradient-to-br from-[#E8456A] via-[#F5728A] to-[#E0A458] bg-clip-text text-transparent">
              {bonuses.headlineBottom}
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-[#6B5560] md:text-lg">
            {bonuses.intro}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bonuses.items.map((item) => (
            <article
              key={item.title}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-[#F5728A]/10 bg-white shadow-[0_30px_70px_-40px_rgba(232,69,106,0.45)] transition-all hover:-translate-y-1 hover:shadow-[0_35px_80px_-30px_rgba(232,69,106,0.5)]"
            >
              {/* Badge ribbon */}
              <span className="absolute left-3 top-3 z-10 rounded-full bg-[#2A1A1F] px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#E0A458] shadow-md">
                {item.badge}
              </span>
              {/* Free price */}
              <span className="absolute right-3 top-3 z-10 rounded-full bg-gradient-to-br from-[#F5728A] to-[#E8456A] px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow">
                {item.freeLabel}
              </span>

              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[#FFE7E0] via-[#FFF7F1] to-[#FFE3CF]">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between gap-3 p-5">
                <h3 className="text-[15px] font-extrabold leading-tight text-[#2A1A1F] md:text-base">
                  {item.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-[#6B5560] md:text-sm">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-base font-semibold italic text-[#B97D2E] md:text-lg">
          {bonuses.footnote}
        </p>
      </div>
    </section>
  );
}
