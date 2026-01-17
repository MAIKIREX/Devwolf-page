"use client"

import * as React from "react"
import { motion, type Variants } from "framer-motion"
import { cn } from "@/lib/utils"

const offset: Variants = {
  rest: { x: 0, y: 0 },
  hover: { x: 7, y: -7 },
  tap: { x: 0, y: 0 },
}

type OffsetWrapperProps = {
  children: React.ReactNode
  className?: string
}

export function OffsetCardWrapper({ children, className }: OffsetWrapperProps) {
  return (
    <div className="relative inline-flex">
      {/* fondo oscuro (sin borde para evitar “desbordes” visuales en tablet) */}
      <div className="pointer-events-none absolute inset-0 rounded-xl bg-gray-500" />

      {/* tarjeta que se mueve */}
      <motion.div
        initial="rest"
        animate="rest"
        whileHover="hover"
        whileTap="tap"
        variants={offset}
        transition={{ type: "spring", stiffness: 220, damping: 20, mass: 0.9 }}
        className={cn(
          "relative",
          className
        )}
      >
        {children}
      </motion.div>
    </div>
  )
}
