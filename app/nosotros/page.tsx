import { Footer } from "@/components/layout/footer/footer"
import { Navbar } from "@/components/layout/navbar/navbar"
import { NosotrosCompanySection } from "@/features/nosotros/components/company-section"
import { NosotrosCoverageSection } from "@/features/nosotros/components/coverage-section"
import { NosotrosCtaSection } from "@/features/nosotros/components/cta-section"
import { NosotrosDocumentationSection } from "@/features/nosotros/components/documentation-section"
import { NosotrosHeroSection } from "@/features/nosotros/components/hero-section"
import { NosotrosMethodologySection } from "@/features/nosotros/components/methodology-section"
import { NosotrosQualitySection } from "@/features/nosotros/components/quality-section"
import { NosotrosSchedulesSection } from "@/features/nosotros/components/schedules-section"

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <NosotrosHeroSection />
        <NosotrosCompanySection />
        <NosotrosMethodologySection />
        <NosotrosQualitySection />
        <NosotrosDocumentationSection />
        <NosotrosSchedulesSection />
        <NosotrosCoverageSection />
        <NosotrosCtaSection />
      </div>
      <Footer />
    </div>
  )
}
