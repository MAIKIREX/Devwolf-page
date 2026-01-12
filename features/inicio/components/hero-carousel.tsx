"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const slides = [
  {
    id: "construccion",
    title: "Construcción y Obra Liviana",
    subtitle: "Refacciones, remodelaciones y obra liviana con estándares de calidad.",
    image: "/construction-site-with-modern-building.jpg",
    link: "/servicios/construccion",
  },
  {
    id: "electrico",
    title: "Instalaciones Eléctricas",
    subtitle: "Iluminación, tableros, control de motores y automatización industrial.",
    image: "/electrical-installation-industrial-panel.jpg",
    link: "/servicios/instalaciones-electricas",
  },
  {
    id: "redes",
    title: "Redes & Telecomunicaciones",
    subtitle: "Cableado estructurado, CCTV, VLANs y conectividad segura.",
    image: "/network-server-room-data-center.jpg",
    link: "/servicios/redes-telecomunicaciones",
  },
  {
    id: "distribucion",
    title: "Distribución de Equipos",
    subtitle: "Insumos técnicos, equipos informáticos y herramientas especializadas.",
    image: "/warehouse-with-technology-equipment-and-computers.jpg",
    link: "/servicios/distribucion-equipos",
  },
  {
    id: "software",
    title: "Software e Integraciones",
    subtitle: "Desarrollo web, APIs, automatización y monitoreo.",
    image: "/software-coding-screen.png",
    link: "/servicios/software-devops",
  },
  {
    id: "impresion",
    title: "Impresión 3D",
    subtitle: "Diseño y fabricación de piezas, señalética y elementos personalizados.",
    image: "/3d-printer-creating-colorful-plastic-prototypes-an.jpg",
    link: "/servicios/impresion-3d",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [currentSlide, isPaused])

  return (
    <div
      className="relative h-[600px] lg:h-[700px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Content */}
          <div className="relative h-full container mx-auto px-4 flex items-center">
            <div className="max-w-3xl text-white">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-balance"
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed"
              >
                {slides[currentSlide].subtitle}
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href={slides[currentSlide].link}>Ver servicios</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
                >
                  <Link href="/contacto">Solicitar cotización</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
