import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ContactCTA() {
  return (
    <section className="py-20 bg-primary/95 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-balance">
          ¿Listo para tu próximo proyecto?
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Contáctanos para coordinar una visita técnica o solicitar una cotización personalizada.
        </p>
        <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8">
          <Link href="/contacto">Contactar ahora</Link>
        </Button>
      </div>
    </section>
  )
}
