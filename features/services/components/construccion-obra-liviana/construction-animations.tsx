"use client"

import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function ConstructionAnimations() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    gsap.registerPlugin(ScrollTrigger)
    const context = gsap.context(() => {
      gsap.fromTo("[data-construction-enter]", { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.85, stagger: 0.12, ease: "power2.out", delay: 0.1 })
      gsap.utils.toArray<HTMLElement>("[data-construction-reveal]").forEach((element) => {
        gsap.fromTo(element, { opacity: 0, y: 34 }, { opacity: 1, y: 0, duration: 0.75, ease: "power2.out", scrollTrigger: { trigger: element, start: "top 87%", once: true } })
      })
      gsap.utils.toArray<HTMLElement>("[data-construction-service]").forEach((element) => {
        gsap.fromTo(element, { opacity: 0, y: 48 }, { opacity: 1, y: 0, duration: 0.85, ease: "power2.out", scrollTrigger: { trigger: element, start: "top 88%", once: true } })
      })
      gsap.utils.toArray<HTMLElement>("[data-construction-parallax]").forEach((element) => {
        gsap.fromTo(element, { yPercent: -5 }, { yPercent: 5, ease: "none", scrollTrigger: { trigger: element.parentElement, start: "top bottom", end: "bottom top", scrub: 1 } })
      })
      gsap.to("[data-construction-progress]", { scaleX: 1, ease: "none", scrollTrigger: { trigger: "main", start: "top top", end: "bottom bottom", scrub: 0.15 } })
      gsap.to("[data-construction-line]", { scaleX: 1, ease: "none", scrollTrigger: { trigger: "#proceso", start: "top 65%", end: "bottom 50%", scrub: 1 } })
    })
    return () => context.revert()
  }, [])
  return null
}
