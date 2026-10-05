"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

type Styles = Record<string, string>
const SPAN = 1.4
const START = 0.6
const HANDOFF = 0.28

const aboutPanels = [
  { label: "Quiénes somos", eyebrow: "Un equipo, múltiples soluciones", title: "Ingeniería que mira el proyecto completo.", body: "Somos una empresa boliviana que integra infraestructura física y tecnología digital. Acompañamos cada proyecto desde el levantamiento técnico hasta la entrega.", stat: "06", suffix: "disciplinas conectadas", image: "/images/home/devwolf-hero-engineering.webp", alt: "Representación de un ingeniero coordinando infraestructura y tecnología" },
  { label: "Qué nos mueve", eyebrow: "Pensar en conjunto", title: "Las mejores soluciones nacen de conectar ideas.", body: "Una remodelación necesita energía y conectividad. Una plataforma digital necesita infraestructura confiable. Coordinamos esas piezas para que funcionen juntas.", stat: "01", suffix: "visión integral", image: "/images/construccion/acabados-interiores.webp", alt: "Espacio interior con acabados de construcción" },
  { label: "Cómo colaboramos", eyebrow: "De principio a fin", title: "Claridad en cada decisión y cada etapa.", body: "Escuchamos, proponemos, ejecutamos y acompañamos. Definimos alcance, materiales y tiempos antes de avanzar, y entregamos con pruebas y documentación.", stat: "04", suffix: "etapas de trabajo", image: "https://res.cloudinary.com/dbrkedvyp/image/upload/v1768499001/network-server-room-data-center_rwaivg.jpg", alt: "Infraestructura de conectividad y datos" },
]

