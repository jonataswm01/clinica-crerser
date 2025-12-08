"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Button } from "../ui/button";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 1.5 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const HomeHero = () => {
  return (
    <section className="min-h-screen md:h-[105vh] px-6 pt-16 pb-10 md:pt-20 md:pb-12">
      <div className="mx-auto grid h-full max-w-6xl items-center gap-12 md:grid-cols-2">
        <motion.div
          className="space-y-8"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="font-serif text-4xl leading-tight md:text-6xl md:leading-[1.05]"
            variants={item}
          >
            Onde o desenvolvimento ganha raízes e a vida floresce com{" "}
            <span className="font-[var(--font-italianno)] text-[var(--color-primary)] text-5xl md:text-6xl">
              leveza
            </span>
            .
          </motion.h1>

          <motion.p
            className="font-sans text-lg leading-relaxed text-foreground/80 md:text-xl"
            variants={item}
          >
            Psicologia Clínica, Psicopedagogia e Visão Sistêmica em Santa Adélia. Mais
            de 15 anos dedicados a acolher famílias, desbloquear potenciais e
            restaurar a harmonia do lar.
          </motion.p>

          <motion.div variants={item}>
            <Button variant="primary" colorTheme="primary">
              Agendar conversa inicial
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative order-first h-[340px] overflow-hidden rounded-tl-[100px] rounded-br-[100px] rounded-tr-[30px] rounded-bl-[30px] md:order-last md:h-[520px]"
          variants={item}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.3, duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1400&q=80"
            alt="Mãe e criança de mãos dadas em um momento de leveza"
            fill
            className="object-cover"
            priority
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHero;


