import { CheckCircle2 } from "lucide-react"

const benefits = [
  {
    title: "Cumplimiento Normativo",
    description: "Instalaciones certificadas según estándares TIA/EIA para cableado estructurado.",
  },
  {
    title: "Personal Certificado",
    description: "Técnicos especializados en redes empresariales y protocolos industriales.",
  },
  {
    title: "Garantía y Soporte",
    description: "Mantenimiento preventivo de infraestructura crítica y soporte técnico 24/7.",
  },
]

export function RedesTelecomunicacionesBenefitsSection() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
          ¿Por qué confiar en nosotros para este servicio?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex flex-col items-center text-center">
              <CheckCircle2 className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-heading font-semibold mb-3">{benefit.title}</h3>
              <p className="text-white/90 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
