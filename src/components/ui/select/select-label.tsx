import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { Label } from "@radix-ui/react-select";
import { cn } from "@/lib/utils";

export const SelectLabel = forwardRef<
  ElementRef<typeof Label>,
  ComponentPropsWithoutRef<typeof Label>
>(({ className, ...props }, ref) => (
  <Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold text-[#D1D5DB]",
      className,
    )}
    {...props}
  />
));

SelectLabel.displayName = Label.displayName;
