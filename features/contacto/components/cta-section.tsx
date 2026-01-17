import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ContactoCtaSection() {
  return (
    <section className="py-20 bg-background text-foreground border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-6xl font-light tracking-tight mb-6">
          ¿Listo para iniciar tu proyecto con Devwolf?
        </h2>
        <p className="text-xl text-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed">
          Obtén una cotización personalizada y descubre cómo podemos ayudarte
        </p>

        <Button
          asChild
          size="lg"
          variant="outline"
          className="rounded-full px-8 py-6 text-base md:text-lg border-border bg-transparent hover:bg-foreground hover:text-background transition-colors"
        >
          <Link href="#formulario">Solicitar cotización</Link>
        </Button>
      </div>
    </section>
  )
}
