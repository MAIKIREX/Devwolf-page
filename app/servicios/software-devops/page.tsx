import ServiceHero from "@/features/services/components/service-hero"
import ServiceDetailsSection from "@/features/services/components/service-details-section"
import SoftwareDevopsExpanded from "@/features/services/components/software-devops/software-devops-expanded"
import ProcessSection from "@/features/services/components/process-section"
import NewsletterSection from "@/features/services/components/newsletter-section"
import { Footer } from "@/components/layout/footer/footer"
import { Navbar } from "@/components/layout/navbar/navbar"
import PushScaleWrapper from "@/components/scroll/PushScaleWrapper"

export const metadata = {
  title: "Desarrollo de Software y DevOps | DEVWOLF",
  description: "Soluciones de software, APIs, automatización y DevOps",
}

const DEFAULT_SLIDES = [
  {
    id: "p1",
    text:
      "En Devwolf Desarrollamos soluciones de software a medida incluyendo páginas web corporativas, sistemas internos de gestión y dashboards interactivos para visualización de datos. Utilizamos tecnologías modernas como React, Next.js, Node.js y bases de datos SQL/NoSQL según las necesidades del proyecto.",
  },
  {
    id: "p2",
    text:
      "Creamos APIs REST y GraphQL para integración con servicios externos, automatización de procesos mediante herramientas como n8n y Activepieces, y sincronización de datos entre sistemas empresariales. Nuestras soluciones están diseñadas para escalar y adaptarse al crecimiento de tu organización.",
  },
  {
    id: "p3",
    text:
      "Implementamos prácticas DevOps con despliegues en contenedores Docker/Kubernetes, pipelines de CI/CD, monitoreo de aplicaciones y optimización de infraestructura cloud. Incluimos 20 horas mensuales de soporte técnico para garantizar el funcionamiento continuo de tus sistemas.",
  },
]

export default function SoftwarePage() {
  return (
    <main className="bg-white">
      <Navbar />
      <ServiceHero title="DESARROLLO DE SOFTWARE Y DEVOPS" slides={DEFAULT_SLIDES}/>
      <PushScaleWrapper>
        
        <ServiceDetailsSection service="software" />
        <SoftwareDevopsExpanded />
        <ProcessSection
          steps={[
            {
              title: "Discovery",
              description: "Definimos objetivos, alcance y arquitectura.",
            },
            {
              title: "Desarrollo iterativo",
              description: "Construccion por sprints con entregas continuas.",
            },
            {
              title: "Deploy y monitoreo",
              description: "Automatizacion, observabilidad y soporte.",
            },
          ]}
          commitmentsTitle="Compromisos de entrega"
          commitments={[
            "Calidad de codigo y buenas practicas.",
            "Automatizacion de despliegues.",
            "Monitoreo y mejora continua.",
          ]}
        />
        <NewsletterSection
          heading="Hablemos de tu producto"
          description="Cuéntanos tu idea y construimos una solucion escalable."
        />
      </PushScaleWrapper>
      <Footer />
    </main>
  )
}
