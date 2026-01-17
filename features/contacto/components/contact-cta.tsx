import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function ContactCTA() {
  return (
    <section className="py-20 bg-background text-foreground border-t border-border">
      <div className="container mx-auto px-4 text-center flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl tracking-tight mb-4 text-balance font-light">
          ¿Listo para tu próximo proyecto?
        </h2>
        <p className="text-lg text-foreground/75 mb-10 max-w-2xl mx-auto leading-relaxed">
          Contáctanos para coordinar una visita técnica o solicitar una cotización personalizada.
        </p>

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
              Contactar ahora
            </p>
          </button>
        </Link>
      </div>
    </section>
  )
}