export function HomeAbout({ styles }: { styles: Styles }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<ScrollTrigger | null>(null)
  const activeRef = useRef(0)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const track = trackRef.current
    const stage = track?.querySelector<HTMLElement>("[data-about-stage]")
    const scenes = Array.from(track?.querySelectorAll<HTMLElement>("[data-about-scene]") ?? [])
    if (!track || !stage || scenes.length < 2) return

    const updateActive = (index: number) => {
      if (activeRef.current !== index) {
        activeRef.current = index
        setActive(index)
      }
    }

    const match = gsap.matchMedia()
    match.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      const rail = stage.querySelector<HTMLElement>("[data-about-progress-rail]")
      const fill = stage.querySelector<HTMLElement>("[data-about-progress-fill]")
      const orb = stage.querySelector<HTMLElement>("[data-about-progress-orb]")
      if (!rail || !fill || !orb) return

      track.dataset.aboutReady = "true"
      const measure = () => {
        const stageHeight = stage.getBoundingClientRect().height
        track.style.height = `${stageHeight * (1 + (scenes.length - 1) * 1.4)}px`
      }
      measure()
      ScrollTrigger.addEventListener("refreshInit", measure)
      gsap.set(scenes.slice(1), { autoAlpha: 0 })
      gsap.set(scenes.slice(1).flatMap((scene) => [
        scene.querySelector<HTMLElement>("[data-about-photo]"),
        scene.querySelector<HTMLElement>("[data-about-copy]"),
      ]), { autoAlpha: 0 })

      const story = gsap.timeline({ defaults: { ease: "power2.inOut" } })
      for (let index = 1; index < scenes.length; index++) {
        const previous = scenes[index - 1]
        const next = scenes[index]
        const previousPhoto = previous.querySelector<HTMLElement>("[data-about-photo]")
        const previousCopy = previous.querySelector<HTMLElement>("[data-about-copy]")
        const nextPhoto = next.querySelector<HTMLElement>("[data-about-photo]")
        const nextCopy = next.querySelector<HTMLElement>("[data-about-copy]")
        const at = (index - 1) * SPAN + START
        const switchAt = at + HANDOFF

        story.to(previousCopy, { autoAlpha: 0, y: -48, duration: 0.22 }, at)
        story.to(previousPhoto, { clipPath: "inset(82% 0% 0% 0%)", y: 44, scale: 0.96, duration: HANDOFF }, at)
        story.set(previous, { autoAlpha: 0 }, switchAt)
        story.set(next, { autoAlpha: 1 }, switchAt)
        story.fromTo(nextPhoto,
          { autoAlpha: 1, clipPath: "inset(0% 0% 100% 0%)", y: -34, scale: 1.05 },
          { autoAlpha: 1, clipPath: "inset(0% 0% 0% 0%)", y: 0, scale: 1, duration: 0.36, ease: "power2.out", immediateRender: false },
          switchAt)
        story.fromTo(nextCopy,
          { autoAlpha: 0, y: 58 },
          { autoAlpha: 1, y: 0, duration: 0.24, ease: "power2.out", immediateRender: false },
          switchAt + 0.12)
      }
      story.set(stage, { opacity: 1 }, scenes.length * SPAN)

      const showScene = (index: number) => {
        updateActive(index)
        scenes.forEach((scene, sceneIndex) => {
          scene.inert = sceneIndex !== index
          scene.setAttribute("aria-hidden", sceneIndex === index ? "false" : "true")
        })
      }

      const syncStory = () => {
        const time = story.time()
        let chaptersPassed = 0
        for (let index = 1; index < scenes.length; index++) {
          const begins = (index - 1) * SPAN + START
          const ends = begins + HANDOFF + 0.36
          chaptersPassed += gsap.utils.clamp(0, 1, (time - begins) / (ends - begins))
        }
        const progress = chaptersPassed / (scenes.length - 1)
        gsap.set(fill, { scaleY: progress })
        gsap.set(orb, { y: rail.clientHeight * progress })
        showScene(Math.min(scenes.length - 1, Math.floor((time + 0.52) / SPAN)))
      }
      story.eventCallback("onUpdate", syncStory)
      syncStory()

      const trigger = ScrollTrigger.create({
        trigger: track,
        start: "top top+=76",
        end: "bottom bottom",
        animation: story,
        scrub: 0.85,
        invalidateOnRefresh: true,
        onRefresh: syncStory,
      })
      scrollRef.current = trigger

      return () => {
        ScrollTrigger.removeEventListener("refreshInit", measure)
        scrollRef.current = null
        track.dataset.aboutReady = "false"
        track.style.removeProperty("height")
        scenes.forEach((scene) => {
          scene.inert = false
          scene.removeAttribute("aria-hidden")
        })
        activeRef.current = 0
        setActive(0)
      }
    })

    match.add("(max-width: 1023px) and (prefers-reduced-motion: no-preference)", () => {
      const rail = stage.querySelector<HTMLElement>("[data-about-progress-rail]")
      const fill = stage.querySelector<HTMLElement>("[data-about-progress-fill]")
      const orb = stage.querySelector<HTMLElement>("[data-about-progress-orb]")
      track.dataset.aboutMobileReady = "true"

      scenes.forEach((scene, index) => {
        const photo = scene.querySelector<HTMLElement>("[data-about-photo]")
        const copy = scene.querySelector<HTMLElement>("[data-about-copy]")
        if (!photo || !copy) return
        const reveal = gsap.timeline({
          scrollTrigger: { trigger: scene, start: "top 90%", end: "top 28%", scrub: 0.6 },
        })
        reveal.fromTo(photo,
          { clipPath: "inset(0% 0% 100% 0%)", y: -24 },
          { clipPath: "inset(0% 0% 0% 0%)", y: 0, duration: 1, ease: "none" },
          0)
        reveal.fromTo(copy,
          { autoAlpha: 0, y: 35 },
          { autoAlpha: 1, y: 0, duration: 0.72, ease: "none" },
          0.28)
        ScrollTrigger.create({
          trigger: scene,
          start: "top center",
          end: "bottom center",
          onEnter: () => updateActive(index),
          onEnterBack: () => updateActive(index),
        })
      })

      if (rail && fill && orb) {
        const moveRail = (progress: number) => {
          gsap.set(fill, { scaleY: progress })
          gsap.set(orb, { y: rail.clientHeight * progress })
        }
        ScrollTrigger.create({
          trigger: track,
          start: "top 55%",
          end: "bottom 55%",
          onUpdate: (self) => moveRail(self.progress),
          onRefresh: (self) => moveRail(self.progress),
        })
      }

      return () => {
        track.dataset.aboutMobileReady = "false"
        activeRef.current = 0
        setActive(0)
      }
    })

    return () => match.revert()
  }, [])

  const goTo = (index: number) => {
    const trigger = scrollRef.current
    if (trigger) {
      const sceneTime = index * SPAN + 0.15
      const duration = trigger.animation?.duration() || aboutPanels.length * SPAN
      window.scrollTo({ top: trigger.start + (sceneTime / duration) * (trigger.end - trigger.start), behavior: "smooth" })
    } else {
      document.getElementById(`about-scene-${index}`)?.scrollIntoView({ behavior: "smooth", block: "start" })
      activeRef.current = index
      setActive(index)
    }
  }

  return (
    <section id="nosotros" className={styles.aboutSection} aria-labelledby="about-title">
      <div className={styles.aboutIntro} data-reveal>
        <p className={styles.kicker}>01 / Nosotros</p>
        <h2 id="about-title" className={styles.sectionTitle}>Un solo equipo.<br /><em>Más posibilidades.</em></h2>
        <p>Trabajamos donde se encuentran la ingeniería, la construcción y la tecnología.</p>
      </div>
      <div ref={trackRef} className={styles.aboutTrack} data-about-ready="false">
        <div data-about-stage className={styles.aboutStage}>
          <div data-about-progress-rail className={styles.aboutProgressRail} aria-hidden="true">
            <span data-about-progress-fill className={styles.aboutProgressFill} />
            <span className={styles.aboutProgressTick} style={{ top: "0%" }} />
            <span className={styles.aboutProgressTick} style={{ top: "50%" }} />
            <span className={styles.aboutProgressTick} style={{ top: "100%" }} />
            <span data-about-progress-orb className={styles.aboutProgressOrb} />
          </div>
          <nav className={styles.aboutTabs} aria-label="Explorar quiénes somos">
            {aboutPanels.map((item, index) => (
              <button
                key={item.label}
                type="button"
                id={`about-tab-${index}`}
                aria-current={active === index ? "step" : undefined}
                onClick={() => goTo(index)}
                onKeyDown={(event) => {
                  if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return
                  event.preventDefault()
                  const next = (index + (event.key === "ArrowRight" ? 1 : -1) + aboutPanels.length) % aboutPanels.length
                  goTo(next)
                  document.getElementById(`about-tab-${next}`)?.focus()
                }}
                className={active === index ? styles.aboutTabActive : styles.aboutTab}
              ><span>0{index + 1}</span>{item.label}<ArrowRight size={17} aria-hidden="true" /></button>
            ))}
          </nav>
          {aboutPanels.map((panel, index) => (
            <article id={`about-scene-${index}`} data-about-scene key={panel.label} className={styles.aboutScene} aria-label={`0${index + 1} de 03: ${panel.label}`}>
              <div data-about-photo className={styles.aboutPhoto}>
                <Image src={panel.image} alt={panel.alt} fill sizes="(max-width: 1023px) 100vw, 48vw" className={styles.cover} />
                <span className={styles.aboutPhotoNumber}>0{index + 1} / 03</span>
              </div>
              <div data-about-copy className={styles.aboutRight}>
                <div className={styles.aboutRail} aria-hidden="true"><span style={{ top: `${(index + .5) * 100 / aboutPanels.length}%` }} /></div>
                <div className={styles.aboutPanel}>
                  <p className={styles.kicker}>{panel.eyebrow}</p>
                  <h3>{panel.title}</h3>
                  <p>{panel.body}</p>
                  <div className={styles.aboutStat}><strong>{panel.stat}</strong><span>{panel.suffix}</span></div>
                  <Link href="/nosotros" className={styles.linkArrow}>Conoce más sobre Devwolf <ArrowUpRight size={18} aria-hidden="true" /></Link>
                </div>
              </div>
            </article>
          ))}
          <div className={styles.aboutScrollHint} aria-hidden="true">Desliza para conocer más <ArrowDown size={16} /></div>
        </div>
      </div>
    </section>
  )
}
