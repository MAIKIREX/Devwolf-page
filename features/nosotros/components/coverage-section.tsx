import { Card } from "@/components/ui/card"
import { MapPin } from "lucide-react"

export function NosotrosCoverageSection() {
  return (
    <section className="py-20 bg-background min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h2 className="text-3xl md:text-6xl text-white mb-4 dark:text-foreground font-light">Cobertura Geográfica</h2>
          </div>

          <Card className="p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div
                  className="w-full h-64 bg-cover bg-center rounded-lg"
                  style={{ backgroundImage: "url(/images/mapa1.png)" }}
                />
              </div>
              
              <div className="space-y-4 px-4 py-4 border-t-2 md:border-l-2 md:border-t-0 border-primary ">
                <div>
                  <h3 className="text-xl text-white/80 mb-3 dark:text-foreground font-light">Cobertura Nacional</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Cobertura en <span className="font-semibold text-foreground">Bolivia</span>. Sin costos de
                    transporte de material y personal en <span className="font-semibold text-foreground">La Paz</span>.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl text-white/80 mb-3 dark:text-foreground font-light">Otros Departamentos</h3>
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
