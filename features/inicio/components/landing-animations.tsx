"use client"

import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function LandingAnimations() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const context = gsap.context(() => {
      gsap.from("[data-hero-enter]", {
        autoAlpha: 0,
        y: 36,
        duration: 1.05,
        ease: "power3.out",
        stagger: 0.13,
        clearProps: "opacity,visibility,transform",
      })

      gsap.to("[data-hero-image]", {
        yPercent: 15,
        scale: 1.1,
        ease: "none",
        scrollTrigger: { trigger: "[data-hero]", start: "top top", end: "bottom top", scrub: 1 },
      })

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.from(element, {
          autoAlpha: 0,
          y: 45,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 88%", once: true },
          clearProps: "opacity,visibility,transform",
        })
      })

      gsap.utils.toArray<HTMLElement>("[data-card]").forEach((element, index) => {
        gsap.from(element, {
          autoAlpha: 0,
          y: 60,
          duration: 0.85,
          delay: (index % 3) * 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 94%", once: true },
          clearProps: "opacity,visibility,transform",
        })
      })

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
        gsap.fromTo(element, { yPercent: -7 }, {
          yPercent: 7,
          ease: "none",
          scrollTrigger: { trigger: element.parentElement, start: "top bottom", end: "bottom top", scrub: 1 },
        })
      })


      const progress = document.querySelector<HTMLElement>("[data-scroll-progress]")
      if (progress) {
        ScrollTrigger.create({
          start: 0,
          end: "max",
          onUpdate: (self) => gsap.set(progress, { scaleX: self.progress }),
        })
      }
    })

    return () => context.revert()
  }, [])

  return null
}
