import { Card } from "@/components/ui/card"
import { MapPin } from "lucide-react"

export function ContactoMapSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">Ubicación y Cobertura</h2>
          </div>

          <Card className="overflow-hidden">
            <div
              className="w-full h-96 bg-cover bg-center"
              style={{ backgroundImage: "url(/images/mapa1.png)" }}
            />
            <div className="p-8 bg-muted/30">
              <p className="text-center text-lg text-muted-foreground leading-relaxed">
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
