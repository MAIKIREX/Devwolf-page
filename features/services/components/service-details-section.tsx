"use client"

import { motion } from "framer-motion"

const serviceDescriptions: Record<string, { intro: string; detail: string }> = {
  construccion: {
    intro: "Refacciones, remodelaciones y mantenimiento integral",
    detail:
      "Realizamos trabajos de calidad en refacciones y remodelaciones de oficinas, locales y viviendas. Nuestro equipo especializado garantiza acabados profesionales, mantenimiento preventivo y soluciones corporativas en cada proyecto.",
  },
  electricidad: {
    intro: "Instalaciones eléctricas residencial, comercial e industrial",
    detail:
      "Diseñamos e instalamos soluciones eléctricas completas: iluminación LED, tomas, canalizaciones, protección, puesta a tierra, potencia y control, además de sistemas de automatización PLC/HMI/SCADA.",
  },
  redes: {
    intro: "Infraestructura de redes estructuradas y telecomunicaciones",
    detail:
      "Implementamos cableado estructurado, configuración de equipos de red, CCTV/IP, instrumentación industrial (Modbus, Profinet, Ethernet/IP) y mantenimiento preventivo de equipos críticos.",
  },
  distribucion: {
    intro: "Distribución de productos IT, eléctricos y de construcción",
    detail:
      "Suministramos componentes informáticos, línea blanca, protecciones eléctricas, luminarias, materiales de obra liviana y más, con servicios técnicos adicionales como armado, migración de datos e instalación de SO.",
  },
  software: {
    intro: "Desarrollo de software personalizado y soluciones DevOps",
    detail:
      "Creamos aplicaciones web corporativas, e-commerce, sistemas internos, APIs/integraciones, automatización con RPA/No-Code, dashboards de monitoreo y soluciones de contenedores con Docker/Kubernetes.",
  },
  impresion3d: {
    intro: "Impresión 3D FDM para piezas y componentes funcionales",
    detail:
      "Fabricamos piezas funcionales, carcasas para electrónica, adaptadores, repuestos, señalética 3D con branding y artículos decorativos personalizados según tus necesidades.",
  },
}

interface ServiceDetailsSectionProps {
  service: string
}

export default function ServiceDetailsSection({ service }: ServiceDetailsSectionProps) {
  const description = serviceDescriptions[service]

  if (!description) return null

  return (
    <section className="py-20 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-6xl font-light mb-6">{description.intro}</h2>
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <p className="text-gray-300 text-sm leading-relaxed">{description.detail}</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Contamos con la metodología de trabajo integral: levantamiento técnico, propuesta técnico-económica,
              ejecución con control de calidad, y cierre con pruebas y puesta en marcha.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
