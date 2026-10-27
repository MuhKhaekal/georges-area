
"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";

export default function AmbientBackground() {
  const rootRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    const root = rootRef.current;
    if (!root) return;

    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!media.matches) return;

    let frame = 0;

    const handlePointerMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        root.style.setProperty("--pointer-x", `${event.clientX}px`);
        root.style.setProperty("--pointer-y", `${event.clientY}px`);
      });
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [reduceMotion]);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="ambient-background pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="ambient-grid absolute inset-0" />

      <motion.div
        className="ambient-orb ambient-orb-lime"
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, 65, -25, 0],
                y: [0, -45, 35, 0],
                scale: [1, 1.15, 0.92, 1],
              }
        }
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="ambient-orb ambient-orb-indigo"
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, -55, 30, 0],
                y: [0, 40, -35, 0],
                scale: [1, 0.9, 1.12, 1],
              }
        }
        transition={{
          duration: 29,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="ambient-pointer-glow absolute inset-0" />

      <div className="ambient-grain absolute inset-0" />
    </div>
  );
}
