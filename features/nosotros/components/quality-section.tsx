import { CheckCircle2, Shield } from "lucide-react"

export function NosotrosQualitySection() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Shield className="h-12 w-12 mx-auto mb-4" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Compromisos de Calidad y Seguridad</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Estándares que garantizan la excelencia en cada proyecto
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <CheckCircle2 className="h-10 w-10 mx-auto mb-4" />
            <h3 className="font-heading text-xl font-semibold mb-3">Cumplimiento Normativo</h3>
            <p className="text-white/80">Adherencia estricta a normativas y buenas prácticas de instalación</p>
          </div>

          <div className="text-center">
            <CheckCircle2 className="h-10 w-10 mx-auto mb-4" />
            <h3 className="font-heading text-xl font-semibold mb-3">Seguridad Operacional</h3>
            <p className="text-white/80">Protección de activos y seguridad ocupacional en todas las operaciones</p>
          </div>

          <div className="text-center">
            <CheckCircle2 className="h-10 w-10 mx-auto mb-4" />
            <h3 className="font-heading text-xl font-semibold mb-3">Trazabilidad Total</h3>
            <p className="text-white/80">Documentación completa de materiales y cambios relevantes del proyecto</p>
          </div>
        </div>
      </div>
    </section>
  )
}
