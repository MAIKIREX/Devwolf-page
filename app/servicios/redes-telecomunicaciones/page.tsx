import ServiceHero from "@/features/services/components/service-hero"
import ServiceDetailsSection from "@/features/services/components/service-details-section"
import RedesTelecomunicacionesExpanded from "@/features/services/components/redes-telecomunicaciones/redes-telecomunicaciones-expanded"
import ProcessSection from "@/features/services/components/process-section"
import NewsletterSection from "@/features/services/components/newsletter-section"
import { Footer } from "@/components/layout/footer/footer"
import { Navbar } from "@/components/layout/navbar/navbar"
import PushScaleWrapper from "@/components/scroll/PushScaleWrapper"

export const metadata = {
  title: "Redes y Telecomunicaciones | DEVWOLF",
  description: "Servicios de redes estructuradas, telecomunicaciones, CCTV y mantenimiento de equipos",
}

const DEFAULT_SLIDES = [
  {
    id: "p1",
    text:
      "En Devwolf Diseñamos e implementamos soluciones completas de cableado estructurado para empresas e instituciones. Nuestros servicios incluyen diseño de canalizaciones, instalación de racks profesionales, montaje de patch panels y certificación de puntos de red según estándares TIA/EIA.",
  },
  {
    id: "p2",
    text:
      "Configuramos y optimizamos equipos de red incluyendo routers empresariales, switches administrables, creación de VLANs para segmentación de tráfico, y sistemas de vigilancia CCTV/IP con almacenamiento local o en la nube. También implementamos sistemas de control de acceso biométrico integrados con la red corporativa.",
  },
  {
    id: "p3",
    text:
      "Para entornos industriales, ofrecemos integración de protocolos de comunicación como Modbus RTU/TCP, Profinet y Ethernet/IP, permitiendo la conectividad entre sistemas de automatización y redes empresariales. Brindamos mantenimiento preventivo de infraestructura crítica y soporte técnico especializado.",
  },
]

export default function NetworksPage() {
  return (
    <main className="bg-white">
      <Navbar />
      <ServiceHero title="REDES Y TELECOMUNICACIONES" slides={DEFAULT_SLIDES}/>
      <PushScaleWrapper>
        
        <ServiceDetailsSection service="redes" />
        <RedesTelecomunicacionesExpanded />
        <ProcessSection
          steps={[
            {
              title: "Levantamiento de red",
              description: "Diagnostico de infraestructura y necesidades.",
            },
            {
              title: "Implementacion",
              description: "Cableado, configuracion y pruebas de rendimiento.",
            },
            {
              title: "Monitoreo y soporte",
              description: "Mantenimiento y mejoras continuas.",
            },
          ]}
          commitmentsTitle="Compromisos de conectividad"
          commitments={[
            "Cableado y equipos certificados.",
            "Seguridad y segmentacion de red.",
            "Documentacion y respaldo tecnico.",
          ]}
        />
        <NewsletterSection
          heading="Mejora tu conectividad"
          description="Cuéntanos tu necesidad y diseñamos una red segura y eficiente."
        />
      </PushScaleWrapper>
      <Footer />
    </main>
  )
}
