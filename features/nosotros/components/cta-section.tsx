import { Button } from "@/components/ui/button"
import Link from "next/link"

export function NosotrosCtaSection() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
          ¿Quieres conocer más sobre nuestros procesos y entregables?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Agenda una visita técnica sin compromiso y descubre cómo podemos ayudarte
        </p>
        <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
          <Link href="/contacto">Agendar visita</Link>
        </Button>
      </div>
    </section>
  )
}
