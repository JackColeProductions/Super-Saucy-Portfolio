import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
}

const base =
  "relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none";

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const variants: Record<Variant, string> = {
  primary: cn(
    "bg-gradient-primary text-white shadow-glow-sm",
    "hover:scale-[1.03] hover:shadow-glow-md active:scale-[0.98]"
  ),
  secondary: cn(
    "bg-white/5 text-white backdrop-blur-xl border border-white/10",
    "hover:bg-white/10 hover:border-primary/40 hover:scale-[1.03] hover:shadow-glow-sm",
    "active:scale-[0.98]"
  ),
  ghost: cn(
    "bg-transparent text-white/80 border border-transparent",
    "hover:text-white hover:bg-white/5 hover:scale-[1.02] active:scale-[0.98]"
  ),
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(base, sizes[size], variants[variant], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
