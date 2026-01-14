import { Users } from "lucide-react"

export function NosotrosCompanySection() {
  return (
    <section className="py-20 h-screen grid items-center bg-[#14203B]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Users className="h-8 w-8 text-primary" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary dark:text-foreground">Nuestra Empresa</h2>
          </div>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              <span className="font-semibold text-foreground">Devwolf INGENIERÍA & TECNOLOGÍA</span> es una empresa
              boliviana orientada a la provisión de{" "}
              <span className="font-semibold text-foreground">soluciones integrales</span> que abarcan todo el ciclo del
              proyecto: relevamiento, cotización, ingeniería integral, suministro de materiales/equipos, instalación,
              configuración de equipos, mantenimiento,{" "}
              <span className="font-semibold text-foreground">pruebas y puesta en marcha</span>.
            </p>
            <p>
              Nuestro trabajo se basa en la{" "}
              <span className="font-semibold text-foreground">planificación rigurosa</span>,{" "}
              <span className="font-semibold text-foreground">cumplimiento normativo</span>,{" "}
              <span className="font-semibold text-foreground">seguridad operativa</span> y{" "}
              <span className="font-semibold text-foreground">acompañamiento postventa</span>, aportando eficiencia y
              valor a cada proyecto.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
