import { Footer } from "@/components/layout/footer/footer"
import { Navbar } from "@/components/layout/navbar/navbar"
import { ContactCTA } from "@/features/contacto/components/contact-cta"
import { HeroCarousel } from "@/features/inicio/components/hero-carousel"
import { WhyChooseUs } from "@/features/nosotros/components/why-choose-us"
import { ServicesGrid } from "@/features/servicios/components/services-grid"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="">
        <HeroCarousel />
        <WhyChooseUs />
        <ServicesGrid />
        <ContactCTA />
      </div>
      <Footer />
    </main>
  )
}
