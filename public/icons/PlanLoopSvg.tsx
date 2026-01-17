// components/HourglassLinesSvg.tsx
import * as React from "react"

type Props = React.SVGProps<SVGSVGElement> & {
  levels?: number
  strokeWidth?: number
  gap?: number
  /** qué tan angosta es la “cintura” */
  waist?: number
  /** qué tan ancho es el reloj arriba/abajo */
  maxHalf?: number
  /** inclinación “3D” del lado derecho */
  depth?: number
}

export function HourglassLinesSvg({
  levels = 28,
  strokeWidth = 3,
  gap = 14,
  waist = 10,
  maxHalf = 210,
  depth = 60,
  ...props
}: Props) {
  const W = 900
  const H = 600
  const cx = W / 2
  const topY = 90
  const mid = Math.floor(levels / 2)
  const bottomY = topY + (levels - 1) * gap

  // ancho por nivel: se contrae hacia el centro y vuelve a expandir
  const halfAt = (i: number) => {
    const t = i <= mid ? i / mid : (levels - 1 - i) / (levels - 1 - mid || 1) // 0..1..0
    // t=0 en extremos (arriba/abajo), t=1 en cintura
    const half = maxHalf - t * (maxHalf - waist)
    return half
  }

  const lines = Array.from({ length: levels }, (_, i) => {
    const y = topY + i * gap
    const half = halfAt(i)

    // 3D: parte derecha “se va” hacia afuera progresivamente (más en extremos)
    const distToCenter = Math.abs(i - mid) / mid // 0 en cintura, 1 en extremos
    const rightShift = distToCenter * depth

    const leftX1 = cx - half
    const leftX2 = cx

    const rightX1 = cx
    const rightX2 = cx + half + rightShift

    // lectura moderna: arriba/abajo más “pesado”, cintura más limpia
    const baseOpacity = 0.85 - (1 - distToCenter) * 0.35 // más opaco en extremos
    const leftOpacity = baseOpacity
    const rightOpacity = baseOpacity * 0.7

    return (
      <g key={i}>
        <line
          x1={leftX1}
          y1={y}
          x2={leftX2}
          y2={y}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          opacity={leftOpacity}
        />
        <line
          x1={rightX1}
          y1={y}
          x2={rightX2}
          y2={y}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          opacity={rightOpacity}
        />
      </g>
    )
  })

  // “arena” sugerida: algunas líneas extra cerca del centro (sin diagonales)
  const sand = Array.from({ length: 5 }, (_, j) => {
    const y = topY + (mid - 2 + j) * gap
    const half = waist + 18 + j * 8
    return (
      <line
        key={j}
        x1={cx - half * 0.65}
        y1={y}
        x2={cx + half * 0.65}
        y2={y}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        opacity={0.18}
      />
    )
  })

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      {/* Solo líneas horizontales */}
      {lines}

      {/* Detalle de “arena” (sutil, también horizontal) */}
      {sand}

      {/* Sombra base sutil */}
      <line
        x1={cx - maxHalf}
        y1={bottomY + 30}
        x2={cx + maxHalf + depth}
        y2={bottomY + 30}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        opacity={0.12}
      />
    </svg>
  )
}
