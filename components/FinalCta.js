"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Check, Lock, Mail, ShieldCheck } from "lucide-react";
import { copy } from "@/lib/copy";

const BASE_CHECKOUT_URL = "https://www.oriopay.app/p/kalorijski-deficit-sa-slatkisima";

const guaranteeIconMap = {
  ShieldCheck,
  Mail,
  Lock,
};

export default function FinalCta() {
  const { finalCta, analytics } = copy;

  const [checkoutUrl, setCheckoutUrl] = useState(BASE_CHECKOUT_URL);
  const [isMounted, setIsMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Countdown to next midnight
  useEffect(() => {
    setIsMounted(true);
    const tick = () => {
      const now = new Date();
      const target = new Date(now);
      target.setHours(24, 0, 0, 0);
      const diff = Math.max(0, target.getTime() - now.getTime());
      const totalSeconds = Math.floor(diff / 1000);
      const days = Math.floor(totalSeconds / 86400);
      const hours = Math.floor((totalSeconds % 86400) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;
      setTimeLeft({ days, hours, minutes, seconds });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // URL params priority: URL > localStorage
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        const params = new URLSearchParams(window.location.search);
        let src = params.get("src");
        let fbclid = params.get("fbclid");

        if (!src) src = localStorage.getItem("hotmart_src");
        if (!fbclid) fbclid = localStorage.getItem("hotmart_fbclid");

        if (src || fbclid) {
          const urlObj = new URL(BASE_CHECKOUT_URL);
          if (src) {
            urlObj.searchParams.set("src", src);
            console.log("🔗 FinalCTA: src ->", src);
          }
          if (fbclid) {
            urlObj.searchParams.set("fbclid", fbclid);
            console.log("🔗 FinalCTA: fbclid ->", fbclid);
          }
          setCheckoutUrl(urlObj.toString());
        }
      }
    } catch (error) {
      console.error("Error construyendo URL:", error);
    }
  }, []);

  const handleBeginCheckout = () => {
    try {
      let priceNum = 0;
      if (finalCta.offerPrice) {
        const cleaned = String(finalCta.offerPrice).replace(/[^\d.,]/g, "").replace(",", ".");
        const parsed = parseFloat(cleaned);
        if (Number.isFinite(parsed)) priceNum = parsed;
      }
      if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "begin_checkout",
          value: priceNum,
          currency: analytics.currency,
          items: [
            {
              item_id: analytics.itemIdMain,
              item_name: analytics.itemName,
              price: priceNum,
            },
          ],
        });
      }
      console.log("[FinalCTA] begin_checkout ✅", checkoutUrl);
    } catch (err) {
      console.error("[FinalCTA] Error analytics:", err);
    }
  };

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <section
      id="final-cta-section"
      className="relative overflow-hidden bg-gradient-to-b from-[#FFF7F1] via-[#FFE7E0] to-[#FFF7F1] px-5 py-20 md:px-8 md:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-[#F5728A] opacity-15 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-32 bottom-20 h-[420px] w-[420px] rounded-full bg-[#E0A458] opacity-15 blur-[140px]"
      />

      <div className="relative mx-auto max-w-5xl">
        {/* Eyebrow */}
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E8456A]/12 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E8456A] md:text-xs">
            {finalCta.eyebrow}
          </span>

          {/* Guarantee icon */}
          <div className="mt-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#7FC8A9]/30 to-[#7FC8A9]/10 shadow-sm ring-1 ring-[#7FC8A9]/40">
            <ShieldCheck className="h-10 w-10 text-[#3F8A6B]" strokeWidth={2.2} />
          </div>

          <h2 className="mt-6 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-[#2A1A1F] md:text-5xl">
            {finalCta.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-[#6B5560] md:text-base">
            {finalCta.guaranteeText}
          </p>
        </div>

        {/* Card */}
        <div className="mx-auto mt-12 overflow-hidden rounded-[2rem] border border-[#F5728A]/15 bg-white shadow-[0_40px_90px_-40px_rgba(232,69,106,0.45)]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* LEFT — bundle */}
            <div className="relative flex flex-col gap-6 bg-gradient-to-br from-[#FFE7E0] via-[#FFF7F1] to-[#FFE3CF] p-6 md:p-10">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#2A1A1F] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#E0A458]">
                {finalCta.guaranteeBadge}
              </div>

              <h3 className="text-xl font-extrabold leading-tight text-[#2A1A1F] md:text-2xl">
                {finalCta.productTitle}
              </h3>
              <p className="-mt-3 text-sm text-[#6B5560]">{finalCta.productSubtitle}</p>

              <ul className="space-y-2.5">
                {finalCta.bundleList.map((item, i) => (
                  <li
                    key={item}
                    className={`flex items-start gap-3 rounded-xl px-3 py-2.5 text-[13px] font-semibold md:text-sm ${
                      i === 0
                        ? "bg-[#2A1A1F] text-[#E0A458] ring-1 ring-[#E0A458]/40"
                        : "bg-white/80 text-[#2A1A1F] ring-1 ring-[#F5728A]/15"
                    }`}
                  >
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${i === 0 ? "text-[#E0A458]" : "text-[#3F8A6B]"}`}
                      strokeWidth={2.6}
                    />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Mockup */}
              <div className="mt-2">
                <div className="relative mx-auto max-w-sm">
                  <div
                    aria-hidden="true"
                    className="absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-br from-[#F5728A]/35 to-[#E0A458]/35 blur-2xl"
                  />
                  <img
                    src="/oferta-mockup.webp"
                    alt={finalCta.imageAlt}
                    className="block h-auto w-full rounded-2xl object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT — pricing + CTA */}
            <div className="flex flex-col gap-6 p-6 text-center md:p-10">
              {/* Discount badge */}
              <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#E8456A] to-[#F5728A] px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-white shadow md:text-xs">
                {finalCta.offerLabel}
              </div>

              {/* Price */}
              <div>
                <div className="text-sm font-medium text-[#6B5560]">
                  {finalCta.regularPriceLabel}{" "}
                  <span className="line-through">{finalCta.regularPrice}</span>
                </div>
                <div className="mt-2 bg-gradient-to-br from-[#E8456A] via-[#F5728A] to-[#E0A458] bg-clip-text text-6xl font-black tracking-tighter text-transparent drop-shadow-sm md:text-7xl">
                  {finalCta.offerPrice}
                </div>
                <div className="mt-2 text-xs font-medium text-[#6B5560]">
                  {finalCta.currencyNote}
                </div>
                <div className="mt-3 text-[13px] font-bold text-[#E8456A] md:text-sm">
                  {finalCta.urgencyText}
                </div>
              </div>

              {/* Timer */}
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#6B5560]">
                  {finalCta.timerNote}
                </div>
                {isMounted && (
                  <div className="mt-3 grid grid-cols-4 gap-2">
                    {[
                      { v: pad(timeLeft.days), label: finalCta.timerLabels.days },
                      { v: pad(timeLeft.hours), label: finalCta.timerLabels.hours },
                      { v: pad(timeLeft.minutes), label: finalCta.timerLabels.minutes },
                      { v: pad(timeLeft.seconds), label: finalCta.timerLabels.seconds },
                    ].map((u) => (
                      <div
                        key={u.label}
                        className="rounded-2xl bg-[#2A1A1F] px-2 py-3 text-center shadow-md"
                      >
                        <div className="font-mono text-2xl font-black tabular-nums text-white md:text-3xl">
                          {u.v}
                        </div>
                        <div className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-[#E0A458]">
                          {u.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* CTA */}
              <a
                href={checkoutUrl}
                onClick={handleBeginCheckout}
                className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl border-b-4 border-[#B33054] bg-gradient-to-br from-[#F5728A] to-[#E8456A] px-6 py-5 text-base font-extrabold uppercase tracking-wide text-white shadow-[0_20px_50px_-15px_rgba(232,69,106,0.7)] transition-all hover:translate-y-0.5 hover:border-b-2 hover:from-[#E8456A] hover:to-[#B33054] md:px-8 md:py-6 md:text-lg"
              >
                {finalCta.button}
                <ArrowRight
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  strokeWidth={2.5}
                />
              </a>

              {/* Guarantees row */}
              <div className="grid grid-cols-2 gap-3">
                {finalCta.guarantees.map((g) => {
                  const Icon = guaranteeIconMap[g.icon] || ShieldCheck;
                  return (
                    <div
                      key={g.title}
                      className="rounded-2xl border border-[#F5728A]/15 bg-[#FFF7F1] p-3 text-left"
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-[#E8456A]" strokeWidth={2.4} />
                        <div className="text-[12px] font-extrabold text-[#2A1A1F] md:text-[13px]">
                          {g.title}
                        </div>
                      </div>
                      <div className="mt-1 text-[11px] leading-snug text-[#6B5560] md:text-xs">
                        {g.text}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Trust row */}
              <div className="flex items-center justify-center gap-3 text-[11px] font-medium text-[#6B5560] md:text-xs">
                <span className="inline-flex items-center gap-1">
                  <Lock className="h-3.5 w-3.5" strokeWidth={2.4} />
                  {finalCta.secure}
                </span>
                <span className="h-3 w-px bg-[#6B5560]/30" />
                <span className="inline-flex items-center gap-1">
                  <Mail className="h-3.5 w-3.5" strokeWidth={2.4} />
                  {finalCta.delivery}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
