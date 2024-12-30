import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@yarm/ui/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-primary/[0.06] text-primary/90 hover:bg-secondary/80 hover:bg-primary/[0.16] hover:text-secondary",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80 ",
        outline:
          "border-white/20 text-white/70 hover:border-primary/[0.14] hover:bg-primary/[0.06] hover:text-outline/90 ",
      },

      rounded: {
        default: "rounded-md",
        pill: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      rounded: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, rounded, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, rounded }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
