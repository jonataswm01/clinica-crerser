"use client";

import { ReactLenis } from "lenis/react";
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

