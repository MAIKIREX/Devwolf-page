"use client"

import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"
import { ArrowDown, ArrowUpRight, Cpu, Menu, X } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import styles from "./distribution-experience.module.css"

const GamingPcScene = dynamic(() => import("./gaming-pc-scene"), { ssr: false })

const highlights = [
  { number: "01", eyebrow: "Ampliación y rendimiento", title: "Memoria RAM", text: "Amplía la capacidad de tu equipo con módulos compatibles con tu placa y tu carga de trabajo.", image: "/images/distribucion/memoria.webp", alt: "Imagen ilustrativa de una memoria RAM", cta: "Cotizar memoria RAM", top: "130vh" },
  { number: "02", eyebrow: "Potencia visual", title: "Tarjetas gráficas", text: "Potencia para diseño, visualización y tareas gráficas. Comparamos rendimiento y compatibilidad antes de recomendarte una opción.", image: "", alt: "", cta: "Cotizar tarjeta gráfica", top: "235vh" },
  { number: "03", eyebrow: "El centro del equipo", title: "Procesadores", text: "El procesador y su refrigeración definen gran parte de la respuesta del sistema. Te ayudamos a elegir una plataforma equilibrada.", image: "", alt: "", cta: "Cotizar procesador", top: "340vh" },
]

export function DistributionExperience() {
  const journey = useRef<HTMLElement>(null)
  const visual = useRef<HTMLDivElement>(null)
  const progress = useRef({ value: 0 })
  const [show3D, setShow3D] = useState<boolean | null>(null)
  const [modelReady, setModelReady] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeStage, setActiveStage] = useState(-1)
  const handleModelReady = useCallback(() => setModelReady(true), [])

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    const canvas = document.createElement("canvas")
    const webgl = !!(canvas.getContext("webgl2") || canvas.getContext("webgl"))
    const frame = window.requestAnimationFrame(() => setShow3D(webgl && !media.matches))
    if (media.matches || !journey.current) return () => window.cancelAnimationFrame(frame)

    gsap.registerPlugin(ScrollTrigger)
    const context = gsap.context(() => {
      ScrollTrigger.create({
        trigger: journey.current,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          progress.current.value = self.progress
          const stage = self.progress < 0.16 ? -1 : self.progress < 0.38 ? 0 : self.progress < 0.63 ? 1 : self.progress < 0.87 ? 2 : -1
          setActiveStage((previous) => previous === stage ? previous : stage)
          if (visual.current) {
            const width = window.innerWidth
            const lift = Math.min(1, Math.max(0, (self.progress - 0.12) / 0.16))
            gsap.set(visual.current, {
              x: 0,
              y: width < 640 ? -window.innerHeight * 0.38 * lift : width < 1024 ? -window.innerHeight * 0.18 * lift : 0,
              opacity: 1 - Math.min(1, Math.max(0, (self.progress - 0.98) / 0.02)),
            })
          }
        },
      })
      gsap.fromTo("[data-distribution-enter]", { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.13, ease: "power2.out", delay: 0.14 })
      gsap.utils.toArray<HTMLElement>("[data-distribution-reveal]").forEach((element) => {
        gsap.fromTo(element, { opacity: 0, y: 32 }, { opacity: 1, y: 0, duration: 0.75, ease: "power2.out", scrollTrigger: { trigger: element, start: "top 85%", once: true } })
      })
    }, journey)
    return () => { window.cancelAnimationFrame(frame); context.revert() }
  }, [])

  return <section ref={journey} className="relative bg-[#07101d]" style={{ height: "560vh", minHeight: 3700 }}>
    <div className="sticky top-0 isolate h-dvh min-h-[640px] overflow-hidden bg-[radial-gradient(ellipse_at_75%_44%,#182b48_0%,#0b1525_38%,#05080d_85%)]">
      <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(#ffffff12_1px,transparent_1px),linear-gradient(90deg,#ffffff12_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_right,transparent,black)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/40 to-transparent" />
      <header className="absolute inset-x-0 top-0 z-30 px-5 pt-5 sm:px-8 lg:px-12">
        <nav aria-label="Navegación de distribución" className="mx-auto max-w-[1320px] border-b border-white/20">
          <div className="flex min-h-[74px] items-center justify-between gap-4">
            <Link href="/" className="inline-flex items-center gap-3 text-lg font-bold"><span className="grid size-10 place-items-center bg-white"><Image src="/images/devwolf-dv-emblem.png" alt="" width={34} height={34} className="size-9 object-contain" /></span><span>Devwolf<span className="block text-[9px] font-medium uppercase tracking-[.15em] text-white/50">Ingeniería & tecnología</span></span></Link>
            <div className="hidden items-center gap-8 lg:flex"><Link href="/" className="text-xs font-semibold uppercase tracking-[.14em] text-white/70 hover:text-[#FCA311]">Inicio</Link><Link href="#productos" className="text-xs font-semibold uppercase tracking-[.14em] text-white/70 hover:text-[#FCA311]">Productos</Link><Link href="/contacto" className="text-xs font-semibold uppercase tracking-[.14em] text-white/70 hover:text-[#FCA311]">Contacto</Link></div>
            <Link href="/contacto" className="hidden items-center gap-2 border border-white/40 px-5 py-3 text-xs font-bold uppercase tracking-[.12em] hover:border-[#FCA311] hover:bg-[#FCA311] hover:text-[#14213D] lg:inline-flex">Solicitar cotización <ArrowUpRight size={15} aria-hidden="true" /></Link>
            <button type="button" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen} aria-controls="distribution-mobile-menu" onClick={() => setMenuOpen((open) => !open)} className="grid size-11 place-items-center border border-white/30 lg:hidden">{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
          </div>
          {menuOpen && <div id="distribution-mobile-menu" className="space-y-1 border-t border-white/15 bg-[#101a31] p-3 lg:hidden"><Link href="/" className="block px-3 py-3" onClick={() => setMenuOpen(false)}>Inicio</Link><Link href="#productos" className="block px-3 py-3" onClick={() => setMenuOpen(false)}>Productos</Link><Link href="/contacto" className="block px-3 py-3" onClick={() => setMenuOpen(false)}>Contacto</Link></div>}
        </nav>
      </header>

      <div ref={visual} className={`${styles.visual} z-0`} aria-label="Recorrido tridimensional de un gabinete con RAM, tarjeta gráfica y procesador">
        <div className="pointer-events-none absolute inset-[12%] rounded-full bg-[#fca311]/10 blur-[90px]" />
        {show3D === false && <Image src="/images/distribucion/gaming-pc-fallback.webp" alt="Gabinete de computadora con memoria y tarjeta gráfica, imagen ilustrativa" fill priority sizes="(max-width: 1024px) 100vw, 65vw" className="object-contain" />}
        {show3D && !modelReady && <span className="absolute bottom-[18%] right-[18%] text-[10px] font-bold uppercase tracking-[.18em] text-white/35">Cargando vista 3D...</span>}
        {show3D && <GamingPcScene progress={progress} onReady={handleModelReady} />}
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#05080d] to-transparent" />
      <div className="absolute bottom-8 left-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.2em] text-white/45 sm:left-8 lg:left-12"><span className="h-px w-8 bg-[#FCA311]" /> Desliza para explorar <ArrowDown size={14} aria-hidden="true" /></div>
      <nav aria-label="Explorar componentes" className="absolute z-20 hidden items-center gap-2 lg:flex" style={{ left: 48, bottom: 78 }}>
        {highlights.map((item, index) => <a key={item.number} href={`#componente-${item.number}`} aria-current={activeStage === index ? "step" : undefined} className={`border-b px-2 py-2 text-[10px] font-bold uppercase tracking-[.14em] transition-colors ${activeStage === index ? "border-[#FCA311] text-[#FCA311]" : "border-white/25 text-white/55 hover:border-white hover:text-white"}`}>{item.number} {index === 0 ? "RAM" : index === 1 ? "GPU" : "CPU"}</a>)}
      </nav>
      <p className="absolute hidden text-[10px] uppercase tracking-[.15em] text-white/35 lg:block" style={{ right: 48, bottom: 32 }}>Visualización 3D referencial · disponibilidad a cotizar</p>
    </div>

    <div style={{ top: "18vh" }} className="pointer-events-none absolute inset-x-0 z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
      <div className="pointer-events-auto max-w-[620px]"><p data-distribution-enter className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[.22em] text-[#FCA311]"><span className="h-px w-9 bg-[#FCA311]" /> Suministro tecnológico</p><h1 data-distribution-enter className="text-[clamp(3rem,6.1vw,6.4rem)] font-semibold leading-[.98] tracking-[-.055em]">Cada componente <span className="text-[#FCA311]">cuenta.</span></h1><p data-distribution-enter className="mt-7 max-w-[510px] text-base leading-relaxed text-white/72 sm:text-lg">Recorre un equipo por dentro: memoria, potencia gráfica y procesamiento para tu próximo proyecto.</p><Link data-distribution-enter href="#productos" className="mt-9 inline-flex min-h-12 items-center gap-3 border-b border-[#FCA311] text-sm font-bold text-white hover:text-[#FCA311]">Explorar productos <ArrowDown size={17} aria-hidden="true" /></Link></div>
    </div>

    {highlights.map((item) => <div key={item.number} id={`componente-${item.number}`} data-distribution-reveal style={{ top: item.top }} className="pointer-events-none absolute inset-x-0 z-10 mx-auto max-w-[1320px] scroll-mt-28 px-5 sm:px-8 lg:px-12">
      <div className="pointer-events-auto w-full max-w-[480px] border-l-2 border-[#FCA311] p-5 backdrop-blur-sm sm:p-7" style={{ background: "rgba(7, 16, 29, 0.94)" }}>
        <p className="text-xs font-bold uppercase tracking-[.22em] text-[#FCA311]">{item.number} / {item.eyebrow}</p>
        <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-.04em] sm:text-5xl">{item.title}</h2>
        <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">{item.text}</p>
        <div className="mt-5 flex items-center gap-4 border-y border-white/15 py-3"><div className="relative flex shrink-0 items-center justify-center overflow-hidden bg-[#152238]" style={{ width: 112, height: 64 }}>{item.image ? <Image src={item.image} alt={item.alt} fill sizes="112px" className="object-cover" /> : <Cpu size={30} className="text-[#FCA311]" aria-hidden="true" />}</div><p className="text-xs leading-relaxed text-white/50">Opciones ilustrativas.<br />Catálogo en preparación.</p></div>
        <Link href="/contacto" className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.12em] text-[#FCA311] hover:text-white">{item.cta} <ArrowUpRight size={16} aria-hidden="true" /></Link>
      </div>
    </div>)}

    <div data-distribution-reveal style={{ top: "455vh" }} className="pointer-events-none absolute inset-x-0 z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12"><div className="border-l-2 border-[#FCA311] p-5 backdrop-blur-sm sm:p-7" style={{ background: "rgba(7, 16, 29, 0.94)", maxWidth: 520 }}><p className="text-xs font-bold uppercase tracking-[.22em] text-[#FCA311]">04 / Más que componentes</p><h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-.04em] sm:text-5xl">Equipamos el proyecto completo.</h2><p className="mt-5 text-sm leading-relaxed text-white/70 sm:text-base">También podemos ayudarte con pantallas, periféricos, materiales eléctricos y herramientas técnicas.</p><Link href="#productos" className="pointer-events-auto mt-6 inline-flex items-center gap-2 border-b border-[#FCA311] pb-2 text-xs font-bold uppercase tracking-[.12em] text-white hover:text-[#FCA311]">Ver líneas de producto <ArrowDown size={16} aria-hidden="true" /></Link></div></div>
  </section>
}
