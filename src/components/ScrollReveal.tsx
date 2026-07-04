import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "scale";
}

export function ScrollReveal({
  children,
  delay = 0,
  y = 40,
  className,
  direction = "up",
}: ScrollRevealProps) {
  const initial =
    direction === "left"
      ? { opacity: 0, x: -50 }
      : direction === "right"
      ? { opacity: 0, x: 50 }
      : direction === "scale"
      ? { opacity: 0, scale: 0.92 }
      : { opacity: 0, y };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
