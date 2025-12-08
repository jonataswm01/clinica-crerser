"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import GlassCard from "../ui/glass-card";

const cards = [
  {
    href: "/crianca",
    title: "Psicopedagogia Infantil",
    color: "var(--color-primary)",
    copy: "Dificuldades na escola ou nas emoções? Ajudamos seu filho a reencontrar o prazer de aprender com abordagem lúdica e afetuosa.",
  },
  {
    href: "/adulto",
    title: "Psicoterapia & Autoconhecimento",
    color: "var(--color-secondary)",
    copy: "Um espaço seguro para tratar ansiedade, depressão e traumas. Resgate sua energia vital com acolhimento e técnica clínica.",
  },
  {
    href: "/casal",
    title: "Terapia de Casal",
    color: "var(--color-tertiary)",
    copy: "Conflitos repetitivos? A visão sistêmica desemaranha nós antigos, melhora a comunicação e traz paz para a família.",
  },
] as const;

const HomeServices = () => {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="flex flex-col gap-2">
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-foreground/60">
            Como podemos ajudar hoje?
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <motion.div
              key={card.href}
              initial={{ y: 0, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.4, ease: "easeOut", type: "spring", stiffness: 300 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <GlassCard className="h-full p-6 md:p-7">
                <div className="mb-4 h-1 w-14 rounded-full" style={{ background: card.color }} />
                <h3 className="font-serif text-2xl leading-tight text-foreground">{card.title}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-foreground/80">{card.copy}</p>
                <Link
                  href={card.href}
                  className="group mt-6 inline-flex items-center gap-2 font-sans text-sm font-semibold text-[color:var(--color-primary)]"
                  style={{ color: card.color }}
                >
                  <span className="relative">
                    <span className="group-hover:underline">Ver detalhes →</span>
                    <span
                      className="absolute left-0 -bottom-[2px] h-[2px] w-full scale-x-0 bg-current transition-transform duration-200 ease-out group-hover:scale-x-100"
                    />
                  </span>
                </Link>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;


