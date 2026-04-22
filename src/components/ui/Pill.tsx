import * as React from "react";
import { cn } from "@/lib/utils";

interface PillProps extends React.HTMLAttributes<HTMLSpanElement> {
  dashes?: boolean;
}

export const Pill = React.forwardRef<HTMLSpanElement, PillProps>(
  ({ className, dashes = true, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em]",
          "text-primary-light",
          className
        )}
        {...props}
      >
        {dashes && <span aria-hidden="true">—</span>}
        <span>{children}</span>
        {dashes && <span aria-hidden="true">—</span>}
      </span>
    );
  }
);

Pill.displayName = "Pill";
