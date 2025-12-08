"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { z } from "zod";

import GlassCard from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Digite seu nome completo."),
  whatsapp: z
    .string()
    .min(10, "Inclua DDD e número.")
    .regex(/^\+?[\d\s()-]{8,}$/, "Use apenas números com DDD."),
  reason: z.enum(["crianca", "adulto", "casal", "outros"], {
    required_error: "Selecione um motivo.",
  }),
  message: z.string().min(10, "Conte um pouco sobre o que precisa."),
});

type ContactFormData = z.infer<typeof contactSchema>;

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.3 },
};

const supportChannels = [
  {
    title: "Prefere agilidade?",
    copy: "Fale direto pelo WhatsApp e encontre o melhor horário.",
    icon: MessageCircle,
    action: {
      label: "Iniciar conversa",
      href: "https://wa.me/5561999990000",
      className:
        "bg-green-100 text-green-800 hover:bg-green-200 focus-visible:ring-green-300",
    },
  },
  {
    title: "Prefere escrever com calma?",
    copy: "Envie um e-mail com contexto e retornamos com carinho.",
    icon: Mail,
    action: {
      label: "contato@clinica.crer",
      href: "mailto:contato@clinica.crer",
      className:
        "text-foreground/80 hover:text-primary underline underline-offset-4",
    },
  },
];

const faqs = [
  {
    q: "Vocês atendem por convênio?",
    a: "Não. Somos clínica boutique, mas emitimos recibo para reembolso quando o convênio permitir.",
  },
  {
    q: "Qual a duração das sessões?",
    a: "Cada sessão dura, em média, 50 minutos para manter foco e profundidade.",
  },
  {
    q: "Há atendimento online?",
    a: "Sim. Atendemos online com o mesmo cuidado, mantendo sigilo e conforto.",
  },
  {
    q: "Como remarcar ou cancelar uma sessão?",
    a: "Avise com pelo menos 24h de antecedência para liberarmos o horário e evitarmos cobrança.",
  },
  {
    q: "Quais formas de pagamento são aceitas?",
    a: "Pix, cartão e emissão de recibo para reembolso. Emitimos nota mediante solicitação.",
  },
  {
    q: "Vocês atendem crianças acompanhadas?",
    a: "Sim. A primeira conversa inclui responsáveis para alinharmos expectativas e histórico.",
  },
  {
    q: "Como funciona a primeira sessão?",
    a: "É uma entrevista inicial para entender contexto, definir foco e sugerir plano de cuidado.",
  },
  {
    q: "Sigilo é garantido?",
    a: "Totalmente. Seguimos ética profissional e só compartilhamos algo com sua autorização.",
  },
];

