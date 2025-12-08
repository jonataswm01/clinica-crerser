"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HeartHandshake, Infinity, MessagesSquare, Shuffle, Sparkle, Waves } from "lucide-react";

import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/glass-card";

const tertiaryRgb = "179,158,181";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: "easeOut" },
  viewport: { once: true, amount: 0.3 },
};

const slideLeft = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
  viewport: { once: true, amount: 0.4 },
};

const slideRight = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
  viewport: { once: true, amount: 0.4 },
};

const feelings = [
  { title: "Ruído de Comunicação", copy: "“Falamos línguas diferentes.”", icon: MessagesSquare },
  { title: "Vidas Paralelas", copy: "“Funcionamos como sócios, sem intimidade.”", icon: Infinity },
];

const happenings = [
  {
    title: "Ciclos Repetitivos",
    copy: "Ciúmes, traições ou interferência da família de origem.",
    icon: Shuffle,
  },
  { title: "Desalinhamento de Sonhos", copy: "Quando cada um empurra para um lado.", icon: Waves },
];

const benefits = [
  "Comunicação Assertiva — Ouvir para entender, não para responder.",
  "Resgate da Intimidade — Sair do piloto automático.",
  "Paz para os Filhos — Quando os pais estão em ordem, os filhos ficam leves.",
];

