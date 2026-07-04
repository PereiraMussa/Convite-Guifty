import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY } from "../data/content";
import { ScrollReveal } from "./ScrollReveal";

const spanClass: Record<string, string> = {
  tall: "sm:row-span-2",
  wide: "sm:col-span-2",
  normal: "",
};

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const showNext = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % GALLERY.length));
  const showPrev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + GALLERY.length) % GALLERY.length));

  return (
    <section className="bg-linen py-28 px-6">
      <div className="mx-auto max-w-5xl text-center">
        <ScrollReveal>
          <span className="font-body text-xs uppercase tracking-[0.4em] text-gold">
            Momentos
          </span>
          <h2 className="mt-3 font-feature text-3xl italic text-charcoal sm:text-4xl">
            Galeria
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:auto-rows-[220px] sm:gap-5">
          {GALLERY.map((image, i) => (
            <ScrollReveal
              key={image.id}
              delay={i * 0.08}
              direction="scale"
              className={`${spanClass[image.span ?? "normal"]} overflow-hidden rounded-2xl`}
            >
              <button
                type="button"
                onClick={() => setActiveIndex(i)}
                className="group block h-full w-full"
                aria-label={`Ampliar imagem: ${image.alt}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-115"
                />
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[110] flex items-center justify-center bg-ink/95 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-6 top-6 text-porcelain/80 transition-colors hover:text-gold"
              aria-label="Fechar"
            >
              <X size={28} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-4 text-porcelain/70 transition-colors hover:text-gold sm:left-8"
              aria-label="Imagem anterior"
            >
              <ChevronLeft size={32} />
            </button>

            <motion.img
              key={activeIndex}
              src={GALLERY[activeIndex].src}
              alt={GALLERY[activeIndex].alt}
              className="max-h-[80vh] max-w-[85vw] rounded-lg object-contain shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            />

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-4 text-porcelain/70 transition-colors hover:text-gold sm:right-8"
              aria-label="Próxima imagem"
            >
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
