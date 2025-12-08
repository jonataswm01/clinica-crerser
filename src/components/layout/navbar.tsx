"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useMemo, useRef, useState } from "react";

import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import MenuToggle from "./menu-toggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/crianca", label: "Criança" },
  { href: "/adulto", label: "Adulto" },
  { href: "/casal", label: "Casal" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
] as const;

const listVariants = {
  open: {
    transition: { staggerChildren: 0.05, delayChildren: 0.05 },
  },
  closed: {},
};

const itemVariants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: 10 },
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  const accent = useMemo(() => {
    if (pathname?.startsWith("/crianca")) return "var(--color-primary)";
    if (pathname?.startsWith("/adulto")) return "var(--color-secondary)";
    if (pathname?.startsWith("/casal")) return "var(--color-tertiary)";
    return "var(--color-primary)";
  }, [pathname]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = lastY.current;
    const delta = latest - prev;
    lastY.current = latest;

    if (open) {
      setHidden(false);
      return;
    }

    if (latest > 50 && delta > 0) {
      setHidden(true);
    } else if (delta < 0) {
      setHidden(false);
    }
  });

  const handleToggle = useCallback(() => setOpen((prev) => !prev), []);
  const handleClose = useCallback(() => setOpen(false), []);

  const containerClasses = useMemo(
    () =>
      cn(
        "relative flex items-center overflow-hidden bg-white/50 backdrop-blur-2xl border border-white/40 px-4 transition-[padding,width,height] duration-220",
        open
          ? "w-[360px] md:w-[516px] rounded-3xl pt-5 pb-5 shadow-xl"
          : "h-14 w-[340px] md:w-[484px] rounded-full py-2 shadow-lg"
      ),
    [open]
  );

  return (
    <motion.nav
      className="fixed left-1/2 top-6 z-50 -translate-x-1/2"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: hidden ? "-120%" : 0, opacity: hidden ? 0 : 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
    >
      <motion.div
        layout
        className={containerClasses}
        style={{
          boxShadow: open
            ? `0 25px 70px -30px ${accent}55`
            : `0 18px 40px -24px ${accent}40`,
        }}
        transition={{ type: "spring", stiffness: 220, damping: 26, mass: 0.9 }}
      >
        {open && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 blur-3xl"
            style={{ background: `radial-gradient(circle at 30% 30%, ${accent}66, transparent 50%)` }}
            initial={{ scale: 0.95, opacity: 0.6 }}
            animate={{ scale: 1.05, opacity: 0.9 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          />
        )}
        <MenuToggle
          open={open}
          onToggle={handleToggle}
          className={cn("absolute right-3", open ? "top-3" : "top-1/2 -translate-y-1/2")}
        />

        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.div
              key="open"
              layout
              className="flex w-full flex-col items-center gap-3 pt-6 pb-1 pr-2"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <motion.div
                className="flex w-full flex-col items-center gap-2 text-center"
                variants={listVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {links.map((link) => (
                  <motion.div
                    key={link.href}
                    variants={itemVariants}
                    className="w-full"
                  >
                    <Link
                      href={link.href}
                      onClick={handleClose}
                      className="block w-full rounded-2xl px-3 py-2 font-serif text-2xl tracking-wide text-foreground transition-all duration-150 hover:bg-foreground/5 hover:italic"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
              <Button className="w-full justify-center" colorTheme="primary" onClick={handleClose}>
                Agendar
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key="closed"
              layout
              className="flex w-full items-center gap-3 pr-12"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/10 text-sm font-semibold text-foreground">
                CS
              </div>
              <div className="flex-1 text-center font-serif text-lg tracking-wide">
                Crer Ser
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;


