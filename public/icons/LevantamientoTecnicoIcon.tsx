"use client"

import * as React from "react"
import { motion, useAnimationControls, MotionProps } from "framer-motion"

type Props = Omit<React.SVGProps<SVGSVGElement>, "onAnimationComplete"> &
  MotionProps & {
  /** Pausa cuando ya terminó de “armarse” (ms) */
  holdMs?: number
  /** Pausa entre reinicios (ms) */
  gapMs?: number
  }

export function LevantamientoTecnicoIconLoop({
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
    hidden: {
      transition: {
        staggerChildren: 0.08,
        staggerDirection: -1,
      },
    },
    show: {
      transition: {
        staggerChildren: 0.10, // paso a paso
      },
    },
  }

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    show: { pathLength: 1, opacity: 1 },
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
      {/* Clipboard */}
      <motion.path variants={draw} transition={{ duration: 0.25 }} d="M9 4.5h6" />
      <motion.path
        variants={draw}
        transition={{ duration: 0.45, ease: "easeInOut" }}
        d="M10 3h4a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"
      />
      <motion.path
        variants={draw}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        d="M7 6h10a2 2 0 0 1 2 2v11a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V8a2 2 0 0 1 2-2z"
      />

      {/* Ruler / measurement */}
      <motion.path variants={draw} transition={{ duration: 0.28 }} d="M7.5 10.5h6.5" />
      <motion.path variants={draw} transition={{ duration: 0.28 }} d="M7.5 13h6.5" />
      <motion.path variants={draw} transition={{ duration: 0.28 }} d="M7.5 15.5h4.5" />
      <motion.path variants={draw} transition={{ duration: 0.28 }} d="M14 10.5v5" />

      {/* Check (sale al final con “pop”) */}
      <motion.g
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          show: { opacity: 1, scale: [0.9, 1.08, 1] },
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <motion.path
          variants={draw}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          d="M15.8 16.2l1.4 1.4 3-3"
        />
      </motion.g>
    </motion.svg>
  )
}
