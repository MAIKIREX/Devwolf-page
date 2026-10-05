import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowRight, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react"
import { HomeHeader } from "@/features/inicio/components/home-header"
import { LandingAnimations } from "@/features/inicio/components/landing-animations"
import { HomeAbout } from "@/features/inicio/components/home-interactive"
import { HomeServices } from "@/features/inicio/components/service-story"
import { HomeEnfoque } from "@/features/inicio/components/home-enfoque"
import styles from "./home.module.css"

export const metadata: Metadata = {
  title: "Devwolf Ingeniería & Tecnología | Soluciones integrales en Bolivia",
  description: "Construcción, energía, conectividad y tecnología digital integradas en un solo equipo en La Paz, Bolivia.",
}

const services = [
  { number: "01", name: "Construcción y obra liviana", category: "Infraestructura", description: "Transformamos espacios para que respondan mejor a quienes los usan.", highlights: ["Refacciones y remodelaciones", "Acabados y mantenimiento"], href: "/servicios/construccion-obra-liviana", image: "/images/construccion/interior-drywall-hero.webp", alt: "Interior en proceso de construcción y acabados" },
  { number: "02", name: "Instalaciones eléctricas", category: "Energía", description: "Diseñamos e implementamos sistemas eléctricos seguros y eficientes.", highlights: ["Iluminación, tableros y protecciones", "Puesta a tierra y automatización"], href: "/servicios/instalaciones-electricas", image: "https://res.cloudinary.com/dbrkedvyp/image/upload/v1768499000/electrical-panel-industrial-installation-with-cabl_tndrx0.jpg", alt: "Panel de instalación eléctrica industrial" },
  { number: "03", name: "Redes y telecomunicaciones", category: "Conectividad", description: "Creamos la infraestructura que mantiene personas y sistemas conectados.", highlights: ["Cableado estructurado y WiFi", "CCTV y comunicaciones industriales"], href: "/servicios/redes-telecomunicaciones", image: "https://res.cloudinary.com/dbrkedvyp/image/upload/v1768499004/network-server-room-with-fiber-optic-cables-and-sw_nv9eza.jpg", alt: "Infraestructura de redes y telecomunicaciones" },
  { number: "04", name: "Distribución de equipos", category: "Suministro", description: "Acercamos los equipos adecuados a cada necesidad técnica.", highlights: ["Equipos y materiales especializados", "Asesoría técnica y soporte"], href: "/servicios/distribucion-equipos", image: "/images/distribucion/gaming-pc-fallback.webp", alt: "Equipo informático de alto rendimiento" },
  { number: "05", name: "Software y DevOps", category: "Soluciones digitales", description: "Convertimos procesos complejos en herramientas digitales útiles.", highlights: ["Sistemas web, APIs e integraciones", "Automatización e infraestructura en la nube"], href: "/servicios/software-devops", image: "https://res.cloudinary.com/dbrkedvyp/image/upload/v1768499008/software-developer-coding-on-multiple-screens_jeumvy.jpg", alt: "Desarrollo de software y soluciones digitales" },
  { number: "06", name: "Diseño e impresión 3D", category: "Fabricación", description: "Damos forma física a ideas, piezas y soluciones a medida.", highlights: ["Prototipos y repuestos funcionales", "Piezas y señalética personalizada"], href: "/servicios/impresion-3d", image: "https://res.cloudinary.com/dbrkedvyp/image/upload/v1768498991/3d-printer-manufacturing-custom-parts-in-action-cl_ilhupl.jpg", alt: "Impresora 3D fabricando una pieza" },
]

const process = [
  { number: "01", name: "Escuchamos", detail: "Visitamos, diagnosticamos y entendemos tu necesidad." },
  { number: "02", name: "Proponemos", detail: "Definimos alcance, materiales, tiempos y presupuesto." },
  { number: "03", name: "Ejecutamos", detail: "Implementamos con seguridad, calidad y pruebas." },
  { number: "04", name: "Acompañamos", detail: "Entregamos documentación y soporte postventa." },
]

