import type { HTMLAttributes } from "react";

import { cn } from "../../lib/utils";

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  hoverLift?: boolean;
};

const GlassCard = ({
  className,
  children,
  hoverLift = false,
  ...rest
}: GlassCardProps) => {
  return (
    <div
      className={cn(
        "bg-white/60 backdrop-blur-xl border border-white/40 shadow-sm rounded-glass",
        hoverLift && "transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default GlassCard;


