import { Card, CardContent } from "@/components/ui/card"
import { Cpu, Lightbulb, Shield } from "lucide-react"

const subServices = [
  {
    icon: Lightbulb,
    title: "Iluminación y Distribución",
    description: "Iluminación interior/exterior, tomas, canalizaciones, tableros y protecciones eléctricas.",
  },
  {
    icon: Shield,
    title: "Sistemas de Protección",
    description: "Puesta a tierra, pararrayos, medición de resistencia y sistemas de seguridad eléctrica.",
  },
  {
    icon: Cpu,
    title: "Control y Automatización",
    description: "Control de motores, variadores de frecuencia, servodrives y automatización PLC/HMI/SCADA.",
  },
]

export function InstalacionesElectricasSubservicesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary text-center mb-12">
          Áreas de Especialización
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {subServices.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.title} className="h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 p-4 bg-primary/10 rounded-full">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
