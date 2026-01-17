"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

const services = [
  {
    title: "Desarrollo de Software Personalizado",
    description: "Soluciones de software a medida para su negocio",
    details: [
      "Desarrollo web y aplicaciones móviles",
      "Sistemas de gestión empresarial",
      "Integraciones y APIs personalizadas",
      "Consultoría en arquitectura de software",
    ],
  },
  {
    title: "DevOps e Infraestructura",
    description: "Automatización y gestión de infraestructura moderna",
    details: [
      "Configuración de pipelines CI/CD",
      "Gestión de contenedores Docker",
      "Orquestación con Kubernetes",
      "Monitoreo y logging centralizado",
    ],
  },
  {
    title: "Cloud Computing",
    description: "Soluciones en la nube escalables y seguras",
    details: [
      "Migración a plataformas cloud",
      "Configuración AWS, Azure o GCP",
      "Optimización de costos en nube",
      "Backup y disaster recovery",
    ],
  },
  {
    title: "Seguridad y Compliance",
    description: "Protección y cumplimiento normativo",
    details: [
      "Auditorías de seguridad",
      "Implementación de estándares",
      "Gestión de identidades y accesos",
      "Protección de datos y privacidad",
    ],
  },
]

export default function SoftwareDevopsExpanded() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="servicios-software" className="py-20 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-6xl md:text-8xl font-light mb-16 text-balance"
        >
          DESARROLLO DE SOFTWARE/DEVOPS
        </motion.h2>

        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-y-2 border-gray-800 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-900 transition cursor-pointer"
              >
                <div className="text-left">
                  <h3 className="text-xl font-light mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </div>
                <div className="bg-white px-4 py-2 rounded-full ">
                  <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown size={20} className="flex-shrink-0 ml-4 text-black" />
                  </motion.div>
                </div>
              </button>

              <motion.div
                initial={{ height: 0 }}
                animate={{ height: openIndex === index ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pt-5">
                  <ul className="space-y-3">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex gap-3 text-gray-300 text-sm">
                        <span className="text-accent font-bold">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-gray-800"
        >
          <h3 className="text-2xl mb-6 font-light">Documentación y Entregables</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg">
              <p className="text-gray-300">Código fuente documentado y comentado</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <p className="text-gray-300">Documentación técnica y arquitectura</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <p className="text-gray-300">Manuales de operación y mantenimiento</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <p className="text-gray-300">Soporte técnico post-implementación</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
