"use client"

import * as React from "react"
import { motion, useAnimationControls, MotionProps } from "framer-motion"

type Props = Omit<React.SVGProps<SVGSVGElement>, "onAnimationComplete"> &
  MotionProps & {
    holdMs?: number
    gapMs?: number
  }

export function CierreYPostventaIconLoop({
  holdMs = 900,
  gapMs = 250,
  ...props
}: Props) {
  const controls = useAnimationControls()

  React.useEffect(() => {
    let alive = true
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

    ;(async () => {
      while (alive) {
        await controls.start("show")
        await sleep(holdMs)
        await controls.start("hidden")
        await sleep(gapMs)
      }
    })()

    return () => {
      alive = false
    }
  }, [controls, holdMs, gapMs])

  const container = {
    hidden: { transition: { staggerChildren: 0.08, staggerDirection: -1 } },
    show: { transition: { staggerChildren: 0.1 } },
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
      {/* Manual / libro abierto */}
      <motion.path
        variants={draw}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        d="M12 6c-1.6-1-3.4-1.5-5.5-1.5H5.5A1.5 1.5 0 0 0 4 6v11a1 1 0 0 0 1 1h1.5c2.1 0 3.9.5 5.5 1.5V6z"
      />
      <motion.path
        variants={draw}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        d="M12 6c1.6-1 3.4-1.5 5.5-1.5H19.5A1.5 1.5 0 0 1 21 6v11a1 1 0 0 1-1 1H17.5c-2.1 0-3.9.5-5.5 1.5V6z"
      />
      <motion.path
        variants={draw}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        d="M12 6v14"
      />
      {/* líneas del manual */}
      <motion.path variants={draw} transition={{ duration: 0.22 }} d="M6.6 9.2h3.8" />
      <motion.path variants={draw} transition={{ duration: 0.22 }} d="M13.6 9.2h3.8" />

      {/* Check (pruebas finales / cierre) con pop */}
      <motion.g
        variants={{
          hidden: { opacity: 0, scale: 0.88 },
          show: { opacity: 1, scale: [0.88, 1.08, 1] },
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <motion.circle
          cx="18.2"
          cy="16.2"
          r="2.2"
          variants={circleDraw}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ strokeDasharray: 999 }}
        />
        <motion.path
          variants={draw}
          transition={{ duration: 0.32, ease: "easeInOut" }}
          d="M17.2 16.2l0.7 0.7 1.6-1.7"
        />
      </motion.g>

      {/* Llave inglesa (mantenimiento / postventa) */}
      <motion.path
        variants={draw}
        transition={{ duration: 0.55, ease: "easeInOut" }}
        d="M9.2 16.1l-2.9 2.9a1 1 0 0 0 1.4 1.4l2.9-2.9"
      />
      <motion.path
        variants={draw}
        transition={{ duration: 0.55, ease: "easeInOut" }}
        d="M10 15.3l1.2-1.2a2.2 2.2 0 0 1 3.1 0l.2.2-1.6 1.6 1.2 1.2 1.6-1.6.2.2a2.2 2.2 0 0 1 0 3.1l-1.2 1.2"
      />
    </motion.svg>
  )
}
