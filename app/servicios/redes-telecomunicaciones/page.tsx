import { Footer } from "@/components/layout/footer/footer"
import { Navbar } from "@/components/layout/navbar/navbar"
import { RedesTelecomunicacionesBenefitsSection } from "@/features/servicios/redes-telecomunicaciones/components/benefits-section"
import { RedesTelecomunicacionesCtaSection } from "@/features/servicios/redes-telecomunicaciones/components/cta-section"
import { RedesTelecomunicacionesDescriptionSection } from "@/features/servicios/redes-telecomunicaciones/components/description-section"
import { RedesTelecomunicacionesHeroSection } from "@/features/servicios/redes-telecomunicaciones/components/hero-section"
import { RedesTelecomunicacionesSubservicesSection } from "@/features/servicios/redes-telecomunicaciones/components/subservices-section"

export default function RedesTelecomunicacionesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <RedesTelecomunicacionesHeroSection />
        <RedesTelecomunicacionesDescriptionSection />
        <RedesTelecomunicacionesSubservicesSection />
        <RedesTelecomunicacionesBenefitsSection />
        <RedesTelecomunicacionesCtaSection />
      </div>

      <Footer />
    </main>
  )
}
