"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Diamond, Feather, GraduationCap, Infinity } from "lucide-react";

import GlassCard from "@/components/ui/glass-card";
import AuroraBackground from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";

const accentRgb = "74,59,50";

const stagger = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut", staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const child = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const dropCapMotion = {
  hidden: { opacity: 0, y: 22, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.75, ease: "easeOut" } },
};

const pillars = [
  {
    title: "Acolhimento",
    copy: "Escuta que abraça a história antes de qualquer técnica.",
    icon: Feather,
  },
  {
    title: "Excelência Técnica",
    copy: "Psicologia, Psicopedagogia e Sistêmica costuradas com rigor.",
    icon: GraduationCap,
  },
  {
    title: "Olhar Sistêmico",
    copy: "Cada pessoa é um capítulo dentro de um livro familiar maior.",
    icon: Infinity,
  },
];

const credentials = ["Psicóloga Clínica", "Psicopedagoga", "Consteladora"];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=2000&q=80",
    alt: "Mesa de estudos com livros e caderno aberto",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070&auto=format&fit=crop",
    alt: "Detalhe de café quente em ambiente aconchegante de consultório",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1800&q=80",
    alt: "Mãos em gesto de conexão humana em ambiente acolhedor",
    span: "col-span-1 row-span-1",
  },
];

const MotionGlassCard = motion(GlassCard);

