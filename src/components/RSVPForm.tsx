import { forwardRef, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Send, Users } from "lucide-react";
import { WHATSAPP_NUMBER } from "../data/content";
import type { RSVPFormData, RSVPFormErrors } from "../types";
import { ScrollReveal } from "./ScrollReveal";
import { FloatingHearts } from "./FloatingHearts";

const initialForm: RSVPFormData = { name: "", phone: "", guests: 1, message: "" };

function validate(data: RSVPFormData): RSVPFormErrors {
  const errors: RSVPFormErrors = {};

  if (data.name.trim().length < 3) {
    errors.name = "Indique o seu nome completo.";
  }
  if (!/^[0-9+\s()-]{7,}$/.test(data.phone.trim())) {
    errors.phone = "Indique um número de telefone válido.";
  }
  if (data.guests < 1 || data.guests > 10) {
    errors.guests = "Número de acompanhantes entre 1 e 10.";
  }

  return errors;
}

export const RSVPForm = forwardRef<HTMLDivElement>((_, ref) => {
  const [form, setForm] = useState<RSVPFormData>(initialForm);
  const [errors, setErrors] = useState<RSVPFormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validation = validate(form);
    setErrors(validation);

    if (Object.keys(validation).length > 0) return;

    const message = encodeURIComponent(
      `Olá! Confirmo a minha presença no casamento. 💍\n\nNome: ${form.name}\nTelefone: ${form.phone}\nAcompanhantes: ${form.guests}\nMensagem: ${form.message || "—"}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");

    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <section ref={ref} className="relative overflow-hidden bg-ink py-28 px-6">
      <div className="mx-auto max-w-xl text-center">
        <ScrollReveal>
          <span className="font-body text-xs uppercase tracking-[0.4em] text-gold">
            Confirme a sua presença
          </span>
          <h2 className="mt-3 font-feature text-3xl italic text-porcelain sm:text-4xl">
            RSVP
          </h2>
          <p className="mt-3 font-body text-sm font-light text-mist">
            A sua confirmação é o presente mais especial. Responda até 30 dias antes do grande dia.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="relative mt-12">
          <FloatingHearts active={submitted} />

          {submitted ? (
            <motion.div
              className="glass flex flex-col items-center gap-4 rounded-2xl px-8 py-14"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <CheckCircle2 size={40} className="text-gold" />
              <p className="font-feature text-2xl italic text-porcelain">
                Obrigado pela confirmação!
              </p>
              <p className="font-body text-sm font-light text-mist">
                Mal podemos esperar para celebrar consigo.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-2 font-body text-xs uppercase tracking-[0.3em] text-gold underline-offset-4 hover:underline"
              >
                Enviar outra confirmação
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="glass flex flex-col gap-5 rounded-2xl px-6 py-10 text-left sm:px-10">
              <div>
                <label className="mb-1.5 block font-body text-[11px] uppercase tracking-[0.25em] text-gold-soft">
                  Nome completo
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 font-body text-sm text-porcelain outline-none transition-colors focus:border-gold"
                  placeholder="O seu nome"
                />
                {errors.name && <p className="mt-1 text-xs text-red-300">{errors.name}</p>}
              </div>

              <div>
                <label className="mb-1.5 block font-body text-[11px] uppercase tracking-[0.25em] text-gold-soft">
                  Telefone
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 font-body text-sm text-porcelain outline-none transition-colors focus:border-gold"
                  placeholder="+258 84 000 0000"
                />
                {errors.phone && <p className="mt-1 text-xs text-red-300">{errors.phone}</p>}
              </div>

              <div>
                <label className="mb-1.5 flex items-center gap-2 font-body text-[11px] uppercase tracking-[0.25em] text-gold-soft">
                  <Users size={13} /> Número de acompanhantes
                </label>
                <input
                  type="number"
                  min={1}
                  max={10}
                  value={form.guests}
                  onChange={(e) => setForm({ ...form, guests: Number(e.target.value) })}
                  className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 font-body text-sm text-porcelain outline-none transition-colors focus:border-gold"
                />
                {errors.guests && <p className="mt-1 text-xs text-red-300">{errors.guests}</p>}
              </div>

              <div>
                <label className="mb-1.5 block font-body text-[11px] uppercase tracking-[0.25em] text-gold-soft">
                  Mensagem (opcional)
                </label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-lg border border-white/15 bg-white/5 px-4 py-3 font-body text-sm text-porcelain outline-none transition-colors focus:border-gold"
                  placeholder="Deixe uma mensagem carinhosa para os noivos"
                />
              </div>

              <motion.button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-3 font-body text-xs uppercase tracking-[0.3em] text-ink shadow-lg shadow-gold/20"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Send size={15} />
                Confirmar Presença
              </motion.button>
            </form>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
});

RSVPForm.displayName = "RSVPForm";
