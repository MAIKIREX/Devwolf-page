export function NosotrosHeroSection() {
  return (
    <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/placeholder.svg?height=600&width=1920&query=professional engineering team)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/70" />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">Quiénes somos</h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
          Soluciones integrales en construcción, instalaciones eléctricas, redes, software e impresión 3D
        </p>
      </div>
    </section>
  )
}
