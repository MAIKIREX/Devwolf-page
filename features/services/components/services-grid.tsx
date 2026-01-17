"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Building2,
  Zap,
  Network,
  Package,
  Code,
  Box,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

type Service = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  href: string;
  image: string;
  badge?: string;
};

const hoverFill = {
  rest: { scaleY: 0, opacity: 0 },
  hover: { scaleY: 1, opacity: 1 },
};

const arrow = {
  rest: { opacity: 0, y: 6, scale: 0.98 },
  hover: { opacity: 1, y: 0, scale: 1 },
};

const img = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
};

// NUEVO: badge se va arriba y desaparece un poco
const badgeMotion = {
  rest: { y: 0, opacity: 1, scale: 1 },
  hover: { y: -18, opacity: 0, scale: 0.98 },
};

// NUEVO: Icon aparece donde estaba el badge
const badgeIconMotion = {
  rest: { y: 10, opacity: 0, scale: 0.9 },
  hover: { y: 0, opacity: 1, scale: 1 },
};

// NUEVO: texto cambia en hover
const descMotion = {
  rest: { opacity: 1, y: 0 },
  hover: { opacity: 0, y: -4 },
};
const hoverDescMotion = {
  rest: { opacity: 0, y: 6 },
  hover: { opacity: 1, y: 0 },
};

