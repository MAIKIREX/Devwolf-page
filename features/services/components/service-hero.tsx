"use client"

import type React from "react"

import { StickyVideoParallaxWrapper } from "@/components/scroll/StickyVideoParallaxWrapper"
import { motion } from "framer-motion"

interface ServiceHeroProps {
  title: string
  slides?: { id: string; text: string }[]
  videoSrc?: string
  badge?: React.ReactNode
  subtitle?: string
  hint?: React.ReactNode
}

const DEFAULT_SLIDES = [
  {
    id: "p1",
    text:
      "En Devwolf ofrecemos servicios integrales de construcción y obra liviana, especializados en refacciones y remodelaciones de oficinas, locales comerciales y viviendas. Nuestro equipo técnico cuenta con amplia experiencia en proyectos de ampliación y rediseño interior, garantizando resultados de alta calidad.",
  },
  {
    id: "p2",
    text:
      "Realizamos acabados profesionales que incluyen instalación de cielo falso, pintura, aplicación de yeso, paneles decorativos y colocación de pisos flotantes o cerámicos. Cada proyecto es ejecutado con atención al detalle y cumplimiento de los estándares de calidad más exigentes.",
  },
  {
    id: "p3",
    text:
      "Además, brindamos servicios de mantenimiento menor y montaje corporativo, incluyendo instalación de letreros, señalética profesional, soportes estructurales y divisiones modulares. Trabajamos con materiales de primera calidad y garantizamos la durabilidad de cada instalación.",
  },
]

export default function ServiceHero({
  title,
  slides = DEFAULT_SLIDES,
  videoSrc = "https://res.cloudinary.com/dbrkedvyp/video/upload/v1768499725/construccionCivil_hus7ha.mp4",
  badge,
  subtitle = "Desliza para recorrer el proceso. La explicación va cambiando a la derecha.",
  hint = <span>Desliza para ver más</span>,
}: ServiceHeroProps) {
  return (
    <StickyVideoParallaxWrapper
      slides={slides}
      videoSrc={videoSrc}
      badge={
        badge ?? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/85 backdrop-blur"
          >
            civil
          </motion.div>
        )
      }
      title={title}
      subtitle={subtitle}
      hint={hint}
      // Opcionales:
      // tailExtraVh={95}
      // snapEndAt={0.97}
    />
  )
}
