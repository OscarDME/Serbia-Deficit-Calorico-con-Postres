"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { copy } from "@/lib/copy";

export default function FAQ() {
  const { faq } = copy;
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#FFF7F1] px-5 py-20 md:px-8 md:py-28">
      <div className="relative mx-auto max-w-3xl">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E0A458]/15 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B97D2E] md:text-xs">
            <HelpCircle className="h-3.5 w-3.5" strokeWidth={2.4} />
            {faq.eyebrow}
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#2A1A1F] md:text-5xl">
            {faq.headline}
          </h2>
        </div>

        <ul className="mt-12 flex flex-col gap-3">
          {faq.items.map((item, i) => {
            const isOpen = i === openIndex;
            return (
              <li
                key={item.q}
                className={`overflow-hidden rounded-2xl border bg-white transition-all ${
                  isOpen
                    ? "border-[#F5728A]/40 shadow-[0_25px_55px_-30px_rgba(232,69,106,0.45)]"
                    : "border-[#2A1A1F]/8"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-7 md:py-5"
                >
                  <span className="text-[15px] font-extrabold text-[#2A1A1F] md:text-base">
                    {item.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all ${
                      isOpen
                        ? "bg-gradient-to-br from-[#F5728A] to-[#E8456A] text-white"
                        : "bg-[#F5728A]/10 text-[#E8456A]"
                    }`}
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      strokeWidth={2.6}
                    />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-[14px] leading-relaxed text-[#6B5560] md:px-7 md:pb-6 md:text-[15px]">
                      {item.a}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
