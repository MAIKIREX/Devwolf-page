"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
  useMotionValueEvent,
} from "framer-motion";
import { Children, ReactNode, useMemo, useRef, useState } from "react";

type ParallaxProps = {
  children: ReactNode;
  travel?: string;
  spring?: { stiffness?: number; damping?: number };
  /** % del segmento que se “pausa” en el centro (0 a 0.8 aprox) */
  pause?: number; // default 0.25
};

type SceneProps = {
  scene: ReactNode;
  i: number;
  count: number;
  scrollYProgress: MotionValue<number>;
  travel: string;
  spring: { stiffness: number; damping: number };
  pause: number;
  zIndex: number;
  isActivePair: boolean;
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(n, max));
}

function ParallaxScene({
  scene,
  i,
  count,
  scrollYProgress,
  travel,
  spring,
  pause,
  zIndex,
  isActivePair,
}: SceneProps) {
  const step = 1 / (count - 1);

  const start = (i - 1) * step;
  const mid = i * step;
  const end = (i + 1) * step;

  const pauseClamped = Math.max(0, Math.min(pause, 0.8));
  const hold = step * pauseClamped;

  const holdStart = mid - hold / 2;
  const holdEnd = mid + hold / 2;

  // Movimiento con pausa al centro
  const y = useTransform(
    scrollYProgress,
    [start, holdStart, holdEnd, end],
    [travel, "0%", "0%", `-${travel}`]
  );

  const scaleRaw = useTransform(
    scrollYProgress,
    [start, holdStart, holdEnd, end],
    [0.8, 1, 1, 0.8]
  );
  const scale = useSpring(scaleRaw, spring);

  // Fade con pausa (esto es lo que te faltaba para “sentir” la pausa)
  const opacity = useTransform(
    scrollYProgress,
    [start, holdStart, holdEnd, end],
    [1, 1, 1, 1]
  );

  return (
    <motion.div
      className="absolute inset-0"
      style={{
        y,
        scale,
        opacity,
        zIndex,
        pointerEvents: isActivePair ? "auto" : "none",
      }}
    >
      {scene}
    </motion.div>
  );
}

export default function Parallax({
  children,
  travel = "70%",
  spring = { stiffness: 140, damping: 22 },
  pause = 0.25,
}: ParallaxProps) {
  const target = useRef<HTMLDivElement>(null);
  const scenes = useMemo(() => Children.toArray(children), [children]);
  const count = scenes.length;

  if (count === 0) return null;

  const { scrollYProgress } = useScroll({ target });

  if (count === 1) return <motion.div ref={target}>{scenes[0]}</motion.div>;

  // Track dirección + par activo (incoming/outgoing)
  const prev = useRef(0);
  const [pair, setPair] = useState(() => ({
    incoming: 1,
    outgoing: 0,
    direction: "down" as "down" | "up",
  }));

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const direction: "down" | "up" = latest >= prev.current ? "down" : "up";
    prev.current = latest;

    const step = 1 / (count - 1);
    const base = clamp(Math.floor(latest / step), 0, count - 2);

    const outgoing = direction === "down" ? base : base + 1;
    const incoming = direction === "down" ? base + 1 : base;

    setPair((p) => {
      if (
        p.incoming === incoming &&
        p.outgoing === outgoing &&
        p.direction === direction
      )
        return p;
      return { incoming, outgoing, direction };
    });
  });

  return (
    <motion.div ref={target} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden relative">
        {scenes.map((scene, i) => {
          const isIncoming = i === pair.incoming;
          const isOutgoing = i === pair.outgoing;

          // Incoming SIEMPRE arriba
          const zIndex = isIncoming ? 2 : isOutgoing ? 1 : 0;
          const isActivePair = isIncoming || isOutgoing;

          return (
            <ParallaxScene
              key={i}
              scene={scene}
              i={i}
              count={count}
              scrollYProgress={scrollYProgress}
              travel={travel}
              pause={pause}
              spring={{
                stiffness: spring.stiffness ?? 140,
                damping: spring.damping ?? 22,
              }}
              zIndex={zIndex}
              isActivePair={isActivePair}
            />
          );
        })}
      </div>

      <div style={{ height: `${(count - 1) * 100}vh` }} />
    </motion.div>
  );
}