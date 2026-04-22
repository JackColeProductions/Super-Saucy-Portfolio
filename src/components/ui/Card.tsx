import * as React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, interactive = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl border border-white/[0.08] bg-surface/40 backdrop-blur-xl",
          "transition-all duration-300 ease-out",
          interactive &&
            "hover:border-primary/40 hover:shadow-glow-sm hover:-translate-y-0.5",
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";
