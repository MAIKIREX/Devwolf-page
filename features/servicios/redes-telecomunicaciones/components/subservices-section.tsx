import { Card, CardContent } from "@/components/ui/card"
import { Cable, Network, Settings, Video } from "lucide-react"

const subServices = [
  {
    icon: Cable,
    title: "Cableado Estructurado",
    description: "Diseño e instalación de canalizaciones, racks, patch panels y certificación de redes.",
  },
  {
    icon: Network,
    title: "Configuración de Redes",
    description: "Routers, switches, VLANs, segmentación de red y optimización de conectividad.",
  },
  {
    icon: Video,
    title: "Seguridad y Vigilancia",
    description: "Sistemas CCTV/IP, control de acceso biométrico y monitoreo remoto.",
  },
  {
    icon: Settings,
    title: "Integración Industrial",
    description: "Protocolos Modbus RTU/TCP, Profinet, Ethernet/IP para automatización.",
  },
]

export function RedesTelecomunicacionesSubservicesSection() {
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