export default function AboutPage() {
  return (
    <main
      className="relative px-6 pb-16 text-foreground md:px-8"
      style={
        {
          "--color-foreground-rgb": accentRgb,
          "--color-primary-rgb": "246,162,141",
          "--color-secondary-rgb": "183,110,121",
          "--color-tertiary-rgb": "179,158,181",
        } as CSSProperties
      }
    >
      <AuroraBackground variant="default" className="opacity-60" />

      {/* Hero Pessoal */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 pt-24 pb-16 md:grid-cols-[0.9fr_1.1fr] md:pt-28 md:pb-20">
        <motion.div className="relative h-[360px] overflow-hidden rounded-[32px] md:h-[520px]" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={stagger}>
          <motion.div
            className="absolute inset-0 translate-x-4 translate-y-4 rounded-[32px] border border-[var(--color-foreground)]/35"
            variants={child}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent" />
          <Image
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1600&q=80&sat=-10&exp=2"
            alt="Mulher profissional sorrindo, elegante e segura"
            fill
            className="relative z-10 object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-black/10 to-transparent z-20" />
        </motion.div>

        <motion.div className="space-y-6" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.45 }} variants={stagger}>
          <motion.p className="font-sans text-xs uppercase tracking-[0.35em] text-foreground/70" variants={child}>
            Alma por trás da Técnica
          </motion.p>
          <motion.h1 className="font-serif text-4xl leading-tight text-foreground md:text-6xl md:leading-[1.05]" variants={child}>
            Por trás de cada diploma, existe uma vocação para{" "}
            <span className="font-[var(--font-italianno)] text-[var(--color-primary)] text-5xl md:text-6xl">
              servir
            </span>
            .
          </motion.h1>
          <motion.p className="font-sans text-lg leading-relaxed text-foreground/80 md:text-xl" variants={child}>
            Olá, eu sou Alaídes Franco — psicóloga, psicopedagoga e consteladora. Minha missão é traduzir histórias
            em cuidado, mantendo a seriedade clínica com a delicadeza de quem realmente vê a pessoa inteira.
          </motion.p>
          <motion.div className="flex flex-wrap items-center gap-4" variants={child}>
            <Button
              variant="primary"
              style={{ "--btn-accent": "var(--color-foreground)" } as CSSProperties}
              className="px-7"
            >
              Agendar uma conversa
            </Button>
            <div className="flex items-center gap-2 rounded-full border border-[var(--color-foreground)]/25 bg-white/70 px-4 py-2 text-sm text-foreground/80 shadow-sm backdrop-blur">
              <Feather className="h-4 w-4 text-[var(--color-foreground)]" />
              Escuta editorial, sem pressa
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* A Jornada */}
      <section className="mx-auto max-w-4xl py-14 md:py-18">
        <div className="space-y-4 text-center md:text-left">
          <motion.p
            className="font-sans text-xs uppercase tracking-[0.3em] text-foreground/60"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            A Jornada
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={stagger}
            className="relative overflow-visible"
          >
            <motion.p
              className="font-sans text-lg leading-relaxed text-foreground/85 md:text-xl"
              variants={child}
            >
              <motion.span
                variants={dropCapMotion}
                className="float-left mr-4 -mt-2 font-[var(--font-cormorant)] text-[5.6rem] leading-none text-[var(--color-foreground)]"
              >
                T
              </motion.span>
              ransitei da Psicologia para a Psicopedagogia ao perceber que o aprendizado também é afeto. Mais
              tarde, a Sistêmica me mostrou que ninguém caminha sozinho. Hoje, uno ciência e sensibilidade para
              reposicionar famílias, casais e crianças em seus lugares de força — com olhar atento, rigor técnico e
              uma profunda confiança no que é essencialmente humano.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Os 3 Pilares */}
      <section className="mx-auto max-w-6xl py-14 md:py-18">
        <motion.div
          className="mb-10 space-y-2 text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <motion.p className="font-sans text-xs uppercase tracking-[0.35em] text-foreground/60" variants={child}>
            Os 3 Pilares
          </motion.p>
          <motion.h2 className="font-serif text-3xl leading-tight text-foreground md:text-4xl" variants={child}>
            A técnica só ganha sentido quando a alma{" "}
            <span className="italic text-[var(--color-primary)]">aparece</span>.
          </motion.h2>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map(({ title, copy, icon: Icon }, idx) => {
            const hoverColor =
              idx === 0
                ? "var(--color-primary)"
                : idx === 1
                ? "var(--color-secondary)"
                : "var(--color-tertiary)";
            const hoverShadow =
              idx === 0
                ? "0 10px 30px -10px rgba(var(--color-primary-rgb), 0.15)"
                : idx === 1
                ? "0 10px 30px -10px rgba(var(--color-secondary-rgb), 0.15)"
                : "0 10px 30px -10px rgba(var(--color-tertiary-rgb), 0.15)";
            return (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <MotionGlassCard
                className="group h-full border border-white/50 p-6 backdrop-blur-xl transition-all duration-300"
                whileHover={{ y: -8, borderColor: hoverColor, boxShadow: hoverShadow }}
                whileTap={{ scale: 0.99 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="mb-4 flex items-center gap-3 text-[var(--color-foreground)]">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-foreground)]/25 bg-white/70 transition-colors duration-200 group-hover:border-transparent group-hover:bg-white">
                    <Icon
                      className="h-5 w-5 text-[var(--color-foreground)] transition-colors duration-200 group-hover:text-[color:var(--hover-icon-color)]"
                      style={{ "--hover-icon-color": hoverColor } as CSSProperties}
                    />
                  </span>
                  <div className="h-1 flex-1 rounded-full bg-[var(--color-foreground)]/20" />
                </div>
                <h3 className="font-serif text-2xl leading-tight text-foreground">{title}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-foreground/80">{copy}</p>
              </MotionGlassCard>
            </motion.div>
            );
          })}
        </div>
      </section>

      {/* Credenciais */}
      <section className="mx-auto max-w-5xl py-12 md:py-16">
        <motion.div
          className="rounded-3xl border border-[var(--color-foreground)]/10 bg-[var(--color-foreground)]/5 p-8 shadow-sm backdrop-blur"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <div className="space-y-4">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-foreground/70">Credenciais</p>
            <h3 className="font-serif text-3xl leading-tight text-foreground md:text-4xl">
              Técnica não é fim, é caminho.
            </h3>
            <div className="grid gap-3 md:grid-cols-3">
              {credentials.map((item, idx) => {
                const hoverColor =
                  idx === 0
                    ? "var(--color-primary)"
                    : idx === 1
                    ? "var(--color-secondary)"
                    : "var(--color-tertiary)";
                const hoverShadow =
                  idx === 0
                    ? "0 10px 30px -10px rgba(var(--color-primary-rgb), 0.15)"
                    : idx === 1
                    ? "0 10px 30px -10px rgba(var(--color-secondary-rgb), 0.15)"
                    : "0 10px 30px -10px rgba(var(--color-tertiary-rgb), 0.15)";
                return (
                  <motion.div
                    key={item}
                    className="group flex items-start gap-3 rounded-2xl border border-transparent bg-white/70 p-4 shadow-sm transition-colors duration-200"
                    whileHover={{ y: -6, borderColor: hoverColor, boxShadow: hoverShadow }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ type: "spring", stiffness: 280, damping: 18 }}
                  >
                    <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-foreground)]/10 text-[var(--color-foreground)] transition-colors duration-200 group-hover:bg-white group-hover:text-[color:var(--hover-icon-color)]" style={{ "--hover-icon-color": hoverColor } as CSSProperties}>
                      <Diamond className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">{item}</p>
                      <p className="text-sm text-foreground/70">Registro vivo em prática contínua.</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Galeria Lifestyle */}
      <section className="mx-auto max-w-6xl py-14 md:py-18">
        <motion.div
          className="mb-8 space-y-2 text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <motion.p className="font-sans text-xs uppercase tracking-[0.35em] text-foreground/60" variants={child}>
            Bastidores
          </motion.p>
          <motion.h3 className="font-serif text-3xl leading-tight text-foreground md:text-4xl" variants={child}>
            Onde estudo, preparo café e acolho{" "}
            <span className="italic text-[var(--color-primary)]">histórias</span>.
          </motion.h3>
        </motion.div>
        <div className="grid h-[560px] grid-cols-3 grid-rows-2 gap-4 md:h-[640px]">
          {gallery.map((item) => (
            <motion.div
              key={item.src}
              className={`relative overflow-hidden rounded-[28px] ${item.span}`}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[28px] border border-[var(--color-foreground)]/25" />
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-transparent" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA editorial */}
      <section className="mx-auto max-w-4xl py-12 text-center md:py-16">
        <motion.div
          className="space-y-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
        >
          <motion.h4 className="font-serif text-3xl leading-tight text-foreground md:text-4xl" variants={child}>
            Cada história merece um capítulo escrito com cuidado.
          </motion.h4>
          <motion.p className="font-sans text-base leading-relaxed text-foreground/80 md:text-lg" variants={child}>
            Se você busca mais do que respostas rápidas, este é um espaço para conversas profundas, soluções
            elegantes e movimentos que respeitam sua verdade.
          </motion.p>
          <motion.div className="flex justify-center gap-3" variants={child}>
            <Button
              variant="primary"
              style={{ "--btn-accent": "var(--color-foreground)" } as CSSProperties}
              className="px-7"
            >
              Quero sentir essa experiência
            </Button>
            <Button variant="outline" style={{ "--btn-accent": "var(--color-foreground)" } as CSSProperties}>
              Falar com a clínica
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="w-full relative overflow-hidden rounded-none border-0 pt-24 pb-8 text-[var(--color-background)] bg-[var(--color-foreground)]">
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


