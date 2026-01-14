import { Card, CardContent } from "@/components/ui/card"
import { Code, Globe, Server, Workflow } from "lucide-react"

const subServices = [
  {
    icon: Globe,
    title: "Desarrollo Web",
    description: "Páginas web corporativas, sistemas internos y dashboards personalizados.",
  },
  {
    icon: Code,
    title: "APIs e Integraciones",
    description: "Desarrollo REST/GraphQL, integraciones con servicios externos y automatización.",
  },
  {
    icon: Workflow,
    title: "Automatización",
    description: "Flujos de trabajo con n8n/Activepieces, sincronización de datos y procesos.",
  },
  {
    icon: Server,
    title: "DevOps y Despliegue",
    description: "Contenedores Docker/Kubernetes, CI/CD, monitoreo y optimización de infraestructura.",
  },
]

export function SoftwareDevOpsSubservicesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary text-center mb-12">
          Áreas de Especialización
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {subServices.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.title} className="h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 p-4 bg-primary/10 rounded-full">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-primary mb-3 dark:text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
