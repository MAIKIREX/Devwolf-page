export function ConstruccionHeroSection() {
  return (
    <section className="relative h-[40vh] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/construction-site-renovation-modern-building.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="relative z-20 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Construcción y Obra Liviana</h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">
          Refacciones, remodelaciones y acabados profesionales para tu espacio
        </p>
      </div>
    </section>
  )
}
