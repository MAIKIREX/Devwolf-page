import { Card, CardContent } from "@/components/ui/card"
import { Building2, Zap, Network, Package, Code, Box } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Building2,
    title: "Construcción",
    description: "Refacciones, remodelaciones y obra liviana con estándares de calidad.",
    href: "/servicios/construccion",
  },
  {
    icon: Zap,
    title: "Instalaciones Eléctricas",
    description: "Iluminación, tableros, control de motores y automatización industrial.",
    href: "/servicios/instalaciones-electricas",
  },
  {
    icon: Network,
    title: "Redes & Telecomunicaciones",
    description: "Cableado estructurado, CCTV, VLANs y conectividad segura.",
    href: "/servicios/redes-telecomunicaciones",
  },
  {
    icon: Package,
    title: "Distribución de Equipos",
    description: "Insumos eléctricos, informáticos y herramientas técnicas.",
    href: "/servicios/distribucion-equipos",
  },
  {
    icon: Code,
    title: "Software & DevOps",
    description: "Sistemas web, APIs, automatización y monitoreo.",
    href: "/servicios/software-devops",
  },
  {
    icon: Box,
    title: "Impresión 3D",
    description: "Diseño y fabricación de piezas, señalética y elementos personalizados.",
    href: "/servicios/impresion-3d",
  },
]

export function ServicesGrid() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">Nuestros Servicios</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Soluciones integrales en ingeniería y tecnología para impulsar tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link key={service.href} href={service.href}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-primary mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
