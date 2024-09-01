import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { ScrollUpButton } from "@radix-ui/react-select";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export const SelectScrollUpButton = forwardRef<
  ElementRef<typeof ScrollUpButton>,
  ComponentPropsWithoutRef<typeof ScrollUpButton>
>(({ className, ...props }, ref) => (
  <ScrollUpButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1 text-[#D1D5DB]",
      className,
    )}
    {...props}
  >
    <ChevronUp />
  </ScrollUpButton>
));
SelectScrollUpButton.displayName = ScrollUpButton.displayName;
