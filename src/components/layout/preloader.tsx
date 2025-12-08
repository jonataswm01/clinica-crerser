"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import { useAppStore } from "../../lib/store";

const trunkPath =
  "M50 90 Q50 70 50 50 Q50 30 50 10 M50 50 Q40 40 30 32 M50 50 Q60 40 70 32 M50 65 Q38 60 30 55 M50 65 Q62 60 70 55";

const leaves = [
  { cx: 30, cy: 30, r: 4, color: "var(--color-primary)" },
  { cx: 70, cy: 30, r: 5, color: "var(--color-secondary)" },
  { cx: 32, cy: 54, r: 5, color: "var(--color-primary)" },
  { cx: 68, cy: 54, r: 4, color: "var(--color-secondary)" },
  { cx: 50, cy: 12, r: 3.5, color: "var(--color-tertiary)" },
] as const;

const Preloader = () => {
  const { hasLoaded, setHasLoaded } = useAppStore();
  const [show, setShow] = useState(!hasLoaded);
  const [trunkDone, setTrunkDone] = useState(false);
  const [isSequenceFinished, setIsSequenceFinished] = useState(false);

  useEffect(() => {
    if (hasLoaded) setShow(false);
  }, [hasLoaded]);

  const leafVariants = useMemo<Variants>(
    () => ({
      hidden: { scale: 0, opacity: 0 },
      visible: {
        scale: 1,
        opacity: 1,
        transition: { type: "spring", stiffness: 320, damping: 18 },
      },
    }),
    []
  );

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--color-background)]"
          initial={{ opacity: 1 }}
          animate={isSequenceFinished ? { y: "-100%" } : { opacity: 1 }}
          transition={isSequenceFinished ? { duration: 0.8, ease: "easeInOut" } : {}}
          onAnimationComplete={(definition) => {
            if (definition === "animate" && isSequenceFinished) {
              setHasLoaded(true);
              setShow(false);
            }
          }}
        >
          <motion.div
            className="relative h-64 w-48"
            initial={{ scale: 1 }}
            animate={trunkDone ? { scale: 1.05 } : { scale: 1 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
          >
            <motion.svg viewBox="0 0 100 100" className="h-full w-full" fill="none">
              <motion.path
                d={trunkPath}
                stroke="var(--color-foreground)"
                strokeWidth={3}
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                onAnimationComplete={() => setTrunkDone(true)}
              />
              {trunkDone &&
                leaves.map((leaf, index) => (
                  <motion.circle
                    key={`${leaf.cx}-${leaf.cy}`}
                    cx={leaf.cx}
                    cy={leaf.cy}
                    r={leaf.r}
                    fill={leaf.color}
                    variants={leafVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.1 + index * 0.05 }}
                    onAnimationComplete={() => {
                      if (index === leaves.length - 1) {
                        setTimeout(() => setIsSequenceFinished(true), 200);
                      }
                    }}
                  />
                ))}
            </motion.svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;


