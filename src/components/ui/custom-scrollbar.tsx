"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const CustomScrollbar = () => {
  const { scrollYProgress } = useScroll();
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const [maxY, setMaxY] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current || !thumbRef.current) return;
      setMaxY(trackRef.current.clientHeight - thumbRef.current.clientHeight);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], [0, maxY]);

  return (
    <div className="pointer-events-none fixed inset-y-6 right-4 z-50 flex w-2 items-center">
      <div ref={trackRef} className="relative h-full w-full">
        <motion.div
          ref={thumbRef}
          style={{ y }}
          className="pointer-events-auto absolute inset-x-0 h-14 rounded-full bg-foreground/20 transition-colors duration-200 hover:bg-foreground/50"
        />
      </div>
    </div>
  );
};

export default CustomScrollbar;

