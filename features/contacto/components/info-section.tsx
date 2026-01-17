import { Card } from "@/components/ui/card"
import { Building2, Clock, Mail, Phone } from "lucide-react"

export function ContactoInfoSection() {
  return (
    <section className="py-20 bg-black text-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-6xl text-white font-light tracking-tight mb-4">
            Información de Contacto
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Estamos disponibles para atender tus consultas y proyectos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="group relative overflow-hidden rounded-2xl  bg-[#0B1222] p-6 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
            
            <div className="relative">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-border bg-background/40">
                <Building2 className="h-7 w-7 text-foreground" />
              </div>
              <h3 className="text-lg tracking-tight mb-2 font-light">Empresa</h3>
              <p className="text-foreground/70 text-sm">Devwolf INGENIERÍA & TECNOLOGÍA</p>
              <p className="text-foreground/70 text-sm mt-2">NIT: 680646031</p>
            </div>
          </Card>

          <Card className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
            <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 bg-gradient-to-b from-foreground/[0.06] to-transparent" />
            <div className="relative">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-border bg-background/40">
                <Phone className="h-7 w-7 text-foreground" />
              </div>
              <h3 className="text-lg tracking-tight mb-2 font-light">WhatsApp / Celular</h3>
              <a href="https://wa.me/59178855457" className="text-foreground hover:underline font-medium">
                78855457
              </a>
            </div>
          </Card>

          <Card className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
            <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 bg-gradient-to-b from-foreground/[0.06] to-transparent" />
            <div className="relative">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-border bg-background/40">
                <Mail className="h-7 w-7 text-foreground" />
              </div>
              <h3 className="text-lg tracking-tight mb-2 font-light">Email</h3>
              <a
                href="mailto:innova.ingenieriaytecnologia@gmail.com"
                className="text-foreground hover:underline text-sm break-all"
              >
                innova.ingenieriaytecnologia@gmail.com
              </a>
            </div>
          </Card>

          <Card className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
            <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 bg-gradient-to-b from-foreground/[0.06] to-transparent" />
            <div className="relative">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-border bg-background/40">
                <Clock className="h-7 w-7 text-foreground" />
              </div>
              <h3 className="text-lg tracking-tight mb-2 font-light">Horario</h3>
              <p className="text-foreground/70 text-sm">Lun–Vie</p>
              <p className="text-foreground text-sm font-medium">8:00–17:00</p>
              <p className="text-foreground/60 text-xs mt-2">Fines de semana con coordinación</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
