import { Footer } from "@/components/layout/footer/footer"
import { Navbar } from "@/components/layout/navbar/navbar"
import { SoftwareDevOpsBenefitsSection } from "@/features/servicios/software-devops/components/benefits-section"
import { SoftwareDevOpsCtaSection } from "@/features/servicios/software-devops/components/cta-section"
import { SoftwareDevOpsDescriptionSection } from "@/features/servicios/software-devops/components/description-section"
import { SoftwareDevOpsHeroSection } from "@/features/servicios/software-devops/components/hero-section"
import { SoftwareDevOpsSubservicesSection } from "@/features/servicios/software-devops/components/subservices-section"

export default function SoftwareDevOpsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <SoftwareDevOpsHeroSection />
        <SoftwareDevOpsDescriptionSection />
        <SoftwareDevOpsSubservicesSection />
        <SoftwareDevOpsBenefitsSection />
        <SoftwareDevOpsCtaSection />
      </div>

      <Footer />
    </main>
  )
}