export function ServicesGrid() {
  const services: Service[] = [
    {
      icon: Building2,
      title: "Construcción",
      description:
        "Refacciones, remodelaciones y obra liviana con estándares de calidad.",
      href: "/servicios/construccion",
      image: "https://res.cloudinary.com/dbrkedvyp/image/upload/v1768498995/construction-site-renovation-modern-building_e5ypfd.jpg",
      badge: "Obra liviana",
    },
    {
      icon: Zap,
      title: "Instalaciones Eléctricas",
      description:
        "Iluminación, tableros, control de motores y automatización industrial.",
      href: "/servicios/instalaciones-electricas",
      image: "https://res.cloudinary.com/dbrkedvyp/image/upload/v1768499000/electrical-panel-industrial-installation-with-cabl_tndrx0.jpg",
      badge: "Industrial",
    },
    {
      icon: Network,
      title: "Redes & Telecomunicaciones",
      description: "Cableado estructurado, CCTV, VLANs y conectividad segura.",
      href: "/servicios/redes-telecomunicaciones",
      image: "https://res.cloudinary.com/dbrkedvyp/image/upload/v1768499004/network-server-room-with-fiber-optic-cables-and-sw_nv9eza.jpg",
      badge: "Seguridad",
    },
    {
      icon: Package,
      title: "Distribución de Equipos",
      description: "Insumos eléctricos, informáticos y herramientas técnicas.",
      href: "/servicios/distribucion-equipos",
      image: "https://res.cloudinary.com/dbrkedvyp/image/upload/v1768499009/technology-warehouse-with-computers-and-electronic_e9v4lj.jpg",
      badge: "Stock",
    },
    {
      icon: Code,
      title: "Software & DevOps",
      description: "Sistemas web, APIs, automatización y monitoreo.",
      href: "/servicios/software-devops",
      image: "https://res.cloudinary.com/dbrkedvyp/image/upload/v1768499008/software-developer-coding-on-multiple-screens_jeumvy.jpg",
      badge: "Integraciones",
    },
    {
      icon: Box,
      title: "Impresión 3D",
      description:
        "Diseño y fabricación de piezas, señalética y elementos personalizados.",
      href: "/servicios/impresion-3d",
      image: "https://res.cloudinary.com/dbrkedvyp/image/upload/v1768498991/3d-printer-manufacturing-custom-parts-in-action-cl_ilhupl.jpg",
      badge: "Prototipos",
    },
  ];

  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [canPrev, setCanPrev] = React.useState(false);
  const [canNext, setCanNext] = React.useState(false);

  React.useEffect(() => {
    if (!api) return;

    const update = () => {
      setCanPrev(api.canScrollPrev());
      setCanNext(api.canScrollNext());
    };

    update();
    api.on("select", update);
    api.on("reInit", update);

    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-black py-20 text-primary-foreground sm:py-24"
    >
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
            <h2 className="mt-2 text-2xl leading-tight sm:text-3xl lg:text-4xl font-light">
              Soluciones integrales en ingeniería y tecnología
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-primary-foreground/80 sm:text-base">
              Refacciones, instalaciones eléctricas, redes, distribución,
              software y fabricación 3D para impulsar tu negocio.
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
              const Icon = service.icon;

              return (
                <CarouselItem
                  key={service.href}
                  className={cn(
                    "pl-4",
                    "basis-full",
                    "sm:basis-1/2",
                    "lg:basis-1/3",
                    "xl:basis-1/4"
                  )}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ delay: index * 0.06 }}
                    className="h-full"
                  >
                    <Link href={service.href} className="block h-full">
                      <motion.div
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full"
                      >
                        <Card
                          className={cn(
                            "group relative h-full overflow-hidden border-0",
                            "ring-1 ring-black/10 p-0 bg-transparent",
                            "shadow-[0_25px_80px_-40px_rgba(0,0,0,0.35)]"
                          )}
                        >
                          <div className="relative min-h-[360px] bg-zinc-100">
                            {/* Imagen */}
                            <motion.img
                              variants={img}
                              src={service.image || "/placeholder.svg"}
                              alt={service.title}
                              loading="lazy"
                              className="absolute inset-0 h-full w-full object-cover will-change-transform [transform:translateZ(0)]"
                            />

                            {/* Overlay base */}
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

                            {/* Hover “pintado” */}
                            <motion.div
                              variants={hoverFill}
                              style={{ transformOrigin: "bottom" }}
                              className="pointer-events-none absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-t from-[#3931a0] via-[#3931a0]/45 to-transparent"
                            />

                            {/* Glow sutil */}
                            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:radial-gradient(700px_260px_at_20%_80%,rgba(57,49,160,0.35),transparent_60%)]" />

                            {/* Badge -> sale hacia arriba en hover */}
                            {service.badge ? (
                              <motion.div
                                variants={badgeMotion}
                                className="absolute left-4 top-4 z-20 rounded-full bg-[#3931a0] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-sm"
                              >
                                {service.badge}
                              </motion.div>
                            ) : null}

                            {/* Icon en la posición del badge (entra en hover) */}
                            <motion.div
                              variants={badgeIconMotion}
                              className={cn(
                                "absolute left-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-2xl",
                                "bg-white/10 backdrop-blur-md ring-1 ring-white/15"
                              )}
                            >
                              <Icon className="h-5 w-5 text-white" />
                            </motion.div>

                            {/* Bottom content */}
                            <div className="absolute inset-x-0 bottom-0 z-20 p-5 sm:p-6">
                              <h3 className="text-[22px] leading-tight tracking-tight text-white dark:text-foreground font-light">
                                {service.title}
                              </h3>

                              {/* Description normal */}
                              <motion.p
                                variants={descMotion}
                                className="mt-2 text-sm font-medium uppercase tracking-wider text-white/70"
                              >
                                Soluciones innovadoras
                              </motion.p>

                              {/* Description hover */}
                              <motion.p
                                variants={hoverDescMotion}
                                className="mt-2 text-sm font-semibold uppercase tracking-wider text-white"
                              >
                                Explorar servicios
                              </motion.p>
                            </div>

                            {/* Icono ">" abajo a la derecha */}
                            <motion.div
                              variants={arrow}
                              className={cn(
                                "absolute bottom-4 right-4 z-20 grid h-11 w-11 place-items-center rounded-full",
                                "bg-white/10 backdrop-blur-md ring-1 ring-white/15"
                              )}
                            >
                              <ChevronRight className="h-5 w-5 text-white" />
                            </motion.div>
                          </div>
                        </Card>
                      </motion.div>
                    </Link>
                  </motion.div>
                </CarouselItem>
              );
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
  );
}
