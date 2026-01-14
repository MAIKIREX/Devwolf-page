"use client"

import * as React from "react"
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion"

const CONTENT = [
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

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(n, max))
}

export function ConstruccionCivilHeroParallax() {
  const reduce = useReducedMotion()
  const ref = React.useRef<HTMLDivElement>(null)

  /**
   * TIP clave para que el último slide se note:
   * 1) Aumentamos la altura total del section (más scroll al final).
   * 2) Hacemos un “snap” al último slide cuando el progreso está cerca del final.
   */
  const slides = CONTENT.length
  const totalHeight = `${(slides + 0.85) * 100}svh` // +0.85 ≈ “cola” extra para el último slide

  const { scrollYProgress } = useScroll({
    target: ref,
    // Este offset suele dar un rango más consistente que ["end start"]
    offset: ["start start", "end end"],
  })

  // Parallax del video (sube un poco) + leve zoom
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "-16%"])
  const videoScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.18])

  // Overlay para legibilidad
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.45, 0.7])

  // Slide activo
  const [active, setActive] = React.useState(0)

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    // segmentación “equitativa”
    const idxBySegment = clamp(Math.floor(p * slides), 0, slides - 1)

    // snap al último cerca del final (por si el progress no llega a 1 exacto)
    const nearEndSnap = 0.965
    const idx = p >= nearEndSnap ? slides - 1 : idxBySegment

    setActive(idx)
  })

  const current = CONTENT[active]

  return (
    <section
      ref={ref}
      className="relative bg-[#0b1220]"
      style={{ height: totalHeight }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-svh overflow-hidden">
        {/* Video layer */}
        <motion.div
          className="absolute inset-0"
          style={
            reduce
              ? undefined
              : {
                  y: videoY,
                  scale: videoScale,
                }
          }
        >
          <video
            className="h-full w-full object-cover"
            src="/construccionCivil.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        </motion.div>

        {/* Overlay */}
        <motion.div className="absolute inset-0" style={{ opacity: overlayOpacity }}>
          <div className="absolute inset-0 bg-black" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/25" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 h-full">
          <div className="container mx-auto h-full px-4">
            {/* En mobile: stack / En md+: 2 columnas */}
            <div className="grid h-full items-end pb-14 md:grid-cols-[0.95fr_1.05fr] md:items-center md:gap-10 md:pb-0">
              {/* LEFT: FIJO */}
              <div className="md:self-center">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                  className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/85 backdrop-blur"
                >
                  Construcción & Obra liviana
                </motion.div>

                <motion.h1
                  className="mt-4 text-balance font-heading text-4xl font-bold leading-tight text-white md:text-6xl"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.05 }}
                >
                  Refacciones, remodelaciones y acabados con estándar corporativo
                </motion.h1>

                <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
                  Desliza para recorrer el proceso. La explicación va cambiando a la derecha.
                </p>

                {/* Indicador de progreso (queda fijo también) */}
                <div className="mt-8 flex items-center gap-2">
                  {CONTENT.map((c, i) => (
                    <div
                      key={c.id}
                      className={[
                        "h-1.5 w-10 rounded-full transition-all",
                        i === active ? "bg-white/90" : "bg-white/25",
                      ].join(" ")}
                    />
                  ))}
                  <span className="ml-2 text-xs text-white/70">
                    {active + 1}/{CONTENT.length}
                  </span>
                </div>
              </div>

              {/* RIGHT: SLIDES (CAMBIAN CON SCROLL) */}
              <div className="mt-8 md:mt-0 md:self-center">
                <div className="min-h-[10.5rem] md:min-h-[11.5rem]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current.id}
                      initial={{ opacity: 0, x: 20, y: 10, filter: "blur(8px)" }}
                      animate={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, x: -12, y: -8, filter: "blur(8px)" }}
                      transition={{ duration: 0.35 }}
                      className="rounded-2xl border border-white/12 bg-white/10 p-5 text-white/90 backdrop-blur-md md:p-7"
                    >
                      <div className="mb-3 text-xs font-medium tracking-wide text-white/70">
                        Etapa {active + 1}
                      </div>

                      <p className="text-pretty text-base leading-relaxed md:text-lg">
                        {current.text}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* hint solo en mobile para que se entienda que hay “tarjeta” */}
                <div className="mt-4 text-xs text-white/60 md:hidden">
                  Tip: sigue deslizando para ver la siguiente etapa.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fade bottom edge */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
    </section>
  )
}
