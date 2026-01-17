import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function NosotrosCtaSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-24 bg-primary text-white h-screen flex items-center">
      {/* Decoración suave */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 size-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 size-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.16),transparent_55%)]" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm text-white/90 backdrop-blur">
            Procesos claros · Entregables medibles · Resultados
          </p>

          <h2 className="text-3xl md:text-5xl leading-tight tracking-tight font-light">
            ¿Quieres conocer más sobre nuestros procesos y entregables?
          </h2>

          <p className="mt-5 text-base md:text-lg text-white/85 leading-relaxed">
            Agenda una visita técnica sin compromiso y descubre cómo podemos ayudarte.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contacto" className="mx-auto">
          <button
            type="button"
            className="group flex cursor-pointer items-center gap-3 rounded-full border border-border bg-card px-5 py-3 text-foreground shadow-sm transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-md hover:bg-foreground hover:text-background"
          >
            <div className="size-2 rounded-full bg-foreground transition-all duration-200 ease-in-out group-hover:flex group-hover:size-8 group-hover:items-center group-hover:justify-center group-hover:bg-background">
              <span className="hidden transition-all duration-200 ease-in-out group-hover:flex group-hover:text-xl">
                <ArrowRight className="transition-transform duration-200 group-active:-rotate-45 text-white" />
              </span>
            </div>

            <p className="transition-all duration-200 ease-in-out group-hover:font-semibold">
              Agendar una visita
            </p>
          </button>
        </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
