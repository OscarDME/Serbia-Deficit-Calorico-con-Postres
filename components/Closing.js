"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { copy } from "@/lib/copy";

const BASE_CHECKOUT_URL = "https://www.oriopay.app/p/kalorijski-deficit-sa-slatkisima";

export default function Closing() {
  const { closing, finalCta, analytics } = copy;
  const [checkoutUrl, setCheckoutUrl] = useState(BASE_CHECKOUT_URL);

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
          if (src) urlObj.searchParams.set("src", src);
          if (fbclid) urlObj.searchParams.set("fbclid", fbclid);
          setCheckoutUrl(urlObj.toString());
        }
      }
    } catch (error) {
      console.error("Error construyendo URL Closing:", error);
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
              item_id: analytics.itemIdClosing,
              item_name: analytics.itemName,
              price: priceNum,
            },
          ],
        });
      }
      console.log("[Closing] begin_checkout ✅", checkoutUrl);
    } catch (err) {
      console.error("[Closing] Error analytics:", err);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#2A1A1F] px-5 py-20 text-white md:px-8 md:py-28">
      <div
        aria-hidden="true"
        className="absolute -left-20 top-10 h-[420px] w-[420px] rounded-full bg-[#E8456A] opacity-25 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-20 bottom-10 h-[460px] w-[460px] rounded-full bg-[#E0A458] opacity-25 blur-[140px]"
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#E0A458]/40 bg-[#E0A458]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E0A458] md:text-xs">
          {closing.eyebrow}
        </span>

        <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
          {closing.headlineTop}{" "}
          <span className="bg-gradient-to-br from-[#F5728A] via-[#FFB199] to-[#E0A458] bg-clip-text italic text-transparent">
            {closing.headlineBottom}
          </span>
        </h2>

        <ul className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 text-left">
          {closing.questions.map((q) => (
            <li
              key={q}
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-[15px] font-light leading-relaxed text-white/85 backdrop-blur-sm md:px-6 md:py-4 md:text-base"
            >
              {q}
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-8 max-w-3xl text-base text-white/80 md:text-lg">
          {closing.paragraph}
        </p>

        <p className="mt-6 text-[15px] font-bold text-[#E0A458] md:text-base">
          {closing.urgency}
        </p>

        <a
          href={checkoutUrl}
          onClick={handleBeginCheckout}
          className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-2xl border-b-4 border-[#B33054] bg-gradient-to-br from-[#F5728A] to-[#E8456A] px-7 py-5 text-base font-extrabold uppercase tracking-wide text-white shadow-[0_25px_55px_-15px_rgba(232,69,106,0.7)] transition-all hover:translate-y-0.5 hover:border-b-2 hover:from-[#E8456A] hover:to-[#B33054] sm:w-auto md:px-9 md:py-6 md:text-lg"
        >
          {closing.button}
          <ArrowRight
            className="h-5 w-5 transition-transform group-hover:translate-x-1"
            strokeWidth={2.5}
          />
        </a>
      </div>
    </section>
  );
}
