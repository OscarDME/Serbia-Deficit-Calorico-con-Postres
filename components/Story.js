import { XCircle } from "lucide-react";
import { copy } from "@/lib/copy";

export default function Story() {
  const { story } = copy;

  return (
    <section className="relative overflow-hidden bg-[#2A1A1F] px-5 py-20 text-white md:px-8 md:py-28">
      {/* Background blobs */}
      <div
        aria-hidden="true"
        className="absolute -left-20 top-10 h-[360px] w-[360px] rounded-full bg-[#E8456A] opacity-20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-20 bottom-10 h-[400px] w-[400px] rounded-full bg-[#E0A458] opacity-20 blur-[140px]"
      />

      <div className="relative mx-auto max-w-5xl">
        {/* Eyebrow */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#F5728A]/40 bg-[#F5728A]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F5728A] md:text-xs">
            {story.eyebrow}
          </span>
        </div>

        {/* Headline */}
        <h2 className="mt-6 text-center text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
          {story.headlineTop}
          <br />
          <span className="bg-gradient-to-br from-[#F5728A] via-[#FFB199] to-[#E0A458] bg-clip-text italic text-transparent">
            {story.headlineBottom}
          </span>
        </h2>

        {/* Items */}
        <ul className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {story.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-[#F5728A]/40 hover:bg-white/[0.07] md:p-6"
            >
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E8456A]/15 ring-1 ring-[#E8456A]/30">
                <XCircle className="h-5 w-5 text-[#F5728A]" strokeWidth={2.4} />
              </div>
              <p className="text-[15px] leading-relaxed text-white/90 md:text-base">
                {item}
              </p>
            </li>
          ))}
        </ul>

        {/* Closing */}
        <p className="mx-auto mt-10 max-w-3xl text-center text-base italic text-[#FFB199] md:text-lg">
          {story.closing}
        </p>
      </div>
    </section>
  );
}
