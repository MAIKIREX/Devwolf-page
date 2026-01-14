import { Button } from "@/components/ui/button"
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

          <h2 className="font-heading text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            ¿Quieres conocer más sobre nuestros procesos y entregables?
          </h2>

          <p className="mt-5 text-base md:text-lg text-white/85 leading-relaxed">
            Agenda una visita técnica sin compromiso y descubre cómo podemos ayudarte.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="h-12 px-8 text-base font-semibold shadow-lg shadow-black/15 hover:shadow-xl transition-shadow"
            >
              <Link href="/contacto">Agendar visita</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
