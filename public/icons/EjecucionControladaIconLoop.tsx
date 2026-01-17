"use client"

import * as React from "react"
import { motion, useAnimationControls, MotionProps } from "framer-motion"

type Props = Omit<React.SVGProps<SVGSVGElement>, "onAnimationComplete"> &
  MotionProps & {
    holdMs?: number
    gapMs?: number
  }

export function EjecucionControladaIconLoop({
  holdMs = 900,
  gapMs = 250,
  ...props
}: Props) {
  const controls = useAnimationControls()

  React.useEffect(() => {
    let alive = true
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))
    const nextFrame = () => new Promise((r) => requestAnimationFrame(() => r(undefined)))

    ;(async () => {
      await nextFrame()
      if (!alive) return
      while (alive) {
        if (!alive) break
        await controls.start("show")
        await sleep(holdMs)
        if (!alive) break
        await controls.start("hidden")
        await sleep(gapMs)
      }
    })()

    return () => {
      alive = false
      controls.stop()
    }
  }, [controls, holdMs, gapMs])

  const container = {
    hidden: { transition: { staggerChildren: 0.08, staggerDirection: -1 } },
    show: { transition: { staggerChildren: 0.10 } }, // paso a paso
  }

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    show: { pathLength: 1, opacity: 1 },
  }

  // Para círculos: usamos strokeDasharray/dashoffset para “dibujarlos”
  const circleDraw = {
    hidden: { opacity: 0, strokeDashoffset: 999 },
    show: { opacity: 1, strokeDashoffset: 0 },
  }

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
      variants={container}
      initial="hidden"
      animate={controls}
      {...props}
    >
      {/* CASCO (construcción) */}
      <motion.path
        variants={draw}
        transition={{ duration: 0.55, ease: "easeInOut" }}
        d="M6 10a6 6 0 0 1 12 0v1H6v-1z"
      />
      <motion.path
        variants={draw}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        d="M4 12h16"
      />
      <motion.path
        variants={draw}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        d="M12 6v5"
      />

      {/* ENGRANAJE (ejecución) */}
      <motion.g>
        {/* círculo del engranaje */}
        <motion.circle
          cx="8.5"
          cy="17.5"
          r="2.2"
          variants={circleDraw}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ strokeDasharray: 999 }}
        />
        {/* “dientes” */}
        <motion.path variants={draw} transition={{ duration: 0.22 }} d="M8.5 14.6v-0.9" />
        <motion.path variants={draw} transition={{ duration: 0.22 }} d="M8.5 21.3v-0.9" />
        <motion.path variants={draw} transition={{ duration: 0.22 }} d="M5.6 17.5h-0.9" />
        <motion.path variants={draw} transition={{ duration: 0.22 }} d="M12.3 17.5h-0.9" />
        {/* detalle interno */}
        <motion.path
          variants={draw}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          d="M8.5 16.4v2.2"
        />
        <motion.path
          variants={draw}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          d="M7.4 17.5h2.2"
        />
      </motion.g>

      {/* CHECK (control / calidad) con “pop” */}
      <motion.g
        variants={{
          hidden: { opacity: 0, scale: 0.88 },
          show: { opacity: 1, scale: [0.88, 1.08, 1] },
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <motion.circle
          cx="17.2"
          cy="17.5"
          r="2.6"
          variants={circleDraw}
          transition={{ duration: 0.55, ease: "easeInOut" }}
          style={{ strokeDasharray: 999 }}
        />
        <motion.path
          variants={draw}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          d="M15.9 17.6l0.9 0.9 1.9-2"
        />
      </motion.g>
    </motion.svg>
  )
}
