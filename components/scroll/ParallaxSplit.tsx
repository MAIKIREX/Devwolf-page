"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { Children, ReactNode, useMemo, useRef } from "react";

type ParallaxItemProps = {
  children: ReactNode;
  index: number;
};

function ParallaxItem({ children, index }: ParallaxItemProps) {
  const container = useRef<HTMLDivElement>(null);
  
  // Configuramos el scroll para observar la sección desde que asoma por abajo 
  // hasta que desaparece por arriba
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  // Creamos un spring para que la transición de escala sea mucho más suave (orgánica)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  });

  /**
   * EXPLICACIÓN DE LOS RANGOS [0, 0.2, 0.8, 1]:
   * 0.0: La sección está debajo de la pantalla (inicio de entrada).
   * 0.2: La sección ya ocupó su lugar (fin de entrada).
   * 0.8: La sección empieza a salir hacia arriba (inicio de salida).
   * 1.0: La sección ya no es visible arriba (fin de salida).
   */

  // EFECTO ESCALA: Crece al entrar (0.8 -> 1) y se encoge al salir (1 -> 0.8)
  const scale = useTransform(
    smoothProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );

  // EFECTO OPACIDAD: Aparece suavemente al entrar y desaparece al salir
  const opacity = useTransform(
    smoothProgress,
    [0, 0.1, 0.9, 1],
    [0, 1, 1, 0]
  );

  // EFECTO TRASLACIÓN (Push): 
  // Al entrar viene un poco desde abajo (10%)
  // Al salir se mueve un poco hacia arriba (-10%)
  const y = useTransform(
    smoothProgress,
    [0, 0.2, 0.8, 1],
    ["10%", "0%", "0%", "-10%"]
  );

  return (
    <div 
      ref={container} 
      className="relative w-full"
      style={{ 
        minHeight: "100vh",
        zIndex: index, // Cada sección se apila sobre la anterior
        marginBottom: "-5vh" // Un ligero solapamiento para que no se vea el fondo negro
      }}
    >
      <motion.div
        style={{
          scale,
          opacity,
          y,
        }}
        className="w-full h-full origin-center will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function SmoothPushGrowWrapper({ children }: { children: ReactNode }) {
  const scenes = useMemo(() => Children.toArray(children), [children]);

  return (
    // bg-neutral-950 o el color de fondo de tu web para que las transiciones sean elegantes
    <div className="relative bg-neutral-950 flex flex-col items-center">
      {scenes.map((scene, i) => (
        <ParallaxItem key={i} index={i}>
          {scene}
        </ParallaxItem>
      ))}
    </div>
  );
}
