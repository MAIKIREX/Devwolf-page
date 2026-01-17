import { CheckCircle2, Shield } from "lucide-react"

export function NosotrosQualitySection() {
  return (
    <section className="py-20 bg-white text-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Shield className="h-12 w-12 mx-auto mb-4 text-black" />
          <h2 className="text-3xl text-black md:text-4xl mb-4 font-light">Compromisos de Calidad y Seguridad</h2>
          <p className="text-xl text-black/90 max-w-2xl mx-auto">
            Estándares que garantizan la excelencia en cada proyecto
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <CheckCircle2 className="h-10 w-10 mx-auto mb-4 text-black " />
            <h3 className="text-xl mb-3 text-black font-light">Cumplimiento Normativo</h3>
            <p className="text-black/80">Adherencia estricta a normativas y buenas prácticas de instalación</p>
          </div>

          <div className="text-center">
            <CheckCircle2 className="h-10 w-10 mx-auto mb-4 text-black" />
            <h3 className="text-xl mb-3 text-black font-light">Seguridad Operacional</h3>
            <p className="text-black/80">Protección de activos y seguridad ocupacional en todas las operaciones</p>
          </div>

          <div className="text-center">
            <CheckCircle2 className="h-10 w-10 mx-auto mb-4 text-black" />
            <h3 className="text-xl mb-3 text-black font-light">Trazabilidad Total</h3>
            <p className="text-black/80">Documentación completa de materiales y cambios relevantes del proyecto</p>
          </div>
        </div>
      </div>
    </section>
  )
}
