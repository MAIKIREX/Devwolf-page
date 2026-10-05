import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, Check, Cpu, HardDrive, Headphones, Monitor, PackageCheck, Zap } from "lucide-react"
import { DistributionExperience } from "@/features/services/components/distribucion-equipos/distribution-experience"

export const metadata: Metadata = {
  title: "Distribución de equipos | Devwolf",
  description: "Suministro de equipos informáticos, componentes, periféricos y materiales técnicos con asesoría para elegir la solución adecuada.",
}

const categories = [
  { number: "01", title: "Pantallas y monitores", detail: "Visualización para estaciones de trabajo y espacios profesionales.", image: "/images/distribucion/monitor.webp", icon: Monitor },
  { number: "02", title: "Teclados y periféricos", detail: "Accesorios que completan una experiencia de trabajo eficiente.", image: "/images/distribucion/teclado.webp", icon: Headphones },
  { number: "03", title: "Memorias RAM", detail: "Componentes para ampliar y optimizar equipos compatibles.", image: "/images/distribucion/memoria.webp", icon: Cpu },
  { number: "04", title: "Almacenamiento SSD", detail: "Opciones de almacenamiento para distintos flujos de trabajo.", image: "/images/distribucion/ssd.webp", icon: HardDrive },
]

const supply = [
  { icon: Cpu, title: "Equipos IT", text: "Computadoras, componentes, almacenamiento y periféricos." },
  { icon: Zap, title: "Material eléctrico", text: "Insumos y componentes para proyectos e instalaciones." },
  { icon: PackageCheck, title: "Herramientas técnicas", text: "Equipamiento para tareas de obra y mantenimiento." },
  { icon: Check, title: "Asesoría y soporte", text: "Orientación para seleccionar e integrar lo que necesitas." },
]

const steps = [
  { n: "01", title: "Cuéntanos qué buscas", text: "Revisamos el uso previsto, las especificaciones y las cantidades." },
  { n: "02", title: "Evaluamos opciones", text: "Contrastamos compatibilidad, alternativas y disponibilidad." },
  { n: "03", title: "Coordinamos la entrega", text: "Definimos condiciones de suministro y acompañamiento técnico." },
]

