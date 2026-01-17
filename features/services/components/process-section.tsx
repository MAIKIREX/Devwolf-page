"use client"

import { motion } from "framer-motion"

type ProcessStep = {
  title: string
  description: string
}

type ProcessSectionProps = {
  steps?: ProcessStep[]
  commitmentsTitle?: string
  commitments?: string[]
}

const defaultSteps: ProcessStep[] = [
  {
    title: "Levantamiento tecnico",
    description: "Diagnostico en sitio y analisis detallado de requerimientos",
  },
  {
    title: "Propuesta integral",
    description: "Alcance tecnico-economico, cronograma y lista de materiales",
  },
  {
    title: "Ejecucion controlada",
    description: "Implementacion con control de calidad y seguridad ocupacional",
  },
]

const defaultCommitments = [
  "Cumplimiento de normativa y buenas practicas de instalacion",
  "Seguridad ocupacional y proteccion de activos",
  "Trazabilidad de materiales y documentacion de cambios",
]

export default function ProcessSection({
  steps = defaultSteps,
  commitmentsTitle = "Compromisos de Calidad",
  commitments = defaultCommitments,
}: ProcessSectionProps) {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="border-l-2 border-black pl-6 py-4"
            >
              <h3 className="text-xl mb-3 text-black font-light">{process.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{process.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-gray-200"
        >
          <h3 className="text-black text-2xl md:text-6xl mb-8 font-light">{commitmentsTitle}</h3>
          <ul className="space-y-4 text-gray-700">
            {commitments.map((commitment) => (
              <li key={commitment} className="flex gap-4">
                <span className="text-accent font-bold">✓</span>
                <span>{commitment}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
