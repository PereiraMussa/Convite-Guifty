import { useRef } from "react";
import type { LucideIcon } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  CalendarDays,
  Clock,
  MapPin,
  Shirt,
  UtensilsCrossed,
} from "lucide-react";
import { CEREMONY_DETAILS } from "../data/content";
import type { CeremonyDetail } from "../types";

/**
 * Mapa de ícones por chave semântica (definida em `content.ts`).
 * Mantém o dado (config) desacoplado da apresentação (componente Lucide real).
 */
const ICONS: Record<CeremonyDetail["icon"], LucideIcon> = {
  calendar: CalendarDays,
  clock: Clock,
  pin: MapPin,
  suit: Shirt,
  food: UtensilsCrossed,
};

const EASE_SOFT = [0.22, 1, 0.36, 1] as const;

interface CeremonyItemProps {
  detail: CeremonyDetail;
  index: number;
}

function CeremonyItem({ detail, index }: CeremonyItemProps) {
  const Icon = ICONS[detail.icon];
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`relative flex items-center gap-6 sm:gap-10 ${
        isEven ? "sm:flex-row" : "sm:flex-row-reverse sm:text-right"
      }`}
      initial={{ opacity: 0, x: isEven ? -36 : 36, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.1, ease: EASE_SOFT }}
    >
      {/* medalhão do ícone, ancorado sobre o trilho central */}
      <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-ink ring-1 ring-gold/40 sm:mx-auto">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 text-gold">
          <Icon size={20} aria-hidden="true" />
        </span>
      </span>

      <div className="flex-1">
        <span className="font-body text-[10px] uppercase tracking-[0.35em] text-gold-soft">
          {detail.label}
        </span>
        <p className="mt-2 font-display text-xl italic leading-snug text-porcelain sm:text-2xl">
          {detail.value}
        </p>
      </div>
    </motion.div>
  );
}

export function Ceremony() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Progresso de scroll relativo à própria lista de detalhes (0 -> 1),
  // usado para "desenhar" o trilho dourado enquanto o utilizador lê.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.6"],
  });

  // Importante: animar `scaleY` (transform), nunca `height` (layout),
  // num elemento absolutamente posicionado dentro de um container de
  // altura automática — percentagens de height não resolvem nesse caso
  // e o trilho simplesmente não aparece.
  const trackScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="bg-ink py-28 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9, ease: EASE_SOFT }}
        >
          <span className="font-body text-xs uppercase tracking-[0.4em] text-gold">
            Detalhes
          </span>
          <h2 className="mt-3 font-feature text-3xl italic text-porcelain sm:text-4xl">
            A Cerimónia
          </h2>
        </motion.div>

        <div ref={containerRef} className="relative mt-20">
          {/* trilho de fundo, sempre visível */}
          <div
            className="absolute left-7 top-0 hidden h-full w-px bg-white/10 sm:left-1/2 sm:block"
            aria-hidden="true"
          />

          {/* trilho dourado, revelado progressivamente com o scroll */}
          <motion.div
            className="absolute left-7 top-0 hidden h-full w-px origin-top bg-gold sm:left-1/2 sm:block"
            style={{ scaleY: trackScale }}
            aria-hidden="true"
          />

          <div className="flex flex-col gap-16 sm:gap-20">
            {CEREMONY_DETAILS.map((detail, i) => (
              <CeremonyItem key={detail.id} detail={detail} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