export default function CouplePage() {
  return (
    <main className="px-6" style={{ "--color-tertiary-rgb": tertiaryRgb } as CSSProperties}>
      {/* Hero Casal */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 pt-24 pb-16 md:grid-cols-[1.05fr_0.95fr] md:pt-28 md:pb-20">
        <motion.div className="space-y-6" {...fadeUp}>
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-foreground/60">
            Terapia de Casal
          </p>
          <h1 className="font-serif text-4xl leading-tight text-foreground md:text-6xl md:leading-[1.05]">
            O amor não precisa ser perfeito. Ele precisa ser{" "}
            <span className="font-[var(--font-italianno)] text-[var(--color-tertiary)] text-5xl md:text-6xl">
              vivo
            </span>
            .
          </h1>
          <p className="font-sans text-lg leading-relaxed text-foreground/80 md:text-xl">
            Terapia de Casal e Orientação Sistêmica. Um espaço neutro para traduzir silêncios em palavras e
            transformar conflitos em uma nova aliança conjugal.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary" colorTheme="tertiary" className="px-7">
              Quero agendar uma sessão a dois
            </Button>
            <div className="flex items-center gap-2 rounded-full border border-[var(--color-tertiary)]/40 bg-[var(--color-tertiary)]/10 px-4 py-2 text-sm text-foreground/80">
              <Sparkle className="h-4 w-4 text-[var(--color-tertiary)]" />
              Espaço neutro e equilibrado
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative h-[360px] overflow-hidden rounded-tl-[90px] rounded-br-[90px] rounded-tr-[32px] rounded-bl-[32px] md:h-[520px]"
          {...fadeUp}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-tertiary)]/35 via-emerald-300/20 to-[var(--color-tertiary)]/15 blur-3xl" />
          <motion.div
            className="absolute inset-0 translate-x-4 translate-y-4 rounded-tl-[90px] rounded-br-[90px] rounded-tr-[32px] rounded-bl-[32px] border-2 border-[var(--color-tertiary)]/40"
            whileHover={{ x: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          />
          <Image
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80&sat=-12&exp=4"
            alt="Casal em conexão tranquila, mãos entrelaçadas em ambiente sereno"
            fill
            className="relative z-10 object-cover"
            priority
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent z-20" />
          <div className="pointer-events-none absolute inset-x-8 bottom-0 z-30 h-2 rounded-full bg-[var(--color-tertiary)]/55 blur-[6px] opacity-80" />
        </motion.div>
      </section>

      {/* Diagnóstico */}
      <section className="relative mx-auto max-w-6xl py-14 md:py-18">
        <div className="absolute -left-16 top-6 h-48 w-48 rounded-full bg-[var(--color-tertiary)]/10 blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-36 w-36 rounded-full bg-[var(--color-tertiary)]/10 blur-3xl" />
        <motion.div className="mb-10 space-y-3 text-center" {...fadeUp}>
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-foreground/60">O Diagnóstico</p>
          <h2 className="font-serif text-3xl leading-tight text-foreground md:text-4xl">
            Quando a admiração vira convivência...
          </h2>
        </motion.div>

        <div className="relative grid gap-10 md:grid-cols-2">
          <div className="absolute left-1/2 top-4 hidden h-[85%] w-px -translate-x-1/2 bg-[var(--color-tertiary)]/50 md:block" />
          <div className="space-y-4">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-foreground/60">O que você sente</p>
            {feelings.map(({ title, copy, icon: Icon }, idx) => (
              <motion.div
                key={title}
                className="group"
                {...slideLeft}
                transition={{ duration: 0.6 + idx * 0.05, ease: "easeOut" }}
              >
                <GlassCard className="relative border border-white/40 p-6 transition-colors duration-200 group-hover:border-[var(--color-tertiary)]/70">
                  <div className="mb-3 flex items-center gap-3 text-[var(--color-tertiary)]">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-tertiary)]/12">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="h-1 flex-1 rounded-full bg-[var(--color-tertiary)]/45" />
                  </div>
                  <h3 className="font-serif text-xl text-foreground">{title}</h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-foreground/80">{copy}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <div className="space-y-4">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-foreground/60">
              O que acontece
            </p>
            {happenings.map(({ title, copy, icon: Icon }, idx) => (
              <motion.div
                key={title}
                className="group"
                {...slideRight}
                transition={{ duration: 0.6 + idx * 0.05, ease: "easeOut" }}
              >
                <GlassCard className="relative border border-white/40 p-6 transition-colors duration-200 group-hover:border-[var(--color-tertiary)]/70">
                  <div className="mb-3 flex items-center gap-3 text-[var(--color-tertiary)]">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-tertiary)]/12">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="h-1 flex-1 rounded-full bg-[var(--color-tertiary)]/45" />
                  </div>
                  <h3 className="font-serif text-xl text-foreground">{title}</h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-foreground/80">{copy}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metodologia Sistêmica */}
      <section className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border-2 border-[var(--color-tertiary)]/30 bg-white/80 py-14 shadow-xl backdrop-blur-xl md:py-18">
        <div className="absolute -left-12 top-10 h-56 w-56 rounded-full bg-[var(--color-tertiary)]/14 blur-3xl" />
        <div className="absolute -right-16 bottom-6 h-64 w-64 rounded-full bg-emerald-200/35 blur-3xl" />
        <div className="absolute left-1/2 top-0 h-24 w-24 -translate-x-1/2 rounded-full bg-[var(--color-tertiary)]/12 blur-2xl" />
        <div className="relative mx-auto max-w-5xl grid gap-10 px-6 md:grid-cols-[1.05fr_0.95fr] md:px-10">
          <motion.div className="space-y-4" {...slideLeft}>
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-foreground/60">Metodologia</p>
            <h3 className="font-serif text-3xl leading-tight text-foreground md:text-4xl">
              Não buscamos culpados. Buscamos{" "}
              <span className="italic text-[var(--color-tertiary)]">ordem</span>.
            </h3>
            <p className="font-sans text-base leading-relaxed text-foreground/80">
              A Abordagem Sistêmica olha para baixo da superfície. Atuamos como mediadores imparciais para
              revelar:
            </p>
            <ul className="space-y-2 font-sans text-base text-foreground/80">
              <li>• Lealdades Invisíveis: o que cada um traz dos seus pais?</li>
              <li>• O Lugar de Cada Um: existe equilíbrio entre dar e receber?</li>
              <li>• O Novo Contrato: atualizar os combinados do casal.</li>
            </ul>
          </motion.div>
          <motion.div
            className="relative overflow-hidden rounded-2xl border border-white/50 bg-white/70 p-6 shadow-lg"
            {...slideRight}
          >
            <div className="absolute -left-10 top-0 h-48 w-48 rounded-full bg-[var(--color-tertiary)]/18 blur-3xl" />
            <div className="absolute -right-12 bottom-0 h-56 w-56 rounded-full bg-emerald-200/25 blur-3xl" />
            <div className="relative space-y-4">
              <div className="flex items-center gap-3 text-[var(--color-tertiary)]">
                <HeartHandshake className="h-5 w-5" />
                <span className="text-sm uppercase tracking-[0.25em] text-foreground/60">
                  Espaço convergente
                </span>
              </div>
              <p className="font-sans text-base leading-relaxed text-foreground/80">
                Elementos vêm de lados opostos e encontram equilíbrio no centro. Assim é nossa condução: trazer
                vozes, alinhar expectativas e permitir que a relação respire sem pressão.
              </p>
              <div className="grid gap-3 md:grid-cols-2">
                <motion.div
                  className="rounded-2xl border border-[var(--color-tertiary)]/30 bg-[var(--color-tertiary)]/10 p-4 text-sm text-foreground"
                  {...slideLeft}
                  transition={{ duration: 0.6, delay: 0.05 }}
                >
                  Escuta bilateral sem interrupções.
                </motion.div>
                <motion.div
                  className="rounded-2xl border border-emerald-300/40 bg-emerald-200/15 p-4 text-sm text-foreground"
                  {...slideRight}
                  transition={{ duration: 0.6, delay: 0.05 }}
                >
                  Ferramentas práticas para casa.
                </motion.div>
              </div>
              <Button variant="primary" colorTheme="tertiary" className="w-full">
                Quero viver essa convergência
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="mx-auto max-w-6xl py-14 md:py-18">
        <motion.div className="mb-8 space-y-2 text-center" {...fadeUp}>
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-foreground/60">Benefícios</p>
          <h3 className="font-serif text-3xl leading-tight text-foreground md:text-4xl">
            Comunicação, intimidade e paz voltando ao{" "}
            <span className="italic text-[var(--color-tertiary)]">centro</span>.
          </h3>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, x: idx === 1 ? 0 : idx === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: idx * 0.05 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <GlassCard className="h-full border border-white/40 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--color-tertiary)] hover:shadow-[0_14px_36px_-14px_rgba(179,158,181,0.2)]">
                <div className="mb-4 flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-tertiary)]/12 text-[var(--color-tertiary)]">
                    <HeartHandshake className="h-5 w-5" />
                  </div>
                  <div className="h-1 flex-1 rounded-full bg-[var(--color-tertiary)]/40" />
                </div>
                <p className="font-sans text-base leading-relaxed text-foreground/80">{benefit}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="mx-auto max-w-6xl py-16 md:py-20 text-center">
        <motion.div className="space-y-4" {...fadeUp}>
          <h3 className="font-serif text-3xl leading-tight text-foreground md:text-4xl">
            Escolher o outro, todos os dias.
          </h3>
          <p className="font-sans text-base leading-relaxed text-foreground/80">
            A crise pode ser o começo de uma relação muito mais madura.
          </p>
          <div className="flex justify-center">
            <Button variant="primary" colorTheme="tertiary" className="px-8">
              Vamos reconstruir nossa conexão
            </Button>
          </div>
        </motion.div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="w-full relative overflow-hidden rounded-none border-0 pt-24 pb-8 text-[var(--color-background)] bg-[var(--color-tertiary)]">
        {/* MOBILE: Vertical Big Text */}
        <div
          className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 text-[12vh] leading-none font-serif opacity-10 select-none pointer-events-none"
          style={{ writingMode: "vertical-rl" }}
        >
          CRER SER
        </div>

        <div className="mx-auto w-full px-6 md:px-12 relative z-10">
          {/* CONTENT AREA */}
          <div className="flex flex-col md:flex-row md:justify-end mb-12 md:mb-4">
            {/* Desktop: Content ocupa 50% da direita */}
            <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-3 gap-10 md:text-right">
              {/* Coluna 1: Navegação */}
              <div className="flex flex-col gap-4">
                <h4 className="text-xs tracking-[0.2em] opacity-60 uppercase mb-2">Menu</h4>
                <nav className="flex flex-col gap-2 font-medium text-sm md:text-base">
                  <Link href="/crianca" className="hover:opacity-70 transition-opacity">
                    Criança
                  </Link>
                  <Link href="/adulto" className="hover:opacity-70 transition-opacity">
                    Adulto
                  </Link>
                  <Link href="/casal" className="hover:opacity-70 transition-opacity">
                    Casal
                  </Link>
                  <Link href="/sobre" className="hover:opacity-70 transition-opacity">
                    Sobre
                  </Link>
                  <Link href="/contato" className="hover:opacity-70 transition-opacity">
                    Contato
                  </Link>
                </nav>
              </div>

              {/* Coluna 2: Contato & Social */}
              <div className="flex flex-col gap-4">
                <h4 className="text-xs tracking-[0.2em] opacity-60 uppercase mb-2">Contato</h4>
                <div className="flex flex-col gap-1 opacity-80 text-sm md:text-base">
                  <p>Santa Adélia - SP</p>
                  <p>(17) 99999-9999</p>
                  <a href="mailto:contato@crerser.com.br" className="hover:underline">
                    contato@crerser.com.br
                  </a>
                </div>
              </div>

              {/* Coluna 3: Social */}
              <div className="flex flex-col gap-4">
                <h4 className="text-xs tracking-[0.2em] opacity-60 uppercase mb-2">Social</h4>
                <div className="flex flex-col gap-2 font-medium text-sm md:text-base md:items-end md:text-right">
                  <a href="#" className="hover:opacity-70 transition-opacity">
                    Instagram
                  </a>
                  <a href="#" className="hover:opacity-70 transition-opacity">
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* DESKTOP: Horizontal Big Text */}
          <div className="hidden md:block w-full text-center mt-12">
            <h1 className="text-[18vw] leading-[0.8] font-serif opacity-10 select-none tracking-tighter">CRER SER</h1>
          </div>

          {/* SEPARATOR & COPYRIGHT */}
          <div className="mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-60 gap-4">
            <p>© 2025 Crer Ser.</p>
            <p>All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}


