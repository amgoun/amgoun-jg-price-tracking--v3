import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import TestimonialsSection from "@/components/testimonials-section"
import PricingSection from "@/components/pricing-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import { Header } from "@/components/header"
import data from "@/lib/data.json"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection data={data.hero} />
      <div id="features">
        <FeaturesSection features={data.features} />
      </div>
      <div id="pricing">
        <PricingSection pricing={data.pricing} />
      </div>
      <div id="testimonials">
        <TestimonialsSection testimonials={data.testimonials} />
      </div>
      <CTASection cta={data.cta} />
      <Footer footer={data.footer} />
    </main>
   
  )
}
