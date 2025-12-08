"use client";

import { motion } from "framer-motion";
import type { ButtonHTMLAttributes } from "react";

import { cn } from "../../lib/utils";

type MenuToggleProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  open: boolean;
  onToggle: () => void;
};

const lineVariants = {
  closedTop: { y: -4, rotate: 0 },
  openTop: { y: 0, rotate: 45 },
  closedBottom: { y: 4, rotate: 0 },
  openBottom: { y: 0, rotate: -45 },
};

const MenuToggle = ({ open, onToggle, className, ...rest }: MenuToggleProps) => {
  return (
    <button
      type="button"
      className={cn(
        "relative flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-200 hover:bg-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40",
        className
      )}
      aria-expanded={open}
      aria-pressed={open}
      aria-label={open ? "Fechar menu" : "Abrir menu"}
      onClick={onToggle}
      {...rest}
    >
      <motion.span
        className="absolute h-[2px] w-6 rounded-full bg-foreground"
        variants={lineVariants}
        initial="closedTop"
        animate={open ? "openTop" : "closedTop"}
        transition={{ type: "spring", stiffness: 280, damping: 20 }}
      />
      <motion.span
        className="absolute h-[2px] w-6 rounded-full bg-foreground"
        variants={lineVariants}
        initial="closedBottom"
        animate={open ? "openBottom" : "closedBottom"}
        transition={{ type: "spring", stiffness: 280, damping: 20 }}
      />
    </button>
  );
};

export default MenuToggle;


