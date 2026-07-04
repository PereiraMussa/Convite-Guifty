import { Heart } from "lucide-react";
import { COUPLE } from "../data/content";
import { ScrollReveal } from "./ScrollReveal";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-16 px-6 text-center">
      <ScrollReveal>
        <Heart size={22} className="mx-auto mb-4 text-gold" fill="currentColor" />
        <p className="mx-auto max-w-md font-display text-lg italic leading-relaxed text-champagne">
          Será uma alegria celebrar este momento tão especial com você.
        </p>
        <p className="mt-6 font-feature text-xl text-porcelain">
          {COUPLE.bride} &amp; {COUPLE.groom}
        </p>
        <p className="mt-2 font-body text-[11px] uppercase tracking-[0.3em] text-mist/60">
          Com amor, até breve
        </p>
      </ScrollReveal>
    </footer>
  );
}
