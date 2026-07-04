import { motion } from "framer-motion";
import { useCountdown } from "../hooks/useCountdown";
import { WEDDING_DATE } from "../data/content";
import { ScrollReveal } from "./ScrollReveal";

const UNITS = [
  { key: "days", label: "Dias" },
  { key: "hours", label: "Horas" },
  { key: "minutes", label: "Minutos" },
  { key: "seconds", label: "Segundos" },
] as const;

export function Countdown() {
  const time = useCountdown(WEDDING_DATE);

  if (time.isComplete) {
    return (
      <section className="flex min-h-[50vh] items-center justify-center bg-linen px-6 text-center">
        <ScrollReveal>
          <h2 className="font-feature text-4xl italic text-charcoal sm:text-5xl">
            O grande dia chegou.
          </h2>
        </ScrollReveal>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-linen py-24 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <ScrollReveal>
          <span className="font-body text-xs uppercase tracking-[0.4em] text-gold">
            Contagem regressiva
          </span>
          <h2 className="mt-3 font-feature text-3xl italic text-charcoal sm:text-4xl">
            Faltam apenas...
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {UNITS.map((unit, i) => (
            <ScrollReveal key={unit.key} delay={i * 0.12} direction="scale">
              <div className="glass-light flex flex-col items-center justify-center rounded-2xl py-8 shadow-sm">
                <motion.span
                  key={time[unit.key]}
                  className="font-feature text-4xl text-charcoal sm:text-5xl"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {String(time[unit.key]).padStart(2, "0")}
                </motion.span>
                <span className="mt-2 font-body text-[10px] uppercase tracking-[0.3em] text-charcoal/60">
                  {unit.label}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
