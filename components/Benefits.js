import { CheckCircle2, Sparkles } from "lucide-react";
import { copy } from "@/lib/copy";

export default function Benefits() {
  const { benefits } = copy;

  return (
    <section className="relative overflow-hidden bg-[#FFF7F1] px-5 py-20 md:px-8 md:py-28">
      {/* Subtle background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#FFE7E0_0%,#FFF7F1_60%)]"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#7FC8A9]/15 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#3F8A6B] md:text-xs">
            <Sparkles className="h-3.5 w-3.5" strokeWidth={2.4} />
            {benefits.eyebrow}
          </span>
          <h2 className="mt-6 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-[#2A1A1F] md:text-5xl">
            {benefits.headline}
          </h2>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {benefits.items.map((item, i) => (
            <li
              key={item}
              className="group relative flex items-start gap-4 rounded-2xl border border-[#F5728A]/15 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#F5728A]/35 hover:shadow-[0_25px_60px_-30px_rgba(232,69,106,0.45)] md:p-7"
            >
              {/* Number ribbon */}
              <span className="absolute -top-3 left-6 rounded-full bg-gradient-to-br from-[#F5728A] to-[#E0A458] px-3 py-0.5 text-[10px] font-black tracking-widest text-white shadow">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#F5728A]/15 to-[#E0A458]/20 ring-1 ring-[#F5728A]/25">
                <CheckCircle2 className="h-5 w-5 text-[#E8456A]" strokeWidth={2.4} />
              </div>
              <p className="text-[15px] font-medium leading-relaxed text-[#2A1A1F] md:text-base">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
