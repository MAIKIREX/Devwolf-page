"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const SCENE_SPAN = 1.4
const TRANSITION_START = 0.6
const FOLD_DURATION = 0.32
const COPY_REVEAL_DELAY = 0.12
const SCROLL_LENGTH_FACTOR = 1.3

type Styles = Record<string, string>
type Service = {
  number: string
  name: string
  category: string
  description: string
  highlights: string[]
  href: string
  image: string
  alt: string
}

export function HomeServices({ services, styles }: { services: Service[]; styles: Styles }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<ScrollTrigger | null>(null)
  const activeRef = useRef(0)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const scenes = Array.from(track.querySelectorAll<HTMLElement>("[data-story-scene]"))
    const stage = track.querySelector<HTMLElement>("[data-story-stage]")
    if (!stage || scenes.length < 2) return

    const match = gsap.matchMedia()
    match.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      track.dataset.storyReady = "true"
      const measure = () => {
        const stageHeight = stage.getBoundingClientRect().height
        track.style.height = `${stageHeight * (1 + (scenes.length - 1) * SCROLL_LENGTH_FACTOR)}px`
      }
      measure()
      ScrollTrigger.addEventListener("refreshInit", measure)
      gsap.set(scenes.slice(1), { autoAlpha: 0 })
      gsap.set(scenes.slice(1).flatMap((scene) => [
        scene.querySelector<HTMLElement>("[data-story-visual]"),
        scene.querySelector<HTMLElement>("[data-story-copy]"),
      ]), { autoAlpha: 0 })
      gsap.set(scenes[0], { autoAlpha: 1 })

      const story = gsap.timeline({ defaults: { ease: "power2.inOut" } })
      for (let index = 1; index < scenes.length; index++) {
        const previous = scenes[index - 1]
        const next = scenes[index]
        const previousVisual = previous.querySelector<HTMLElement>("[data-story-visual]")
        const previousCopy = previous.querySelector<HTMLElement>("[data-story-copy]")
        const nextVisual = next.querySelector<HTMLElement>("[data-story-visual]")
        const nextCopy = next.querySelector<HTMLElement>("[data-story-copy]")
        const at = (index - 1) * SCENE_SPAN + TRANSITION_START
        const handoff = at + FOLD_DURATION

        // Let the image lead the eye, then bring in the copy as it settles.
        story.to(previousCopy, { autoAlpha: 0, y: -54, duration: 0.2 }, at)
        story.to(previousVisual, {
          yPercent: 28,
          rotationX: -58,
          scale: 0.92,
          clipPath: "inset(88% 0% 0% 0%)",
          duration: FOLD_DURATION - 0.08,
          transformOrigin: "50% 100%",
        }, at + 0.08)
        story.set(previous, { autoAlpha: 0 }, handoff)
        story.set(next, { autoAlpha: 1 }, handoff)
        story.fromTo(nextVisual,
          { autoAlpha: 1, clipPath: "inset(0% 0% 100% 0%)", yPercent: -9, rotationX: 12, transformOrigin: "50% 0%" },
          { autoAlpha: 1, clipPath: "inset(0% 0% 0% 0%)", yPercent: 0, rotationX: 0, duration: FOLD_DURATION, ease: "power2.out", immediateRender: false },
          handoff)
        story.fromTo(nextCopy,
          { autoAlpha: 0, y: 68 },
          { autoAlpha: 1, y: 0, duration: FOLD_DURATION - COPY_REVEAL_DELAY, ease: "power2.out", immediateRender: false },
          handoff + COPY_REVEAL_DELAY)
      }
      story.set(stage, { opacity: 1 }, scenes.length * SCENE_SPAN)

      const updateActive = (index: number) => {
        if (activeRef.current !== index) {
          activeRef.current = index
          setActive(index)
        }
        scenes.forEach((scene, sceneIndex) => {
          scene.inert = sceneIndex !== index
          scene.setAttribute("aria-hidden", sceneIndex === index ? "false" : "true")
        })
      }
      updateActive(0)

      const trigger = ScrollTrigger.create({
        trigger: track,
        start: "top top+=76",
        end: "bottom bottom",
        animation: story,
        scrub: 0.85,
        invalidateOnRefresh: true,
        onUpdate: () => updateActive(Math.min(scenes.length - 1, Math.floor((story.time() + 0.48) / SCENE_SPAN))),
      })
      scrollRef.current = trigger

      return () => {
        ScrollTrigger.removeEventListener("refreshInit", measure)
        scrollRef.current = null
        track.dataset.storyReady = "false"
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
      scenes.forEach((scene) => {
        const visual = scene.querySelector<HTMLElement>("[data-story-visual]")
        const copy = scene.querySelector<HTMLElement>("[data-story-copy]")
        if (!visual || !copy) return

        const reveal = gsap.timeline({
          scrollTrigger: { trigger: scene, start: "top 90%", end: "top 22%", scrub: 0.6 },
        })
        reveal.fromTo(visual,
          { clipPath: "inset(0% 0% 100% 0%)", y: -24 },
          { clipPath: "inset(0% 0% 0% 0%)", y: 0, duration: 1, ease: "none" },
          0)
        reveal.fromTo(copy,
          { autoAlpha: 0, y: 36 },
          { autoAlpha: 1, y: 0, duration: 0.75, ease: "none" },
          0.25)
      })
    })

    return () => match.revert()
  }, [services.length])

  const goTo = (index: number) => {
    const trigger = scrollRef.current
    if (trigger) {
      const sceneTime = index * SCENE_SPAN + 0.2
      const duration = trigger.animation?.duration() || services.length * SCENE_SPAN
      window.scrollTo({ top: trigger.start + (sceneTime / duration) * (trigger.end - trigger.start), behavior: "smooth" })
    } else {
      document.getElementById(`service-scene-${index}`)?.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  return (
    <div ref={trackRef} className={styles.storyTrack} data-story-ready="false">
      <div data-story-stage className={styles.storyStage}>
        <div className={styles.storyRail} aria-hidden="true"><span /><span /></div>
        {services.map((service, index) => (
          <article
            id={`service-scene-${index}`}
            data-story-scene
            key={service.number}
            className={`${styles.storyScene} ${index % 2 === 0 ? styles.storySceneOdd : styles.storySceneEven}`}
            aria-label={`${service.number} de ${services.length}: ${service.name}`}
          >
            <div data-story-visual className={styles.storyVisual}>
              <Image src={service.image} alt={service.alt} fill sizes="(max-width: 1023px) 100vw, 50vw" className={styles.cover} />
              <div className={styles.storyVisualVeil} />
              <span className={styles.storyVisualTag}>Devwolf / {service.category}</span>
            </div>
            <div data-story-copy className={styles.storyCopy}>
              <div className={styles.storyNumber}><span>{service.number}</span><span>/ 06</span></div>
              <p className={styles.storyCategory}>{service.category}</p>
              <h3>{service.name}</h3>
              <p className={styles.storyDescription}>{service.description}</p>
              <ul>{service.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
              <Link href={service.href} className={styles.storyLink}>Explorar servicio <ArrowUpRight size={18} aria-hidden="true" /></Link>
            </div>
          </article>
        ))}
        <div className={styles.storyControls}>
          <div className={styles.storyCounter}><strong>{services[active].number}</strong><span>/ 06</span></div>
          <div className={styles.storyDots} aria-label="Navegar entre servicios">
            {services.map((service, index) => (
              <button
                key={service.number}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Ir a ${service.name}`}
                aria-current={active === index ? "step" : undefined}
                className={active === index ? styles.storyDotActive : styles.storyDot}
              />
            ))}
          </div>
          <span className={styles.storyScrollHint}>Desliza para descubrir <ArrowDown size={16} aria-hidden="true" /></span>
        </div>
      </div>
    </div>
  )
}
