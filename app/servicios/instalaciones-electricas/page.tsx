import ServiceHero from "@/features/services/components/service-hero"
import ServiceDetailsSection from "@/features/services/components/service-details-section"
import InstalacionesElectricasExpanded from "@/features/services/components/instalaciones-electricas/instalaciones-electricas-expanded"
import ProcessSection from "@/features/services/components/process-section"
import NewsletterSection from "@/features/services/components/newsletter-section"
import { Footer } from "@/components/layout/footer/footer"
import { Navbar } from "@/components/layout/navbar/navbar"
import PushScaleWrapper from "@/components/scroll/PushScaleWrapper"

export const metadata = {
  title: "Instalaciones Eléctricas | DEVWOLF",
  description: "Servicios de instalaciones eléctricas residencial, comercial e industrial",
}

const DEFAULT_SLIDES = [
  {
    id: "p1",
    text:
      "En Devwolf Ofrecemos servicios completos de instalaciones eléctricas para proyectos industriales, comerciales y residenciales. Nuestro alcance incluye iluminación interior y exterior, instalación de tomas, diseño y montaje de canalizaciones, tableros de distribución y sistemas de protección eléctrica certificados.",
  },
  {
    id: "p2",
    text:
      "Implementamos sistemas de puesta a tierra, instalación de pararrayos y medición de resistencia de tierra para garantizar la seguridad de las instalaciones. Todos nuestros trabajos cumplen con las normativas NEC y estándares internacionales vigentes.",
  },
  {
    id: "p3",
    text:
      "Nos especializamos en control de motores eléctricos con arranque directo, estrella-triángulo, variadores de frecuencia y servodrives. Además, desarrollamos proyectos de automatización industrial utilizando PLC/HMI/SCADA para optimizar procesos productivos y mejorar la eficiencia operativa.",
  },
]

export default function ElectricalPage() {
  return (
    <main className="bg-white">
      <Navbar />
      <ServiceHero title="INSTALACIONES ELÉCTRICAS" slides={DEFAULT_SLIDES}/>
      <PushScaleWrapper>


        <ServiceDetailsSection service="electricidad" />
        <InstalacionesElectricasExpanded />
        <ProcessSection
          steps={[
            {
              title: "Inspeccion tecnica",
              description: "Relevamiento de cargas y condiciones del sitio.",
            },
            {
              title: "Diseno de circuitos",
              description: "Planos, calculos y seleccion de materiales.",
            },
            {
              title: "Montaje y pruebas",
              description: "Instalacion, pruebas y puesta en marcha segura.",
            },
          ]}
          commitmentsTitle="Compromisos electricos"
          commitments={[
            "Cumplimiento de normativa electrica vigente.",
            "Seguridad en la instalacion y proteccion de equipos.",
            "Documentacion y reportes de pruebas.",
          ]}
        />
        <NewsletterSection
          heading="Coordina tu evaluacion"
          description="Solicita una evaluacion tecnica para tu instalacion electrica."
        />
      </PushScaleWrapper>
      <Footer />
    </main>
  )
}
