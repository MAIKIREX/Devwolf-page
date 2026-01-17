import { Footer } from "@/components/layout/footer/footer"
import { Navbar } from "@/components/layout/navbar/navbar"
import { ContactoCtaSection } from "@/features/contacto/components/cta-section"
import { ContactoFormSection } from "@/features/contacto/components/form-section"
import { ContactoHeroSection } from "@/features/contacto/components/hero-section"
import { ContactoInfoSection } from "@/features/contacto/components/info-section"
import { ContactoMapSection } from "@/features/contacto/components/map-section"

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="">
        <ContactoHeroSection />
        <ContactoInfoSection />
        <ContactoFormSection />
        <ContactoMapSection />
        <ContactoCtaSection />
      </div>
      <Footer />
    </div>
  )
}
