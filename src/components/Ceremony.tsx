import type { LucideIcon } from "lucide-react";
import { CalendarDays, Clock, MapPin, Shirt, UtensilsCrossed } from "lucide-react";
import { CEREMONY_DETAILS } from "../data/content";
import { ScrollReveal } from "./ScrollReveal";

const ICONS: Record<string, LucideIcon> = {
  calendar: CalendarDays,
  clock: Clock,
  pin: MapPin,
  suit: Shirt,
  food: UtensilsCrossed,
};

export function Ceremony() {
  return (
    <section className="bg-ink py-28 px-6">
      <div className="mx-auto max-w-5xl text-center">
        <ScrollReveal>
          <span className="font-body text-xs uppercase tracking-[0.4em] text-gold">
            Detalhes
          </span>
          <h2 className="mt-3 font-feature text-3xl italic text-porcelain sm:text-4xl">
            A Cerimónia
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {CEREMONY_DETAILS.map((detail, i) => {
            const Icon = ICONS[detail.icon];
            return (
              <ScrollReveal key={detail.id} delay={i * 0.1} direction="scale">
                <div className="glass flex h-full flex-col items-center gap-4 rounded-2xl px-6 py-10 text-center transition-transform hover:-translate-y-1">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Icon size={22} />
                  </span>
                  <span className="font-body text-[10px] uppercase tracking-[0.3em] text-gold-soft">
                    {detail.label}
                  </span>
                  <p className="font-display text-lg italic leading-snug text-porcelain">
                    {detail.value}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
