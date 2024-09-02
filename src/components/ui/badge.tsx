import { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded py-1 px-4 text-neutral-carbon",
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
