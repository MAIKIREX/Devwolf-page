import { CheckCircle2, Globe2, Headphones } from "lucide-react"

const reasons = [
  {
    icon: CheckCircle2,
    title: "Cumplimiento normativo",
    description: "Aplicamos estándares de seguridad, trazabilidad y calidad en cada instalación.",
  },
  {
    icon: Globe2,
    title: "Cobertura nacional",
    description: "Atendemos proyectos en toda Bolivia con logística y personal técnico propio.",
  },
  {
    icon: Headphones,
    title: "Soporte postventa",
    description: "Brindamos acompañamiento técnico y mantenimiento tras la entrega del proyecto.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">¿Por qué elegirnos?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <div key={reason.title} className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-white/10 rounded-full">
                    <Icon className="h-10 w-10" />
                  </div>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">{reason.title}</h3>
                <p className="text-white/90 leading-relaxed">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
