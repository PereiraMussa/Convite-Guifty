import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import { useMemo } from "react";

interface FloatingHeartsProps {
  active: boolean;
}

export function FloatingHearts({ active }: FloatingHeartsProps) {
  const hearts = useMemo(
    () =>
      Array.from({ length: 10 }, (_, i) => ({
        id: i,
        left: 10 + Math.random() * 80,
        delay: Math.random() * 0.6,
        size: 14 + Math.random() * 14,
      })),
    [active]
  );

  return (
    <AnimatePresence>
      {active && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          {hearts.map((h) => (
            <motion.span
              key={h.id}
              className="absolute text-gold"
              style={{ left: `${h.left}%`, bottom: 0 }}
              initial={{ opacity: 0, y: 0, scale: 0.6 }}
              animate={{ opacity: [0, 1, 0], y: -220, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2.2, delay: h.delay, ease: "easeOut" }}
            >
              <Heart size={h.size} fill="currentColor" />
            </motion.span>
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}
