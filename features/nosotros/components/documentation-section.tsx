import { Card } from "@/components/ui/card"
import { CheckCircle2, FileText } from "lucide-react"

export function NosotrosDocumentationSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <FileText className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
            Documentación y Entregables
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Documentación técnica completa para cada proyecto
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-secondary mb-3">Memoria Técnica</h3>
            <p className="text-muted-foreground">
              Memoria técnica resumida, planos/as-built básicos y lista detallada de materiales
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-secondary mb-3">Certificados y Reportes</h3>
            <p className="text-muted-foreground">
              Certificados de equipos y reportes de pruebas (medición de puesta a tierra, etc.)
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-secondary mb-3">Manuales de Usuario</h3>
            <p className="text-muted-foreground">
              Documentación completa para operación y mantenimiento de sistemas instalados
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
