import ServiceHero from "@/features/services/components/service-hero"
import ServiceDetailsSection from "@/features/services/components/service-details-section"
import DistribucionEquiposExpanded from "@/features/services/components/distribucion-equipos/distribucion-equipos-expanded"
import ProcessSection from "@/features/services/components/process-section"
import NewsletterSection from "@/features/services/components/newsletter-section"
import { Navbar } from "@/components/layout/navbar/navbar"
import { Footer } from "@/components/layout/footer/footer"
import PushScaleWrapper from "@/components/scroll/PushScaleWrapper"

export const metadata = {
  title: "Distribución de Equipos | DEVWOLF",
  description: "Distribución de equipos IT, eléctricos y de construcción con servicios técnicos",
}

const DEFAULT_SLIDES = [
  {
    id: "p1",
    text:
      "Ofrecemos distribución de equipos informáticos, eléctricos y de construcción con disponibilidad inmediata y precios competitivos. Nuestro catálogo incluye computadoras, laptops, periféricos y accesorios tecnológicos de las principales marcas del mercado.",
  },
  {
    id: "p2",
    text:
      "Contamos con stock permanente de insumos eléctricos incluyendo cables, tableros, protecciones, canalizaciones y componentes industriales. Todos nuestros productos cumplen con certificaciones de calidad y normativas técnicas vigentes.",
  },
  {
    id: "p3",
    text:
      "Además de la venta de equipos, brindamos servicios anexos de armado, instalación, mantenimiento y asesoría técnica especializada. Nuestro enfoque está en la disponibilidad inmediata y el soporte postventa garantizado para asegurar la satisfacción de nuestros clientes.",
  },
]


export default function DistributionPage() {
  return (
    <main className="bg-white">
      <Navbar />
      <ServiceHero title="DISTRIBUCIÓN DE EQUIPOS" videoSrc="https://res.cloudinary.com/dbrkedvyp/video/upload/v1768500575/4f37c132-1111-415a-aa91-a42f392ca3b0_wkvp5r.mp4"  slides={DEFAULT_SLIDES}/>
      <PushScaleWrapper>

        <ServiceDetailsSection service="distribucion" />
        <DistribucionEquiposExpanded />
        <ProcessSection
          steps={[
            {
              title: "Levantamiento de necesidad",
              description: "Identificamos equipos, insumos y marcas requeridas.",
            },
            {
              title: "Propuesta y cotizacion",
              description: "Alternativas de stock, tiempos y precios competitivos.",
            },
            {
              title: "Entrega y soporte",
              description: "Despacho coordinado y asistencia postventa.",
            },
          ]}
          commitmentsTitle="Compromisos de suministro"
          commitments={[
            "Equipos certificados y garantia de fabricante.",
            "Disponibilidad y reposicion oportuna.",
            "Soporte tecnico para instalacion y puesta en marcha.",
          ]}
        />
        <NewsletterSection
          heading="Solicita tu cotizacion"
          description="Cuéntanos que necesitas y te enviamos una propuesta con stock y tiempos."
        />
      </PushScaleWrapper>
      <Footer />
    </main>
  )
}
