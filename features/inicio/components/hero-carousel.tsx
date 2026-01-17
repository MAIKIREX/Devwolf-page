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
import Image from "next/image"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
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
  return isNextForward ? "forward" : "backward"
}

export function HeroCarousel() {
  const services = React.useMemo<Service[]>(
    () => [
      {
        id: "construccion",
        label: "Construcción",
        title: "Construcción y Obra Liviana",
        description: "Refacciones, remodelaciones y obra liviana con estándares de calidad.",
        cta: "Ver servicios",
        image: "https://res.cloudinary.com/dbrkedvyp/image/upload/v1768498555/construction-site-with-modern-building-and-workers_qfhx3d.jpg",
        link: "/servicios/construccion-obra-liviana",
        Icon: Building2,
      },
      {
        id: "electrico",
        label: "Eléctrico",
        title: "Instalaciones Eléctricas",
        description: "Iluminación, tableros, control de motores y automatización industrial.",
        cta: "Ver servicios",
        image: "https://res.cloudinary.com/dbrkedvyp/image/upload/v1768498996/electrical-installation-industrial-panel_a9fihp.jpg",
        link: "/servicios/instalaciones-electricas",
        Icon: Factory,
      },
      {
        id: "redes",
        label: "Redes",
        title: "Redes & Telecomunicaciones",
        description: "Cableado estructurado, CCTV, VLANs y conectividad segura.",
        cta: "Ver servicios",
        image: "https://res.cloudinary.com/dbrkedvyp/image/upload/v1768499001/network-server-room-data-center_rwaivg.jpg",
        link: "/servicios/redes-telecomunicaciones",
        Icon: Radio,
      },
      {
        id: "distribucion",
        label: "Distribución",
        title: "Distribución de Equipos",
        description: "Insumos técnicos, equipos informáticos y herramientas especializadas.",
        cta: "Ver servicios",
        image: "https://res.cloudinary.com/dbrkedvyp/image/upload/v1768499010/warehouse-with-technology-equipment-and-computers_q8t34g.jpg",
        link: "/servicios/distribucion-equipos",
        Icon: Package,
      },
      {
        id: "software",
        label: "Software",
        title: "Software e Integraciones",
        description: "Desarrollo web, APIs, automatización y monitoreo.",
        cta: "Ver servicios",
        image: "https://res.cloudinary.com/dbrkedvyp/image/upload/v1768499005/software-coding-screen_fmoefd.png",
        link: "/servicios/software-devops",
        Icon: Code2,
      },
      {
        id: "impresion",
        label: "Impresión 3D",
        title: "Impresión 3D",
        description: "Diseño y fabricación de piezas, señalética y elementos personalizados.",
        cta: "Ver servicios",
        image: "https://res.cloudinary.com/dbrkedvyp/image/upload/v1768498991/3d-printer-manufacturing-custom-parts-closeup_g4pbug.jpg",
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
  React.useEffect(() => { activeRef.current = active }, [active])

  const timerRef = React.useRef<number | null>(null)
  const skipNextSelectRef = React.useRef(false)
  const progressControls = useAnimationControls()

  const restartProgress = React.useCallback(() => {
    progressControls.set({ scaleX: 0 })
    progressControls.start({
      scaleX: 1,
      transition: { duration: INTERVAL_MS / 1000, ease: "linear" },
    })
  }, [progressControls])

  const scheduleNext = React.useCallback(() => {
    if (timerRef.current) window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => {
      api?.scrollNext()
    }, INTERVAL_MS)
  }, [api])

  const applyIndex = React.useCallback((next: number) => {
    const len = services.length
    const safeNext = clamp(next, 0, len - 1)
    setDir(getDirection(activeRef.current, safeNext, len))
    setActive(safeNext)
    restartProgress()
    scheduleNext()
  }, [restartProgress, scheduleNext, services.length])

  React.useEffect(() => {
    if (!api) return
    applyIndex(api.selectedScrollSnap())
    const onSelect = () => {
      if (skipNextSelectRef.current) {
        skipNextSelectRef.current = false
        return
      }
      applyIndex(api.selectedScrollSnap())
    }
    const onReInit = () => {
      applyIndex(api.selectedScrollSnap())
    }
    api.on("select", onSelect)
    api.on("reInit", onReInit)
    return () => {
      api.off("select", onSelect)
      api.off("reInit", onReInit)
    }
  }, [api, applyIndex])

  const goTo = (nextIdx: number) => {
    if (!api) return
    skipNextSelectRef.current = true
    api.scrollTo(nextIdx)
    applyIndex(nextIdx)
  }

  const activeService = services[active]
  const baseService = services[baseIdx]
  const incomingInitialClip = dir === "forward" ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)"

  return (
    <Card className="relative min-h-screen w-full overflow-hidden rounded-none border-none bg-neutral-950 flex items-center">
      
      {/* CAPA DE FONDO (IMAGEN) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0">
          <Image
            src={baseService.image}
            alt={baseService.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <AnimatePresence initial={false}>
          <motion.div
            key={activeService.id}
            className="absolute inset-0"
            initial={{ clipPath: incomingInitialClip }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            onAnimationComplete={() => setBaseIdx(active)}
          >
            <Image
              src={activeService.image}
              alt={activeService.title}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Overlays para legibilidad */}
        <div className="absolute inset-0 bg-black/60 md:bg-gradient-to-r md:from-black/90 md:via-black/40 md:to-transparent" />
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10 w-full px-4 py-8 sm:px-10 md:py-16">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-[320px_1fr] gap-12 items-center">
          
          {/* COLUMNA IZQUIERDA: SELECTOR (Visible siempre en Desktop) */}
          <div className="order-2 md:order-1 flex flex-col gap-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-widest text-white/70">Nuestros Servicios</span>
              <div className="h-1 w-20 bg-white/10 rounded-full overflow-hidden">
                <motion.div className="h-full bg-white origin-left" animate={progressControls} />
              </div>
            </div>

            {/* Lista Vertical en Desktop / Scroll Horizontal en Mobile */}
            <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0 no-scrollbar">
              {services.map((s, idx) => {
                const isSelected = idx === active
                return (
                  <button
                    key={s.id}
                    onClick={() => goTo(idx)}
                    className={cn(
                      "flex-shrink-0 flex items-center gap-3 px-4 py-3 transition-all duration-300 border text-left rounded-lg md:rounded-none md:border-l-2 md:border-t-0 md:border-r-0 md:border-b-0",
                      isSelected 
                        ? "bg-white/20 border-white text-white" 
                        : "bg-black/20 border-white/10 text-white/60 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    <div className={cn(
                      "p-2 rounded-md",
                      isSelected ? "bg-white text-black" : "bg-white/10"
                    )}>
                      <s.Icon className="h-5 w-5" />
                    </div>
                    <div className="whitespace-nowrap">
                      <p className="text-sm font-semibold">{s.label}</p>
                      <p className="hidden md:block text-[10px] opacity-50 uppercase tracking-tighter">Explorar</p>
                    </div>
                    {isSelected && <ChevronRight className="ml-auto h-4 w-4 hidden md:block" />}
                  </button>
                )
              })}
            </div>
          </div>

          {/* COLUMNA DERECHA: CAROUSEL TEXTO */}
          <div className="order-1 md:order-2">
            <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
              <CarouselContent>
                {services.map((s) => (
                  <CarouselItem key={s.id}>
                    <div className="max-w-2xl space-y-6">
                      <Badge className="bg-white/10 text-white border-white/20 px-4 py-1.5 backdrop-blur-sm">
                        <s.Icon className="mr-2 h-4 w-4" />
                        Servicios Integrales
                      </Badge>
                      
                      <h1 className="text-4xl sm:text-5xl md:text-7xl font-light text-white tracking-tight leading-tight">
                        {s.title}
                      </h1>
                      
                      <p className="text-base sm:text-lg text-white/70 max-w-xl leading-relaxed">
                        {s.description}
                      </p>

                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button asChild size="lg" className="bg-white text-black hover:bg-neutral-200 rounded-xl px-8 h-12">
                          <Link href={s.link}>
                            {s.cta} <ArrowRight className="ml-2 h-5 w-5" />
                          </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 rounded-xl px-8 h-12 backdrop-blur-sm">
                          <Link href="/contacto">Cotizar Ahora</Link>
                        </Button>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </Card>
  )
}
