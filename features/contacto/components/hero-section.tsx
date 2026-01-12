export function ContactoHeroSection() {
  return (
    <section className="relative h-[30vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/placeholder.svg?height=400&width=1920&query=modern technology city)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/70" />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">Contacto</h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
          Coordinemos una visita técnica o solicita una cotización personalizada
        </p>
      </div>
    </section>
  )
}
