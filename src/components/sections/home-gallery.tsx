"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80",
];

const HomeGallery = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden px-0 py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 z-10 flex items-start justify-center pt-6">
        <div className="rounded-full bg-white/70 px-6 py-2 font-serif text-lg text-foreground shadow-lg backdrop-blur">
          Um refúgio de calma
        </div>
      </div>
      <div className="relative mt-12 md:mt-14">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, repeatType: "mirror", duration: 18, ease: "linear" }}
        >
          {[...images, ...images].map((src, idx) => {
            const isActive = hovered === idx;
            const isDim = hovered !== null && hovered !== idx;
            return (
              <motion.div
                key={`${src}-${idx}`}
                className={`relative h-56 w-80 flex-shrink-0 overflow-hidden rounded-[3rem] ${isDim ? "blur-[2px] md:blur-[3px]" : ""}`}
                whileHover={{ scale: 1.22, zIndex: 10 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                onHoverStart={() => setHovered(idx)}
                onHoverEnd={() => setHovered(null)}
              >
                <Image
                  src={src}
                  alt="Ambiente acolhedor da clínica"
                  fill
                  className="object-cover transition-transform duration-300 ease-out"
                />
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 to-transparent transition-all duration-200 ease-out ${
                    isActive ? "opacity-80 blur-[8px]" : "opacity-0"
                  }`}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HomeGallery;


