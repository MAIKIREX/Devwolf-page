import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ClipboardCheck, Headset, MapPin, ShieldCheck, Wrench } from "lucide-react"
import { HomeHeader } from "@/features/inicio/components/home-header"

export const metadata: Metadata = {
  title: "Devwolf Ingeniería & Tecnología | Soluciones integrales en Bolivia",
  description: "Construcción, instalaciones eléctricas, redes, distribución de equipos, software e impresión 3D. Ingeniería y tecnología de principio a fin en Bolivia.",
}

const services = [
  { number: "01", title: "Construcción y obra liviana", description: "Transformamos oficinas, locales y viviendas con refacciones, remodelaciones, acabados y mantenimiento.", detail: "Espacios que funcionan mejor", href: "/servicios/construccion-obra-liviana", image: "https://res.cloudinary.com/dbrkedvyp/image/upload/v1768498995/construction-site-renovation-modern-building_e5ypfd.jpg", alt: "Proyecto de construcción y remodelación" },
  { number: "02", title: "Instalaciones eléctricas", description: "Diseñamos e instalamos iluminación, tableros, protecciones, puesta a tierra y automatización industrial.", detail: "Energía segura y eficiente", href: "/servicios/instalaciones-electricas", image: "https://res.cloudinary.com/dbrkedvyp/image/upload/v1768499000/electrical-panel-industrial-installation-with-cabl_tndrx0.jpg", alt: "Instalación de tablero eléctrico industrial" },
  { number: "03", title: "Redes y telecomunicaciones", description: "Conectamos empresas mediante cableado estructurado, redes seguras, WiFi, CCTV y comunicaciones industriales.", detail: "Conectividad confiable", href: "/servicios/redes-telecomunicaciones", image: "https://res.cloudinary.com/dbrkedvyp/image/upload/v1768499004/network-server-room-with-fiber-optic-cables-and-sw_nv9eza.jpg", alt: "Infraestructura de redes y telecomunicaciones" },
  { number: "04", title: "Distribución de equipos", description: "Suministramos equipos informáticos, materiales eléctricos y herramientas técnicas con asesoría y soporte.", detail: "Equipamiento para cada proyecto", href: "/servicios/distribucion-equipos", image: "https://res.cloudinary.com/dbrkedvyp/image/upload/v1768499009/technology-warehouse-with-computers-and-electronic_e9v4lj.jpg", alt: "Equipos y suministros tecnológicos" },
  { number: "05", title: "Software y DevOps", description: "Creamos sistemas web, APIs e integraciones; automatizamos procesos y acompañamos su operación en la nube.", detail: "Tecnología para crecer", href: "/servicios/software-devops", image: "https://res.cloudinary.com/dbrkedvyp/image/upload/v1768499008/software-developer-coding-on-multiple-screens_jeumvy.jpg", alt: "Desarrollo de software e infraestructura digital" },
  { number: "06", title: "Diseño e impresión 3D", description: "Diseñamos y fabricamos prototipos, repuestos, piezas funcionales y señalética personalizada.", detail: "Ideas que toman forma", href: "/servicios/impresion-3d", image: "https://res.cloudinary.com/dbrkedvyp/image/upload/v1768498991/3d-printer-manufacturing-custom-parts-in-action-cl_ilhupl.jpg", alt: "Fabricación de piezas mediante impresión 3D" },
]

