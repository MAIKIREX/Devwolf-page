import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function ContactCTA() {
  return (
    <section className="py-20 bg-white text-black">
      <div className="container mx-auto px-4 text-center flex flex-col item-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-balance">
          ¿Listo para tu próximo proyecto?
        </h2>
        <p className="text-lg text-black/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Contáctanos para coordinar una visita técnica o solicitar una cotización personalizada.
        </p>
        <Link href="/contacto" className="mx-auto">
          <button
        type="button"
        className="group flex cursor-pointer items-center gap-3 rounded-3xl bg-gray-300 px-4 py-3 text-black transition-all duration-200 ease-in-out hover:scale-x-105 hover:bg-[#162340]"
      >
        <div className="size-2 rounded-full bg-black transition-all duration-200 ease-in-out group-hover:flex group-hover:size-7 group-hover:items-center group-hover:justify-center group-hover:bg-amber-50">
          <span className="hidden transition-all duration-200 ease-in-out group-hover:flex group-hover:text-xl">
            <ArrowRight className="transition-transform duration-200 group-active:-rotate-45" />
          </span>
        </div>

        <p className="transition-all duration-200 ease-in-out group-hover:font-semibold group-hover:text-white group-active:[text-shadow:0_0_2px_rgba(255,255,255,0.9),0_0_10px_rgba(255,255,255,0.75),0_0_18px_rgba(245,158,11,0.65)]">
          Contactar ahora
        </p>
      </button>

        </Link>
      </div>
    </section>
  )
}
