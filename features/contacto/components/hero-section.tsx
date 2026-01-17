export function ContactoHeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background pt-10 md:pt-20">
      <div className="relative z-10 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex min-h-[42svh] items-end pb-14 pt-14 md:min-h-[48svh] md:pb-16">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-9xl text-white font-light tracking-tight">
                Contacto
              </h1>
              <p className="mt-4 max-w-3xl text-lg md:text-2xl text-white/80 leading-relaxed">
                Coordinemos una visita técnica o solicita una cotización personalizada
              </p>

              {/* Hairline divider */}
              <div className="mt-8 h-px w-32 bg-border/80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
