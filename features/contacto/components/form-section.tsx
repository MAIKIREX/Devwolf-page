"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Send } from "lucide-react"

export function ContactoFormSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    servicio: "",
    mensaje: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock submission - ready for backend integration
    console.log("Form submitted:", formData)
    alert("Mensaje enviado correctamente. Nos pondremos en contacto pronto.")
    setFormData({
      nombre: "",
      empresa: "",
      email: "",
      telefono: "",
      servicio: "",
      mensaje: "",
    })
  }

  const whatsappMessage = `Hola, soy ${formData.nombre || "[Nombre]"}. Me interesa ${formData.servicio || "[Servicio]"}`
  const whatsappLink = `https://wa.me/59178855457?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">Envíanos un Mensaje</h2>
            <p className="text-lg text-muted-foreground">
              Completa el formulario y nos pondremos en contacto contigo a la brevedad
            </p>
          </div>

          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-2">
                    Nombre y Apellido <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="nombre"
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    placeholder="Juan Pérez"
                  />
                </div>

                <div>
                  <label htmlFor="empresa" className="block text-sm font-medium text-foreground mb-2">
                    Empresa (opcional)
                  </label>
                  <Input
                    id="empresa"
                    type="text"
                    value={formData.empresa}
                    onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                    placeholder="Mi Empresa S.A."
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="juan@ejemplo.com"
                  />
                </div>

                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-foreground mb-2">
                    Teléfono <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="telefono"
                    type="tel"
                    required
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    placeholder="78855457"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="servicio" className="block text-sm font-medium text-foreground mb-2">
                  Servicio de Interés <span className="text-destructive">*</span>
                </label>
                <Select
                  required
                  value={formData.servicio}
                  onValueChange={(value) => setFormData({ ...formData, servicio: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un servicio" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Construcción">Construcción</SelectItem>
                    <SelectItem value="Instalaciones Eléctricas">Instalaciones Eléctricas</SelectItem>
                    <SelectItem value="Redes & Telecomunicaciones">Redes & Telecomunicaciones</SelectItem>
                    <SelectItem value="Distribución de Equipos">Distribución de Equipos</SelectItem>
                    <SelectItem value="Software & DevOps">Software & DevOps</SelectItem>
                    <SelectItem value="Impresión 3D">Impresión 3D</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-2">
                  Mensaje <span className="text-destructive">*</span>
                </label>
                <Textarea
                  id="mensaje"
                  required
                  rows={6}
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  placeholder="Cuéntanos sobre tu proyecto o consulta..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button type="submit" size="lg" className="flex-1">
                  <Send className="h-5 w-5 mr-2" />
                  Enviar mensaje
                </Button>
                <Button type="button" size="lg" variant="outline" className="flex-1 bg-transparent" asChild>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Phone className="h-5 w-5 mr-2" />
                    Contactar por WhatsApp
                  </a>
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
