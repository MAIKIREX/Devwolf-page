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

type Slide = {
  id: string
  title?: string
  text: string
}

type StickyVideoParallaxWrapperProps = {
  /** Ref obligatorio para que el efecto sea por sección (no por toda la página) */
  slides: Slide[]

  /** Video de fondo */
  videoSrc: string
  videoPoster?: string

  /** Columna izquierda (fija) */
  badge?: React.ReactNode
  title: React.ReactNode
  subtitle?: React.ReactNode
  hint?: React.ReactNode

  /** Ajustes finos */
  heightPerSlideVh?: number // default 100
  tailExtraVh?: number // extra para que el último slide se note (default 85)
  snapEndAt?: number // default 0.965

  /** Estilo */
  className?: string
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(n, max))
}

export function StickyVideoParallaxWrapper({
  slides,
  videoSrc,
  videoPoster,

  badge,
  title,
  subtitle,
  hint,

  heightPerSlideVh = 100,
  tailExtraVh = 85,
  snapEndAt = 0.965,

  className,
}: StickyVideoParallaxWrapperProps) {
  const reduce = useReducedMotion()
  const ref = React.useRef<HTMLDivElement>(null)

  const count = Math.max(1, slides.length)

  /**
   * Truco para el último slide:
   * - damos scroll extra al final (tailExtraVh)
   * - y hacemos snap cuando el progress está cerca de 1
   */
  const totalHeight = `calc(${count * heightPerSlideVh}svh + ${tailExtraVh}svh)`

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "-16%"])
  const videoScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.18])
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.45, 0.7])

  const [active, setActive] = React.useState(0)

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const idxBySegment = clamp(Math.floor(p * count), 0, count - 1)
    const idx = p >= snapEndAt ? count - 1 : idxBySegment
    setActive(idx)
  })

  const current = slides[active] ?? slides[0]

  return (
    <section
      ref={ref}
      className={["relative bg-[#0b1220]", className].filter(Boolean).join(" ")}
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
            src={videoSrc}
            poster={videoPoster}
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
            <div className="grid h-full items-end pb-14 md:grid-cols-[0.95fr_1.05fr] md:items-center md:gap-10 md:pb-0">
              {/* LEFT (fijo) */}
              <div className="md:self-center">
                {badge ? (
                  <div className="inline-flex items-center">{badge}</div>
                ) : null}

                <div className={badge ? "mt-4" : ""}>
                  <div className="text-balance font-heading text-4xl font-light leading-tight text-white md:text-6xl">
                    {title}
                  </div>

                  {subtitle ? (
                    <div className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
                      {subtitle}
                    </div>
                  ) : null}
                </div>

                {/* Progress */}
                <div className="mt-8 flex items-center gap-2">
                  {slides.map((s, i) => (
                    <div
                      key={s.id}
                      className={[
                        "h-1.5 w-10 rounded-full transition-all",
                        i === active ? "bg-white/90" : "bg-white/25",
                      ].join(" ")}
                    />
                  ))}
                  <span className="ml-2 text-xs text-white/70">
                    {active + 1}/{count}
                  </span>
                </div>

                {hint ? (
                  <div className="mt-3 text-xs text-white/60">{hint}</div>
                ) : null}
              </div>

              {/* RIGHT (slides) */}
              <div className="mt-8 md:mt-0 md:self-center">
                <div className="min-h-[10.5rem] md:min-h-[11.5rem]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current?.id}
                      initial={{ opacity: 0, x: 20, y: 10, filter: "blur(8px)" }}
                      animate={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, x: -12, y: -8, filter: "blur(8px)" }}
                      transition={{ duration: 0.35 }}
                      className="rounded-2xl border border-white/12 bg-white/10 p-5 text-white/90 backdrop-blur-md md:p-7"
                    >
                      <div className="mb-3 text-xs font-medium tracking-wide text-white/70">
                        {current?.title ?? `Etapa ${active + 1}`}
                      </div>

                      <p className="text-pretty text-base leading-relaxed md:text-lg">
                        {current?.text}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="mt-4 text-xs text-white/60 md:hidden">
                  Tip: sigue deslizando para ver la siguiente etapa.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fade bottom */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
    </section>
  )
}
