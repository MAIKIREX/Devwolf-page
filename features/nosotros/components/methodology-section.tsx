import StickySplitScroll from "@/components/scroll/StickySplitScroll"
import { Card } from "@/components/ui/card"
import { CierreYPostventaIconLoop } from "@/public/icons/CierreYPostventaIconLoop"
import { CondicionesDePagoIconLoop } from "@/public/icons/CondicionesDePagoIconLoop"
import { EjecucionControladaIconLoop } from "@/public/icons/EjecucionControladaIconLoop"
import { LevantamientoTecnicoIconLoop } from "@/public/icons/LevantamientoTecnicoIcon"
import { PropuestaTecnicoEconomicaIconLoop } from "@/public/icons/PropuestaTecnicoEconomicaIconLoop"

export function NosotrosMethodologySection() {
  return (
    <section className="py-20 bg-black ">
      <div className="container mx-auto px-4 ">
        <StickySplitScroll left={
          <div className="text-center mb-12">
          <h2 className="text-3xl md:text-6xl font-light text-white mb-4">Metodología de Trabajo</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un proceso estructurado que garantiza resultados de calidad en cada etapa
          </p>
        </div>
          
        }
        spring={{ stiffness: 140, damping: 26 }}>
          <Card className="p-6 hover:shadow-lg transition-shadow h-screen bg-black/80">
            <div className="flex flex-col justify-center items-center h-full gap-4">
              <div className="flex justify-center w-full">
                <LevantamientoTecnicoIconLoop className="size-[200px] text-primary" />
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-xl font-bold text-white/80">1</span>
                </div>
                <div>
                  <h3 className="text-3xl text-white mb-2 font-light">Levantamiento Técnico</h3>
                  <p className="text-muted-foreground">
                    Diagnóstico detallado en sitio para entender las necesidades del proyecto
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow h-screen bg-black/80">
            <div className="flex flex-col justify-center items-center h-full gap-4">
              <div className="flex justify-center w-full">
                <PropuestaTecnicoEconomicaIconLoop className="size-[200px] text-primary" />
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-xl font-bold text-white/80">2</span>
                </div>
                <div>
                  <h3 className="text-3xl text-white mb-2 font-light">Propuesta Técnico-Económica</h3>
                  <p className="text-muted-foreground">
                    Alcance definido, cronograma detallado y lista completa de materiales
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow h-screen bg-black/80">
            <div className="flex flex-col justify-center items-center h-full gap-4">
              <div className="flex justify-center w-full">
                <EjecucionControladaIconLoop className="size-[200px] text-primary" />
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-xl font-bold text-white/80">3</span>
                </div>
                <div>
                  <h3 className="text-3xl text-white mb-2 font-light">Ejecución Controlada</h3>
                  <p className="text-muted-foreground">
                    Control de calidad, seguridad y aplicación de buenas prácticas
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow h-screen bg-black/80">
            <div className="flex flex-col justify-center items-center h-full gap-4">
              <div className="flex justify-center w-full">
                <CondicionesDePagoIconLoop className="size-[200px] text-primary" />
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-xl font-bold text-white/80">4</span>
                </div>
                <div>
                  <h3 className="text-3xl text-white mb-2 font-light">Condiciones de Pago</h3>
                  <p className="text-muted-foreground">Modalidades flexibles sujetas a coordinación entre las partes</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow h-screen bg-black/80">
            <div className="flex flex-col justify-center items-center h-full gap-4">
              <div className="flex justify-center w-full">
                <CierreYPostventaIconLoop className="size-[200px] text-primary " />
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-xl font-bold text-white/80">5</span>
                </div>
                <div>
                  <h3 className="text-3xl text-white mb-2 font-light">Cierre y Postventa</h3>
                  <p className="text-muted-foreground">
                    Pruebas finales, entrega de manuales y recomendaciones de mantenimiento
                  </p>
                </div>
              </div>
            </div>
          </Card>

          
        </StickySplitScroll>

        

      </div>
    </section>
  )
}