export default function DistributionPage() {
  return (
    <main className="overflow-x-clip bg-[#05080d] text-white">
      <DistributionExperience />

      <section id="productos" className="relative px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid items-end gap-8 border-t border-white/15 pt-9 md:grid-cols-[1.2fr_.8fr]">
            <div><p className="mb-5 text-xs font-bold uppercase tracking-[.24em] text-[#FCA311]">05 / Explora posibilidades</p><h2 className="max-w-[780px] text-4xl font-semibold leading-[1.06] tracking-[-.05em] sm:text-5xl lg:text-6xl">Tecnología para cada <span className="text-[#FCA311]">necesidad.</span></h2></div>
            <p className="max-w-[430px] text-sm leading-relaxed text-white/60 md:justify-self-end sm:text-base">Una selección visual de las líneas de producto que podemos ayudarte a encontrar. Nuestro catálogo detallado está en preparación.</p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16">
            {categories.map((category) => {
              const Icon = category.icon
              return <article key={category.number} className="group relative isolate flex min-h-[390px] flex-col justify-between overflow-hidden border border-white/10 bg-[#0c1422] p-6 sm:min-h-[460px] sm:p-8">
                <Image src={category.image} alt={`Imagen referencial de ${category.title.toLowerCase()}`} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#02050a] via-[#02050a]/10 to-[#02050a]/15" />
                <div className="relative flex items-start justify-between gap-4"><span className="text-xs font-bold tracking-[.2em] text-[#FCA311]">{category.number} / 04</span><Icon className="text-white/70" size={21} aria-hidden="true" /></div>
                <div className="relative max-w-[420px]"><h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{category.title}</h3><p className="mt-2 max-w-[330px] text-sm leading-relaxed text-white/70">{category.detail}</p></div>
              </article>
            })}
          </div>
          <p className="mt-5 text-xs text-white/40">Imágenes ilustrativas. Modelos, marcas, características y disponibilidad se confirman al cotizar.</p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0c1423] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1240px] gap-16 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
          <div><p className="mb-5 text-xs font-bold uppercase tracking-[.24em] text-[#FCA311]">06 / Más que suministro</p><h2 className="text-4xl font-semibold leading-[1.08] tracking-[-.045em] sm:text-5xl">El equipo correcto, <span className="text-[#FCA311]">bien elegido.</span></h2><p className="mt-7 max-w-[480px] leading-relaxed text-white/65">Nos cuentas qué necesitas y evaluamos contigo las especificaciones, compatibilidad y opciones de suministro antes de preparar una propuesta.</p></div>
          <div className="grid gap-px bg-white/10 sm:grid-cols-2">{supply.map((item) => { const Icon = item.icon; return <div key={item.title} className="bg-[#0c1423] p-7 sm:p-9"><Icon size={25} className="text-[#FCA311]" aria-hidden="true" /><h3 className="mt-9 text-xl font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-white/55">{item.text}</p></div> })}</div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-36"><div className="mx-auto max-w-[1240px]"><p className="mb-5 text-xs font-bold uppercase tracking-[.24em] text-[#FCA311]">07 / Cómo trabajamos</p><h2 className="max-w-[700px] text-4xl font-semibold leading-[1.08] tracking-[-.045em] sm:text-5xl">De tu requerimiento a una <span className="text-[#FCA311]">propuesta clara.</span></h2><div className="mt-14 grid gap-8 border-t border-white/15 md:grid-cols-3 md:gap-12">{steps.map((step) => <div key={step.n} className="border-b border-white/15 py-7 md:border-b-0 md:pt-8"><span className="text-xs font-bold tracking-[.18em] text-[#FCA311]">{step.n}</span><h3 className="mt-7 text-xl font-semibold">{step.title}</h3><p className="mt-3 max-w-[310px] text-sm leading-relaxed text-white/55">{step.text}</p></div>)}</div></div></section>

      <section className="relative overflow-hidden bg-[#FCA311] px-5 py-24 text-[#14213D] sm:px-8 lg:px-12 lg:py-32"><div className="pointer-events-none absolute -right-16 -top-44 text-[440px] font-black leading-none tracking-[-.15em] text-[#14213D]/5" aria-hidden="true">D</div><div className="relative mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-10 lg:flex-row lg:items-end"><div><p className="mb-5 text-xs font-bold uppercase tracking-[.24em]">Hablemos de equipamiento</p><h2 className="max-w-[800px] text-4xl font-semibold leading-[1.04] tracking-[-.05em] sm:text-5xl lg:text-6xl">¿Listo para equipar tu próximo proyecto?</h2><p className="mt-6 max-w-[530px] text-base leading-relaxed text-[#14213D]/75">Escríbenos los productos o especificaciones que necesitas y preparemos una propuesta a tu medida.</p></div><Link href="/contacto" className="inline-flex min-h-14 shrink-0 items-center gap-4 bg-[#14213D] px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-black">Solicitar cotización <ArrowUpRight size={19} aria-hidden="true" /></Link></div></section>

      <footer className="border-t border-white/10 px-5 py-9 sm:px-8 lg:px-12"><div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-5 text-xs text-white/50 sm:flex-row sm:items-center"><Link href="/" className="inline-flex items-center gap-2 font-semibold text-white"><Image src="/images/devwolf-dv-emblem.png" alt="" width={28} height={28} className="size-7 object-contain" />Devwolf · Ingeniería & Tecnología</Link><span>La Paz, Bolivia · © {new Date().getFullYear()}</span><Link href="/contacto" className="inline-flex items-center gap-2 text-white/75 hover:text-[#FCA311]">Contacto <ArrowRight size={14} aria-hidden="true" /></Link></div></footer>
    </main>
  )
}
