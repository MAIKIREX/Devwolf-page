"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import styles from "./home-enfoque.module.css"

gsap.registerPlugin(ScrollTrigger)

// Icon 1: 4-blade kinetic swirl (matching Image 2 top sphere)
function TurbineSwirlIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="amberGrad1" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffd166" />
          <stop offset="50%" stopColor="#fca311" />
          <stop offset="100%" stopColor="#e85d04" />
        </linearGradient>
      </defs>
      <g fill="url(#amberGrad1)">
        {/* Top blade */}
        <path d="M24 20V9C24 7.9 25 7 26.1 7.2C31.5 8.2 37.8 12.8 39.5 18.5C40.1 20.3 38.6 22 36.8 22H26C24.9 22 24 21.1 24 20Z" />
        {/* Right blade */}
        <path d="M28 24H39C40.1 24 41 25 40.8 26.1C39.8 31.5 35.2 37.8 29.5 39.5C27.7 40.1 26 38.6 26 36.8V26C26 24.9 26.9 24 28 24Z" />
        {/* Bottom blade */}
        <path d="M24 28V39C24 40.1 23 41 21.9 40.8C16.5 39.8 10.2 35.2 8.5 29.5C7.9 27.7 9.4 26 11.2 26H22C23.1 26 24 26.9 24 28Z" />
        {/* Left blade */}
        <path d="M20 24H9C7.9 24 7 23 7.2 21.9C8.2 16.5 12.8 10.2 18.5 8.5C20.3 7.9 22 9.4 22 11.2V22C22 23.1 21.1 24 20 24Z" />
      </g>
    </svg>
  )
}

// Icon 2: Circular cycle loop (matching Image 2 bottom-left sphere)
function CycleArrowsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="amberGrad2" x1="10" y1="10" x2="38" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffd166" />
          <stop offset="50%" stopColor="#fca311" />
          <stop offset="100%" stopColor="#e85d04" />
        </linearGradient>
      </defs>
      <g fill="url(#amberGrad2)">
        {/* Top-Right Arc with arrowhead */}
        <path d="M37 20C35.8 14.8 31.2 11 25.5 11C19.2 11 14 15.6 13.2 21.5C13 22.8 14.1 24 15.5 24H16.2C17.4 24 18.3 23.1 18.5 22C19.1 18.2 22 15.5 25.5 15.5C29 15.5 32 17.8 33 21H30.5C29.4 21 28.8 22.3 29.6 23.1L34.6 28.1C35.4 28.9 36.7 28.9 37.4 28.1L42.4 23.1C43.2 22.3 42.6 21 41.5 21H37.2L37 20Z" />
        {/* Bottom-Left Arc with arrowhead */}
        <path d="M11 28C12.2 33.2 16.8 37 22.5 37C28.8 37 34 32.4 34.8 26.5C35 25.2 33.9 24 32.5 24H31.8C30.6 24 29.7 24.9 29.5 26C28.9 29.8 26 32.5 22.5 32.5C19 32.5 16 30.2 15 27H17.5C18.6 27 19.2 25.7 18.4 24.9L13.4 19.9C12.6 19.1 11.3 19.1 10.6 19.9L5.6 24.9C4.8 25.7 5.4 27 6.5 27H10.8L11 28Z" />
      </g>
    </svg>
  )
}

// Icon 3: 8-petal geometric starburst / asterism (matching Image 2 bottom-right sphere)
function AsterismBurstIcon({ className }: { className?: string }) {
  const angles = [0, 45, 90, 135, 180, 225, 270, 315]
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="amberGrad3" x1="12" y1="12" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffd166" />
          <stop offset="50%" stopColor="#fca311" />
          <stop offset="100%" stopColor="#e85d04" />
        </linearGradient>
      </defs>
      <g fill="url(#amberGrad3)" transform="translate(24, 24)">
        {angles.map((angle) => (
          <rect
            key={angle}
            x="-3"
            y="-18"
            width="6"
            height="11"
            rx="3"
            transform={`rotate(${angle})`}
          />
        ))}
        {/* Core ring highlight */}
        <circle r="3.2" fill="#ffd166" opacity="0.9" />
      </g>
    </svg>
  )
}

const disciplines = [
  {
    id: "01",
    title: "Visión\nintegral",
    Icon: TurbineSwirlIcon,
  },
  {
    id: "02",
    title: "Ejecución\ntécnica",
    Icon: CycleArrowsIcon,
  },
  {
    id: "03",
    title: "Soporte\ncontinuo",
    Icon: AsterismBurstIcon,
  },
]

