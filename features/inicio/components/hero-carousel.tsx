"use client"

import * as React from "react"
import { AnimatePresence, motion, useAnimationControls } from "framer-motion"
import {
  ArrowRight,
  Building2,
  ChevronRight,
  Code2,
  Factory,
  Printer,
  Radio,
  Package,
} from "lucide-react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

type Service = {
  id: string
  label: string
  title: string
  description: string
  cta: string
  image: string
  link: string
  Icon: React.ComponentType<{ className?: string }>
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n))
}

function getDirection(prev: number, next: number, len: number) {
  if (next === prev) return "forward"
  const isNextForward = next === (prev + 1) % len
  const isNextBackward = next === (prev - 1 + len) % len
  if (isNextForward) return "forward"
  if (isNextBackward) return "backward"
  return next > prev ? "forward" : "backward"
}

export function HeroCarousel() {
  const services = React.useMemo<Service[]>(
    () => [
      {
        id: "construccion",
        label: "Construcción",
        title: "Construcción y Obra Liviana",
        description:
          "Refacciones, remodelaciones y obra liviana con estándares de calidad.",
        cta: "Ver servicios",
        image: "/images/construction-site-with-modern-building.jpg",
        link: "/servicios/construccion",
        Icon: Building2,
      },
      {
        id: "electrico",
        label: "Eléctrico",
        title: "Instalaciones Eléctricas",
        description:
          "Iluminación, tableros, control de motores y automatización industrial.",
        cta: "Ver servicios",
        image: "/images/electrical-installation-industrial-panel.jpg",
        link: "/servicios/instalaciones-electricas",
        Icon: Factory,
      },
      {
        id: "redes",
        label: "Redes",
        title: "Redes & Telecomunicaciones",
        description:
          "Cableado estructurado, CCTV, VLANs y conectividad segura.",
        cta: "Ver servicios",
        image: "/images/network-server-room-data-center.jpg",
        link: "/servicios/redes-telecomunicaciones",
        Icon: Radio,
      },
      {
        id: "distribucion",
        label: "Distribución",
        title: "Distribución de Equipos",
        description:
          "Insumos técnicos, equipos informáticos y herramientas especializadas.",
        cta: "Ver servicios",
        image: "/images/warehouse-with-technology-equipment-and-computers.jpg",
        link: "/servicios/distribucion-equipos",
        Icon: Package,
      },
      {
        id: "software",
        label: "Software",
        title: "Software e Integraciones",
        description: "Desarrollo web, APIs, automatización y monitoreo.",
        cta: "Ver servicios",
        image: "/images/software-coding-screen.png",
        link: "/servicios/software-devops",
        Icon: Code2,
      },
      {
        id: "impresion",
        label: "Impresión 3D",
        title: "Impresión 3D",
        description:
          "Diseño y fabricación de piezas, señalética y elementos personalizados.",
        cta: "Ver servicios",
        image: "/images/3d-printer-creating-colorful-plastic-prototypes-an.jpg",
        link: "/servicios/impresion-3d",
        Icon: Printer,
      },
    ],
    []
  )

  const INTERVAL_MS = 6000

  const [active, setActive] = React.useState(0)
  const [baseIdx, setBaseIdx] = React.useState(0)
  const [dir, setDir] = React.useState<"forward" | "backward">("forward")

  const [api, setApi] = React.useState<CarouselApi | null>(null)

  const activeRef = React.useRef(active)
  React.useEffect(() => {
    activeRef.current = active
  }, [active])

  const timerRef = React.useRef<number | null>(null)
  const skipNextSelectRef = React.useRef(false)

  const progressControls = useAnimationControls()

  const restartProgress = React.useCallback(() => {
    progressControls.set({ scaleX: 0 })
    progressControls.start({
      scaleX: 1,
      transition: { duration: INTERVAL_MS / 1000, ease: "linear" },
    })
  }, [progressControls, INTERVAL_MS])

  const clearTimer = React.useCallback(() => {
    if (timerRef.current) window.clearTimeout(timerRef.current)
    timerRef.current = null
  }, [])

  const scheduleNext = React.useCallback(() => {
    clearTimer()
    timerRef.current = window.setTimeout(() => {
      if (!api) return
      api.scrollNext()
    }, INTERVAL_MS)
  }, [api, clearTimer, INTERVAL_MS])

  const applyIndex = React.useCallback(
    (next: number) => {
      const len = services.length
      const safeNext = clamp(next, 0, len - 1)
      const prev = activeRef.current

      setDir(getDirection(prev, safeNext, len))
      setActive(safeNext)

      restartProgress()
      scheduleNext()
    },
    [restartProgress, scheduleNext, services.length]
  )

  React.useEffect(() => {
    if (!api) return

    const onSelect = () => {
      const next = api.selectedScrollSnap()
      if (skipNextSelectRef.current) {
        skipNextSelectRef.current = false
        return
      }
      applyIndex(next)
    }

    api.on("select", onSelect)
    api.on("reInit", onSelect)
    applyIndex(api.selectedScrollSnap())

    return () => {
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api, applyIndex])

  React.useEffect(() => {
    return () => clearTimer()
  }, [clearTimer])

  const goTo = (nextIdx: number) => {
    if (!api) return
    const next = clamp(nextIdx, 0, services.length - 1)
    skipNextSelectRef.current = true
    api.scrollTo(next)
    applyIndex(next)
  }

  const activeService = services[active]
  const baseService = services[baseIdx]

  const incomingInitialClip =
    dir === "forward" ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)"

  return (
    <Card
      className={cn(
        "relative overflow-hidden rounded-none", // ✅ sin bordes redondeados
        "border border-white/10 bg-neutral-950",
        "shadow-[0_30px_90px_rgba(0,0,0,0.55)] h-screen grid items-center"
      )}
    >
      {/* Background wipe */}
      <div className="absolute inset-0">
        <div className="absolute inset-0">
          <img
            src={baseService.image}
            alt={baseService.title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={activeService.id}
            className="absolute inset-0"
            style={{ willChange: "clip-path" }}
            initial={{ clipPath: incomingInitialClip }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            onAnimationComplete={() => {
              setBaseIdx((currentBase) => {
                if (activeRef.current === active) return active
                return currentBase
              })
            }}
          >
            <img
              src={activeService.image}
              alt={activeService.title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/55 to-black/75" />
        <div className="absolute inset-0 [background:radial-gradient(900px_520px_at_25%_28%,rgba(255,255,255,0.11),transparent_60%)] opacity-70" />
      </div>

      {/* Layout: mobile-first */}
      <div
        className={cn(
          "relative flex flex-col gap-7",
          "px-4 py-10 sm:px-6",
          "md:grid md:gap-10 md:px-10 md:py-16",
          "md:grid-cols-[320px_1fr]"
        )}
      >
        {/* RIGHT (content) first on mobile */}
        <div className="order-1 md:order-2 md:self-center">
          <Carousel
            setApi={setApi}
            opts={{ loop: true, align: "start" }}
            className="w-full"
          >
            <CarouselContent>
              {services.map((s) => (
                <CarouselItem key={s.id} className="basis-full">
                  <div className="max-w-2xl">
                    <Badge className="gap-2 rounded-full bg-white/10 px-3 py-2 text-xs font-semibold text-white/80 ring-1 ring-white/10 hover:bg-white/10">
                      <s.Icon className="h-4 w-4" />
                      Servicios integrales
                    </Badge>

                    <h1 className="mt-5 text-balance text-3xl font-semibold leading-[1.08] tracking-tight text-white sm:text-4xl md:text-6xl">
                      {s.title}
                    </h1>

                    <p className="mt-4 max-w-xl text-pretty text-sm text-white/70 sm:text-base">
                      {s.description}
                    </p>

                    <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                      <Button
                        asChild
                        className={cn(
                          "h-11 w-full rounded-xl bg-white px-5 text-neutral-900 hover:bg-white/95",
                          "sm:w-auto"
                        )}
                      >
                        <Link href={s.link}>
                          {s.cta}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>

                      <Button
                        asChild
                        variant="secondary"
                        className={cn(
                          "h-11 w-full rounded-xl bg-white/10 px-5 text-white ring-1 ring-white/15 hover:bg-white/15",
                          "sm:w-auto"
                        )}
                      >
                        <Link href="/contacto">
                          Cotizar ahora
                          <ArrowRight className="ml-2 h-4 w-4 opacity-80" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* LEFT rail: compact chips on mobile, list on md+ */}
        <div className="order-2 md:order-1 md:self-center">
          <div className="flex items-center justify-between gap-4">
            <div className="text-sm font-semibold text-white/85">Servicios</div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] text-white/55">Auto</span>
              <div className="h-1.5 w-24 overflow-hidden rounded-full bg-white/10 ring-1 ring-white/10 sm:w-28">
                <motion.div
                  className="h-full w-full origin-left bg-white/70"
                  initial={{ scaleX: 0 }}
                  animate={progressControls}
                />
              </div>
            </div>
          </div>

          {/* Mobile: chips horizontales (más limpio) */}
          <div className="mt-4 md:hidden">
            <div className="-mx-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex gap-2">
                {services.map((s, idx) => {
                  const selected = idx === active
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => goTo(idx)}
                      className={cn(
                        "group flex items-center gap-2 whitespace-nowrap",
                        "px-3 py-2",
                        "border border-white/10 bg-white/0 text-left",
                        "transition",
                        selected ? "bg-white/14" : "hover:bg-white/10"
                      )}
                    >
                      <span
                        className={cn(
                          "grid h-9 w-9 place-items-center",
                          "bg-white/10 text-white ring-1 ring-white/10",
                          selected && "bg-white text-neutral-950 ring-white/20"
                        )}
                      >
                        <s.Icon className="h-4 w-4" />
                      </span>

                      <span className="text-sm font-semibold text-white/85">
                        {s.label}
                      </span>

                      <ChevronRight
                        className={cn(
                          "ml-1 h-4 w-4 transition",
                          selected ? "opacity-80" : "opacity-30 group-hover:opacity-60"
                        )}
                      />
                    </button>
                  )
                })}
              </div>
            </div>

            {/* hint sutil */}
            <div className="mt-2 text-[11px] text-white/45">
              Desliza para ver más servicios
            </div>
          </div>

          {/* Desktop/tablet: lista vertical (tu estilo original) */}
          <div className="mt-4 hidden gap-2 md:grid md:gap-2">
            {services.map((s, idx) => {
              const selected = idx === active

              return (
                <Button
                  key={s.id}
                  type="button"
                  variant="ghost"
                  onClick={() => goTo(idx)}
                  className={cn(
                    "group relative h-auto min-w-0 justify-start gap-3 px-3 py-3 text-left",
                    "ring-1 ring-white/10",
                    "bg-white/0 hover:bg-white/10",
                    selected && "bg-white/14"
                  )}
                >
                  <span
                    className={cn(
                      "absolute left-0 top-0 h-full w-0.5 transition",
                      selected ? "bg-white" : "bg-white/0 group-hover:bg-white/40"
                    )}
                  />

                  <span
                    className={cn(
                      "grid h-10 w-10 place-items-center rounded-lg ring-1 transition",
                      selected
                        ? "bg-white text-neutral-950 ring-white/20"
                        : "bg-white/10 text-white ring-white/10 group-hover:bg-white/15"
                    )}
                  >
                    <s.Icon className="h-5 w-5" />
                  </span>

                  <span className="min-w-0">
                    <span
                      className={cn(
                        "block text-sm font-semibold",
                        selected ? "text-white" : "text-white/85"
                      )}
                    >
                      {s.label}
                    </span>
                    <span
                      className={cn(
                        "mt-0.5 block text-xs",
                        selected ? "text-white/70" : "text-white/55"
                      )}
                    >
                      {s.title}
                    </span>
                  </span>

                  <ChevronRight
                    className={cn(
                      "ml-auto h-4 w-4 transition",
                      selected ? "opacity-80" : "opacity-30 group-hover:opacity-60"
                    )}
                  />
                </Button>
              )
            })}
          </div>
        </div>
      </div>

      <Separator className="pointer-events-none bg-white/10" />
    </Card>
  )
}
