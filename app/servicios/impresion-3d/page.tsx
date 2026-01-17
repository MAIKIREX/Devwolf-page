import ServiceHero from "@/features/services/components/service-hero"
import ServiceDetailsSection from "@/features/services/components/service-details-section"
import Impresion3dExpanded from "@/features/services/components/impresion-3d/impresion-3d-expanded"
import ProcessSection from "@/features/services/components/process-section"
import NewsletterSection from "@/features/services/components/newsletter-section"
import { Footer } from "@/components/layout/footer/footer"
import { Navbar } from "@/components/layout/navbar/navbar"
import PushScaleWrapper from "@/components/scroll/PushScaleWrapper"

export const metadata = {
  title: "Impresión 3D | DEVWOLF",
  description: "Servicios de impresión 3D FDM: piezas funcionales, carcasas, adaptadores y más",
}

const DEFAULT_SLIDES = [
  {
    id: "p1",
    text:
      "En Devwolf Ofrecemos servicios completos de diseño y fabricación mediante impresión 3D con tecnología FDM (Fused Deposition Modeling). Desarrollamos piezas funcionales, adaptadores personalizados, componentes de reemplazo y elementos decorativos según las especificaciones exactas de cada proyecto.",
  },
  {
    id: "p2",
    text:
      "Trabajamos con diversos materiales incluyendo PLA, ABS, PETG y filamentos especializados para aplicaciones técnicas. Nuestros equipos de última generación permiten alcanzar alta precisión dimensional y acabados de calidad profesional.",
  },
  {
    id: "p3",
    text:
      "Brindamos soluciones para múltiples sectores: fabricación de señalética corporativa, letreros tridimensionales, prototipos industriales, piezas de arquitectura, elementos médicos y proyectos creativos. Cada pieza es fabricada con control de calidad riguroso y personalización total según tus necesidades.",
  },
]

export default function Printing3DPage() {
  return (
    <main className="bg-white">
      <Navbar />
      <ServiceHero title="IMPRESIÓN 3D" slides={DEFAULT_SLIDES}/>
      <PushScaleWrapper>
        
        <ServiceDetailsSection service="impresion3d" />
        <Impresion3dExpanded />
        <ProcessSection
          steps={[
            {
              title: "Diseno y modelado",
              description: "Revisamos el modelo y definimos tolerancias.",
            },
            {
              title: "Prototipado rapido",
              description: "Impresion y validacion funcional de la pieza.",
            },
            {
              title: "Produccion final",
              description: "Acabados y entrega listos para uso.",
            },
          ]}
          commitmentsTitle="Compromisos de fabricacion"
          commitments={[
            "Precision dimensional y control de calidad.",
            "Materiales adecuados para cada aplicacion.",
            "Iteraciones agiles para optimizar el resultado.",
          ]}
        />
        <NewsletterSection
          heading="Imprime tu idea"
          description="Comparte tu archivo o requerimiento y te ayudamos a materializarlo."
        />
      </PushScaleWrapper>
      <Footer />
    </main>
  )
}
