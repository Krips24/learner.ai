import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { DailyDigest } from "@/components/daily-digest";
import { CTASection } from "@/components/cta-section";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Feature Highlights */}
      <section className=" bg-gradient-to-b from-background to-muted/20">
        <Features />
      </section>

      {/* Daily Digest Preview */}
      <section className=" border-t border-border">
        <DailyDigest />
      </section>

      {/* Final CTA */}
      <section className=" border-t border-border">
        <CTASection />
      </section>
    </main>
  );
}
