import { TIMELINE } from "../data/content";
import { ScrollReveal } from "./ScrollReveal";

export function StoryTimeline() {
  return (
    <section className="bg-ink py-28 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <ScrollReveal>
          <span className="font-body text-xs uppercase tracking-[0.4em] text-gold">
            A nossa jornada
          </span>
          <h2 className="mt-3 font-feature text-3xl italic text-porcelain sm:text-4xl">
            Nossa História
          </h2>
        </ScrollReveal>
      </div>

      <div className="relative mx-auto mt-20 max-w-3xl">
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gold/25 sm:block" />

        <div className="flex flex-col gap-16">
          {TIMELINE.map((event, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={event.id}
                className={`relative flex flex-col items-center gap-6 sm:flex-row ${
                  isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                <ScrollReveal
                  direction={isEven ? "left" : "right"}
                  className="w-full sm:w-1/2"
                >
                  <div className={`sm:px-10 ${isEven ? "sm:text-right" : "sm:text-left"}`}>
                    <span className="font-body text-xs uppercase tracking-[0.3em] text-gold">
                      {event.date}
                    </span>
                    <h3 className="mt-2 font-feature text-2xl italic text-porcelain">
                      {event.title}
                    </h3>
                    <p className="mt-3 font-body text-sm font-light leading-relaxed text-mist">
                      {event.description}
                    </p>
                  </div>
                </ScrollReveal>

                <span className="absolute left-1/2 top-1/2 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold ring-4 ring-ink sm:block" />

                <ScrollReveal direction="scale" className="w-full sm:w-1/2">
                  <div className="overflow-hidden rounded-2xl shadow-xl shadow-black/40">
                    <img
                      src={event.image}
                      alt={event.title}
                      loading="lazy"
                      className="h-56 w-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                </ScrollReveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
