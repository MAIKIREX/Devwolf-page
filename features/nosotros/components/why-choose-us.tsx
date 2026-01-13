"use client"

import { motion, type Variants } from "framer-motion"
import { CheckCircle2, Globe2, Headphones } from "lucide-react"

const reasons = [
  {
    icon: CheckCircle2,
    title: "Cumplimiento normativo",
    description:
      "Aplicamos estándares de seguridad, trazabilidad y calidad en cada instalación.",
  },
  {
    icon: Globe2,
    title: "Cobertura nacional",
    description:
      "Atendemos proyectos en toda Bolivia con logística y personal técnico propio.",
  },
  {
    icon: Headphones,
    title: "Soporte postventa",
    description:
      "Brindamos acompañamiento técnico y mantenimiento tras la entrega del proyecto.",
  },
]

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.14, // ✅ uno a la vez
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-20 bg-white text-neutral-900">
      {/* fondo sutil */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(900px_520px_at_20%_10%,rgba(0,0,0,0.06),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/[0.03]" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <p className="text-xs uppercase tracking-wider text-neutral-500">
            Confianza y respaldo
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-heading font-bold">
            ¿Por qué elegirnos?
          </h2>
          <p className="mt-3 text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            En Devwolf priorizamos calidad, continuidad operativa y soporte real en
            cada entrega.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                custom={i}
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.45 }}
                className="h-full"
              >
                <div className="h-full text-center rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-shadow p-8">
                  <div className="mb-5 flex justify-center">
                    <div className="p-4 rounded-2xl bg-neutral-900/5 ring-1 ring-neutral-900/10">
                      <Icon className="h-10 w-10 text-neutral-900" />
                    </div>
                  </div>

                  <h3 className="text-xl font-heading font-semibold mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
