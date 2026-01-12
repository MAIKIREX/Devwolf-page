import { Card } from "@/components/ui/card"
import { MapPin } from "lucide-react"

export function NosotrosCoverageSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">Cobertura Geográfica</h2>
          </div>

          <Card className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div
                  className="w-full h-64 bg-cover bg-center rounded-lg"
                  style={{ backgroundImage: "url(/images/mapa1.png)" }}
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-heading text-xl font-semibold text-secondary mb-3">Cobertura Nacional</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Cobertura en <span className="font-semibold text-foreground">Bolivia</span>. Sin costos de
                    transporte de material y personal en <span className="font-semibold text-foreground">La Paz</span>.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-secondary mb-3">Otros Departamentos</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    En otros departamentos: coordinación previa sujeta a gastos de transporte de material y{" "}
                    <span className="font-semibold text-foreground">viáticos</span> del personal.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
