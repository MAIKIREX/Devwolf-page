import { Footer } from "@/components/layout/footer/footer"
import { Navbar } from "@/components/layout/navbar/navbar"
import { InstalacionesElectricasBenefitsSection } from "@/features/servicios/instalaciones-electricas/components/benefits-section"
import { InstalacionesElectricasCtaSection } from "@/features/servicios/instalaciones-electricas/components/cta-section"
import { InstalacionesElectricasDescriptionSection } from "@/features/servicios/instalaciones-electricas/components/description-section"
import { InstalacionesElectricasHeroSection } from "@/features/servicios/instalaciones-electricas/components/hero-section"
import { InstalacionesElectricasSubservicesSection } from "@/features/servicios/instalaciones-electricas/components/subservices-section"

export default function InstalacionesElectricasPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <InstalacionesElectricasHeroSection />
        <InstalacionesElectricasDescriptionSection />
        <InstalacionesElectricasSubservicesSection />
        <InstalacionesElectricasBenefitsSection />
        <InstalacionesElectricasCtaSection />
      </div>

      <Footer />
    </main>
  )
}
