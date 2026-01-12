import { Card } from "@/components/ui/card"
import { Building2, Clock, Mail, Phone } from "lucide-react"

export function ContactoInfoSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">Información de Contacto</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos disponibles para atender tus consultas y proyectos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Building2 className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-secondary mb-2">Empresa</h3>
            <p className="text-muted-foreground text-sm">Devwolf INGENIERÍA & TECNOLOGÍA</p>
            <p className="text-muted-foreground text-sm mt-2">NIT: 680646031</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-secondary mb-2">WhatsApp / Celular</h3>
            <a href="https://wa.me/59178855457" className="text-primary hover:underline font-medium">
              78855457
            </a>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-secondary mb-2">Email</h3>
            <a
              href="mailto:innova.ingenieriaytecnologia@gmail.com"
              className="text-primary hover:underline text-sm break-all"
            >
              innova.ingenieriaytecnologia@gmail.com
            </a>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-secondary mb-2">Horario</h3>
            <p className="text-muted-foreground text-sm">Lun–Vie</p>
            <p className="text-muted-foreground text-sm font-medium">8:00–17:00</p>
            <p className="text-muted-foreground text-xs mt-2">Fines de semana con coordinación</p>
          </Card>
        </div>
      </div>
    </section>
  )
}
