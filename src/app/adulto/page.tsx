"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type MotionProps } from "framer-motion";
import {
  Activity,
  CheckCircle2,
  Compass,
  HeartPulse,
  Leaf,
  Lightbulb,
  Sparkles,
  Waves,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/glass-card";

const secondaryRgb = "183,110,121";

const fadeUp = {
  initial: { opacity: 0, y: 20, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.7, ease: "easeOut" as const },
  viewport: { once: true, amount: 0.3 },
} satisfies MotionProps;

const blurReveal = {
  initial: { opacity: 0.6, filter: "blur(10px)" },
  whileInView: { opacity: 1, filter: "blur(0px)" },
  transition: { duration: 0.8, ease: "easeOut" as const },
  viewport: { once: true, amount: 0.3 },
} satisfies MotionProps;

const diagnosticPoints = [
  {
    title: "A Ansiedade Funcional",
    copy: "“Faço tudo, mas minha mente nunca desliga.”",
    icon: Activity,
  },
  {
    title: "O Vazio Existencial",
    copy: "“Tenho conquistas, mas sinto que falta algo.”",
    icon: Compass,
  },
  {
    title: "Repetições de Ciclos",
    copy: "“Por que sempre atraio o mesmo tipo de problema?”",
    icon: Sparkles,
  },
  {
    title: "Luto e Transições",
    copy: "“Perdi algo importante e não sei como me reconstruir.”",
    icon: Waves,
  },
];

const results = [
  "Autonomia Emocional: lidar com sentimentos sem ser refém deles.",
  "Tomada de Decisão: clareza para escolhas difíceis.",
  "Leveza: a sensação física de tirar um peso das costas.",
];

export default function IndividualPage() {
  return (
    <main className="px-6" style={{ "--color-secondary-rgb": secondaryRgb } as CSSProperties}>
      {/* Hero Individual */}
      <section className="relative mx-auto grid max-w-6xl items-center gap-12 pt-24 pb-16 md:grid-cols-[1.05fr_0.95fr] md:pt-28 md:pb-20">
        <div className="pointer-events-none absolute -top-16 left-10 h-56 w-56 rounded-full bg-[var(--color-secondary)]/15 blur-[120px]" />
        <motion.div className="space-y-6" {...fadeUp}>
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-foreground/60">
            Psicoterapia Individual
          </p>
          <h1 className="font-serif text-4xl leading-tight text-foreground md:text-6xl md:leading-[1.05]">
            Pare de carregar o mundo em{" "}
            <span className="font-[var(--font-italianno)] italic text-[var(--color-secondary)] text-5xl md:text-6xl">
              silêncio
            </span>
            .
          </h1>
          <p className="font-sans text-lg leading-relaxed text-foreground/80 md:text-xl">
            Psicoterapia Individual para adultos. Um espaço de sigilo absoluto para você organizar o caos
            interno, curar feridas antigas e retomar a liderança da sua própria{" "}
            <span className="font-serif italic text-[var(--color-secondary)]">jornada</span>.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary" colorTheme="secondary" className="px-7">
              Quero iniciar minha jornada
            </Button>
            <div className="flex items-center gap-2 rounded-full border border-[var(--color-secondary)]/30 bg-[var(--color-secondary)]/10 px-4 py-2 text-sm text-foreground/80">
              <HeartPulse className="h-4 w-4 text-[var(--color-secondary)]" />
              Sigilo absoluto e acolhimento
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative h-[360px] overflow-hidden rounded-tl-[90px] rounded-br-[90px] rounded-tr-[32px] rounded-bl-[32px] md:h-[520px]"
          {...fadeUp}
        >
          <div className="absolute -inset-10 bg-[radial-gradient(circle_at_30%_30%,rgba(183,110,121,0.32),transparent_55%)] blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(183,110,121,0.18),transparent_55%)] blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(183,110,121,0.2),transparent_60%)] blur-[100px]" />
          <motion.div
            className="absolute inset-0 translate-x-4 translate-y-4 rounded-tl-[90px] rounded-br-[90px] rounded-tr-[32px] rounded-bl-[32px] border-2 border-[var(--color-secondary)]/40"
            whileHover={{ x: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          />
          <Image
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1600&q=80&sat=-12&exp=3"
            alt="Mulher contemplativa em luz suave, em silêncio e serenidade"
            fill
            className="relative z-10 object-cover"
            priority
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent z-20" />
          <div className="pointer-events-none absolute inset-x-8 bottom-0 z-30 h-2 rounded-full bg-[var(--color-tertiary)]/55 blur-[6px] opacity-80" />
        </motion.div>
      </section>

      {/* Diagnóstico Silencioso */}
      <section className="relative mx-auto max-w-6xl py-14 md:py-18">
        <div className="absolute -left-24 top-10 h-48 w-48 rounded-full bg-[var(--color-secondary)]/10 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-36 w-36 rounded-full bg-[var(--color-secondary)]/10 blur-3xl" />
        <motion.div className="mb-10 space-y-3 text-center" {...fadeUp}>
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-foreground/60">
            Por fora, tudo parece sob controle. E por dentro?
          </p>
          <h2 className="font-serif text-3xl leading-tight text-foreground md:text-4xl">
            Diagnóstico silencioso, revelado com{" "}
            <span className="italic text-[var(--color-secondary)]">delicadeza</span>.
          </h2>
          <p className="font-sans text-base leading-relaxed text-foreground/75">
            Muitas vezes, o sucesso profissional ou a estabilidade familiar mascaram uma angústia que não tem
            nome. Estes são sinais para observar:
          </p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2">
          {diagnosticPoints.map(({ title, copy, icon: Icon }, idx) => (
            <motion.div
              key={title}
              whileHover={{
                y: -5,
                borderColor: "var(--color-secondary)",
                boxShadow: "0 10px 30px -10px rgba(var(--color-secondary-rgb), 0.1)",
              }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
              className="h-full"
              {...fadeUp}
              transition={{ duration: 0.5 + idx * 0.03, ease: "easeOut" as const }}
            >
              <GlassCard className="relative h-full border border-white/40 p-6 transition-colors duration-200">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-secondary)]/12 text-[var(--color-secondary)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="h-1 w-14 rounded-full bg-[var(--color-secondary)]/50" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] text-foreground/60">
                    Sinal {idx + 1}
                  </span>
                </div>
                <h3 className="font-serif text-2xl leading-tight text-foreground">{title}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-foreground/80">{copy}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* O Santuário */}
      <section className="relative mx-auto max-w-6xl py-14 md:py-18">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(183,110,121,0.15),transparent_50%),radial-gradient(circle_at_80%_40%,rgba(183,110,121,0.12),transparent_45%)]" />
        <div className="absolute -left-16 -bottom-10 h-56 w-56 rounded-full bg-[var(--color-secondary)]/10 blur-3xl" />
        <div className="absolute -right-12 -top-16 h-64 w-64 rounded-full bg-[var(--color-secondary)]/10 blur-3xl" />
        <motion.div
          className="relative z-10 grid gap-10 overflow-hidden rounded-3xl border-2 border-[var(--color-secondary)]/30 bg-white/80 p-10 shadow-xl backdrop-blur-xl md:grid-cols-[1.05fr_0.95fr] md:p-12"
          {...fadeUp}
        >
          <div className="space-y-5 rounded-3xl border border-[var(--color-secondary)]/20 bg-[var(--color-secondary)]/5 p-6 md:p-8">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-foreground/60">O Santuário</p>
            <h3 className="font-serif text-3xl leading-tight text-foreground md:text-4xl">
              O que acontece dentro da{" "}
              <span className="italic text-[var(--color-secondary)]">sala</span>?
            </h3>
            <p className="font-sans text-base leading-relaxed text-foreground/80">
              A terapia na Clínica Crer Ser não é apenas um desabafo. É uma investigação guiada. Com mais de 15
              anos de escuta clínica, Alaídes Franco oferece um ambiente livre de julgamentos.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Lightbulb className="mt-1 h-5 w-5 text-[var(--color-secondary)]" />
                <div>
                  <p className="font-semibold text-foreground">Sigilo Absoluto</p>
                  <p className="text-sm text-foreground/75">Sua privacidade é prioridade.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Leaf className="mt-1 h-5 w-5 text-[var(--color-secondary)]" />
                <div>
                  <p className="font-semibold text-foreground">Abordagem Ativa</p>
                  <p className="text-sm text-foreground/75">Fazemos as perguntas que viram a chave.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <HeartPulse className="mt-1 h-5 w-5 text-[var(--color-secondary)]" />
                <div>
                  <p className="font-semibold text-foreground">Visão Sistêmica</p>
                  <p className="text-sm text-foreground/75">Entender lealdades familiares invisíveis.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="rounded-full border border-[var(--color-secondary)]/30 bg-white/60 px-4 py-2 text-xs uppercase tracking-[0.25em] text-foreground/70">
                Metodologia viva
              </span>
              <Button variant="outline" colorTheme="secondary" className="px-6">
                Quero sentir essa clareza
              </Button>
            </div>
          </div>

          <div className="relative h-full min-h-[400px] w-full overflow-hidden rounded-[2rem]">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] border-2 border-[var(--color-secondary)]" />
            <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
              <Image
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1900&auto=format&fit=crop"
                alt="Consultório acolhedor"
                fill
                className="object-cover rounded-[2rem]"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-t from-black/20 via-black/5 to-transparent" />
              <div className="pointer-events-none absolute inset-x-6 bottom-0 z-30 h-2 rounded-full bg-[var(--color-tertiary)]/55 blur-[6px] opacity-80" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Resultados */}
      <section className="mx-auto max-w-6xl py-14 md:py-18">
        <motion.div className="mb-8 space-y-2 text-center" {...fadeUp}>
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-foreground/60">Resultados</p>
          <h3 className="font-serif text-3xl leading-tight text-foreground md:text-4xl">
            O objetivo não é ser “perfeito”. É ser{" "}
            <span className="font-serif italic text-[var(--color-secondary)]">livre</span>.
          </h3>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
          {results.map((item, idx) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <GlassCard className="h-full border border-white/40 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--color-secondary)] hover:shadow-[0_14px_36px_-14px_rgba(var(--color-secondary-rgb),0.2)]">
                <div className="mb-4 flex items-center gap-3 text-[var(--color-secondary)]">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-secondary)]/12">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div className="h-1 flex-1 rounded-full bg-[var(--color-secondary)]/40" />
                </div>
                <p className="font-sans text-base leading-relaxed text-foreground/80">{item}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="mx-auto max-w-6xl py-16 md:py-20 text-center">
        <motion.div className="space-y-4" {...fadeUp}>
          <h3 className="font-serif text-3xl leading-tight text-foreground md:text-4xl">
            O autocuidado mais sofisticado é cuidar da sua mente.
          </h3>
          <p className="font-sans text-base leading-relaxed text-foreground/80">
            Você cuida da casa, da carreira e da família. Chegou a hora de cuidar de você.
          </p>
          <div className="flex justify-center">
            <Button variant="primary" colorTheme="secondary" className="px-8">
              Agendar sessão individual
            </Button>
          </div>
        </motion.div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="w-full relative overflow-hidden rounded-none border-0 pt-24 pb-8 text-[var(--color-background)] bg-[var(--color-secondary)]">
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


