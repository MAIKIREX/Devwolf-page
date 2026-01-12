import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Impresion3DCtaSection() {
  return (
    <section className="py-20 bg-primary/90">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
          ¿Tienes un proyecto de impresión 3D en mente?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Contáctanos y recibe una propuesta personalizada adaptada a tus necesidades
        </p>
        <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
          <Link href="/contacto">Solicitar cotización</Link>
        </Button>
      </div>
    </section>
  )
}
