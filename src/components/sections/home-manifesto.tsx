"use client";

import { motion } from "framer-motion";

const HomeManifesto = () => {
  return (
    <section className="px-6 pt-4 pb-14 md:pt-6 md:pb-16">
      <motion.div
        className="mx-auto flex max-w-4xl flex-col items-center text-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <h2 className="font-serif text-4xl italic leading-tight text-foreground md:text-5xl">
          Não olhamos apenas para o sintoma. Olhamos para a história que o conta.
        </h2>
        <p className="max-w-3xl font-sans text-lg leading-relaxed text-foreground/80 md:text-xl">
          Na Clínica Crer Ser, acreditamos que cada desafio — seja na escola, no casamento ou na alma — é um
          convite para o crescimento. Unimos a ciência da Psicologia com a profundidade das Constelações
          para oferecer não apenas tratamento, mas um novo olhar sobre a vida. Aqui, o julgamento dá lugar ao
          acolhimento. E a dúvida dá lugar à direção.
        </p>
      </motion.div>
    </section>
  );
};

export default HomeManifesto;


