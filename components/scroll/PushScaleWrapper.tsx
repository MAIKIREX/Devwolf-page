"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Children, ReactNode, useMemo, useRef } from "react";

type ScrollItemProps = {
  children: ReactNode;
};

function ScrollItem({ children }: ScrollItemProps) {
  const container = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    // "start 0.9": inicia cuando el tope del elemento llega al 90% de la pantalla (abajo)
    // "end 0.1": termina cuando el fondo del elemento llega al 10% de la pantalla (arriba)
    offset: ["start 0.9", "end 0.1"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 15,
  });

  // Animaciones más sutiles para que no se "rompan" en objetos pequeños
  const scale = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.92, 1, 1, 0.92]);
  const opacity = useTransform(smoothProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const y = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [30, 0, 0, -30]);

  return (
    <div ref={container} className="w-full "> 
      <motion.div
        style={{
          scale,
          opacity,
          y,
        }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function PushScaleWrapper({ children }: { children: ReactNode }) {
  const items = useMemo(() => Children.toArray(children), [children]);

  return (
    <div className="w-full flex flex-col items-center">
      {items.map((item, i) => (
        <ScrollItem key={i}>
          {item}
        </ScrollItem>
      ))}
    </div>
  );
}
