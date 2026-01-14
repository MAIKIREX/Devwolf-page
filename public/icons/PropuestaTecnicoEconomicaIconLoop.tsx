"use client"

import * as React from "react"
import { motion, useAnimationControls, MotionProps } from "framer-motion"

type Props = Omit<React.SVGProps<SVGSVGElement>, "onAnimationComplete"> &
  MotionProps & {
  holdMs?: number
  gapMs?: number
  }

export function PropuestaTecnicoEconomicaIconLoop({
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
    show: { transition: { staggerChildren: 0.10 } }, // paso a paso
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
      {/* Documento */}
      <motion.path
        variants={draw}
        transition={{ duration: 0.65, ease: "easeInOut" }}
        d="M7 3h7l3 3v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
      />
      <motion.path
        variants={draw}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        d="M14 3v3h3"
      />

      {/* Líneas “técnicas” del documento */}
      <motion.path variants={draw} transition={{ duration: 0.25 }} d="M8 10h5" />
      <motion.path variants={draw} transition={{ duration: 0.25 }} d="M8 12.5h4" />

      {/* Gráfico (crecimiento) */}
      <motion.path
        variants={draw}
        transition={{ duration: 0.45, ease: "easeInOut" }}
        d="M8 16l2.2-2.2 2.1 1.9 3.7-3.7"
      />
      <motion.path
        variants={draw}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        d="M16 12.5h2v2"
      />

      {/* Moneda (económico) con “pop” al final */}
      <motion.g
        variants={{
          hidden: { opacity: 0, scale: 0.88 },
          show: { opacity: 1, scale: [0.88, 1.08, 1] },
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <motion.path
          variants={draw}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          d="M18.2 18.2m-2.2 0a2.2 2.2 0 1 0 4.4 0a2.2 2.2 0 1 0 -4.4 0"
        />
        <motion.path
          variants={draw}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          d="M18.2 16.9v2.6"
        />
        <motion.path
          variants={draw}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          d="M19.1 17.4c0-.4-.4-.7-.9-.7s-.9.3-.9.7.4.7.9.7.9.3.9.7-.4.7-.9.7-.9-.3-.9-.7"
        />
      </motion.g>
    </motion.svg>
  )
}