const steps = [
  { number: "01", title: "Entendemos tu necesidad", text: "Realizamos un levantamiento técnico y definimos los objetivos y condiciones del proyecto." },
  { number: "02", title: "Diseñamos la solución", text: "Preparamos una propuesta con alcance, materiales, cronograma y presupuesto claros." },
  { number: "03", title: "Ejecutamos y verificamos", text: "Implementamos con control de calidad, seguridad y pruebas antes de la puesta en marcha." },
  { number: "04", title: "Te acompañamos", text: "Entregamos documentación, recomendaciones y soporte después del cierre." },
]

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-white text-[#14213D]">
      <section className="relative min-h-[980px] bg-[#14213D] text-white sm:min-h-[800px]">
        <HomeHeader />
        <Image src="https://res.cloudinary.com/dbrkedvyp/image/upload/v1768498555/construction-site-with-modern-building-and-workers_qfhx3d.jpg" alt="Equipo trabajando en un proyecto de construcción" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071126]/95 via-[#14213D]/80 to-[#14213D]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071126]/80 via-transparent to-transparent" />
        <div className="relative mx-auto flex min-h-[980px] max-w-[1320px] flex-col justify-center px-5 pb-28 pt-40 sm:min-h-[800px] sm:px-8 lg:px-12">
          <div className="max-w-[770px]">
            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[.22em] text-[#FCA311] sm:text-sm"><span className="h-px w-10 bg-[#FCA311]" /> Ingeniería & tecnología en Bolivia</p>
            <h1 className="max-w-[780px] text-[clamp(2.8rem,6vw,5.8rem)] font-semibold leading-[1.04] tracking-tight">Ideas que se convierten en <span className="text-[#FCA311]">soluciones reales.</span></h1>
            <p className="mt-7 max-w-[660px] text-lg leading-relaxed text-white/85 sm:text-xl">Somos Devwolf. Integramos construcción, ingeniería eléctrica, conectividad y tecnología digital para llevar cada proyecto desde el diagnóstico hasta la puesta en marcha.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contacto" className="inline-flex min-h-13 items-center justify-center gap-3 rounded-lg bg-[#FCA311] px-7 py-4 font-bold text-[#14213D] transition-colors hover:bg-[#e58e00]">Hablemos de tu proyecto <ArrowUpRight size={19} aria-hidden="true" /></Link>
              <Link href="#servicios" className="inline-flex min-h-13 items-center justify-center gap-3 rounded-lg border border-white/50 px-7 py-4 font-semibold text-white transition-colors hover:bg-white/10">Explorar servicios <ArrowDown size={18} aria-hidden="true" /></Link>
            </div>
          </div>
          <p className="absolute bottom-20 left-5 hidden text-xs font-semibold uppercase tracking-[.2em] text-white/60 md:block sm:left-8 lg:left-12">La Paz · Cobertura en Bolivia</p>
        </div>
        <div className="absolute inset-x-5 -bottom-14 z-10 mx-auto grid max-w-[1150px] grid-cols-1 overflow-hidden rounded-2xl bg-[#14213D] shadow-[0_22px_45px_rgba(20,33,61,.20)] sm:inset-x-8 md:grid-cols-3">
          <div className="flex items-center gap-4 border-b border-white/15 px-6 py-5 md:border-b-0 md:border-r lg:px-9"><Wrench className="shrink-0 text-[#FCA311]" size={26} aria-hidden="true" /><div><strong className="block text-sm text-white">Solución integral</strong><span className="text-xs text-white/65">De la idea a la entrega</span></div></div>
          <div className="flex items-center gap-4 border-b border-white/15 px-6 py-5 md:border-b-0 md:border-r lg:px-9"><ShieldCheck className="shrink-0 text-[#FCA311]" size={27} aria-hidden="true" /><div><strong className="block text-sm text-white">Calidad y seguridad</strong><span className="text-xs text-white/65">Trabajo técnico responsable</span></div></div>
          <div className="flex items-center gap-4 px-6 py-5 lg:px-9"><Headset className="shrink-0 text-[#FCA311]" size={26} aria-hidden="true" /><div><strong className="block text-sm text-white">Soporte postventa</strong><span className="text-xs text-white/65">Acompañamiento continuo</span></div></div>
        </div>
      </section>

      <section id="nosotros" className="bg-[#F8F8F8] px-5 pb-24 pt-56 sm:px-8 sm:pt-40 lg:py-36">
        <div className="mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
          <div>
            <p className="mb-5 text-xs font-extrabold uppercase tracking-[.2em] text-[#C77800]">Conoce a Devwolf</p>
            <h2 className="max-w-[710px] text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">Ingeniería que conecta <span className="text-[#C77800]">cada parte</span> de tu proyecto.</h2>
            <p className="mt-7 max-w-[640px] text-lg leading-relaxed text-[#33415E]">Somos una empresa boliviana que reúne capacidades técnicas para resolver necesidades físicas y digitales. Planificamos, suministramos equipos y materiales, construimos, instalamos, desarrollamos y ponemos en marcha soluciones adaptadas a cada cliente.</p>
            <div className="mt-8 space-y-4 text-[#33415E]">
              <p className="flex items-start gap-3"><Check className="mt-1 shrink-0 text-[#C77800]" size={20} /> Un interlocutor para coordinar especialidades, plazos y entregables.</p>
              <p className="flex items-start gap-3"><Check className="mt-1 shrink-0 text-[#C77800]" size={20} /> Propuestas claras, ejecución controlada y documentación técnica.</p>
              <p className="flex items-start gap-3"><Check className="mt-1 shrink-0 text-[#C77800]" size={20} /> Atención en La Paz y proyectos en todo el país.</p>
            </div>
            <Link href="/nosotros" className="mt-9 inline-flex items-center gap-2 border-b-2 border-[#FCA311] pb-1 font-bold text-[#14213D] hover:text-[#C77800]">Más sobre nosotros <ArrowUpRight size={18} aria-hidden="true" /></Link>
          </div>
          <div className="relative grid grid-cols-[1fr_.75fr] items-end gap-4">
            <div className="relative aspect-[.83] overflow-hidden rounded-[2rem] bg-[#E5E5E5]"><Image src="https://res.cloudinary.com/dbrkedvyp/image/upload/v1768498995/construction-site-renovation-modern-building_e5ypfd.jpg" alt="Proyecto de obra y remodelación" fill sizes="(max-width: 1024px) 60vw, 30vw" className="object-cover" /></div>
            <div className="space-y-4 pb-8">
              <div className="flex aspect-square items-center justify-center rounded-[2rem] bg-white p-6 shadow-sm"><Image src="/images/devwolf-dv-emblem.png" alt="Isotipo DV de Devwolf" width={240} height={240} className="h-auto w-full max-w-[180px]" /></div>
              <div className="relative aspect-[.87] overflow-hidden rounded-[2rem] bg-[#E5E5E5]"><Image src="https://res.cloudinary.com/dbrkedvyp/image/upload/v1768499000/electrical-panel-industrial-installation-with-cabl_tndrx0.jpg" alt="Trabajo en infraestructura eléctrica" fill sizes="(max-width: 1024px) 35vw, 18vw" className="object-cover" /></div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="bg-white px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12 flex flex-col justify-between gap-8 lg:mb-14 lg:flex-row lg:items-end">
            <div className="max-w-[770px]"><p className="mb-5 text-xs font-extrabold uppercase tracking-[.2em] text-[#C77800]">Lo que hacemos</p><h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">Seis especialidades. <span className="text-[#C77800]">Una solución completa.</span></h2></div>
            <p className="max-w-[330px] text-base leading-relaxed text-[#475467]">Selecciona el servicio que necesitas y conoce su alcance, nuestro proceso y lo que podemos entregar.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => <article key={service.number} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E5E5E5] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(20,33,61,.12)]">
              <div className="relative aspect-[1.55] overflow-hidden bg-[#E5E5E5]"><Image src={service.image} alt={service.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" /><span className="absolute left-5 top-5 rounded-md bg-[#FCA311] px-3 py-1.5 text-xs font-extrabold text-[#14213D]">{service.number}</span></div>
              <div className="flex flex-1 flex-col p-6 sm:p-7"><p className="mb-3 text-xs font-bold uppercase tracking-[.16em] text-[#C77800]">{service.detail}</p><h3 className="text-2xl font-semibold leading-tight text-[#14213D]">{service.title}</h3><p className="mt-4 flex-1 text-[15px] leading-relaxed text-[#475467]">{service.description}</p><Link href={service.href} aria-label={`Conocer más sobre ${service.title}`} className="mt-7 inline-flex items-center gap-2 self-start border-b-2 border-[#FCA311] pb-1 text-sm font-bold text-[#14213D] hover:text-[#C77800]">Conocer servicio <ArrowUpRight size={17} aria-hidden="true" /></Link></div>
            </article>)}
          </div>
        </div>
      </section>

      <section id="metodologia" className="bg-[#14213D] px-5 py-24 text-white sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div><p className="mb-5 text-xs font-extrabold uppercase tracking-[.2em] text-[#FCA311]">Nuestro método</p><h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Del diagnóstico a la entrega, <span className="text-[#FCA311]">paso a paso.</span></h2><p className="mt-6 max-w-[420px] leading-relaxed text-white/70">Un proceso ordenado para que sepas qué haremos, cuándo y con qué resultados.</p><Link href="/nosotros" className="mt-8 inline-flex items-center gap-2 font-bold text-[#FCA311] hover:text-white">Conoce nuestra metodología <ArrowRight size={17} aria-hidden="true" /></Link></div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/15 sm:grid-cols-2">{steps.map((step) => <div key={step.number} className="bg-[#14213D] p-7 sm:p-8"><span className="text-sm font-bold text-[#FCA311]">{step.number} / 04</span><h3 className="mt-9 text-xl font-semibold">{step.title}</h3><p className="mt-3 text-sm leading-relaxed text-white/65">{step.text}</p></div>)}</div>
        </div>
      </section>

      <section className="bg-[#F8F8F8] px-5 py-24 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
          <div className="relative min-h-[400px] overflow-hidden rounded-[2rem] bg-[#E5E5E5] sm:min-h-[520px]"><Image src="https://res.cloudinary.com/dbrkedvyp/image/upload/v1768499001/network-server-room-data-center_rwaivg.jpg" alt="Infraestructura tecnológica empresarial" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /><div className="absolute inset-x-5 bottom-5 rounded-xl bg-white/95 p-5 shadow-lg backdrop-blur sm:inset-x-auto sm:bottom-7 sm:left-7 sm:max-w-[310px]"><p className="text-xs font-extrabold uppercase tracking-[.15em] text-[#C77800]">Nuestro compromiso</p><p className="mt-2 text-xl font-semibold leading-tight text-[#14213D]">Soluciones que siguen funcionando después de la entrega.</p></div></div>
          <div><p className="mb-5 text-xs font-extrabold uppercase tracking-[.2em] text-[#C77800]">Por qué trabajar con nosotros</p><h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Un socio técnico para <span className="text-[#C77800]">todo el recorrido.</span></h2>
            <div className="mt-8 space-y-6">
              <div className="flex gap-4 border-b border-[#E5E5E5] pb-6"><ClipboardCheck className="mt-1 shrink-0 text-[#C77800]" size={25} /><div><h3 className="text-lg font-semibold">Alcance claro y documentado</h3><p className="mt-2 text-sm leading-relaxed text-[#475467]">Definimos materiales, entregables y pruebas antes de ejecutar, y registramos los cambios relevantes.</p></div></div>
              <div className="flex gap-4 border-b border-[#E5E5E5] pb-6"><ShieldCheck className="mt-1 shrink-0 text-[#C77800]" size={25} /><div><h3 className="text-lg font-semibold">Calidad y seguridad</h3><p className="mt-2 text-sm leading-relaxed text-[#475467]">Aplicamos buenas prácticas, control de calidad y medidas de seguridad apropiadas para cada proyecto.</p></div></div>
              <div className="flex gap-4"><MapPin className="mt-1 shrink-0 text-[#C77800]" size={25} /><div><h3 className="text-lg font-semibold">Presencia en Bolivia</h3><p className="mt-2 text-sm leading-relaxed text-[#475467]">Atendemos en La Paz y coordinamos proyectos en otros departamentos del país.</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28"><div className="mx-auto grid max-w-[1200px] overflow-hidden rounded-[2rem] bg-[#FCA311] lg:grid-cols-[1.3fr_.7fr]"><div className="p-8 sm:p-12 lg:p-16"><p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#14213D]/70">Empecemos juntos</p><h2 className="mt-5 max-w-[700px] text-4xl font-semibold leading-tight tracking-tight text-[#14213D] sm:text-5xl">¿Tienes un proyecto en mente? Hagámoslo realidad.</h2><p className="mt-5 max-w-[610px] text-lg text-[#14213D]/80">Cuéntanos qué necesitas. Coordinamos una evaluación técnica y preparamos una propuesta adecuada para ti.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href="/contacto" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#14213D] px-6 py-4 font-bold text-white hover:bg-black">Solicitar cotización <ArrowUpRight size={19} aria-hidden="true" /></Link><a href="https://wa.me/59178855457" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#14213D]/50 px-6 py-4 font-bold text-[#14213D] hover:bg-white/30">Escribir por WhatsApp <ArrowUpRight size={18} aria-hidden="true" /></a></div></div><div className="relative hidden min-h-[380px] items-center justify-center bg-white p-12 lg:flex"><div className="absolute inset-0 opacity-10 [background-image:linear-gradient(90deg,#14213D_1px,transparent_1px),linear-gradient(#14213D_1px,transparent_1px)] [background-size:36px_36px]" /><Image src="/images/devwolf-dv-emblem.png" alt="Isotipo DV de Devwolf" width={320} height={320} className="relative h-auto w-full max-w-[240px]" /></div></div></section>

      <footer className="bg-[#101a31] px-5 py-12 text-white sm:px-8"><div className="mx-auto flex max-w-[1200px] flex-col gap-8 border-b border-white/15 pb-9 md:flex-row md:items-start md:justify-between"><div className="max-w-[380px]"><Link href="/" className="inline-flex items-center gap-3"><span className="flex size-12 items-center justify-center rounded-lg bg-white"><Image src="/images/devwolf-dv-emblem.png" alt="" width={42} height={42} className="h-auto w-10" /></span><span className="text-xl font-bold">Devwolf</span></Link><p className="mt-4 text-sm leading-relaxed text-white/65">Ingeniería y tecnología para proyectos que necesitan soluciones completas, confiables y bien ejecutadas.</p></div><div className="grid gap-8 text-sm sm:grid-cols-2 sm:gap-16"><div><p className="mb-4 font-bold text-[#FCA311]">Explora</p><div className="grid gap-3 text-white/70"><Link href="/nosotros" className="hover:text-white">Nosotros</Link><Link href="#servicios" className="hover:text-white">Servicios</Link><Link href="/contacto" className="hover:text-white">Contacto</Link></div></div><div><p className="mb-4 font-bold text-[#FCA311]">Hablemos</p><div className="grid gap-3 text-white/70"><span>La Paz, Bolivia</span><a href="tel:+59178855457" className="hover:text-white">+591 78855457</a><a href="mailto:innova.ingenieriaytecnologia@gmail.com" className="break-all hover:text-white">innova.ingenieriaytecnologia@gmail.com</a></div></div></div></div><div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-3 pt-6 text-xs text-white/45 sm:flex-row"><p>© {new Date().getFullYear()} Devwolf Ingeniería & Tecnología</p><p>La Paz, Bolivia · NIT 680646031</p></div></footer>
    </main>
  )
}
