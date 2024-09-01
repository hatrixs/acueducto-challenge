import { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center transition-colors rounded py-1 px-4",
  {
    variants: {
      variant: {
        success: "bg-secondary-turquoise",
        warning: "bg-secondary-pastel",
        danger: "bg-secondary-coral",
      },
    },
    defaultVariants: {
      variant: "success",
    },
  },
);

export interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
