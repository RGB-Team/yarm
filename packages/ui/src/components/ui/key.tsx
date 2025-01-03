import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@yarm/ui/lib/utils";
import React from "react";

const keyVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
  {
    variants: {
      variant: {
        default: "text-base bg-letter/[12.5%] text-letter-foreground",
        primary: "bg-primary text-primary-foreground text-sm",
        secondary: "text-lg",
        outline: "text-base bg-transparent border border-letter/[12.5%]",
      },
      size: {
        sm: "h-6 px-1 min-w-6",
        md: "h-7 px-2 min-w-7",
        icon: "size-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "icon",
    },
  }
);

interface KeyProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof keyVariants> {}

const Key = React.forwardRef<HTMLDivElement, KeyProps>(
  ({ className, size, variant, children, ...props }, ref) => {
    return (
      <kbd
        ref={ref}
        className={cn(
          keyVariants({
            variant,
            size,
            className,
          })
        )}
        {...props}
      >
        {children}
      </kbd>
    );
  }
);

Key.displayName = "Key";

type KeySpaceProps = React.HTMLAttributes<HTMLDivElement>;

const KeySpace = React.forwardRef<HTMLDivElement, KeySpaceProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn("text-xs text-key font-medium", className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);

KeySpace.displayName = "KeySpace";

type KeyGroupProps = React.HTMLAttributes<HTMLDivElement>;

const KeyGroup = React.forwardRef<HTMLDivElement, KeyGroupProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex items-center gap-1", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

KeyGroup.displayName = "KeyGroup";

export { Key, keyVariants, KeyGroup, KeySpace };
