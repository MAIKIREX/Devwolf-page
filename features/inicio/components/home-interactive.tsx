"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"

type Styles = Record<string, string>
type Service = { number: string; name: string; category: string; description: string; href: string; image: string; alt: string }

const aboutPanels = [
  { label: "Quiénes somos", eyebrow: "Un equipo, múltiples soluciones", title: "Ingeniería que mira el proyecto completo.", body: "Somos una empresa boliviana que integra infraestructura física y tecnología digital. Acompañamos cada proyecto desde el levantamiento técnico hasta la entrega.", stat: "06", suffix: "disciplinas conectadas", image: "/images/home/devwolf-hero-engineering.webp", alt: "Representación de un ingeniero coordinando infraestructura y tecnología" },
  { label: "Qué nos mueve", eyebrow: "Pensar en conjunto", title: "Las mejores soluciones nacen de conectar ideas.", body: "Una remodelación necesita energía y conectividad. Una plataforma digital necesita infraestructura confiable. Coordinamos esas piezas para que funcionen juntas.", stat: "01", suffix: "visión integral", image: "/images/construccion/acabados-interiores.webp", alt: "Espacio interior con acabados de construcción" },
  { label: "Cómo colaboramos", eyebrow: "De principio a fin", title: "Claridad en cada decisión y cada etapa.", body: "Escuchamos, proponemos, ejecutamos y acompañamos. Definimos alcance, materiales y tiempos antes de avanzar, y entregamos con pruebas y documentación.", stat: "04", suffix: "etapas de trabajo", image: "https://res.cloudinary.com/dbrkedvyp/image/upload/v1768499001/network-server-room-data-center_rwaivg.jpg", alt: "Infraestructura de conectividad y datos" },
]

export function HomeAbout({ styles }: { styles: Styles }) {
  const [active, setActive] = useState(0)
  const panel = aboutPanels[active]
  return (
    <section id="nosotros" className={styles.aboutSection} aria-labelledby="about-title">
      <div className={styles.aboutIntro} data-reveal><p className={styles.kicker}>01 / Nosotros</p><h2 id="about-title" className={styles.sectionTitle}>Un solo equipo.<br /><em>Más posibilidades.</em></h2><p>Trabajamos donde se encuentran la ingeniería, la construcción y la tecnología.</p></div>
      <div className={styles.aboutStage}>
        <div className={styles.aboutLeft}>
          <div className={styles.aboutTabs} role="tablist" aria-label="Conoce a Devwolf">
            {aboutPanels.map((item, index) => <button key={item.label} type="button" role="tab" id={`about-tab-${index}`} aria-selected={active === index} aria-controls="about-panel" tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={(event) => { if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return; event.preventDefault(); const next = (index + (event.key === "ArrowRight" ? 1 : -1) + aboutPanels.length) % aboutPanels.length; setActive(next); document.getElementById(`about-tab-${next}`)?.focus() }} className={active === index ? styles.aboutTabActive : styles.aboutTab}><span>0{index + 1}</span>{item.label}<ArrowRight size={17} aria-hidden="true" /></button>)}
          </div>
          <div className={styles.aboutPhoto} key={panel.image}><Image src={panel.image} alt={panel.alt} fill sizes="(max-width: 900px) 100vw, 45vw" className={styles.cover} /></div>
        </div>
        <div id="about-panel" role="tabpanel" aria-labelledby={`about-tab-${active}`} tabIndex={0} className={styles.aboutRight}>
          <div className={styles.aboutRail} aria-hidden="true"><span style={{ top: `${(active + .5) * 100 / aboutPanels.length}%` }} /></div>
          <div key={active} className={styles.aboutPanel}>
            <p className={styles.kicker}>{panel.eyebrow}</p>
            <h3>{panel.title}</h3>
            <p>{panel.body}</p>
            <div className={styles.aboutStat}><strong>{panel.stat}</strong><span>{panel.suffix}</span></div>
            <Link href="/nosotros" className={styles.linkArrow}>Conoce más sobre Devwolf <ArrowUpRight size={18} aria-hidden="true" /></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export function HomeServices({ services, styles }: { services: Service[]; styles: Styles }) {
  const [active, setActive] = useState(0)
  const service = services[active]
  const move = (direction: number) => setActive((current) => (current + direction + services.length) % services.length)
  return (
    <div className={styles.servicesStage}>
      <div className={styles.serviceMedia}>
        <div key={service.image} className={styles.serviceImage}><Image src={service.image} alt={service.alt} fill sizes="(max-width: 900px) 100vw, 52vw" className={styles.cover} /></div>
        <div className={styles.serviceMediaShade} />
        <span className={styles.serviceMediaNumber}>{service.number} <small>/ 06</small></span>
        <div className={styles.serviceMediaInfo}><span>{service.category}</span><h3>{service.name}</h3><p>{service.description}</p><Link href={service.href} className={styles.serviceMediaLink}>Ver servicio <ArrowUpRight size={18} aria-hidden="true" /></Link></div>
        <div className={styles.serviceArrows}><button type="button" onClick={() => move(-1)} aria-label="Servicio anterior"><ChevronLeft size={20} /></button><button type="button" onClick={() => move(1)} aria-label="Servicio siguiente"><ChevronRight size={20} /></button></div>
      </div>
      <div className={styles.serviceList} aria-label="Seleccionar servicio">
        {services.map((item, index) => <button key={item.number} type="button" onClick={() => setActive(index)} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} aria-current={active === index ? "true" : undefined} className={active === index ? styles.serviceItemActive : styles.serviceItem}><span>{item.number}</span><strong>{item.name}</strong><ArrowUpRight size={19} aria-hidden="true" /></button>)}
        <p>Selecciona una especialidad para conocer cómo podemos ayudarte.</p>
      </div>
    </div>
  )
}