export default function ContatoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      whatsapp: "",
      reason: "adulto",
      message: "",
    },
  });

  const inputBase =
    "w-full bg-transparent border-0 border-b border-foreground/20 pb-3 pt-1 text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-0";

  const onSubmit = (values: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitted(false);

    setTimeout(() => {
      console.log("Contato enviado", values);
      setSubmitted(true);
      setIsSubmitting(false);
      form.reset();
      alert("Mensagem enviada! Em breve retornaremos.");
    }, 600);
  };

  const buttonLabel = useMemo(() => {
    if (submitted) return "Enviado!";
    if (isSubmitting) return "Enviando...";
    return "Enviar mensagem";
  }, [submitted, isSubmitting]);

  return (
    <main className="px-6">
      <section className="mx-auto max-w-5xl pt-32 pb-16 text-center">
        <motion.div className="space-y-4" {...fadeUp}>
          <h1 className="font-serif text-4xl leading-tight text-foreground md:text-5xl">
            O primeiro passo é o mais{" "}
            <span className="font-[var(--font-italianno)] text-primary">
              corajoso
            </span>
            .
          </h1>
          <p className="mx-auto max-w-2xl font-sans text-lg leading-relaxed text-foreground/80">
            Estamos prontos para acolher sua dúvida e encontrar o melhor momento
            para você.
          </p>
        </motion.div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
        {supportChannels.map(({ title, copy, icon: Icon, action }) => (
          <GlassCard
            key={title}
            className="flex h-full flex-col gap-4 p-6"
            hoverLift
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/70">
                <Icon className="h-5 w-5 text-foreground" />
              </span>
              <p className="font-sans text-sm uppercase tracking-[0.2em] text-foreground/60">
                Canal
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-2xl leading-tight text-foreground">
                {title}
              </h3>
              <p className="font-sans text-sm leading-relaxed text-foreground/75">
                {copy}
              </p>
            </div>
            <div className="pt-2">
              <Link
                href={action.href}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                  action.className
                )}
              >
                {action.label}
              </Link>
            </div>
          </GlassCard>
        ))}
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-20">
        <motion.div
          className="rounded-3xl border border-white/50 bg-white/80 p-8 shadow-sm backdrop-blur-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="mb-8 space-y-2">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-foreground/60">
              Formulário
            </p>
            <h2 className="font-serif text-3xl leading-tight text-foreground md:text-4xl">
              Conte como podemos{" "}
              <span className="italic text-primary">acolher</span>.
            </h2>
          </div>

          <form
            className="space-y-6"
            onSubmit={form.handleSubmit(onSubmit)}
            noValidate
          >
            <div className="space-y-2">
              <label className="font-sans text-sm text-foreground/80">
                Nome
              </label>
              <input
                type="text"
                className={inputBase}
                placeholder="Seu nome completo"
                {...form.register("name")}
              />
              {form.formState.errors.name && (
                <p className="text-sm text-primary">
                  {form.formState.errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="font-sans text-sm text-foreground/80">
                WhatsApp
              </label>
              <input
                type="tel"
                className={inputBase}
                placeholder="(61) 9 9999-0000"
                {...form.register("whatsapp")}
              />
              {form.formState.errors.whatsapp && (
                <p className="text-sm text-primary">
                  {form.formState.errors.whatsapp.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="font-sans text-sm text-foreground/80">
                Como podemos ajudar?
              </label>
              <select className={inputBase} {...form.register("reason")}>
                <option value="crianca">Criança</option>
                <option value="adulto">Adulto</option>
                <option value="casal">Casal</option>
                <option value="outros">Outros</option>
              </select>
              {form.formState.errors.reason && (
                <p className="text-sm text-primary">
                  {form.formState.errors.reason.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="font-sans text-sm text-foreground/80">
                Mensagem
              </label>
              <textarea
                rows={4}
                className={cn(
                  inputBase,
                  "min-h-[140px] resize-none leading-relaxed"
                )}
                placeholder="Como podemos ajudar?"
                {...form.register("message")}
              />
              {form.formState.errors.message && (
                <p className="text-sm text-primary">
                  {form.formState.errors.message.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="mt-4 h-14 w-full text-base"
              disabled={isSubmitting}
            >
              <Send className="h-5 w-5" />
              {buttonLabel}
            </Button>
          </form>
        </motion.div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/50 bg-white/70 p-7 shadow-sm backdrop-blur-xl">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-foreground/60">
              Endereço
            </p>
            <h3 className="mt-2 font-serif text-2xl leading-tight text-foreground">
              Um espaço pensado para acolher com leveza.
            </h3>
            <p className="mt-3 font-sans text-base leading-relaxed text-foreground/80">
              Av. Inspiração, 123 — Brasília, DF
              <br />
              Atendimento com hora marcada.
            </p>
          </div>

          <div className="relative min-h-[360px] max-h-[520px] overflow-hidden rounded-3xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3716.487845347694!2d-48.80556592395136!3d-21.331566685655554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94be6f6e5b4b8c9d%3A0x6b8b8b8b8b8b8b8b!2sR.%20Cel.%20Rel%C3%ADquias%20Guimar%C3%A3es%2C%2072%20-%20Vila%20Toninho%2C%20Santa%20Ad%C3%A9lia%20-%20SP%2C%2015950-000!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "360px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[20%] hover:grayscale-0 transition-all duration-500 rounded-[2rem]"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl pb-16">
        <div className="mb-6 space-y-2 text-center">
          <h3 className="font-serif text-3xl text-foreground md:text-4xl">
            Dúvidas Comuns
          </h3>
          <p className="font-sans text-base text-foreground/75">
            Respostas rápidas para você sentir segurança antes de agendar.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <details
              key={q}
              className="group rounded-2xl border border-white/50 bg-white/70 p-5 shadow-sm backdrop-blur-xl transition"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg text-foreground transition group-open:text-primary">
                {q}
                <span className="text-sm text-foreground/60 group-open:text-primary">
                  +
                </span>
              </summary>
              <p className="mt-3 font-sans text-sm leading-relaxed text-foreground/75">
                {a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="w-full relative overflow-hidden pt-24 pb-8 text-[var(--color-background)] bg-[var(--color-secondary)]">
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

