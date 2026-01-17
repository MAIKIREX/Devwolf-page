import ServiceHero from "@/features/services/components/service-hero"
import ServiceDetailsSection from "@/features/services/components/service-details-section"
import ConstruccionServicesExpanded from "@/features/services/components/construccion-obra-liviana/construccion-services-expanded"
import ProcessSection from "@/features/services/components/process-section"
import NewsletterSection from "@/features/services/components/newsletter-section"
import { Footer } from "@/components/layout/footer/footer"
import { Navbar } from "@/components/layout/navbar/navbar"
import PushScaleWrapper from "@/components/scroll/PushScaleWrapper"

export const metadata = {
  title: "Construcción y Obra Liviana | DEVWOLF",
  description: "Servicios de construcción y obra liviana: refacciones, remodelaciones, acabados y montaje corporativo",
}

export default function ConstructionPage() {
  return (
    <main className="bg-white">
      <Navbar />
      <ServiceHero title="CONSTRUCCIÓN Y OBRA LIVIANA" videoSrc="https://res.cloudinary.com/dbrkedvyp/video/upload/v1768499725/construccionCivil_hus7ha.mp4"/>
      <PushScaleWrapper>
        <ServiceDetailsSection service="construccion" />
        <ConstruccionServicesExpanded />
        <ProcessSection
          steps={[
            {
              title: "Levantamiento tecnico",
              description: "Inspeccion en sitio y definicion del alcance de obra.",
            },
            {
              title: "Planificacion y presupuesto",
              description: "Cronograma, materiales y presupuesto optimizado.",
            },
            {
              title: "Ejecucion supervisada",
              description: "Control de calidad, seguridad y avances por etapas.",
            },
          ]}
          commitmentsTitle="Compromisos de obra"
          commitments={[
            "Cumplimiento de normativa y buenas practicas constructivas.",
            "Seguridad ocupacional y proteccion de activos.",
            "Trazabilidad de materiales y documentacion de cambios.",
          ]}
        />
        <NewsletterSection
          heading="Coordina tu visita tecnica"
          description="Agendemos una visita tecnica para evaluar tu proyecto y entregarte una propuesta detallada."
        />
      </PushScaleWrapper>
      <Footer />
    </main>
  )
}
