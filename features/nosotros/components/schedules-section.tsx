import { Card } from "@/components/ui/card"
import { CheckCircle2, Clock } from "lucide-react"

export function NosotrosSchedulesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Clock className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
              Modalidades de Trabajo y Horarios
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="font-heading text-2xl font-semibold text-secondary mb-6">Modalidades de Servicio</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">
                    Visitas técnicas <span className="font-semibold text-foreground">sin compromiso</span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Cotización oportuna</span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">
                    Contratación por el servicio / <span className="font-semibold text-foreground">orden de compra</span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">
                    Servicios de <span className="font-semibold text-foreground">ingeniería aplicada</span> al diseño y
                    control de proyectos
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Suministro de materiales o equipos</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">
                    Instalación, configuración de equipos o mantenimiento
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Pruebas y puesta en marcha en un tiempo oportuno</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="font-heading text-2xl font-semibold text-secondary mb-6">Horarios de Atención</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="h-6 w-6 text-primary" />
                    <h4 className="font-semibold text-lg text-foreground">Horario Regular</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Actividades en{" "}
                    <span className="font-semibold text-foreground">horario de oficina 8:00–17:00 (Lun–Vie)</span>,
                    garantizando disponibilidad del equipo técnico y administrativo.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="h-6 w-6 text-accent" />
                    <h4 className="font-semibold text-lg text-foreground">Horario Extendido</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Posibilidad de atención{" "}
                    <span className="font-semibold text-foreground">fuera de horario y fines de semana</span> con costo
                    adicional, previa coordinación.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
