export function NosotrosCompanySection() {
  return (
    <section className="pt-20 grid items-center bg-white">
      <div className="container mx-auto px-4">
        <div className=" mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl md:text-8xl text-black font-light">Nuestra Empresa</h2>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 space-y-6 text-lg text-muted-black leading-relaxed">
            <p className="text-black/80">
              <span className="font-semibold text-black">Devwolf INGENIERÍA & TECNOLOGÍA</span> es una empresa
              boliviana orientada a la provisión de{" "}
              <span className="font-semibold text-black">soluciones integrales</span> que abarcan todo el ciclo del
              proyecto: relevamiento, cotización, ingeniería integral, suministro de materiales/equipos, instalación,
              configuración de equipos, mantenimiento,{" "}
              <span className="font-semibold text-black">pruebas y puesta en marcha</span>.
            </p>
            <p className="text-black/80">
              Nuestro trabajo se basa en la{" "}
              <span className="font-semibold text-black">planificación rigurosa</span>,{" "}
              <span className="font-semibold text-black">cumplimiento normativo</span>,{" "}
              <span className="font-semibold text-black">seguridad operativa</span> y{" "}
              <span className="font-semibold text-black">acompañamiento postventa</span>, aportando eficiencia y
              valor a cada proyecto.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
