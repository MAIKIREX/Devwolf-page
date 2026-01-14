"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Children, ReactNode, useEffect, useMemo, useRef, useState } from "react";

type StickySplitScrollProps = {
  left: ReactNode;
  children: ReactNode;
  spring?: { stiffness?: number; damping?: number };
  breakpoint?: number; // px (default 768)
};

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);

    onChange();
    // Safari old fallback
    if (mql.addEventListener) mql.addEventListener("change", onChange);
    else mql.addListener(onChange);

    return () => {
      if (mql.removeEventListener) mql.removeEventListener("change", onChange);
      else mql.removeListener(onChange);
    };
  }, [query]);

  return matches;
}

export default function StickySplitScroll({
  left,
  children,
  spring,
  breakpoint = 768,
}: StickySplitScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  const panels = useMemo(() => Children.toArray(children), [children]);
  const isDesktop = useMediaQuery(`(min-width: ${breakpoint}px)`);

  // En móvil: metemos "left" como el primer panel para hacer una sola historia.
  const storyPanels = useMemo(
    () => (isDesktop ? panels : [left, ...panels]),
    [isDesktop, left, panels]
  );

  const count = storyPanels.length;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // 0svh -> -(count-1)*100svh  (empuje perfecto por pantalla)
  const yRaw = useTransform(
    scrollYProgress,
    [0, 1],
    ["0svh", `-${Math.max(0, count - 1) * 100}svh`]
  );

  const y = useSpring(yRaw, {
    stiffness: spring?.stiffness ?? 220,
    damping: spring?.damping ?? 24,
  });

  return (
    <section
      ref={ref}
      className="relative"
      style={{ height: `${Math.max(1, count) * 100}svh` }}
    >
      {/* Desktop: 2 columnas (como tu diseño original) */}
      {isDesktop ? (
        <div className="sticky top-0 h-[100svh] grid grid-cols-2">
          {/* Izquierda fija */}
          <aside className="h-[100svh] flex items-center p-8 border-r">
            {left}
          </aside>

          {/* Derecha: ventana fija */}
          <div className="h-[100svh] overflow-hidden">
            <motion.div
              style={{
                y,
                height: `${Math.max(1, count) * 100}svh`,
                willChange: "transform",
              }}
              className="w-full"
            >
              {storyPanels.map((panel, i) => (
                <div key={i} className="h-[100svh] w-full">
                  <div className="h-full w-full grid place-items-center">
                    <div className="w-full max-w-2xl px-8">{panel}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      ) : (
        /* Mobile: 1 columna tipo story (left + panels) */
        <div className="sticky top-0 h-[100svh]">
          <div className="h-[100svh] overflow-hidden">
            <motion.div
              style={{
                y,
                height: `${Math.max(1, count) * 100}svh`,
                willChange: "transform",
              }}
              className="w-full"
            >
              {storyPanels.map((panel, i) => (
                <div key={i} className="h-[100svh] w-full">
                  {/* Centrado estable + padding responsive */}
                  <div className="h-full w-full grid place-items-center">
                    <div className="w-full max-w-xl px-6">{panel}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* (Opcional) indicador simple tipo “paginación” */}
          <div className="pointer-events-none absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {Array.from({ length: count }).map((_, i) => (
              <span
                key={i}
                className="h-1.5 w-1.5 rounded-full bg-black/30"
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
