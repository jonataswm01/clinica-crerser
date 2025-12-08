"use client";

import type { ButtonHTMLAttributes, CSSProperties } from "react";
import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";
import MagneticWrapper from "../motion/magnetic-wrapper";

type ColorTheme = "primary" | "secondary" | "tertiary";
type ButtonVariant = "primary" | "outline" | "ghost";

const colorTokens: Record<ColorTheme, string> = {
  primary: "var(--color-primary)",
  secondary: "var(--color-secondary)",
  tertiary: "var(--color-tertiary)",
};

const buttonStyles = cva(
  "relative inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none",
  {
    variants: {
      size: {
        sm: "h-10 px-4 text-sm",
        md: "h-12 px-6 text-base",
        lg: "h-14 px-8 text-lg",
      },
      variant: {
        primary: "shadow-sm",
        outline: "border",
        ghost: "",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "primary",
    },
  }
);

const variantColorClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--btn-accent)] text-white hover:brightness-95 focus-visible:ring-[var(--btn-accent)]",
  outline:
    "border-[var(--btn-accent)] text-[var(--btn-accent)] hover:bg-[var(--btn-accent)] hover:text-white focus-visible:ring-[var(--btn-accent)]",
  ghost:
    "text-[var(--btn-accent)] hover:underline decoration-[var(--btn-accent)] focus-visible:ring-[var(--btn-accent)]",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles> & {
    colorTheme?: ColorTheme;
    magnetic?: boolean;
  };

type AccentStyle = CSSProperties & {
  ["--btn-accent"]?: string;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      colorTheme = "primary",
      magnetic = true,
      type = "button",
      style,
      children,
      ...rest
    },
    ref
  ) => {
    const accent = colorTokens[colorTheme];
    const resolvedVariant: ButtonVariant = variant ?? "primary";
    const shouldMagnetize = magnetic && resolvedVariant === "primary";
    const accentStyle: AccentStyle = {
      "--btn-accent": accent,
      ...style,
    };

    const buttonElement = (
      <button
        ref={ref}
        type={type}
        className={cn(
          buttonStyles({ variant: resolvedVariant, size }),
          variantColorClasses[resolvedVariant],
          className
        )}
        style={accentStyle}
        {...rest}
      >
        {children}
      </button>
    );

    if (!shouldMagnetize) {
      return buttonElement;
    }

    return <MagneticWrapper>{buttonElement}</MagneticWrapper>;
  }
);

Button.displayName = "Button";

export { Button, type ButtonProps };


