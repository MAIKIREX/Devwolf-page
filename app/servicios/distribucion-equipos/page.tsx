import { Footer } from "@/components/layout/footer/footer"
import { Navbar } from "@/components/layout/navbar/navbar"
import { DistribucionEquiposBenefitsSection } from "@/features/servicios/distribucion-equipos/components/benefits-section"
import { DistribucionEquiposCtaSection } from "@/features/servicios/distribucion-equipos/components/cta-section"
import { DistribucionEquiposDescriptionSection } from "@/features/servicios/distribucion-equipos/components/description-section"
import { DistribucionEquiposHeroSection } from "@/features/servicios/distribucion-equipos/components/hero-section"
import { DistribucionEquiposSubservicesSection } from "@/features/servicios/distribucion-equipos/components/subservices-section"

export default function DistribucionEquiposPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <DistribucionEquiposHeroSection />
        <DistribucionEquiposDescriptionSection />
        <DistribucionEquiposSubservicesSection />
        <DistribucionEquiposBenefitsSection />
        <DistribucionEquiposCtaSection />
      </div>

      <Footer />
    </main>
  )
}
