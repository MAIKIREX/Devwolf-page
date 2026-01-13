"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Building2,
  Zap,
  Network,
  Package,
  Code,
  Box,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

type Service = {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  href: string
  image: string
  badge?: string
}

export function ServicesGrid() {
  const services: Service[] = [
    {
      icon: Building2,
      title: "Construcción",
      description:
        "Refacciones, remodelaciones y obra liviana con estándares de calidad.",
      href: "/servicios/construccion",
      image: "/images/construction-site-with-modern-building.jpg",
      badge: "Obra liviana",
    },
    {
      icon: Zap,
      title: "Instalaciones Eléctricas",
      description:
        "Iluminación, tableros, control de motores y automatización industrial.",
      href: "/servicios/instalaciones-electricas",
      image: "/images/electrical-installation-industrial-panel.jpg",
      badge: "Industrial",
    },
    {
      icon: Network,
      title: "Redes & Telecomunicaciones",
      description: "Cableado estructurado, CCTV, VLANs y conectividad segura.",
      href: "/servicios/redes-telecomunicaciones",
      image: "/images/network-server-room-data-center.jpg",
      badge: "Seguridad",
    },
    {
      icon: Package,
      title: "Distribución de Equipos",
      description: "Insumos eléctricos, informáticos y herramientas técnicas.",
      href: "/servicios/distribucion-equipos",
      image: "/images/warehouse-with-technology-equipment-and-computers.jpg",
      badge: "Stock",
    },
    {
      icon: Code,
      title: "Software & DevOps",
      description: "Sistemas web, APIs, automatización y monitoreo.",
      href: "/servicios/software-devops",
      image: "/images/software-coding-screen.png",
      badge: "Integraciones",
    },
    {
      icon: Box,
      title: "Impresión 3D",
      description:
        "Diseño y fabricación de piezas, señalética y elementos personalizados.",
      href: "/servicios/impresion-3d",
      image: "/images/3d-printer-creating-colorful-plastic-prototypes-an.jpg",
      badge: "Prototipos",
    },
  ]

  const [api, setApi] = React.useState<CarouselApi | null>(null)
  const [canPrev, setCanPrev] = React.useState(false)
  const [canNext, setCanNext] = React.useState(false)

  React.useEffect(() => {
    if (!api) return

    const update = () => {
      setCanPrev(api.canScrollPrev())
      setCanNext(api.canScrollNext())
    }

    update()
    api.on("select", update)
    api.on("reInit", update)

    return () => {
      api.off("select", update)
      api.off("reInit", update)
    }
  }, [api])

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-primary py-20 text-primary-foreground sm:py-24"
    >
      {/* background details (subtle) */}
      <div className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(900px_520px_at_20%_20%,rgba(255,255,255,0.12),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />

      <div className="container relative mx-auto px-4">
        {/* Header */}
        <div className="mb-8 flex items-end justify-between gap-6 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs uppercase tracking-wider opacity-90 sm:text-sm">
              Nuestros servicios
            </p>
            <h2 className="mt-2 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
              Soluciones integrales en ingeniería y tecnología
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-primary-foreground/80 sm:text-base">
              Refacciones, instalaciones eléctricas, redes, distribución, software y
              fabricación 3D para impulsar tu negocio.
            </p>
          </motion.div>

          {/* Controls (md+) */}
          <div className="hidden items-center gap-2 md:flex">
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => api?.scrollPrev()}
              disabled={!canPrev}
              className={cn(
                "border-white/30 bg-white/10 hover:bg-white/20",
                "disabled:opacity-40 disabled:hover:bg-white/10"
              )}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => api?.scrollNext()}
              disabled={!canNext}
              className={cn(
                "border-white/30 bg-white/10 hover:bg-white/20",
                "disabled:opacity-40 disabled:hover:bg-white/10"
              )}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Carousel */}
        <Carousel
          setApi={setApi}
          opts={{ align: "start", loop: false }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <CarouselItem
                  key={service.href}
                  className={cn(
                    "pl-4",
                    // mobile-first: 1 por vista
                    "basis-full",
                    // sm: 2
                    "sm:basis-1/2",
                    // lg: 3
                    "lg:basis-1/3",
                    // xl: 4 (similar al ejemplo)
                    "xl:basis-1/4"
                  )}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: index * 0.06 }}
                    className="h-full"
                  >
                    <Link href={service.href} className="block h-full">
                      <Card className="group h-full overflow-hidden border-white/10 bg-card text-card-foreground shadow-none transition-shadow hover:shadow-xl">
                        {/* Image */}
                        <div className="relative h-44 overflow-hidden sm:h-48">
                          <img
                            src={service.image || "/placeholder.svg"}
                            alt={service.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                          />
                          {/* Badge */}
                          {service.badge ? (
                            <div className="absolute right-4 top-4 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                              {service.badge}
                            </div>
                          ) : null}

                          {/* Soft overlay for readability */}
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                        </div>

                        <CardContent className="p-5 sm:p-6">
                          <div className="flex items-start gap-3">
                            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary/15 text-secondary ring-1 ring-border">
                              <Icon className="h-5 w-5" />
                            </div>
                            <div className="min-w-0">
                              <h3 className="text-lg font-bold leading-snug sm:text-xl">
                                {service.title}
                              </h3>
                              <p className="mt-2 text-sm text-muted-foreground">
                                {service.description}
                              </p>
                            </div>
                          </div>

                          <div className="mt-5 flex items-center justify-between">
                            <span className="text-sm font-semibold text-secondary">
                              Ver más
                            </span>
                            <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                </CarouselItem>
              )
            })}
          </CarouselContent>

          {/* Mobile controls */}
          <div className="mt-6 flex items-center justify-center gap-2 md:hidden">
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => api?.scrollPrev()}
              disabled={!canPrev}
              className={cn(
                "border-white/30 bg-white/10 hover:bg-white/20",
                "disabled:opacity-40 disabled:hover:bg-white/10"
              )}
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => api?.scrollNext()}
              disabled={!canNext}
              className={cn(
                "border-white/30 bg-white/10 hover:bg-white/20",
                "disabled:opacity-40 disabled:hover:bg-white/10"
              )}
              aria-label="Siguiente"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </Carousel>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center sm:mt-12"
        >
          <p className="text-sm text-primary-foreground/90">
            ¿Necesitas más información sobre cómo podemos ayudarte?{" "}
            <Button
              asChild
              variant="link"
              className="h-auto p-0 font-semibold text-white underline underline-offset-4"
            >
              <Link href="/contacto">Contáctanos →</Link>
            </Button>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
