import { Footer } from "@/components/layout/footer/footer"
import { Navbar } from "@/components/layout/navbar/navbar"
import { Impresion3DBenefitsSection } from "@/features/servicios/impresion-3d/components/benefits-section"
import { Impresion3DCtaSection } from "@/features/servicios/impresion-3d/components/cta-section"
import { Impresion3DDescriptionSection } from "@/features/servicios/impresion-3d/components/description-section"
import { Impresion3DHeroSection } from "@/features/servicios/impresion-3d/components/hero-section"
import { Impresion3DSubservicesSection } from "@/features/servicios/impresion-3d/components/subservices-section"

export default function Impresion3DPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <Impresion3DHeroSection />
        <Impresion3DDescriptionSection />
        <Impresion3DSubservicesSection />
        <Impresion3DBenefitsSection />
        <Impresion3DCtaSection />
      </div>

      <Footer />
    </main>
  )
}
