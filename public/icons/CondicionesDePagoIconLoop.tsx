"use client"

import * as React from "react"
import { motion, useAnimationControls, MotionProps } from "framer-motion"

type Props = Omit<React.SVGProps<SVGSVGElement>, "onAnimationComplete"> &
  MotionProps & {
    holdMs?: number
    gapMs?: number
  }

export function CondicionesDePagoIconLoop({
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
    show: { transition: { staggerChildren: 0.10 } },
  }

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    show: { pathLength: 1, opacity: 1 },
  }

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
      {/* Tarjeta / documento (pago) */}
      <motion.rect
        x="4"
        y="6"
        width="16"
        height="12"
        rx="2"
        variants={draw}
        transition={{ duration: 0.65, ease: "easeInOut" }}
      />
      <motion.path
        variants={draw}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        d="M4 10h16"
      />
      <motion.path variants={draw} transition={{ duration: 0.25 }} d="M7 13h4.5" />
      <motion.path variants={draw} transition={{ duration: 0.25 }} d="M7 15.5h3" />

      {/* Calendario (condiciones / fechas) */}
      <motion.rect
        x="13.2"
        y="12.2"
        width="6.8"
        height="6.8"
        rx="1.4"
        variants={draw}
        transition={{ duration: 0.45, ease: "easeInOut" }}
      />
      <motion.path variants={draw} transition={{ duration: 0.22 }} d="M14.7 11.7v1.4" />
      <motion.path variants={draw} transition={{ duration: 0.22 }} d="M18.5 11.7v1.4" />
      <motion.path variants={draw} transition={{ duration: 0.22 }} d="M13.2 14.3H20" />

      {/* Check de aprobación (pago acordado) con pop */}
      <motion.g
        variants={{
          hidden: { opacity: 0, scale: 0.88 },
          show: { opacity: 1, scale: [0.88, 1.08, 1] },
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <motion.circle
          cx="18.2"
          cy="18.2"
          r="2.2"
          variants={circleDraw}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ strokeDasharray: 999 }}
        />
        <motion.path
          variants={draw}
          transition={{ duration: 0.32, ease: "easeInOut" }}
          d="M17.2 18.2l0.7 0.7 1.6-1.7"
        />
      </motion.g>
    </motion.svg>
  )
}
