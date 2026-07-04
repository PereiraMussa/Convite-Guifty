import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FloatingParticles } from "./FloatingParticles";
import { COUPLE, WEDDING_DATE_LABEL } from "../data/content";
import type { IntroPhase } from "../types";

interface IntroExperienceProps {
  onComplete: () => void;
}

const easeCinematic = [0.22, 1, 0.36, 1] as const;

export function IntroExperience({ onComplete }: IntroExperienceProps) {
  const [phase, setPhase] = useState<IntroPhase>("dark");

  // 1) tela escura -> depois de ~1s surge a luz central + envelope
  useEffect(() => {
    const timer = setTimeout(() => setPhase("envelope-idle"), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenEnvelope = () => {
    setPhase("envelope-opening");
    setTimeout(() => setPhase("letter-out"), 1900);
    setTimeout(() => setPhase("couple-reveal"), 2900);
  };

  const handleExitIntro = () => {
    setPhase("done");
    setTimeout(onComplete, 900);
  };

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
          exit={{
            opacity: 0,
            transition: { duration: 0.9, ease: easeCinematic },
          }}
        >
          {/* luz central suave */}
          <motion.div
            className="pointer-events-none absolute h-[70vh] w-[70vh] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(230,201,140,0.35) 0%, rgba(230,201,140,0.08) 45%, transparent 70%)",
            }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: phase === "dark" ? 0 : 1, scale: 1 }}
            transition={{ duration: 1.8, ease: easeCinematic }}
          />

          <FloatingParticles count={30} />

          {/* ---------------- ENVELOPE (full screen) ---------------- */}
          <AnimatePresence>
            {(phase === "envelope-idle" || phase === "envelope-opening") && (
              <motion.div
                key="envelope"
                className="absolute inset-0 flex flex-col items-center justify-center gap-8 px-4 py-10 sm:gap-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.6, ease: easeCinematic },
                }}
                transition={{ duration: 1, ease: easeCinematic }}
              >
                <motion.div
                  className="relative aspect-[16/11] w-[92vw] max-w-[880px] sm:w-[80vw]"
                  animate={{
                    scale: phase === "envelope-opening" ? 1.08 : 1,
                    y: phase === "envelope-idle" ? [0, -12, 0] : 0,
                  }}
                  transition={
                    phase === "envelope-idle"
                      ? {
                          y: {
                            repeat: Infinity,
                            duration: 5,
                            ease: "easeInOut",
                          },
                          scale: { duration: 0.8 },
                        }
                      : { duration: 1, ease: easeCinematic }
                  }
                  style={{ perspective: 1600 }}
                >
                  {/* corpo do envelope */}
                  <div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background:
                        "linear-gradient(160deg, #fffaf1 0%, #f4ead4 55%, #ecdfc4 100%)",
                      boxShadow:
                        "0 50px 100px -25px rgba(0,0,0,0.6), 0 0 0 1px rgba(198,161,91,0.25) inset",
                    }}
                  />
                  {/* textura sutil de papel */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-[0.05] mix-blend-multiply"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(45deg, #38352f 0, #38352f 1px, transparent 1px, transparent 6px)",
                    }}
                  />
                  {/* borda dourada fina */}
                  <div className="absolute inset-3 rounded-xl border border-gold/25 sm:inset-5" />

                  {/* dobras inferiores em V */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-1/2 rounded-b-2xl"
                    style={{
                      background:
                        "linear-gradient(160deg, #f4ead4 0%, #e6d6b3 100%)",
                      clipPath:
                        "polygon(0% 0%, 50% 68%, 100% 0%, 100% 100%, 0% 100%)",
                    }}
                  />

                  {/* letra deslizando para fora */}
                  <motion.div
                    className="absolute left-1/2 top-1/2 h-[72%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-md bg-linen sm:w-[62%]"
                    style={{ boxShadow: "0 20px 50px rgba(0,0,0,0.3)" }}
                    animate={
                      phase === "envelope-opening"
                        ? { y: "-56%", opacity: 1 }
                        : { y: "-50%", opacity: 0 }
                    }
                    transition={{
                      duration: 1.1,
                      delay: 0.5,
                      ease: easeCinematic,
                    }}
                  >
                    <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center">
                      <span className="font-display text-2xl italic text-charcoal/70 sm:text-3xl">
                        {COUPLE.bride} &amp; {COUPLE.groom}
                      </span>
                      <span className="h-px w-14 bg-gold" />
                      <span className="font-body text-[11px] uppercase tracking-[0.3em] text-charcoal/50">
                        {WEDDING_DATE_LABEL}
                      </span>
                    </div>
                  </motion.div>

                  {/* aba superior (tampa) do envelope */}
                  <motion.div
                    className="absolute inset-x-0 top-0 h-1/2 origin-top rounded-t-2xl"
                    style={{
                      background:
                        "linear-gradient(200deg, #fffdf8 0%, #f1e5c9 100%)",
                      clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)",
                      transformStyle: "preserve-3d",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                    }}
                    animate={{
                      rotateX: phase === "envelope-opening" ? 178 : 0,
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.15,
                      ease: easeCinematic,
                    }}
                  />

                  {/* ---- SELO / BOTÃO DE ABRIR ---- */}
                  <motion.button
                    type="button"
                    onClick={handleOpenEnvelope}
                    disabled={phase === "envelope-opening"}
                    aria-label="Abrir convite"
                    className="group absolute left-1/2 top-1/2 z-10 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full outline-none sm:h-24 sm:w-24"
                    animate={
                      phase === "envelope-opening"
                        ? { scale: [1, 1.2, 0], opacity: [1, 1, 0], rotate: 25 }
                        : { scale: 1, opacity: 1, rotate: 0 }
                    }
                    whileHover={
                      phase === "envelope-idle" ? { scale: 1.08 } : {}
                    }
                    whileTap={phase === "envelope-idle" ? { scale: 0.94 } : {}}
                    transition={{ duration: 0.7, ease: easeCinematic }}
                  >
                    {/* anel pulsante convidando ao clique */}
                    {phase === "envelope-idle" && (
                      <motion.span
                        className="absolute inset-0 rounded-full border border-gold/50"
                        animate={{ scale: [1, 1.5, 1.5], opacity: [0.6, 0, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 2.2,
                          ease: "easeOut",
                        }}
                      />
                    )}

                    <span
                      className="relative flex h-full w-full items-center justify-center rounded-full transition-transform duration-300 group-hover:brightness-110"
                      style={{
                        background:
                          "radial-gradient(circle at 35% 30%, #f0d9a8, #b8863f 78%)",
                        boxShadow:
                          "0 10px 24px rgba(0,0,0,0.45), inset 0 0 8px rgba(255,255,255,0.45)",
                      }}
                    >
                      <Mail
                        size={26}
                        className="text-ink/70 transition-transform duration-300 group-hover:scale-110 sm:hidden"
                      />
                      <Mail
                        size={30}
                        className="hidden text-ink/70 transition-transform duration-300 group-hover:scale-110 sm:block"
                      />
                    </span>
                  </motion.button>
                </motion.div>

                {phase === "envelope-idle" && (
                  <motion.p
                    className="font-display text-xl italic tracking-wide text-champagne sm:text-2xl"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.9 }}
                  >
                    Você recebeu um convite especial.
                  </motion.p>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* ---------------- REVELAÇÃO DO CASAL ---------------- */}
          <AnimatePresence>
            {(phase === "letter-out" || phase === "couple-reveal") && (
              <motion.div
                key="reveal"
                className="absolute inset-0 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.1, ease: easeCinematic }}
              >
                <motion.img
                  src={COUPLE.heroImage}
                  alt={`${COUPLE.bride} e ${COUPLE.groom}`}
                  className="h-full w-full object-cover"
                  initial={{ scale: 1.25, filter: "blur(8px)" }}
                  animate={{ scale: 1.05, filter: "blur(0px)" }}
                  transition={{ duration: 2.4, ease: easeCinematic }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20" />

                {phase === "couple-reveal" && (
                  <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-6 text-center"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.4,
                      duration: 1,
                      ease: easeCinematic,
                    }}
                  >
                    <span className="font-body text-xs uppercase tracking-[0.4em] text-champagne/80">
                      Nós vamos nos casar
                    </span>
                    <h1 className="font-feature text-4xl text-porcelain sm:text-6xl">
                      {COUPLE.bride} <span className="text-gold">&amp;</span>{" "}
                      {COUPLE.groom}
                    </h1>
                    <p className="max-w-md font-display text-lg italic leading-relaxed text-champagne/90 sm:text-xl">
                      {COUPLE.invitationMessage}
                    </p>

                    <motion.button
                      type="button"
                      onClick={handleExitIntro}
                      className="mt-4 rounded-full bg-gold px-9 py-3 font-body text-xs uppercase tracking-[0.3em] text-ink shadow-lg shadow-gold/20 transition-transform hover:scale-105"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.6, duration: 0.8 }}
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      Ver Convite
                    </motion.button>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
