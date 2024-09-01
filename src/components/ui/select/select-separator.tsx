import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { Separator } from "@radix-ui/react-select";
import { cn } from "@/lib/utils";

export const SelectSeparator = forwardRef<
  ElementRef<typeof Separator>,
  ComponentPropsWithoutRef<typeof Separator>
>(({ className, ...props }, ref) => (
  <Separator
    ref={ref}
    className={cn("bg-muted -mx-1 my-1 h-px bg-neutral-cloud", className)}
    {...props}
  />
));

SelectSeparator.displayName = Separator.displayName;
