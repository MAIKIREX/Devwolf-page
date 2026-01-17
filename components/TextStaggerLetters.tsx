
"use client"

import { useMemo } from "react"
import { motion, type Variants } from "framer-motion"

export function TextStaggerLetters({text}: {text: string}) {
  const letters = useMemo(() => text.split(""), [text])

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.02 } },
  }

  const child: Variants = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
  }

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="show"
      className="text-4xl md:text-9xl text-white font-light tracking-tight"
      aria-label={text}
    >
      {letters.map((ch, i) => (
        <motion.span key={i} variants={child} className="inline-block">
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </motion.h1>
  )
}
