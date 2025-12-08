"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const HomeAbout = () => {
  return (
    <section className="px-6 py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.35 }}
          className="relative h-[360px] overflow-hidden rounded-tr-[80px] rounded-bl-[80px] rounded-tl-[24px] rounded-br-[24px] border-b-4 border-[var(--color-foreground)] md:h-[480px]"
        >
          <div className="absolute inset-0 translate-x-10 translate-y-10 rounded-tr-[80px] rounded-bl-[80px] rounded-tl-[24px] rounded-br-[24px] border-[4px] border-[var(--color-foreground)] opacity-50 z-0" />
          <Image
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
            alt="Alaídes Franco, psicóloga clínica"
            fill
            className="relative z-10 object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <h3 className="font-serif text-4xl leading-tight text-foreground">Alaídes Franco</h3>
          <p className="font-sans text-lg text-foreground/80">Psicóloga Clínica | Psicopedagoga</p>
          <p className="font-sans text-base leading-relaxed text-foreground/80">
            Ao longo de mais de 15 anos de trajetória, entendi uma verdade fundamental: o amor, sozinho,
            às vezes não basta. É preciso ordem e conhecimento para que o amor flua. Minha abordagem une
            a técnica clínica rigorosa com a sensibilidade humana.
          </p>
          <p className="font-sans text-base leading-relaxed text-foreground/80">
            A Clínica Crer Ser é a materialização desse cuidado. Construímos um espaço seguro para acolher
            famílias, desbloquear potenciais e restaurar a harmonia do lar.
          </p>
          <button className="group relative inline-flex items-center font-sans text-sm font-semibold text-[var(--color-primary)]">
            <span>Conheça minha formação completa →</span>
            <span className="absolute left-0 -bottom-[2px] h-[2px] w-full origin-left scale-x-0 bg-[var(--color-primary)] transition-transform duration-200 ease-out group-hover:scale-x-100" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeAbout;


