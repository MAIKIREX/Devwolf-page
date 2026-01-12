import { Card } from "@/components/ui/card"

export function NosotrosMethodologySection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">Metodología de Trabajo</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un proceso estructurado que garantiza resultados de calidad en cada etapa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-heading text-xl font-bold text-primary">1</span>
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-secondary mb-2">Levantamiento Técnico</h3>
                <p className="text-muted-foreground">
                  Diagnóstico detallado en sitio para entender las necesidades del proyecto
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-heading text-xl font-bold text-primary">2</span>
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-secondary mb-2">Propuesta Técnico-Económica</h3>
                <p className="text-muted-foreground">
                  Alcance definido, cronograma detallado y lista completa de materiales
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-heading text-xl font-bold text-primary">3</span>
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-secondary mb-2">Ejecución Controlada</h3>
                <p className="text-muted-foreground">
                  Control de calidad, seguridad y aplicación de buenas prácticas
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-heading text-xl font-bold text-primary">4</span>
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-secondary mb-2">Condiciones de Pago</h3>
                <p className="text-muted-foreground">Modalidades flexibles sujetas a coordinación entre las partes</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-heading text-xl font-bold text-primary">5</span>
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-secondary mb-2">Cierre y Postventa</h3>
                <p className="text-muted-foreground">
                  Pruebas finales, entrega de manuales y recomendaciones de mantenimiento
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
