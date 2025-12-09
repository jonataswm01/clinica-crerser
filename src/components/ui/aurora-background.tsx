"use client";

import { motion } from "framer-motion";
import type { HTMLAttributes } from "react";

import { cn } from "../../lib/utils";

type AuroraVariant = "default" | "kids" | "adult" | "couple";

type AuroraBackgroundProps = HTMLAttributes<HTMLDivElement> & {
  variant?: AuroraVariant;
};

const colorMap: Record<AuroraVariant, [string, string, string]> = {
  default: [
    "var(--color-primary)",
    "var(--color-secondary)",
    "var(--color-tertiary)",
  ],
  kids: [,
    "var(--color-primary)",
    "color-mix(in srgb, var(--color-primary) 70%, white 30%)",
    "color-mix(in srgb, var(--color-primary) 50%, var(--color-tertiary) 50%)",
  ],
  adult: [
    "var(--color-secondary)",
    "color-mix(in srgb, var(--color-secondary) 65%, white 35%)",
    "color-mix(in srgb, var(--color-secondary) 55%, var(--color-primary) 45%)",
  ],
  couple: [
    "var(--color-tertiary)",
    "color-mix(in srgb, var(--color-tertiary) 55%, var(--color-secondary) 45%)",
    "color-mix(in srgb, var(--color-tertiary) 60%, white 40%)",
  ],
};

const blobSettings = [
  {
    initial: { x: "-18vw", y: "-6vh", scale: 1 },
    animate: { x: "-8vw", y: "6vh", scale: 1.08 },
    duration: 22,
  },
  {
    initial: { x: "26vw", y: "-14vh", scale: 1.1 },
    animate: { x: "32vw", y: "-2vh", scale: 1.02 },
    duration: 26,
  },
  {
    initial: { x: "-4vw", y: "32vh", scale: 0.95 },
    animate: { x: "10vw", y: "38vh", scale: 1.07 },
    duration: 24,
  },
] as const;

const AuroraBackground = ({
  variant = "default",
  className,
  ...rest
}: AuroraBackgroundProps) => {
  const colors = colorMap[variant];

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
        className
      )}
      aria-hidden
      {...rest}
    >
      {colors.map((color, index) => {
        const { initial, animate, duration } = blobSettings[index];
        return (
          <motion.div
            key={color + index}
            className="absolute aspect-square w-[90vw] md:w-[60vw] max-w-[720px] blur-[80px] md:blur-[120px] opacity-80 md:opacity-60 will-change-transform"
            style={{
              background: `radial-gradient(circle at center, ${color} 0%, transparent 60%)`,
            }}
            initial={initial}
            animate={animate}
            transition={{
              duration,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};

export default AuroraBackground;


