import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {
  COUPLE,
  WEDDING_DATE_LABEL,
  WEDDING_LOCATION_LABEL,
} from "../data/content";

interface HeroProps {
  onRSVPClick: () => void;
}

export function Hero({ onRSVPClick }: HeroProps) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink">
      <motion.img
        src={COUPLE.heroImage}
        alt={`${COUPLE.bride} e ${COUPLE.groom}`}
        className="absolute inset-0 h-full w-full object-cover opacity-90"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/35 via-ink/25 to-ink" />

      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
        <motion.span
          className="font-body text-xs uppercase tracking-[0.5em] text-gold-soft"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
        >
          Estamos a casar
        </motion.span>

        <motion.h1
          className="font-feature text-5xl text-porcelain sm:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          {COUPLE.bride} <span className="text-gradient-gold">&amp;</span>{" "}
          {COUPLE.groom}
        </motion.h1>

        <motion.div
          className="flex items-center gap-4 font-display text-lg italic text-champagne sm:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.9 }}
        >
          <span>{WEDDING_DATE_LABEL}</span>
          <span className="h-1 w-1 rounded-full bg-gold" />
          <span>{WEDDING_LOCATION_LABEL}</span>
        </motion.div>

        <motion.p
          className="max-w-md font-body text-sm font-light leading-relaxed text-mist"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.9 }}
        >
          Com imenso carinho, convidamo-lo a celebrar connosco o início da nossa
          eterna história de amor.
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-champagne/70"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
      >
        <ChevronDown size={26} />
      </motion.div>
    </section>
  );
}
