"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Heart, Users, TreeDeciduous } from "lucide-react";

import GlassCard from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";

const pains = [
  {
    title: "A hora da tarefa é uma batalha",
    copy:
      "Dificuldade de concentração, resistência em ir para a escola ou notas que não refletem o potencial dele(a).",
  },
  {
    title: "Explosões ou Silêncios",
    copy:
      "Mudanças bruscas de humor, birras excessivas para a idade ou um silêncio que preocupa e isola a criança.",
  },
  {
    title: "Dificuldade em fazer amigos",
    copy:
      "Timidez excessiva, medo de se expor ou agressividade com colegas. A sensação de não se encaixar.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.3 },
};

export default function KidsPage() {
  return (
    <main className="px-6">
      {/* Hero Criança */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 pt-20 pb-16 md:grid-cols-2 md:pt-24 md:pb-20">
        <motion.div className="space-y-6" {...fadeUp}>
          <h1 className="font-serif text-4xl leading-tight text-foreground md:text-6xl md:leading-[1.05]">
            Ajudamos seu filho a descobrir o próprio{" "}
            <span className="font-[var(--font-italianno)] text-[var(--color-primary)] text-5xl md:text-6xl">
              brilho
            </span>
            .
          </h1>
          <p className="font-sans text-lg leading-relaxed text-foreground/80 md:text-xl">
            Psicopedagogia Clínica e Terapia Infantil com olhar sistêmico. Transformamos dificuldades de
            aprendizado e barreiras emocionais em degraus para o crescimento.
          </p>
          <Button variant="primary" colorTheme="primary">
            Agendar conversa inicial
          </Button>
        </motion.div>
        <motion.div
          className="relative order-first h-[340px] overflow-hidden rounded-tl-[90px] rounded-br-[90px] rounded-tr-[28px] rounded-bl-[28px] md:order-last md:h-[520px]"
          {...fadeUp}
        >
          <div className="absolute -inset-10 bg-[radial-gradient(circle_at_30%_30%,rgba(246,162,141,0.28),transparent_60%)] blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(246,162,141,0.22),transparent_55%)] blur-3xl" />
          <div className="pointer-events-none absolute -top-10 right-6 h-40 w-40 rounded-full bg-[rgba(246,162,141,0.4)] blur-3xl" />
          <div className="pointer-events-none absolute top-6 -right-10 h-32 w-32 rounded-[40px] bg-[rgba(246,162,141,0.3)] blur-2xl" />
          <Image
            src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1400&q=80"
            alt="Criança estudando com apoio em um ambiente acolhedor"
            fill
            className="relative z-10 object-cover"
            priority
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-20" />
        </motion.div>
      </section>

      {/* Sessão Dores */}
      <section className="mx-auto max-w-6xl py-14 md:py-18">
        <motion.div className="mb-10 space-y-2 text-center" {...fadeUp}>
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-foreground/60">
            O espelho
          </p>
          <h2 className="font-serif text-3xl leading-tight text-foreground md:text-4xl">
            Momentos que geram <span className="italic text-[var(--color-primary)]">angústia</span> em casa...
          </h2>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
          {pains.map((pain, idx) => (
            <motion.div
              key={pain.title}
              whileHover={{ y: -10, borderColor: "var(--color-primary)" }}
              transition={{ type: "spring", stiffness: 320, damping: 18 }}
              className="h-full"
              {...fadeUp}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <GlassCard className="relative h-full border border-white/40 p-6 transition-colors duration-200">
                <div className="mb-4 flex items-center gap-2 text-[var(--color-primary)]">
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)]/10"
                  >
                    {idx === 0 && <Sparkles className="h-5 w-5" />}
                    {idx === 1 && <Heart className="h-5 w-5" />}
                    {idx === 2 && <Users className="h-5 w-5" />}
                  </motion.span>
                  <div className="h-1 flex-1 rounded-full bg-[var(--color-primary)]/50" />
                </div>
                <h3 className="font-serif text-2xl leading-tight text-foreground">{pain.title}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-foreground/80">{pain.copy}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sessão Metodologia */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 py-14 md:grid-cols-[1.1fr_1fr] md:py-18">
        <motion.div
          className="relative h-[320px] overflow-hidden rounded-tr-[70px] rounded-bl-[70px] rounded-tl-[24px] rounded-br-[24px] md:h-[420px]"
          {...fadeUp}
        >
          <motion.div
            className="absolute inset-0 translate-x-4 translate-y-4 rounded-tr-[70px] rounded-bl-[70px] rounded-tl-[24px] rounded-br-[24px] border-2 border-[var(--color-primary)] opacity-50"
            whileHover={{ x: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          />
          <Image
            src="https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=1200&q=80"
            alt="Brinquedos de madeira em ambiente acolhedor"
            fill
            className="relative z-10 object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
        </motion.div>
        <motion.div className="space-y-4" {...fadeUp}>
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-foreground/60">Metodologia</p>
          <h3 className="font-serif text-3xl leading-tight text-foreground md:text-4xl">
            Aqui, brincar é <span className="italic text-[var(--color-primary)]">coisa séria</span>.
          </h3>
          <p className="font-sans text-base leading-relaxed text-foreground/80">
            Para a criança, o brincar é a linguagem da alma. Não usamos apenas testes padronizados. Usamos
            jogos, arte e escuta ativa para entender como seu filho aprende e o que está bloqueando o seu
            desenvolvimento.
          </p>
          <ul className="space-y-2 font-sans text-base text-foreground/85">
            <li>• Avaliação Psicopedagógica: investigamos a raiz da dificuldade.</li>
            <li>• Intervenção Lúdica: o tratamento acontece de forma leve.</li>
          </ul>
        </motion.div>
      </section>

      {/* Sessão Sistêmica */}
      <section className="mx-auto max-w-6xl py-16 md:py-20">
        <motion.div
          className="relative overflow-hidden rounded-3xl border-2 border-[var(--color-primary)]/30 bg-white/80 p-8 shadow-xl backdrop-blur-xl md:p-10"
          {...fadeUp}
        >
          <TreeDeciduous className="absolute -left-6 -bottom-6 h-40 w-40 text-[var(--color-primary)]/10" />
          <div className="space-y-3 relative z-10">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-foreground/60">Visão Sistêmica</p>
            <h3 className="font-serif text-3xl leading-tight text-foreground md:text-4xl">
              Cuidamos da criança, acolhendo a <span className="italic text-[var(--color-primary)]">família</span>.
            </h3>
            <p className="font-sans text-base leading-relaxed text-foreground/80">
              Muitas vezes, o sintoma da criança é apenas um sinal de que algo no sistema familiar precisa de
              atenção. Trabalhamos junto aos pais para que todos se sintam parceiros no processo.
            </p>
            <div className="mt-6 rounded-2xl border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-4 py-3 font-sans text-base text-foreground">
              Pais, vocês não são culpados. São parceiros.
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Final */}
      <section className="mx-auto max-w-6xl py-16 md:py-20 text-center">
        <motion.div className="space-y-4" {...fadeUp}>
          <h3 className="font-serif text-3xl leading-tight text-foreground md:text-4xl">
            O futuro do seu filho começa com um <span className="italic text-[var(--color-primary)]">olhar atento</span> hoje.
          </h3>
          <p className="font-sans text-base leading-relaxed text-foreground/80">
            Não espere a dificuldade crescer. Vamos juntos desbloquear esse potencial?
          </p>
          <div className="flex justify-center">
            <Button variant="primary" colorTheme="primary" className="px-8">
              Quero agendar uma conversa sobre meu filho
            </Button>
          </div>
        </motion.div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="w-full relative overflow-hidden rounded-none border-0 pt-24 pb-8 text-[var(--color-background)] bg-[var(--color-primary)]">
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


