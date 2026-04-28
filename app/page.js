import TopBanner from "@/components/TopBanner";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Benefits from "@/components/Benefits";
import CarouselSection from "@/components/CarouselSection";
import Bonuses from "@/components/Bonuses";
import Testimonials from "@/components/Testimonials";
import FinalCta from "@/components/FinalCta";
import FAQ from "@/components/FAQ";
import Closing from "@/components/Closing";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[var(--color-cream)] font-sans text-[var(--color-ink)]">
      <TopBanner />
      <Hero />
      <Story />
      <Benefits />
      <CarouselSection />
      <Bonuses />
      <Testimonials />
      <FinalCta />
      <FAQ />
      <Closing />
      <Footer />
    </main>
  );
}
