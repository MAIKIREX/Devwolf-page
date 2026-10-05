"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

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

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const scenes = Array.from(track.querySelectorAll<HTMLElement>("[data-story-scene]"))
    const match = gsap.matchMedia()

    match.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      scenes.forEach((scene, index) => {
        const visual = scene.querySelector<HTMLElement>("[data-story-visual]")
        const copy = scene.querySelector<HTMLElement>("[data-story-copy]")
        if (!visual || !copy) return

        const copyParts = Array.from(copy.children)
        const imageDirection = index % 2 === 0 ? 1 : -1

        gsap.set(visual, { clipPath: "inset(0% 0% 100% 0%)", x: imageDirection * 28, y: 40 })
        gsap.set(copyParts, { autoAlpha: 0, x: imageDirection * -18, y: 32 })

        gsap.timeline({
          scrollTrigger: {
            trigger: scene,
            start: "top 88%",
            end: "top 22%",
            scrub: 0.55,
          },
        })
          .to(visual, {
            clipPath: "inset(0% 0% 0% 0%)",
            x: 0,
            y: 0,
            duration: 1,
            ease: "power2.out",
          }, 0)
          .to(copyParts, {
            autoAlpha: 1,
            x: 0,
            y: 0,
            duration: 0.65,
            stagger: 0.08,
            ease: "power2.out",
          }, 0.16)
      })
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

  return (
    <div ref={trackRef} className={styles.storyTrack}>
      <div className={styles.storyStage}>
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
      </div>
    </div>
  )
}
