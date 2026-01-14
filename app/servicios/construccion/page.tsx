import { Footer } from "@/components/layout/footer/footer"
import { Navbar } from "@/components/layout/navbar/navbar"
import { ConstruccionBenefitsSection } from "@/features/servicios/construccion/components/benefits-section"
import { ConstruccionCtaSection } from "@/features/servicios/construccion/components/cta-section"
import { ConstruccionDescriptionSection } from "@/features/servicios/construccion/components/description-section"
import { ConstruccionHeroSection } from "@/features/servicios/construccion/components/hero-section"
import { ConstruccionSubservicesSection } from "@/features/servicios/construccion/components/subservices-section"

export default function ConstruccionPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="">
        <ConstruccionHeroSection />
        <ConstruccionDescriptionSection />
        <ConstruccionSubservicesSection />
        <ConstruccionBenefitsSection />
        <ConstruccionCtaSection />
      </div>

      <Footer />
    </main>
  )
}