export default function HomePage() {
  return (
    <main className={styles.home}>
      <LandingAnimations />
      <div data-scroll-progress aria-hidden="true" className={styles.progress} />
      <HomeHeader />

      <section id="inicio" data-hero className={styles.hero} aria-labelledby="hero-title">
        <div data-hero-image className={styles.heroImage}><Image src="/images/home/devwolf-hero-engineering.webp" alt="Representación de un ingeniero revisando planos e infraestructura técnica" fill priority sizes="100vw" className={styles.cover} /></div>
        <div className={styles.heroShade} />
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p data-hero-enter className={styles.eyebrow}><span className={styles.eyebrowLine} /> Ingeniería & tecnología · La Paz, Bolivia</p>
            <h1 id="hero-title" data-hero-enter className={styles.heroTitle}>Hacemos que <em>todo conecte.</em></h1>
            <p data-hero-enter className={styles.heroLead}>Construcción, energía, redes y tecnología digital en un solo equipo. De la primera idea a la puesta en marcha.</p>
            <div data-hero-enter className={styles.heroActions}>
              <Link href="/contacto" className={styles.buttonPrimary}>Hablemos de tu proyecto <ArrowUpRight size={18} aria-hidden="true" /></Link>
              <Link href="#servicios" className={styles.buttonText}>Explorar servicios <ArrowDown size={17} aria-hidden="true" /></Link>
            </div>
          </div>
          <div className={styles.heroSideNote} aria-hidden="true"><span>01 / 05</span><span className={styles.sideRule} /><span>Desliza para explorar</span></div>
        </div>
        <div className={styles.heroBottom}><span>Infraestructura física</span><span className={styles.heroBottomPlus}>+</span><span>Tecnología digital</span><span className={styles.heroBottomArrow}><ArrowDown size={18} aria-hidden="true" /></span></div>
      </section>

      <div className={styles.mosaicStrip} aria-label="Áreas de trabajo de Devwolf">
        <div data-card className={styles.mosaicTile}><Image src="/images/construccion/interior-drywall-hero.webp" alt="Construcción de interiores" fill sizes="(max-width: 700px) 50vw, 25vw" className={styles.cover} /><span>Construcción</span></div>
        <div data-card className={styles.mosaicTile}><Image src="https://res.cloudinary.com/dbrkedvyp/image/upload/v1768499000/electrical-panel-industrial-installation-with-cabl_tndrx0.jpg" alt="Instalación eléctrica industrial" fill sizes="(max-width: 700px) 50vw, 25vw" className={styles.cover} /><span>Energía</span></div>
        <div data-card className={styles.mosaicTile}><Image src="https://res.cloudinary.com/dbrkedvyp/image/upload/v1768499001/network-server-room-data-center_rwaivg.jpg" alt="Infraestructura de conectividad" fill sizes="(max-width: 700px) 50vw, 25vw" className={styles.cover} /><span>Conectividad</span></div>
        <div data-card className={styles.mosaicTile}><Image src="https://res.cloudinary.com/dbrkedvyp/image/upload/v1768498991/3d-printer-manufacturing-custom-parts-in-action-cl_ilhupl.jpg" alt="Fabricación mediante impresión 3D" fill sizes="(max-width: 700px) 50vw, 25vw" className={styles.cover} /><span>Innovación</span></div>
      </div>

      <HomeAbout styles={styles} />

      <section id="servicios" className={styles.servicesSection} aria-labelledby="services-title">
        <div className={styles.sectionIntro} data-reveal><div><p className={styles.kicker}>02 / Lo que hacemos</p><h2 id="services-title" className={styles.sectionTitle}>Una solución para <em>cada desafío.</em></h2></div><p>Seis disciplinas conectadas. Cada una responde a una parte de tu proyecto.</p></div>
        <HomeServices services={services} styles={styles} />
      </section>

      <HomeEnfoque />

      <section id="metodologia" className={styles.processSection} aria-labelledby="process-title">
        <div className={styles.processVisual}><div data-parallax className={styles.processPhoto}><Image src="/images/home/devwolf-process-team.webp" alt="Representación de un equipo técnico revisando una instalación eléctrica y de redes" fill sizes="(max-width: 900px) 100vw, 48vw" className={styles.cover} /></div></div>
        <div className={styles.processContent}>
          <p className={styles.kicker}>04 / Cómo trabajamos</p><h2 id="process-title" className={styles.sectionTitle}>De la idea a la <em>puesta en marcha.</em></h2><p className={styles.processLead}>Un recorrido claro, de principio a fin.</p>
          <div className={styles.processList}>{process.map((step) => <div data-reveal className={styles.processStep} key={step.number}><span>{step.number}</span><div><h3>{step.name}</h3><p>{step.detail}</p></div><ArrowUpRight size={20} aria-hidden="true" /></div>)}</div>
        </div>
      </section>

      <section className={styles.capabilities} aria-labelledby="capabilities-title">
        <div data-reveal><p className={styles.kicker}>05 / En acción</p><h2 id="capabilities-title" className={styles.sectionTitle}>El mismo compromiso,<br /><em>en cada campo.</em></h2></div>
        <div className={styles.capabilityGrid}>
          <Link href="/servicios/construccion-obra-liviana" className={styles.capabilityCard} data-card><Image src="/images/construccion/acabados-interiores.webp" alt="Acabados de interiores" fill sizes="(max-width: 768px) 100vw, 50vw" className={styles.cover} /><span>Infraestructura <ArrowUpRight size={19} /></span></Link>
          <Link href="/servicios/redes-telecomunicaciones" className={styles.capabilityCard} data-card><Image src="https://res.cloudinary.com/dbrkedvyp/image/upload/v1768499001/network-server-room-data-center_rwaivg.jpg" alt="Centro de datos e infraestructura digital" fill sizes="(max-width: 768px) 100vw, 50vw" className={styles.cover} /><span>Conectividad <ArrowUpRight size={19} /></span></Link>
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="cta-title">
        <div className={styles.ctaImage}><Image src="https://res.cloudinary.com/dbrkedvyp/image/upload/v1768498555/construction-site-with-modern-building-and-workers_qfhx3d.jpg" alt="" fill sizes="100vw" className={styles.cover} /></div><div className={styles.ctaRings} aria-hidden="true" />
        <div className={styles.ctaContent} data-reveal><p className={styles.kicker}>Tu siguiente proyecto empieza aquí</p><h2 id="cta-title">Conversemos sobre lo que <em>quieres construir.</em></h2><p>Cuéntanos tu desafío. Encontraremos la forma de hacerlo realidad.</p><Link href="/contacto" className={styles.buttonPrimary}>Solicitar cotización <ArrowUpRight size={18} aria-hidden="true" /></Link></div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <Link href="/" aria-label="Devwolf, ir al inicio" className={styles.footerLogo}>
              <span>Devwolf</span>
            </Link>
            <p>Ingeniería y tecnología para conectar ideas con soluciones que funcionan.</p>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.footerCol}>
              <span className={styles.footerColTitle}>Explora</span>
              <Link href="#nosotros" className={styles.footerNavLink}>Nosotros</Link>
              <Link href="#servicios" className={styles.footerNavLink}>Servicios</Link>
              <Link href="#metodologia" className={styles.footerNavLink}>Cómo trabajamos</Link>
            </div>
            <div className={styles.footerCol}>
              <span className={styles.footerColTitle}>Contacto</span>
              <Link href="/contacto" className={styles.footerHighlightLink}>
                Solicitar cotización <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
              <a href="tel:+59178855457" className={styles.footerContactLink}>
                <Phone size={14} aria-hidden="true" /> +591 78855457
              </a>
              <a href="mailto:innova.ingenieriaytecnologia@gmail.com" className={styles.footerContactLink}>
                <Mail size={14} aria-hidden="true" /> Enviar un email <ArrowRight size={14} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.footerLocation}><MapPin size={18} aria-hidden="true" /><span>La Paz · Bolivia</span><span className={styles.footerLocationLine} /><span>Ingeniería & tecnología</span></div>
        <div className={styles.footerBottom}><span>© {new Date().getFullYear()} Devwolf Ingeniería & Tecnología</span><span>NIT 680646031</span></div>
      </footer>
    </main>
  )
}
