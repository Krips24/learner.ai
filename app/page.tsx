import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { DailyDigest } from "@/components/daily-digest";
import { CTASection } from "@/components/cta-section";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Feature Highlights */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
        <Features />
      </section>

      {/* Daily Digest Preview */}
      <section className="py-16 md:py-20 border-t border-border">
        <DailyDigest />
      </section>

      {/* User Testimonials */}
      {/* <section className="py-16 md:py-24 bg-gradient-to-b from-muted/10 to-background">
        <Testimonials />
      </section> */}

      {/* Final CTA */}
      <section className="py-16 md:py-20 border-t border-border">
        <CTASection />
      </section>
    </main>
  );
}
