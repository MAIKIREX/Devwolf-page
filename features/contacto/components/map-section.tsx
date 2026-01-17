import { Card } from "@/components/ui/card"
import { MapPin } from "lucide-react"

export function ContactoMapSection() {
  return (
    <section className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <MapPin className="h-10 w-10 mx-auto mb-4 text-foreground" />
            <h2 className="text-3xl md:text-6xl font-light tracking-tight mb-2">
              Ubicación y Cobertura
            </h2>
            <div className="mx-auto mt-6 h-px w-24 bg-border" />
          </div>

          <Card className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
            <div className="relative w-full h-[22rem] md:h-[26rem]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url(/images/mapa1.png)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-transparent to-transparent dark:from-background/65" />
            </div>

            <div className="p-6 md:p-10">
              <p className="text-center text-lg text-foreground/75 leading-relaxed">
                Atendemos proyectos en todo el país.{" "}
                <span className="font-semibold text-foreground">Sin costos de transporte en La Paz</span>; otros
                departamentos sujetos a coordinación y viáticos.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
