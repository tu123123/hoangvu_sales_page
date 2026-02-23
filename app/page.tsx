import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { MarqueeBanner } from "@/components/marquee-banner"
import { CollectionsSection } from "@/components/collections-section"
import { PricingSection } from "@/components/pricing-section"
import { StatsSection } from "@/components/stats-section"
import { StorySection } from "@/components/story-section"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { StructuredData } from "@/components/structured-data"

export default function Home() {
  return (
    <>
      <StructuredData />
      <main>
        <Navbar />
        <HeroSection />
        <MarqueeBanner />
        <CollectionsSection />
        <PricingSection />
        <StatsSection />
        <StorySection />
        <ServicesSection />
        <TestimonialsSection />
        <CtaSection />
        <Footer />
      </main>
    </>
  )
}