export function HomeEnfoque() {
  const sectionRef = useRef<HTMLElement>(null)
  const arenaRef = useRef<HTMLDivElement>(null)
  const auraRef = useRef<HTMLDivElement>(null)
  const sphere1Ref = useRef<HTMLDivElement>(null)
  const sphere2Ref = useRef<HTMLDivElement>(null)
  const sphere3Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const arena = arenaRef.current
    const aura = auraRef.current
    const s1 = sphere1Ref.current
    const s2 = sphere2Ref.current
    const s3 = sphere3Ref.current

    if (!section || !arena || !aura || !s1 || !s2 || !s3) return

    const titles = Array.from(arena.querySelectorAll<HTMLElement>("[data-title]"))
    const icons = Array.from(arena.querySelectorAll<HTMLElement>("[data-icon]"))
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reducedMotion) {
      const mobile = window.matchMedia("(max-width: 768px)").matches
      const tablet = window.matchMedia("(max-width: 1024px)").matches
      const spread = mobile ? Math.min(180, (arena.clientHeight - s1.clientWidth) / 2 - 22) : 0
      gsap.set(aura, { autoAlpha: 0 })
      gsap.set(s1, { x: mobile ? 0 : tablet ? -270 : -390, y: mobile ? -spread : 0 })
      gsap.set(s2, { x: 0, y: 0 })
      gsap.set(s3, { x: mobile ? 0 : tablet ? 270 : 390, y: mobile ? spread : 0 })
      gsap.set(icons, { y: mobile ? -23 : -27 })
      gsap.set(titles, { autoAlpha: 1, y: 0 })
      return
    }

    const mm = gsap.matchMedia()

    mm.add(
      {
        isDesktop: "(min-width: 1025px)",
        isTablet: "(min-width: 769px) and (max-width: 1024px)",
        isMobile: "(max-width: 768px)",
      },
      (context) => {
        const { isTablet, isMobile } = context.conditions as {
          isTablet: boolean
          isMobile: boolean
        }

        // Coordinates configuration
        let clusterCoords = {
          s1: { x: 0, y: -90 },
          s2: { x: -115, y: 80 },
          s3: { x: 115, y: 80 },
        }
        let separatedCoords = {
          s1: { x: -390, y: 0 },
          s2: { x: 0, y: 0 },
          s3: { x: 390, y: 0 },
        }

        if (isTablet) {
          clusterCoords = {
            s1: { x: 0, y: -75 },
            s2: { x: -95, y: 65 },
            s3: { x: 95, y: 65 },
          }
          separatedCoords = {
            s1: { x: -270, y: 0 },
            s2: { x: 0, y: 0 },
            s3: { x: 270, y: 0 },
          }
        } else if (isMobile) {
          const spread = Math.min(180, (arena.clientHeight - s1.clientWidth) / 2 - 22)
          clusterCoords = {
            s1: { x: 0, y: -65 },
            s2: { x: -65, y: 55 },
            s3: { x: 65, y: 55 },
          }
          separatedCoords = {
            s1: { x: 0, y: -spread },
            s2: { x: 0, y: 0 },
            s3: { x: 0, y: spread },
          }
        }

        // Initial setup matching Image 2 triad cluster
        gsap.set(s1, { x: clusterCoords.s1.x, y: clusterCoords.s1.y, scale: 1 })
        gsap.set(s2, { x: clusterCoords.s2.x, y: clusterCoords.s2.y, scale: 1 })
        gsap.set(s3, { x: clusterCoords.s3.x, y: clusterCoords.s3.y, scale: 1 })
        gsap.set(aura, { autoAlpha: 1, scale: 1 })
        gsap.set(icons, { y: 0 })
        gsap.set(titles, { autoAlpha: 0, y: 18 })

        // Master scroll-driven timeline with ScrollTrigger
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: isMobile ? arena : section,
            start: isMobile ? "top top+=76" : "top top",
            end: isMobile ? "+=110%" : "+=130%",
            pin: isMobile ? arena : section,
            scrub: 0.8,
            anticipatePin: 1,
          },
        })

        // 1. Spheres separate smoothly
        tl.to(
          s1,
          {
            x: separatedCoords.s1.x,
            y: separatedCoords.s1.y,
            ease: "power2.inOut",
            duration: 1,
          },
          0
        )
        tl.to(
          s2,
          {
            x: separatedCoords.s2.x,
            y: separatedCoords.s2.y,
            ease: "power2.inOut",
            duration: 1,
          },
          0
        )
        tl.to(
          s3,
          {
            x: separatedCoords.s3.x,
            y: separatedCoords.s3.y,
            ease: "power2.inOut",
            duration: 1,
          },
          0
        )

        // 2. Center Venn radiant glow fades out as spheres part
        tl.to(
          aura,
          {
            autoAlpha: 0,
            scale: 0.35,
            ease: "power2.inOut",
            duration: 0.7,
          },
          0
        )

        // Icons make room for the titles only after the spheres start to separate.
        tl.to(
          icons,
          {
            y: isMobile ? -23 : -27,
            ease: "power2.inOut",
            duration: 0.55,
          },
          0.28
        )

        // Titles rise into view as the three disciplines reach their positions.
        tl.to(
          titles,
          {
            autoAlpha: 1,
            y: 0,
            stagger: 0.08,
            ease: "power3.out",
            duration: 0.46,
          },
          0.48
        )

        // Extra settle window for comfortable reading before unpinning
        tl.to({}, { duration: 0.45 })
      }
    )

    return () => {
      mm.revert()
    }
  }, [])

  return (
    <section id="enfoque" ref={sectionRef} className={styles.enfoqueSection} aria-labelledby="enfoque-title">
      <div className={styles.pinStage}>
        <header className={styles.header}>
          <div className={styles.headerLeft} data-reveal>
            <p className={styles.kicker}>03 / Nuestro enfoque</p>
            <h2 id="enfoque-title" className={styles.title}>
              Diferentes disciplinas.<br />
              <em>Una misma visión.</em>
            </h2>
          </div>

          <div className={styles.headerRight} data-reveal>
            <p className={styles.headerLead}>
              Cada proyecto funciona mejor cuando sus partes se piensan juntas. Coordinamos soluciones físicas y digitales con un proceso claro.
            </p>
          </div>
        </header>

        {/* The Spheres Arena */}
        <div ref={arenaRef} className={styles.arena} aria-label="Tres pilares del enfoque Devwolf">
          {/* Luminous warm intersection glow (Image 2 Venn core) */}
          <div ref={auraRef} className={styles.centerAura} aria-hidden="true" />

          {/* Sphere 1: Visión integral (Top in cluster, Left on separation) */}
          <div
            ref={sphere1Ref}
            className={`${styles.sphere} ${styles.sphereOne}`}
            role="article"
            aria-label={`${disciplines[0].id}: ${disciplines[0].title.replace("\n", " ")}`}
          >
            <div data-core className={styles.sphereCore}>
              <div data-icon className={styles.iconWrap}>
                <TurbineSwirlIcon />
              </div>
              <h3 data-title className={styles.sphereTitle}>
                {disciplines[0].title.split("\n").map((part, i) => (
                  <span key={i}>
                    {part}
                    {i === 0 && <br />}
                  </span>
                ))}
              </h3>
            </div>
          </div>

          {/* Sphere 2: Ejecución técnica (Bottom-Left in cluster, Center on separation) */}
          <div
            ref={sphere2Ref}
            className={`${styles.sphere} ${styles.sphereTwo}`}
            role="article"
            aria-label={`${disciplines[1].id}: ${disciplines[1].title.replace("\n", " ")}`}
          >
            <div data-core className={styles.sphereCore}>
              <div data-icon className={styles.iconWrap}>
                <CycleArrowsIcon />
              </div>
              <h3 data-title className={styles.sphereTitle}>
                {disciplines[1].title.split("\n").map((part, i) => (
                  <span key={i}>
                    {part}
                    {i === 0 && <br />}
                  </span>
                ))}
              </h3>
            </div>
          </div>

          {/* Sphere 3: Soporte continuo (Bottom-Right in cluster, Right on separation) */}
          <div
            ref={sphere3Ref}
            className={`${styles.sphere} ${styles.sphereThree}`}
            role="article"
            aria-label={`${disciplines[2].id}: ${disciplines[2].title.replace("\n", " ")}`}
          >
            <div data-core className={styles.sphereCore}>
              <div data-icon className={styles.iconWrap}>
                <AsterismBurstIcon />
              </div>
              <h3 data-title className={styles.sphereTitle}>
                {disciplines[2].title.split("\n").map((part, i) => (
                  <span key={i}>
                    {part}
                    {i === 0 && <br />}
                  </span>
                ))}
              </h3>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
