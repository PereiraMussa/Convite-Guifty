import { Navigation } from "lucide-react";
import { MAP_EMBED_URL, MAP_DIRECTIONS_URL } from "../data/content";
import { ScrollReveal } from "./ScrollReveal";

export function LocationMap() {
  return (
    <section className="bg-linen py-28 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <ScrollReveal>
          <span className="font-body text-xs uppercase tracking-[0.4em] text-gold">
            Onde será
          </span>
          <h2 className="mt-3 font-feature text-3xl italic text-charcoal sm:text-4xl">
            Localização
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15} direction="scale" className="mt-12">
          <div className="overflow-hidden rounded-2xl shadow-xl shadow-black/10">
            <iframe
              title="Localização da cerimónia"
              src={MAP_EMBED_URL}
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.25} className="mt-8">
          <a
            href={MAP_DIRECTIONS_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3 font-body text-xs uppercase tracking-[0.3em] text-ink shadow-lg shadow-gold/20 transition-transform hover:scale-105"
          >
            <Navigation size={16} />
            Como chegar
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
