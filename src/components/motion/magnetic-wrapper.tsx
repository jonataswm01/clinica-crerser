"use client";

import { useMotionValue, useSpring } from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";

import { cn } from "../../lib/utils";

type MagneticWrapperProps = {
  children: React.ReactNode;
  className?: string;
  radius?: number;
  strength?: number;
  disabled?: boolean;
};

const MagneticWrapper = ({
  children,
  className,
  radius = 120,
  strength = 0.35,
  disabled = false,
}: MagneticWrapperProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 280, damping: 22, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 280, damping: 22, mass: 0.6 });

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (disabled || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const distanceX = event.clientX - (rect.left + rect.width / 2);
    const distanceY = event.clientY - (rect.top + rect.height / 2);
    const distance = Math.hypot(distanceX, distanceY);

    if (distance < radius) {
      const pullX = (distanceX / rect.width) * strength * rect.width;
      const pullY = (distanceY / rect.height) * strength * rect.height;
      x.set(pullX);
      y.set(pullY);
    } else {
      reset();
    }
  };

  return (
    <motion.div
      ref={ref}
      className={cn("inline-flex", className)}
      style={{ x: springX, y: springY }}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
    >
      {children}
    </motion.div>
  );
};

export default MagneticWrapper;


