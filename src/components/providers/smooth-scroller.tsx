"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import type { PropsWithChildren } from "react";

type SmoothScrollerProps = PropsWithChildren;

const SmoothScroller = ({ children }: SmoothScrollerProps) => {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2 }}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScroller;

